t.d(n, { A: () => P });
var i = t(627968),
    l = t(64700),
    d = t(503698),
    r = t.n(d),
    s = t(311907),
    a = t(397927),
    c = t(846293),
    o = t(688810),
    u = t(263063),
    _ = t(714991),
    g = t(967144),
    f = t(660110),
    h = t(657331),
    x = t(696451),
    m = t(71393),
    v = t(427262),
    p = t(285059),
    A = t(408607),
    I = t(722260),
    j = t(563312),
    b = t(826383),
    N = t(794782),
    C = t(974930),
    y = t(847494),
    k = t(888637),
    E = t(103355),
    S = t(167630),
    T = t(988794),
    L = t(985018),
    D = t(458242);
function R(e) {
    let { creator: n, guildId: t, channelId: l } = e,
        { analyticsLocations: d } = (0, o.Ay)(),
        r = (0, s.bG)([x.Ay], () => x.Ay.getMember(t, n.id), [n, t]),
        c = (0, g.gn)(r?.guildId, r?.userId, r?.colorStrings ?? null);
    return (0, i.jsxs)("div", {
        className: D.nM,
        children: [
            (0, i.jsx)(a.euF, {
                size: a._3J.SIZE_20,
                src: n.getAvatarURL(t, 20),
                "aria-label": r?.nick ?? v.Ay.getName(n),
                className: D.Kk,
            }),
            (0, i.jsx)(a.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: L.intl.format(L.t["66DLFs"], {
                    usernameHook: function () {
                        return (0, i.jsx)(
                            a.DUT,
                            {
                                onClick: () =>
                                    (0, h.openUserProfileModal)({
                                        guildId: t,
                                        channelId: l,
                                        userId: n.id,
                                        roleId: r?.colorRoleId,
                                        sourceAnalyticsLocations: d,
                                    }),
                                className: D.xL,
                                tag: "span",
                                role: "link",
                                children: (0, i.jsx)(a.gyj, {
                                    name: r?.nick ?? v.Ay.getName(n),
                                    colorString: r?.colorString ?? null,
                                    colorStrings: c,
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
function G(e) {
    let { guild: n, onClick: t, onClose: d } = e,
        s = l.useCallback(
            (e) => {
                t?.(e), null != t && d?.(e);
            },
            [t, d],
        ),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.Ay, { guild: n, size: u.Ay.Sizes.MINI, active: !0, className: r()(D.$f, D.Kk) }),
                (0, i.jsx)(_.A, {
                    guild: n,
                    tooltipPosition: "top",
                    tooltipColor: a.STz.Colors.PRIMARY,
                    size: 16,
                    className: D.n2,
                }),
                (0, i.jsx)(a.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: D.yX,
                    children: n.name,
                }),
            ],
        });
    return (0, i.jsx)("div", {
        className: D.nM,
        children: null != t ? (0, i.jsx)(a.DUT, { onClick: s, className: D.vk, role: "link", children: c }) : c,
    });
}
function w(e) {
    let { userCount: n, onClick: t } = e;
    return (0, i.jsxs)("div", {
        className: D.nM,
        children: [
            (0, i.jsx)(a.nFg, { size: "custom", color: "currentColor", width: 20, height: 20, className: D.Kk }),
            (0, i.jsx)(a.DUT, {
                onClick: t,
                className: D.tK,
                children: (0, i.jsx)(a.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: L.intl.format(L.t["+DLsD8"], { count: n }),
                }),
            }),
        ],
    });
}
function P(e) {
    let {
            guildEvent: n,
            guild: t,
            channel: d,
            headerId: r,
            onClose: o,
            onClickInterestedCount: u,
            containerRef: _,
            recurrenceId: g,
            setRecurrenceId: h,
        } = e,
        x = (0, s.bG)([m.A], () => null != m.A.getGuild(t.id), [t.id]),
        { startTime: v, endTime: L } = (0, j.Ay)(n, g),
        P = (0, b.A)(n.guild_id, n.id, g),
        U = l.useCallback(
            (e) => {
                e.stopPropagation(), null != n && (0, c.rq)(n);
            },
            [n],
        ),
        B = (0, I.A)(g, n.id),
        M = (0, A.A)(n);
    l.useEffect(() => {
        p.A.getGuildEventUserCounts(t.id, n.id, null != g ? [g] : []), p.A.getGuildEventsForCurrentUser(t.id);
    }, [t.id, n.id, g]);
    let O = (0, N.Sn)(n.recurrence_rule),
        V = n?.scheduled_start_time != null ? (0, C.j)(B, v, new Date(n?.scheduled_start_time)) : null;
    return (0, i.jsxs)("div", {
        ref: _,
        children: [
            (0, i.jsxs)("div", {
                className: D.wx,
                children: [
                    (0, i.jsx)(E.L, {
                        startTime: v.toISOString(),
                        endTime: L?.toISOString(),
                        status: V ?? n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: g,
                    }),
                    (0, i.jsx)(a.Heading, {
                        id: r,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: D.DD,
                        children: n.name,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: D.rf,
                children: [
                    (0, i.jsx)(G, { guild: t, onClick: x ? U : void 0, onClose: o }),
                    (0, i.jsx)(S.A, { guildScheduledEvent: n, channel: d, onClose: o }),
                    null != P && (0, i.jsx)(w, { userCount: P, onClick: u }),
                    null != M && (0, i.jsx)(R, { creator: M, guildId: t.id, channelId: d?.id }, M.id),
                    null != n.description &&
                        (0, i.jsx)("div", {
                            className: D.h_,
                            children: (0, i.jsx)(y.A, { description: n.description, truncate: !1, guildId: t.id }),
                        }),
                    T.Tn.has(n.entity_type) &&
                        (0, i.jsx)(f.A, { noBackground: !0, divider: f.V.TOP, channelId: d?.id }),
                ],
            }),
            null != O && (0, i.jsx)("hr", { className: D.yF }),
            null != O &&
                (0, i.jsx)(k.A, {
                    guildId: t.id,
                    recurrenceRule: O,
                    guildEventId: n.id,
                    onRecurrenceClick: h,
                    hideScroller: !0,
                    activeRecurrenceId: g,
                }),
        ],
    });
}
