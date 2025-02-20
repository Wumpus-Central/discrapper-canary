n.d(t, { default: () => b }), n(47120), n(733860);
var s = n(200651);
n(192379);
var r = n(990547),
    i = n(481060),
    o = n(785232),
    a = n(922611),
    _ = n(592125),
    c = n(594174),
    l = n(626135),
    d = n(33194),
    u = n(343544),
    g = n(14251),
    m = n(110223),
    f = n(981631),
    N = n(388032),
    h = n(310821);
let p = (e) => {
        let { multipleBlockedUsers: t } = e;
        return (0, a.Do)({ location: 'blocked_user_in_voice_channel_header' }) ? N.NW.string(N.t.zPUmzc) : t ? N.NW.string(N.t.aJRlSU) : N.NW.string(N.t.rlBMub);
    },
    x = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e;
        if (!(0, a.Do)({ location: 'blocked_user_in_voice_channel_header' })) return N.NW.string(N.t.K8YIgY);
        let r = t > 0,
            i = n > 0;
        return r && i
            ? (0, s.jsxs)(s.Fragment, {
                  children: [N.NW.string(N.t.aTORmJ), (0, s.jsx)('br', {}), N.NW.string(N.t.LXFz19)]
              })
            : r
              ? (0, s.jsxs)(s.Fragment, {
                    children: [N.NW.format(N.t['J/ZBu7'], { n: t }), (0, s.jsx)('br', {}), N.NW.string(N.t.tFvYm5)]
                })
              : i
                ? (0, s.jsxs)(s.Fragment, {
                      children: [N.NW.format(N.t['8mtcq6'], { n: n }), (0, s.jsx)('br', {}), N.NW.string(N.t.Z21Rp6)]
                  })
                : null;
    },
    I = (e) => {
        let { channelId: t, blockedUsers: n, ignoredUsers: r, isStealthRemediationEnabled: a } = e,
            c = n.length > 1;
        if (!a) {
            var l;
            return [
                {
                    icon: c ? (0, s.jsx)(i.BFJ, {}) : (0, s.jsx)(i.tBG, {}),
                    text: c ? N.NW.formatToPlainString(N.t.Zqlt5e, { blockedUserCount: n.length }) : N.NW.formatToPlainString(N.t.V0aCFx, { userName: null === (l = n[0]) || void 0 === l ? void 0 : l.username })
                },
                {
                    icon: (0, s.jsx)(i.S6n, {}),
                    text: N.NW.string(N.t['7jN3FB'])
                }
            ];
        }
        let d = _.Z.getChannel(t),
            u = n.length > 0,
            m = r.length > 0,
            f = [
                {
                    icon: (0, s.jsx)('div', {
                        className: h.icon,
                        children: (0, s.jsx)(i.aNP, {})
                    }),
                    text: N.NW.string(N.t['7jN3FB']),
                    className: h.row
                }
            ];
        if (u && m) {
            let e = [...n, ...r],
                a = e.slice(0, 2).map((e) => e.id);
            f.unshift({
                icon: (0, s.jsx)('div', {
                    className: h.icon,
                    children: (0, s.jsx)(o.Z, {
                        recipients: a,
                        size: i.EFr.SIZE_32
                    })
                }),
                text: (0, g.a)(a, e.length, null == d ? void 0 : d.guild_id, t),
                className: h.row
            });
        } else {
            let e = u ? n.slice(0, 2).map((e) => e.id) : r.slice(0, 2).map((e) => e.id),
                i = u ? n.length : r.length;
            f.unshift({
                icon: (0, s.jsx)('div', {
                    className: h.icon,
                    children: (0, g.r)(e, null == d ? void 0 : d.guild_id)
                }),
                text: (0, g.a)(e, i, null == d ? void 0 : d.guild_id, t),
                className: h.row
            });
        }
        return f;
    };
function b(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: i, transitionState: o, onClose: _, onJoin: g } = e,
        h = (0, a.Do)({ location: 'blocked_user_in_voice_channel_modal' }),
        b = Array.from(n)
            .map((e) => c.default.getUser(e))
            .filter((e) => null !== e),
        E = Array.from(i)
            .map((e) => c.default.getUser(e))
            .filter((e) => null !== e);
    if (0 === b.length && 0 === E.length) return null;
    let A = n.size > 1;
    return (0, s.jsx)(u.Z, {
        headerText: (0, s.jsx)(p, { multipleBlockedUsers: A }),
        secondaryHeaderText: h ? void 0 : N.NW.string(N.t.zPUmzc),
        descriptionText: (0, s.jsx)(x, {
            numOfBlockedUsers: n.size,
            numOfIgnoredUsers: i.size
        }),
        infoRows: I({
            channelId: t,
            blockedUsers: b,
            ignoredUsers: E,
            isStealthRemediationEnabled: h
        }),
        onDismissAndStay: () => {
            g(),
                _(),
                (0, d.g6)(t),
                l.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_JOIN,
                    channel_id: t,
                    blocked_user_ids: Array.from(n),
                    ignored_user_ids: Array.from(i),
                    warning_surface: m.fz.PRE_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            _(),
                l.default.track(f.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: m.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: Array.from(n),
                    ignored_user_ids: Array.from(i),
                    warning_surface: m.fz.PRE_JOIN_MODAL
                });
        },
        leaveButtonText: N.NW.string(N.t.Trz9Ji),
        stayButtonText: N.NW.string(N.t.kiODyM),
        transitionState: o,
        onClose: _,
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
