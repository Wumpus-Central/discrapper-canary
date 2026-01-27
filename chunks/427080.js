n.d(t, {
    Ay: () => D,
    GI: () => w,
}),
    n(228524);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    c = n(397927),
    o = n(846293),
    u = n(956793),
    d = n(714991),
    m = n(529200),
    v = n(323443),
    p = n(734057),
    x = n(71393),
    g = n(860689),
    j = n(707592),
    h = n(698441),
    N = n(435328),
    f = n(408607),
    y = n(794782),
    E = n(974930),
    b = n(691012),
    I = n(850183),
    A = n(557582),
    C = n(515115),
    O = n(666394),
    T = n(988794),
    S = n(985018),
    P = n(467946);
let w = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case T.Ps.STAGE_INSTANCE:
                return (n) => {
                    let l = p.A.getChannel(e.channel_id);
                    null != l && (n.stopPropagation(), (0, v.av)(l), null == t || t(n));
                };
            case T.Ps.VOICE:
                return (n) => {
                    n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n);
                };
        }
        return () => {};
    },
    _ = r.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: i, channel: s, isMember: u } = e,
            v = (0, a.bG)([x.A], () => {
                if (null == n) return null;
                let e = x.A.getGuild(n.id);
                return null != e ? e : (0, g.fh)(n) ? n : (0, g.DY)(n);
            }, [n]),
            p = (0, C.L)(i, s),
            j = r.useCallback(
                (e) => {
                    u && null != i && (e.stopPropagation(), (0, o.rq)(i));
                },
                [u, i],
            ),
            h = r.useCallback(
                (e) => {
                    w(i)(e);
                },
                [i],
            );
        if (null == v) return null;
        let f = null == p ? void 0 : p.IconComponent,
            y = (0, l.jsxs)(l.Fragment, {
                children: [
                    null != f &&
                        (0, l.jsx)(f, {
                            size: "xs",
                            color: "currentColor",
                            className: P.p,
                        }),
                    (0, l.jsx)(c.Text, {
                        className: P.I0,
                        variant: "text-xs/normal",
                        children: (0, N.l)(null != (t = null == p ? void 0 : p.locationName) ? t : "", !0),
                    }),
                ],
            });
        return (0, l.jsxs)("div", {
            className: P.Ix,
            children: [
                (0, l.jsx)(m.A.Icon, {
                    guild: v,
                    onClick: j,
                }),
                (0, l.jsxs)("div", {
                    className: P.YG,
                    children: [
                        (0, l.jsxs)("div", {
                            className: P.Kp,
                            children: [
                                (0, l.jsx)(d.A, {
                                    guild: v,
                                    tooltipPosition: "top",
                                    tooltipColor: c.STz.Colors.PRIMARY,
                                    size: 16,
                                    className: P.n2,
                                }),
                                (0, l.jsx)(c.DUT, {
                                    className: P.Nm,
                                    onClick: j,
                                    children: (0, l.jsx)(c.Heading, {
                                        className: u ? P.ht : P.J5,
                                        variant: "text-sm/medium",
                                        children: v.name,
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: P.Nj,
                            children:
                                u && [T.Ps.STAGE_INSTANCE, T.Ps.VOICE].includes(null == i ? void 0 : i.entity_type)
                                    ? (0, l.jsx)(c.DUT, {
                                          className: P.tR,
                                          onClick: h,
                                          children: y,
                                      })
                                    : y,
                        }),
                    ],
                }),
            ],
        });
    }),
    k = r.memo(function (e) {
        let {
                guildId: t,
                guildScheduledEventId: n,
                recurrenceId: r,
                isActive: i,
                isEnded: s,
                isMember: o,
                isExternal: u,
                onAcceptInstantInvite: d,
                onTransitionToInviteChannel: m,
            } = e,
            v = (0, a.bG)([h.Ay], () => h.Ay.isInterestedInEventRecurrence(n, r), [n, r]),
            p = (e) => {
                e.stopPropagation(), (0, O.A)(n, r, t);
            },
            x = (e) => {
                e.stopPropagation(), o ? i && m() : d();
            };
        return o
            ? i
                ? u
                    ? (0, l.jsx)(c.Button, {
                          text: S.intl.string(S.t.GoCQxU),
                          variant: "secondary",
                      })
                    : (0, l.jsx)(c.Button, {
                          text: S.intl.string(S.t.XpeFYr),
                          onClick: x,
                          variant: "active",
                      })
                : s
                  ? (0, l.jsx)(c.Button, {
                        text: S.intl.string(S.t.Pj7Xrv),
                        variant: "secondary",
                        disabled: !0,
                    })
                  : v
                    ? (0, l.jsx)(c.Button, {
                          text: S.intl.string(S.t.DlcqlU),
                          onClick: p,
                          variant: "active",
                          icon: c.A9s,
                      })
                    : (0, l.jsx)(c.Button, {
                          text: S.intl.string(S.t.DlcqlU),
                          onClick: p,
                          variant: "secondary",
                          icon: c.XFE,
                      })
            : (0, l.jsx)(c.Button, {
                  text: S.intl.string(S.t.XpeFYr),
                  onClick: x,
                  variant: "active",
              });
    }),
    D = r.memo(function (e) {
        var t;
        let {
                guildScheduledEvent: n,
                guild: i,
                channel: a,
                isMember: o,
                recurrenceId: u,
                onAcceptInstantInvite: d,
                onTransitionToInviteChannel: v,
            } = e,
            p = null != u ? u : null != n ? (0, E.G3)(n) : null,
            x =
                (null == n ? void 0 : n.recurrence_rule) == null ||
                null == p ||
                (0, E.p$)((0, y.Sn)(null == n ? void 0 : n.recurrence_rule), p),
            g = (0, f.A)(n),
            N = r.useCallback(() => {
                o &&
                    null != n &&
                    (0, j.uR)({
                        eventId: n.id,
                        recurrenceId: p,
                    });
            }, [o, n, p]);
        if (null == n || !x) return null;
        let C = (0, h.Fd)(n),
            O = (0, h.AZ)(n),
            S = n.entity_type === T.Ps.EXTERNAL;
        return (0, l.jsx)(m.A, {
            className: s()({
                [P.vk]: o,
            }),
            children: (0, l.jsxs)(c.DUT, {
                onClick: N,
                children: [
                    null != n.image &&
                        (0, l.jsx)(I.A, {
                            source: (0, b.A)(n),
                            className: P.vK,
                        }),
                    (0, l.jsx)(A.Ay, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: P.tj,
                        guildId: n.guild_id,
                        creator: g,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: p,
                    }),
                    (0, l.jsxs)("div", {
                        className: P.xQ,
                        children: [
                            (0, l.jsx)(_, {
                                guild: i,
                                channel: a,
                                guildScheduledEvent: n,
                                isMember: o,
                            }),
                            (0, l.jsx)(k, {
                                isActive: C,
                                isEnded: O,
                                isMember: o,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: p,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: v,
                                isExternal: S,
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
