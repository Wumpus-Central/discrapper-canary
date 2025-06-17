n.d(t, {
    Qt: () => k,
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
    I = n(601964),
    O = n(592125),
    T = n(430824),
    p = n(15274),
    N = n(924301),
    S = n(725436),
    A = n(978227),
    f = n(236373),
    R = n(854698),
    m = n(405613),
    C = n(95291),
    g = n(742593),
    P = n(217804),
    y = n(139712),
    D = n(765305),
    b = n(388032),
    h = n(690606);
let U = (e, t) => (n) => {
        n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n);
    },
    M = (e, t) => (n) => {
        let r = O.Z.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, E.Cq)(r), null == t || t(n));
    },
    k = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case D.WX.STAGE_INSTANCE:
                return M(e, t);
            case D.WX.VOICE:
                return U(e, t);
        }
        return () => {};
    },
    v = (e, t) => t && [D.WX.STAGE_INSTANCE, D.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    L = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: l, channel: o, isMember: u } = e,
            E = (0, a.e7)(
                [T.Z],
                () => {
                    var e;
                    return null == n ? null : null != (e = T.Z.getGuild(n.id)) ? e : new I.ZP(n);
                },
                [n]
            ),
            O = (0, P.u)(l, o),
            p = i.useCallback(
                (e) => {
                    u && null != l && (e.stopPropagation(), (0, s.Bk)(l));
                },
                [u, l]
            ),
            N = i.useCallback(
                (e) => {
                    k(l)(e);
                },
                [l]
            );
        if (null == E) return null;
        let A = null == O ? void 0 : O.IconComponent,
            f = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != A &&
                        (0, r.jsx)(A, {
                            size: 'xs',
                            color: 'currentColor',
                            className: h.channelIcon
                        }),
                    (0, r.jsx)(c.Text, {
                        className: h.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, S.m)(null != (t = null == O ? void 0 : O.locationName) ? t : '', !0)
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
                            children: v(l, u)
                                ? (0, r.jsx)(c.P3F, {
                                      className: h.channelLocationLink,
                                      onClick: N,
                                      children: f
                                  })
                                : f
                        })
                    ]
                })
            ]
        });
    }),
    Z = i.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: i, isActive: l, isEnded: o, isMember: s, isExternal: u, onAcceptInstantInvite: d, onTransitionToInviteChannel: _ } = e,
            E = (0, a.e7)([N.ZP], () => N.ZP.isInterestedInEventRecurrence(n, i), [n, i]),
            I = (e) => {
                e.stopPropagation(), s ? l && _() : d();
            };
        return s
            ? l
                ? (0, r.jsx)(c.zxk, {
                      className: h.button,
                      size: c.zxk.Sizes.SMALL,
                      onClick: (e) => {
                          u || I(e);
                      },
                      color: u ? c.zxk.Colors.TRANSPARENT : c.zxk.Colors.GREEN,
                      children: u ? b.intl.string(b.t.GoCQxc) : b.intl.string(b.t.XpeFYm)
                  })
                : o
                  ? (0, r.jsx)(c.zxk, {
                        className: h.button,
                        size: c.zxk.Sizes.SMALL,
                        disabled: !0,
                        color: c.zxk.Colors.PRIMARY,
                        look: c.zxk.Looks.OUTLINED,
                        children: b.intl.string(b.t.Pj7Xrq)
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
                            b.intl.string(b.t.DlcqlZ)
                        ]
                    })
            : (0, r.jsx)(c.zxk, {
                  className: h.button,
                  size: c.zxk.Sizes.SMALL,
                  onClick: I,
                  color: c.zxk.Colors.GREEN,
                  children: b.intl.string(b.t.XpeFYm)
              });
    }),
    j = i.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: l, channel: a, isMember: s, recurrenceId: u, onAcceptInstantInvite: d, onTransitionToInviteChannel: E } = e,
            I = null != u ? u : null != n ? (0, R.DK)(n) : null,
            O = (null == n ? void 0 : n.recurrence_rule) == null || null == I || (0, R.Rp)((0, f.KV)(null == n ? void 0 : n.recurrence_rule), I),
            T = (0, A.Z)(n),
            S = i.useCallback(() => {
                s &&
                    null != n &&
                    (0, p.bO)({
                        eventId: n.id,
                        recurrenceId: I
                    });
            }, [s, n, I]);
        if (null == n || !O) return null;
        let P = (0, N.xt)(n),
            y = (0, N.Z2)(n),
            b = n.entity_type === D.WX.EXTERNAL;
        return (0, r.jsx)(_.Z, {
            className: o()({ [h.clickable]: s }),
            children: (0, r.jsxs)(c.P3F, {
                onClick: S,
                children: [
                    null != n.image &&
                        (0, r.jsx)(C.Z, {
                            source: (0, m.Z)(n),
                            className: h.banner
                        }),
                    (0, r.jsx)(g.ZP, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: h.eventDescription,
                        guildId: n.guild_id,
                        creator: T,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: I
                    }),
                    (0, r.jsxs)('div', {
                        className: h.footerContainer,
                        children: [
                            (0, r.jsx)(L, {
                                guild: l,
                                channel: a,
                                guildScheduledEvent: n,
                                isMember: s
                            }),
                            (0, r.jsx)(Z, {
                                isActive: P,
                                isEnded: y,
                                isMember: s,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: I,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: E,
                                isExternal: b
                            })
                        ]
                    })
                ]
            })
        });
    });
