n.d(t, { default: () => N }), n(47120), n(733860);
var s = n(200651),
    i = n(192379),
    o = n(481060),
    r = n(493683),
    _ = n(785232),
    a = n(592125),
    c = n(626135),
    d = n(799352),
    l = n(343544),
    u = n(14251),
    g = n(110223),
    h = n(981631),
    m = n(388032),
    f = n(193728);
let p = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e,
            i = t > 0,
            o = n > 0;
        return i && o
            ? (0, s.jsxs)(s.Fragment, {
                  children: [m.NW.string(m.t.xbRNIy), (0, s.jsx)('br', {}), m.NW.string(m.t['Bp2/np'])]
              })
            : i
              ? (0, s.jsxs)(s.Fragment, {
                    children: [m.NW.format(m.t.iKtixc, { n: t }), (0, s.jsx)('br', {}), m.NW.string(m.t.SN1hrq)]
                })
              : o
                ? (0, s.jsxs)(s.Fragment, {
                      children: [m.NW.format(m.t['6IRwub'], { n: n }), (0, s.jsx)('br', {}), m.NW.string(m.t['6AKLRk'])]
                  })
                : null;
    },
    x = (e) => {
        let { channelId: t, blockedUserIds: n, ignoredUserIds: i } = e,
            r = a.Z.getChannel(t),
            c = n.length > 0,
            d = i.length > 0,
            l = [
                {
                    icon: (0, s.jsx)('div', {
                        className: f.icon,
                        children: (0, s.jsx)(o.owK, {})
                    }),
                    text: m.NW.string(m.t['RIMw5+']),
                    className: f.row
                },
                {
                    icon: (0, s.jsx)('div', {
                        className: f.icon,
                        children: (0, s.jsx)(o.d3s, {})
                    }),
                    text: m.NW.string(m.t.bejNWF),
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
                        size: o.EFr.SIZE_32
                    })
                }),
                text: (0, u.a)(a, e.length, null == r ? void 0 : r.guild_id, t),
                className: f.row
            });
        } else {
            let e = c ? [...n].slice(0, 2) : [...i].slice(0, 2),
                o = c ? n.length : i.length;
            l.unshift({
                icon: (0, s.jsx)('div', {
                    className: f.icon,
                    children: (0, u.r)(e, null == r ? void 0 : r.guild_id)
                }),
                text: (0, u.a)(e, o, null == r ? void 0 : r.guild_id, t),
                className: f.row
            });
        }
        return l;
    };
function N(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: o = [], transitionState: _, onClose: a } = e;
    return (
        i.useEffect(() => {
            c.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
                channel_id: t,
                warning_medium: g.WR.MODAL,
                blocked_user_ids: n,
                ignored_user_ids: o
            });
        }, [t, n, o]),
        (0, s.jsx)(l.Z, {
            headerText: m.NW.string(m.t['mwJJ+f']),
            descriptionText: (0, s.jsx)(p, {
                numOfBlockedUsers: n.length,
                numOfIgnoredUsers: o.length
            }),
            infoRows: x({
                channelId: t,
                blockedUserIds: n,
                ignoredUserIds: o
            }),
            onDismissAndStay: () => {
                a(),
                    (0, d.O)(t),
                    c.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: g.q.CLICK_TO_STAY,
                        channel_id: t,
                        warning_medium: g.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: o
                    });
            },
            onDismissAndLeave: () => {
                a(),
                    (0, d.O)(t),
                    r.Z.closePrivateChannel(t, !0, !0),
                    c.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: g.q.CLICK_TO_LEAVE,
                        channel_id: t,
                        warning_medium: g.WR.MODAL,
                        blocked_user_ids: n,
                        ignored_user_ids: o
                    });
            },
            leaveButtonText: m.NW.string(m.t.I4q1kJ),
            stayButtonText: m.NW.string(m.t.DRJhmZ),
            transitionState: _,
            onClose: a
        })
    );
}
