n.d(t, { default: () => S }), n(47120), n(733860);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    a = n(493683),
    l = n(785232),
    o = n(922611),
    d = n(592125),
    _ = n(594174),
    c = n(626135),
    u = n(799352),
    A = n(343544),
    E = n(14251),
    I = n(110223),
    h = n(981631),
    x = n(388032),
    g = n(762471);
let m = (e) => {
        let { multipleBlockedUsers: t } = e;
        return (0, o.Do)({ location: 'blocked_user_in_gdm_header' }) ? x.intl.string(x.t['mwJJ+f']) : t ? x.intl.string(x.t.aJRlSU) : x.intl.string(x.t.rlBMub);
    },
    f = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e;
        if (!(0, o.Do)({ location: 'blocked_user_in_voice_channel_header' })) return;
        let s = t > 0,
            r = n > 0;
        return s && r
            ? (0, i.jsxs)(i.Fragment, {
                  children: [x.intl.string(x.t.xbRNIy), (0, i.jsx)('br', {}), x.intl.string(x.t['Bp2/np'])]
              })
            : s
              ? (0, i.jsxs)(i.Fragment, {
                    children: [x.intl.format(x.t.iKtixc, { n: t }), (0, i.jsx)('br', {}), x.intl.string(x.t.SN1hrq)]
                })
              : r
                ? (0, i.jsxs)(i.Fragment, {
                      children: [x.intl.format(x.t['6IRwub'], { n: n }), (0, i.jsx)('br', {}), x.intl.string(x.t['6AKLRk'])]
                  })
                : null;
    },
    N = (e) => {
        let { channelId: t, blockedUserIds: n, ignoredUserIds: s, isStealthRemediationEnabled: a } = e,
            o = n.length > 1;
        if (!a) {
            var c;
            return [
                {
                    icon: o ? (0, i.jsx)(r.BFJ, {}) : (0, i.jsx)(r.tBG, {}),
                    text: o ? x.intl.formatToPlainString(x.t.Zqlt5e, { blockedUserCount: n.length }) : x.intl.formatToPlainString(x.t.V0aCFx, { userName: null === (c = _.default.getUser([...n][0])) || void 0 === c ? void 0 : c.username })
                },
                {
                    icon: (0, i.jsx)(r.owu, {}),
                    text: x.intl.string(x.t['RIMw5+'])
                },
                {
                    icon: (0, i.jsx)(r._XJ, {}),
                    text: x.intl.string(x.t.bejNWF)
                }
            ];
        }
        let u = d.Z.getChannel(t),
            A = n.length > 0,
            I = s.length > 0,
            h = [
                {
                    icon: (0, i.jsx)('div', {
                        className: g.icon,
                        children: (0, i.jsx)(r.owK, {})
                    }),
                    text: x.intl.string(x.t['RIMw5+']),
                    className: g.row
                },
                {
                    icon: (0, i.jsx)('div', {
                        className: g.icon,
                        children: (0, i.jsx)(r.d3s, {})
                    }),
                    text: x.intl.string(x.t.bejNWF),
                    className: g.row
                }
            ];
        if (A && I) {
            let e = [...n, ...s],
                a = e.slice(0, 2);
            h.unshift({
                icon: (0, i.jsx)('div', {
                    className: g.icon,
                    children: (0, i.jsx)(l.Z, {
                        recipients: a,
                        size: r.EFr.SIZE_32
                    })
                }),
                text: (0, E.a)(a, e.length, null == u ? void 0 : u.guild_id, t),
                className: g.row
            });
        } else {
            let e = A ? [...n].slice(0, 2) : [...s].slice(0, 2),
                r = A ? n.length : s.length;
            h.unshift({
                icon: (0, i.jsx)('div', {
                    className: g.icon,
                    children: (0, E.r)(e, null == u ? void 0 : u.guild_id)
                }),
                text: (0, E.a)(e, r, null == u ? void 0 : u.guild_id, t),
                className: g.row
            });
        }
        return h;
    };
function S(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: r = [], transitionState: l, onClose: d } = e,
        _ = (0, o.Do)({ location: 'blocked_user_in_gdm_modal' });
    s.useEffect(() => {
        c.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: t,
            warning_medium: I.WR.MODAL,
            blocked_user_ids: n,
            ignored_user_ids: r
        });
    }, [t, n, r]);
    let E = n.length > 1;
    return (0, i.jsx)(A.Z, {
        headerText: (0, i.jsx)(m, { multipleBlockedUsers: E }),
        secondaryHeaderText: _ ? void 0 : x.intl.string(x.t['mwJJ+f']),
        descriptionText: (0, i.jsx)(f, {
            numOfBlockedUsers: n.length,
            numOfIgnoredUsers: r.length
        }),
        infoRows: N({
            channelId: t,
            blockedUserIds: n,
            ignoredUserIds: r,
            isStealthRemediationEnabled: _
        }),
        onDismissAndStay: () => {
            d(),
                (0, u.O)(t),
                c.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: I.q.CLICK_TO_STAY,
                    channel_id: t,
                    warning_medium: I.WR.MODAL,
                    blocked_user_ids: n,
                    ignored_user_ids: r
                });
        },
        onDismissAndLeave: () => {
            d(),
                (0, u.O)(t),
                a.Z.closePrivateChannel(t, !0, !0),
                c.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: I.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    warning_medium: I.WR.MODAL,
                    blocked_user_ids: n,
                    ignored_user_ids: r
                });
        },
        leaveButtonText: x.intl.string(x.t.I4q1kJ),
        stayButtonText: x.intl.string(x.t.DRJhmZ),
        transitionState: l,
        onClose: d
    });
}
