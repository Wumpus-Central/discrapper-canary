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
    E = n(955415),
    h = n(922482),
    I = n(601964),
    p = n(592125),
    C = n(430824),
    T = n(15274),
    g = n(924301),
    O = n(725436),
    S = n(978227),
    N = n(236373),
    f = n(854698),
    A = n(405613),
    R = n(95291),
    m = n(742593),
    P = n(217804),
    y = n(139712),
    b = n(765305),
    D = n(388032),
    v = n(690606);
let U = (e, t) => (n) => {
        (n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n));
    },
    M = (e, t) => (n) => {
        let i = p.Z.getChannel(e.channel_id);
        null != i && (n.stopPropagation(), (0, h.Cq)(i), null == t || t(n));
    },
    L = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case b.WX.STAGE_INSTANCE:
                return M(e, t);
            case b.WX.VOICE:
                return U(e, t);
        }
        return () => {};
    },
    Z = (e, t) => t && [b.WX.STAGE_INSTANCE, b.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    k = r.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: l, channel: o, isMember: a } = e,
            u = (0, s.e7)(
                [C.Z],
                () => {
                    var e;
                    return null == n ? null : null != (e = C.Z.getGuild(n.id)) ? e : new I.ZP(n);
                },
                [n]
            ),
            h = (0, P.u)(l, o),
            p = r.useCallback(
                (e) => {
                    a && null != l && (e.stopPropagation(), (0, d.Bk)(l));
                },
                [a, l]
            ),
            T = r.useCallback(
                (e) => {
                    L(l)(e);
                },
                [l]
            );
        if (null == u) return null;
        let g = null == h ? void 0 : h.IconComponent,
            S = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != g &&
                        (0, i.jsx)(g, {
                            size: 'xs',
                            color: 'currentColor',
                            className: v.channelIcon
                        }),
                    (0, i.jsx)(c.Text, {
                        className: v.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, O.m)(null != (t = null == h ? void 0 : h.locationName) ? t : '', !0)
                    })
                ]
            });
        return (0, i.jsxs)('div', {
            className: v.inviteDetailsContainer,
            children: [
                (0, i.jsx)(E.Z.Icon, {
                    guild: u,
                    onClick: p
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
                                    onClick: p,
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
    j = r.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: r, isActive: l, isEnded: o, isMember: d, isExternal: u, onAcceptInstantInvite: _, onTransitionToInviteChannel: E } = e,
            h = (0, s.e7)([g.ZP], () => g.ZP.isInterestedInEventRecurrence(n, r), [n, r]),
            I = (e) => {
                (e.stopPropagation(), d ? l && E() : _());
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
                        look: h ? a.zx.Looks.OUTLINED : a.zx.Looks.FILLED,
                        onClick: (e) => {
                            (e.stopPropagation(), (0, y.Z)(n, r, t));
                        },
                        children: [
                            h
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
            h = null != d ? d : null != n ? (0, f.DK)(n) : null,
            I = (null == n ? void 0 : n.recurrence_rule) == null || null == h || (0, f.Rp)((0, N.KV)(null == n ? void 0 : n.recurrence_rule), h),
            p = (0, S.Z)(n),
            C = r.useCallback(() => {
                a &&
                    null != n &&
                    (0, T.bO)({
                        eventId: n.id,
                        recurrenceId: h
                    });
            }, [a, n, h]);
        if (null == n || !I) return null;
        let O = (0, g.xt)(n),
            P = (0, g.Z2)(n),
            y = n.entity_type === b.WX.EXTERNAL;
        return (0, i.jsx)(E.Z, {
            className: o()({ [v.clickable]: a }),
            children: (0, i.jsxs)(c.P3F, {
                onClick: C,
                children: [
                    null != n.image &&
                        (0, i.jsx)(R.Z, {
                            source: (0, A.Z)(n),
                            className: v.banner
                        }),
                    (0, i.jsx)(m.ZP, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: v.eventDescription,
                        guildId: n.guild_id,
                        creator: p,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: h
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
                                isActive: O,
                                isEnded: P,
                                isMember: a,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: h,
                                onAcceptInstantInvite: u,
                                onTransitionToInviteChannel: _,
                                isExternal: y
                            })
                        ]
                    })
                ]
            })
        });
    });
