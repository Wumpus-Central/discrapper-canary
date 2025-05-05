n.d(t, { default: () => g }), n(388685), n(290780);
var r = n(255367),
    s = n(73800),
    i = n(481060),
    a = n(493683),
    l = n(785232),
    o = n(592125),
    c = n(626135),
    u = n(799352),
    d = n(343544),
    _ = n(14251),
    A = n(110223),
    f = n(981631),
    E = n(388032),
    I = n(193728);
let h = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e,
            s = t > 0,
            i = n > 0;
        return s && i
            ? (0, r.jsxs)(r.Fragment, {
                  children: [E.intl.string(E.t.xbRNIy), (0, r.jsx)('br', {}), E.intl.string(E.t['Bp2/np'])]
              })
            : s
              ? (0, r.jsxs)(r.Fragment, {
                    children: [E.intl.format(E.t.iKtixc, { n: t }), (0, r.jsx)('br', {}), E.intl.string(E.t.SN1hrq)]
                })
              : i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [E.intl.format(E.t['6IRwub'], { n: n }), (0, r.jsx)('br', {}), E.intl.string(E.t['6AKLRk'])]
                  })
                : null;
    },
    m = (e) => {
        let { channelId: t, blockedUserIds: n, ignoredUserIds: s } = e,
            a = o.Z.getChannel(t),
            c = n.length > 0,
            u = s.length > 0,
            d = [
                {
                    icon: (0, r.jsx)('div', {
                        className: I.icon,
                        children: (0, r.jsx)(i.owK, {})
                    }),
                    text: E.intl.string(E.t['RIMw5+']),
                    className: I.row
                },
                {
                    icon: (0, r.jsx)('div', {
                        className: I.icon,
                        children: (0, r.jsx)(i.d3s, {})
                    }),
                    text: E.intl.string(E.t.bejNWF),
                    className: I.row
                }
            ];
        if (c && u) {
            let e = [...n, ...s],
                o = e.slice(0, 2);
            d.unshift({
                icon: (0, r.jsx)('div', {
                    className: I.icon,
                    children: (0, r.jsx)(l.Z, {
                        recipients: o,
                        size: i.EFr.SIZE_32
                    })
                }),
                text: (0, _.a)(o, e.length, null == a ? void 0 : a.guild_id, t),
                className: I.row
            });
        } else {
            let e = c ? [...n].slice(0, 2) : [...s].slice(0, 2),
                i = c ? n.length : s.length;
            d.unshift({
                icon: (0, r.jsx)('div', {
                    className: I.icon,
                    children: (0, _.r)(e, null == a ? void 0 : a.guild_id)
                }),
                text: (0, _.a)(e, i, null == a ? void 0 : a.guild_id, t),
                className: I.row
            });
        }
        return d;
    };
function g(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: i = [], transitionState: l, onClose: o } = e;
    return (
        s.useEffect(() => {
            c.default.track(f.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
                channel_id: t,
                warning_medium: A.WR.MODAL,
                blocked_user_ids: n,
                ignored_user_ids: i
            });
        }, [t, n, i]),
        (0, r.jsx)(d.Z, {
            headerText: E.intl.string(E.t['mwJJ+f']),
            descriptionText: (0, r.jsx)(h, {
                numOfBlockedUsers: n.length,
                numOfIgnoredUsers: i.length
            }),
            infoRows: m({
                channelId: t,
                blockedUserIds: n,
                ignoredUserIds: i
            }),
            onDismissAndStay: () => {
                o(),
                    (0, u.O)(t),
                    c.default.track(f.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: A.q.CLICK_TO_STAY,
                        channel_id: t,
                        warning_medium: A.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: i
                    });
            },
            onDismissAndLeave: () => {
                o(),
                    (0, u.O)(t),
                    a.Z.closePrivateChannel(t, !0, !0),
                    c.default.track(f.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: A.q.CLICK_TO_LEAVE,
                        channel_id: t,
                        warning_medium: A.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: i
                    });
            },
            leaveButtonText: E.intl.string(E.t.I4q1kJ),
            stayButtonText: E.intl.string(E.t.DRJhmZ),
            transitionState: l,
            onClose: o
        })
    );
}
