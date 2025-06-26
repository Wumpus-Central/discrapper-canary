n.d(t, {
    Qt: () => v,
    ZP: () => j
}),
    n(953529);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    c = n(481060),
    s = n(447543),
    u = n(287734),
    d = n(372769),
    _ = n(955415),
    E = n(922482),
    O = n(601964),
    I = n(592125),
    T = n(430824),
    p = n(15274),
    S = n(924301),
    N = n(725436),
    f = n(978227),
    m = n(236373),
    A = n(854698),
    R = n(405613),
    g = n(95291),
    P = n(742593),
    C = n(217804),
    y = n(139712),
    b = n(765305),
    D = n(388032),
    h = n(690606);
let U = (e, t) => (n) => {
        n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n);
    },
    M = (e, t) => (n) => {
        let r = I.Z.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, E.Cq)(r), null == t || t(n));
    },
    v = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case b.WX.STAGE_INSTANCE:
                return M(e, t);
            case b.WX.VOICE:
                return U(e, t);
        }
        return () => {};
    },
    k = (e, t) => t && [b.WX.STAGE_INSTANCE, b.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    Z = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: l, channel: o, isMember: u } = e,
            E = (0, a.e7)(
                [T.Z],
                () => {
                    var e;
                    return null == n ? null : null != (e = T.Z.getGuild(n.id)) ? e : new O.ZP(n);
                },
                [n]
            ),
            I = (0, C.u)(l, o),
            p = i.useCallback(
                (e) => {
                    u && null != l && (e.stopPropagation(), (0, s.Bk)(l));
                },
                [u, l]
            ),
            S = i.useCallback(
                (e) => {
                    v(l)(e);
                },
                [l]
            );
        if (null == E) return null;
        let f = null == I ? void 0 : I.IconComponent,
            m = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != f &&
                        (0, r.jsx)(f, {
                            size: 'xs',
                            color: 'currentColor',
                            className: h.channelIcon
                        }),
                    (0, r.jsx)(c.Text, {
                        className: h.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, N.m)(null != (t = null == I ? void 0 : I.locationName) ? t : '', !0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: h.inviteDetailsContainer,
            children: [
                (0, r.jsx)(_.Z.Icon, {
                    guild: E,
                    onClick: p
                }),
                (0, r.jsxs)('div', {
                    className: h.verticalContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: h.guildChannelInfoContainer,
                            children: [
                                (0, r.jsx)(d.Z, {
                                    guild: E,
                                    tooltipPosition: 'top',
                                    tooltipColor: c.ua7.Colors.PRIMARY,
                                    size: 16,
                                    className: h.guildBadge
                                }),
                                (0, r.jsx)(c.P3F, {
                                    className: h.guildNameClickable,
                                    onClick: p,
                                    children: (0, r.jsx)(c.X6q, {
                                        className: u ? h.guildNameLinkable : h.guildName,
                                        variant: 'text-sm/medium',
                                        children: E.name
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: h.channelInfoContainer,
                            children: k(l, u)
                                ? (0, r.jsx)(c.P3F, {
                                      className: h.channelLocationLink,
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
    L = i.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: i, isActive: l, isEnded: o, isMember: s, isExternal: u, onAcceptInstantInvite: d, onTransitionToInviteChannel: _ } = e,
            E = (0, a.e7)([S.ZP], () => S.ZP.isInterestedInEventRecurrence(n, i), [n, i]),
            O = (e) => {
                e.stopPropagation(), s ? l && _() : d();
            };
        return s
            ? l
                ? (0, r.jsx)(c.zxk, {
                      className: h.button,
                      size: c.zxk.Sizes.SMALL,
                      onClick: (e) => {
                          u || O(e);
                      },
                      color: u ? c.zxk.Colors.TRANSPARENT : c.zxk.Colors.GREEN,
                      children: u ? D.intl.string(D.t.GoCQxc) : D.intl.string(D.t.XpeFYm)
                  })
                : o
                  ? (0, r.jsx)(c.zxk, {
                        className: h.button,
                        size: c.zxk.Sizes.SMALL,
                        disabled: !0,
                        color: c.zxk.Colors.PRIMARY,
                        look: c.zxk.Looks.OUTLINED,
                        children: D.intl.string(D.t.Pj7Xrq)
                    })
                  : (0, r.jsxs)(c.zxk, {
                        className: h.button,
                        innerClassName: h.innerButton,
                        size: c.zxk.Sizes.SMALL,
                        color: c.zxk.Colors.PRIMARY,
                        look: E ? c.zxk.Looks.OUTLINED : c.zxk.Looks.FILLED,
                        onClick: (e) => {
                            e.stopPropagation(), (0, y.Z)(n, i, t);
                        },
                        children: [
                            E
                                ? (0, r.jsx)(c.dz2, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: h.buttonIcon
                                  })
                                : (0, r.jsx)(c.Dkj, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: h.buttonIcon
                                  }),
                            D.intl.string(D.t.DlcqlZ)
                        ]
                    })
            : (0, r.jsx)(c.zxk, {
                  className: h.button,
                  size: c.zxk.Sizes.SMALL,
                  onClick: O,
                  color: c.zxk.Colors.GREEN,
                  children: D.intl.string(D.t.XpeFYm)
              });
    }),
    j = i.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: l, channel: a, isMember: s, recurrenceId: u, onAcceptInstantInvite: d, onTransitionToInviteChannel: E } = e,
            O = null != u ? u : null != n ? (0, A.DK)(n) : null,
            I = (null == n ? void 0 : n.recurrence_rule) == null || null == O || (0, A.Rp)((0, m.KV)(null == n ? void 0 : n.recurrence_rule), O),
            T = (0, f.Z)(n),
            N = i.useCallback(() => {
                s &&
                    null != n &&
                    (0, p.bO)({
                        eventId: n.id,
                        recurrenceId: O
                    });
            }, [s, n, O]);
        if (null == n || !I) return null;
        let C = (0, S.xt)(n),
            y = (0, S.Z2)(n),
            D = n.entity_type === b.WX.EXTERNAL;
        return (0, r.jsx)(_.Z, {
            className: o()({ [h.clickable]: s }),
            children: (0, r.jsxs)(c.P3F, {
                onClick: N,
                children: [
                    null != n.image &&
                        (0, r.jsx)(g.Z, {
                            source: (0, R.Z)(n),
                            className: h.banner
                        }),
                    (0, r.jsx)(P.ZP, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: h.eventDescription,
                        guildId: n.guild_id,
                        creator: T,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: O
                    }),
                    (0, r.jsxs)('div', {
                        className: h.footerContainer,
                        children: [
                            (0, r.jsx)(Z, {
                                guild: l,
                                channel: a,
                                guildScheduledEvent: n,
                                isMember: s
                            }),
                            (0, r.jsx)(L, {
                                isActive: C,
                                isEnded: y,
                                isMember: s,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: O,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: E,
                                isExternal: D
                            })
                        ]
                    })
                ]
            })
        });
    });
