n.d(t, { default: () => N }), n(388685), n(290780);
var s = n(200651),
    i = n(192379),
    r = n(481060),
    o = n(493683),
    _ = n(785232),
    a = n(592125),
    c = n(626135),
    d = n(799352),
    l = n(343544),
    u = n(14251),
    g = n(110223),
    m = n(981631),
    h = n(388032),
    f = n(193728);
let p = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e,
            i = t > 0,
            r = n > 0;
        return i && r
            ? (0, s.jsxs)(s.Fragment, {
                  children: [h.NW.string(h.t.xbRNIy), (0, s.jsx)('br', {}), h.NW.string(h.t['Bp2/np'])]
              })
            : i
              ? (0, s.jsxs)(s.Fragment, {
                    children: [h.NW.format(h.t.iKtixc, { n: t }), (0, s.jsx)('br', {}), h.NW.string(h.t.SN1hrq)]
                })
              : r
                ? (0, s.jsxs)(s.Fragment, {
                      children: [h.NW.format(h.t['6IRwub'], { n: n }), (0, s.jsx)('br', {}), h.NW.string(h.t['6AKLRk'])]
                  })
                : null;
    },
    x = (e) => {
        let { channelId: t, blockedUserIds: n, ignoredUserIds: i } = e,
            o = a.Z.getChannel(t),
            c = n.length > 0,
            d = i.length > 0,
            l = [
                {
                    icon: (0, s.jsx)('div', {
                        className: f.icon,
                        children: (0, s.jsx)(r.owK, {})
                    }),
                    text: h.NW.string(h.t['RIMw5+']),
                    className: f.row
                },
                {
                    icon: (0, s.jsx)('div', {
                        className: f.icon,
                        children: (0, s.jsx)(r.d3s, {})
                    }),
                    text: h.NW.string(h.t.bejNWF),
                    className: f.row
                }
            ];
        if (c && d) {
            let e = [...n, ...i],
                a = e.slice(0, 2);
            l.unshift({
                icon: (0, s.jsx)('div', {
                    className: f.icon,
                    children: (0, s.jsx)(_.Z, {
                        recipients: a,
                        size: r.EFr.SIZE_32
                    })
                }),
                text: (0, u.a)(a, e.length, null == o ? void 0 : o.guild_id, t),
                className: f.row
            });
        } else {
            let e = c ? [...n].slice(0, 2) : [...i].slice(0, 2),
                r = c ? n.length : i.length;
            l.unshift({
                icon: (0, s.jsx)('div', {
                    className: f.icon,
                    children: (0, u.r)(e, null == o ? void 0 : o.guild_id)
                }),
                text: (0, u.a)(e, r, null == o ? void 0 : o.guild_id, t),
                className: f.row
            });
        }
        return l;
    };
function N(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: r = [], transitionState: _, onClose: a } = e;
    return (
        i.useEffect(() => {
            c.default.track(m.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
                channel_id: t,
                warning_medium: g.WR.MODAL,
                blocked_user_ids: n,
                ignored_user_ids: r
            });
        }, [t, n, r]),
        (0, s.jsx)(l.Z, {
            headerText: h.NW.string(h.t['mwJJ+f']),
            descriptionText: (0, s.jsx)(p, {
                numOfBlockedUsers: n.length,
                numOfIgnoredUsers: r.length
            }),
            infoRows: x({
                channelId: t,
                blockedUserIds: n,
                ignoredUserIds: r
            }),
            onDismissAndStay: () => {
                a(),
                    (0, d.O)(t),
                    c.default.track(m.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: g.q.CLICK_TO_STAY,
                        channel_id: t,
                        warning_medium: g.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: r
                    });
            },
            onDismissAndLeave: () => {
                a(),
                    (0, d.O)(t),
                    o.Z.closePrivateChannel(t, !0, !0),
                    c.default.track(m.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: g.q.CLICK_TO_LEAVE,
                        channel_id: t,
                        warning_medium: g.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: r
                    });
            },
            leaveButtonText: h.NW.string(h.t.I4q1kJ),
            stayButtonText: h.NW.string(h.t.DRJhmZ),
            transitionState: _,
            onClose: a
        })
    );
}
