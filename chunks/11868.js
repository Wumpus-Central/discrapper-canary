(n.d(t, {
    Qt: () => k,
    ZP: () => Z
}),
    n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(447543),
    d = n(287734),
    _ = n(372769),
    E = n(955415),
    p = n(922482),
    O = n(592125),
    f = n(430824),
    I = n(411198),
    h = n(15274),
    T = n(924301),
    S = n(725436),
    m = n(978227),
    g = n(236373),
    N = n(854698),
    R = n(405613),
    b = n(95291),
    y = n(742593),
    A = n(217804),
    C = n(139712),
    P = n(765305),
    D = n(388032),
    M = n(690606);
let j = (e, t) => (n) => {
        (n.stopPropagation(), d.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n));
    },
    x = (e, t) => (n) => {
        let r = O.Z.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, p.Cq)(r), null == t || t(n));
    },
    k = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case P.WX.STAGE_INSTANCE:
                return x(e, t);
            case P.WX.VOICE:
                return j(e, t);
        }
        return () => {};
    },
    v = (e, t) => t && [P.WX.STAGE_INSTANCE, P.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    L = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: l, channel: a, isMember: s } = e,
            d = (0, o.e7)(
                [f.Z],
                () => {
                    if (null == n) return null;
                    let e = f.Z.getGuild(n.id);
                    return null != e ? e : (0, I.lM)(n) ? n : (0, I.Qs)(n);
                },
                [n]
            ),
            p = (0, A.u)(l, a),
            O = i.useCallback(
                (e) => {
                    s && null != l && (e.stopPropagation(), (0, u.Bk)(l));
                },
                [s, l]
            ),
            h = i.useCallback(
                (e) => {
                    k(l)(e);
                },
                [l]
            );
        if (null == d) return null;
        let T = null == p ? void 0 : p.IconComponent,
            m = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != T &&
                        (0, r.jsx)(T, {
                            size: 'xs',
                            color: 'currentColor',
                            className: M.channelIcon
                        }),
                    (0, r.jsx)(c.Text, {
                        className: M.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, S.m)(null != (t = null == p ? void 0 : p.locationName) ? t : '', !0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: M.inviteDetailsContainer,
            children: [
                (0, r.jsx)(E.Z.Icon, {
                    guild: d,
                    onClick: O
                }),
                (0, r.jsxs)('div', {
                    className: M.verticalContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: M.guildChannelInfoContainer,
                            children: [
                                (0, r.jsx)(_.Z, {
                                    guild: d,
                                    tooltipPosition: 'top',
                                    tooltipColor: c.ua7.Colors.PRIMARY,
                                    size: 16,
                                    className: M.guildBadge
                                }),
                                (0, r.jsx)(c.P3F, {
                                    className: M.guildNameClickable,
                                    onClick: O,
                                    children: (0, r.jsx)(c.X6q, {
                                        className: s ? M.guildNameLinkable : M.guildName,
                                        variant: 'text-sm/medium',
                                        children: d.name
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: M.channelInfoContainer,
                            children: v(l, s)
                                ? (0, r.jsx)(c.P3F, {
                                      className: M.channelLocationLink,
                                      onClick: h,
                                      children: m
                                  })
                                : m
                        })
                    ]
                })
            ]
        });
    }),
    U = i.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: i, isActive: l, isEnded: a, isMember: u, isExternal: d, onAcceptInstantInvite: _, onTransitionToInviteChannel: E } = e,
            p = (0, o.e7)([T.ZP], () => T.ZP.isInterestedInEventRecurrence(n, i), [n, i]),
            O = (e) => {
                (e.stopPropagation(), u ? l && E() : _());
            };
        return u
            ? l
                ? (0, r.jsx)(s.zx, {
                      className: M.button,
                      size: s.zx.Sizes.SMALL,
                      onClick: (e) => {
                          d || O(e);
                      },
                      color: d ? s.zx.Colors.TRANSPARENT : s.zx.Colors.GREEN,
                      children: d ? D.intl.string(D.t.GoCQxc) : D.intl.string(D.t.XpeFYm)
                  })
                : a
                  ? (0, r.jsx)(s.zx, {
                        className: M.button,
                        size: s.zx.Sizes.SMALL,
                        disabled: !0,
                        color: s.zx.Colors.PRIMARY,
                        look: s.zx.Looks.OUTLINED,
                        children: D.intl.string(D.t.Pj7Xrq)
                    })
                  : (0, r.jsxs)(s.zx, {
                        className: M.button,
                        innerClassName: M.innerButton,
                        size: s.zx.Sizes.SMALL,
                        color: s.zx.Colors.PRIMARY,
                        look: p ? s.zx.Looks.OUTLINED : s.zx.Looks.FILLED,
                        onClick: (e) => {
                            (e.stopPropagation(), (0, C.Z)(n, i, t));
                        },
                        children: [
                            p
                                ? (0, r.jsx)(c.dz2, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: M.buttonIcon
                                  })
                                : (0, r.jsx)(c.Dkj, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: M.buttonIcon
                                  }),
                            D.intl.string(D.t.DlcqlZ)
                        ]
                    })
            : (0, r.jsx)(s.zx, {
                  className: M.button,
                  size: s.zx.Sizes.SMALL,
                  onClick: O,
                  color: s.zx.Colors.GREEN,
                  children: D.intl.string(D.t.XpeFYm)
              });
    }),
    Z = i.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: l, channel: o, isMember: s, recurrenceId: u, onAcceptInstantInvite: d, onTransitionToInviteChannel: _ } = e,
            p = null != u ? u : null != n ? (0, N.DK)(n) : null,
            O = (null == n ? void 0 : n.recurrence_rule) == null || null == p || (0, N.Rp)((0, g.KV)(null == n ? void 0 : n.recurrence_rule), p),
            f = (0, m.Z)(n),
            I = i.useCallback(() => {
                s &&
                    null != n &&
                    (0, h.bO)({
                        eventId: n.id,
                        recurrenceId: p
                    });
            }, [s, n, p]);
        if (null == n || !O) return null;
        let S = (0, T.xt)(n),
            A = (0, T.Z2)(n),
            C = n.entity_type === P.WX.EXTERNAL;
        return (0, r.jsx)(E.Z, {
            className: a()({ [M.clickable]: s }),
            children: (0, r.jsxs)(c.P3F, {
                onClick: I,
                children: [
                    null != n.image &&
                        (0, r.jsx)(b.Z, {
                            source: (0, R.Z)(n),
                            className: M.banner
                        }),
                    (0, r.jsx)(y.ZP, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: M.eventDescription,
                        guildId: n.guild_id,
                        creator: f,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: p
                    }),
                    (0, r.jsxs)('div', {
                        className: M.footerContainer,
                        children: [
                            (0, r.jsx)(L, {
                                guild: l,
                                channel: o,
                                guildScheduledEvent: n,
                                isMember: s
                            }),
                            (0, r.jsx)(U, {
                                isActive: S,
                                isEnded: A,
                                isMember: s,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: p,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: _,
                                isExternal: C
                            })
                        ]
                    })
                ]
            })
        });
    });
