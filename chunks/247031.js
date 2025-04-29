n.d(t, { Z: () => M }), n(388685), n(413496), n(433524), n(35282), n(539854), n(642613), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(749210),
    m = n(493544),
    g = n(479531),
    p = n(118012),
    h = n(210887),
    f = n(246946),
    x = n(594174),
    b = n(251625),
    j = n(226951),
    _ = n(51144),
    v = n(434404),
    O = n(372454),
    C = n(999382),
    y = n(84613),
    N = n(740903),
    I = n(1080),
    E = n(981631),
    S = n(388032),
    T = n(69214),
    P = n(588866);
function w(e, t, n) {
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
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    let { transitionState: t, guild: n, user: l, ban: s, hideDiscriminator: a, onClose: o } = e,
        [u, m] = i.useState(!1),
        [h, f] = i.useState(null);
    async function x() {
        if (null != n) {
            f(null), m(!0);
            try {
                await d.Z.unbanUser(n.id, l.id), o();
            } catch (e) {
                f(new g.Z(e)), m(!1);
            }
        }
    }
    return (0, r.jsxs)(c.Y0X, {
        className: T.bannedUserModal,
        transitionState: t,
        children: [
            (0, r.jsxs)(c.xBx, {
                className: T.header,
                separator: !1,
                children: [
                    (0, r.jsx)(p.Z, {
                        size: p.Z.Sizes.SIZE_24,
                        className: T.userUsername,
                        children: _.ZP.getUserTag(l, {
                            mode: 'username',
                            identifiable: a ? 'never' : 'always'
                        })
                    }),
                    a || l.isPomelo()
                        ? null
                        : (0, r.jsxs)(p.Z, {
                              size: p.Z.Sizes.SIZE_24,
                              className: T.userDiscrim,
                              children: ['#', l.discriminator]
                          })
                ]
            }),
            (0, r.jsxs)(c.hzk, {
                className: T.content,
                children: [
                    (0, r.jsx)(c.Text, {
                        className: T.reasonHeader,
                        variant: 'text-xs/normal',
                        children: S.intl.string(S.t['9Ki66O'])
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        children: null != s.reason && '' !== s.reason ? s.reason : S.intl.string(S.t['t+2Zcn'])
                    }),
                    null != h
                        ? (0, r.jsx)(c.Text, {
                              className: T.error,
                              color: 'text-danger',
                              variant: 'text-sm/normal',
                              children: h.getAnyErrorMessage()
                          })
                        : null
                ]
            }),
            (0, r.jsxs)(c.mzw, {
                className: T.footer,
                children: [
                    (0, r.jsx)(c.zxk, {
                        onClick: x,
                        look: c.zxk.Looks.LINK,
                        color: c.zxk.Colors.RED,
                        submitting: u,
                        children: S.intl.string(S.t.UPcIa2)
                    }),
                    (0, r.jsx)(c.zxk, {
                        onClick: o,
                        children: S.intl.string(S.t.i4jeWV)
                    })
                ]
            })
        ]
    });
}
class k extends i.PureComponent {
    render() {
        let { user: e, hideDiscriminator: t, guild: n } = this.props;
        return (0, r.jsxs)(c.P3F, {
            className: s()(T.bannedUser, P.card),
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [
                (0, r.jsx)(c.qEK, {
                    src: e.getAvatarURL(null == n ? void 0 : n.id, 40),
                    'aria-label': e.username,
                    size: c.EFr.SIZE_40,
                    className: T.bannedUserAvatar
                }),
                (0, r.jsxs)('div', {
                    className: T.username,
                    children: [
                        _.ZP.getUserTag(e, {
                            mode: 'username',
                            identifiable: t ? 'never' : 'always'
                        }),
                        !t &&
                            !e.isPomelo() &&
                            (0, r.jsxs)('span', {
                                className: T.discrim,
                                children: ['#', e.discriminator]
                            })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            w(this, 'handleShowModal', () => {
                let { guild: e, user: t, hideDiscriminator: n, ban: i } = this.props;
                (0, c.h7j)((l) =>
                    (0, r.jsx)(
                        D,
                        Z(R({}, l), {
                            guild: e,
                            user: t,
                            ban: i,
                            hideDiscriminator: n
                        })
                    )
                );
            }),
            w(this, 'handleContextMenu', (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e('23835').then(n.bind(n, 768079));
                    return (t) => (0, r.jsx)(e, Z(R({}, t), { user: this.props.user }));
                });
            });
    }
}
class A extends i.PureComponent {
    makeFilter(e) {
        if (null == e || 0 === e.length) return (e) => null != e;
        {
            let t = RegExp('^'.concat(j.Z.escape(e)), 'i');
            return (n) => null != n && (n.id === e || t.test(n.username));
        }
    }
    render() {
        let { bans: e, guild: t, searchQuery: n } = this.props;
        if (null == t) return null;
        let i = this.getSortedBans(e, n);
        return (0, r.jsx)(m.Xi, {
            sections: [Math.max(1, i.length)],
            sectionHeight: this.getSectionHeight,
            renderSection: this.renderSection,
            rowHeight: this.getRowHeight,
            renderRow: this.renderRow
        });
    }
    handleModerationClick() {
        v.Z.setSection(E.pNK.SAFETY), (0, y.K)(N.u.DM_AND_SPAM_PROTECTION);
    }
    handleQueryChange(e) {
        v.Z.setSearchQuery(e);
    }
    handleQueryClear() {
        v.Z.setSearchQuery('');
    }
    constructor(...e) {
        super(...e),
            w(
                this,
                'getSortedBans',
                (0, b.oH)((e, t) => {
                    if (null == e) return [];
                    let n = this.makeFilter(t),
                        r = [];
                    for (let t of e.keys()) {
                        let e = x.default.getUser(t);
                        null != e && n(e) && r.push(e);
                    }
                    return r.sort((e, t) => e.username.localeCompare(t.username));
                })
            ),
            w(this, 'getRowHeight', (e, t) => {
                var n;
                if (e > 0) return 0;
                let { bans: r, searchQuery: i } = this.props,
                    l = this.getSortedBans(r, i);
                if (0 === l.length && 1 === t) return 56;
                let s = l[t],
                    a = null == r ? void 0 : r.get(null != (n = null == s ? void 0 : s.id) ? n : '');
                return 56 * (null != s && null != a);
            }),
            w(this, 'renderRow', (e) => {
                var t;
                let { section: n, row: i } = e,
                    { bans: l, streamerMode: s, guild: a, searchQuery: o } = this.props;
                if (n > 0) return null;
                if (null == l && 0 === i)
                    return (0, r.jsx)(
                        c.$jN,
                        {
                            className: T.spinner,
                            type: c.$jN.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let u = this.getSortedBans(l, o)[i],
                    d = null == l ? void 0 : l.get(null != (t = null == u ? void 0 : u.id) ? t : '');
                if (null != u && null != d)
                    return (0, r.jsx)(
                        k,
                        {
                            user: u,
                            ban: d,
                            hideDiscriminator: s,
                            guild: a
                        },
                        u.id
                    );
            }),
            w(this, 'getSectionHeight', (e) => {
                if (e > 0) return 0;
                let { bans: t } = this.props;
                return null == t ? 462 : 120;
            }),
            w(this, 'renderSection', () => {
                var e;
                let t,
                    { bans: i, theme: l, searchQuery: s } = this.props;
                null == i
                    ? (t = null)
                    : (null == i ? void 0 : i.size) === 0 &&
                      (t = (0, r.jsxs)(c.ubH, {
                          theme: l,
                          className: T.emptyState,
                          children: [
                              (0, r.jsx)(c.oxh, {
                                  darkSrc: n(532747),
                                  lightSrc: n(433466),
                                  width: 256,
                                  height: 212
                              }),
                              (0, r.jsx)(c.OZU, {
                                  note: S.intl.string(S.t.zfCsAw),
                                  style: { maxWidth: 300 },
                                  children: S.intl.string(S.t.ZEiY1N)
                              })
                          ]
                      }));
                let a = null != (e = null == i ? void 0 : i.size) ? e : 0;
                return (0, r.jsxs)(
                    c.hjN,
                    {
                        tag: c.RB0.H1,
                        title: S.intl.formatToPlainString(S.t['bW+JJy'], { bans: a }),
                        children: [
                            (0, r.jsxs)('div', {
                                className: T.settingsHeader,
                                children: [
                                    (0, r.jsx)(c.R94, {
                                        type: c.geA.DESCRIPTION,
                                        className: T.description,
                                        children: S.intl.format(S.t.JcZ36u, { onModerationClick: this.handleModerationClick })
                                    }),
                                    null == t &&
                                        (0, r.jsx)(c.E1j, {
                                            className: T.searchBar,
                                            query: null != s ? s : '',
                                            placeholder: S.intl.string(S.t.rTL1RE),
                                            'aria-label': S.intl.string(S.t.rTL1RE),
                                            onChange: this.handleQueryChange,
                                            onClear: this.handleQueryClear
                                        })
                                ]
                            }),
                            (0, r.jsx)(c.$i$, { style: { marginBottom: -1 } }),
                            t
                        ]
                    },
                    'bans-header'
                );
            });
    }
}
let L = o.ZP.connectStores([C.Z, h.Z, f.Z], () => {
    let { bans: e, guild: t, searchQuery: n } = C.Z.getProps();
    return {
        searchQuery: null != n ? n : '',
        bans: e,
        guild: t,
        theme: h.Z.theme,
        streamerMode: f.Z.hidePersonalInformation
    };
})(A);
function M() {
    var e;
    let { guild: t } = (0, o.e7)([C.Z], () => C.Z.getProps(), [], a.isEqual),
        { enabled: n } = O.T.useExperiment(
            {
                guildId: null != (e = null == t ? void 0 : t.id) ? e : E.lds,
                location: '4d6318_1'
            },
            { autoTrackExposure: !0 }
        );
    return n ? (0, r.jsx)(I.Z, {}) : (0, r.jsx)(L, {});
}
