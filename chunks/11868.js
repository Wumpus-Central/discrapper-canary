(n.d(t, {
    Qt: () => L,
    ZP: () => w
}),
    n(953529));
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(755721),
    c = n(481060),
    d = n(447543),
    u = n(287734),
    _ = n(372769),
    h = n(955415),
    E = n(922482),
    I = n(592125),
    p = n(430824),
    C = n(411198),
    g = n(15274),
    O = n(924301),
    S = n(725436),
    T = n(978227),
    f = n(236373),
    N = n(854698),
    m = n(405613),
    R = n(95291),
    A = n(742593),
    y = n(217804),
    b = n(139712),
    P = n(765305),
    D = n(388032),
    v = n(690606);
let U = (e, t) => (n) => {
        (n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n));
    },
    M = (e, t) => (n) => {
        let i = I.Z.getChannel(e.channel_id);
        null != i && (n.stopPropagation(), (0, E.Cq)(i), null == t || t(n));
    },
    L = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case P.WX.STAGE_INSTANCE:
                return M(e, t);
            case P.WX.VOICE:
                return U(e, t);
        }
        return () => {};
    },
    Z = (e, t) => t && [P.WX.STAGE_INSTANCE, P.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    k = r.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: l, channel: o, isMember: a } = e,
            u = (0, s.e7)(
                [p.Z],
                () => {
                    if (null == n) return null;
                    let e = p.Z.getGuild(n.id);
                    return null != e ? e : (0, C.lM)(n) ? n : (0, C.Qs)(n);
                },
                [n]
            ),
            E = (0, y.u)(l, o),
            I = r.useCallback(
                (e) => {
                    a && null != l && (e.stopPropagation(), (0, d.Bk)(l));
                },
                [a, l]
            ),
            g = r.useCallback(
                (e) => {
                    L(l)(e);
                },
                [l]
            );
        if (null == u) return null;
        let O = null == E ? void 0 : E.IconComponent,
            T = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != O &&
                        (0, i.jsx)(O, {
                            size: 'xs',
                            color: 'currentColor',
                            className: v.channelIcon
                        }),
                    (0, i.jsx)(c.Text, {
                        className: v.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, S.m)(null != (t = null == E ? void 0 : E.locationName) ? t : '', !0)
                    })
                ]
            });
        return (0, i.jsxs)('div', {
            className: v.inviteDetailsContainer,
            children: [
                (0, i.jsx)(h.Z.Icon, {
                    guild: u,
                    onClick: I
                }),
                (0, i.jsxs)('div', {
                    className: v.verticalContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: v.guildChannelInfoContainer,
                            children: [
                                (0, i.jsx)(_.Z, {
                                    guild: u,
                                    tooltipPosition: 'top',
                                    tooltipColor: c.ua7.Colors.PRIMARY,
                                    size: 16,
                                    className: v.guildBadge
                                }),
                                (0, i.jsx)(c.P3F, {
                                    className: v.guildNameClickable,
                                    onClick: I,
                                    children: (0, i.jsx)(c.X6q, {
                                        className: a ? v.guildNameLinkable : v.guildName,
                                        variant: 'text-sm/medium',
                                        children: u.name
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: v.channelInfoContainer,
                            children: Z(l, a)
                                ? (0, i.jsx)(c.P3F, {
                                      className: v.channelLocationLink,
                                      onClick: g,
                                      children: T
                                  })
                                : T
                        })
                    ]
                })
            ]
        });
    }),
    j = r.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: r, isActive: l, isEnded: o, isMember: d, isExternal: u, onAcceptInstantInvite: _, onTransitionToInviteChannel: h } = e,
            E = (0, s.e7)([O.ZP], () => O.ZP.isInterestedInEventRecurrence(n, r), [n, r]),
            I = (e) => {
                (e.stopPropagation(), d ? l && h() : _());
            };
        return d
            ? l
                ? (0, i.jsx)(a.zx, {
                      className: v.button,
                      size: a.zx.Sizes.SMALL,
                      onClick: (e) => {
                          u || I(e);
                      },
                      color: u ? a.zx.Colors.TRANSPARENT : a.zx.Colors.GREEN,
                      children: u ? D.intl.string(D.t.GoCQxc) : D.intl.string(D.t.XpeFYm)
                  })
                : o
                  ? (0, i.jsx)(a.zx, {
                        className: v.button,
                        size: a.zx.Sizes.SMALL,
                        disabled: !0,
                        color: a.zx.Colors.PRIMARY,
                        look: a.zx.Looks.OUTLINED,
                        children: D.intl.string(D.t.Pj7Xrq)
                    })
                  : (0, i.jsxs)(a.zx, {
                        className: v.button,
                        innerClassName: v.innerButton,
                        size: a.zx.Sizes.SMALL,
                        color: a.zx.Colors.PRIMARY,
                        look: E ? a.zx.Looks.OUTLINED : a.zx.Looks.FILLED,
                        onClick: (e) => {
                            (e.stopPropagation(), (0, b.Z)(n, r, t));
                        },
                        children: [
                            E
                                ? (0, i.jsx)(c.dz2, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: v.buttonIcon
                                  })
                                : (0, i.jsx)(c.Dkj, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: v.buttonIcon
                                  }),
                            D.intl.string(D.t.DlcqlZ)
                        ]
                    })
            : (0, i.jsx)(a.zx, {
                  className: v.button,
                  size: a.zx.Sizes.SMALL,
                  onClick: I,
                  color: a.zx.Colors.GREEN,
                  children: D.intl.string(D.t.XpeFYm)
              });
    }),
    w = r.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: l, channel: s, isMember: a, recurrenceId: d, onAcceptInstantInvite: u, onTransitionToInviteChannel: _ } = e,
            E = null != d ? d : null != n ? (0, N.DK)(n) : null,
            I = (null == n ? void 0 : n.recurrence_rule) == null || null == E || (0, N.Rp)((0, f.KV)(null == n ? void 0 : n.recurrence_rule), E),
            p = (0, T.Z)(n),
            C = r.useCallback(() => {
                a &&
                    null != n &&
                    (0, g.bO)({
                        eventId: n.id,
                        recurrenceId: E
                    });
            }, [a, n, E]);
        if (null == n || !I) return null;
        let S = (0, O.xt)(n),
            y = (0, O.Z2)(n),
            b = n.entity_type === P.WX.EXTERNAL;
        return (0, i.jsx)(h.Z, {
            className: o()({ [v.clickable]: a }),
            children: (0, i.jsxs)(c.P3F, {
                onClick: C,
                children: [
                    null != n.image &&
                        (0, i.jsx)(R.Z, {
                            source: (0, m.Z)(n),
                            className: v.banner
                        }),
                    (0, i.jsx)(A.ZP, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: v.eventDescription,
                        guildId: n.guild_id,
                        creator: p,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: E
                    }),
                    (0, i.jsxs)('div', {
                        className: v.footerContainer,
                        children: [
                            (0, i.jsx)(k, {
                                guild: l,
                                channel: s,
                                guildScheduledEvent: n,
                                isMember: a
                            }),
                            (0, i.jsx)(j, {
                                isActive: S,
                                isEnded: y,
                                isMember: a,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: E,
                                onAcceptInstantInvite: u,
                                onTransitionToInviteChannel: _,
                                isExternal: b
                            })
                        ]
                    })
                ]
            })
        });
    });
