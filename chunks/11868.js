(n.d(t, {
    Qt: () => x,
    ZP: () => U
}),
    n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(447543),
    d = n(287734),
    f = n(372769),
    _ = n(955415),
    p = n(922482),
    h = n(592125),
    m = n(430824),
    g = n(411198),
    E = n(15274),
    b = n(924301),
    y = n(725436),
    O = n(978227),
    v = n(236373),
    I = n(854698),
    T = n(405613),
    S = n(95291),
    A = n(742593),
    N = n(217804),
    C = n(139712),
    w = n(765305),
    R = n(388032),
    P = n(690606);
let D = (e, t) => (n) => {
        (n.stopPropagation(), d.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n));
    },
    L = (e, t) => (n) => {
        let r = h.Z.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, p.Cq)(r), null == t || t(n));
    },
    x = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case w.WX.STAGE_INSTANCE:
                return L(e, t);
            case w.WX.VOICE:
                return D(e, t);
        }
        return () => {};
    },
    k = (e, t) => t && [w.WX.STAGE_INSTANCE, w.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    j = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: a, channel: o, isMember: l } = e,
            d = (0, s.e7)(
                [m.Z],
                () => {
                    if (null == n) return null;
                    let e = m.Z.getGuild(n.id);
                    return null != e ? e : (0, g.lM)(n) ? n : (0, g.Qs)(n);
                },
                [n]
            ),
            p = (0, N.u)(a, o),
            h = i.useCallback(
                (e) => {
                    l && null != a && (e.stopPropagation(), (0, u.Bk)(a));
                },
                [l, a]
            ),
            E = i.useCallback(
                (e) => {
                    x(a)(e);
                },
                [a]
            );
        if (null == d) return null;
        let b = null == p ? void 0 : p.IconComponent,
            O = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != b &&
                        (0, r.jsx)(b, {
                            size: 'xs',
                            color: 'currentColor',
                            className: P.channelIcon
                        }),
                    (0, r.jsx)(c.Text, {
                        className: P.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, y.m)(null != (t = null == p ? void 0 : p.locationName) ? t : '', !0)
                    })
                ]
            });
        return (0, r.jsxs)('div', {
            className: P.inviteDetailsContainer,
            children: [
                (0, r.jsx)(_.Z.Icon, {
                    guild: d,
                    onClick: h
                }),
                (0, r.jsxs)('div', {
                    className: P.verticalContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: P.guildChannelInfoContainer,
                            children: [
                                (0, r.jsx)(f.Z, {
                                    guild: d,
                                    tooltipPosition: 'top',
                                    tooltipColor: c.ua7.Colors.PRIMARY,
                                    size: 16,
                                    className: P.guildBadge
                                }),
                                (0, r.jsx)(c.P3F, {
                                    className: P.guildNameClickable,
                                    onClick: h,
                                    children: (0, r.jsx)(c.X6q, {
                                        className: l ? P.guildNameLinkable : P.guildName,
                                        variant: 'text-sm/medium',
                                        children: d.name
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: P.channelInfoContainer,
                            children: k(a, l)
                                ? (0, r.jsx)(c.P3F, {
                                      className: P.channelLocationLink,
                                      onClick: E,
                                      children: O
                                  })
                                : O
                        })
                    ]
                })
            ]
        });
    }),
    M = i.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: i, isActive: a, isEnded: o, isMember: u, isExternal: d, onAcceptInstantInvite: f, onTransitionToInviteChannel: _ } = e,
            p = (0, s.e7)([b.ZP], () => b.ZP.isInterestedInEventRecurrence(n, i), [n, i]),
            h = (e) => {
                (e.stopPropagation(), (0, C.Z)(n, i, t));
            },
            m = (e) => {
                (e.stopPropagation(), u ? a && _() : f());
            };
        return u
            ? a
                ? (0, r.jsx)(l.zx, {
                      className: P.button,
                      size: l.zx.Sizes.SMALL,
                      onClick: (e) => {
                          d || m(e);
                      },
                      color: d ? l.zx.Colors.TRANSPARENT : l.zx.Colors.GREEN,
                      children: d ? R.intl.string(R.t.GoCQxc) : R.intl.string(R.t.XpeFYm)
                  })
                : o
                  ? (0, r.jsx)(l.zx, {
                        className: P.button,
                        size: l.zx.Sizes.SMALL,
                        disabled: !0,
                        color: l.zx.Colors.PRIMARY,
                        look: l.zx.Looks.OUTLINED,
                        children: R.intl.string(R.t.Pj7Xrq)
                    })
                  : (0, r.jsxs)(l.zx, {
                        className: P.button,
                        innerClassName: P.innerButton,
                        size: l.zx.Sizes.SMALL,
                        color: l.zx.Colors.PRIMARY,
                        look: p ? l.zx.Looks.OUTLINED : l.zx.Looks.FILLED,
                        onClick: h,
                        children: [
                            p
                                ? (0, r.jsx)(c.dz2, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: P.buttonIcon
                                  })
                                : (0, r.jsx)(c.Dkj, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: P.buttonIcon
                                  }),
                            R.intl.string(R.t.DlcqlZ)
                        ]
                    })
            : (0, r.jsx)(l.zx, {
                  className: P.button,
                  size: l.zx.Sizes.SMALL,
                  onClick: m,
                  color: l.zx.Colors.GREEN,
                  children: R.intl.string(R.t.XpeFYm)
              });
    }),
    U = i.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: a, channel: s, isMember: l, recurrenceId: u, onAcceptInstantInvite: d, onTransitionToInviteChannel: f } = e,
            p = null != u ? u : null != n ? (0, I.DK)(n) : null,
            h = (null == n ? void 0 : n.recurrence_rule) == null || null == p || (0, I.Rp)((0, v.KV)(null == n ? void 0 : n.recurrence_rule), p),
            m = (0, O.Z)(n),
            g = i.useCallback(() => {
                l &&
                    null != n &&
                    (0, E.bO)({
                        eventId: n.id,
                        recurrenceId: p
                    });
            }, [l, n, p]);
        if (null == n || !h) return null;
        let y = (0, b.xt)(n),
            N = (0, b.Z2)(n),
            C = n.entity_type === w.WX.EXTERNAL;
        return (0, r.jsx)(_.Z, {
            className: o()({ [P.clickable]: l }),
            children: (0, r.jsxs)(c.P3F, {
                onClick: g,
                children: [
                    null != n.image &&
                        (0, r.jsx)(S.Z, {
                            source: (0, T.Z)(n),
                            className: P.banner
                        }),
                    (0, r.jsx)(A.ZP, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: P.eventDescription,
                        guildId: n.guild_id,
                        creator: m,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: p
                    }),
                    (0, r.jsxs)('div', {
                        className: P.footerContainer,
                        children: [
                            (0, r.jsx)(j, {
                                guild: a,
                                channel: s,
                                guildScheduledEvent: n,
                                isMember: l
                            }),
                            (0, r.jsx)(M, {
                                isActive: y,
                                isEnded: N,
                                isMember: l,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: p,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: f,
                                isExternal: C
                            })
                        ]
                    })
                ]
            })
        });
    });
