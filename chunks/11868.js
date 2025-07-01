(n.d(t, {
    Qt: () => M,
    ZP: () => j
}),
    n(953529));
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(447543),
    d = n(287734),
    u = n(372769),
    _ = n(955415),
    E = n(922482),
    h = n(601964),
    I = n(592125),
    p = n(430824),
    C = n(15274),
    T = n(924301),
    g = n(725436),
    O = n(978227),
    S = n(236373),
    N = n(854698),
    f = n(405613),
    A = n(95291),
    R = n(742593),
    m = n(217804),
    P = n(139712),
    y = n(765305),
    b = n(388032),
    D = n(690606);
let v = (e, t) => (n) => {
        (n.stopPropagation(), d.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n));
    },
    U = (e, t) => (n) => {
        let i = I.Z.getChannel(e.channel_id);
        null != i && (n.stopPropagation(), (0, E.Cq)(i), null == t || t(n));
    },
    M = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case y.WX.STAGE_INSTANCE:
                return U(e, t);
            case y.WX.VOICE:
                return v(e, t);
        }
        return () => {};
    },
    L = (e, t) => t && [y.WX.STAGE_INSTANCE, y.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    k = r.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: l, channel: o, isMember: d } = e,
            E = (0, s.e7)(
                [p.Z],
                () => {
                    var e;
                    return null == n ? null : null != (e = p.Z.getGuild(n.id)) ? e : new h.ZP(n);
                },
                [n]
            ),
            I = (0, m.u)(l, o),
            C = r.useCallback(
                (e) => {
                    d && null != l && (e.stopPropagation(), (0, c.Bk)(l));
                },
                [d, l]
            ),
            T = r.useCallback(
                (e) => {
                    M(l)(e);
                },
                [l]
            );
        if (null == E) return null;
        let O = null == I ? void 0 : I.IconComponent,
            S = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != O &&
                        (0, i.jsx)(O, {
                            size: 'xs',
                            color: 'currentColor',
                            className: D.channelIcon
                        }),
                    (0, i.jsx)(a.Text, {
                        className: D.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, g.m)(null != (t = null == I ? void 0 : I.locationName) ? t : '', !0)
                    })
                ]
            });
        return (0, i.jsxs)('div', {
            className: D.inviteDetailsContainer,
            children: [
                (0, i.jsx)(_.Z.Icon, {
                    guild: E,
                    onClick: C
                }),
                (0, i.jsxs)('div', {
                    className: D.verticalContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: D.guildChannelInfoContainer,
                            children: [
                                (0, i.jsx)(u.Z, {
                                    guild: E,
                                    tooltipPosition: 'top',
                                    tooltipColor: a.ua7.Colors.PRIMARY,
                                    size: 16,
                                    className: D.guildBadge
                                }),
                                (0, i.jsx)(a.P3F, {
                                    className: D.guildNameClickable,
                                    onClick: C,
                                    children: (0, i.jsx)(a.X6q, {
                                        className: d ? D.guildNameLinkable : D.guildName,
                                        variant: 'text-sm/medium',
                                        children: E.name
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: D.channelInfoContainer,
                            children: L(l, d)
                                ? (0, i.jsx)(a.P3F, {
                                      className: D.channelLocationLink,
                                      onClick: T,
                                      children: S
                                  })
                                : S
                        })
                    ]
                })
            ]
        });
    }),
    Z = r.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: r, isActive: l, isEnded: o, isMember: c, isExternal: d, onAcceptInstantInvite: u, onTransitionToInviteChannel: _ } = e,
            E = (0, s.e7)([T.ZP], () => T.ZP.isInterestedInEventRecurrence(n, r), [n, r]),
            h = (e) => {
                (e.stopPropagation(), c ? l && _() : u());
            };
        return c
            ? l
                ? (0, i.jsx)(a.zxk, {
                      className: D.button,
                      size: a.zxk.Sizes.SMALL,
                      onClick: (e) => {
                          d || h(e);
                      },
                      color: d ? a.zxk.Colors.TRANSPARENT : a.zxk.Colors.GREEN,
                      children: d ? b.intl.string(b.t.GoCQxc) : b.intl.string(b.t.XpeFYm)
                  })
                : o
                  ? (0, i.jsx)(a.zxk, {
                        className: D.button,
                        size: a.zxk.Sizes.SMALL,
                        disabled: !0,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.OUTLINED,
                        children: b.intl.string(b.t.Pj7Xrq)
                    })
                  : (0, i.jsxs)(a.zxk, {
                        className: D.button,
                        innerClassName: D.innerButton,
                        size: a.zxk.Sizes.SMALL,
                        color: a.zxk.Colors.PRIMARY,
                        look: E ? a.zxk.Looks.OUTLINED : a.zxk.Looks.FILLED,
                        onClick: (e) => {
                            (e.stopPropagation(), (0, P.Z)(n, r, t));
                        },
                        children: [
                            E
                                ? (0, i.jsx)(a.dz2, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: D.buttonIcon
                                  })
                                : (0, i.jsx)(a.Dkj, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: D.buttonIcon
                                  }),
                            b.intl.string(b.t.DlcqlZ)
                        ]
                    })
            : (0, i.jsx)(a.zxk, {
                  className: D.button,
                  size: a.zxk.Sizes.SMALL,
                  onClick: h,
                  color: a.zxk.Colors.GREEN,
                  children: b.intl.string(b.t.XpeFYm)
              });
    }),
    j = r.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: l, channel: s, isMember: c, recurrenceId: d, onAcceptInstantInvite: u, onTransitionToInviteChannel: E } = e,
            h = null != d ? d : null != n ? (0, N.DK)(n) : null,
            I = (null == n ? void 0 : n.recurrence_rule) == null || null == h || (0, N.Rp)((0, S.KV)(null == n ? void 0 : n.recurrence_rule), h),
            p = (0, O.Z)(n),
            g = r.useCallback(() => {
                c &&
                    null != n &&
                    (0, C.bO)({
                        eventId: n.id,
                        recurrenceId: h
                    });
            }, [c, n, h]);
        if (null == n || !I) return null;
        let m = (0, T.xt)(n),
            P = (0, T.Z2)(n),
            b = n.entity_type === y.WX.EXTERNAL;
        return (0, i.jsx)(_.Z, {
            className: o()({ [D.clickable]: c }),
            children: (0, i.jsxs)(a.P3F, {
                onClick: g,
                children: [
                    null != n.image &&
                        (0, i.jsx)(A.Z, {
                            source: (0, f.Z)(n),
                            className: D.banner
                        }),
                    (0, i.jsx)(R.ZP, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: D.eventDescription,
                        guildId: n.guild_id,
                        creator: p,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: h
                    }),
                    (0, i.jsxs)('div', {
                        className: D.footerContainer,
                        children: [
                            (0, i.jsx)(k, {
                                guild: l,
                                channel: s,
                                guildScheduledEvent: n,
                                isMember: c
                            }),
                            (0, i.jsx)(Z, {
                                isActive: m,
                                isEnded: P,
                                isMember: c,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: h,
                                onAcceptInstantInvite: u,
                                onTransitionToInviteChannel: E,
                                isExternal: b
                            })
                        ]
                    })
                ]
            })
        });
    });
