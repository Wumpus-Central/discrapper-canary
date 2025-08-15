n.d(t, { default: () => g }), n(388685), n(290780);
var r = n(951288),
    s = n(647438),
    i = n(481060),
    a = n(493683),
    l = n(785232),
    o = n(592125),
    c = n(626135),
    u = n(799352),
    d = n(343544),
    _ = n(14251),
    A = n(110223),
    E = n(981631),
    f = n(388032),
    I = n(405842);
let m = (e) => {
    let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e,
        s = t > 0,
        i = n > 0;
    return s && i
        ? (0, r.jsxs)(r.Fragment, {
              children: [f.intl.string(f.t.xbRNIy), (0, r.jsx)("br", {}), f.intl.string(f.t["Bp2/np"])],
          })
        : s
          ? (0, r.jsxs)(r.Fragment, {
                children: [f.intl.format(f.t.iKtixc, { n: t }), (0, r.jsx)("br", {}), f.intl.string(f.t.SN1hrq)],
            })
          : i
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      f.intl.format(f.t["6IRwub"], { n: n }),
                      (0, r.jsx)("br", {}),
                      f.intl.string(f.t["6AKLRk"]),
                  ],
              })
            : null;
};
function g(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: g = [], transitionState: h, onClose: x } = e;
    return (
        s.useEffect(() => {
            c.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
                channel_id: t,
                warning_medium: A.WR.MODAL,
                blocked_user_ids: n,
                ignored_user_ids: g,
            });
        }, [t, n, g]),
        (0, r.jsx)(d.Z, {
            headerText: f.intl.string(f.t["mwJJ+f"]),
            descriptionText: (0, r.jsx)(m, {
                numOfBlockedUsers: n.length,
                numOfIgnoredUsers: g.length,
            }),
            infoRows: ((e) => {
                let { channelId: t, blockedUserIds: n, ignoredUserIds: s } = e,
                    a = o.Z.getChannel(t),
                    c = n.length > 0,
                    u = s.length > 0,
                    d = [
                        {
                            icon: (0, r.jsx)("div", {
                                className: I.icon,
                                children: (0, r.jsx)(i.owK, {}),
                            }),
                            text: f.intl.string(f.t["RIMw5+"]),
                            className: I.row,
                        },
                        {
                            icon: (0, r.jsx)("div", {
                                className: I.icon,
                                children: (0, r.jsx)(i.d3s, {}),
                            }),
                            text: f.intl.string(f.t.bejNWF),
                            className: I.row,
                        },
                    ];
                if (c && u) {
                    let e = [...n, ...s],
                        o = e.slice(0, 2);
                    d.unshift({
                        icon: (0, r.jsx)("div", {
                            className: I.icon,
                            children: (0, r.jsx)(l.Z, {
                                recipients: o,
                                size: i.EFr.SIZE_32,
                            }),
                        }),
                        text: (0, _.a)(o, e.length, null == a ? void 0 : a.guild_id, t),
                        className: I.row,
                    });
                } else {
                    let e = c ? [...n].slice(0, 2) : [...s].slice(0, 2),
                        i = c ? n.length : s.length;
                    d.unshift({
                        icon: (0, r.jsx)("div", {
                            className: I.icon,
                            children: (0, _.r)(e, null == a ? void 0 : a.guild_id),
                        }),
                        text: (0, _.a)(e, i, null == a ? void 0 : a.guild_id, t),
                        className: I.row,
                    });
                }
                return d;
            })({
                channelId: t,
                blockedUserIds: n,
                ignoredUserIds: g,
            }),
            onDismissAndStay: () => {
                x(),
                    (0, u.O)(t),
                    c.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: A.q.CLICK_TO_STAY,
                        channel_id: t,
                        warning_medium: A.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: g,
                    });
            },
            onDismissAndLeave: () => {
                x(),
                    (0, u.O)(t),
                    a.Z.closePrivateChannel(t, !0, !0),
                    c.default.track(E.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: A.q.CLICK_TO_LEAVE,
                        channel_id: t,
                        warning_medium: A.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: g,
                    });
            },
            leaveButtonText: f.intl.string(f.t.I4q1kJ),
            stayButtonText: f.intl.string(f.t.DRJhmZ),
            transitionState: h,
            onClose: x,
        })
    );
}
