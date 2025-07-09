(n.d(t, {
    Qt: () => L,
    ZP: () => x
}),
    n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    c = n(755721),
    s = n(481060),
    u = n(447543),
    d = n(287734),
    _ = n(372769),
    E = n(955415),
    O = n(922482),
    I = n(592125),
    T = n(430824),
    p = n(411198),
    S = n(15274),
    N = n(924301),
    f = n(725436),
    A = n(978227),
    m = n(236373),
    R = n(854698),
    g = n(405613),
    P = n(95291),
    C = n(742593),
    y = n(217804),
    b = n(139712),
    D = n(765305),
    h = n(388032),
    U = n(690606);
let M = (e, t) => (n) => {
        (n.stopPropagation(), d.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n));
    },
    v = (e, t) => (n) => {
        let r = I.Z.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, O.Cq)(r), null == t || t(n));
    },
    L = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case D.WX.STAGE_INSTANCE:
                return v(e, t);
            case D.WX.VOICE:
                return M(e, t);
        }
        return () => {};
    },
    Z = (e, t) => t && [D.WX.STAGE_INSTANCE, D.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    j = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: l, channel: o, isMember: c } = e,
            d = (0, a.e7)(
                [T.Z],
                () => {
                    if (null == n) return null;
                    let e = T.Z.getGuild(n.id);
                    return null != e ? e : (0, p.lM)(n) ? n : (0, p.Qs)(n);
                },
                [n]
            ),
            O = (0, y.u)(l, o),
            I = i.useCallback(
                (e) => {
                    c && null != l && (e.stopPropagation(), (0, u.Bk)(l));
                },
                [c, l]
            ),
            S = i.useCallback(
                (e) => {
                    L(l)(e);
                },
                [l]
            );
        if (null == d) return null;
        let N = null == O ? void 0 : O.IconComponent,
            A = (0, r.jsxs)(r.Fragment, {
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
                        children: (0, f.m)(null != (t = null == O ? void 0 : O.locationName) ? t : '', !0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: U.inviteDetailsContainer,
            children: [
                (0, r.jsx)(E.Z.Icon, {
                    guild: d,
                    onClick: I
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
                                    onClick: I,
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
                            children: Z(l, c)
                                ? (0, r.jsx)(s.P3F, {
                                      className: U.channelLocationLink,
                                      onClick: S,
                                      children: A
                                  })
                                : A
                        })
                    ]
                })
            ]
        });
    }),
    k = i.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: i, isActive: l, isEnded: o, isMember: u, isExternal: d, onAcceptInstantInvite: _, onTransitionToInviteChannel: E } = e,
            O = (0, a.e7)([N.ZP], () => N.ZP.isInterestedInEventRecurrence(n, i), [n, i]),
            I = (e) => {
                (e.stopPropagation(), u ? l && E() : _());
            };
        return u
            ? l
                ? (0, r.jsx)(c.zx, {
                      className: U.button,
                      size: c.zx.Sizes.SMALL,
                      onClick: (e) => {
                          d || I(e);
                      },
                      color: d ? c.zx.Colors.TRANSPARENT : c.zx.Colors.GREEN,
                      children: d ? h.intl.string(h.t.GoCQxc) : h.intl.string(h.t.XpeFYm)
                  })
                : o
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
                        look: O ? c.zx.Looks.OUTLINED : c.zx.Looks.FILLED,
                        onClick: (e) => {
                            (e.stopPropagation(), (0, b.Z)(n, i, t));
                        },
                        children: [
                            O
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
                  onClick: I,
                  color: c.zx.Colors.GREEN,
                  children: h.intl.string(h.t.XpeFYm)
              });
    }),
    x = i.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: l, channel: a, isMember: c, recurrenceId: u, onAcceptInstantInvite: d, onTransitionToInviteChannel: _ } = e,
            O = null != u ? u : null != n ? (0, R.DK)(n) : null,
            I = (null == n ? void 0 : n.recurrence_rule) == null || null == O || (0, R.Rp)((0, m.KV)(null == n ? void 0 : n.recurrence_rule), O),
            T = (0, A.Z)(n),
            p = i.useCallback(() => {
                c &&
                    null != n &&
                    (0, S.bO)({
                        eventId: n.id,
                        recurrenceId: O
                    });
            }, [c, n, O]);
        if (null == n || !I) return null;
        let f = (0, N.xt)(n),
            y = (0, N.Z2)(n),
            b = n.entity_type === D.WX.EXTERNAL;
        return (0, r.jsx)(E.Z, {
            className: o()({ [U.clickable]: c }),
            children: (0, r.jsxs)(s.P3F, {
                onClick: p,
                children: [
                    null != n.image &&
                        (0, r.jsx)(P.Z, {
                            source: (0, g.Z)(n),
                            className: U.banner
                        }),
                    (0, r.jsx)(C.ZP, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: U.eventDescription,
                        guildId: n.guild_id,
                        creator: T,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: O
                    }),
                    (0, r.jsxs)('div', {
                        className: U.footerContainer,
                        children: [
                            (0, r.jsx)(j, {
                                guild: l,
                                channel: a,
                                guildScheduledEvent: n,
                                isMember: c
                            }),
                            (0, r.jsx)(k, {
                                isActive: f,
                                isEnded: y,
                                isMember: c,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: O,
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
