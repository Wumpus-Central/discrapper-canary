n.d(t, {
    Qt: () => M,
    ZP: () => j
}),
    n(266796);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(447543),
    u = n(287734),
    E = n(372769),
    d = n(955415),
    _ = n(922482),
    N = n(601964),
    I = n(592125),
    T = n(430824),
    O = n(15274),
    S = n(924301),
    P = n(725436),
    p = n(978227),
    A = n(236373),
    R = n(854698),
    C = n(405613),
    f = n(95291),
    D = n(742593),
    m = n(217804),
    g = n(139712),
    h = n(765305),
    y = n(388032),
    U = n(883565);
let b = (e, t) => (n) => {
        n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n);
    },
    k = (e, t) => (n) => {
        let r = I.Z.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, _.Cq)(r), null == t || t(n));
    },
    M = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case h.WX.STAGE_INSTANCE:
                return k(e, t);
            case h.WX.VOICE:
                return b(e, t);
        }
        return () => {};
    },
    v = (e, t) => t && [h.WX.STAGE_INSTANCE, h.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    Z = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: l, channel: o, isMember: u } = e,
            _ = (0, a.e7)(
                [T.Z],
                () => {
                    var e;
                    return null == n ? null : null !== (e = T.Z.getGuild(n.id)) && void 0 !== e ? e : new N.ZP(n);
                },
                [n]
            ),
            I = (0, m.u)(l, o),
            O = i.useCallback(
                (e) => {
                    u && null != l && (e.stopPropagation(), (0, c.B)(l));
                },
                [u, l]
            ),
            S = i.useCallback(
                (e) => {
                    M(l)(e);
                },
                [l]
            );
        if (null == _) return null;
        let p = null == I ? void 0 : I.IconComponent,
            A = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != p &&
                        (0, r.jsx)(p, {
                            size: 'xs',
                            color: 'currentColor',
                            className: U.channelIcon
                        }),
                    (0, r.jsx)(s.Text, {
                        className: U.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, P.m)(null !== (t = null == I ? void 0 : I.locationName) && void 0 !== t ? t : '', !0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: U.inviteDetailsContainer,
            children: [
                (0, r.jsx)(d.Z.Icon, {
                    guild: _,
                    onClick: O
                }),
                (0, r.jsxs)('div', {
                    className: U.verticalContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: U.guildChannelInfoContainer,
                            children: [
                                (0, r.jsx)(E.Z, {
                                    guild: _,
                                    tooltipPosition: 'top',
                                    tooltipColor: s.ua7.Colors.PRIMARY,
                                    size: 16,
                                    className: U.guildBadge
                                }),
                                (0, r.jsx)(s.P3F, {
                                    className: U.guildNameClickable,
                                    onClick: O,
                                    children: (0, r.jsx)(s.X6q, {
                                        className: u ? U.guildNameLinkable : U.guildName,
                                        variant: 'text-sm/medium',
                                        children: _.name
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: U.channelInfoContainer,
                            children: v(l, u)
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
    L = i.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: i, isActive: l, isEnded: o, isMember: c, isExternal: u, onAcceptInstantInvite: E, onTransitionToInviteChannel: d } = e,
            _ = (0, a.e7)([S.ZP], () => S.ZP.isInterestedInEventRecurrence(n, i), [n, i]),
            N = (e) => {
                e.stopPropagation(), c ? l && d() : E();
            };
        return c
            ? l
                ? (0, r.jsx)(s.zxk, {
                      className: U.button,
                      size: s.zxk.Sizes.SMALL,
                      onClick: (e) => {
                          u || N(e);
                      },
                      color: u ? s.zxk.Colors.TRANSPARENT : s.zxk.Colors.GREEN,
                      children: u ? y.NW.string(y.t.GoCQxc) : y.NW.string(y.t.XpeFYm)
                  })
                : o
                  ? (0, r.jsx)(s.zxk, {
                        className: U.button,
                        size: s.zxk.Sizes.SMALL,
                        disabled: !0,
                        color: s.zxk.Colors.PRIMARY,
                        look: s.zxk.Looks.OUTLINED,
                        children: y.NW.string(y.t.Pj7Xrq)
                    })
                  : (0, r.jsxs)(s.zxk, {
                        className: U.button,
                        innerClassName: U.innerButton,
                        size: s.zxk.Sizes.SMALL,
                        color: s.zxk.Colors.PRIMARY,
                        look: _ ? s.zxk.Looks.OUTLINED : s.zxk.Looks.FILLED,
                        onClick: (e) => {
                            e.stopPropagation(), (0, g.Z)(n, i, t);
                        },
                        children: [
                            _
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
                            y.NW.string(y.t.DlcqlZ)
                        ]
                    })
            : (0, r.jsx)(s.zxk, {
                  className: U.button,
                  size: s.zxk.Sizes.SMALL,
                  onClick: N,
                  color: s.zxk.Colors.GREEN,
                  children: y.NW.string(y.t.XpeFYm)
              });
    }),
    j = i.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: l, channel: a, isMember: c, recurrenceId: u, onAcceptInstantInvite: E, onTransitionToInviteChannel: _ } = e,
            N = null != u ? u : null != n ? (0, R.DK)(n) : null,
            I = (null == n ? void 0 : n.recurrence_rule) == null || null == N || (0, R.Rp)((0, A.KV)(null == n ? void 0 : n.recurrence_rule), N),
            T = (0, p.Z)(n),
            P = i.useCallback(() => {
                c &&
                    null != n &&
                    (0, O.bO)({
                        eventId: n.id,
                        recurrenceId: N
                    });
            }, [c, n, N]);
        if (null == n || !I) return null;
        let m = (0, S.xt)(n),
            g = (0, S.Z2)(n),
            y = n.entity_type === h.WX.EXTERNAL;
        return (0, r.jsx)(d.Z, {
            className: o()({ [U.clickable]: c }),
            children: (0, r.jsxs)(s.P3F, {
                onClick: P,
                children: [
                    null != n.image &&
                        (0, r.jsx)(f.Z, {
                            source: (0, C.Z)(n),
                            className: U.banner
                        }),
                    (0, r.jsx)(D.ZP, {
                        name: n.name,
                        description: null !== (t = n.description) && void 0 !== t ? t : void 0,
                        descriptionClassName: U.eventDescription,
                        guildId: n.guild_id,
                        creator: T,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: N
                    }),
                    (0, r.jsxs)('div', {
                        className: U.footerContainer,
                        children: [
                            (0, r.jsx)(Z, {
                                guild: l,
                                channel: a,
                                guildScheduledEvent: n,
                                isMember: c
                            }),
                            (0, r.jsx)(L, {
                                isActive: m,
                                isEnded: g,
                                isMember: c,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: N,
                                onAcceptInstantInvite: E,
                                onTransitionToInviteChannel: _,
                                isExternal: y
                            })
                        ]
                    })
                ]
            })
        });
    });
