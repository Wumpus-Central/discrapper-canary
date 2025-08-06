t.d(n, { default: () => N }), t(388685), t(290780);
var s = t(255367),
    i = t(73800),
    r = t(481060),
    a = t(493683),
    l = t(785232),
    o = t(592125),
    d = t(626135),
    c = t(799352),
    u = t(343544),
    m = t(14251),
    x = t(110223),
    h = t(981631),
    _ = t(388032),
    f = t(193728);
let g = (e) => {
        let { numOfBlockedUsers: n, numOfIgnoredUsers: t } = e,
            i = n > 0,
            r = t > 0;
        return i && r
            ? (0, s.jsxs)(s.Fragment, {
                  children: [_.intl.string(_.t.xbRNIy), (0, s.jsx)("br", {}), _.intl.string(_.t["Bp2/np"])],
              })
            : i
              ? (0, s.jsxs)(s.Fragment, {
                    children: [_.intl.format(_.t.iKtixc, { n: n }), (0, s.jsx)("br", {}), _.intl.string(_.t.SN1hrq)],
                })
              : r
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          _.intl.format(_.t["6IRwub"], { n: t }),
                          (0, s.jsx)("br", {}),
                          _.intl.string(_.t["6AKLRk"]),
                      ],
                  })
                : null;
    },
    j = (e) => {
        let { channelId: n, blockedUserIds: t, ignoredUserIds: i } = e,
            a = o.Z.getChannel(n),
            d = t.length > 0,
            c = i.length > 0,
            u = [
                {
                    icon: (0, s.jsx)("div", {
                        className: f.icon,
                        children: (0, s.jsx)(r.owK, {}),
                    }),
                    text: _.intl.string(_.t["RIMw5+"]),
                    className: f.row,
                },
                {
                    icon: (0, s.jsx)("div", {
                        className: f.icon,
                        children: (0, s.jsx)(r.d3s, {}),
                    }),
                    text: _.intl.string(_.t.bejNWF),
                    className: f.row,
                },
            ];
        if (d && c) {
            let e = [...t, ...i],
                o = e.slice(0, 2);
            u.unshift({
                icon: (0, s.jsx)("div", {
                    className: f.icon,
                    children: (0, s.jsx)(l.Z, {
                        recipients: o,
                        size: r.EFr.SIZE_32,
                    }),
                }),
                text: (0, m.a)(o, e.length, null == a ? void 0 : a.guild_id, n),
                className: f.row,
            });
        } else {
            let e = d ? [...t].slice(0, 2) : [...i].slice(0, 2),
                r = d ? t.length : i.length;
            u.unshift({
                icon: (0, s.jsx)("div", {
                    className: f.icon,
                    children: (0, m.r)(e, null == a ? void 0 : a.guild_id),
                }),
                text: (0, m.a)(e, r, null == a ? void 0 : a.guild_id, n),
                className: f.row,
            });
        }
        return u;
    };
function N(e) {
    let { channelId: n, blockedUserIds: t, ignoredUserIds: r = [], transitionState: l, onClose: o } = e;
    return (
        i.useEffect(() => {
            d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
                channel_id: n,
                warning_medium: x.WR.MODAL,
                blocked_user_ids: t,
                ignored_user_ids: r,
            });
        }, [n, t, r]),
        (0, s.jsx)(u.Z, {
            headerText: _.intl.string(_.t["mwJJ+f"]),
            descriptionText: (0, s.jsx)(g, {
                numOfBlockedUsers: t.length,
                numOfIgnoredUsers: r.length,
            }),
            infoRows: j({
                channelId: n,
                blockedUserIds: t,
                ignoredUserIds: r,
            }),
            onDismissAndStay: () => {
                o(),
                    (0, c.O)(n),
                    d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: x.q.CLICK_TO_STAY,
                        channel_id: n,
                        warning_medium: x.WR.MODAL,
                        blocked_user_ids: t,
                        ignored_user_ids: r,
                    });
            },
            onDismissAndLeave: () => {
                o(),
                    (0, c.O)(n),
                    a.Z.closePrivateChannel(n, !0, !0),
                    d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: x.q.CLICK_TO_LEAVE,
                        channel_id: n,
                        warning_medium: x.WR.MODAL,
                        blocked_user_ids: t,
                        ignored_user_ids: r,
                    });
            },
            leaveButtonText: _.intl.string(_.t.I4q1kJ),
            stayButtonText: _.intl.string(_.t.DRJhmZ),
            transitionState: l,
            onClose: o,
        })
    );
}
