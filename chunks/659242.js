n.d(t, { A: () => D }), n(228524);
var l = n(627968),
    r = n(64700),
    s = n(503698),
    i = n.n(s),
    a = n(311907),
    c = n(397927),
    d = n(846293),
    u = n(688810),
    o = n(263063),
    f = n(714991),
    b = n(967144),
    x = n(657331),
    h = n(696451),
    g = n(71393),
    j = n(427262),
    v = n(285059),
    m = n(408607),
    _ = n(722260),
    p = n(563312),
    y = n(826383),
    A = n(794782),
    N = n(974930),
    O = n(847494),
    k = n(888637),
    I = n(103355),
    S = n(167630),
    C = n(985018),
    E = n(888804);
function w(e) {
    var t, n;
    let { creator: r, guildId: s, channelId: i } = e,
        { analyticsLocations: d } = (0, u.Ay)(),
        o = (0, a.bG)([h.Ay], () => h.Ay.getMember(s, r.id), [r, s]),
        f = (0, b.gn)(
            null == o ? void 0 : o.guildId,
            null == o ? void 0 : o.userId,
            null != (t = null == o ? void 0 : o.colorStrings) ? t : null,
        );
    return (0, l.jsxs)("div", {
        className: E.nM,
        children: [
            (0, l.jsx)(c.euF, {
                size: c._3J.SIZE_20,
                src: r.getAvatarURL(s, 20),
                "aria-label": null != (n = null == o ? void 0 : o.nick) ? n : j.Ay.getName(r),
                className: E.Kk,
            }),
            (0, l.jsx)(c.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: C.intl.format(C.t["66DLFs"], {
                    usernameHook: function () {
                        var e, t;
                        return (0, l.jsx)(
                            c.DUT,
                            {
                                onClick: () =>
                                    (0, x.openUserProfileModal)({
                                        guildId: s,
                                        channelId: i,
                                        userId: r.id,
                                        roleId: null == o ? void 0 : o.colorRoleId,
                                        sourceAnalyticsLocations: d,
                                    }),
                                className: E.xL,
                                tag: "span",
                                role: "link",
                                children: (0, l.jsx)(c.gyj, {
                                    name: null != (e = null == o ? void 0 : o.nick) ? e : j.Ay.getName(r),
                                    colorString: null != (t = null == o ? void 0 : o.colorString) ? t : null,
                                    colorStrings: f,
                                }),
                            },
                            "open-user-profile",
                        );
                    },
                }),
            }),
        ],
    });
}
function P(e) {
    let { guild: t, onClick: n, onClose: s } = e,
        a = r.useCallback(
            (e) => {
                null == n || n(e), null != n && (null == s || s(e));
            },
            [n, s],
        ),
        d = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.A, {
                    guild: t,
                    size: o.A.Sizes.MINI,
                    active: !0,
                    className: i()(E.$f, E.Kk),
                }),
                (0, l.jsx)(f.A, {
                    guild: t,
                    tooltipPosition: "top",
                    tooltipColor: c.STz.Colors.PRIMARY,
                    size: 16,
                    className: E.n2,
                }),
                (0, l.jsx)(c.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: E.yX,
                    children: t.name,
                }),
            ],
        });
    return (0, l.jsx)("div", {
        className: E.nM,
        children:
            null != n
                ? (0, l.jsx)(c.DUT, {
                      onClick: a,
                      className: E.vk,
                      role: "link",
                      children: d,
                  })
                : d,
    });
}
function T(e) {
    let { userCount: t, onClick: n } = e;
    return (0, l.jsxs)("div", {
        className: E.nM,
        children: [
            (0, l.jsx)(c.nFg, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: E.Kk,
            }),
            (0, l.jsx)(c.DUT, {
                onClick: n,
                className: E.tK,
                children: (0, l.jsx)(c.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: C.intl.format(C.t["+DLsD8"], { count: t }),
                }),
            }),
        ],
    });
}
function D(e) {
    let {
            guildEvent: t,
            guild: n,
            channel: s,
            headerId: i,
            onClose: u,
            onClickInterestedCount: o,
            containerRef: f,
            recurrenceId: b,
            setRecurrenceId: x,
        } = e,
        h = (0, a.bG)([g.A], () => null != g.A.getGuild(n.id), [n.id]),
        { startTime: j, endTime: C } = (0, p.Ay)(t, b),
        D = (0, y.A)(t.guild_id, t.id, b),
        L = r.useCallback(
            (e) => {
                e.stopPropagation(), null != t && (0, d.rq)(t);
            },
            [t],
        ),
        R = (0, _.A)(b, t.id),
        U = (0, m.A)(t);
    r.useEffect(() => {
        v.A.getGuildEventUserCounts(n.id, t.id, null != b ? [b] : []), v.A.getGuildEventsForCurrentUser(n.id);
    }, [n.id, t.id, b]);
    let G = (0, A.Sn)(t.recurrence_rule),
        M =
            (null == t ? void 0 : t.scheduled_start_time) != null
                ? (0, N.j)(R, j, new Date(null == t ? void 0 : t.scheduled_start_time))
                : null;
    return (0, l.jsxs)("div", {
        ref: f,
        children: [
            (0, l.jsxs)("div", {
                className: E.wx,
                children: [
                    (0, l.jsx)(I.L, {
                        startTime: j.toISOString(),
                        endTime: null == C ? void 0 : C.toISOString(),
                        status: null != M ? M : t.status,
                        eventType: t.entity_type,
                        guildEventId: t.id,
                        recurrenceId: b,
                    }),
                    (0, l.jsx)(c.Heading, {
                        id: i,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: E.DD,
                        children: t.name,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: E.rf,
                children: [
                    (0, l.jsx)(P, {
                        guild: n,
                        onClick: h ? L : void 0,
                        onClose: u,
                    }),
                    (0, l.jsx)(S.A, {
                        guildScheduledEvent: t,
                        channel: s,
                        onClose: u,
                    }),
                    null != D &&
                        (0, l.jsx)(T, {
                            userCount: D,
                            onClick: o,
                        }),
                    null != U &&
                        (0, l.jsx)(
                            w,
                            {
                                creator: U,
                                guildId: n.id,
                                channelId: null == s ? void 0 : s.id,
                            },
                            U.id,
                        ),
                    null != t.description &&
                        (0, l.jsx)("div", {
                            className: E.h_,
                            children: (0, l.jsx)(O.A, {
                                description: t.description,
                                truncate: !1,
                                guildId: n.id,
                            }),
                        }),
                ],
            }),
            null != G && (0, l.jsx)("hr", { className: E.yF }),
            null != G &&
                (0, l.jsx)(k.A, {
                    guildId: n.id,
                    recurrenceRule: G,
                    guildEventId: t.id,
                    onRecurrenceClick: x,
                    hideScroller: !0,
                    activeRecurrenceId: b,
                }),
        ],
    });
}
