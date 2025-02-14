n.d(t, { Z: () => E }), n(789020), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(533800),
    r = n(481060),
    s = n(576306),
    o = n(857395),
    c = n(358555),
    d = n(955415),
    u = n(131704),
    m = n(630388),
    _ = n(267642),
    h = n(411198),
    p = n(277707),
    g = n(358595),
    f = n(981631),
    x = n(388032),
    C = n(791686);
function E(e) {
    var t, E;
    let v,
        I,
        N,
        { onTransitionToInviteChannel: S, onAcceptInstantInvite: T, guild: b, invite: A, author: j, currentUserId: y } = e,
        Z = y === j.id,
        { channel: R, approximate_member_count: L, approximate_presence_count: P } = A,
        k = A.state === f.r2o.ACCEPTING,
        M = null != R ? (0, u.jD)(R) : null,
        O = null != b,
        D = null != M,
        w = null != M && M.isGuildVocal(),
        F = null != M && M.isGuildStageVoice(),
        U = (0, m.yE)(null !== (t = A.flags) && void 0 !== t ? t : 0, a.$.IS_GUEST_INVITE),
        B = null !== (E = null == b ? void 0 : b.hasFeature(f.oNc.HUB)) && void 0 !== E && E,
        G = (0, s.h)(),
        [H, V] = l.useState(!1),
        z = l.useCallback(() => V(!0), []),
        W = l.useCallback(() => V(!1), []);
    if (null == b) {
        if (null == A.guild) return (0, i.jsx)(g.Z, {});
        b = h.Qs(A.guild);
        let e = (0, _.rF)(A.guild.premium_subscription_count, A.guild.id);
        b.premiumTier = e;
    }
    let K = O ? S : T,
        Y = (0, p.e)({
            isVoiceChannel: w,
            isOwnInvite: Z,
            isGuest: U,
            isHubGuild: B,
            isStage: F,
            isStream: !1
        });
    return (
        (I = (0, i.jsxs)('span', {
            className: C.infoTitle,
            children: [
                (0, i.jsx)(o.Z, {
                    guildId: b.id,
                    name: b.name,
                    shouldShow: H,
                    onRequestClose: W,
                    children: () => (0, i.jsx)(d.Z.GuildName, { guild: b })
                }),
                (0, i.jsx)('span', {
                    className: C.infoBadge,
                    children: (0, i.jsx)(c.Z, {
                        guild: b,
                        isBannerVisible: !1,
                        disableBoostClick: !0
                    })
                })
            ]
        })),
        U &&
            (N = (0, i.jsx)(r.DY3, {
                className: C.tooltipContainer,
                text: x.intl.string(x.t['/FeTKy']),
                children: (0, i.jsx)(r.d3s, {
                    size: 'md',
                    color: 'currentColor',
                    className: C.infoIcon
                })
            })),
        w
            ? ((I = (0, i.jsx)(d.Z.Channel, { channel: M })),
              (v = (0, i.jsxs)('span', {
                  className: C.infoTitle,
                  children: [
                      x.intl.format(x.t['2wimj4'], { guildName: b.name }),
                      (0, i.jsx)('span', {
                          className: C.infoBadge,
                          children: (0, i.jsx)(c.Z, {
                              guild: b,
                              isBannerVisible: !1
                          })
                      })
                  ]
              })))
            : (null != L && L >= 5) || (null != P && P > 0)
              ? (v = (0, i.jsx)(d.Z.Data, {
                    members: L,
                    membersOnline: P
                }))
              : D &&
                (v = (0, i.jsx)(d.Z.Channel, {
                    channel: M,
                    guild: b
                })),
        (0, i.jsxs)(d.Z, {
            children: [
                (0, i.jsx)(d.Z.GuildSplash, { guild: b }),
                (0, i.jsx)(d.Z.Header, {
                    text: Y,
                    extra: N
                }),
                (0, i.jsxs)(d.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: C.headerLine,
                            children: [
                                (0, i.jsx)(d.Z.Icon, { guild: b }),
                                (0, i.jsx)(d.Z.Info, {
                                    title: I,
                                    onClick: G ? z : O ? K : null,
                                    children: v
                                })
                            ]
                        }),
                        (0, i.jsx)(d.Z.Button, {
                            onClick: K,
                            submitting: k,
                            color: d.Z.Button.Colors.GREEN,
                            children: w ? (F ? x.intl.string(x.t['7vb2cX']) : x.intl.string(x.t.gpqgam)) : O ? x.intl.string(x.t.cEnaW1) : x.intl.string(x.t.XpeFYm)
                        })
                    ]
                }),
                b.hasFeature(f.oNc.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: C.separator }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: x.intl.format(x.t['/o1IfH'], {
                                    onClick: () =>
                                        (0, r.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('95468'), n.e('70506')]).then(n.bind(n, 650233));
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
