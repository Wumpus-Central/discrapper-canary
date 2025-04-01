n.d(t, { Z: () => E }), n(789020), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(533800),
    o = n(481060),
    l = n(447543),
    s = n(100527),
    c = n(906732),
    u = n(576306),
    d = n(857395),
    p = n(358555),
    m = n(955415),
    f = n(131704),
    h = n(630388),
    g = n(411198),
    _ = n(277707),
    b = n(358595),
    v = n(981631),
    x = n(388032),
    y = n(949862);
function E(e) {
    var t, E, O;
    let N,
        j,
        C,
        { onTransitionToInviteChannel: I, onAcceptInstantInvite: S, guild: T, invite: P, author: A, currentUserId: w } = e,
        Z = w === A.id,
        { channel: k, approximate_member_count: R, approximate_presence_count: D } = P,
        L = P.state === v.r2o.ACCEPTING,
        M = null != k ? (0, f.jD)(k) : null,
        W = null != T,
        U = null != M,
        F = null != M && M.isGuildVocal(),
        B = null != M && M.isGuildStageVoice(),
        G = (0, h.yE)(null !== (t = P.flags) && void 0 !== t ? t : 0, a.$.IS_GUEST_INVITE),
        H = null !== (E = null == T ? void 0 : T.hasFeature(v.oNc.HUB)) && void 0 !== E && E,
        V = (0, u.h)(),
        z = null == T ? void 0 : T.id,
        { analyticsLocations: K } = (0, c.ZP)(s.Z.INVITE_EMBED),
        [Y, X] = i.useState(!1),
        q = i.useCallback(() => X(!1), []),
        Q = i.useCallback(() => {
            let e = 'noop';
            V ? (X(!0), (e = 'show profile')) : W && (I(), (e = 'transition')), (0, l.CB)(z, e, K);
        }, [z, K, V, W, I]),
        J = i.useCallback(() => {
            let e = 'noop';
            W ? (I(), (e = 'transition')) : (S(), (e = 'accept')), (0, l.r$)(P, e, K);
        }, [P, K, W, I, S]);
    if (null == T) {
        if (null == P.guild) return (0, r.jsx)(b.Z, {});
        (T = g.Qs(P.guild)).premiumTier = null !== (O = P.guild.premium_tier) && void 0 !== O ? O : v.Eu4.NONE;
    }
    let $ = (0, _.e)({
        isVoiceChannel: F,
        isOwnInvite: Z,
        isGuest: G,
        isHubGuild: H,
        isStage: B,
        isStream: !1
    });
    return (
        (j = (0, r.jsxs)('span', {
            className: y.infoTitle,
            children: [
                (0, r.jsx)(d.Z, {
                    guildId: T.id,
                    name: T.name,
                    shouldShow: Y,
                    onRequestClose: q,
                    children: () => (0, r.jsx)(m.Z.GuildName, { guild: T })
                }),
                (0, r.jsx)('span', {
                    className: y.infoBadge,
                    children: (0, r.jsx)(p.Z, {
                        guild: T,
                        isBannerVisible: !1,
                        disableBoostClick: !0
                    })
                })
            ]
        })),
        G &&
            (C = (0, r.jsx)(o.DY3, {
                className: y.tooltipContainer,
                text: x.NW.string(x.t['/FeTKy']),
                children: (0, r.jsx)(o.d3s, {
                    size: 'md',
                    color: 'currentColor',
                    className: y.infoIcon
                })
            })),
        F
            ? ((j = (0, r.jsx)(m.Z.Channel, { channel: M })),
              (N = (0, r.jsxs)('span', {
                  className: y.infoTitle,
                  children: [
                      x.NW.format(x.t['2wimj4'], { guildName: T.name }),
                      (0, r.jsx)('span', {
                          className: y.infoBadge,
                          children: (0, r.jsx)(p.Z, {
                              guild: T,
                              isBannerVisible: !1
                          })
                      })
                  ]
              })))
            : (null != R && R >= 5) || (null != D && D > 0)
              ? (N = (0, r.jsx)(m.Z.Data, {
                    members: R,
                    membersOnline: D
                }))
              : U &&
                (N = (0, r.jsx)(m.Z.Channel, {
                    channel: M,
                    guild: T
                })),
        (0, r.jsxs)(m.Z, {
            children: [
                (0, r.jsx)(m.Z.GuildSplash, { guild: T }),
                (0, r.jsx)(m.Z.Header, {
                    text: $,
                    extra: C
                }),
                (0, r.jsxs)(m.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.headerLine,
                            children: [
                                (0, r.jsx)(m.Z.Icon, { guild: T }),
                                (0, r.jsx)(m.Z.Info, {
                                    title: j,
                                    onClick: Q,
                                    children: N
                                })
                            ]
                        }),
                        (0, r.jsx)(m.Z.Button, {
                            onClick: J,
                            submitting: L,
                            color: m.Z.Button.Colors.GREEN,
                            children: F ? (B ? x.NW.string(x.t['7vb2cX']) : x.NW.string(x.t.gpqgam)) : W ? x.NW.string(x.t.cEnaW1) : x.NW.string(x.t.XpeFYm)
                        })
                    ]
                }),
                T.hasFeature(v.oNc.HUB) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('div', { className: y.separator }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: x.NW.format(x.t['/o1IfH'], {
                                    onClick: () =>
                                        (0, o.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('95468'), n.e('59127')]).then(n.bind(n, 650233));
                                            return (t) =>
                                                (0, r.jsx)(
                                                    e,
                                                    (function (e) {
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
                                                                    var r;
                                                                    (r = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: r,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (e[t] = r);
                                                                });
                                                        }
                                                        return e;
                                                    })({}, t)
                                                );
                                        })
                                })
                            })
                        ]
                    })
            ]
        })
    );
}
