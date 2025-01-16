n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    }),
    n(47120),
    n(733860);
var i = n(200651);
n(192379);
var a = n(990547),
    r = n(481060),
    s = n(785232),
    l = n(922611),
    o = n(592125),
    u = n(594174),
    d = n(626135),
    c = n(33194),
    _ = n(807031),
    A = n(343544),
    I = n(14251),
    m = n(110223),
    S = n(981631),
    f = n(388032),
    E = n(762471);
let g = (e) => {
        let { multipleBlockedUsers: t } = e;
        return (0, l.Do)({ location: 'blocked_user_in_voice_channel_header' }) ? f.intl.string(f.t.zPUmzc) : t ? f.intl.string(f.t.aJRlSU) : f.intl.string(f.t.rlBMub);
    },
    h = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e;
        if (!(0, l.Do)({ location: 'blocked_user_in_voice_channel_header' })) return f.intl.string(f.t.K8YIgY);
        let a = t > 0,
            r = n > 0;
        return a && r
            ? (0, i.jsxs)(i.Fragment, {
                  children: [f.intl.string(f.t.aTORmJ), (0, i.jsx)('br', {}), f.intl.string(f.t.LXFz19)]
              })
            : a
              ? (0, i.jsxs)(i.Fragment, {
                    children: [f.intl.format(f.t['J/ZBu7'], { n: t }), (0, i.jsx)('br', {}), f.intl.string(f.t.tFvYm5)]
                })
              : r
                ? (0, i.jsxs)(i.Fragment, {
                      children: [f.intl.format(f.t['8mtcq6'], { n: n }), (0, i.jsx)('br', {}), f.intl.string(f.t.Z21Rp6)]
                  })
                : null;
    },
    N = (e) => {
        let { channelId: t, blockedUsers: n, ignoredUsers: a, isStealthRemediationEnabled: l } = e,
            u = n.length > 1;
        if (!l) {
            var d;
            return [
                {
                    icon: u ? (0, i.jsx)(r.GroupIcon, {}) : (0, i.jsx)(r.UserIcon, {}),
                    text: u ? f.intl.formatToPlainString(f.t.Zqlt5e, { blockedUserCount: n.length }) : f.intl.formatToPlainString(f.t.V0aCFx, { userName: null === (d = n[0]) || void 0 === d ? void 0 : d.username })
                },
                {
                    icon: (0, i.jsx)(r.MicrophoneIcon, {}),
                    text: f.intl.string(f.t['7jN3FB'])
                }
            ];
        }
        let c = o.Z.getChannel(t),
            _ = n.length > 0,
            A = a.length > 0,
            m = [
                {
                    icon: (0, i.jsx)('div', {
                        className: E.icon,
                        children: (0, i.jsx)(r.WarningIcon, {})
                    }),
                    text: f.intl.string(f.t['7jN3FB']),
                    className: E.row
                }
            ];
        if (_ && A) {
            let e = [...n, ...a],
                l = e.slice(0, 2).map((e) => e.id);
            m.unshift({
                icon: (0, i.jsx)('div', {
                    className: E.icon,
                    children: (0, i.jsx)(s.Z, {
                        recipients: l,
                        size: r.AvatarSizes.SIZE_32
                    })
                }),
                text: (0, I.a)(l, e.length, null == c ? void 0 : c.guild_id, t),
                className: E.row
            });
        } else {
            let e = _ ? n.slice(0, 2).map((e) => e.id) : a.slice(0, 2).map((e) => e.id),
                r = _ ? n.length : a.length;
            m.unshift({
                icon: (0, i.jsx)('div', {
                    className: E.icon,
                    children: (0, I.r)(e, null == c ? void 0 : c.guild_id)
                }),
                text: (0, I.a)(e, r, null == c ? void 0 : c.guild_id, t),
                className: E.row
            });
        }
        return m;
    };
function x(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: r, transitionState: s, onClose: o, onJoin: I } = e,
        E = (0, _.KR)({ location: 'warning_modal' }),
        x = (0, l.Do)({ location: 'blocked_user_in_voice_channel_modal' });
    if (!E) return null;
    let L = Array.from(n)
            .map((e) => u.default.getUser(e))
            .filter((e) => null !== e),
        p = Array.from(r)
            .map((e) => u.default.getUser(e))
            .filter((e) => null !== e);
    if (0 === L.length && 0 === p.length) return null;
    let v = n.size > 1;
    return (0, i.jsx)(A.Z, {
        headerText: (0, i.jsx)(g, { multipleBlockedUsers: v }),
        secondaryHeaderText: x ? void 0 : f.intl.string(f.t.zPUmzc),
        descriptionText: (0, i.jsx)(h, {
            numOfBlockedUsers: n.size,
            numOfIgnoredUsers: r.size
        }),
        infoRows: N({
            channelId: t,
            blockedUsers: L,
            ignoredUsers: p,
            isStealthRemediationEnabled: x
        }),
        onDismissAndStay: () => {
            I(),
                o(),
                (0, c.g6)(t),
                d.default.track(S.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_JOIN,
                    channel_id: t,
                    blocked_user_ids: Array.from(n),
                    ignored_user_ids: Array.from(r),
                    warning_surface: m.fz.PRE_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            o(),
                d.default.track(S.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: Array.from(n),
                    ignored_user_ids: Array.from(r),
                    warning_surface: m.fz.PRE_JOIN_MODAL
                });
        },
        leaveButtonText: f.intl.string(f.t.Trz9Ji),
        stayButtonText: f.intl.string(f.t.kiODyM),
        transitionState: s,
        onClose: o,
        impression: {
            impressionName: a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: Array.from(n),
                warning_surface: m.fz.PRE_JOIN_MODAL
            }
        }
    });
}
