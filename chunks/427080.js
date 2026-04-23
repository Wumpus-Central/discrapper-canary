n.d(l, { Ay: () => O, GI: () => b });
var s = n(627968),
    i = n(64700),
    t = n(503698),
    a = n.n(t),
    r = n(17928),
    c = n(834730),
    d = n(781696),
    u = n(939249),
    o = n(534514),
    m = n(821609),
    v = n(933832),
    x = n(782603),
    h = n(376728),
    N = n(956793),
    p = n(714991),
    g = n(529200),
    j = n(790535),
    I = n(734057),
    A = n(71393),
    E = n(860689),
    C = n(707592),
    f = n(698441),
    y = n(435328),
    T = n(408607),
    _ = n(794782),
    S = n(974930),
    w = n(691012),
    R = n(850183),
    k = n(557582),
    D = n(515115),
    G = n(666394),
    L = n(988794),
    P = n(985018),
    B = n(601961);
let b = (e, l) => {
        switch (e?.entity_type) {
            case L.Ps.STAGE_INSTANCE:
                return (n) => {
                    let s = I.A.getChannel(e.channel_id);
                    null != s && (n.stopPropagation(), (0, j.av)(s), l?.(n));
                };
            case L.Ps.VOICE:
                return (n) => {
                    n.stopPropagation(), N.default.selectVoiceChannel(e.channel_id, !1), l?.(n);
                };
        }
        return () => {};
    },
    z = i.memo(function (e) {
        let { guild: l, guildScheduledEvent: n, channel: t, isMember: a } = e,
            m = (0, r.bG)([A.A], () => {
                if (null == l) return null;
                let e = A.A.getGuild(l.id);
                return null != e ? e : (0, E.fh)(l) ? l : (0, E.DY)(l);
            }, [l]),
            v = (0, D.L)(n, t),
            x = i.useCallback(
                (e) => {
                    a && null != n && (e.stopPropagation(), (0, h.rq)(n));
                },
                [a, n],
            ),
            N = i.useCallback(
                (e) => {
                    b(n)(e);
                },
                [n],
            );
        if (null == m) return null;
        let j = v?.IconComponent,
            I = (0, s.jsxs)(s.Fragment, {
                children: [
                    null != j && (0, s.jsx)(j, { size: "xs", color: "currentColor", className: B.p }),
                    (0, s.jsx)(c.E, {
                        className: B.I0,
                        variant: "text-xs/normal",
                        children: (0, y.l)(v?.locationName ?? "", !0),
                    }),
                ],
            });
        return (0, s.jsxs)("div", {
            className: B.Ix,
            children: [
                (0, s.jsx)(g.A.Icon, { guild: m, onClick: x }),
                (0, s.jsxs)("div", {
                    className: B.YG,
                    children: [
                        (0, s.jsxs)("div", {
                            className: B.Kp,
                            children: [
                                (0, s.jsx)(p.A, {
                                    guild: m,
                                    tooltipPosition: "top",
                                    tooltipColor: d.ST.Colors.PRIMARY,
                                    size: 16,
                                    className: B.n2,
                                }),
                                (0, s.jsx)(u.D, {
                                    className: B.Nm,
                                    onClick: x,
                                    children: (0, s.jsx)(o.D, {
                                        className: a ? B.ht : B.J5,
                                        variant: "text-sm/medium",
                                        children: m.name,
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: B.Nj,
                            children:
                                a && [L.Ps.STAGE_INSTANCE, L.Ps.VOICE].includes(n?.entity_type)
                                    ? (0, s.jsx)(u.D, { className: B.tR, onClick: N, children: I })
                                    : I,
                        }),
                    ],
                }),
            ],
        });
    }),
    U = i.memo(function (e) {
        let {
                guildId: l,
                guildScheduledEventId: n,
                recurrenceId: i,
                isActive: t,
                isEnded: a,
                isMember: c,
                isExternal: d,
                onAcceptInstantInvite: u,
                onTransitionToInviteChannel: o,
            } = e,
            h = (0, r.bG)([f.Ay], () => f.Ay.isInterestedInEventRecurrence(n, i), [n, i]),
            N = (e) => {
                e.stopPropagation(), (0, G.A)(n, i, l);
            },
            p = (e) => {
                e.stopPropagation(), c ? t && o() : u();
            };
        return c
            ? t
                ? d
                    ? (0, s.jsx)(m.$, { text: P.intl.string(P.t.GoCQxU), variant: "secondary" })
                    : (0, s.jsx)(m.$, { text: P.intl.string(P.t.XpeFYr), onClick: p, variant: "active" })
                : a
                  ? (0, s.jsx)(m.$, { text: P.intl.string(P.t.Pj7Xrv), variant: "secondary", disabled: !0 })
                  : h
                    ? (0, s.jsx)(m.$, { text: P.intl.string(P.t.DlcqlU), onClick: N, variant: "active", icon: v.A })
                    : (0, s.jsx)(m.$, { text: P.intl.string(P.t.DlcqlU), onClick: N, variant: "secondary", icon: x.X })
            : (0, s.jsx)(m.$, { text: P.intl.string(P.t.XpeFYr), onClick: p, variant: "active" });
    }),
    O = i.memo(function (e) {
        let {
                guildScheduledEvent: l,
                guild: n,
                channel: t,
                isMember: r,
                recurrenceId: c,
                onAcceptInstantInvite: d,
                onTransitionToInviteChannel: o,
            } = e,
            m = c ?? (null != l ? (0, S.G3)(l) : null),
            v = l?.recurrence_rule == null || null == m || (0, S.p$)((0, _.Sn)(l?.recurrence_rule), m),
            x = (0, T.A)(l),
            h = i.useCallback(() => {
                r && null != l && (0, C.uR)({ eventId: l.id, recurrenceId: m });
            }, [r, l, m]);
        if (null == l || !v) return null;
        let N = (0, f.Fd)(l),
            p = (0, f.AZ)(l),
            j = l.entity_type === L.Ps.EXTERNAL;
        return (0, s.jsx)(g.A, {
            className: a()({ [B.vk]: r }),
            children: (0, s.jsxs)(u.D, {
                onClick: h,
                children: [
                    null != l.image && (0, s.jsx)(R.A, { source: (0, w.A)(l), className: B.vK }),
                    (0, s.jsx)(k.Ay, {
                        name: l.name,
                        description: l.description ?? void 0,
                        descriptionClassName: B.tj,
                        guildId: l.guild_id,
                        creator: x,
                        guildEvent: l,
                        eventPreview: l,
                        recurrenceId: m,
                    }),
                    (0, s.jsxs)("div", {
                        className: B.xQ,
                        children: [
                            (0, s.jsx)(z, { guild: n, channel: t, guildScheduledEvent: l, isMember: r }),
                            (0, s.jsx)(U, {
                                isActive: N,
                                isEnded: p,
                                isMember: r,
                                guildId: l.guild_id,
                                guildScheduledEventId: l.id,
                                recurrenceId: m,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: o,
                                isExternal: j,
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
