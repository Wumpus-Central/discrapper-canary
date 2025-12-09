n.d(t, { Z: () => R }), n(953529);
var l = n(54381),
    r = n(473749),
    i = n(120356),
    s = n.n(i),
    c = n(442837),
    o = n(481060),
    a = n(447543),
    u = n(906732),
    d = n(565138),
    _ = n(372769),
    f = n(884902),
    h = n(892001),
    m = n(271383),
    x = n(430824),
    g = n(51144),
    v = n(897285),
    j = n(978227),
    p = n(894017),
    b = n(79874),
    N = n(376108),
    I = n(236373),
    Z = n(854698),
    y = n(391174),
    S = n(810561),
    E = n(390966),
    C = n(390072),
    P = n(388032),
    T = n(831272);
function w(e) {
    var t, n;
    let { creator: r, guildId: i, channelId: s } = e,
        { analyticsLocations: a } = (0, u.ZP)(),
        d = (0, c.e7)([m.ZP], () => m.ZP.getMember(i, r.id), [r, i]),
        _ = (0, f.X7)(
            null == d ? void 0 : d.guildId,
            null == d ? void 0 : d.userId,
            null != (t = null == d ? void 0 : d.colorStrings) ? t : null,
        );
    return (0, l.jsxs)("div", {
        className: T.row,
        children: [
            (0, l.jsx)(o.qEK, {
                size: o.EFr.SIZE_20,
                src: r.getAvatarURL(i, 20),
                "aria-label": null != (n = null == d ? void 0 : d.nick) ? n : g.ZP.getName(r),
                className: T.icon,
            }),
            (0, l.jsx)(o.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: P.intl.format(P.t["66DLFs"], {
                    usernameHook: function () {
                        var e, t;
                        return (0, l.jsx)(
                            o.P3F,
                            {
                                onClick: () =>
                                    (0, h.openUserProfileModal)({
                                        guildId: i,
                                        channelId: s,
                                        userId: r.id,
                                        roleId: null == d ? void 0 : d.colorRoleId,
                                        sourceAnalyticsLocations: a,
                                    }),
                                className: T.creator,
                                tag: "span",
                                role: "link",
                                children: (0, l.jsx)(o.PUh, {
                                    name: null != (e = null == d ? void 0 : d.nick) ? e : g.ZP.getName(r),
                                    colorString: null != (t = null == d ? void 0 : d.colorString) ? t : null,
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
function k(e) {
    let { guild: t, onClick: n, onClose: i } = e,
        c = r.useCallback(
            (e) => {
                null == n || n(e), null != n && (null == i || i(e));
            },
            [n, i],
        ),
        a = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.Z, {
                    guild: t,
                    size: d.Z.Sizes.MINI,
                    active: !0,
                    className: s()(T.guildIcon, T.icon),
                }),
                (0, l.jsx)(_.Z, {
                    guild: t,
                    tooltipPosition: "top",
                    tooltipColor: o.aML.Colors.PRIMARY,
                    size: 16,
                    className: T.guildBadge,
                }),
                (0, l.jsx)(o.Text, {
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
                ? (0, l.jsx)(o.P3F, {
                      onClick: c,
                      className: T.clickable,
                      role: "link",
                      children: a,
                  })
                : a,
    });
}
function O(e) {
    let { userCount: t, onClick: n } = e;
    return (0, l.jsxs)("div", {
        className: T.row,
        children: [
            (0, l.jsx)(o.BFJ, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: T.icon,
            }),
            (0, l.jsx)(o.P3F, {
                onClick: n,
                className: T.interestedCount,
                children: (0, l.jsx)(o.Text, {
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
            headerId: s,
            onClose: u,
            onClickInterestedCount: d,
            containerRef: _,
            recurrenceId: f,
            setRecurrenceId: h,
        } = e,
        m = (0, c.e7)([x.Z], () => null != x.Z.getGuild(n.id), [n.id]),
        { startTime: g, endTime: P } = (0, b.ZP)(t, f),
        R = (0, N.Z)(t.guild_id, t.id, f),
        L = r.useCallback(
            (e) => {
                e.stopPropagation(), null != t && (0, a.Bk)(t);
            },
            [t],
        ),
        B = (0, p.Z)(f, t.id),
        F = (0, j.Z)(t);
    r.useEffect(() => {
        v.Z.getGuildEventUserCounts(n.id, t.id, null != f ? [f] : []), v.Z.getGuildEventsForCurrentUser(n.id);
    }, [n.id, t.id, f]);
    let D = (0, I.KV)(t.recurrence_rule),
        M =
            (null == t ? void 0 : t.scheduled_start_time) != null
                ? (0, Z.lh)(B, g, new Date(null == t ? void 0 : t.scheduled_start_time))
                : null;
    return (0, l.jsxs)("div", {
        ref: _,
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
                        recurrenceId: f,
                    }),
                    (0, l.jsx)(o.Heading, {
                        id: s,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
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
                        onClick: m ? L : void 0,
                        onClose: u,
                    }),
                    (0, l.jsx)(C.Z, {
                        guildScheduledEvent: t,
                        channel: i,
                        onClose: u,
                    }),
                    null != R &&
                        (0, l.jsx)(O, {
                            userCount: R,
                            onClick: d,
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
                            children: (0, l.jsx)(y.Z, {
                                description: t.description,
                                truncate: !1,
                                guildId: n.id,
                            }),
                        }),
                ],
            }),
            null != D && (0, l.jsx)("hr", { className: T.divider }),
            null != D &&
                (0, l.jsx)(S.Z, {
                    guildId: n.id,
                    recurrenceRule: D,
                    guildEventId: t.id,
                    onRecurrenceClick: h,
                    hideScroller: !0,
                    activeRecurrenceId: f,
                }),
        ],
    });
}
