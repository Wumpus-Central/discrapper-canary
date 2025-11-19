t.d(n, { Z: () => R }), t(953529);
var l = t(54381),
    r = t(473749),
    i = t(120356),
    s = t.n(i),
    c = t(442837),
    o = t(481060),
    a = t(447543),
    d = t(906732),
    u = t(565138),
    _ = t(372769),
    h = t(884902),
    m = t(892001),
    f = t(271383),
    x = t(430824),
    g = t(51144),
    v = t(897285),
    j = t(978227),
    p = t(894017),
    b = t(79874),
    N = t(376108),
    I = t(236373),
    Z = t(854698),
    y = t(391174),
    C = t(810561),
    S = t(390966),
    P = t(390072),
    k = t(388032),
    E = t(910497);
function w(e) {
    var n, t;
    let { creator: r, guildId: i, channelId: s } = e,
        { analyticsLocations: a } = (0, d.ZP)(),
        u = (0, c.e7)([f.ZP], () => f.ZP.getMember(i, r.id), [r, i]),
        _ = (0, h.X7)(
            null == u ? void 0 : u.guildId,
            null == u ? void 0 : u.userId,
            null != (n = null == u ? void 0 : u.colorStrings) ? n : null,
        );
    return (0, l.jsxs)("div", {
        className: E.row,
        children: [
            (0, l.jsx)(o.qEK, {
                size: o.EFr.SIZE_20,
                src: r.getAvatarURL(i, 20),
                "aria-label": null != (t = null == u ? void 0 : u.nick) ? t : g.ZP.getName(r),
                className: E.icon,
            }),
            (0, l.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: k.intl.format(k.t["66DLFs"], {
                    usernameHook: function () {
                        var e, n;
                        return (0, l.jsx)(
                            o.P3F,
                            {
                                onClick: () =>
                                    (0, m.openUserProfileModal)({
                                        guildId: i,
                                        channelId: s,
                                        userId: r.id,
                                        roleId: null == u ? void 0 : u.colorRoleId,
                                        sourceAnalyticsLocations: a,
                                    }),
                                className: E.creator,
                                tag: "span",
                                role: "link",
                                children: (0, l.jsx)(o.PUh, {
                                    name: null != (e = null == u ? void 0 : u.nick) ? e : g.ZP.getName(r),
                                    colorString: null != (n = null == u ? void 0 : u.colorString) ? n : null,
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
function O(e) {
    let { guild: n, onClick: t, onClose: i } = e,
        c = r.useCallback(
            (e) => {
                null == t || t(e), null != t && (null == i || i(e));
            },
            [t, i],
        ),
        a = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.Z, {
                    guild: n,
                    size: u.Z.Sizes.MINI,
                    active: !0,
                    className: s()(E.guildIcon, E.icon),
                }),
                (0, l.jsx)(_.Z, {
                    guild: n,
                    tooltipPosition: "top",
                    tooltipColor: o.aML.Colors.PRIMARY,
                    size: 16,
                    className: E.guildBadge,
                }),
                (0, l.jsx)(o.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: E.linkText,
                    children: n.name,
                }),
            ],
        });
    return (0, l.jsx)("div", {
        className: E.row,
        children:
            null != t
                ? (0, l.jsx)(o.P3F, {
                      onClick: c,
                      className: E.clickable,
                      role: "link",
                      children: a,
                  })
                : a,
    });
}
function T(e) {
    let { userCount: n, onClick: t } = e;
    return (0, l.jsxs)("div", {
        className: E.row,
        children: [
            (0, l.jsx)(o.BFJ, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: E.icon,
            }),
            (0, l.jsx)(o.P3F, {
                onClick: t,
                className: E.interestedCount,
                children: (0, l.jsx)(o.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children: k.intl.format(k.t["+DLsD8"], { count: n }),
                }),
            }),
        ],
    });
}
function R(e) {
    let {
            guildEvent: n,
            guild: t,
            channel: i,
            headerId: s,
            onClose: d,
            onClickInterestedCount: u,
            containerRef: _,
            recurrenceId: h,
            setRecurrenceId: m,
        } = e,
        f = (0, c.e7)([x.Z], () => null != x.Z.getGuild(t.id), [t.id]),
        { startTime: g, endTime: k } = (0, b.ZP)(n, h),
        R = (0, N.Z)(n.guild_id, n.id, h),
        L = r.useCallback(
            (e) => {
                e.stopPropagation(), null != n && (0, a.Bk)(n);
            },
            [n],
        ),
        B = (0, p.Z)(h, n.id),
        D = (0, j.Z)(n);
    r.useEffect(() => {
        v.Z.getGuildEventUserCounts(t.id, n.id, null != h ? [h] : []), v.Z.getGuildEventsForCurrentUser(t.id);
    }, [t.id, n.id, h]);
    let F = (0, I.KV)(n.recurrence_rule),
        M =
            (null == n ? void 0 : n.scheduled_start_time) != null
                ? (0, Z.lh)(B, g, new Date(null == n ? void 0 : n.scheduled_start_time))
                : null;
    return (0, l.jsxs)("div", {
        ref: _,
        children: [
            (0, l.jsxs)("div", {
                className: E.header,
                children: [
                    (0, l.jsx)(S.z, {
                        startTime: g.toISOString(),
                        endTime: null == k ? void 0 : k.toISOString(),
                        status: null != M ? M : n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: h,
                    }),
                    (0, l.jsx)(o.Heading, {
                        id: s,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        className: E.title,
                        children: n.name,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: E.body,
                children: [
                    (0, l.jsx)(O, {
                        guild: t,
                        onClick: f ? L : void 0,
                        onClose: d,
                    }),
                    (0, l.jsx)(P.Z, {
                        guildScheduledEvent: n,
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
                                guildId: t.id,
                                channelId: null == i ? void 0 : i.id,
                            },
                            D.id,
                        ),
                    null != n.description &&
                        (0, l.jsx)("div", {
                            className: E.description,
                            children: (0, l.jsx)(y.Z, {
                                description: n.description,
                                truncate: !1,
                                guildId: t.id,
                            }),
                        }),
                ],
            }),
            null != F && (0, l.jsx)("hr", { className: E.divider }),
            null != F &&
                (0, l.jsx)(C.Z, {
                    guildId: t.id,
                    recurrenceRule: F,
                    guildEventId: n.id,
                    onRecurrenceClick: m,
                    hideScroller: !0,
                    activeRecurrenceId: h,
                }),
        ],
    });
}
