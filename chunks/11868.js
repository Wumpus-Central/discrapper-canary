n.d(t, {
    Qt: () => L,
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
    N = n(592125),
    O = n(430824),
    T = n(15274),
    S = n(924301),
    p = n(725436),
    R = n(978227),
    A = n(236373),
    P = n(854698),
    f = n(405613),
    C = n(95291),
    D = n(742593),
    g = n(217804),
    m = n(139712),
    y = n(765305),
    h = n(388032),
    U = n(690606);
let b = (e, t) => (n) => {
        n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n);
    },
    M = (e, t) => (n) => {
        let r = N.Z.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, _.Cq)(r), null == t || t(n));
    },
    L = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case y.WX.STAGE_INSTANCE:
                return M(e, t);
            case y.WX.VOICE:
                return b(e, t);
        }
        return () => {};
    },
    Z = (e, t) => t && [y.WX.STAGE_INSTANCE, y.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    k = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: l, channel: o, isMember: u } = e,
            _ = (0, a.e7)(
                [O.Z],
                () => {
                    var e;
                    return null == n ? null : null != (e = O.Z.getGuild(n.id)) ? e : new I.ZP(n);
                },
                [n]
            ),
            N = (0, g.u)(l, o),
            T = i.useCallback(
                (e) => {
                    u && null != l && (e.stopPropagation(), (0, c.Bk)(l));
                },
                [u, l]
            ),
            S = i.useCallback(
                (e) => {
                    L(l)(e);
                },
                [l]
            );
        if (null == _) return null;
        let R = null == N ? void 0 : N.IconComponent,
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
                        children: (0, p.m)(null != (t = null == N ? void 0 : N.locationName) ? t : '', !0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: U.inviteDetailsContainer,
            children: [
                (0, r.jsx)(d.Z.Icon, {
                    guild: _,
                    onClick: T
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
                                    onClick: T,
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
    j = i.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: i, isActive: l, isEnded: o, isMember: c, isExternal: u, onAcceptInstantInvite: E, onTransitionToInviteChannel: d } = e,
            _ = (0, a.e7)([S.ZP], () => S.ZP.isInterestedInEventRecurrence(n, i), [n, i]),
            I = (e) => {
                e.stopPropagation(), c ? l && d() : E();
            };
        return c
            ? l
                ? (0, r.jsx)(s.zxk, {
                      className: U.button,
                      size: s.zxk.Sizes.SMALL,
                      onClick: (e) => {
                          u || I(e);
                      },
                      color: u ? s.zxk.Colors.TRANSPARENT : s.zxk.Colors.GREEN,
                      children: u ? h.NW.string(h.t.GoCQxc) : h.NW.string(h.t.XpeFYm)
                  })
                : o
                  ? (0, r.jsx)(s.zxk, {
                        className: U.button,
                        size: s.zxk.Sizes.SMALL,
                        disabled: !0,
                        color: s.zxk.Colors.PRIMARY,
                        look: s.zxk.Looks.OUTLINED,
                        children: h.NW.string(h.t.Pj7Xrq)
                    })
                  : (0, r.jsxs)(s.zxk, {
                        className: U.button,
                        innerClassName: U.innerButton,
                        size: s.zxk.Sizes.SMALL,
                        color: s.zxk.Colors.PRIMARY,
                        look: _ ? s.zxk.Looks.OUTLINED : s.zxk.Looks.FILLED,
                        onClick: (e) => {
                            e.stopPropagation(), (0, m.Z)(n, i, t);
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
                            h.NW.string(h.t.DlcqlZ)
                        ]
                    })
            : (0, r.jsx)(s.zxk, {
                  className: U.button,
                  size: s.zxk.Sizes.SMALL,
                  onClick: I,
                  color: s.zxk.Colors.GREEN,
                  children: h.NW.string(h.t.XpeFYm)
              });
    }),
    v = i.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: l, channel: a, isMember: c, recurrenceId: u, onAcceptInstantInvite: E, onTransitionToInviteChannel: _ } = e,
            I = null != u ? u : null != n ? (0, P.DK)(n) : null,
            N = (null == n ? void 0 : n.recurrence_rule) == null || null == I || (0, P.Rp)((0, A.KV)(null == n ? void 0 : n.recurrence_rule), I),
            O = (0, R.Z)(n),
            p = i.useCallback(() => {
                c &&
                    null != n &&
                    (0, T.bO)({
                        eventId: n.id,
                        recurrenceId: I
                    });
            }, [c, n, I]);
        if (null == n || !N) return null;
        let g = (0, S.xt)(n),
            m = (0, S.Z2)(n),
            h = n.entity_type === y.WX.EXTERNAL;
        return (0, r.jsx)(d.Z, {
            className: o()({ [U.clickable]: c }),
            children: (0, r.jsxs)(s.P3F, {
                onClick: p,
                children: [
                    null != n.image &&
                        (0, r.jsx)(C.Z, {
                            source: (0, f.Z)(n),
                            className: U.banner
                        }),
                    (0, r.jsx)(D.ZP, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: U.eventDescription,
                        guildId: n.guild_id,
                        creator: O,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: I
                    }),
                    (0, r.jsxs)('div', {
                        className: U.footerContainer,
                        children: [
                            (0, r.jsx)(k, {
                                guild: l,
                                channel: a,
                                guildScheduledEvent: n,
                                isMember: c
                            }),
                            (0, r.jsx)(j, {
                                isActive: g,
                                isEnded: m,
                                isMember: c,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: I,
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
