n.d(t, { default: () => M }), n(47120), n(733860);
var s = n(200651),
    i = n(192379),
    o = n(481060),
    r = n(493683),
    a = n(785232),
    _ = n(922611),
    c = n(592125),
    d = n(594174),
    l = n(626135),
    u = n(799352),
    g = n(343544),
    m = n(14251),
    h = n(110223),
    x = n(981631),
    f = n(388032),
    N = n(310821);
let p = (e) => {
        let { multipleBlockedUsers: t } = e;
        return (0, _.Do)({ location: 'blocked_user_in_gdm_header' }) ? f.NW.string(f.t['mwJJ+f']) : t ? f.NW.string(f.t.aJRlSU) : f.NW.string(f.t.rlBMub);
    },
    b = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e;
        if (!(0, _.Do)({ location: 'blocked_user_in_voice_channel_header' })) return;
        let i = t > 0,
            o = n > 0;
        return i && o
            ? (0, s.jsxs)(s.Fragment, {
                  children: [f.NW.string(f.t.xbRNIy), (0, s.jsx)('br', {}), f.NW.string(f.t['Bp2/np'])]
              })
            : i
              ? (0, s.jsxs)(s.Fragment, {
                    children: [f.NW.format(f.t.iKtixc, { n: t }), (0, s.jsx)('br', {}), f.NW.string(f.t.SN1hrq)]
                })
              : o
                ? (0, s.jsxs)(s.Fragment, {
                      children: [f.NW.format(f.t['6IRwub'], { n: n }), (0, s.jsx)('br', {}), f.NW.string(f.t['6AKLRk'])]
                  })
                : null;
    },
    W = (e) => {
        let { channelId: t, blockedUserIds: n, ignoredUserIds: i, isStealthRemediationEnabled: r } = e,
            _ = n.length > 1;
        if (!r) {
            var l;
            return [
                {
                    icon: _ ? (0, s.jsx)(o.BFJ, {}) : (0, s.jsx)(o.tBG, {}),
                    text: _ ? f.NW.formatToPlainString(f.t.Zqlt5e, { blockedUserCount: n.length }) : f.NW.formatToPlainString(f.t.V0aCFx, { userName: null === (l = d.default.getUser([...n][0])) || void 0 === l ? void 0 : l.username })
                },
                {
                    icon: (0, s.jsx)(o.owu, {}),
                    text: f.NW.string(f.t['RIMw5+'])
                },
                {
                    icon: (0, s.jsx)(o._XJ, {}),
                    text: f.NW.string(f.t.bejNWF)
                }
            ];
        }
        let u = c.Z.getChannel(t),
            g = n.length > 0,
            h = i.length > 0,
            x = [
                {
                    icon: (0, s.jsx)('div', {
                        className: N.icon,
                        children: (0, s.jsx)(o.owK, {})
                    }),
                    text: f.NW.string(f.t['RIMw5+']),
                    className: N.row
                },
                {
                    icon: (0, s.jsx)('div', {
                        className: N.icon,
                        children: (0, s.jsx)(o.d3s, {})
                    }),
                    text: f.NW.string(f.t.bejNWF),
                    className: N.row
                }
            ];
        if (g && h) {
            let e = [...n, ...i],
                r = e.slice(0, 2);
            x.unshift({
                icon: (0, s.jsx)('div', {
                    className: N.icon,
                    children: (0, s.jsx)(a.Z, {
                        recipients: r,
                        size: o.EFr.SIZE_32
                    })
                }),
                text: (0, m.a)(r, e.length, null == u ? void 0 : u.guild_id, t),
                className: N.row
            });
        } else {
            let e = g ? [...n].slice(0, 2) : [...i].slice(0, 2),
                o = g ? n.length : i.length;
            x.unshift({
                icon: (0, s.jsx)('div', {
                    className: N.icon,
                    children: (0, m.r)(e, null == u ? void 0 : u.guild_id)
                }),
                text: (0, m.a)(e, o, null == u ? void 0 : u.guild_id, t),
                className: N.row
            });
        }
        return x;
    };
function M(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: o = [], transitionState: a, onClose: c } = e,
        d = (0, _.Do)({ location: 'blocked_user_in_gdm_modal' });
    i.useEffect(() => {
        l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: t,
            warning_medium: h.WR.MODAL,
            blocked_user_ids: n,
            ignored_user_ids: o
        });
    }, [t, n, o]);
    let m = n.length > 1;
    return (0, s.jsx)(g.Z, {
        headerText: (0, s.jsx)(p, { multipleBlockedUsers: m }),
        secondaryHeaderText: d ? void 0 : f.NW.string(f.t['mwJJ+f']),
        descriptionText: (0, s.jsx)(b, {
            numOfBlockedUsers: n.length,
            numOfIgnoredUsers: o.length
        }),
        infoRows: W({
            channelId: t,
            blockedUserIds: n,
            ignoredUserIds: o,
            isStealthRemediationEnabled: d
        }),
        onDismissAndStay: () => {
            c(),
                (0, u.O)(t),
                l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: h.q.CLICK_TO_STAY,
                    channel_id: t,
                    warning_medium: h.WR.MODAL,
                    blocked_user_ids: n,
                    ignored_user_ids: o
                });
        },
        onDismissAndLeave: () => {
            c(),
                (0, u.O)(t),
                r.Z.closePrivateChannel(t, !0, !0),
                l.default.track(x.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: h.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    warning_medium: h.WR.MODAL,
                    blocked_user_ids: n,
                    ignored_user_ids: o
                });
        },
        leaveButtonText: f.NW.string(f.t.I4q1kJ),
        stayButtonText: f.NW.string(f.t.DRJhmZ),
        transitionState: a,
        onClose: c
    });
}
