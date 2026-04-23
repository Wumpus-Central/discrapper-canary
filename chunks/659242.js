t.d(n, { A: () => F });
var i = t(627968),
    l = t(64700),
    d = t(503698),
    r = t.n(d),
    s = t(311907),
    a = t(97808),
    c = t(778712),
    o = t(834730),
    u = t(939249),
    _ = t(463930),
    g = t(140735),
    h = t(781696),
    f = t(177953),
    v = t(534514),
    x = t(846293),
    m = t(688810),
    p = t(263063),
    A = t(714991),
    I = t(967144),
    j = t(660110),
    b = t(657331),
    N = t(696451),
    C = t(71393),
    E = t(427262),
    y = t(285059),
    k = t(408607),
    S = t(722260),
    L = t(563312),
    T = t(826383),
    D = t(794782),
    R = t(974930),
    w = t(847494),
    G = t(888637),
    P = t(103355),
    M = t(167630),
    B = t(988794),
    U = t(985018),
    V = t(478799);
function O(e) {
    let { creator: n, guildId: t, channelId: l } = e,
        { analyticsLocations: d } = (0, m.Ay)(),
        r = (0, s.bG)([N.Ay], () => N.Ay.getMember(t, n.id), [n, t]),
        g = (0, I.gn)(r?.guildId, r?.userId, r?.colorStrings ?? null);
    return (0, i.jsxs)("div", {
        className: V.nM,
        children: [
            (0, i.jsx)(a.eu, {
                size: c._3.SIZE_20,
                src: n.getAvatarURL(t, 20),
                "aria-label": r?.nick ?? E.Ay.getName(n),
                className: V.Kk,
            }),
            (0, i.jsx)(o.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: U.intl.format(U.t["66DLFs"], {
                    usernameHook: function () {
                        return (0, i.jsx)(
                            u.D,
                            {
                                onClick: () =>
                                    (0, b.openUserProfileModal)({
                                        guildId: t,
                                        channelId: l,
                                        userId: n.id,
                                        roleId: r?.colorRoleId,
                                        sourceAnalyticsLocations: d,
                                    }),
                                className: V.xL,
                                tag: "span",
                                role: "link",
                                children: (0, i.jsx)(_.g, {
                                    name: r?.nick ?? E.Ay.getName(n),
                                    colorString: r?.colorString ?? null,
                                    colorStrings: g,
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
function K(e) {
    let { guild: n, onClick: t, onClose: d } = e,
        s = l.useCallback(
            (e) => {
                t?.(e), null != t && d?.(e);
            },
            [t, d],
        ),
        a = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.A, { children: U.intl.string(U.t["5qyruI"]) }),
                (0, i.jsx)(p.Ay, {
                    guild: n,
                    size: p.Ay.Sizes.MINI,
                    active: !0,
                    "aria-hidden": !0,
                    className: r()(V.$f, V.Kk),
                }),
                (0, i.jsx)(A.A, {
                    guild: n,
                    tooltipPosition: "top",
                    tooltipColor: h.ST.Colors.PRIMARY,
                    size: 16,
                    className: V.n2,
                }),
                (0, i.jsx)(o.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: V.yX,
                    children: n.name,
                }),
            ],
        });
    return (0, i.jsx)("div", {
        className: V.nM,
        children: null != t ? (0, i.jsx)(u.D, { onClick: s, className: V.vk, role: "link", children: a }) : a,
    });
}
function H(e) {
    let { userCount: n, onClick: t } = e;
    return (0, i.jsxs)("div", {
        className: V.nM,
        children: [
            (0, i.jsx)(f.n, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: V.Kk,
                "aria-label": U.intl.string(U.t["9Oq93m"]),
            }),
            (0, i.jsx)(u.D, {
                onClick: t,
                className: V.tK,
                children: (0, i.jsx)(o.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: U.intl.format(U.t["+DLsD8"], { count: n }),
                }),
            }),
        ],
    });
}
function F(e) {
    let {
            guildEvent: n,
            guild: t,
            channel: d,
            headerId: r,
            onClose: a,
            onClickInterestedCount: c,
            containerRef: o,
            recurrenceId: u,
            setRecurrenceId: _,
        } = e,
        g = (0, s.bG)([C.A], () => null != C.A.getGuild(t.id), [t.id]),
        { startTime: h, endTime: f } = (0, L.Ay)(n, u),
        m = (0, T.A)(n.guild_id, n.id, u),
        p = l.useCallback(
            (e) => {
                e.stopPropagation(), null != n && (0, x.rq)(n);
            },
            [n],
        ),
        A = (0, S.A)(u, n.id),
        I = (0, k.A)(n);
    l.useEffect(() => {
        y.A.getGuildEventUserCounts(t.id, n.id, null != u ? [u] : []), y.A.getGuildEventsForCurrentUser(t.id);
    }, [t.id, n.id, u]);
    let b = (0, D.Sn)(n.recurrence_rule),
        N = n?.scheduled_start_time != null ? (0, R.j)(A, h, new Date(n?.scheduled_start_time)) : null;
    return (0, i.jsxs)("div", {
        ref: o,
        children: [
            (0, i.jsxs)("div", {
                className: V.wx,
                children: [
                    (0, i.jsx)(P.L, {
                        startTime: h.toISOString(),
                        endTime: f?.toISOString(),
                        status: N ?? n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: u,
                    }),
                    (0, i.jsx)(v.D, {
                        id: r,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: V.DD,
                        children: n.name,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: V.rf,
                children: [
                    (0, i.jsx)(K, { guild: t, onClick: g ? p : void 0, onClose: a }),
                    (0, i.jsx)(M.A, { guildScheduledEvent: n, channel: d, onClose: a }),
                    null != m && (0, i.jsx)(H, { userCount: m, onClick: c }),
                    null != I && (0, i.jsx)(O, { creator: I, guildId: t.id, channelId: d?.id }, I.id),
                    null != n.description &&
                        (0, i.jsx)("div", {
                            className: V.h_,
                            children: (0, i.jsx)(w.A, { description: n.description, truncate: !1, guildId: t.id }),
                        }),
                    B.Tn.has(n.entity_type) &&
                        (0, i.jsx)(j.A, { noBackground: !0, divider: j.V.TOP, channelId: d?.id }),
                ],
            }),
            null != b && (0, i.jsx)("hr", { className: V.yF }),
            null != b &&
                (0, i.jsx)(G.A, {
                    guildId: t.id,
                    recurrenceRule: b,
                    guildEventId: n.id,
                    onRecurrenceClick: _,
                    hideScroller: !0,
                    activeRecurrenceId: u,
                }),
        ],
    });
}
