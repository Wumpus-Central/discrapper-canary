n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(239091),
    u = n(749210),
    m = n(493544),
    h = n(479531),
    g = n(118012),
    x = n(210887),
    p = n(246946),
    f = n(594174),
    C = n(251625),
    v = n(226951),
    _ = n(51144),
    I = n(434404),
    N = n(372454),
    T = n(999382),
    j = n(84613),
    b = n(740903),
    S = n(1080),
    E = n(981631),
    R = n(388032),
    y = n(488566),
    A = n(684309);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    let { transitionState: t, guild: n, user: l, ban: a, hideDiscriminator: s, onClose: o } = e,
        [d, m] = r.useState(!1),
        [x, p] = r.useState(null);
    async function f() {
        if (null != n) {
            p(null), m(!0);
            try {
                await u.Z.unbanUser(n.id, l.id), o();
            } catch (e) {
                p(new h.Z(e)), m(!1);
            }
        }
    }
    return (0, i.jsxs)(c.ModalRoot, {
        className: y.bannedUserModal,
        transitionState: t,
        children: [
            (0, i.jsxs)(c.ModalHeader, {
                className: y.header,
                separator: !1,
                children: [
                    (0, i.jsx)(g.Z, {
                        size: g.Z.Sizes.SIZE_24,
                        className: y.userUsername,
                        children: _.ZP.getUserTag(l, {
                            mode: 'username',
                            identifiable: s ? 'never' : 'always'
                        })
                    }),
                    s || l.isPomelo()
                        ? null
                        : (0, i.jsxs)(g.Z, {
                              size: g.Z.Sizes.SIZE_24,
                              className: y.userDiscrim,
                              children: ['#', l.discriminator]
                          })
                ]
            }),
            (0, i.jsxs)(c.ModalContent, {
                className: y.content,
                children: [
                    (0, i.jsx)(c.Text, {
                        className: y.reasonHeader,
                        variant: 'text-xs/normal',
                        children: R.intl.string(R.t['9Ki66O'])
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        children: null != a.reason && '' !== a.reason ? a.reason : R.intl.string(R.t['t+2Zcn'])
                    }),
                    null != x
                        ? (0, i.jsx)(c.Text, {
                              className: y.error,
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: x.getAnyErrorMessage()
                          })
                        : null
                ]
            }),
            (0, i.jsxs)(c.ModalFooter, {
                className: y.footer,
                children: [
                    (0, i.jsx)(c.Button, {
                        onClick: f,
                        look: c.Button.Looks.LINK,
                        color: c.Button.Colors.RED,
                        submitting: d,
                        children: R.intl.string(R.t.UPcIa2)
                    }),
                    (0, i.jsx)(c.Button, {
                        onClick: o,
                        children: R.intl.string(R.t.i4jeWV)
                    })
                ]
            })
        ]
    });
}
class D extends r.PureComponent {
    render() {
        let { user: e, hideDiscriminator: t, guild: n } = this.props;
        return (0, i.jsxs)(c.Clickable, {
            className: a()(y.bannedUser, A.card),
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, i.jsx)(c.Avatar, {
                    src: e.getAvatarURL(null == n ? void 0 : n.id, 40),
                    'aria-label': e.username,
                    size: c.AvatarSizes.SIZE_40,
                    className: y.bannedUserAvatar
                }),
                (0, i.jsxs)('div', {
                    className: y.username,
                    children: [
                        _.ZP.getUserTag(e, {
                            mode: 'username',
                            identifiable: t ? 'never' : 'always'
                        }),
                        !t &&
                            !e.isPomelo() &&
                            (0, i.jsxs)('span', {
                                className: y.discrim,
                                children: ['#', e.discriminator]
                            })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            Z(this, 'handleShowModal', () => {
                let { guild: e, user: t, hideDiscriminator: n, ban: r } = this.props;
                (0, c.openModal)((l) =>
                    (0, i.jsx)(L, {
                        ...l,
                        guild: e,
                        user: t,
                        ban: r,
                        hideDiscriminator: n
                    })
                );
            }),
            Z(this, 'handleContextMenu', (e) => {
                (0, d.jW)(e, async () => {
                    let { default: e } = await n.e('23835').then(n.bind(n, 768079));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            user: this.props.user
                        });
                });
            });
    }
}
class O extends r.PureComponent {
    makeFilter(e) {
        if (null == e || 0 === e.length) return (e) => null != e;
        {
            let t = RegExp('^'.concat(v.Z.escape(e)), 'i');
            return (n) => null != n && (n.id === e || t.test(n.username));
        }
    }
    render() {
        let { bans: e, guild: t, searchQuery: n } = this.props;
        if (null == t) return null;
        let r = this.getSortedBans(e, n);
        return (0, i.jsx)(m.Xi, {
            sections: [Math.max(1, r.length)],
            sectionHeight: this.getSectionHeight,
            renderSection: this.renderSection,
            rowHeight: this.getRowHeight,
            renderRow: this.renderRow
        });
    }
    handleModerationClick() {
        I.Z.setSection(E.pNK.SAFETY), (0, j.K)(b.u.DM_AND_SPAM_PROTECTION);
    }
    handleQueryChange(e) {
        I.Z.setSearchQuery(e);
    }
    handleQueryClear() {
        I.Z.setSearchQuery('');
    }
    constructor(...e) {
        super(...e),
            Z(
                this,
                'getSortedBans',
                (0, C.oH)((e, t) => {
                    if (null == e) return [];
                    let n = this.makeFilter(t),
                        i = [];
                    for (let t of e.keys()) {
                        let e = f.default.getUser(t);
                        null != e && n(e) && i.push(e);
                    }
                    return i.sort((e, t) => e.username.localeCompare(t.username));
                })
            ),
            Z(this, 'getRowHeight', (e, t) => {
                var n;
                if (e > 0) return 0;
                let { bans: i, searchQuery: r } = this.props,
                    l = this.getSortedBans(i, r);
                if (0 === l.length && 1 === t) return 56;
                let a = l[t],
                    s = null == i ? void 0 : i.get(null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : '');
                return null == a || null == s ? 0 : 56;
            }),
            Z(this, 'renderRow', (e) => {
                var t;
                let { section: n, row: r } = e,
                    { bans: l, streamerMode: a, guild: s, searchQuery: o } = this.props;
                if (n > 0) return null;
                if (null == l && 0 === r)
                    return (0, i.jsx)(
                        c.Spinner,
                        {
                            className: y.spinner,
                            type: c.Spinner.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let d = this.getSortedBans(l, o)[r],
                    u = null == l ? void 0 : l.get(null !== (t = null == d ? void 0 : d.id) && void 0 !== t ? t : '');
                if (null != d && null != u)
                    return (0, i.jsx)(
                        D,
                        {
                            user: d,
                            ban: u,
                            hideDiscriminator: a,
                            guild: s
                        },
                        d.id
                    );
            }),
            Z(this, 'getSectionHeight', (e) => {
                if (e > 0) return 0;
                let { bans: t } = this.props;
                return null == t ? 462 : 120;
            }),
            Z(this, 'renderSection', () => {
                var e;
                let t;
                let { bans: r, theme: l, searchQuery: a } = this.props;
                null == r
                    ? (t = null)
                    : (null == r ? void 0 : r.size) === 0 &&
                      (t = (0, i.jsxs)(c.EmptyState, {
                          theme: l,
                          className: y.emptyState,
                          children: [
                              (0, i.jsx)(c.EmptyStateImage, {
                                  darkSrc: n(532747),
                                  lightSrc: n(433466),
                                  width: 256,
                                  height: 212
                              }),
                              (0, i.jsx)(c.EmptyStateText, {
                                  note: R.intl.string(R.t.zfCsAw),
                                  style: { maxWidth: 300 },
                                  children: R.intl.string(R.t.ZEiY1N)
                              })
                          ]
                      }));
                let s = null !== (e = null == r ? void 0 : r.size) && void 0 !== e ? e : 0;
                return (0, i.jsxs)(
                    c.FormSection,
                    {
                        tag: c.FormTitleTags.H1,
                        title: R.intl.formatToPlainString(R.t['bW+JJy'], { bans: s }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: y.settingsHeader,
                                children: [
                                    (0, i.jsx)(c.FormText, {
                                        type: c.FormTextTypes.DESCRIPTION,
                                        className: y.description,
                                        children: R.intl.format(R.t.JcZ36u, { onModerationClick: this.handleModerationClick })
                                    }),
                                    null == t &&
                                        (0, i.jsx)(c.SearchBar, {
                                            className: y.searchBar,
                                            query: null != a ? a : '',
                                            placeholder: R.intl.string(R.t.rTL1RE),
                                            'aria-label': R.intl.string(R.t.rTL1RE),
                                            onChange: this.handleQueryChange,
                                            onClear: this.handleQueryClear
                                        })
                                ]
                            }),
                            (0, i.jsx)(c.FormDivider, { style: { marginBottom: -1 } }),
                            t
                        ]
                    },
                    'bans-header'
                );
            });
    }
}
let k = o.ZP.connectStores([T.Z, x.Z, p.Z], () => {
    let { bans: e, guild: t, searchQuery: n } = T.Z.getProps();
    return {
        searchQuery: null != n ? n : '',
        bans: e,
        guild: t,
        theme: x.Z.theme,
        streamerMode: p.Z.hidePersonalInformation
    };
})(O);
function P() {
    var e;
    let { guild: t } = (0, o.e7)([T.Z], () => T.Z.getProps(), [], s.isEqual),
        { enabled: n } = N.T.useExperiment(
            {
                guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : E.lds,
                location: '4d6318_1'
            },
            { autoTrackExposure: !0 }
        );
    return n ? (0, i.jsx)(S.Z, {}) : (0, i.jsx)(k, {});
}
