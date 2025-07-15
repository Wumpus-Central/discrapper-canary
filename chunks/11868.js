(n.d(t, {
    Qt: () => Z,
    ZP: () => x
}),
    n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(755721),
    s = n(481060),
    u = n(447543),
    d = n(287734),
    _ = n(372769),
    E = n(955415),
    I = n(922482),
    O = n(592125),
    p = n(430824),
    T = n(411198),
    S = n(15274),
    N = n(924301),
    f = n(725436),
    m = n(978227),
    A = n(236373),
    g = n(854698),
    R = n(405613),
    C = n(95291),
    P = n(742593),
    y = n(217804),
    b = n(139712),
    D = n(765305),
    h = n(388032),
    U = n(690606);
let M = (e, t) => (n) => {
        (n.stopPropagation(), d.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n));
    },
    v = (e, t) => (n) => {
        let r = O.Z.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, I.Cq)(r), null == t || t(n));
    },
    Z = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case D.WX.STAGE_INSTANCE:
                return v(e, t);
            case D.WX.VOICE:
                return M(e, t);
        }
        return () => {};
    },
    L = (e, t) => t && [D.WX.STAGE_INSTANCE, D.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    j = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: l, channel: a, isMember: c } = e,
            d = (0, o.e7)(
                [p.Z],
                () => {
                    if (null == n) return null;
                    let e = p.Z.getGuild(n.id);
                    return null != e ? e : (0, T.lM)(n) ? n : (0, T.Qs)(n);
                },
                [n]
            ),
            I = (0, y.u)(l, a),
            O = i.useCallback(
                (e) => {
                    c && null != l && (e.stopPropagation(), (0, u.Bk)(l));
                },
                [c, l]
            ),
            S = i.useCallback(
                (e) => {
                    Z(l)(e);
                },
                [l]
            );
        if (null == d) return null;
        let N = null == I ? void 0 : I.IconComponent,
            m = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != N &&
                        (0, r.jsx)(N, {
                            size: 'xs',
                            color: 'currentColor',
                            className: U.channelIcon
                        }),
                    (0, r.jsx)(s.Text, {
                        className: U.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, f.m)(null != (t = null == I ? void 0 : I.locationName) ? t : '', !0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: U.inviteDetailsContainer,
            children: [
                (0, r.jsx)(E.Z.Icon, {
                    guild: d,
                    onClick: O
                }),
                (0, r.jsxs)('div', {
                    className: U.verticalContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: U.guildChannelInfoContainer,
                            children: [
                                (0, r.jsx)(_.Z, {
                                    guild: d,
                                    tooltipPosition: 'top',
                                    tooltipColor: s.ua7.Colors.PRIMARY,
                                    size: 16,
                                    className: U.guildBadge
                                }),
                                (0, r.jsx)(s.P3F, {
                                    className: U.guildNameClickable,
                                    onClick: O,
                                    children: (0, r.jsx)(s.X6q, {
                                        className: c ? U.guildNameLinkable : U.guildName,
                                        variant: 'text-sm/medium',
                                        children: d.name
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: U.channelInfoContainer,
                            children: L(l, c)
                                ? (0, r.jsx)(s.P3F, {
                                      className: U.channelLocationLink,
                                      onClick: S,
                                      children: m
                                  })
                                : m
                        })
                    ]
                })
            ]
        });
    }),
    k = i.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: i, isActive: l, isEnded: a, isMember: u, isExternal: d, onAcceptInstantInvite: _, onTransitionToInviteChannel: E } = e,
            I = (0, o.e7)([N.ZP], () => N.ZP.isInterestedInEventRecurrence(n, i), [n, i]),
            O = (e) => {
                (e.stopPropagation(), u ? l && E() : _());
            };
        return u
            ? l
                ? (0, r.jsx)(c.zx, {
                      className: U.button,
                      size: c.zx.Sizes.SMALL,
                      onClick: (e) => {
                          d || O(e);
                      },
                      color: d ? c.zx.Colors.TRANSPARENT : c.zx.Colors.GREEN,
                      children: d ? h.intl.string(h.t.GoCQxc) : h.intl.string(h.t.XpeFYm)
                  })
                : a
                  ? (0, r.jsx)(c.zx, {
                        className: U.button,
                        size: c.zx.Sizes.SMALL,
                        disabled: !0,
                        color: c.zx.Colors.PRIMARY,
                        look: c.zx.Looks.OUTLINED,
                        children: h.intl.string(h.t.Pj7Xrq)
                    })
                  : (0, r.jsxs)(c.zx, {
                        className: U.button,
                        innerClassName: U.innerButton,
                        size: c.zx.Sizes.SMALL,
                        color: c.zx.Colors.PRIMARY,
                        look: I ? c.zx.Looks.OUTLINED : c.zx.Looks.FILLED,
                        onClick: (e) => {
                            (e.stopPropagation(), (0, b.Z)(n, i, t));
                        },
                        children: [
                            I
                                ? (0, r.jsx)(s.dz2, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: U.buttonIcon
                                  })
                                : (0, r.jsx)(s.Dkj, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: U.buttonIcon
                                  }),
                            h.intl.string(h.t.DlcqlZ)
                        ]
                    })
            : (0, r.jsx)(c.zx, {
                  className: U.button,
                  size: c.zx.Sizes.SMALL,
                  onClick: O,
                  color: c.zx.Colors.GREEN,
                  children: h.intl.string(h.t.XpeFYm)
              });
    }),
    x = i.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: l, channel: o, isMember: c, recurrenceId: u, onAcceptInstantInvite: d, onTransitionToInviteChannel: _ } = e,
            I = null != u ? u : null != n ? (0, g.DK)(n) : null,
            O = (null == n ? void 0 : n.recurrence_rule) == null || null == I || (0, g.Rp)((0, A.KV)(null == n ? void 0 : n.recurrence_rule), I),
            p = (0, m.Z)(n),
            T = i.useCallback(() => {
                c &&
                    null != n &&
                    (0, S.bO)({
                        eventId: n.id,
                        recurrenceId: I
                    });
            }, [c, n, I]);
        if (null == n || !O) return null;
        let f = (0, N.xt)(n),
            y = (0, N.Z2)(n),
            b = n.entity_type === D.WX.EXTERNAL;
        return (0, r.jsx)(E.Z, {
            className: a()({ [U.clickable]: c }),
            children: (0, r.jsxs)(s.P3F, {
                onClick: T,
                children: [
                    null != n.image &&
                        (0, r.jsx)(C.Z, {
                            source: (0, R.Z)(n),
                            className: U.banner
                        }),
                    (0, r.jsx)(P.ZP, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: U.eventDescription,
                        guildId: n.guild_id,
                        creator: p,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: I
                    }),
                    (0, r.jsxs)('div', {
                        className: U.footerContainer,
                        children: [
                            (0, r.jsx)(j, {
                                guild: l,
                                channel: o,
                                guildScheduledEvent: n,
                                isMember: c
                            }),
                            (0, r.jsx)(k, {
                                isActive: f,
                                isEnded: y,
                                isMember: c,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: I,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: _,
                                isExternal: b
                            })
                        ]
                    })
                ]
            })
        });
    });
