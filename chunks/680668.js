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
    y = n(388032),
    x = n(273254);
function E(e) {
    var t, E, v;
    let O,
        j,
        C,
        { onTransitionToInviteChannel: S, onAcceptInstantInvite: I, guild: N, invite: T, message: P, currentUserId: A } = e,
        w = A === P.author.id,
        { channel: Z, approximate_member_count: R, approximate_presence_count: k } = T,
        L = T.state === b.r2o.ACCEPTING,
        D = null != Z ? (0, m.jD)(Z) : null,
        M = null != N,
        U = null != D,
        F = null != D && D.isGuildVocal(),
        B = null != D && D.isGuildStageVoice(),
        G = (0, f.yE)(null != (t = T.flags) ? t : 0, l.$.IS_GUEST_INVITE),
        H = null != (E = null == N ? void 0 : N.hasFeature(b.oNc.HUB)) && E,
        V = null == N ? void 0 : N.id,
        { analyticsLocations: z } = (0, c.ZP)(s.Z.INVITE_EMBED),
        [W, K] = i.useState(!1),
        Y = i.useCallback(() => K(!1), []),
        X = i.useCallback(() => {
            K(!0), (0, o.CB)(V, 'show profile', z);
        }, [V, z]),
        q = i.useCallback(() => {
            let e = 'noop';
            M ? (S(), (e = 'transition')) : (I(), (e = 'accept')),
                (0, o.r$)(
                    {
                        invite: T,
                        action: e,
                        inviter_id: P.author.id,
                        invite_message_id: P.id
                    },
                    z
                );
        }, [T, P, z, M, S, I]);
    if (null == N) {
        if (null == T.guild) return (0, r.jsx)(_.Z, {});
        (N = h.Qs(T.guild)).premiumTier = null != (v = T.guild.premium_tier) ? v : b.Eu4.NONE;
    }
    let Q = (0, g.e)({
        isVoiceChannel: F,
        isOwnInvite: w,
        isGuest: G,
        isHubGuild: H,
        isStage: B,
        isStream: !1
    });
    return (
        (j = (0, r.jsxs)('span', {
            className: x.infoTitle,
            children: [
                (0, r.jsx)(u.Z, {
                    guildId: N.id,
                    name: N.name,
                    shouldShow: W,
                    onRequestClose: Y,
                    children: () => (0, r.jsx)(p.Z.GuildName, { guild: N })
                }),
                (0, r.jsx)('span', {
                    className: x.infoBadge,
                    children: (0, r.jsx)(d.Z, {
                        guild: N,
                        isBannerVisible: !1,
                        disableBoostClick: !0
                    })
                })
            ]
        })),
        G &&
            (C = (0, r.jsx)(a.DY3, {
                className: x.tooltipContainer,
                text: y.intl.string(y.t['/FeTKy']),
                children: (0, r.jsx)(a.d3s, {
                    size: 'md',
                    color: 'currentColor',
                    className: x.infoIcon
                })
            })),
        F
            ? ((j = (0, r.jsx)(p.Z.Channel, { channel: D })),
              (O = (0, r.jsxs)('span', {
                  className: x.infoTitle,
                  children: [
                      y.intl.format(y.t['2wimj4'], { guildName: N.name }),
                      (0, r.jsx)('span', {
                          className: x.infoBadge,
                          children: (0, r.jsx)(d.Z, {
                              guild: N,
                              isBannerVisible: !1
                          })
                      })
                  ]
              })))
            : (null != R && R >= 5) || (null != k && k > 0)
              ? (O = (0, r.jsx)(p.Z.Data, {
                    members: R,
                    membersOnline: k
                }))
              : U &&
                (O = (0, r.jsx)(p.Z.Channel, {
                    channel: D,
                    guild: N
                })),
        (0, r.jsxs)(p.Z, {
            children: [
                (0, r.jsx)(p.Z.GuildSplash, { guild: N }),
                (0, r.jsx)(p.Z.Header, {
                    text: Q,
                    extra: C
                }),
                (0, r.jsxs)(p.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: x.headerLine,
                            children: [
                                (0, r.jsx)(p.Z.Icon, { guild: N }),
                                (0, r.jsx)(p.Z.Info, {
                                    title: j,
                                    onClick: X,
                                    children: O
                                })
                            ]
                        }),
                        (0, r.jsx)(p.Z.Button, {
                            onClick: q,
                            submitting: L,
                            color: p.Z.Button.Colors.GREEN,
                            children: F ? (B ? y.intl.string(y.t['7vb2cX']) : y.intl.string(y.t.gpqgam)) : M ? y.intl.string(y.t.cEnaW1) : y.intl.string(y.t.XpeFYm)
                        })
                    ]
                }),
                N.hasFeature(b.oNc.HUB) &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('div', { className: x.separator }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: y.intl.format(y.t['/o1IfH'], {
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
