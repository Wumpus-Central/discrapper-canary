n.d(t, { default: () => h }), n(388685), n(290780);
var i = n(54381),
    s = n(473749),
    r = n(481060),
    a = n(493683),
    l = n(785232),
    o = n(592125),
    d = n(626135),
    c = n(799352),
    u = n(343544),
    m = n(14251),
    _ = n(110223),
    f = n(981631),
    x = n(388032),
    g = n(729861);
function h(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: h = [], transitionState: E, onClose: N } = e;
    return (
        s.useEffect(() => {
            d.default.track(f.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
                channel_id: t,
                warning_medium: _.WR.MODAL,
                blocked_user_ids: n,
                ignored_user_ids: h,
            });
        }, [t, n, h]),
        (0, i.jsx)(u.Z, {
            headerText: x.intl.string(x.t["mwJJ+f"]),
            descriptionText: ((e, t) => {
                let n = e > 0,
                    i = t > 0;
                return n && i
                    ? x.intl.string(x.t["0dP7Fk"])
                    : n
                      ? x.intl.formatToPlainString(x.t.OpIG9d, { n: e })
                      : i
                        ? x.intl.formatToPlainString(x.t["D+V4jI"], { n: t })
                        : null;
            })(n.length, h.length),
            infoRows: ((e) => {
                let { channelId: t, blockedUserIds: n, ignoredUserIds: s } = e,
                    a = o.Z.getChannel(t),
                    d = n.length > 0,
                    c = s.length > 0,
                    u = [
                        {
                            icon: (0, i.jsx)("div", {
                                className: g.icon,
                                children: (0, i.jsx)(r.owK, {}),
                            }),
                            text: x.intl.string(x.t.RIMw54),
                            className: g.row,
                        },
                        {
                            icon: (0, i.jsx)("div", {
                                className: g.icon,
                                children: (0, i.jsx)(r.d3s, {}),
                            }),
                            text: x.intl.string(x.t.bejNWN),
                            className: g.row,
                        },
                    ];
                if (d && c) {
                    let e = [...n, ...s],
                        o = e.slice(0, 2);
                    u.unshift({
                        icon: (0, i.jsx)("div", {
                            className: g.icon,
                            children: (0, i.jsx)(l.Z, {
                                recipients: o,
                                size: r.EFr.SIZE_32,
                            }),
                        }),
                        text: (0, m.a)(o, e.length, null == a ? void 0 : a.guild_id, t),
                        className: g.row,
                    });
                } else {
                    let e = d ? [...n].slice(0, 2) : [...s].slice(0, 2),
                        r = d ? n.length : s.length;
                    u.unshift({
                        icon: (0, i.jsx)("div", {
                            className: g.icon,
                            children: (0, m.r)(e, null == a ? void 0 : a.guild_id),
                        }),
                        text: (0, m.a)(e, r, null == a ? void 0 : a.guild_id, t),
                        className: g.row,
                    });
                }
                return u;
            })({
                channelId: t,
                blockedUserIds: n,
                ignoredUserIds: h,
            }),
            onDismissAndStay: () => {
                N(),
                    (0, c.O)(t),
                    d.default.track(f.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: _.q.CLICK_TO_STAY,
                        channel_id: t,
                        warning_medium: _.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: h,
                    });
            },
            onDismissAndLeave: () => {
                N(),
                    (0, c.O)(t),
                    a.Z.closePrivateChannel(t, !0, !0),
                    d.default.track(f.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: _.q.CLICK_TO_LEAVE,
                        channel_id: t,
                        warning_medium: _.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: h,
                    });
            },
            leaveButtonText: x.intl.string(x.t["Hi1/aQ"]),
            stayButtonText: x.intl.string(x.t.SW3lpH),
            transitionState: E,
            onClose: N,
        })
    );
}
