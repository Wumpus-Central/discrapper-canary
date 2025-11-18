n.d(t, {
    Qt: () => L,
    ZP: () => k,
}),
    n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(447543),
    u = n(287734),
    d = n(372769),
    f = n(955415),
    _ = n(922482),
    p = n(592125),
    h = n(430824),
    m = n(411198),
    g = n(15274),
    E = n(924301),
    b = n(725436),
    y = n(978227),
    O = n(236373),
    v = n(854698),
    I = n(405613),
    T = n(95291),
    S = n(742593),
    A = n(217804),
    C = n(139712),
    N = n(765305),
    R = n(388032),
    P = n(98435);
let D = (e, t) => (n) => {
        n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n);
    },
    w = (e, t) => (n) => {
        let r = p.Z.getChannel(e.channel_id);
        null != r && (n.stopPropagation(), (0, _.Cq)(r), null == t || t(n));
    },
    L = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case N.WX.STAGE_INSTANCE:
                return w(e, t);
            case N.WX.VOICE:
                return D(e, t);
        }
        return () => {};
    },
    x = (e, t) => t && [N.WX.STAGE_INSTANCE, N.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    M = i.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: a, channel: o, isMember: u } = e,
            _ = (0, s.e7)([h.Z], () => {
                if (null == n) return null;
                let e = h.Z.getGuild(n.id);
                return null != e ? e : (0, m.lM)(n) ? n : (0, m.Qs)(n);
            }, [n]),
            p = (0, A.u)(a, o),
            g = i.useCallback(
                (e) => {
                    u && null != a && (e.stopPropagation(), (0, c.Bk)(a));
                },
                [u, a],
            ),
            E = i.useCallback(
                (e) => {
                    L(a)(e);
                },
                [a],
            );
        if (null == _) return null;
        let y = null == p ? void 0 : p.IconComponent,
            O = (0, r.jsxs)(r.Fragment, {
                children: [
                    null != y &&
                        (0, r.jsx)(y, {
                            size: "xs",
                            color: "currentColor",
                            className: P.channelIcon,
                        }),
                    (0, r.jsx)(l.Text, {
                        className: P.channelDescription,
                        variant: "text-xs/normal",
                        children: (0, b.m)(null != (t = null == p ? void 0 : p.locationName) ? t : "", !0),
                    }),
                ],
            });
        return (0, r.jsxs)("div", {
            className: P.inviteDetailsContainer,
            children: [
                (0, r.jsx)(f.Z.Icon, {
                    guild: _,
                    onClick: g,
                }),
                (0, r.jsxs)("div", {
                    className: P.verticalContainer,
                    children: [
                        (0, r.jsxs)("div", {
                            className: P.guildChannelInfoContainer,
                            children: [
                                (0, r.jsx)(d.Z, {
                                    guild: _,
                                    tooltipPosition: "top",
                                    tooltipColor: l.aML.Colors.PRIMARY,
                                    size: 16,
                                    className: P.guildBadge,
                                }),
                                (0, r.jsx)(l.P3F, {
                                    className: P.guildNameClickable,
                                    onClick: g,
                                    children: (0, r.jsx)(l.Heading, {
                                        className: u ? P.guildNameLinkable : P.guildName,
                                        variant: "text-sm/medium",
                                        children: _.name,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: P.channelInfoContainer,
                            children: x(a, u)
                                ? (0, r.jsx)(l.P3F, {
                                      className: P.channelLocationLink,
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
    j = i.memo(function (e) {
        let {
                guildId: t,
                guildScheduledEventId: n,
                recurrenceId: i,
                isActive: a,
                isEnded: o,
                isMember: c,
                isExternal: u,
                onAcceptInstantInvite: d,
                onTransitionToInviteChannel: f,
            } = e,
            _ = (0, s.e7)([E.ZP], () => E.ZP.isInterestedInEventRecurrence(n, i), [n, i]),
            p = (e) => {
                e.stopPropagation(), (0, C.Z)(n, i, t);
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
                : o
                  ? (0, r.jsx)(l.Button, {
                        text: R.intl.string(R.t.Pj7Xrv),
                        variant: "secondary",
                        disabled: !0,
                    })
                  : _
                    ? (0, r.jsx)(l.Button, {
                          text: R.intl.string(R.t.DlcqlU),
                          onClick: p,
                          variant: "active",
                          icon: l.dz2,
                      })
                    : (0, r.jsx)(l.Button, {
                          text: R.intl.string(R.t.DlcqlU),
                          onClick: p,
                          variant: "secondary",
                          icon: l.Dkj,
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
                channel: s,
                isMember: c,
                recurrenceId: u,
                onAcceptInstantInvite: d,
                onTransitionToInviteChannel: _,
            } = e,
            p = null != u ? u : null != n ? (0, v.DK)(n) : null,
            h =
                (null == n ? void 0 : n.recurrence_rule) == null ||
                null == p ||
                (0, v.Rp)((0, O.KV)(null == n ? void 0 : n.recurrence_rule), p),
            m = (0, y.Z)(n),
            b = i.useCallback(() => {
                c &&
                    null != n &&
                    (0, g.bO)({
                        eventId: n.id,
                        recurrenceId: p,
                    });
            }, [c, n, p]);
        if (null == n || !h) return null;
        let A = (0, E.xt)(n),
            C = (0, E.Z2)(n),
            R = n.entity_type === N.WX.EXTERNAL;
        return (0, r.jsx)(f.Z, {
            className: o()({ [P.clickable]: c }),
            children: (0, r.jsxs)(l.P3F, {
                onClick: b,
                children: [
                    null != n.image &&
                        (0, r.jsx)(T.Z, {
                            source: (0, I.Z)(n),
                            className: P.banner,
                        }),
                    (0, r.jsx)(S.ZP, {
                        name: n.name,
                        description: null != (t = n.description) ? t : void 0,
                        descriptionClassName: P.eventDescription,
                        guildId: n.guild_id,
                        creator: m,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: p,
                    }),
                    (0, r.jsxs)("div", {
                        className: P.footerContainer,
                        children: [
                            (0, r.jsx)(M, {
                                guild: a,
                                channel: s,
                                guildScheduledEvent: n,
                                isMember: c,
                            }),
                            (0, r.jsx)(j, {
                                isActive: A,
                                isEnded: C,
                                isMember: c,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: p,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: _,
                                isExternal: R,
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
