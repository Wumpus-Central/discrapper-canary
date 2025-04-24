n.d(t, {
    Qt: () => k,
    ZP: () => v
}),
    n(953529);
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
    I = n(601964),
    O = n(592125),
    T = n(430824),
    N = n(15274),
    S = n(924301),
    R = n(725436),
    A = n(978227),
    p = n(236373),
    P = n(854698),
    C = n(405613),
    D = n(95291),
    f = n(742593),
    m = n(217804),
    g = n(139712),
    y = n(765305),
    U = n(388032),
    h = n(690606);
let b = (e, t) => (n) => {
        n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n);
    },
    M = (e, t) => (n) => {
        let r = O.Z.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, _.Cq)(r), null == t || t(n));
    },
    k = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case y.WX.STAGE_INSTANCE:
                return M(e, t);
            case y.WX.VOICE:
                return b(e, t);
        }
        return () => {};
    },
    Z = (e, t) => t && [y.WX.STAGE_INSTANCE, y.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    j = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: l, channel: o, isMember: u } = e,
            _ = (0, a.e7)(
                [T.Z],
                () => {
                    var e;
                    return null == n ? null : null != (e = T.Z.getGuild(n.id)) ? e : new I.ZP(n);
                },
                [n]
            ),
            O = (0, m.u)(l, o),
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
        let A = null == O ? void 0 : O.IconComponent,
            p = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != A &&
                        (0, r.jsx)(A, {
                            size: 'xs',
                            color: 'currentColor',
                            className: h.channelIcon
                        }),
                    (0, r.jsx)(s.Text, {
                        className: h.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, R.m)(null != (t = null == O ? void 0 : O.locationName) ? t : '', !0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: h.inviteDetailsContainer,
            children: [
                (0, r.jsx)(d.Z.Icon, {
                    guild: _,
                    onClick: N
                }),
                (0, r.jsxs)('div', {
                    className: h.verticalContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: h.guildChannelInfoContainer,
                            children: [
                                (0, r.jsx)(E.Z, {
                                    guild: _,
                                    tooltipPosition: 'top',
                                    tooltipColor: s.ua7.Colors.PRIMARY,
                                    size: 16,
                                    className: h.guildBadge
                                }),
                                (0, r.jsx)(s.P3F, {
                                    className: h.guildNameClickable,
                                    onClick: N,
                                    children: (0, r.jsx)(s.X6q, {
                                        className: u ? h.guildNameLinkable : h.guildName,
                                        variant: 'text-sm/medium',
                                        children: _.name
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: h.channelInfoContainer,
                            children: Z(l, u)
                                ? (0, r.jsx)(s.P3F, {
                                      className: h.channelLocationLink,
                                      onClick: S,
                                      children: p
                                  })
                                : p
                        })
                    ]
                })
            ]
        });
    }),
    L = i.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: i, isActive: l, isEnded: o, isMember: c, isExternal: u, onAcceptInstantInvite: E, onTransitionToInviteChannel: d } = e,
            _ = (0, a.e7)([S.ZP], () => S.ZP.isInterestedInEventRecurrence(n, i), [n, i]),
            I = (e) => {
                e.stopPropagation(), c ? l && d() : E();
            };
        return c
            ? l
                ? (0, r.jsx)(s.zxk, {
                      className: h.button,
                      size: s.zxk.Sizes.SMALL,
                      onClick: (e) => {
                          u || I(e);
                      },
                      color: u ? s.zxk.Colors.TRANSPARENT : s.zxk.Colors.GREEN,
                      children: u ? U.intl.string(U.t.GoCQxc) : U.intl.string(U.t.XpeFYm)
                  })
                : o
                  ? (0, r.jsx)(s.zxk, {
                        className: h.button,
                        size: s.zxk.Sizes.SMALL,
                        disabled: !0,
                        color: s.zxk.Colors.PRIMARY,
                        look: s.zxk.Looks.OUTLINED,
                        children: U.intl.string(U.t.Pj7Xrq)
                    })
                  : (0, r.jsxs)(s.zxk, {
                        className: h.button,
                        innerClassName: h.innerButton,
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
                                      className: h.buttonIcon
                                  })
                                : (0, r.jsx)(s.Dkj, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: h.buttonIcon
                                  }),
                            U.intl.string(U.t.DlcqlZ)
                        ]
                    })
            : (0, r.jsx)(s.zxk, {
                  className: h.button,
                  size: s.zxk.Sizes.SMALL,
                  onClick: I,
                  color: s.zxk.Colors.GREEN,
                  children: U.intl.string(U.t.XpeFYm)
              });
    }),
    v = i.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: l, channel: a, isMember: c, recurrenceId: u, onAcceptInstantInvite: E, onTransitionToInviteChannel: _ } = e,
            I = null != u ? u : null != n ? (0, P.DK)(n) : null,
            O = (null == n ? void 0 : n.recurrence_rule) == null || null == I || (0, P.Rp)((0, p.KV)(null == n ? void 0 : n.recurrence_rule), I),
            T = (0, A.Z)(n),
            R = i.useCallback(() => {
                c &&
                    null != n &&
                    (0, N.bO)({
                        eventId: n.id,
                        recurrenceId: I
                    });
            }, [c, n, I]);
        if (null == n || !O) return null;
        let m = (0, S.xt)(n),
            g = (0, S.Z2)(n),
            U = n.entity_type === y.WX.EXTERNAL;
        return (0, r.jsx)(d.Z, {
            className: o()({ [h.clickable]: c }),
            children: (0, r.jsxs)(s.P3F, {
                onClick: R,
                children: [
                    null != n.image &&
                        (0, r.jsx)(D.Z, {
                            source: (0, C.Z)(n),
                            className: h.banner
                        }),
                    (0, r.jsx)(f.ZP, {
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
                            (0, r.jsx)(j, {
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
                                recurrenceId: I,
                                onAcceptInstantInvite: E,
                                onTransitionToInviteChannel: _,
                                isExternal: U
                            })
                        ]
                    })
                ]
            })
        });
    });
