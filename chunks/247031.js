n.d(t, { Z: () => P }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(239091),
    u = n(749210),
    m = n(493544),
    h = n(479531),
    g = n(118012),
    x = n(210887),
    p = n(246946),
    _ = n(594174),
    C = n(251625),
    f = n(226951),
    v = n(51144),
    N = n(434404),
    j = n(372454),
    I = n(999382),
    E = n(84613),
    b = n(740903),
    T = n(1080),
    S = n(981631),
    R = n(388032),
    Z = n(455561),
    y = n(730533);
function A(e, t, n) {
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
    let { transitionState: t, guild: n, user: l, ban: s, hideDiscriminator: a, onClose: o } = e,
        [d, m] = r.useState(!1),
        [x, p] = r.useState(null);
    async function _() {
        if (null != n) {
            p(null), m(!0);
            try {
                await u.Z.unbanUser(n.id, l.id), o();
            } catch (e) {
                p(new h.Z(e)), m(!1);
            }
        }
    }
    return (0, i.jsxs)(c.Y0X, {
        className: Z.bannedUserModal,
        transitionState: t,
        children: [
            (0, i.jsxs)(c.xBx, {
                className: Z.header,
                separator: !1,
                children: [
                    (0, i.jsx)(g.Z, {
                        size: g.Z.Sizes.SIZE_24,
                        className: Z.userUsername,
                        children: v.ZP.getUserTag(l, {
                            mode: 'username',
                            identifiable: a ? 'never' : 'always'
                        })
                    }),
                    a || l.isPomelo()
                        ? null
                        : (0, i.jsxs)(g.Z, {
                              size: g.Z.Sizes.SIZE_24,
                              className: Z.userDiscrim,
                              children: ['#', l.discriminator]
                          })
                ]
            }),
            (0, i.jsxs)(c.hzk, {
                className: Z.content,
                children: [
                    (0, i.jsx)(c.Text, {
                        className: Z.reasonHeader,
                        variant: 'text-xs/normal',
                        children: R.intl.string(R.t['9Ki66O'])
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        children: null != s.reason && '' !== s.reason ? s.reason : R.intl.string(R.t['t+2Zcn'])
                    }),
                    null != x
                        ? (0, i.jsx)(c.Text, {
                              className: Z.error,
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: x.getAnyErrorMessage()
                          })
                        : null
                ]
            }),
            (0, i.jsxs)(c.mzw, {
                className: Z.footer,
                children: [
                    (0, i.jsx)(c.zxk, {
                        onClick: _,
                        look: c.zxk.Looks.LINK,
                        color: c.zxk.Colors.RED,
                        submitting: d,
                        children: R.intl.string(R.t.UPcIa2)
                    }),
                    (0, i.jsx)(c.zxk, {
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
        return (0, i.jsxs)(c.P3F, {
            className: s()(Z.bannedUser, y.card),
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, i.jsx)(c.qEK, {
                    src: e.getAvatarURL(null == n ? void 0 : n.id, 40),
                    'aria-label': e.username,
                    size: c.EFr.SIZE_40,
                    className: Z.bannedUserAvatar
                }),
                (0, i.jsxs)('div', {
                    className: Z.username,
                    children: [
                        v.ZP.getUserTag(e, {
                            mode: 'username',
                            identifiable: t ? 'never' : 'always'
                        }),
                        !t &&
                            !e.isPomelo() &&
                            (0, i.jsxs)('span', {
                                className: Z.discrim,
                                children: ['#', e.discriminator]
                            })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            A(this, 'handleShowModal', () => {
                let { guild: e, user: t, hideDiscriminator: n, ban: r } = this.props;
                (0, c.h7j)((l) =>
                    (0, i.jsx)(L, {
                        ...l,
                        guild: e,
                        user: t,
                        ban: r,
                        hideDiscriminator: n
                    })
                );
            }),
            A(this, 'handleContextMenu', (e) => {
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
            let t = RegExp('^'.concat(f.Z.escape(e)), 'i');
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
        N.Z.setSection(S.pNK.SAFETY), (0, E.K)(b.u.DM_AND_SPAM_PROTECTION);
    }
    handleQueryChange(e) {
        N.Z.setSearchQuery(e);
    }
    handleQueryClear() {
        N.Z.setSearchQuery('');
    }
    constructor(...e) {
        super(...e),
            A(
                this,
                'getSortedBans',
                (0, C.oH)((e, t) => {
                    if (null == e) return [];
                    let n = this.makeFilter(t),
                        i = [];
                    for (let t of e.keys()) {
                        let e = _.default.getUser(t);
                        null != e && n(e) && i.push(e);
                    }
                    return i.sort((e, t) => e.username.localeCompare(t.username));
                })
            ),
            A(this, 'getRowHeight', (e, t) => {
                var n;
                if (e > 0) return 0;
                let { bans: i, searchQuery: r } = this.props,
                    l = this.getSortedBans(i, r);
                if (0 === l.length && 1 === t) return 56;
                let s = l[t],
                    a = null == i ? void 0 : i.get(null !== (n = null == s ? void 0 : s.id) && void 0 !== n ? n : '');
                return null == s || null == a ? 0 : 56;
            }),
            A(this, 'renderRow', (e) => {
                var t;
                let { section: n, row: r } = e,
                    { bans: l, streamerMode: s, guild: a, searchQuery: o } = this.props;
                if (n > 0) return null;
                if (null == l && 0 === r)
                    return (0, i.jsx)(
                        c.$jN,
                        {
                            className: Z.spinner,
                            type: c.$jN.Type.SPINNING_CIRCLE
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
                            hideDiscriminator: s,
                            guild: a
                        },
                        d.id
                    );
            }),
            A(this, 'getSectionHeight', (e) => {
                if (e > 0) return 0;
                let { bans: t } = this.props;
                return null == t ? 462 : 120;
            }),
            A(this, 'renderSection', () => {
                var e;
                let t;
                let { bans: r, theme: l, searchQuery: s } = this.props;
                null == r
                    ? (t = null)
                    : (null == r ? void 0 : r.size) === 0 &&
                      (t = (0, i.jsxs)(c.ubH, {
                          theme: l,
                          className: Z.emptyState,
                          children: [
                              (0, i.jsx)(c.oxh, {
                                  darkSrc: n(532747),
                                  lightSrc: n(433466),
                                  width: 256,
                                  height: 212
                              }),
                              (0, i.jsx)(c.OZU, {
                                  note: R.intl.string(R.t.zfCsAw),
                                  style: { maxWidth: 300 },
                                  children: R.intl.string(R.t.ZEiY1N)
                              })
                          ]
                      }));
                let a = null !== (e = null == r ? void 0 : r.size) && void 0 !== e ? e : 0;
                return (0, i.jsxs)(
                    c.hjN,
                    {
                        tag: c.RB0.H1,
                        title: R.intl.formatToPlainString(R.t['bW+JJy'], { bans: a }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: Z.settingsHeader,
                                children: [
                                    (0, i.jsx)(c.R94, {
                                        type: c.geA.DESCRIPTION,
                                        className: Z.description,
                                        children: R.intl.format(R.t.JcZ36u, { onModerationClick: this.handleModerationClick })
                                    }),
                                    null == t &&
                                        (0, i.jsx)(c.E1j, {
                                            className: Z.searchBar,
                                            query: null != s ? s : '',
                                            placeholder: R.intl.string(R.t.rTL1RE),
                                            'aria-label': R.intl.string(R.t.rTL1RE),
                                            onChange: this.handleQueryChange,
                                            onClear: this.handleQueryClear
                                        })
                                ]
                            }),
                            (0, i.jsx)(c.$i$, { style: { marginBottom: -1 } }),
                            t
                        ]
                    },
                    'bans-header'
                );
            });
    }
}
let k = o.ZP.connectStores([I.Z, x.Z, p.Z], () => {
    let { bans: e, guild: t, searchQuery: n } = I.Z.getProps();
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
    let { guild: t } = (0, o.e7)([I.Z], () => I.Z.getProps(), [], a.isEqual),
        { enabled: n } = j.T.useExperiment(
            {
                guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : S.lds,
                location: '4d6318_1'
            },
            { autoTrackExposure: !0 }
        );
    return n ? (0, i.jsx)(T.Z, {}) : (0, i.jsx)(k, {});
}
