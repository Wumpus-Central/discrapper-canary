n.d(t, { Z: () => R }), n(953529);
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    c = n(481060),
    o = n(447543),
    d = n(906732),
    u = n(565138),
    f = n(372769),
    b = n(884902),
    x = n(892001),
    h = n(271383),
    g = n(430824),
    m = n(51144),
    v = n(897285),
    j = n(978227),
    _ = n(894017),
    p = n(79874),
    N = n(315416),
    I = n(236373),
    Z = n(854698),
    C = n(391174),
    S = n(810561),
    y = n(390966),
    P = n(390072),
    k = n(388032),
    E = n(984946);
function w(e) {
    var t, n;
    let { creator: r, guildId: i, channelId: a } = e,
        { analyticsLocations: o } = (0, d.ZP)(),
        u = (0, s.e7)([h.ZP], () => h.ZP.getMember(i, r.id), [r, i]),
        f = (0, b.X7)(
            null == u ? void 0 : u.guildId,
            null == u ? void 0 : u.userId,
            null != (t = null == u ? void 0 : u.colorStrings) ? t : null,
        );
    return (0, l.jsxs)("div", {
        className: E.row,
        children: [
            (0, l.jsx)(c.qEK, {
                size: c.EFr.SIZE_20,
                src: r.getAvatarURL(i, 20),
                "aria-label": null != (n = null == u ? void 0 : u.nick) ? n : m.ZP.getName(r),
                className: E.icon,
            }),
            (0, l.jsx)(c.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: k.intl.format(k.t["66DLFs"], {
                    usernameHook: function () {
                        var e, t;
                        return (0, l.jsx)(
                            c.P3F,
                            {
                                onClick: () =>
                                    (0, x.openUserProfileModal)({
                                        guildId: i,
                                        channelId: a,
                                        userId: r.id,
                                        roleId: null == u ? void 0 : u.colorRoleId,
                                        sourceAnalyticsLocations: o,
                                    }),
                                className: E.creator,
                                tag: "span",
                                role: "link",
                                children: (0, l.jsx)(c.PUh, {
                                    name: null != (e = null == u ? void 0 : u.nick) ? e : m.ZP.getName(r),
                                    colorString: null != (t = null == u ? void 0 : u.colorString) ? t : null,
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
function O(e) {
    let { guild: t, onClick: n, onClose: i } = e,
        s = r.useCallback(
            (e) => {
                null == n || n(e), null != n && (null == i || i(e));
            },
            [n, i],
        ),
        o = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.Z, {
                    guild: t,
                    size: u.Z.Sizes.MINI,
                    active: !0,
                    className: a()(E.guildIcon, E.icon),
                }),
                (0, l.jsx)(f.Z, {
                    guild: t,
                    tooltipPosition: "top",
                    tooltipColor: c.aML.Colors.PRIMARY,
                    size: 16,
                    className: E.guildBadge,
                }),
                (0, l.jsx)(c.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: E.linkText,
                    children: t.name,
                }),
            ],
        });
    return (0, l.jsx)("div", {
        className: E.row,
        children:
            null != n
                ? (0, l.jsx)(c.P3F, {
                      onClick: s,
                      className: E.clickable,
                      role: "link",
                      children: o,
                  })
                : o,
    });
}
function T(e) {
    let { userCount: t, onClick: n } = e;
    return (0, l.jsxs)("div", {
        className: E.row,
        children: [
            (0, l.jsx)(c.BFJ, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: E.icon,
            }),
            (0, l.jsx)(c.P3F, {
                onClick: n,
                className: E.interestedCount,
                children: (0, l.jsx)(c.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: k.intl.format(k.t["+DLsD8"], { count: t }),
                }),
            }),
        ],
    });
}
function R(e) {
    let {
            guildEvent: t,
            guild: n,
            channel: i,
            headerId: a,
            onClose: d,
            onClickInterestedCount: u,
            containerRef: f,
            recurrenceId: b,
            setRecurrenceId: x,
        } = e,
        h = (0, s.e7)([g.Z], () => null != g.Z.getGuild(n.id), [n.id]),
        { startTime: m, endTime: k } = (0, p.ZP)(t, b),
        R = (0, N.Z)(t.guild_id, t.id, b),
        L = r.useCallback(
            (e) => {
                e.stopPropagation(), null != t && (0, o.Bk)(t);
            },
            [t],
        ),
        B = (0, _.Z)(b, t.id),
        D = (0, j.Z)(t);
    r.useEffect(() => {
        v.Z.getGuildEventUserCounts(n.id, t.id, null != b ? [b] : []), v.Z.getGuildEventsForCurrentUser(n.id);
    }, [n.id, t.id, b]);
    let F = (0, I.KV)(t.recurrence_rule),
        M =
            (null == t ? void 0 : t.scheduled_start_time) != null
                ? (0, Z.lh)(B, m, new Date(null == t ? void 0 : t.scheduled_start_time))
                : null;
    return (0, l.jsxs)("div", {
        ref: f,
        children: [
            (0, l.jsxs)("div", {
                className: E.header,
                children: [
                    (0, l.jsx)(y.z, {
                        startTime: m.toISOString(),
                        endTime: null == k ? void 0 : k.toISOString(),
                        status: null != M ? M : t.status,
                        eventType: t.entity_type,
                        guildEventId: t.id,
                        recurrenceId: b,
                    }),
                    (0, l.jsx)(c.Heading, {
                        id: a,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: E.title,
                        children: t.name,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: E.body,
                children: [
                    (0, l.jsx)(O, {
                        guild: n,
                        onClick: h ? L : void 0,
                        onClose: d,
                    }),
                    (0, l.jsx)(P.Z, {
                        guildScheduledEvent: t,
                        channel: i,
                        onClose: d,
                    }),
                    null != R &&
                        (0, l.jsx)(T, {
                            userCount: R,
                            onClick: u,
                        }),
                    null != D &&
                        (0, l.jsx)(
                            w,
                            {
                                creator: D,
                                guildId: n.id,
                                channelId: null == i ? void 0 : i.id,
                            },
                            D.id,
                        ),
                    null != t.description &&
                        (0, l.jsx)("div", {
                            className: E.description,
                            children: (0, l.jsx)(C.Z, {
                                description: t.description,
                                truncate: !1,
                                guildId: n.id,
                            }),
                        }),
                ],
            }),
            null != F && (0, l.jsx)("hr", { className: E.divider }),
            null != F &&
                (0, l.jsx)(S.Z, {
                    guildId: n.id,
                    recurrenceRule: F,
                    guildEventId: t.id,
                    onRecurrenceClick: x,
                    hideScroller: !0,
                    activeRecurrenceId: b,
                }),
        ],
    });
}
