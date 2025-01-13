n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(789020);
var i = n(200651);
n(192379);
var r = n(533800),
    l = n(481060),
    a = n(358555),
    o = n(955415),
    s = n(131704),
    c = n(630388),
    d = n(267642),
    u = n(411198),
    m = n(277707),
    h = n(358595),
    f = n(981631),
    p = n(388032),
    _ = n(658412);
function g(e) {
    var t, g;
    let E,
        C,
        I,
        { onTransitionToInviteChannel: x, onAcceptInstantInvite: N, guild: v, invite: T, author: S, currentUserId: A } = e,
        b = A === S.id,
        { channel: j, approximate_member_count: R, approximate_presence_count: Z } = T,
        P = T.state === f.r2o.ACCEPTING,
        L = null != j ? (0, s.jD)(j) : null,
        y = null != v,
        O = null != L,
        M = null != L && L.isGuildVocal(),
        k = null != L && L.isGuildStageVoice(),
        D = (0, c.yE)(null !== (t = T.flags) && void 0 !== t ? t : 0, r.$.IS_GUEST_INVITE),
        B = null !== (g = null == v ? void 0 : v.hasFeature(f.oNc.HUB)) && void 0 !== g && g;
    if (null == v) {
        if (null == T.guild) return (0, i.jsx)(h.Z, {});
        v = u.Qs(T.guild);
        let e = (0, d.rF)(T.guild.premium_subscription_count, T.guild.id);
        v.premiumTier = e;
    }
    let U = y ? x : N,
        w = (0, m.e)({
            isVoiceChannel: M,
            isOwnInvite: b,
            isGuest: D,
            isHubGuild: B,
            isStage: k,
            isStream: !1
        });
    return (
        (C = (0, i.jsxs)('span', {
            className: _.infoTitle,
            children: [
                (0, i.jsx)(o.Z.GuildName, { guild: v }),
                (0, i.jsx)('span', {
                    className: _.infoBadge,
                    children: (0, i.jsx)(a.Z, {
                        guild: v,
                        isBannerVisible: !1,
                        disableBoostClick: !0
                    })
                })
            ]
        })),
        D &&
            (I = (0, i.jsx)(l.TooltipContainer, {
                className: _.tooltipContainer,
                text: p.intl.string(p.t['/FeTKy']),
                children: (0, i.jsx)(l.CircleInformationIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.infoIcon
                })
            })),
        M
            ? ((C = (0, i.jsx)(o.Z.Channel, { channel: L })),
              (E = (0, i.jsxs)('span', {
                  className: _.infoTitle,
                  children: [
                      p.intl.format(p.t['2wimj4'], { guildName: v.name }),
                      (0, i.jsx)('span', {
                          className: _.infoBadge,
                          children: (0, i.jsx)(a.Z, {
                              guild: v,
                              isBannerVisible: !1
                          })
                      })
                  ]
              })))
            : (null != R && R >= 5) || (null != Z && Z > 0)
              ? (E = (0, i.jsx)(o.Z.Data, {
                    members: R,
                    membersOnline: Z
                }))
              : O &&
                (E = (0, i.jsx)(o.Z.Channel, {
                    channel: L,
                    guild: v
                })),
        (0, i.jsxs)(o.Z, {
            children: [
                (0, i.jsx)(o.Z.GuildSplash, { guild: v }),
                (0, i.jsx)(o.Z.Header, {
                    text: w,
                    extra: I
                }),
                (0, i.jsxs)(o.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: _.headerLine,
                            children: [
                                (0, i.jsx)(o.Z.Icon, { guild: v }),
                                (0, i.jsx)(o.Z.Info, {
                                    title: C,
                                    onClick: y ? U : null,
                                    children: E
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Z.Button, {
                            onClick: U,
                            submitting: P,
                            color: o.Z.Button.Colors.GREEN,
                            children: M ? (k ? p.intl.string(p.t['7vb2cX']) : p.intl.string(p.t.gpqgam)) : y ? p.intl.string(p.t.cEnaW1) : p.intl.string(p.t.XpeFYm)
                        })
                    ]
                }),
                v.hasFeature(f.oNc.HUB) &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: _.separator }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: p.intl.format(p.t['/o1IfH'], {
                                    onClick: () =>
                                        (0, l.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([n.e('95468'), n.e('15256')]).then(n.bind(n, 650233));
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
