n.d(t, { Z: () => L }), n(47120), n(474991), n(398202), n(301563), n(653041), n(230036), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(239091),
    u = n(749210),
    m = n(493544),
    g = n(479531),
    p = n(118012),
    h = n(210887),
    f = n(246946),
    b = n(594174),
    x = n(251625),
    j = n(226951),
    N = n(51144),
    _ = n(434404),
    v = n(372454),
    C = n(999382),
    O = n(84613),
    y = n(740903),
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
    let { transitionState: t, guild: n, user: s, ban: a, hideDiscriminator: l, onClose: o } = e,
        [d, m] = i.useState(!1),
        [h, f] = i.useState(null);
    async function b() {
        if (null != n) {
            f(null), m(!0);
            try {
                await u.Z.unbanUser(n.id, s.id), o();
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
                        children: N.ZP.getUserTag(s, {
                            mode: 'username',
                            identifiable: l ? 'never' : 'always'
                        })
                    }),
                    l || s.isPomelo()
                        ? null
                        : (0, r.jsxs)(p.Z, {
                              size: p.Z.Sizes.SIZE_24,
                              className: T.userDiscrim,
                              children: ['#', s.discriminator]
                          })
                ]
            }),
            (0, r.jsxs)(c.hzk, {
                className: T.content,
                children: [
                    (0, r.jsx)(c.Text, {
                        className: T.reasonHeader,
                        variant: 'text-xs/normal',
                        children: S.NW.string(S.t['9Ki66O'])
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        children: null != a.reason && '' !== a.reason ? a.reason : S.NW.string(S.t['t+2Zcn'])
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
                        onClick: b,
                        look: c.zxk.Looks.LINK,
                        color: c.zxk.Colors.RED,
                        submitting: d,
                        children: S.NW.string(S.t.UPcIa2)
                    }),
                    (0, r.jsx)(c.zxk, {
                        onClick: o,
                        children: S.NW.string(S.t.i4jeWV)
                    })
                ]
            })
        ]
    });
}
class A extends i.PureComponent {
    render() {
        let { user: e, hideDiscriminator: t, guild: n } = this.props;
        return (0, r.jsxs)(c.P3F, {
            className: a()(T.bannedUser, P.card),
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
                        N.ZP.getUserTag(e, {
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
                (0, c.h7j)((s) =>
                    (0, r.jsx)(
                        D,
                        Z(R({}, s), {
                            guild: e,
                            user: t,
                            ban: i,
                            hideDiscriminator: n
                        })
                    )
                );
            }),
            w(this, 'handleContextMenu', (e) => {
                (0, d.jW)(e, async () => {
                    let { default: e } = await n.e('23835').then(n.bind(n, 768079));
                    return (t) => (0, r.jsx)(e, Z(R({}, t), { user: this.props.user }));
                });
            });
    }
}
class k extends i.PureComponent {
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
        _.Z.setSection(E.pNK.SAFETY), (0, O.K)(y.u.DM_AND_SPAM_PROTECTION);
    }
    handleQueryChange(e) {
        _.Z.setSearchQuery(e);
    }
    handleQueryClear() {
        _.Z.setSearchQuery('');
    }
    constructor(...e) {
        super(...e),
            w(
                this,
                'getSortedBans',
                (0, x.oH)((e, t) => {
                    if (null == e) return [];
                    let n = this.makeFilter(t),
                        r = [];
                    for (let t of e.keys()) {
                        let e = b.default.getUser(t);
                        null != e && n(e) && r.push(e);
                    }
                    return r.sort((e, t) => e.username.localeCompare(t.username));
                })
            ),
            w(this, 'getRowHeight', (e, t) => {
                var n;
                if (e > 0) return 0;
                let { bans: r, searchQuery: i } = this.props,
                    s = this.getSortedBans(r, i);
                if (0 === s.length && 1 === t) return 56;
                let a = s[t],
                    l = null == r ? void 0 : r.get(null != (n = null == a ? void 0 : a.id) ? n : '');
                return 56 * (null != a && null != l);
            }),
            w(this, 'renderRow', (e) => {
                var t;
                let { section: n, row: i } = e,
                    { bans: s, streamerMode: a, guild: l, searchQuery: o } = this.props;
                if (n > 0) return null;
                if (null == s && 0 === i)
                    return (0, r.jsx)(
                        c.$jN,
                        {
                            className: T.spinner,
                            type: c.$jN.Type.SPINNING_CIRCLE
                        },
                        'spinner'
                    );
                let d = this.getSortedBans(s, o)[i],
                    u = null == s ? void 0 : s.get(null != (t = null == d ? void 0 : d.id) ? t : '');
                if (null != d && null != u)
                    return (0, r.jsx)(
                        A,
                        {
                            user: d,
                            ban: u,
                            hideDiscriminator: a,
                            guild: l
                        },
                        d.id
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
                    { bans: i, theme: s, searchQuery: a } = this.props;
                null == i
                    ? (t = null)
                    : (null == i ? void 0 : i.size) === 0 &&
                      (t = (0, r.jsxs)(c.ubH, {
                          theme: s,
                          className: T.emptyState,
                          children: [
                              (0, r.jsx)(c.oxh, {
                                  darkSrc: n(532747),
                                  lightSrc: n(433466),
                                  width: 256,
                                  height: 212
                              }),
                              (0, r.jsx)(c.OZU, {
                                  note: S.NW.string(S.t.zfCsAw),
                                  style: { maxWidth: 300 },
                                  children: S.NW.string(S.t.ZEiY1N)
                              })
                          ]
                      }));
                let l = null != (e = null == i ? void 0 : i.size) ? e : 0;
                return (0, r.jsxs)(
                    c.hjN,
                    {
                        tag: c.RB0.H1,
                        title: S.NW.formatToPlainString(S.t['bW+JJy'], { bans: l }),
                        children: [
                            (0, r.jsxs)('div', {
                                className: T.settingsHeader,
                                children: [
                                    (0, r.jsx)(c.R94, {
                                        type: c.geA.DESCRIPTION,
                                        className: T.description,
                                        children: S.NW.format(S.t.JcZ36u, { onModerationClick: this.handleModerationClick })
                                    }),
                                    null == t &&
                                        (0, r.jsx)(c.E1j, {
                                            className: T.searchBar,
                                            query: null != a ? a : '',
                                            placeholder: S.NW.string(S.t.rTL1RE),
                                            'aria-label': S.NW.string(S.t.rTL1RE),
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
let W = o.ZP.connectStores([C.Z, h.Z, f.Z], () => {
    let { bans: e, guild: t, searchQuery: n } = C.Z.getProps();
    return {
        searchQuery: null != n ? n : '',
        bans: e,
        guild: t,
        theme: h.Z.theme,
        streamerMode: f.Z.hidePersonalInformation
    };
})(k);
function L() {
    var e;
    let { guild: t } = (0, o.e7)([C.Z], () => C.Z.getProps(), [], l.isEqual),
        { enabled: n } = v.T.useExperiment(
            {
                guildId: null != (e = null == t ? void 0 : t.id) ? e : E.lds,
                location: '4d6318_1'
            },
            { autoTrackExposure: !0 }
        );
    return n ? (0, r.jsx)(I.Z, {}) : (0, r.jsx)(W, {});
}
