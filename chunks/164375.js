n.d(t, { default: () => S }), n(47120), n(733860);
var s = n(200651),
    i = n(192379),
    r = n(481060),
    a = n(493683),
    l = n(785232),
    o = n(922611),
    _ = n(592125),
    c = n(594174),
    d = n(626135),
    u = n(799352),
    g = n(343544),
    A = n(14251),
    m = n(110223),
    h = n(981631),
    I = n(388032),
    E = n(846745);
let x = (e) => {
        let { multipleBlockedUsers: t } = e;
        return (0, o.Do)({ location: 'blocked_user_in_gdm_header' }) ? I.intl.string(I.t['mwJJ+f']) : t ? I.intl.string(I.t.aJRlSU) : I.intl.string(I.t.rlBMub);
    },
    f = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e;
        if (!(0, o.Do)({ location: 'blocked_user_in_voice_channel_header' })) return;
        let i = t > 0,
            r = n > 0;
        return i && r
            ? (0, s.jsxs)(s.Fragment, {
                  children: [I.intl.string(I.t.xbRNIy), (0, s.jsx)('br', {}), I.intl.string(I.t['Bp2/np'])]
              })
            : i
              ? (0, s.jsxs)(s.Fragment, {
                    children: [I.intl.format(I.t.iKtixc, { n: t }), (0, s.jsx)('br', {}), I.intl.string(I.t.SN1hrq)]
                })
              : r
                ? (0, s.jsxs)(s.Fragment, {
                      children: [I.intl.format(I.t['6IRwub'], { n: n }), (0, s.jsx)('br', {}), I.intl.string(I.t['6AKLRk'])]
                  })
                : null;
    },
    N = (e) => {
        let { channelId: t, blockedUserIds: n, ignoredUserIds: i, isStealthRemediationEnabled: a } = e,
            o = n.length > 1;
        if (!a) {
            var d;
            return [
                {
                    icon: o ? (0, s.jsx)(r.BFJ, {}) : (0, s.jsx)(r.tBG, {}),
                    text: o ? I.intl.formatToPlainString(I.t.Zqlt5e, { blockedUserCount: n.length }) : I.intl.formatToPlainString(I.t.V0aCFx, { userName: null === (d = c.default.getUser([...n][0])) || void 0 === d ? void 0 : d.username })
                },
                {
                    icon: (0, s.jsx)(r.owu, {}),
                    text: I.intl.string(I.t['RIMw5+'])
                },
                {
                    icon: (0, s.jsx)(r._XJ, {}),
                    text: I.intl.string(I.t.bejNWF)
                }
            ];
        }
        let u = _.Z.getChannel(t),
            g = n.length > 0,
            m = i.length > 0,
            h = [
                {
                    icon: (0, s.jsx)('div', {
                        className: E.icon,
                        children: (0, s.jsx)(r.owK, {})
                    }),
                    text: I.intl.string(I.t['RIMw5+']),
                    className: E.row
                },
                {
                    icon: (0, s.jsx)('div', {
                        className: E.icon,
                        children: (0, s.jsx)(r.d3s, {})
                    }),
                    text: I.intl.string(I.t.bejNWF),
                    className: E.row
                }
            ];
        if (g && m) {
            let e = [...n, ...i],
                a = e.slice(0, 2);
            h.unshift({
                icon: (0, s.jsx)('div', {
                    className: E.icon,
                    children: (0, s.jsx)(l.Z, {
                        recipients: a,
                        size: r.EFr.SIZE_32
                    })
                }),
                text: (0, A.a)(a, e.length, null == u ? void 0 : u.guild_id, t),
                className: E.row
            });
        } else {
            let e = g ? [...n].slice(0, 2) : [...i].slice(0, 2),
                r = g ? n.length : i.length;
            h.unshift({
                icon: (0, s.jsx)('div', {
                    className: E.icon,
                    children: (0, A.r)(e, null == u ? void 0 : u.guild_id)
                }),
                text: (0, A.a)(e, r, null == u ? void 0 : u.guild_id, t),
                className: E.row
            });
        }
        return h;
    };
function S(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: r = [], transitionState: l, onClose: _ } = e,
        c = (0, o.Do)({ location: 'blocked_user_in_gdm_modal' });
    i.useEffect(() => {
        d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: t,
            warning_medium: m.WR.MODAL,
            blocked_user_ids: n,
            ignored_user_ids: r
        });
    }, [t, n, r]);
    let A = n.length > 1;
    return (0, s.jsx)(g.Z, {
        headerText: (0, s.jsx)(x, { multipleBlockedUsers: A }),
        secondaryHeaderText: c ? void 0 : I.intl.string(I.t['mwJJ+f']),
        descriptionText: (0, s.jsx)(f, {
            numOfBlockedUsers: n.length,
            numOfIgnoredUsers: r.length
        }),
        infoRows: N({
            channelId: t,
            blockedUserIds: n,
            ignoredUserIds: r,
            isStealthRemediationEnabled: c
        }),
        onDismissAndStay: () => {
            _(),
                (0, u.O)(t),
                d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_STAY,
                    channel_id: t,
                    warning_medium: m.WR.MODAL,
                    blocked_user_ids: n,
                    ignored_user_ids: r
                });
        },
        onDismissAndLeave: () => {
            _(),
                (0, u.O)(t),
                a.Z.closePrivateChannel(t, !0, !0),
                d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    warning_medium: m.WR.MODAL,
                    blocked_user_ids: n,
                    ignored_user_ids: r
                });
        },
        leaveButtonText: I.intl.string(I.t.I4q1kJ),
        stayButtonText: I.intl.string(I.t.DRJhmZ),
        transitionState: l,
        onClose: _
    });
}
