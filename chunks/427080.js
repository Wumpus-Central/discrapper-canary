var i = l(477900),
    s = l(582128),
    a = l(503698),
    t = l.n(a),
    r = l(855986),
    c = l(834730),
    u = l(664343),
    d = l(939249),
    o = l(534514),
    m = l(821609),
    h = l(933832),
    p = l(782603),
    v = l(574332),
    N = l(597798),
    x = l(714991),
    j = l(529200),
    g = l(129095),
    I = l(734057),
    C = l(71393),
    f = l(495867),
    y = l(537975),
    A = l(707592),
    k = l(698441),
    E = l(435328),
    _ = l(408607),
    b = l(794782),
    S = l(974930),
    G = l(691012),
    B = l(850183),
    D = l(557582),
    P = l(515115),
    T = l(666394),
    R = l(988794),
    L = l(792996),
    z = l(251064);
function F(e, n) {
    switch (e?.entity_type) {
        case R.Ps.STAGE_INSTANCE:
            return (l) => {
                let i = I.A.getChannel(e.channel_id);
                null != i && (l.stopPropagation(), (0, g.av)(i), n?.(l));
            };
        case R.Ps.VOICE:
            return (l) => {
                (l.stopPropagation(), N.default.selectVoiceChannel(e.channel_id, !1), n?.(l));
            };
    }
    return () => {};
}
let U = s.memo(function (e) {
        let { guild: n, guildScheduledEvent: l, channel: a, isMember: t } = e,
            m = (0, r.bG)(
                [C.A],
                () => {
                    if (null == n) return null;
                    let e = C.A.getGuild(n.id);
                    return null != e ? e : (0, y.fh)(n) ? n : (0, y.DY)(n);
                },
                [n],
            ),
            h = (0, P.L)(l, a),
            p = s.useCallback(
                (e) => {
                    t && null != l && (e.stopPropagation(), (0, v.rq)(l));
                },
                [t, l],
            ),
            N = s.useCallback(
                (e) => {
                    F(l)(e);
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
                        variant: "body-xs/normal",
                        children:
                            null != h
                                ? l.entity_type === R.Ps.EXTERNAL
                                    ? (0, E.y)(h.locationName, !0)
                                    : h.locationName
                                : null,
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
                                (0, i.jsx)(x.A, {
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
                                        className: t ? z.ht : z.J5,
                                        variant: "body-sm/medium",
                                        children: m.name,
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: z.Nj,
                            children:
                                t && [R.Ps.STAGE_INSTANCE, R.Ps.VOICE].includes(l?.entity_type)
                                    ? (0, i.jsx)(d.D, { className: z.tR, onClick: N, children: I })
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
                recurrenceId: a,
                isActive: t,
                isEnded: c,
                isMember: u,
                isExternal: d,
                onAcceptInstantInvite: o,
                onTransitionToInviteChannel: v,
            } = e,
            N = (0, r.bG)([k.Ay], () => k.Ay.isInterestedInEventRecurrence(l, a), [l, a]),
            x = (0, r.bG)([f.A], () => null != s && f.A.getChannelId() === s, [s]);
        function j(e) {
            (e.stopPropagation(), (0, T.A)(l, a, n));
        }
        function g(e) {
            (e.stopPropagation(), u ? t && v() : o());
        }
        return u
            ? t
                ? d
                    ? (0, i.jsx)(m.$, { text: L.intl.string(L.t.GoCQxU), variant: "secondary" })
                    : x
                      ? (0, i.jsx)(m.$, { text: L.intl.string(L.t.aW2YlJ), onClick: g, variant: "active" })
                      : (0, i.jsx)(m.$, { text: L.intl.string(L.t.XpeFYr), onClick: g, variant: "active" })
                : c
                  ? (0, i.jsx)(m.$, { text: L.intl.string(L.t.Pj7Xrv), variant: "secondary", disabled: !0 })
                  : N
                    ? (0, i.jsx)(m.$, {
                          text: L.intl.string(L.t.DlcqlU),
                          onClick: j,
                          variant: "active",
                          icon: h.CheckmarkLargeIcon,
                      })
                    : (0, i.jsx)(m.$, {
                          text: L.intl.string(L.t.DlcqlU),
                          onClick: j,
                          variant: "secondary",
                          icon: p.BellIcon,
                      })
            : (0, i.jsx)(m.$, { text: L.intl.string(L.t.XpeFYr), onClick: g, variant: "active" });
    }),
    w = s.memo(function (e) {
        let {
                guildScheduledEvent: n,
                guild: l,
                channel: a,
                isMember: r,
                recurrenceId: c,
                onAcceptInstantInvite: u,
                onTransitionToInviteChannel: o,
            } = e,
            m = c ?? (null != n ? (0, S.G3)(n) : null),
            h = n?.recurrence_rule == null || null == m || (0, S.p$)((0, b.Sn)(n?.recurrence_rule), m),
            p = (0, _.A)(n),
            v = s.useCallback(() => {
                r && null != n && (0, A.uR)({ eventId: n.id, recurrenceId: m });
            }, [r, n, m]);
        if (null == n || !h) return null;
        let N = (0, k.Fd)(n),
            x = (0, k.AZ)(n),
            g = n.entity_type === R.Ps.EXTERNAL;
        return (0, i.jsx)(j.A, {
            className: t()({ [z.vk]: r }),
            children: (0, i.jsxs)(d.D, {
                onClick: v,
                children: [
                    null != n.image && (0, i.jsx)(B.A, { source: (0, G.A)(n, 1024), className: z.vK }),
                    (0, i.jsx)(D.Ay, {
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
                            (0, i.jsx)(U, { guild: l, channel: a, guildScheduledEvent: n, isMember: r }),
                            (0, i.jsx)($, {
                                isActive: N,
                                isEnded: x,
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
l.d(n, {}, { Ay: w, GI: F });
