l.d(t, { Ay: () => P, GI: () => L });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(311907),
    c = l(397927),
    u = l(846293),
    d = l(956793),
    o = l(714991),
    m = l(529200),
    x = l(323443),
    v = l(734057),
    h = l(71393),
    N = l(860689),
    g = l(707592),
    p = l(698441),
    j = l(435328),
    A = l(408607),
    E = l(794782),
    I = l(974930),
    C = l(691012),
    f = l(850183),
    T = l(557582),
    S = l(515115),
    y = l(666394),
    _ = l(988794),
    k = l(985018),
    R = l(467946);
let L = (e, t) => {
        switch (e?.entity_type) {
            case _.Ps.STAGE_INSTANCE:
                return (l) => {
                    let n = v.A.getChannel(e.channel_id);
                    null != n && (l.stopPropagation(), (0, x.av)(n), t?.(l));
                };
            case _.Ps.VOICE:
                return (l) => {
                    l.stopPropagation(), d.default.selectVoiceChannel(e.channel_id, !1), t?.(l);
                };
        }
        return () => {};
    },
    b = s.memo(function (e) {
        let { guild: t, guildScheduledEvent: l, channel: i, isMember: a } = e,
            d = (0, r.bG)([h.A], () => {
                if (null == t) return null;
                let e = h.A.getGuild(t.id);
                return null != e ? e : (0, N.fh)(t) ? t : (0, N.DY)(t);
            }, [t]),
            x = (0, S.L)(l, i),
            v = s.useCallback(
                (e) => {
                    a && null != l && (e.stopPropagation(), (0, u.rq)(l));
                },
                [a, l],
            ),
            g = s.useCallback(
                (e) => {
                    L(l)(e);
                },
                [l],
            );
        if (null == d) return null;
        let p = x?.IconComponent,
            A = (0, n.jsxs)(n.Fragment, {
                children: [
                    null != p && (0, n.jsx)(p, { size: "xs", color: "currentColor", className: R.p }),
                    (0, n.jsx)(c.Text, {
                        className: R.I0,
                        variant: "text-xs/normal",
                        children: (0, j.l)(x?.locationName ?? "", !0),
                    }),
                ],
            });
        return (0, n.jsxs)("div", {
            className: R.Ix,
            children: [
                (0, n.jsx)(m.A.Icon, { guild: d, onClick: v }),
                (0, n.jsxs)("div", {
                    className: R.YG,
                    children: [
                        (0, n.jsxs)("div", {
                            className: R.Kp,
                            children: [
                                (0, n.jsx)(o.A, {
                                    guild: d,
                                    tooltipPosition: "top",
                                    tooltipColor: c.STz.Colors.PRIMARY,
                                    size: 16,
                                    className: R.n2,
                                }),
                                (0, n.jsx)(c.DUT, {
                                    className: R.Nm,
                                    onClick: v,
                                    children: (0, n.jsx)(c.Heading, {
                                        className: a ? R.ht : R.J5,
                                        variant: "text-sm/medium",
                                        children: d.name,
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: R.Nj,
                            children:
                                a && [_.Ps.STAGE_INSTANCE, _.Ps.VOICE].includes(l?.entity_type)
                                    ? (0, n.jsx)(c.DUT, { className: R.tR, onClick: g, children: A })
                                    : A,
                        }),
                    ],
                }),
            ],
        });
    }),
    D = s.memo(function (e) {
        let {
                guildId: t,
                guildScheduledEventId: l,
                recurrenceId: s,
                isActive: i,
                isEnded: a,
                isMember: u,
                isExternal: d,
                onAcceptInstantInvite: o,
                onTransitionToInviteChannel: m,
            } = e,
            x = (0, r.bG)([p.Ay], () => p.Ay.isInterestedInEventRecurrence(l, s), [l, s]),
            v = (e) => {
                e.stopPropagation(), (0, y.A)(l, s, t);
            },
            h = (e) => {
                e.stopPropagation(), u ? i && m() : o();
            };
        return u
            ? i
                ? d
                    ? (0, n.jsx)(c.Button, { text: k.intl.string(k.t.GoCQxU), variant: "secondary" })
                    : (0, n.jsx)(c.Button, { text: k.intl.string(k.t.XpeFYr), onClick: h, variant: "active" })
                : a
                  ? (0, n.jsx)(c.Button, { text: k.intl.string(k.t.Pj7Xrv), variant: "secondary", disabled: !0 })
                  : x
                    ? (0, n.jsx)(c.Button, {
                          text: k.intl.string(k.t.DlcqlU),
                          onClick: v,
                          variant: "active",
                          icon: c.A9s,
                      })
                    : (0, n.jsx)(c.Button, {
                          text: k.intl.string(k.t.DlcqlU),
                          onClick: v,
                          variant: "secondary",
                          icon: c.XFE,
                      })
            : (0, n.jsx)(c.Button, { text: k.intl.string(k.t.XpeFYr), onClick: h, variant: "active" });
    }),
    P = s.memo(function (e) {
        let {
                guildScheduledEvent: t,
                guild: l,
                channel: i,
                isMember: r,
                recurrenceId: u,
                onAcceptInstantInvite: d,
                onTransitionToInviteChannel: o,
            } = e,
            x = u ?? (null != t ? (0, I.G3)(t) : null),
            v = t?.recurrence_rule == null || null == x || (0, I.p$)((0, E.Sn)(t?.recurrence_rule), x),
            h = (0, A.A)(t),
            N = s.useCallback(() => {
                r && null != t && (0, g.uR)({ eventId: t.id, recurrenceId: x });
            }, [r, t, x]);
        if (null == t || !v) return null;
        let j = (0, p.Fd)(t),
            S = (0, p.AZ)(t),
            y = t.entity_type === _.Ps.EXTERNAL;
        return (0, n.jsx)(m.A, {
            className: a()({ [R.vk]: r }),
            children: (0, n.jsxs)(c.DUT, {
                onClick: N,
                children: [
                    null != t.image && (0, n.jsx)(f.A, { source: (0, C.A)(t), className: R.vK }),
                    (0, n.jsx)(T.Ay, {
                        name: t.name,
                        description: t.description ?? void 0,
                        descriptionClassName: R.tj,
                        guildId: t.guild_id,
                        creator: h,
                        guildEvent: t,
                        eventPreview: t,
                        recurrenceId: x,
                    }),
                    (0, n.jsxs)("div", {
                        className: R.xQ,
                        children: [
                            (0, n.jsx)(b, { guild: l, channel: i, guildScheduledEvent: t, isMember: r }),
                            (0, n.jsx)(D, {
                                isActive: j,
                                isEnded: S,
                                isMember: r,
                                guildId: t.guild_id,
                                guildScheduledEventId: t.id,
                                recurrenceId: x,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: o,
                                isExternal: y,
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
