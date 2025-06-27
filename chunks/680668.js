n.d(t, { Z: () => E }), n(997841), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(533800),
    a = n(481060),
    o = n(447543),
    s = n(100527),
    c = n(906732),
    u = n(857395),
    d = n(358555),
    p = n(955415),
    m = n(131704),
    f = n(630388),
    h = n(411198),
    g = n(277707),
    _ = n(358595),
    b = n(981631),
    x = n(388032),
    y = n(273254);
function E(e) {
    var t, E, v;
    let C,
        O,
        j,
        { onTransitionToInviteChannel: S, onAcceptInstantInvite: I, guild: T, invite: N, message: P, currentUserId: A } = e,
        w = A === P.author.id,
        { channel: Z, approximate_member_count: R, approximate_presence_count: k } = N,
        L = N.state === b.r2o.ACCEPTING,
        D = null != Z ? (0, m.jD)(Z) : null,
        M = null != T,
        U = null != D,
        F = null != D && D.isGuildVocal(),
        B = null != D && D.isGuildStageVoice(),
        G = (0, f.yE)(null != (t = N.flags) ? t : 0, l.$.IS_GUEST_INVITE),
        H = null != (E = null == T ? void 0 : T.hasFeature(b.oNc.HUB)) && E,
        V = null == T ? void 0 : T.id,
        { analyticsLocations: z } = (0, c.ZP)(s.Z.INVITE_EMBED),
        [W, K] = i.useState(!1),
        Y = i.useCallback(() => K(!1), []),
        X = i.useRef(null),
        q = i.useCallback(() => {
            K(!0), (0, o.CB)(V, 'show profile', z);
        }, [V, z]),
        Q = i.useCallback(() => {
            let e = 'noop';
            M ? (S(), (e = 'transition')) : (I(), (e = 'accept')),
                (0, o.r$)(
                    {
                        invite: N,
                        action: e,
                        inviter_id: P.author.id,
                        invite_message_id: P.id
                    },
                    z
                );
        }, [N, P, z, M, S, I]);
    if (null == T) {
        if (null == N.guild) return (0, r.jsx)(_.Z, {});
        (T = h.Qs(N.guild)).premiumTier = null != (v = N.guild.premium_tier) ? v : b.Eu4.NONE;
    }
    let J = (0, g.e)({
        isVoiceChannel: F,
        isOwnInvite: w,
        isGuest: G,
        isHubGuild: H,
        isStage: B,
        isStream: !1
    });
    return (
        (O = (0, r.jsxs)('span', {
            className: y.infoTitle,
            children: [
                (0, r.jsx)(u.Z, {
                    guildId: T.id,
                    name: T.name,
                    shouldShow: W,
                    onRequestClose: Y,
                    targetElementRef: X,
                    children: () =>
                        (0, r.jsx)(p.Z.GuildName, {
                            guild: T,
                            ref: X
                        })
                }),
                (0, r.jsx)('span', {
                    className: y.infoBadge,
                    children: (0, r.jsx)(d.Z, {
                        guild: T,
                        isBannerVisible: !1,
                        disableBoostClick: !0
                    })
                })
            ]
        })),
        G &&
            (j = (0, r.jsx)(a.DY3, {
                className: y.tooltipContainer,
                text: x.intl.string(x.t['/FeTKy']),
                children: (0, r.jsx)(a.d3s, {
                    size: 'md',
                    color: 'currentColor',
                    className: y.infoIcon
                })
            })),
        F
            ? ((O = (0, r.jsx)(p.Z.Channel, { channel: D })),
              (C = (0, r.jsxs)('span', {
                  className: y.infoTitle,
                  children: [
                      x.intl.format(x.t['2wimj4'], { guildName: T.name }),
                      (0, r.jsx)('span', {
                          className: y.infoBadge,
                          children: (0, r.jsx)(d.Z, {
                              guild: T,
                              isBannerVisible: !1
                          })
                      })
                  ]
              })))
            : (null != R && R >= 5) || (null != k && k > 0)
              ? (C = (0, r.jsx)(p.Z.Data, {
                    members: R,
                    membersOnline: k
                }))
              : U &&
                (C = (0, r.jsx)(p.Z.Channel, {
                    channel: D,
                    guild: T
                })),
        (0, r.jsxs)(p.Z, {
            children: [
                (0, r.jsx)(p.Z.GuildSplash, { guild: T }),
                (0, r.jsx)(p.Z.Header, {
                    text: J,
                    extra: j
                }),
                (0, r.jsxs)(p.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: y.headerLine,
                            children: [
                                (0, r.jsx)(p.Z.Icon, { guild: T }),
                                (0, r.jsx)(p.Z.Info, {
                                    title: O,
                                    onClick: q,
                                    children: C
                                })
                            ]
                        }),
                        (0, r.jsx)(p.Z.Button, {
                            onClick: Q,
                            submitting: L,
                            color: p.Z.Button.Colors.GREEN,
                            children: F ? (B ? x.intl.string(x.t['7vb2cX']) : x.intl.string(x.t.gpqgam)) : M ? x.intl.string(x.t.cEnaW1) : x.intl.string(x.t.XpeFYm)
                        })
                    ]
                }),
                T.hasFeature(b.oNc.HUB) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('div', { className: y.separator }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: x.intl.format(x.t['/o1IfH'], {
                                    onClick: () =>
                                        (0, a.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('95468'), n.e('46343')]).then(n.bind(n, 650233));
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
