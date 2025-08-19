n.d(e, { default: () => S }), n(388685), n(290780);
var i = n(951288),
    r = n(647438),
    s = n(481060),
    a = n(493683),
    l = n(785232),
    o = n(592125),
    u = n(626135),
    c = n(799352),
    _ = n(343544),
    d = n(14251),
    A = n(110223),
    E = n(981631),
    I = n(388032),
    f = n(405842);
function S(t) {
    let { channelId: e, blockedUserIds: n, ignoredUserIds: S = [], transitionState: g, onClose: L } = t;
    return (
        r.useEffect(() => {
            u.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
                channel_id: e,
                warning_medium: A.WR.MODAL,
                blocked_user_ids: n,
                ignored_user_ids: S,
            });
        }, [e, n, S]),
        (0, i.jsx)(_.Z, {
            headerText: I.intl.string(I.t["mwJJ+f"]),
            descriptionText: ((t, e) => {
                let n = t > 0,
                    i = e > 0;
                return n && i
                    ? I.intl.string(I.t["0dP7Fh"])
                    : n
                      ? I.intl.formatToPlainString(I.t.OpIG9f, { n: t })
                      : i
                        ? I.intl.formatToPlainString(I.t["D+V4jI"], { n: e })
                        : null;
            })(n.length, S.length),
            infoRows: ((t) => {
                let { channelId: e, blockedUserIds: n, ignoredUserIds: r } = t,
                    a = o.Z.getChannel(e),
                    u = n.length > 0,
                    c = r.length > 0,
                    _ = [
                        {
                            icon: (0, i.jsx)("div", {
                                className: f.icon,
                                children: (0, i.jsx)(s.owK, {}),
                            }),
                            text: I.intl.string(I.t["RIMw5+"]),
                            className: f.row,
                        },
                        {
                            icon: (0, i.jsx)("div", {
                                className: f.icon,
                                children: (0, i.jsx)(s.d3s, {}),
                            }),
                            text: I.intl.string(I.t.bejNWF),
                            className: f.row,
                        },
                    ];
                if (u && c) {
                    let t = [...n, ...r],
                        o = t.slice(0, 2);
                    _.unshift({
                        icon: (0, i.jsx)("div", {
                            className: f.icon,
                            children: (0, i.jsx)(l.Z, {
                                recipients: o,
                                size: s.EFr.SIZE_32,
                            }),
                        }),
                        text: (0, d.a)(o, t.length, null == a ? void 0 : a.guild_id, e),
                        className: f.row,
                    });
                } else {
                    let t = u ? [...n].slice(0, 2) : [...r].slice(0, 2),
                        s = u ? n.length : r.length;
                    _.unshift({
                        icon: (0, i.jsx)("div", {
                            className: f.icon,
                            children: (0, d.r)(t, null == a ? void 0 : a.guild_id),
                        }),
                        text: (0, d.a)(t, s, null == a ? void 0 : a.guild_id, e),
                        className: f.row,
                    });
                }
                return _;
            })({
                channelId: e,
                blockedUserIds: n,
                ignoredUserIds: S,
            }),
            onDismissAndStay: () => {
                L(),
                    (0, c.O)(e),
                    u.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: A.q.CLICK_TO_STAY,
                        channel_id: e,
                        warning_medium: A.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: S,
                    });
            },
            onDismissAndLeave: () => {
                L(),
                    (0, c.O)(e),
                    a.Z.closePrivateChannel(e, !0, !0),
                    u.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: A.q.CLICK_TO_LEAVE,
                        channel_id: e,
                        warning_medium: A.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: S,
                    });
            },
            leaveButtonText: I.intl.string(I.t["Hi1/aW"]),
            stayButtonText: I.intl.string(I.t.SW3lpK),
            transitionState: g,
            onClose: L,
        })
    );
}
