n.d(t, {
    Qt: () => k,
    ZP: () => L
}),
    n(953529);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(447543),
    u = n(287734),
    E = n(372769),
    d = n(955415),
    _ = n(922482),
    O = n(601964),
    I = n(592125),
    T = n(430824),
    N = n(15274),
    S = n(924301),
    p = n(725436),
    R = n(978227),
    A = n(236373),
    P = n(854698),
    C = n(405613),
    D = n(95291),
    f = n(742593),
    m = n(217804),
    y = n(139712),
    g = n(765305),
    h = n(388032),
    U = n(690606);
let b = (e, t) => (n) => {
        n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n);
    },
    M = (e, t) => (n) => {
        let r = I.Z.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, _.Cq)(r), null == t || t(n));
    },
    k = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case g.WX.STAGE_INSTANCE:
                return M(e, t);
            case g.WX.VOICE:
                return b(e, t);
        }
        return () => {};
    },
    Z = (e, t) => t && [g.WX.STAGE_INSTANCE, g.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    j = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: l, channel: o, isMember: u } = e,
            _ = (0, a.e7)(
                [T.Z],
                () => {
                    var e;
                    return null == n ? null : null != (e = T.Z.getGuild(n.id)) ? e : new O.ZP(n);
                },
                [n]
            ),
            I = (0, m.u)(l, o),
            N = i.useCallback(
                (e) => {
                    u && null != l && (e.stopPropagation(), (0, c.Bk)(l));
                },
                [u, l]
            ),
            S = i.useCallback(
                (e) => {
                    k(l)(e);
                },
                [l]
            );
        if (null == _) return null;
        let R = null == I ? void 0 : I.IconComponent,
            A = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != R &&
                        (0, r.jsx)(R, {
                            size: 'xs',
                            color: 'currentColor',
                            className: U.channelIcon
                        }),
                    (0, r.jsx)(s.Text, {
                        className: U.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, p.m)(null != (t = null == I ? void 0 : I.locationName) ? t : '', !0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: U.inviteDetailsContainer,
            children: [
                (0, r.jsx)(d.Z.Icon, {
                    guild: _,
                    onClick: N
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
                                    onClick: N,
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
                            children: Z(l, u)
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
    v = i.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: i, isActive: l, isEnded: o, isMember: c, isExternal: u, onAcceptInstantInvite: E, onTransitionToInviteChannel: d } = e,
            _ = (0, a.e7)([S.ZP], () => S.ZP.isInterestedInEventRecurrence(n, i), [n, i]),
            O = (e) => {
                e.stopPropagation(), c ? l && d() : E();
            };
        return c
            ? l
                ? (0, r.jsx)(s.zxk, {
                      className: U.button,
                      size: s.zxk.Sizes.SMALL,
                      onClick: (e) => {
                          u || O(e);
                      },
                      color: u ? s.zxk.Colors.TRANSPARENT : s.zxk.Colors.GREEN,
                      children: u ? h.intl.string(h.t.GoCQxc) : h.intl.string(h.t.XpeFYm)
                  })
                : o
                  ? (0, r.jsx)(s.zxk, {
                        className: U.button,
                        size: s.zxk.Sizes.SMALL,
                        disabled: !0,
                        color: s.zxk.Colors.PRIMARY,
                        look: s.zxk.Looks.OUTLINED,
                        children: h.intl.string(h.t.Pj7Xrq)
                    })
                  : (0, r.jsxs)(s.zxk, {
                        className: U.button,
                        innerClassName: U.innerButton,
                        size: s.zxk.Sizes.SMALL,
                        color: s.zxk.Colors.PRIMARY,
                        look: _ ? s.zxk.Looks.OUTLINED : s.zxk.Looks.FILLED,
                        onClick: (e) => {
                            e.stopPropagation(), (0, y.Z)(n, i, t);
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
                            h.intl.string(h.t.DlcqlZ)
                        ]
                    })
            : (0, r.jsx)(s.zxk, {
                  className: U.button,
                  size: s.zxk.Sizes.SMALL,
                  onClick: O,
                  color: s.zxk.Colors.GREEN,
                  children: h.intl.string(h.t.XpeFYm)
              });
    }),
    L = i.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: l, channel: a, isMember: c, recurrenceId: u, onAcceptInstantInvite: E, onTransitionToInviteChannel: _ } = e,
            O = null != u ? u : null != n ? (0, P.DK)(n) : null,
            I = (null == n ? void 0 : n.recurrence_rule) == null || null == O || (0, P.Rp)((0, A.KV)(null == n ? void 0 : n.recurrence_rule), O),
            T = (0, R.Z)(n),
            p = i.useCallback(() => {
                c &&
                    null != n &&
                    (0, N.bO)({
                        eventId: n.id,
                        recurrenceId: O
                    });
            }, [c, n, O]);
        if (null == n || !I) return null;
        let m = (0, S.xt)(n),
            y = (0, S.Z2)(n),
            h = n.entity_type === g.WX.EXTERNAL;
        return (0, r.jsx)(d.Z, {
            className: o()({ [U.clickable]: c }),
            children: (0, r.jsxs)(s.P3F, {
                onClick: p,
                children: [
                    null != n.image &&
                        (0, r.jsx)(D.Z, {
                            source: (0, C.Z)(n),
                            className: U.banner
                        }),
                    (0, r.jsx)(f.ZP, {
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
                            (0, r.jsx)(v, {
                                isActive: m,
                                isEnded: y,
                                isMember: c,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: O,
                                onAcceptInstantInvite: E,
                                onTransitionToInviteChannel: _,
                                isExternal: h
                            })
                        ]
                    })
                ]
            })
        });
    });
