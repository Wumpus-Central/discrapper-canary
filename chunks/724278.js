n.d(t, { Z: () => Z }), n(953529);
var i = n(951288),
    l = n(647438),
    r = n(120356),
    a = n.n(r),
    d = n(442837),
    s = n(481060),
    o = n(447543),
    c = n(906732),
    u = n(565138),
    _ = n(372769),
    g = n(884902),
    p = n(892001),
    m = n(271383),
    I = n(430824),
    E = n(51144),
    f = n(897285),
    h = n(978227),
    v = n(894017),
    T = n(79874),
    y = n(376108),
    C = n(236373),
    x = n(954313),
    L = n(391174),
    j = n(810561),
    b = n(390966),
    O = n(390072),
    S = n(388032),
    U = n(831272);
function D(e) {
    var t, n;
    let { creator: l, guildId: r, channelId: a } = e,
        { analyticsLocations: o } = (0, c.ZP)(),
        u = (0, d.e7)([m.ZP], () => m.ZP.getMember(r, l.id), [l, r]),
        _ = (0, g.X7)(
            null == u ? void 0 : u.guildId,
            null == u ? void 0 : u.userId,
            null != (t = null == u ? void 0 : u.colorStrings) ? t : null,
        );
    return (0, i.jsxs)("div", {
        className: U.row,
        children: [
            (0, i.jsx)(s.qEK, {
                size: s.EFr.SIZE_20,
                src: l.getAvatarURL(r, 20),
                "aria-label": null != (n = null == u ? void 0 : u.nick) ? n : E.ZP.getName(l),
                className: U.icon,
            }),
            (0, i.jsx)(s.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: S.intl.format(S.t["66DLFh"], {
                    usernameHook: function () {
                        var e, t;
                        return (0, i.jsx)(
                            s.P3F,
                            {
                                onClick: () =>
                                    (0, p.openUserProfileModal)({
                                        guildId: r,
                                        channelId: a,
                                        userId: l.id,
                                        roleId: null == u ? void 0 : u.colorRoleId,
                                        sourceAnalyticsLocations: o,
                                    }),
                                className: U.creator,
                                tag: "span",
                                role: "link",
                                children: (0, i.jsx)(s.PUh, {
                                    name: null != (e = null == u ? void 0 : u.nick) ? e : E.ZP.getName(l),
                                    colorString: null != (t = null == u ? void 0 : u.colorString) ? t : null,
                                    colorStrings: _,
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
    let { guild: t, onClick: n, onClose: r } = e,
        d = l.useCallback(
            (e) => {
                null == n || n(e), null != n && (null == r || r(e));
            },
            [n, r],
        ),
        o = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.Z, {
                    guild: t,
                    size: u.Z.Sizes.MINI,
                    active: !0,
                    className: a()(U.guildIcon, U.icon),
                }),
                (0, i.jsx)(_.Z, {
                    guild: t,
                    tooltipPosition: "top",
                    tooltipColor: s.ua7.Colors.PRIMARY,
                    size: 16,
                    className: U.guildBadge,
                }),
                (0, i.jsx)(s.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: U.linkText,
                    children: t.name,
                }),
            ],
        });
    return (0, i.jsx)("div", {
        className: U.row,
        children:
            null != n
                ? (0, i.jsx)(s.P3F, {
                      onClick: d,
                      className: U.clickable,
                      role: "link",
                      children: o,
                  })
                : o,
    });
}
function N(e) {
    let { userCount: t, onClick: n } = e;
    return (0, i.jsxs)("div", {
        className: U.row,
        children: [
            (0, i.jsx)(s.BFJ, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: U.icon,
            }),
            (0, i.jsx)(s.P3F, {
                onClick: n,
                className: U.interestedCount,
                children: (0, i.jsx)(s.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children: S.intl.format(S.t["+DLsDw"], { count: t }),
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
            headerId: a,
            onClose: c,
            onClickInterestedCount: u,
            isHub: _ = !1,
            containerRef: g,
            recurrenceId: p,
            setRecurrenceId: m,
        } = e,
        E = (0, d.e7)([I.Z], () => null != I.Z.getGuild(n.id), [n.id]),
        { startTime: S, endTime: Z } = (0, T.ZP)(t, p),
        P = (0, y.Z)(t.guild_id, t.id, p),
        A = l.useCallback(
            (e) => {
                e.stopPropagation(), null != t && (0, o.Bk)(t);
            },
            [t],
        ),
        R = (0, v.Z)(p, t.id),
        z = (0, h.Z)(t);
    l.useEffect(() => {
        f.Z.getGuildEventUserCounts(n.id, t.id, null != p ? [p] : []), f.Z.getGuildEventsForCurrentUser(n.id);
    }, [n.id, t.id, p]);
    let w = (0, C.KV)(t.recurrence_rule),
        H =
            (null == t ? void 0 : t.scheduled_start_time) != null
                ? (0, x.lh)(R, S, new Date(null == t ? void 0 : t.scheduled_start_time))
                : null;
    return (0, i.jsxs)("div", {
        ref: g,
        children: [
            (0, i.jsxs)("div", {
                className: U.header,
                children: [
                    (0, i.jsx)(b.z, {
                        startTime: S.toISOString(),
                        endTime: null == Z ? void 0 : Z.toISOString(),
                        status: null != H ? H : t.status,
                        eventType: t.entity_type,
                        guildEventId: t.id,
                        recurrenceId: p,
                    }),
                    (0, i.jsx)(s.X6q, {
                        id: a,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        className: U.title,
                        children: t.name,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: U.body,
                children: [
                    (0, i.jsx)(G, {
                        guild: n,
                        onClick: E ? A : void 0,
                        onClose: c,
                    }),
                    (0, i.jsx)(O.Z, {
                        guildScheduledEvent: t,
                        channel: r,
                        onClose: c,
                    }),
                    null != P &&
                        (0, i.jsx)(N, {
                            userCount: P,
                            onClick: u,
                        }),
                    !_ &&
                        null != z &&
                        (0, i.jsx)(
                            D,
                            {
                                creator: z,
                                guildId: n.id,
                                channelId: null == r ? void 0 : r.id,
                            },
                            z.id,
                        ),
                    null != t.description &&
                        (0, i.jsx)("div", {
                            className: U.description,
                            children: (0, i.jsx)(L.Z, {
                                description: t.description,
                                truncate: !1,
                                guildId: n.id,
                            }),
                        }),
                ],
            }),
            null != w && (0, i.jsx)("hr", { className: U.divider }),
            null != w &&
                (0, i.jsx)(j.Z, {
                    guildId: n.id,
                    recurrenceRule: w,
                    guildEventId: t.id,
                    onRecurrenceClick: m,
                    hideScroller: !0,
                    activeRecurrenceId: p,
                }),
        ],
    });
}
