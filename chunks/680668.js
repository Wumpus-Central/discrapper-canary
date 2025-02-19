n.d(t, { Z: () => y }), n(789020), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(533800),
    o = n(481060),
    l = n(576306),
    s = n(857395),
    c = n(358555),
    d = n(955415),
    u = n(131704),
    p = n(630388),
    m = n(267642),
    f = n(411198),
    h = n(277707),
    g = n(358595),
    _ = n(981631),
    b = n(388032),
    v = n(217480);
function y(e) {
    var t, y;
    let x,
        O,
        E,
        { onTransitionToInviteChannel: j, onAcceptInstantInvite: N, guild: C, invite: I, author: S, currentUserId: P } = e,
        T = P === S.id,
        { channel: A, approximate_member_count: w, approximate_presence_count: Z } = I,
        k = I.state === _.r2o.ACCEPTING,
        R = null != A ? (0, u.jD)(A) : null,
        L = null != C,
        D = null != R,
        M = null != R && R.isGuildVocal(),
        W = null != R && R.isGuildStageVoice(),
        F = (0, p.yE)(null !== (t = I.flags) && void 0 !== t ? t : 0, a.$.IS_GUEST_INVITE),
        U = null !== (y = null == C ? void 0 : C.hasFeature(_.oNc.HUB)) && void 0 !== y && y,
        B = (0, l.h)(),
        [G, H] = i.useState(!1),
        V = i.useCallback(() => H(!0), []),
        z = i.useCallback(() => H(!1), []);
    if (null == C) {
        if (null == I.guild) return (0, r.jsx)(g.Z, {});
        C = f.Qs(I.guild);
        let e = (0, m.rF)(I.guild.premium_subscription_count, I.guild.id);
        C.premiumTier = e;
    }
    let K = L ? j : N,
        Y = (0, h.e)({
            isVoiceChannel: M,
            isOwnInvite: T,
            isGuest: F,
            isHubGuild: U,
            isStage: W,
            isStream: !1
        });
    return (
        (O = (0, r.jsxs)('span', {
            className: v.infoTitle,
            children: [
                (0, r.jsx)(s.Z, {
                    guildId: C.id,
                    name: C.name,
                    shouldShow: G,
                    onRequestClose: z,
                    children: () => (0, r.jsx)(d.Z.GuildName, { guild: C })
                }),
                (0, r.jsx)('span', {
                    className: v.infoBadge,
                    children: (0, r.jsx)(c.Z, {
                        guild: C,
                        isBannerVisible: !1,
                        disableBoostClick: !0
                    })
                })
            ]
        })),
        F &&
            (E = (0, r.jsx)(o.DY3, {
                className: v.tooltipContainer,
                text: b.NW.string(b.t['/FeTKy']),
                children: (0, r.jsx)(o.d3s, {
                    size: 'md',
                    color: 'currentColor',
                    className: v.infoIcon
                })
            })),
        M
            ? ((O = (0, r.jsx)(d.Z.Channel, { channel: R })),
              (x = (0, r.jsxs)('span', {
                  className: v.infoTitle,
                  children: [
                      b.NW.format(b.t['2wimj4'], { guildName: C.name }),
                      (0, r.jsx)('span', {
                          className: v.infoBadge,
                          children: (0, r.jsx)(c.Z, {
                              guild: C,
                              isBannerVisible: !1
                          })
                      })
                  ]
              })))
            : (null != w && w >= 5) || (null != Z && Z > 0)
              ? (x = (0, r.jsx)(d.Z.Data, {
                    members: w,
                    membersOnline: Z
                }))
              : D &&
                (x = (0, r.jsx)(d.Z.Channel, {
                    channel: R,
                    guild: C
                })),
        (0, r.jsxs)(d.Z, {
            children: [
                (0, r.jsx)(d.Z.GuildSplash, { guild: C }),
                (0, r.jsx)(d.Z.Header, {
                    text: Y,
                    extra: E
                }),
                (0, r.jsxs)(d.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: v.headerLine,
                            children: [
                                (0, r.jsx)(d.Z.Icon, { guild: C }),
                                (0, r.jsx)(d.Z.Info, {
                                    title: O,
                                    onClick: B ? V : L ? K : null,
                                    children: x
                                })
                            ]
                        }),
                        (0, r.jsx)(d.Z.Button, {
                            onClick: K,
                            submitting: k,
                            color: d.Z.Button.Colors.GREEN,
                            children: M ? (W ? b.NW.string(b.t['7vb2cX']) : b.NW.string(b.t.gpqgam)) : L ? b.NW.string(b.t.cEnaW1) : b.NW.string(b.t.XpeFYm)
                        })
                    ]
                }),
                C.hasFeature(_.oNc.HUB) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('div', { className: v.separator }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: b.NW.format(b.t['/o1IfH'], {
                                    onClick: () =>
                                        (0, o.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('95468'), n.e('26812')]).then(n.bind(n, 650233));
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
