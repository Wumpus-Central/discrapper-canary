n.d(t, { default: () => S }), n(47120), n(733860);
var i = n(200651);
n(192379);
var r = n(990547),
    s = n(481060),
    a = n(785232),
    l = n(922611),
    o = n(592125),
    _ = n(594174),
    d = n(626135),
    c = n(33194),
    u = n(807031),
    A = n(343544),
    E = n(14251),
    m = n(110223),
    I = n(981631),
    f = n(388032),
    h = n(762471);
let g = (e) => {
        let { multipleBlockedUsers: t } = e;
        return (0, l.Do)({ location: 'blocked_user_in_voice_channel_header' }) ? f.intl.string(f.t.zPUmzc) : t ? f.intl.string(f.t.aJRlSU) : f.intl.string(f.t.rlBMub);
    },
    N = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e;
        if (!(0, l.Do)({ location: 'blocked_user_in_voice_channel_header' })) return f.intl.string(f.t.K8YIgY);
        let r = t > 0,
            s = n > 0;
        return r && s
            ? (0, i.jsxs)(i.Fragment, {
                  children: [f.intl.string(f.t.aTORmJ), (0, i.jsx)('br', {}), f.intl.string(f.t.LXFz19)]
              })
            : r
              ? (0, i.jsxs)(i.Fragment, {
                    children: [f.intl.format(f.t['J/ZBu7'], { n: t }), (0, i.jsx)('br', {}), f.intl.string(f.t.tFvYm5)]
                })
              : s
                ? (0, i.jsxs)(i.Fragment, {
                      children: [f.intl.format(f.t['8mtcq6'], { n: n }), (0, i.jsx)('br', {}), f.intl.string(f.t.Z21Rp6)]
                  })
                : null;
    },
    x = (e) => {
        let { channelId: t, blockedUsers: n, ignoredUsers: r, isStealthRemediationEnabled: l } = e,
            _ = n.length > 1;
        if (!l) {
            var d;
            return [
                {
                    icon: _ ? (0, i.jsx)(s.BFJ, {}) : (0, i.jsx)(s.tBG, {}),
                    text: _ ? f.intl.formatToPlainString(f.t.Zqlt5e, { blockedUserCount: n.length }) : f.intl.formatToPlainString(f.t.V0aCFx, { userName: null === (d = n[0]) || void 0 === d ? void 0 : d.username })
                },
                {
                    icon: (0, i.jsx)(s.S6n, {}),
                    text: f.intl.string(f.t['7jN3FB'])
                }
            ];
        }
        let c = o.Z.getChannel(t),
            u = n.length > 0,
            A = r.length > 0,
            m = [
                {
                    icon: (0, i.jsx)('div', {
                        className: h.icon,
                        children: (0, i.jsx)(s.aNP, {})
                    }),
                    text: f.intl.string(f.t['7jN3FB']),
                    className: h.row
                }
            ];
        if (u && A) {
            let e = [...n, ...r],
                l = e.slice(0, 2).map((e) => e.id);
            m.unshift({
                icon: (0, i.jsx)('div', {
                    className: h.icon,
                    children: (0, i.jsx)(a.Z, {
                        recipients: l,
                        size: s.EFr.SIZE_32
                    })
                }),
                text: (0, E.a)(l, e.length, null == c ? void 0 : c.guild_id, t),
                className: h.row
            });
        } else {
            let e = u ? n.slice(0, 2).map((e) => e.id) : r.slice(0, 2).map((e) => e.id),
                s = u ? n.length : r.length;
            m.unshift({
                icon: (0, i.jsx)('div', {
                    className: h.icon,
                    children: (0, E.r)(e, null == c ? void 0 : c.guild_id)
                }),
                text: (0, E.a)(e, s, null == c ? void 0 : c.guild_id, t),
                className: h.row
            });
        }
        return m;
    };
function S(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: s, transitionState: a, onClose: o, onJoin: E } = e,
        h = (0, u.KR)({ location: 'warning_modal' }),
        S = (0, l.Do)({ location: 'blocked_user_in_voice_channel_modal' });
    if (!h) return null;
    let L = Array.from(n)
            .map((e) => _.default.getUser(e))
            .filter((e) => null !== e),
        p = Array.from(s)
            .map((e) => _.default.getUser(e))
            .filter((e) => null !== e);
    if (0 === L.length && 0 === p.length) return null;
    let C = n.size > 1;
    return (0, i.jsx)(A.Z, {
        headerText: (0, i.jsx)(g, { multipleBlockedUsers: C }),
        secondaryHeaderText: S ? void 0 : f.intl.string(f.t.zPUmzc),
        descriptionText: (0, i.jsx)(N, {
            numOfBlockedUsers: n.size,
            numOfIgnoredUsers: s.size
        }),
        infoRows: x({
            channelId: t,
            blockedUsers: L,
            ignoredUsers: p,
            isStealthRemediationEnabled: S
        }),
        onDismissAndStay: () => {
            E(),
                o(),
                (0, c.g6)(t),
                d.default.track(I.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_JOIN,
                    channel_id: t,
                    blocked_user_ids: Array.from(n),
                    ignored_user_ids: Array.from(s),
                    warning_surface: m.fz.PRE_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            o(),
                d.default.track(I.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: Array.from(n),
                    ignored_user_ids: Array.from(s),
                    warning_surface: m.fz.PRE_JOIN_MODAL
                });
        },
        leaveButtonText: f.intl.string(f.t.Trz9Ji),
        stayButtonText: f.intl.string(f.t.kiODyM),
        transitionState: a,
        onClose: o,
        impression: {
            impressionName: r.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: Array.from(n),
                warning_surface: m.fz.PRE_JOIN_MODAL
            }
        }
    });
}
