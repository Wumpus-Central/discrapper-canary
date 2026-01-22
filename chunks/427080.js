n.d(t, {
    Ay: () => k,
    GI: () => x,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(846293),
    u = n(956793),
    d = n(714991),
    f = n(529200),
    p = n(323443),
    _ = n(734057),
    h = n(71393),
    m = n(860689),
    g = n(707592),
    E = n(698441),
    b = n(435328),
    y = n(408607),
    O = n(794782),
    A = n(974930),
    v = n(691012),
    S = n(850183),
    I = n(557582),
    T = n(515115),
    C = n(666394),
    N = n(988794),
    R = n(985018),
    w = n(467946);
let P = (e, t) => (n) => {
        n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n);
    },
    D = (e, t) => (n) => {
        let r = _.A.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, p.av)(r), null == t || t(n));
    },
    x = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case N.Ps.STAGE_INSTANCE:
                return D(e, t);
            case N.Ps.VOICE:
                return P(e, t);
        }
        return () => {};
    },
    L = (e, t) => t && [N.Ps.STAGE_INSTANCE, N.Ps.VOICE].includes(null == e ? void 0 : e.entity_type),
    j = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: a, channel: s, isMember: u } = e,
            p = (0, o.bG)([h.A], () => {
                if (null == n) return null;
                let e = h.A.getGuild(n.id);
                return null != e ? e : (0, m.fh)(n) ? n : (0, m.DY)(n);
            }, [n]),
            _ = (0, T.L)(a, s),
            g = i.useCallback(
                (e) => {
                    u && null != a && (e.stopPropagation(), (0, c.rq)(a));
                },
                [u, a],
            ),
            E = i.useCallback(
                (e) => {
                    x(a)(e);
                },
                [a],
            );
        if (null == p) return null;
        let y = null == _ ? void 0 : _.IconComponent,
            O = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != y &&
                        (0, r.jsx)(y, {
                            size: "xs",
                            color: "currentColor",
                            className: w.p,
                        }),
                    (0, r.jsx)(l.Text, {
                        className: w.I0,
                        variant: "text-xs/normal",
                        children: (0, b.l)(null != (t = null == _ ? void 0 : _.locationName) ? t : "", !0),
                    }),
                ],
            });
        return (0, r.jsxs)("div", {
            className: w.Ix,
            children: [
                (0, r.jsx)(f.A.Icon, {
                    guild: p,
                    onClick: g,
                }),
                (0, r.jsxs)("div", {
                    className: w.YG,
                    children: [
                        (0, r.jsxs)("div", {
                            className: w.Kp,
                            children: [
                                (0, r.jsx)(d.A, {
                                    guild: p,
                                    tooltipPosition: "top",
                                    tooltipColor: l.STz.Colors.PRIMARY,
                                    size: 16,
                                    className: w.n2,
                                }),
                                (0, r.jsx)(l.DUT, {
                                    className: w.Nm,
                                    onClick: g,
                                    children: (0, r.jsx)(l.Heading, {
                                        className: u ? w.ht : w.J5,
                                        variant: "text-sm/medium",
                                        children: p.name,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: w.Nj,
                            children: L(a, u)
                                ? (0, r.jsx)(l.DUT, {
                                      className: w.tR,
                                      onClick: E,
                                      children: O,
                                  })
                                : O,
                        }),
                    ],
                }),
            ],
        });
    }),
    M = i.memo(function (e) {
        let {
                guildId: t,
                guildScheduledEventId: n,
                recurrenceId: i,
                isActive: a,
                isEnded: s,
                isMember: c,
                isExternal: u,
                onAcceptInstantInvite: d,
                onTransitionToInviteChannel: f,
            } = e,
            p = (0, o.bG)([E.Ay], () => E.Ay.isInterestedInEventRecurrence(n, i), [n, i]),
            _ = (e) => {
                e.stopPropagation(), (0, C.A)(n, i, t);
            },
            h = (e) => {
                e.stopPropagation(), c ? a && f() : d();
            };
        return c
            ? a
                ? u
                    ? (0, r.jsx)(l.Button, {
                          text: R.intl.string(R.t.GoCQxU),
                          variant: "secondary",
                      })
                    : (0, r.jsx)(l.Button, {
                          text: R.intl.string(R.t.XpeFYr),
                          onClick: h,
                          variant: "active",
                      })
                : s
                  ? (0, r.jsx)(l.Button, {
                        text: R.intl.string(R.t.Pj7Xrv),
                        variant: "secondary",
                        disabled: !0,
                    })
                  : p
                    ? (0, r.jsx)(l.Button, {
                          text: R.intl.string(R.t.DlcqlU),
                          onClick: _,
                          variant: "active",
                          icon: l.A9s,
                      })
                    : (0, r.jsx)(l.Button, {
                          text: R.intl.string(R.t.DlcqlU),
                          onClick: _,
                          variant: "secondary",
                          icon: l.XFE,
                      })
            : (0, r.jsx)(l.Button, {
                  text: R.intl.string(R.t.XpeFYr),
                  onClick: h,
                  variant: "active",
              });
    }),
    k = i.memo(function (e) {
        var t;
        let {
                guildScheduledEvent: n,
                guild: a,
                channel: o,
                isMember: c,
                recurrenceId: u,
                onAcceptInstantInvite: d,
                onTransitionToInviteChannel: p,
            } = e,
            _ = null != u ? u : null != n ? (0, A.G3)(n) : null,
            h =
                (null == n ? void 0 : n.recurrence_rule) == null ||
                null == _ ||
                (0, A.p$)((0, O.Sn)(null == n ? void 0 : n.recurrence_rule), _),
            m = (0, y.A)(n),
            b = i.useCallback(() => {
                c &&
                    null != n &&
                    (0, g.uR)({
                        eventId: n.id,
                        recurrenceId: _,
                    });
            }, [c, n, _]);
        if (null == n || !h) return null;
        let T = (0, E.Fd)(n),
            C = (0, E.AZ)(n),
            R = n.entity_type === N.Ps.EXTERNAL;
        return (0, r.jsx)(f.A, {
            className: s()({ [w.vk]: c }),
            children: (0, r.jsxs)(l.DUT, {
                onClick: b,
                children: [
                    null != n.image &&
                        (0, r.jsx)(S.A, {
                            source: (0, v.A)(n),
                            className: w.vK,
                        }),
                    (0, r.jsx)(I.Ay, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: w.tj,
                        guildId: n.guild_id,
                        creator: m,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: _,
                    }),
                    (0, r.jsxs)("div", {
                        className: w.xQ,
                        children: [
                            (0, r.jsx)(j, {
                                guild: a,
                                channel: o,
                                guildScheduledEvent: n,
                                isMember: c,
                            }),
                            (0, r.jsx)(M, {
                                isActive: T,
                                isEnded: C,
                                isMember: c,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: _,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: p,
                                isExternal: R,
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
