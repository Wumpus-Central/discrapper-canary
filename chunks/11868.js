n.d(t, {
    Qt: () => k,
    ZP: () => L,
}),
    n(953529);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(755721),
    c = n(481060),
    u = n(447543),
    d = n(287734),
    m = n(372769),
    p = n(955415),
    v = n(922482),
    f = n(592125),
    g = n(430824),
    b = n(411198),
    j = n(15274),
    x = n(924301),
    h = n(725436),
    N = n(978227),
    O = n(236373),
    y = n(954313),
    E = n(405613),
    P = n(95291),
    I = n(742593),
    S = n(217804),
    C = n(139712),
    w = n(765305),
    T = n(388032),
    Z = n(182279);
let k = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case w.WX.STAGE_INSTANCE:
                return (n) => {
                    let r = f.Z.getChannel(e.channel_id);
                    null != r && (n.stopPropagation(), (0, v.Cq)(r), null == t || t(n));
                };
            case w.WX.VOICE:
                return (n) => {
                    n.stopPropagation(), d.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n);
                };
        }
        return () => {};
    },
    D = l.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: i, channel: s, isMember: o } = e,
            d = (0, a.e7)([g.Z], () => {
                if (null == n) return null;
                let e = g.Z.getGuild(n.id);
                return null != e ? e : (0, b.lM)(n) ? n : (0, b.Qs)(n);
            }, [n]),
            v = (0, S.u)(i, s),
            f = l.useCallback(
                (e) => {
                    o && null != i && (e.stopPropagation(), (0, u.Bk)(i));
                },
                [o, i],
            ),
            j = l.useCallback(
                (e) => {
                    k(i)(e);
                },
                [i],
            );
        if (null == d) return null;
        let x = null == v ? void 0 : v.IconComponent,
            N = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != x &&
                        (0, r.jsx)(x, {
                            size: "xs",
                            color: "currentColor",
                            className: Z.channelIcon,
                        }),
                    (0, r.jsx)(c.Text, {
                        className: Z.channelDescription,
                        variant: "text-xs/normal",
                        children: (0, h.m)(null != (t = null == v ? void 0 : v.locationName) ? t : "", !0),
                    }),
                ],
            });
        return (0, r.jsxs)("div", {
            className: Z.inviteDetailsContainer,
            children: [
                (0, r.jsx)(p.Z.Icon, {
                    guild: d,
                    onClick: f,
                }),
                (0, r.jsxs)("div", {
                    className: Z.verticalContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: Z.guildChannelInfoContainer,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    guild: d,
                                    tooltipPosition: "top",
                                    tooltipColor: c.ua7.Colors.PRIMARY,
                                    size: 16,
                                    className: Z.guildBadge,
                                }),
                                (0, r.jsx)(c.P3F, {
                                    className: Z.guildNameClickable,
                                    onClick: f,
                                    children: (0, r.jsx)(c.X6q, {
                                        className: o ? Z.guildNameLinkable : Z.guildName,
                                        variant: "text-sm/medium",
                                        children: d.name,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: Z.channelInfoContainer,
                            children:
                                o && [w.WX.STAGE_INSTANCE, w.WX.VOICE].includes(null == i ? void 0 : i.entity_type)
                                    ? (0, r.jsx)(c.P3F, {
                                          className: Z.channelLocationLink,
                                          onClick: j,
                                          children: N,
                                      })
                                    : N,
                        }),
                    ],
                }),
            ],
        });
    }),
    z = l.memo(function (e) {
        let {
                guildId: t,
                guildScheduledEventId: n,
                recurrenceId: l,
                isActive: i,
                isEnded: s,
                isMember: u,
                isExternal: d,
                onAcceptInstantInvite: m,
                onTransitionToInviteChannel: p,
            } = e,
            v = (0, a.e7)([x.ZP], () => x.ZP.isInterestedInEventRecurrence(n, l), [n, l]),
            f = (e) => {
                e.stopPropagation(), u ? i && p() : m();
            };
        return u
            ? i
                ? (0, r.jsx)(o.zx, {
                      className: Z.button,
                      size: o.zx.Sizes.SMALL,
                      onClick: (e) => {
                          d || f(e);
                      },
                      color: d ? o.zx.Colors.TRANSPARENT : o.zx.Colors.GREEN,
                      children: d ? T.intl.string(T.t.GoCQxc) : T.intl.string(T.t.XpeFYm),
                  })
                : s
                  ? (0, r.jsx)(o.zx, {
                        className: Z.button,
                        size: o.zx.Sizes.SMALL,
                        disabled: !0,
                        color: o.zx.Colors.PRIMARY,
                        look: o.zx.Looks.OUTLINED,
                        children: T.intl.string(T.t.Pj7Xrq),
                    })
                  : (0, r.jsxs)(o.zx, {
                        className: Z.button,
                        innerClassName: Z.innerButton,
                        size: o.zx.Sizes.SMALL,
                        color: o.zx.Colors.PRIMARY,
                        look: v ? o.zx.Looks.OUTLINED : o.zx.Looks.FILLED,
                        onClick: (e) => {
                            e.stopPropagation(), (0, C.Z)(n, l, t);
                        },
                        children: [
                            v
                                ? (0, r.jsx)(c.dz2, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: Z.buttonIcon,
                                  })
                                : (0, r.jsx)(c.Dkj, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: Z.buttonIcon,
                                  }),
                            T.intl.string(T.t.DlcqlZ),
                        ],
                    })
            : (0, r.jsx)(o.zx, {
                  className: Z.button,
                  size: o.zx.Sizes.SMALL,
                  onClick: f,
                  color: o.zx.Colors.GREEN,
                  children: T.intl.string(T.t.XpeFYm),
              });
    }),
    L = l.memo(function (e) {
        var t;
        let {
                guildScheduledEvent: n,
                guild: i,
                channel: a,
                isMember: o,
                recurrenceId: u,
                onAcceptInstantInvite: d,
                onTransitionToInviteChannel: m,
            } = e,
            v = null != u ? u : null != n ? (0, y.DK)(n) : null,
            f =
                (null == n ? void 0 : n.recurrence_rule) == null ||
                null == v ||
                (0, y.Rp)((0, O.KV)(null == n ? void 0 : n.recurrence_rule), v),
            g = (0, N.Z)(n),
            b = l.useCallback(() => {
                o &&
                    null != n &&
                    (0, j.bO)({
                        eventId: n.id,
                        recurrenceId: v,
                    });
            }, [o, n, v]);
        if (null == n || !f) return null;
        let h = (0, x.xt)(n),
            S = (0, x.Z2)(n),
            C = n.entity_type === w.WX.EXTERNAL;
        return (0, r.jsx)(p.Z, {
            className: s()({ [Z.clickable]: o }),
            children: (0, r.jsxs)(c.P3F, {
                onClick: b,
                children: [
                    null != n.image &&
                        (0, r.jsx)(P.Z, {
                            source: (0, E.Z)(n),
                            className: Z.banner,
                        }),
                    (0, r.jsx)(I.ZP, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: Z.eventDescription,
                        guildId: n.guild_id,
                        creator: g,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: v,
                    }),
                    (0, r.jsxs)("div", {
                        className: Z.footerContainer,
                        children: [
                            (0, r.jsx)(D, {
                                guild: i,
                                channel: a,
                                guildScheduledEvent: n,
                                isMember: o,
                            }),
                            (0, r.jsx)(z, {
                                isActive: h,
                                isEnded: S,
                                isMember: o,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: v,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: m,
                                isExternal: C,
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
