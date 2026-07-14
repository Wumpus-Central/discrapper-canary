l.d(n, { Ay: () => w, GI: () => F });
var i = l(627968),
    s = l(64700),
    t = l(503698),
    a = l.n(t),
    r = l(17928),
    c = l(834730),
    u = l(781696),
    d = l(939249),
    o = l(297264),
    m = l(821609),
    h = l(933832),
    x = l(782603),
    p = l(376728),
    v = l(730852),
    N = l(714991),
    j = l(529200),
    g = l(790535),
    I = l(734057),
    C = l(71393),
    f = l(763827),
    A = l(860689),
    y = l(707592),
    k = l(698441),
    E = l(435328),
    _ = l(408607),
    S = l(794782),
    G = l(974930),
    b = l(691012),
    B = l(850183),
    D = l(557582),
    P = l(515115),
    T = l(666394),
    R = l(988794),
    z = l(375708),
    L = l(601961);
function F(e, n) {
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
            m = (0, r.bG)([C.A], () => {
                if (null == n) return null;
                let e = C.A.getGuild(n.id);
                return null != e ? e : (0, A.fh)(n) ? n : (0, A.DY)(n);
            }, [n]),
            h = (0, P.L)(l, t),
            x = s.useCallback(
                (e) => {
                    a && null != l && (e.stopPropagation(), (0, p.rq)(l));
                },
                [a, l],
            ),
            v = s.useCallback(
                (e) => {
                    F(l)(e);
                },
                [l],
            );
        if (null == m) return null;
        let g = h?.IconComponent,
            I = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != g && (0, i.jsx)(g, { size: "xs", color: "currentColor", className: L.p }),
                    (0, i.jsx)(c.E, {
                        className: L.I0,
                        variant: "text-xs/normal",
                        children: (0, E.l)(h?.locationName ?? "", !0),
                    }),
                ],
            });
        return (0, i.jsxs)("div", {
            className: L.Ix,
            children: [
                (0, i.jsx)(j.A.Icon, { guild: m, onClick: x }),
                (0, i.jsxs)("div", {
                    className: L.YG,
                    children: [
                        (0, i.jsxs)("div", {
                            className: L.Kp,
                            children: [
                                (0, i.jsx)(N.A, {
                                    guild: m,
                                    tooltipPosition: "top",
                                    tooltipColor: u.ST.Colors.PRIMARY,
                                    size: 16,
                                    className: L.n2,
                                }),
                                (0, i.jsx)(d.D, {
                                    className: L.Nm,
                                    onClick: x,
                                    children: (0, i.jsx)(o.D, {
                                        className: a ? L.ht : L.J5,
                                        variant: "text-sm/medium",
                                        children: m.name,
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: L.Nj,
                            children:
                                a && [R.Ps.STAGE_INSTANCE, R.Ps.VOICE].includes(l?.entity_type)
                                    ? (0, i.jsx)(d.D, { className: L.tR, onClick: v, children: I })
                                    : I,
                        }),
                    ],
                }),
            ],
        });
    }),
    $ = s.memo(function (e) {
        let {
                guildId: n,
                guildScheduledEventId: l,
                channelId: s,
                recurrenceId: t,
                isActive: a,
                isEnded: c,
                isMember: u,
                isExternal: d,
                onAcceptInstantInvite: o,
                onTransitionToInviteChannel: p,
            } = e,
            v = (0, r.bG)([k.Ay], () => k.Ay.isInterestedInEventRecurrence(l, t), [l, t]),
            N = (0, r.bG)([f.A], () => null != s && f.A.getChannelId() === s, [s]);
        function j(e) {
            e.stopPropagation(), (0, T.A)(l, t, n);
        }
        function g(e) {
            e.stopPropagation(), u ? a && p() : o();
        }
        return u
            ? a
                ? d
                    ? (0, i.jsx)(m.$, { text: z.intl.string(z.t.GoCQxU), variant: "secondary" })
                    : N
                      ? (0, i.jsx)(m.$, { text: z.intl.string(z.t.aW2YlJ), onClick: g, variant: "active" })
                      : (0, i.jsx)(m.$, { text: z.intl.string(z.t.XpeFYr), onClick: g, variant: "active" })
                : c
                  ? (0, i.jsx)(m.$, { text: z.intl.string(z.t.Pj7Xrv), variant: "secondary", disabled: !0 })
                  : v
                    ? (0, i.jsx)(m.$, { text: z.intl.string(z.t.DlcqlU), onClick: j, variant: "active", icon: h.A })
                    : (0, i.jsx)(m.$, { text: z.intl.string(z.t.DlcqlU), onClick: j, variant: "secondary", icon: x.X })
            : (0, i.jsx)(m.$, { text: z.intl.string(z.t.XpeFYr), onClick: g, variant: "active" });
    }),
    w = s.memo(function (e) {
        let {
                guildScheduledEvent: n,
                guild: l,
                channel: t,
                isMember: r,
                recurrenceId: c,
                onAcceptInstantInvite: u,
                onTransitionToInviteChannel: o,
            } = e,
            m = c ?? (null != n ? (0, G.G3)(n) : null),
            h = n?.recurrence_rule == null || null == m || (0, G.p$)((0, S.Sn)(n?.recurrence_rule), m),
            x = (0, _.A)(n),
            p = s.useCallback(() => {
                r && null != n && (0, y.uR)({ eventId: n.id, recurrenceId: m });
            }, [r, n, m]);
        if (null == n || !h) return null;
        let v = (0, k.Fd)(n),
            N = (0, k.AZ)(n),
            g = n.entity_type === R.Ps.EXTERNAL;
        return (0, i.jsx)(j.A, {
            className: a()({ [L.vk]: r }),
            children: (0, i.jsxs)(d.D, {
                onClick: p,
                children: [
                    null != n.image && (0, i.jsx)(B.A, { source: (0, b.A)(n), className: L.vK }),
                    (0, i.jsx)(D.Ay, {
                        name: n.name,
                        description: n.description ?? void 0,
                        descriptionClassName: L.tj,
                        guildId: n.guild_id,
                        creator: x,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: m,
                    }),
                    (0, i.jsxs)("div", {
                        className: L.xQ,
                        children: [
                            (0, i.jsx)(U, { guild: l, channel: t, guildScheduledEvent: n, isMember: r }),
                            (0, i.jsx)($, {
                                isActive: v,
                                isEnded: N,
                                isMember: r,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                channelId: n.channel_id,
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
