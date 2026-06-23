l.d(n, { Ay: () => $, GI: () => L });
var i = l(627968),
    s = l(64700),
    t = l(503698),
    a = l.n(t),
    r = l(17928),
    c = l(834730),
    u = l(781696),
    d = l(939249),
    o = l(534514),
    m = l(821609),
    h = l(933832),
    p = l(782603),
    x = l(376728),
    v = l(730852),
    N = l(714991),
    j = l(529200),
    g = l(790535),
    I = l(734057),
    f = l(71393),
    C = l(860689),
    A = l(707592),
    y = l(698441),
    k = l(435328),
    E = l(408607),
    _ = l(794782),
    S = l(647090),
    G = l(691012),
    b = l(850183),
    B = l(557582),
    D = l(515115),
    P = l(666394),
    R = l(988794),
    T = l(375708),
    z = l(601961);
function L(e, n) {
    switch (e?.entity_type) {
        case R.Ps.STAGE_INSTANCE:
            return (l) => {
                let i = I.A.getChannel(e.channel_id);
                null != i && (l.stopPropagation(), (0, g.av)(i), n?.(l));
            };
        case R.Ps.VOICE:
            return (l) => {
                l.stopPropagation(), v.default.selectVoiceChannel(e.channel_id, !1), n?.(l);
            };
    }
    return () => {};
}
let U = s.memo(function (e) {
        let { guild: n, guildScheduledEvent: l, channel: t, isMember: a } = e,
            m = (0, r.bG)([f.A], () => {
                if (null == n) return null;
                let e = f.A.getGuild(n.id);
                return null != e ? e : (0, C.fh)(n) ? n : (0, C.DY)(n);
            }, [n]),
            h = (0, D.L)(l, t),
            p = s.useCallback(
                (e) => {
                    a && null != l && (e.stopPropagation(), (0, x.rq)(l));
                },
                [a, l],
            ),
            v = s.useCallback(
                (e) => {
                    L(l)(e);
                },
                [l],
            );
        if (null == m) return null;
        let g = h?.IconComponent,
            I = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != g && (0, i.jsx)(g, { size: "xs", color: "currentColor", className: z.p }),
                    (0, i.jsx)(c.E, {
                        className: z.I0,
                        variant: "text-xs/normal",
                        children: (0, k.l)(h?.locationName ?? "", !0),
                    }),
                ],
            });
        return (0, i.jsxs)("div", {
            className: z.Ix,
            children: [
                (0, i.jsx)(j.A.Icon, { guild: m, onClick: p }),
                (0, i.jsxs)("div", {
                    className: z.YG,
                    children: [
                        (0, i.jsxs)("div", {
                            className: z.Kp,
                            children: [
                                (0, i.jsx)(N.A, {
                                    guild: m,
                                    tooltipPosition: "top",
                                    tooltipColor: u.ST.Colors.PRIMARY,
                                    size: 16,
                                    className: z.n2,
                                }),
                                (0, i.jsx)(d.D, {
                                    className: z.Nm,
                                    onClick: p,
                                    children: (0, i.jsx)(o.D, {
                                        className: a ? z.ht : z.J5,
                                        variant: "text-sm/medium",
                                        children: m.name,
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: z.Nj,
                            children:
                                a && [R.Ps.STAGE_INSTANCE, R.Ps.VOICE].includes(l?.entity_type)
                                    ? (0, i.jsx)(d.D, { className: z.tR, onClick: v, children: I })
                                    : I,
                        }),
                    ],
                }),
            ],
        });
    }),
    w = s.memo(function (e) {
        let {
                guildId: n,
                guildScheduledEventId: l,
                recurrenceId: s,
                isActive: t,
                isEnded: a,
                isMember: c,
                isExternal: u,
                onAcceptInstantInvite: d,
                onTransitionToInviteChannel: o,
            } = e,
            x = (0, r.bG)([y.Ay], () => y.Ay.isInterestedInEventRecurrence(l, s), [l, s]);
        function v(e) {
            e.stopPropagation(), (0, P.A)(l, s, n);
        }
        function N(e) {
            e.stopPropagation(), c ? t && o() : d();
        }
        return c
            ? t
                ? u
                    ? (0, i.jsx)(m.$, { text: T.intl.string(T.t.GoCQxU), variant: "secondary" })
                    : (0, i.jsx)(m.$, { text: T.intl.string(T.t.XpeFYr), onClick: N, variant: "active" })
                : a
                  ? (0, i.jsx)(m.$, { text: T.intl.string(T.t.Pj7Xrv), variant: "secondary", disabled: !0 })
                  : x
                    ? (0, i.jsx)(m.$, { text: T.intl.string(T.t.DlcqlU), onClick: v, variant: "active", icon: h.A })
                    : (0, i.jsx)(m.$, { text: T.intl.string(T.t.DlcqlU), onClick: v, variant: "secondary", icon: p.X })
            : (0, i.jsx)(m.$, { text: T.intl.string(T.t.XpeFYr), onClick: N, variant: "active" });
    }),
    $ = s.memo(function (e) {
        let {
                guildScheduledEvent: n,
                guild: l,
                channel: t,
                isMember: r,
                recurrenceId: c,
                onAcceptInstantInvite: u,
                onTransitionToInviteChannel: o,
            } = e,
            m = c ?? (null != n ? (0, S.G3)(n) : null),
            h = n?.recurrence_rule == null || null == m || (0, S.p$)((0, _.Sn)(n?.recurrence_rule), m),
            p = (0, E.A)(n),
            x = s.useCallback(() => {
                r && null != n && (0, A.uR)({ eventId: n.id, recurrenceId: m });
            }, [r, n, m]);
        if (null == n || !h) return null;
        let v = (0, y.Fd)(n),
            N = (0, y.AZ)(n),
            g = n.entity_type === R.Ps.EXTERNAL;
        return (0, i.jsx)(j.A, {
            className: a()({ [z.vk]: r }),
            children: (0, i.jsxs)(d.D, {
                onClick: x,
                children: [
                    null != n.image && (0, i.jsx)(b.A, { source: (0, G.A)(n), className: z.vK }),
                    (0, i.jsx)(B.Ay, {
                        name: n.name,
                        description: n.description ?? void 0,
                        descriptionClassName: z.tj,
                        guildId: n.guild_id,
                        creator: p,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: m,
                    }),
                    (0, i.jsxs)("div", {
                        className: z.xQ,
                        children: [
                            (0, i.jsx)(U, { guild: l, channel: t, guildScheduledEvent: n, isMember: r }),
                            (0, i.jsx)(w, {
                                isActive: v,
                                isEnded: N,
                                isMember: r,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: m,
                                onAcceptInstantInvite: u,
                                onTransitionToInviteChannel: o,
                                isExternal: g,
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
