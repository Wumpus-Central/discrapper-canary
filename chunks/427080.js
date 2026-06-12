n.d(l, { Ay: () => $, GI: () => L });
var s = n(627968),
    a = n(64700),
    i = n(503698),
    t = n.n(i),
    r = n(17928),
    c = n(834730),
    d = n(781696),
    u = n(939249),
    o = n(534514),
    m = n(821609),
    p = n(933832),
    x = n(782603),
    h = n(376728),
    N = n(730852),
    v = n(714991),
    j = n(529200),
    g = n(790535),
    I = n(734057),
    C = n(71393),
    A = n(860689),
    y = n(707592),
    f = n(698441),
    k = n(435328),
    E = n(408607),
    _ = n(794782),
    S = n(647090),
    G = n(691012),
    b = n(850183),
    B = n(557582),
    D = n(515115),
    P = n(666394),
    R = n(988794),
    T = n(375708),
    z = n(601961);
let L = (e, l) => {
        switch (e?.entity_type) {
            case R.Ps.STAGE_INSTANCE:
                return (n) => {
                    let s = I.A.getChannel(e.channel_id);
                    null != s && (n.stopPropagation(), (0, g.av)(s), l?.(n));
                };
            case R.Ps.VOICE:
                return (n) => {
                    n.stopPropagation(), N.default.selectVoiceChannel(e.channel_id, !1), l?.(n);
                };
        }
        return () => {};
    },
    U = a.memo(function (e) {
        let { guild: l, guildScheduledEvent: n, channel: i, isMember: t } = e,
            m = (0, r.bG)([C.A], () => {
                if (null == l) return null;
                let e = C.A.getGuild(l.id);
                return null != e ? e : (0, A.fh)(l) ? l : (0, A.DY)(l);
            }, [l]),
            p = (0, D.L)(n, i),
            x = a.useCallback(
                (e) => {
                    t && null != n && (e.stopPropagation(), (0, h.rq)(n));
                },
                [t, n],
            ),
            N = a.useCallback(
                (e) => {
                    L(n)(e);
                },
                [n],
            );
        if (null == m) return null;
        let g = p?.IconComponent,
            I = (0, s.jsxs)(s.Fragment, {
                children: [
                    null != g && (0, s.jsx)(g, { size: "xs", color: "currentColor", className: z.p }),
                    (0, s.jsx)(c.E, {
                        className: z.I0,
                        variant: "text-xs/normal",
                        children: (0, k.l)(p?.locationName ?? "", !0),
                    }),
                ],
            });
        return (0, s.jsxs)("div", {
            className: z.Ix,
            children: [
                (0, s.jsx)(j.A.Icon, { guild: m, onClick: x }),
                (0, s.jsxs)("div", {
                    className: z.YG,
                    children: [
                        (0, s.jsxs)("div", {
                            className: z.Kp,
                            children: [
                                (0, s.jsx)(v.A, {
                                    guild: m,
                                    tooltipPosition: "top",
                                    tooltipColor: d.ST.Colors.PRIMARY,
                                    size: 16,
                                    className: z.n2,
                                }),
                                (0, s.jsx)(u.D, {
                                    className: z.Nm,
                                    onClick: x,
                                    children: (0, s.jsx)(o.D, {
                                        className: t ? z.ht : z.J5,
                                        variant: "text-sm/medium",
                                        children: m.name,
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: z.Nj,
                            children:
                                t && [R.Ps.STAGE_INSTANCE, R.Ps.VOICE].includes(n?.entity_type)
                                    ? (0, s.jsx)(u.D, { className: z.tR, onClick: N, children: I })
                                    : I,
                        }),
                    ],
                }),
            ],
        });
    }),
    w = a.memo(function (e) {
        let {
                guildId: l,
                guildScheduledEventId: n,
                recurrenceId: a,
                isActive: i,
                isEnded: t,
                isMember: c,
                isExternal: d,
                onAcceptInstantInvite: u,
                onTransitionToInviteChannel: o,
            } = e,
            h = (0, r.bG)([f.Ay], () => f.Ay.isInterestedInEventRecurrence(n, a), [n, a]),
            N = (e) => {
                e.stopPropagation(), (0, P.A)(n, a, l);
            },
            v = (e) => {
                e.stopPropagation(), c ? i && o() : u();
            };
        return c
            ? i
                ? d
                    ? (0, s.jsx)(m.$, { text: T.intl.string(T.t.GoCQxU), variant: "secondary" })
                    : (0, s.jsx)(m.$, { text: T.intl.string(T.t.XpeFYr), onClick: v, variant: "active" })
                : t
                  ? (0, s.jsx)(m.$, { text: T.intl.string(T.t.Pj7Xrv), variant: "secondary", disabled: !0 })
                  : h
                    ? (0, s.jsx)(m.$, { text: T.intl.string(T.t.DlcqlU), onClick: N, variant: "active", icon: p.A })
                    : (0, s.jsx)(m.$, { text: T.intl.string(T.t.DlcqlU), onClick: N, variant: "secondary", icon: x.X })
            : (0, s.jsx)(m.$, { text: T.intl.string(T.t.XpeFYr), onClick: v, variant: "active" });
    }),
    $ = a.memo(function (e) {
        let {
                guildScheduledEvent: l,
                guild: n,
                channel: i,
                isMember: r,
                recurrenceId: c,
                onAcceptInstantInvite: d,
                onTransitionToInviteChannel: o,
            } = e,
            m = c ?? (null != l ? (0, S.G3)(l) : null),
            p = l?.recurrence_rule == null || null == m || (0, S.p$)((0, _.Sn)(l?.recurrence_rule), m),
            x = (0, E.A)(l),
            h = a.useCallback(() => {
                r && null != l && (0, y.uR)({ eventId: l.id, recurrenceId: m });
            }, [r, l, m]);
        if (null == l || !p) return null;
        let N = (0, f.Fd)(l),
            v = (0, f.AZ)(l),
            g = l.entity_type === R.Ps.EXTERNAL;
        return (0, s.jsx)(j.A, {
            className: t()({ [z.vk]: r }),
            children: (0, s.jsxs)(u.D, {
                onClick: h,
                children: [
                    null != l.image && (0, s.jsx)(b.A, { source: (0, G.A)(l), className: z.vK }),
                    (0, s.jsx)(B.Ay, {
                        name: l.name,
                        description: l.description ?? void 0,
                        descriptionClassName: z.tj,
                        guildId: l.guild_id,
                        creator: x,
                        guildEvent: l,
                        eventPreview: l,
                        recurrenceId: m,
                    }),
                    (0, s.jsxs)("div", {
                        className: z.xQ,
                        children: [
                            (0, s.jsx)(U, { guild: n, channel: i, guildScheduledEvent: l, isMember: r }),
                            (0, s.jsx)(w, {
                                isActive: N,
                                isEnded: v,
                                isMember: r,
                                guildId: l.guild_id,
                                guildScheduledEventId: l.id,
                                recurrenceId: m,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: o,
                                isExternal: g,
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
