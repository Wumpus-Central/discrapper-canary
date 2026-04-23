n.d(t, { A: () => Z });
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
    h = n(140735),
    g = n(781696),
    A = n(177953),
    f = n(534514),
    p = n(846293),
    E = n(688810),
    m = n(263063),
    x = n(714991),
    v = n(967144),
    I = n(660110),
    C = n(657331),
    T = n(696451),
    S = n(71393),
    R = n(427262),
    N = n(285059),
    y = n(408607),
    b = n(722260),
    L = n(563312),
    j = n(826383),
    w = n(794782),
    P = n(974930),
    M = n(847494),
    D = n(888637),
    U = n(103355),
    O = n(167630),
    G = n(988794),
    k = n(985018),
    F = n(904015);
function B(e) {
    let { creator: t, guildId: n, channelId: i } = e,
        { analyticsLocations: r } = (0, E.Ay)(),
        s = (0, a.bG)([T.Ay], () => T.Ay.getMember(n, t.id), [t, n]),
        h = (0, v.gn)(s?.guildId, s?.userId, s?.colorStrings ?? null);
    return (0, l.jsxs)("div", {
        className: F.nM,
        children: [
            (0, l.jsx)(c.eu, {
                size: o._3.SIZE_20,
                src: t.getAvatarURL(n, 20),
                "aria-label": s?.nick ?? R.Ay.getName(t),
                className: F.Kk,
            }),
            (0, l.jsx)(d.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: k.intl.format(k.t["66DLFs"], {
                    usernameHook: function () {
                        return (0, l.jsx)(
                            u.D,
                            {
                                onClick: () =>
                                    (0, C.openUserProfileModal)({
                                        guildId: n,
                                        channelId: i,
                                        userId: t.id,
                                        roleId: s?.colorRoleId,
                                        sourceAnalyticsLocations: r,
                                    }),
                                className: F.xL,
                                tag: "span",
                                role: "link",
                                children: (0, l.jsx)(_.g, {
                                    name: s?.nick ?? R.Ay.getName(t),
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
function V(e) {
    let { guild: t, onClick: n, onClose: r } = e,
        a = i.useCallback(
            (e) => {
                n?.(e), null != n && r?.(e);
            },
            [n, r],
        ),
        c = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(h.A, { children: k.intl.string(k.t["5qyruI"]) }),
                (0, l.jsx)(m.Ay, {
                    guild: t,
                    size: m.Ay.Sizes.MINI,
                    active: !0,
                    "aria-hidden": !0,
                    className: s()(F.$f, F.Kk),
                }),
                (0, l.jsx)(x.A, {
                    guild: t,
                    tooltipPosition: "top",
                    tooltipColor: g.ST.Colors.PRIMARY,
                    size: 16,
                    className: F.n2,
                }),
                (0, l.jsx)(d.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: F.yX,
                    children: t.name,
                }),
            ],
        });
    return (0, l.jsx)("div", {
        className: F.nM,
        children: null != n ? (0, l.jsx)(u.D, { onClick: a, className: F.vk, role: "link", children: c }) : c,
    });
}
function H(e) {
    let { userCount: t, onClick: n } = e;
    return (0, l.jsxs)("div", {
        className: F.nM,
        children: [
            (0, l.jsx)(A.n, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: F.Kk,
                "aria-label": k.intl.string(k.t["9Oq93m"]),
            }),
            (0, l.jsx)(u.D, {
                onClick: n,
                className: F.tK,
                children: (0, l.jsx)(d.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: k.intl.format(k.t["+DLsD8"], { count: t }),
                }),
            }),
        ],
    });
}
function Z(e) {
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
        h = (0, a.bG)([S.A], () => null != S.A.getGuild(n.id), [n.id]),
        { startTime: g, endTime: A } = (0, L.Ay)(t, u),
        E = (0, j.A)(t.guild_id, t.id, u),
        m = i.useCallback(
            (e) => {
                e.stopPropagation(), null != t && (0, p.rq)(t);
            },
            [t],
        ),
        x = (0, b.A)(u, t.id),
        v = (0, y.A)(t);
    i.useEffect(() => {
        N.A.getGuildEventUserCounts(n.id, t.id, null != u ? [u] : []), N.A.getGuildEventsForCurrentUser(n.id);
    }, [n.id, t.id, u]);
    let C = (0, w.Sn)(t.recurrence_rule),
        T = t?.scheduled_start_time != null ? (0, P.j)(x, g, new Date(t?.scheduled_start_time)) : null;
    return (0, l.jsxs)("div", {
        ref: d,
        children: [
            (0, l.jsxs)("div", {
                className: F.wx,
                children: [
                    (0, l.jsx)(U.L, {
                        startTime: g.toISOString(),
                        endTime: A?.toISOString(),
                        status: T ?? t.status,
                        eventType: t.entity_type,
                        guildEventId: t.id,
                        recurrenceId: u,
                    }),
                    (0, l.jsx)(f.D, {
                        id: s,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: F.DD,
                        children: t.name,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: F.rf,
                children: [
                    (0, l.jsx)(V, { guild: n, onClick: h ? m : void 0, onClose: c }),
                    (0, l.jsx)(O.A, { guildScheduledEvent: t, channel: r, onClose: c }),
                    null != E && (0, l.jsx)(H, { userCount: E, onClick: o }),
                    null != v && (0, l.jsx)(B, { creator: v, guildId: n.id, channelId: r?.id }, v.id),
                    null != t.description &&
                        (0, l.jsx)("div", {
                            className: F.h_,
                            children: (0, l.jsx)(M.A, { description: t.description, truncate: !1, guildId: n.id }),
                        }),
                    G.Tn.has(t.entity_type) &&
                        (0, l.jsx)(I.A, { noBackground: !0, divider: I.V.TOP, channelId: r?.id }),
                ],
            }),
            null != C && (0, l.jsx)("hr", { className: F.yF }),
            null != C &&
                (0, l.jsx)(D.A, {
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
