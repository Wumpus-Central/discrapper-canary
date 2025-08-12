t.d(n, { Z: () => R }), t(953529);
var l = t(255367),
    i = t(73800),
    r = t(120356),
    o = t.n(r),
    c = t(442837),
    s = t(481060),
    a = t(447543),
    u = t(906732),
    d = t(565138),
    f = t(372769),
    g = t(884902),
    h = t(892001),
    _ = t(271383),
    v = t(430824),
    m = t(51144),
    x = t(897285),
    j = t(978227),
    p = t(894017),
    b = t(79874),
    Z = t(376108),
    y = t(236373),
    P = t(854698),
    C = t(391174),
    N = t(810561),
    E = t(390966),
    I = t(390072),
    O = t(388032),
    S = t(296354);
function T(e) {
    var n, t;
    let { creator: i, guildId: r, channelId: o } = e,
        { analyticsLocations: a } = (0, u.ZP)(),
        d = (0, c.e7)([_.ZP], () => _.ZP.getMember(r, i.id), [i, r]),
        f = (0, g.X7)(
            null == d ? void 0 : d.guildId,
            null == d ? void 0 : d.userId,
            null != (n = null == d ? void 0 : d.colorStrings) ? n : null,
        );
    return (0, l.jsxs)("div", {
        className: S.row,
        children: [
            (0, l.jsx)(s.qEK, {
                size: s.EFr.SIZE_20,
                src: i.getAvatarURL(r, 20),
                "aria-label": null != (t = null == d ? void 0 : d.nick) ? t : m.ZP.getName(i),
                className: S.icon,
            }),
            (0, l.jsx)(s.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: O.intl.format(O.t["66DLFh"], {
                    usernameHook: function () {
                        var e, n;
                        return (0, l.jsx)(
                            s.P3F,
                            {
                                onClick: () =>
                                    (0, h.openUserProfileModal)({
                                        guildId: r,
                                        channelId: o,
                                        userId: i.id,
                                        roleId: null == d ? void 0 : d.colorRoleId,
                                        sourceAnalyticsLocations: a,
                                    }),
                                className: S.creator,
                                tag: "span",
                                role: "link",
                                children: (0, l.jsx)(s.PUh, {
                                    name: null != (e = null == d ? void 0 : d.nick) ? e : m.ZP.getName(i),
                                    colorString: null != (n = null == d ? void 0 : d.colorString) ? n : null,
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
function w(e) {
    let { guild: n, onClick: t, onClose: r } = e,
        c = i.useCallback(
            (e) => {
                null == t || t(e), null != t && (null == r || r(e));
            },
            [t, r],
        ),
        a = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.Z, {
                    guild: n,
                    size: d.Z.Sizes.MINI,
                    active: !0,
                    className: o()(S.guildIcon, S.icon),
                }),
                (0, l.jsx)(f.Z, {
                    guild: n,
                    tooltipPosition: "top",
                    tooltipColor: s.ua7.Colors.PRIMARY,
                    size: 16,
                    className: S.guildBadge,
                }),
                (0, l.jsx)(s.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: S.linkText,
                    children: n.name,
                }),
            ],
        });
    return (0, l.jsx)("div", {
        className: S.row,
        children:
            null != t
                ? (0, l.jsx)(s.P3F, {
                      onClick: c,
                      className: S.clickable,
                      role: "link",
                      children: a,
                  })
                : a,
    });
}
function k(e) {
    let { userCount: n, onClick: t } = e;
    return (0, l.jsxs)("div", {
        className: S.row,
        children: [
            (0, l.jsx)(s.BFJ, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: S.icon,
            }),
            (0, l.jsx)(s.P3F, {
                onClick: t,
                className: S.interestedCount,
                children: (0, l.jsx)(s.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children: O.intl.format(O.t["+DLsDw"], { count: n }),
                }),
            }),
        ],
    });
}
function R(e) {
    let {
            guildEvent: n,
            guild: t,
            channel: r,
            headerId: o,
            onClose: u,
            onClickInterestedCount: d,
            isHub: f = !1,
            containerRef: g,
            recurrenceId: h,
            setRecurrenceId: _,
        } = e,
        m = (0, c.e7)([v.Z], () => null != v.Z.getGuild(t.id), [t.id]),
        { startTime: O, endTime: R } = (0, b.ZP)(n, h),
        L = (0, Z.Z)(n.guild_id, n.id, h),
        D = i.useCallback(
            (e) => {
                e.stopPropagation(), null != n && (0, a.Bk)(n);
            },
            [n],
        ),
        G = (0, p.Z)(h, n.id),
        B = (0, j.Z)(n);
    i.useEffect(() => {
        x.Z.getGuildEventUserCounts(t.id, n.id, null != h ? [h] : []), x.Z.getGuildEventsForCurrentUser(t.id);
    }, [t.id, n.id, h]);
    let M = (0, y.KV)(n.recurrence_rule),
        A =
            (null == n ? void 0 : n.scheduled_start_time) != null
                ? (0, P.lh)(G, O, new Date(null == n ? void 0 : n.scheduled_start_time))
                : null;
    return (0, l.jsxs)("div", {
        ref: g,
        children: [
            (0, l.jsxs)("div", {
                className: S.header,
                children: [
                    (0, l.jsx)(E.z, {
                        startTime: O.toISOString(),
                        endTime: null == R ? void 0 : R.toISOString(),
                        status: null != A ? A : n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: h,
                    }),
                    (0, l.jsx)(s.X6q, {
                        id: o,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        className: S.title,
                        children: n.name,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: S.body,
                children: [
                    (0, l.jsx)(w, {
                        guild: t,
                        onClick: m ? D : void 0,
                        onClose: u,
                    }),
                    (0, l.jsx)(I.Z, {
                        guildScheduledEvent: n,
                        channel: r,
                        onClose: u,
                    }),
                    null != L &&
                        (0, l.jsx)(k, {
                            userCount: L,
                            onClick: d,
                        }),
                    !f &&
                        null != B &&
                        (0, l.jsx)(
                            T,
                            {
                                creator: B,
                                guildId: t.id,
                                channelId: null == r ? void 0 : r.id,
                            },
                            B.id,
                        ),
                    null != n.description &&
                        (0, l.jsx)("div", {
                            className: S.description,
                            children: (0, l.jsx)(C.Z, {
                                description: n.description,
                                truncate: !1,
                                guildId: t.id,
                            }),
                        }),
                ],
            }),
            null != M && (0, l.jsx)("hr", { className: S.divider }),
            null != M &&
                (0, l.jsx)(N.Z, {
                    guildId: t.id,
                    recurrenceRule: M,
                    guildEventId: n.id,
                    onRecurrenceClick: _,
                    hideScroller: !0,
                    activeRecurrenceId: h,
                }),
        ],
    });
}
