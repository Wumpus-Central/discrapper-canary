t.d(n, { Z: () => Z }), t(953529);
var i = t(255367),
    l = t(73800),
    r = t(120356),
    d = t.n(r),
    a = t(442837),
    o = t(481060),
    s = t(447543),
    c = t(906732),
    u = t(565138),
    _ = t(372769),
    g = t(884902),
    p = t(892001),
    m = t(271383),
    f = t(430824),
    I = t(51144),
    v = t(897285),
    h = t(978227),
    E = t(894017),
    b = t(79874),
    C = t(376108),
    T = t(236373),
    y = t(854698),
    x = t(391174),
    L = t(810561),
    S = t(390966),
    D = t(390072),
    j = t(388032),
    O = t(831272);
function U(e) {
    var n, t;
    let { creator: l, guildId: r, channelId: d } = e,
        { analyticsLocations: s } = (0, c.ZP)(),
        u = (0, a.e7)([m.ZP], () => m.ZP.getMember(r, l.id), [l, r]),
        _ = (0, g.X7)(
            null == u ? void 0 : u.guildId,
            null == u ? void 0 : u.userId,
            null != (n = null == u ? void 0 : u.colorStrings) ? n : null,
        );
    return (0, i.jsxs)("div", {
        className: O.row,
        children: [
            (0, i.jsx)(o.qEK, {
                size: o.EFr.SIZE_20,
                src: l.getAvatarURL(r, 20),
                "aria-label": null != (t = null == u ? void 0 : u.nick) ? t : I.ZP.getName(l),
                className: O.icon,
            }),
            (0, i.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: j.intl.format(j.t["66DLFh"], {
                    usernameHook: function () {
                        var e, n;
                        return (0, i.jsx)(
                            o.P3F,
                            {
                                onClick: () =>
                                    (0, p.openUserProfileModal)({
                                        guildId: r,
                                        channelId: d,
                                        userId: l.id,
                                        roleId: null == u ? void 0 : u.colorRoleId,
                                        sourceAnalyticsLocations: s,
                                    }),
                                className: O.creator,
                                tag: "span",
                                role: "link",
                                children: (0, i.jsx)(o.PUh, {
                                    name: null != (e = null == u ? void 0 : u.nick) ? e : I.ZP.getName(l),
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
function N(e) {
    let { guild: n, onClick: t, onClose: r } = e,
        a = l.useCallback(
            (e) => {
                null == t || t(e), null != t && (null == r || r(e));
            },
            [t, r],
        ),
        s = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.Z, {
                    guild: n,
                    size: u.Z.Sizes.MINI,
                    active: !0,
                    className: d()(O.guildIcon, O.icon),
                }),
                (0, i.jsx)(_.Z, {
                    guild: n,
                    tooltipPosition: "top",
                    tooltipColor: o.ua7.Colors.PRIMARY,
                    size: 16,
                    className: O.guildBadge,
                }),
                (0, i.jsx)(o.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: O.linkText,
                    children: n.name,
                }),
            ],
        });
    return (0, i.jsx)("div", {
        className: O.row,
        children:
            null != t
                ? (0, i.jsx)(o.P3F, {
                      onClick: a,
                      className: O.clickable,
                      role: "link",
                      children: s,
                  })
                : s,
    });
}
function G(e) {
    let { userCount: n, onClick: t } = e;
    return (0, i.jsxs)("div", {
        className: O.row,
        children: [
            (0, i.jsx)(o.BFJ, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: O.icon,
            }),
            (0, i.jsx)(o.P3F, {
                onClick: t,
                className: O.interestedCount,
                children: (0, i.jsx)(o.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children: j.intl.format(j.t["+DLsDw"], { count: n }),
                }),
            }),
        ],
    });
}
function Z(e) {
    let {
            guildEvent: n,
            guild: t,
            channel: r,
            headerId: d,
            onClose: c,
            onClickInterestedCount: u,
            isHub: _ = !1,
            containerRef: g,
            recurrenceId: p,
            setRecurrenceId: m,
        } = e,
        I = (0, a.e7)([f.Z], () => null != f.Z.getGuild(t.id), [t.id]),
        { startTime: j, endTime: Z } = (0, b.ZP)(n, p),
        P = (0, C.Z)(n.guild_id, n.id, p),
        R = l.useCallback(
            (e) => {
                e.stopPropagation(), null != n && (0, s.Bk)(n);
            },
            [n],
        ),
        z = (0, E.Z)(p, n.id),
        A = (0, h.Z)(n);
    l.useEffect(() => {
        v.Z.getGuildEventUserCounts(t.id, n.id, null != p ? [p] : []), v.Z.getGuildEventsForCurrentUser(t.id);
    }, [t.id, n.id, p]);
    let B = (0, T.KV)(n.recurrence_rule),
        w =
            (null == n ? void 0 : n.scheduled_start_time) != null
                ? (0, y.lh)(z, j, new Date(null == n ? void 0 : n.scheduled_start_time))
                : null;
    return (0, i.jsxs)("div", {
        ref: g,
        children: [
            (0, i.jsxs)("div", {
                className: O.header,
                children: [
                    (0, i.jsx)(S.z, {
                        startTime: j.toISOString(),
                        endTime: null == Z ? void 0 : Z.toISOString(),
                        status: null != w ? w : n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: p,
                    }),
                    (0, i.jsx)(o.X6q, {
                        id: d,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        className: O.title,
                        children: n.name,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: O.body,
                children: [
                    (0, i.jsx)(N, {
                        guild: t,
                        onClick: I ? R : void 0,
                        onClose: c,
                    }),
                    (0, i.jsx)(D.Z, {
                        guildScheduledEvent: n,
                        channel: r,
                        onClose: c,
                    }),
                    null != P &&
                        (0, i.jsx)(G, {
                            userCount: P,
                            onClick: u,
                        }),
                    !_ &&
                        null != A &&
                        (0, i.jsx)(
                            U,
                            {
                                creator: A,
                                guildId: t.id,
                                channelId: null == r ? void 0 : r.id,
                            },
                            A.id,
                        ),
                    null != n.description &&
                        (0, i.jsx)("div", {
                            className: O.description,
                            children: (0, i.jsx)(x.Z, {
                                description: n.description,
                                truncate: !1,
                                guildId: t.id,
                            }),
                        }),
                ],
            }),
            null != B && (0, i.jsx)("hr", { className: O.divider }),
            null != B &&
                (0, i.jsx)(L.Z, {
                    guildId: t.id,
                    recurrenceRule: B,
                    guildEventId: n.id,
                    onRecurrenceClick: m,
                    hideScroller: !0,
                    activeRecurrenceId: p,
                }),
        ],
    });
}
