n.d(t, { default: () => S }), n(47120), n(733860);
var s = n(200651);
n(192379);
var r = n(990547),
    i = n(481060),
    a = n(785232),
    l = n(922611),
    o = n(592125),
    _ = n(594174),
    c = n(626135),
    d = n(33194),
    u = n(807031),
    m = n(343544),
    A = n(14251),
    g = n(110223),
    I = n(981631),
    f = n(388032),
    h = n(846745);
let E = (e) => {
        let { multipleBlockedUsers: t } = e;
        return (0, l.Do)({ location: 'blocked_user_in_voice_channel_header' }) ? f.intl.string(f.t.zPUmzc) : t ? f.intl.string(f.t.aJRlSU) : f.intl.string(f.t.rlBMub);
    },
    x = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e;
        if (!(0, l.Do)({ location: 'blocked_user_in_voice_channel_header' })) return f.intl.string(f.t.K8YIgY);
        let r = t > 0,
            i = n > 0;
        return r && i
            ? (0, s.jsxs)(s.Fragment, {
                  children: [f.intl.string(f.t.aTORmJ), (0, s.jsx)('br', {}), f.intl.string(f.t.LXFz19)]
              })
            : r
              ? (0, s.jsxs)(s.Fragment, {
                    children: [f.intl.format(f.t['J/ZBu7'], { n: t }), (0, s.jsx)('br', {}), f.intl.string(f.t.tFvYm5)]
                })
              : i
                ? (0, s.jsxs)(s.Fragment, {
                      children: [f.intl.format(f.t['8mtcq6'], { n: n }), (0, s.jsx)('br', {}), f.intl.string(f.t.Z21Rp6)]
                  })
                : null;
    },
    N = (e) => {
        let { channelId: t, blockedUsers: n, ignoredUsers: r, isStealthRemediationEnabled: l } = e,
            _ = n.length > 1;
        if (!l) {
            var c;
            return [
                {
                    icon: _ ? (0, s.jsx)(i.BFJ, {}) : (0, s.jsx)(i.tBG, {}),
                    text: _ ? f.intl.formatToPlainString(f.t.Zqlt5e, { blockedUserCount: n.length }) : f.intl.formatToPlainString(f.t.V0aCFx, { userName: null === (c = n[0]) || void 0 === c ? void 0 : c.username })
                },
                {
                    icon: (0, s.jsx)(i.S6n, {}),
                    text: f.intl.string(f.t['7jN3FB'])
                }
            ];
        }
        let d = o.Z.getChannel(t),
            u = n.length > 0,
            m = r.length > 0,
            g = [
                {
                    icon: (0, s.jsx)('div', {
                        className: h.icon,
                        children: (0, s.jsx)(i.aNP, {})
                    }),
                    text: f.intl.string(f.t['7jN3FB']),
                    className: h.row
                }
            ];
        if (u && m) {
            let e = [...n, ...r],
                l = e.slice(0, 2).map((e) => e.id);
            g.unshift({
                icon: (0, s.jsx)('div', {
                    className: h.icon,
                    children: (0, s.jsx)(a.Z, {
                        recipients: l,
                        size: i.EFr.SIZE_32
                    })
                }),
                text: (0, A.a)(l, e.length, null == d ? void 0 : d.guild_id, t),
                className: h.row
            });
        } else {
            let e = u ? n.slice(0, 2).map((e) => e.id) : r.slice(0, 2).map((e) => e.id),
                i = u ? n.length : r.length;
            g.unshift({
                icon: (0, s.jsx)('div', {
                    className: h.icon,
                    children: (0, A.r)(e, null == d ? void 0 : d.guild_id)
                }),
                text: (0, A.a)(e, i, null == d ? void 0 : d.guild_id, t),
                className: h.row
            });
        }
        return g;
    };
function S(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: i, transitionState: a, onClose: o, onJoin: A } = e,
        h = (0, u.KR)({ location: 'warning_modal' }),
        S = (0, l.Do)({ location: 'blocked_user_in_voice_channel_modal' });
    if (!h) return null;
    let p = Array.from(n)
            .map((e) => _.default.getUser(e))
            .filter((e) => null !== e),
        L = Array.from(i)
            .map((e) => _.default.getUser(e))
            .filter((e) => null !== e);
    if (0 === p.length && 0 === L.length) return null;
    let C = n.size > 1;
    return (0, s.jsx)(m.Z, {
        headerText: (0, s.jsx)(E, { multipleBlockedUsers: C }),
        secondaryHeaderText: S ? void 0 : f.intl.string(f.t.zPUmzc),
        descriptionText: (0, s.jsx)(x, {
            numOfBlockedUsers: n.size,
            numOfIgnoredUsers: i.size
        }),
        infoRows: N({
            channelId: t,
            blockedUsers: p,
            ignoredUsers: L,
            isStealthRemediationEnabled: S
        }),
        onDismissAndStay: () => {
            A(),
                o(),
                (0, d.g6)(t),
                c.default.track(I.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: g.q.CLICK_TO_JOIN,
                    channel_id: t,
                    blocked_user_ids: Array.from(n),
                    ignored_user_ids: Array.from(i),
                    warning_surface: g.fz.PRE_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            o(),
                c.default.track(I.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: g.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: Array.from(n),
                    ignored_user_ids: Array.from(i),
                    warning_surface: g.fz.PRE_JOIN_MODAL
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
                warning_surface: g.fz.PRE_JOIN_MODAL
            }
        }
    });
}
