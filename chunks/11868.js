n.d(t, {
    Qt: () => L,
    ZP: () => j
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
    d = n(372769),
    E = n(955415),
    _ = n(922482),
    I = n(601964),
    O = n(592125),
    N = n(430824),
    T = n(15274),
    S = n(924301),
    p = n(725436),
    A = n(978227),
    R = n(236373),
    P = n(854698),
    f = n(405613),
    C = n(95291),
    D = n(742593),
    g = n(217804),
    y = n(139712),
    m = n(765305),
    h = n(388032),
    b = n(690606);
let U = (e, t) => (n) => {
        n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n);
    },
    M = (e, t) => (n) => {
        let r = O.Z.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, _.Cq)(r), null == t || t(n));
    },
    L = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case m.WX.STAGE_INSTANCE:
                return M(e, t);
            case m.WX.VOICE:
                return U(e, t);
        }
        return () => {};
    },
    Z = (e, t) => t && [m.WX.STAGE_INSTANCE, m.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    k = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: l, channel: o, isMember: u } = e,
            _ = (0, a.e7)(
                [N.Z],
                () => {
                    var e;
                    return null == n ? null : null != (e = N.Z.getGuild(n.id)) ? e : new I.ZP(n);
                },
                [n]
            ),
            O = (0, g.u)(l, o),
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
        let A = null == O ? void 0 : O.IconComponent,
            R = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != A &&
                        (0, r.jsx)(A, {
                            size: 'xs',
                            color: 'currentColor',
                            className: b.channelIcon
                        }),
                    (0, r.jsx)(s.Text, {
                        className: b.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, p.m)(null != (t = null == O ? void 0 : O.locationName) ? t : '', !0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: b.inviteDetailsContainer,
            children: [
                (0, r.jsx)(E.Z.Icon, {
                    guild: _,
                    onClick: T
                }),
                (0, r.jsxs)('div', {
                    className: b.verticalContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.guildChannelInfoContainer,
                            children: [
                                (0, r.jsx)(d.Z, {
                                    guild: _,
                                    tooltipPosition: 'top',
                                    tooltipColor: s.ua7.Colors.PRIMARY,
                                    size: 16,
                                    className: b.guildBadge
                                }),
                                (0, r.jsx)(s.P3F, {
                                    className: b.guildNameClickable,
                                    onClick: T,
                                    children: (0, r.jsx)(s.X6q, {
                                        className: u ? b.guildNameLinkable : b.guildName,
                                        variant: 'text-sm/medium',
                                        children: _.name
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: b.channelInfoContainer,
                            children: Z(l, u)
                                ? (0, r.jsx)(s.P3F, {
                                      className: b.channelLocationLink,
                                      onClick: S,
                                      children: R
                                  })
                                : R
                        })
                    ]
                })
            ]
        });
    }),
    v = i.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: i, isActive: l, isEnded: o, isMember: c, isExternal: u, onAcceptInstantInvite: d, onTransitionToInviteChannel: E } = e,
            _ = (0, a.e7)([S.ZP], () => S.ZP.isInterestedInEventRecurrence(n, i), [n, i]),
            I = (e) => {
                e.stopPropagation(), c ? l && E() : d();
            };
        return c
            ? l
                ? (0, r.jsx)(s.zxk, {
                      className: b.button,
                      size: s.zxk.Sizes.SMALL,
                      onClick: (e) => {
                          u || I(e);
                      },
                      color: u ? s.zxk.Colors.TRANSPARENT : s.zxk.Colors.GREEN,
                      children: u ? h.NW.string(h.t.GoCQxc) : h.NW.string(h.t.XpeFYm)
                  })
                : o
                  ? (0, r.jsx)(s.zxk, {
                        className: b.button,
                        size: s.zxk.Sizes.SMALL,
                        disabled: !0,
                        color: s.zxk.Colors.PRIMARY,
                        look: s.zxk.Looks.OUTLINED,
                        children: h.NW.string(h.t.Pj7Xrq)
                    })
                  : (0, r.jsxs)(s.zxk, {
                        className: b.button,
                        innerClassName: b.innerButton,
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
                                      className: b.buttonIcon
                                  })
                                : (0, r.jsx)(s.Dkj, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: b.buttonIcon
                                  }),
                            h.NW.string(h.t.DlcqlZ)
                        ]
                    })
            : (0, r.jsx)(s.zxk, {
                  className: b.button,
                  size: s.zxk.Sizes.SMALL,
                  onClick: I,
                  color: s.zxk.Colors.GREEN,
                  children: h.NW.string(h.t.XpeFYm)
              });
    }),
    j = i.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: l, channel: a, isMember: c, recurrenceId: u, onAcceptInstantInvite: d, onTransitionToInviteChannel: _ } = e,
            I = null != u ? u : null != n ? (0, P.DK)(n) : null,
            O = (null == n ? void 0 : n.recurrence_rule) == null || null == I || (0, P.Rp)((0, R.KV)(null == n ? void 0 : n.recurrence_rule), I),
            N = (0, A.Z)(n),
            p = i.useCallback(() => {
                c &&
                    null != n &&
                    (0, T.bO)({
                        eventId: n.id,
                        recurrenceId: I
                    });
            }, [c, n, I]);
        if (null == n || !O) return null;
        let g = (0, S.xt)(n),
            y = (0, S.Z2)(n),
            h = n.entity_type === m.WX.EXTERNAL;
        return (0, r.jsx)(E.Z, {
            className: o()({ [b.clickable]: c }),
            children: (0, r.jsxs)(s.P3F, {
                onClick: p,
                children: [
                    null != n.image &&
                        (0, r.jsx)(C.Z, {
                            source: (0, f.Z)(n),
                            className: b.banner
                        }),
                    (0, r.jsx)(D.ZP, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: b.eventDescription,
                        guildId: n.guild_id,
                        creator: N,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: I
                    }),
                    (0, r.jsxs)('div', {
                        className: b.footerContainer,
                        children: [
                            (0, r.jsx)(k, {
                                guild: l,
                                channel: a,
                                guildScheduledEvent: n,
                                isMember: c
                            }),
                            (0, r.jsx)(v, {
                                isActive: g,
                                isEnded: y,
                                isMember: c,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: I,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: _,
                                isExternal: h
                            })
                        ]
                    })
                ]
            })
        });
    });
