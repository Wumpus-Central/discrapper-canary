n.d(t, { Z: () => f }), n(789020);
var i = n(200651);
n(192379);
var l = n(533800),
    a = n(481060),
    r = n(358555),
    s = n(955415),
    o = n(131704),
    c = n(630388),
    d = n(267642),
    u = n(411198),
    m = n(277707),
    h = n(358595),
    _ = n(981631),
    p = n(388032),
    g = n(658412);
function f(e) {
    var t, f;
    let x,
        E,
        C,
        { onTransitionToInviteChannel: v, onAcceptInstantInvite: I, guild: N, invite: S, author: T, currentUserId: b } = e,
        A = b === T.id,
        { channel: j, approximate_member_count: y, approximate_presence_count: Z } = S,
        R = S.state === _.r2o.ACCEPTING,
        L = null != j ? (0, o.jD)(j) : null,
        P = null != N,
        k = null != L,
        M = null != L && L.isGuildVocal(),
        O = null != L && L.isGuildStageVoice(),
        D = (0, c.yE)(null !== (t = S.flags) && void 0 !== t ? t : 0, l.$.IS_GUEST_INVITE),
        w = null !== (f = null == N ? void 0 : N.hasFeature(_.oNc.HUB)) && void 0 !== f && f;
    if (null == N) {
        if (null == S.guild) return (0, i.jsx)(h.Z, {});
        N = u.Qs(S.guild);
        let e = (0, d.rF)(S.guild.premium_subscription_count, S.guild.id);
        N.premiumTier = e;
    }
    let F = P ? v : I,
        U = (0, m.e)({
            isVoiceChannel: M,
            isOwnInvite: A,
            isGuest: D,
            isHubGuild: w,
            isStage: O,
            isStream: !1
        });
    return (
        (E = (0, i.jsxs)('span', {
            className: g.infoTitle,
            children: [
                (0, i.jsx)(s.Z.GuildName, { guild: N }),
                (0, i.jsx)('span', {
                    className: g.infoBadge,
                    children: (0, i.jsx)(r.Z, {
                        guild: N,
                        isBannerVisible: !1,
                        disableBoostClick: !0
                    })
                })
            ]
        })),
        D &&
            (C = (0, i.jsx)(a.DY3, {
                className: g.tooltipContainer,
                text: p.intl.string(p.t['/FeTKy']),
                children: (0, i.jsx)(a.d3s, {
                    size: 'md',
                    color: 'currentColor',
                    className: g.infoIcon
                })
            })),
        M
            ? ((E = (0, i.jsx)(s.Z.Channel, { channel: L })),
              (x = (0, i.jsxs)('span', {
                  className: g.infoTitle,
                  children: [
                      p.intl.format(p.t['2wimj4'], { guildName: N.name }),
                      (0, i.jsx)('span', {
                          className: g.infoBadge,
                          children: (0, i.jsx)(r.Z, {
                              guild: N,
                              isBannerVisible: !1
                          })
                      })
                  ]
              })))
            : (null != y && y >= 5) || (null != Z && Z > 0)
              ? (x = (0, i.jsx)(s.Z.Data, {
                    members: y,
                    membersOnline: Z
                }))
              : k &&
                (x = (0, i.jsx)(s.Z.Channel, {
                    channel: L,
                    guild: N
                })),
        (0, i.jsxs)(s.Z, {
            children: [
                (0, i.jsx)(s.Z.GuildSplash, { guild: N }),
                (0, i.jsx)(s.Z.Header, {
                    text: U,
                    extra: C
                }),
                (0, i.jsxs)(s.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: g.headerLine,
                            children: [
                                (0, i.jsx)(s.Z.Icon, { guild: N }),
                                (0, i.jsx)(s.Z.Info, {
                                    title: E,
                                    onClick: P ? F : null,
                                    children: x
                                })
                            ]
                        }),
                        (0, i.jsx)(s.Z.Button, {
                            onClick: F,
                            submitting: R,
                            color: s.Z.Button.Colors.GREEN,
                            children: M ? (O ? p.intl.string(p.t['7vb2cX']) : p.intl.string(p.t.gpqgam)) : P ? p.intl.string(p.t.cEnaW1) : p.intl.string(p.t.XpeFYm)
                        })
                    ]
                }),
                N.hasFeature(_.oNc.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: g.separator }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: p.intl.format(p.t['/o1IfH'], {
                                    onClick: () =>
                                        (0, a.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('95468'), n.e('1808')]).then(n.bind(n, 650233));
                                            return (t) => (0, i.jsx)(e, { ...t });
                                        })
                                })
                            })
                        ]
                    })
            ]
        })
    );
}
