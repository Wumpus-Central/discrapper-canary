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
    h = n(892001),
    x = n(271383),
    m = n(430824),
    g = n(51144),
    v = n(897285),
    j = n(978227),
    _ = n(894017),
    p = n(79874),
    N = n(315416),
    I = n(236373),
    Z = n(854698),
    S = n(391174),
    y = n(810561),
    E = n(390966),
    C = n(390072),
    P = n(388032),
    T = n(984946);
function w(e) {
    var t, n;
    let { creator: r, guildId: i, channelId: a } = e,
        { analyticsLocations: o } = (0, d.ZP)(),
        u = (0, s.e7)([x.ZP], () => x.ZP.getMember(i, r.id), [r, i]),
        f = (0, b.X7)(
            null == u ? void 0 : u.guildId,
            null == u ? void 0 : u.userId,
            null != (t = null == u ? void 0 : u.colorStrings) ? t : null,
        );
    return (0, l.jsxs)("div", {
        className: T.row,
        children: [
            (0, l.jsx)(c.qEK, {
                size: c.EFr.SIZE_20,
                src: r.getAvatarURL(i, 20),
                "aria-label": null != (n = null == u ? void 0 : u.nick) ? n : g.ZP.getName(r),
                className: T.icon,
            }),
            (0, l.jsx)(c.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: P.intl.format(P.t["66DLFs"], {
                    usernameHook: function () {
                        var e, t;
                        return (0, l.jsx)(
                            c.P3F,
                            {
                                onClick: () =>
                                    (0, h.openUserProfileModal)({
                                        guildId: i,
                                        channelId: a,
                                        userId: r.id,
                                        roleId: null == u ? void 0 : u.colorRoleId,
                                        sourceAnalyticsLocations: o,
                                    }),
                                className: T.creator,
                                tag: "span",
                                role: "link",
                                children: (0, l.jsx)(c.PUh, {
                                    name: null != (e = null == u ? void 0 : u.nick) ? e : g.ZP.getName(r),
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
function k(e) {
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
                    className: a()(T.guildIcon, T.icon),
                }),
                (0, l.jsx)(f.Z, {
                    guild: t,
                    tooltipPosition: "top",
                    tooltipColor: c.aML.Colors.PRIMARY,
                    size: 16,
                    className: T.guildBadge,
                }),
                (0, l.jsx)(c.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: T.linkText,
                    children: t.name,
                }),
            ],
        });
    return (0, l.jsx)("div", {
        className: T.row,
        children:
            null != n
                ? (0, l.jsx)(c.P3F, {
                      onClick: s,
                      className: T.clickable,
                      role: "link",
                      children: o,
                  })
                : o,
    });
}
function O(e) {
    let { userCount: t, onClick: n } = e;
    return (0, l.jsxs)("div", {
        className: T.row,
        children: [
            (0, l.jsx)(c.BFJ, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: T.icon,
            }),
            (0, l.jsx)(c.P3F, {
                onClick: n,
                className: T.interestedCount,
                children: (0, l.jsx)(c.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: P.intl.format(P.t["+DLsD8"], { count: t }),
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
            setRecurrenceId: h,
        } = e,
        x = (0, s.e7)([m.Z], () => null != m.Z.getGuild(n.id), [n.id]),
        { startTime: g, endTime: P } = (0, p.ZP)(t, b),
        R = (0, N.Z)(t.guild_id, t.id, b),
        L = r.useCallback(
            (e) => {
                e.stopPropagation(), null != t && (0, o.Bk)(t);
            },
            [t],
        ),
        B = (0, _.Z)(b, t.id),
        F = (0, j.Z)(t);
    r.useEffect(() => {
        v.Z.getGuildEventUserCounts(n.id, t.id, null != b ? [b] : []), v.Z.getGuildEventsForCurrentUser(n.id);
    }, [n.id, t.id, b]);
    let D = (0, I.KV)(t.recurrence_rule),
        M =
            (null == t ? void 0 : t.scheduled_start_time) != null
                ? (0, Z.lh)(B, g, new Date(null == t ? void 0 : t.scheduled_start_time))
                : null;
    return (0, l.jsxs)("div", {
        ref: f,
        children: [
            (0, l.jsxs)("div", {
                className: T.header,
                children: [
                    (0, l.jsx)(E.z, {
                        startTime: g.toISOString(),
                        endTime: null == P ? void 0 : P.toISOString(),
                        status: null != M ? M : t.status,
                        eventType: t.entity_type,
                        guildEventId: t.id,
                        recurrenceId: b,
                    }),
                    (0, l.jsx)(c.Heading, {
                        id: a,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: T.title,
                        children: t.name,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: T.body,
                children: [
                    (0, l.jsx)(k, {
                        guild: n,
                        onClick: x ? L : void 0,
                        onClose: d,
                    }),
                    (0, l.jsx)(C.Z, {
                        guildScheduledEvent: t,
                        channel: i,
                        onClose: d,
                    }),
                    null != R &&
                        (0, l.jsx)(O, {
                            userCount: R,
                            onClick: u,
                        }),
                    null != F &&
                        (0, l.jsx)(
                            w,
                            {
                                creator: F,
                                guildId: n.id,
                                channelId: null == i ? void 0 : i.id,
                            },
                            F.id,
                        ),
                    null != t.description &&
                        (0, l.jsx)("div", {
                            className: T.description,
                            children: (0, l.jsx)(S.Z, {
                                description: t.description,
                                truncate: !1,
                                guildId: n.id,
                            }),
                        }),
                ],
            }),
            null != D && (0, l.jsx)("hr", { className: T.divider }),
            null != D &&
                (0, l.jsx)(y.Z, {
                    guildId: n.id,
                    recurrenceRule: D,
                    guildEventId: t.id,
                    onRecurrenceClick: h,
                    hideScroller: !0,
                    activeRecurrenceId: b,
                }),
        ],
    });
}
