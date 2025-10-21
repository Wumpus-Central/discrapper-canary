n.d(t, { default: () => g }), n(388685), n(290780);
var i = n(951288),
    s = n(647438),
    r = n(481060),
    a = n(493683),
    l = n(785232),
    o = n(592125),
    d = n(626135),
    c = n(799352),
    u = n(343544),
    _ = n(14251),
    m = n(110223),
    f = n(981631),
    x = n(388032),
    h = n(73199);
function g(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: g = [], transitionState: E, onClose: N } = e;
    return (
        s.useEffect(() => {
            d.default.track(f.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
                channel_id: t,
                warning_medium: m.WR.MODAL,
                blocked_user_ids: n,
                ignored_user_ids: g,
            });
        }, [t, n, g]),
        (0, i.jsx)(u.Z, {
            headerText: x.intl.string(x.t["mwJJ+f"]),
            descriptionText: ((e, t) => {
                let n = e > 0,
                    i = t > 0;
                return n && i
                    ? x.intl.string(x.t["0dP7Fh"])
                    : n
                      ? x.intl.formatToPlainString(x.t.OpIG9f, { n: e })
                      : i
                        ? x.intl.formatToPlainString(x.t["D+V4jI"], { n: t })
                        : null;
            })(n.length, g.length),
            infoRows: ((e) => {
                let { channelId: t, blockedUserIds: n, ignoredUserIds: s } = e,
                    a = o.Z.getChannel(t),
                    d = n.length > 0,
                    c = s.length > 0,
                    u = [
                        {
                            icon: (0, i.jsx)("div", {
                                className: h.icon,
                                children: (0, i.jsx)(r.owK, {}),
                            }),
                            text: x.intl.string(x.t["RIMw5+"]),
                            className: h.row,
                        },
                        {
                            icon: (0, i.jsx)("div", {
                                className: h.icon,
                                children: (0, i.jsx)(r.d3s, {}),
                            }),
                            text: x.intl.string(x.t.bejNWF),
                            className: h.row,
                        },
                    ];
                if (d && c) {
                    let e = [...n, ...s],
                        o = e.slice(0, 2);
                    u.unshift({
                        icon: (0, i.jsx)("div", {
                            className: h.icon,
                            children: (0, i.jsx)(l.Z, {
                                recipients: o,
                                size: r.EFr.SIZE_32,
                            }),
                        }),
                        text: (0, _.a)(o, e.length, null == a ? void 0 : a.guild_id, t),
                        className: h.row,
                    });
                } else {
                    let e = d ? [...n].slice(0, 2) : [...s].slice(0, 2),
                        r = d ? n.length : s.length;
                    u.unshift({
                        icon: (0, i.jsx)("div", {
                            className: h.icon,
                            children: (0, _.r)(e, null == a ? void 0 : a.guild_id),
                        }),
                        text: (0, _.a)(e, r, null == a ? void 0 : a.guild_id, t),
                        className: h.row,
                    });
                }
                return u;
            })({
                channelId: t,
                blockedUserIds: n,
                ignoredUserIds: g,
            }),
            onDismissAndStay: () => {
                N(),
                    (0, c.O)(t),
                    d.default.track(f.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: m.q.CLICK_TO_STAY,
                        channel_id: t,
                        warning_medium: m.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: g,
                    });
            },
            onDismissAndLeave: () => {
                N(),
                    (0, c.O)(t),
                    a.Z.closePrivateChannel(t, !0, !0),
                    d.default.track(f.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: m.q.CLICK_TO_LEAVE,
                        channel_id: t,
                        warning_medium: m.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: g,
                    });
            },
            leaveButtonText: x.intl.string(x.t["Hi1/aW"]),
            stayButtonText: x.intl.string(x.t.SW3lpK),
            transitionState: E,
            onClose: N,
        })
    );
}
