t.d(l, { Ay: () => X, GI: () => G });
var n = t(627968),
    s = t(64700),
    i = t(503698),
    a = t.n(i),
    r = t(311907),
    c = t(834730),
    d = t(781696),
    u = t(939249),
    o = t(534514),
    m = t(821609),
    x = t(933832),
    v = t(782603),
    h = t(846293),
    N = t(956793),
    g = t(714991),
    p = t(529200),
    j = t(323443),
    A = t(734057),
    E = t(71393),
    I = t(860689),
    f = t(707592),
    C = t(698441),
    T = t(435328),
    y = t(408607),
    S = t(794782),
    _ = t(974930),
    k = t(691012),
    w = t(850183),
    R = t(557582),
    D = t(515115),
    L = t(666394),
    b = t(988794),
    P = t(985018),
    B = t(601961);
let G = (e, l) => {
        switch (e?.entity_type) {
            case b.Ps.STAGE_INSTANCE:
                return (t) => {
                    let n = A.A.getChannel(e.channel_id);
                    null != n && (t.stopPropagation(), (0, j.av)(n), l?.(t));
                };
            case b.Ps.VOICE:
                return (t) => {
                    t.stopPropagation(), N.default.selectVoiceChannel(e.channel_id, !1), l?.(t);
                };
        }
        return () => {};
    },
    z = s.memo(function (e) {
        let { guild: l, guildScheduledEvent: t, channel: i, isMember: a } = e,
            m = (0, r.bG)([E.A], () => {
                if (null == l) return null;
                let e = E.A.getGuild(l.id);
                return null != e ? e : (0, I.fh)(l) ? l : (0, I.DY)(l);
            }, [l]),
            x = (0, D.L)(t, i),
            v = s.useCallback(
                (e) => {
                    a && null != t && (e.stopPropagation(), (0, h.rq)(t));
                },
                [a, t],
            ),
            N = s.useCallback(
                (e) => {
                    G(t)(e);
                },
                [t],
            );
        if (null == m) return null;
        let j = x?.IconComponent,
            A = (0, n.jsxs)(n.Fragment, {
                children: [
                    null != j && (0, n.jsx)(j, { size: "xs", color: "currentColor", className: B.p }),
                    (0, n.jsx)(c.E, {
                        className: B.I0,
                        variant: "text-xs/normal",
                        children: (0, T.l)(x?.locationName ?? "", !0),
                    }),
                ],
            });
        return (0, n.jsxs)("div", {
            className: B.Ix,
            children: [
                (0, n.jsx)(p.A.Icon, { guild: m, onClick: v }),
                (0, n.jsxs)("div", {
                    className: B.YG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: B.Kp,
                            children: [
                                (0, n.jsx)(g.A, {
                                    guild: m,
                                    tooltipPosition: "top",
                                    tooltipColor: d.ST.Colors.PRIMARY,
                                    size: 16,
                                    className: B.n2,
                                }),
                                (0, n.jsx)(u.D, {
                                    className: B.Nm,
                                    onClick: v,
                                    children: (0, n.jsx)(o.D, {
                                        className: a ? B.ht : B.J5,
                                        variant: "text-sm/medium",
                                        children: m.name,
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: B.Nj,
                            children:
                                a && [b.Ps.STAGE_INSTANCE, b.Ps.VOICE].includes(t?.entity_type)
                                    ? (0, n.jsx)(u.D, { className: B.tR, onClick: N, children: A })
                                    : A,
                        }),
                    ],
                }),
            ],
        });
    }),
    O = s.memo(function (e) {
        let {
                guildId: l,
                guildScheduledEventId: t,
                recurrenceId: s,
                isActive: i,
                isEnded: a,
                isMember: c,
                isExternal: d,
                onAcceptInstantInvite: u,
                onTransitionToInviteChannel: o,
            } = e,
            h = (0, r.bG)([C.Ay], () => C.Ay.isInterestedInEventRecurrence(t, s), [t, s]),
            N = (e) => {
                e.stopPropagation(), (0, L.A)(t, s, l);
            },
            g = (e) => {
                e.stopPropagation(), c ? i && o() : u();
            };
        return c
            ? i
                ? d
                    ? (0, n.jsx)(m.$, { text: P.intl.string(P.t.GoCQxU), variant: "secondary" })
                    : (0, n.jsx)(m.$, { text: P.intl.string(P.t.XpeFYr), onClick: g, variant: "active" })
                : a
                  ? (0, n.jsx)(m.$, { text: P.intl.string(P.t.Pj7Xrv), variant: "secondary", disabled: !0 })
                  : h
                    ? (0, n.jsx)(m.$, { text: P.intl.string(P.t.DlcqlU), onClick: N, variant: "active", icon: x.A })
                    : (0, n.jsx)(m.$, { text: P.intl.string(P.t.DlcqlU), onClick: N, variant: "secondary", icon: v.X })
            : (0, n.jsx)(m.$, { text: P.intl.string(P.t.XpeFYr), onClick: g, variant: "active" });
    }),
    X = s.memo(function (e) {
        let {
                guildScheduledEvent: l,
                guild: t,
                channel: i,
                isMember: r,
                recurrenceId: c,
                onAcceptInstantInvite: d,
                onTransitionToInviteChannel: o,
            } = e,
            m = c ?? (null != l ? (0, _.G3)(l) : null),
            x = l?.recurrence_rule == null || null == m || (0, _.p$)((0, S.Sn)(l?.recurrence_rule), m),
            v = (0, y.A)(l),
            h = s.useCallback(() => {
                r && null != l && (0, f.uR)({ eventId: l.id, recurrenceId: m });
            }, [r, l, m]);
        if (null == l || !x) return null;
        let N = (0, C.Fd)(l),
            g = (0, C.AZ)(l),
            j = l.entity_type === b.Ps.EXTERNAL;
        return (0, n.jsx)(p.A, {
            className: a()({ [B.vk]: r }),
            children: (0, n.jsxs)(u.D, {
                onClick: h,
                children: [
                    null != l.image && (0, n.jsx)(w.A, { source: (0, k.A)(l), className: B.vK }),
                    (0, n.jsx)(R.Ay, {
                        name: l.name,
                        description: l.description ?? void 0,
                        descriptionClassName: B.tj,
                        guildId: l.guild_id,
                        creator: v,
                        guildEvent: l,
                        eventPreview: l,
                        recurrenceId: m,
                    }),
                    (0, n.jsxs)("div", {
                        className: B.xQ,
                        children: [
                            (0, n.jsx)(z, { guild: t, channel: i, guildScheduledEvent: l, isMember: r }),
                            (0, n.jsx)(O, {
                                isActive: N,
                                isEnded: g,
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
