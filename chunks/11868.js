t.d(n, {
    Qt: () => G,
    ZP: () => B
});
var i = t(200651),
    l = t(192379),
    a = t(120356),
    r = t.n(a),
    d = t(442837),
    s = t(481060),
    o = t(447543),
    c = t(287734),
    u = t(372769),
    _ = t(955415),
    m = t(922482),
    g = t(601964),
    p = t(592125),
    v = t(430824),
    h = t(15274),
    I = t(924301),
    f = t(725436),
    E = t(978227),
    x = t(236373),
    C = t(854698),
    N = t(405613),
    T = t(95291),
    L = t(742593),
    b = t(217804),
    S = t(139712),
    j = t(765305),
    D = t(388032),
    y = t(868602);
let Z = (e, n) => (t) => {
        t.stopPropagation(), c.default.selectVoiceChannel(e.channel_id, !1), null == n || n(t);
    },
    U = (e, n) => (t) => {
        let i = p.Z.getChannel(e.channel_id);
        null != i && (t.stopPropagation(), (0, m.Cq)(i), null == n || n(t));
    },
    G = (e, n) => {
        switch (null == e ? void 0 : e.entity_type) {
            case j.WX.STAGE_INSTANCE:
                return U(e, n);
            case j.WX.VOICE:
                return Z(e, n);
        }
        return () => {};
    },
    z = (e, n) => n && [j.WX.STAGE_INSTANCE, j.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    k = l.memo(function (e) {
        var n;
        let { guild: t, guildScheduledEvent: a, channel: r, isMember: c } = e,
            m = (0, d.e7)(
                [v.Z],
                () => {
                    var e;
                    return null == t ? null : null !== (e = v.Z.getGuild(t.id)) && void 0 !== e ? e : new g.ZP(t);
                },
                [t]
            ),
            p = (0, b.u)(a, r),
            h = l.useCallback(
                (e) => {
                    c && null != a && (e.stopPropagation(), (0, o.B)(a));
                },
                [c, a]
            ),
            I = l.useCallback(
                (e) => {
                    G(a)(e);
                },
                [a]
            );
        if (null == m) return null;
        let E = null == p ? void 0 : p.IconComponent,
            x = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != E &&
                        (0, i.jsx)(E, {
                            size: 'xs',
                            color: 'currentColor',
                            className: y.channelIcon
                        }),
                    (0, i.jsx)(s.Text, {
                        className: y.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, f.m)(null !== (n = null == p ? void 0 : p.locationName) && void 0 !== n ? n : '', !0)
                    })
                ]
            });
        return (0, i.jsxs)('div', {
            className: y.inviteDetailsContainer,
            children: [
                (0, i.jsx)(_.Z.Icon, {
                    guild: m,
                    onClick: h
                }),
                (0, i.jsxs)('div', {
                    className: y.verticalContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: y.guildChannelInfoContainer,
                            children: [
                                (0, i.jsx)(u.Z, {
                                    guild: m,
                                    tooltipPosition: 'top',
                                    tooltipColor: s.ua7.Colors.PRIMARY,
                                    size: 16,
                                    className: y.guildBadge
                                }),
                                (0, i.jsx)(s.P3F, {
                                    className: y.guildNameClickable,
                                    onClick: h,
                                    children: (0, i.jsx)(s.X6q, {
                                        className: c ? y.guildNameLinkable : y.guildName,
                                        variant: 'text-sm/medium',
                                        children: m.name
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: y.channelInfoContainer,
                            children: z(a, c)
                                ? (0, i.jsx)(s.P3F, {
                                      className: y.channelLocationLink,
                                      onClick: I,
                                      children: x
                                  })
                                : x
                        })
                    ]
                })
            ]
        });
    }),
    R = l.memo(function (e) {
        let { guildId: n, guildScheduledEventId: t, recurrenceId: l, isActive: a, isEnded: r, isMember: o, isExternal: c, onAcceptInstantInvite: u, onTransitionToInviteChannel: _ } = e,
            m = (0, d.e7)([I.ZP], () => I.ZP.isInterestedInEventRecurrence(t, l), [t, l]),
            g = (e) => {
                e.stopPropagation(), o ? a && _() : u();
            };
        return o
            ? a
                ? (0, i.jsx)(s.zxk, {
                      className: y.button,
                      size: s.zxk.Sizes.SMALL,
                      onClick: (e) => {
                          c || g(e);
                      },
                      color: c ? s.zxk.Colors.TRANSPARENT : s.zxk.Colors.GREEN,
                      children: c ? D.intl.string(D.t.GoCQxc) : D.intl.string(D.t.XpeFYm)
                  })
                : r
                  ? (0, i.jsx)(s.zxk, {
                        className: y.button,
                        size: s.zxk.Sizes.SMALL,
                        disabled: !0,
                        color: s.zxk.Colors.PRIMARY,
                        look: s.zxk.Looks.OUTLINED,
                        children: D.intl.string(D.t.Pj7Xrq)
                    })
                  : (0, i.jsxs)(s.zxk, {
                        className: y.button,
                        innerClassName: y.innerButton,
                        size: s.zxk.Sizes.SMALL,
                        color: s.zxk.Colors.PRIMARY,
                        look: m ? s.zxk.Looks.OUTLINED : s.zxk.Looks.FILLED,
                        onClick: (e) => {
                            e.stopPropagation(), (0, S.Z)(t, l, n);
                        },
                        children: [
                            m
                                ? (0, i.jsx)(s.dz2, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: y.buttonIcon
                                  })
                                : (0, i.jsx)(s.Dkj, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: y.buttonIcon
                                  }),
                            D.intl.string(D.t.DlcqlZ)
                        ]
                    })
            : (0, i.jsx)(s.zxk, {
                  className: y.button,
                  size: s.zxk.Sizes.SMALL,
                  onClick: g,
                  color: s.zxk.Colors.GREEN,
                  children: D.intl.string(D.t.XpeFYm)
              });
    }),
    B = l.memo(function (e) {
        var n;
        let { guildScheduledEvent: t, guild: a, channel: d, isMember: o, recurrenceId: c, onAcceptInstantInvite: u, onTransitionToInviteChannel: m } = e,
            g = null != c ? c : null != t ? (0, C.DK)(t) : null,
            p = (null == t ? void 0 : t.recurrence_rule) == null || null == g || (0, C.Rp)((0, x.KV)(null == t ? void 0 : t.recurrence_rule), g),
            v = (0, E.Z)(t),
            f = l.useCallback(() => {
                o &&
                    null != t &&
                    (0, h.bO)({
                        eventId: t.id,
                        recurrenceId: g
                    });
            }, [o, t, g]);
        if (null == t || !p) return null;
        let b = (0, I.xt)(t),
            S = (0, I.Z2)(t),
            D = t.entity_type === j.WX.EXTERNAL;
        return (0, i.jsx)(_.Z, {
            className: r()({ [y.clickable]: o }),
            children: (0, i.jsxs)(s.P3F, {
                onClick: f,
                children: [
                    null != t.image &&
                        (0, i.jsx)(T.Z, {
                            source: (0, N.Z)(t),
                            className: y.banner
                        }),
                    (0, i.jsx)(L.ZP, {
                        name: t.name,
                        description: null !== (n = t.description) && void 0 !== n ? n : void 0,
                        descriptionClassName: y.eventDescription,
                        guildId: t.guild_id,
                        creator: v,
                        guildEvent: t,
                        eventPreview: t,
                        recurrenceId: g
                    }),
                    (0, i.jsxs)('div', {
                        className: y.footerContainer,
                        children: [
                            (0, i.jsx)(k, {
                                guild: a,
                                channel: d,
                                guildScheduledEvent: t,
                                isMember: o
                            }),
                            (0, i.jsx)(R, {
                                isActive: b,
                                isEnded: S,
                                isMember: o,
                                guildId: t.guild_id,
                                guildScheduledEventId: t.id,
                                recurrenceId: g,
                                onAcceptInstantInvite: u,
                                onTransitionToInviteChannel: m,
                                isExternal: D
                            })
                        ]
                    })
                ]
            })
        });
    });
