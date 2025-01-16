n.r(e),
    n.d(e, {
        default: function () {
            return N;
        }
    }),
    n(47120),
    n(733860);
var i = n(200651),
    s = n(192379),
    a = n(481060),
    r = n(493683),
    l = n(785232),
    o = n(922611),
    d = n(592125),
    c = n(594174),
    u = n(626135),
    _ = n(799352),
    A = n(343544),
    I = n(14251),
    S = n(110223),
    h = n(981631),
    m = n(388032),
    g = n(762471);
let x = (t) => {
        let { multipleBlockedUsers: e } = t;
        return (0, o.Do)({ location: 'blocked_user_in_gdm_header' }) ? m.intl.string(m.t['mwJJ+f']) : e ? m.intl.string(m.t.aJRlSU) : m.intl.string(m.t.rlBMub);
    },
    E = (t) => {
        let { numOfBlockedUsers: e, numOfIgnoredUsers: n } = t;
        if (!(0, o.Do)({ location: 'blocked_user_in_voice_channel_header' })) return;
        let s = e > 0,
            a = n > 0;
        return s && a
            ? (0, i.jsxs)(i.Fragment, {
                  children: [m.intl.string(m.t.xbRNIy), (0, i.jsx)('br', {}), m.intl.string(m.t['Bp2/np'])]
              })
            : s
              ? (0, i.jsxs)(i.Fragment, {
                    children: [m.intl.format(m.t.iKtixc, { n: e }), (0, i.jsx)('br', {}), m.intl.string(m.t.SN1hrq)]
                })
              : a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [m.intl.format(m.t['6IRwub'], { n: n }), (0, i.jsx)('br', {}), m.intl.string(m.t['6AKLRk'])]
                  })
                : null;
    },
    f = (t) => {
        let { channelId: e, blockedUserIds: n, ignoredUserIds: s, isStealthRemediationEnabled: r } = t,
            o = n.length > 1;
        if (!r) {
            var u;
            return [
                {
                    icon: o ? (0, i.jsx)(a.GroupIcon, {}) : (0, i.jsx)(a.UserIcon, {}),
                    text: o ? m.intl.formatToPlainString(m.t.Zqlt5e, { blockedUserCount: n.length }) : m.intl.formatToPlainString(m.t.V0aCFx, { userName: null === (u = c.default.getUser([...n][0])) || void 0 === u ? void 0 : u.username })
                },
                {
                    icon: (0, i.jsx)(a.BellSlashIcon, {}),
                    text: m.intl.string(m.t['RIMw5+'])
                },
                {
                    icon: (0, i.jsx)(a.EnvelopeIcon, {}),
                    text: m.intl.string(m.t.bejNWF)
                }
            ];
        }
        let _ = d.Z.getChannel(e),
            A = n.length > 0,
            S = s.length > 0,
            h = [
                {
                    icon: (0, i.jsx)('div', {
                        className: g.icon,
                        children: (0, i.jsx)(a.CircleCheckIcon, {})
                    }),
                    text: m.intl.string(m.t['RIMw5+']),
                    className: g.row
                },
                {
                    icon: (0, i.jsx)('div', {
                        className: g.icon,
                        children: (0, i.jsx)(a.CircleInformationIcon, {})
                    }),
                    text: m.intl.string(m.t.bejNWF),
                    className: g.row
                }
            ];
        if (A && S) {
            let t = [...n, ...s],
                r = t.slice(0, 2);
            h.unshift({
                icon: (0, i.jsx)('div', {
                    className: g.icon,
                    children: (0, i.jsx)(l.Z, {
                        recipients: r,
                        size: a.AvatarSizes.SIZE_32
                    })
                }),
                text: (0, I.a)(r, t.length, null == _ ? void 0 : _.guild_id, e),
                className: g.row
            });
        } else {
            let t = A ? [...n].slice(0, 2) : [...s].slice(0, 2),
                a = A ? n.length : s.length;
            h.unshift({
                icon: (0, i.jsx)('div', {
                    className: g.icon,
                    children: (0, I.r)(t, null == _ ? void 0 : _.guild_id)
                }),
                text: (0, I.a)(t, a, null == _ ? void 0 : _.guild_id, e),
                className: g.row
            });
        }
        return h;
    };
function N(t) {
    let { channelId: e, blockedUserIds: n, ignoredUserIds: a = [], transitionState: l, onClose: d } = t,
        c = (0, o.Do)({ location: 'blocked_user_in_gdm_modal' });
    s.useEffect(() => {
        u.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: e,
            warning_medium: S.WR.MODAL,
            blocked_user_ids: n,
            ignored_user_ids: a
        });
    }, [e, n, a]);
    let I = n.length > 1;
    return (0, i.jsx)(A.Z, {
        headerText: (0, i.jsx)(x, { multipleBlockedUsers: I }),
        secondaryHeaderText: c ? void 0 : m.intl.string(m.t['mwJJ+f']),
        descriptionText: (0, i.jsx)(E, {
            numOfBlockedUsers: n.length,
            numOfIgnoredUsers: a.length
        }),
        infoRows: f({
            channelId: e,
            blockedUserIds: n,
            ignoredUserIds: a,
            isStealthRemediationEnabled: c
        }),
        onDismissAndStay: () => {
            d(),
                (0, _.O)(e),
                u.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: S.q.CLICK_TO_STAY,
                    channel_id: e,
                    warning_medium: S.WR.MODAL,
                    blocked_user_ids: n,
                    ignored_user_ids: a
                });
        },
        onDismissAndLeave: () => {
            d(),
                (0, _.O)(e),
                r.Z.closePrivateChannel(e, !0, !0),
                u.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: S.q.CLICK_TO_LEAVE,
                    channel_id: e,
                    warning_medium: S.WR.MODAL,
                    blocked_user_ids: n,
                    ignored_user_ids: a
                });
        },
        leaveButtonText: m.intl.string(m.t.I4q1kJ),
        stayButtonText: m.intl.string(m.t.DRJhmZ),
        transitionState: l,
        onClose: d
    });
}
