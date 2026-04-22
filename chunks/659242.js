n.d(t, { A: () => H });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    c = n(97808),
    o = n(778712),
    d = n(834730),
    u = n(939249),
    _ = n(463930),
    h = n(781696),
    g = n(177953),
    A = n(534514),
    f = n(846293),
    p = n(688810),
    E = n(263063),
    m = n(714991),
    x = n(967144),
    v = n(660110),
    I = n(657331),
    C = n(696451),
    T = n(71393),
    S = n(427262),
    R = n(285059),
    N = n(408607),
    y = n(722260),
    b = n(563312),
    L = n(826383),
    j = n(794782),
    w = n(974930),
    P = n(847494),
    M = n(888637),
    D = n(103355),
    U = n(167630),
    O = n(988794),
    G = n(985018),
    k = n(478799);
function F(e) {
    let { creator: t, guildId: n, channelId: i } = e,
        { analyticsLocations: r } = (0, p.Ay)(),
        s = (0, a.bG)([C.Ay], () => C.Ay.getMember(n, t.id), [t, n]),
        h = (0, x.gn)(s?.guildId, s?.userId, s?.colorStrings ?? null);
    return (0, l.jsxs)("div", {
        className: k.nM,
        children: [
            (0, l.jsx)(c.eu, {
                size: o._3.SIZE_20,
                src: t.getAvatarURL(n, 20),
                "aria-label": s?.nick ?? S.Ay.getName(t),
                className: k.Kk,
            }),
            (0, l.jsx)(d.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: G.intl.format(G.t["66DLFs"], {
                    usernameHook: function () {
                        return (0, l.jsx)(
                            u.D,
                            {
                                onClick: () =>
                                    (0, I.openUserProfileModal)({
                                        guildId: n,
                                        channelId: i,
                                        userId: t.id,
                                        roleId: s?.colorRoleId,
                                        sourceAnalyticsLocations: r,
                                    }),
                                className: k.xL,
                                tag: "span",
                                role: "link",
                                children: (0, l.jsx)(_.g, {
                                    name: s?.nick ?? S.Ay.getName(t),
                                    colorString: s?.colorString ?? null,
                                    colorStrings: h,
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
function B(e) {
    let { guild: t, onClick: n, onClose: r } = e,
        a = i.useCallback(
            (e) => {
                n?.(e), null != n && r?.(e);
            },
            [n, r],
        ),
        c = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(E.Ay, { guild: t, size: E.Ay.Sizes.MINI, active: !0, className: s()(k.$f, k.Kk) }),
                (0, l.jsx)(m.A, {
                    guild: t,
                    tooltipPosition: "top",
                    tooltipColor: h.ST.Colors.PRIMARY,
                    size: 16,
                    className: k.n2,
                }),
                (0, l.jsx)(d.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: k.yX,
                    children: t.name,
                }),
            ],
        });
    return (0, l.jsx)("div", {
        className: k.nM,
        children: null != n ? (0, l.jsx)(u.D, { onClick: a, className: k.vk, role: "link", children: c }) : c,
    });
}
function V(e) {
    let { userCount: t, onClick: n } = e;
    return (0, l.jsxs)("div", {
        className: k.nM,
        children: [
            (0, l.jsx)(g.n, { size: "custom", color: "currentColor", width: 20, height: 20, className: k.Kk }),
            (0, l.jsx)(u.D, {
                onClick: n,
                className: k.tK,
                children: (0, l.jsx)(d.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: G.intl.format(G.t["+DLsD8"], { count: t }),
                }),
            }),
        ],
    });
}
function H(e) {
    let {
            guildEvent: t,
            guild: n,
            channel: r,
            headerId: s,
            onClose: c,
            onClickInterestedCount: o,
            containerRef: d,
            recurrenceId: u,
            setRecurrenceId: _,
        } = e,
        h = (0, a.bG)([T.A], () => null != T.A.getGuild(n.id), [n.id]),
        { startTime: g, endTime: p } = (0, b.Ay)(t, u),
        E = (0, L.A)(t.guild_id, t.id, u),
        m = i.useCallback(
            (e) => {
                e.stopPropagation(), null != t && (0, f.rq)(t);
            },
            [t],
        ),
        x = (0, y.A)(u, t.id),
        I = (0, N.A)(t);
    i.useEffect(() => {
        R.A.getGuildEventUserCounts(n.id, t.id, null != u ? [u] : []), R.A.getGuildEventsForCurrentUser(n.id);
    }, [n.id, t.id, u]);
    let C = (0, j.Sn)(t.recurrence_rule),
        S = t?.scheduled_start_time != null ? (0, w.j)(x, g, new Date(t?.scheduled_start_time)) : null;
    return (0, l.jsxs)("div", {
        ref: d,
        children: [
            (0, l.jsxs)("div", {
                className: k.wx,
                children: [
                    (0, l.jsx)(D.L, {
                        startTime: g.toISOString(),
                        endTime: p?.toISOString(),
                        status: S ?? t.status,
                        eventType: t.entity_type,
                        guildEventId: t.id,
                        recurrenceId: u,
                    }),
                    (0, l.jsx)(A.D, {
                        id: s,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: k.DD,
                        children: t.name,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: k.rf,
                children: [
                    (0, l.jsx)(B, { guild: n, onClick: h ? m : void 0, onClose: c }),
                    (0, l.jsx)(U.A, { guildScheduledEvent: t, channel: r, onClose: c }),
                    null != E && (0, l.jsx)(V, { userCount: E, onClick: o }),
                    null != I && (0, l.jsx)(F, { creator: I, guildId: n.id, channelId: r?.id }, I.id),
                    null != t.description &&
                        (0, l.jsx)("div", {
                            className: k.h_,
                            children: (0, l.jsx)(P.A, { description: t.description, truncate: !1, guildId: n.id }),
                        }),
                    O.Tn.has(t.entity_type) &&
                        (0, l.jsx)(v.A, { noBackground: !0, divider: v.V.TOP, channelId: r?.id }),
                ],
            }),
            null != C && (0, l.jsx)("hr", { className: k.yF }),
            null != C &&
                (0, l.jsx)(M.A, {
                    guildId: n.id,
                    recurrenceRule: C,
                    guildEventId: t.id,
                    onRecurrenceClick: _,
                    hideScroller: !0,
                    activeRecurrenceId: u,
                }),
        ],
    });
}
