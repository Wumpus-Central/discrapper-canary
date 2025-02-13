n.d(t, { default: () => N }), n(47120), n(733860);
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
    u = n(343544),
    m = n(14251),
    A = n(110223),
    g = n(981631),
    I = n(388032),
    f = n(882587);
let h = (e) => {
        let { multipleBlockedUsers: t } = e;
        return (0, l.Do)({ location: 'blocked_user_in_voice_channel_header' }) ? I.intl.string(I.t.zPUmzc) : t ? I.intl.string(I.t.aJRlSU) : I.intl.string(I.t.rlBMub);
    },
    E = (e) => {
        let { numOfBlockedUsers: t, numOfIgnoredUsers: n } = e;
        if (!(0, l.Do)({ location: 'blocked_user_in_voice_channel_header' })) return I.intl.string(I.t.K8YIgY);
        let r = t > 0,
            i = n > 0;
        return r && i
            ? (0, s.jsxs)(s.Fragment, {
                  children: [I.intl.string(I.t.aTORmJ), (0, s.jsx)('br', {}), I.intl.string(I.t.LXFz19)]
              })
            : r
              ? (0, s.jsxs)(s.Fragment, {
                    children: [I.intl.format(I.t['J/ZBu7'], { n: t }), (0, s.jsx)('br', {}), I.intl.string(I.t.tFvYm5)]
                })
              : i
                ? (0, s.jsxs)(s.Fragment, {
                      children: [I.intl.format(I.t['8mtcq6'], { n: n }), (0, s.jsx)('br', {}), I.intl.string(I.t.Z21Rp6)]
                  })
                : null;
    },
    x = (e) => {
        let { channelId: t, blockedUsers: n, ignoredUsers: r, isStealthRemediationEnabled: l } = e,
            _ = n.length > 1;
        if (!l) {
            var c;
            return [
                {
                    icon: _ ? (0, s.jsx)(i.BFJ, {}) : (0, s.jsx)(i.tBG, {}),
                    text: _ ? I.intl.formatToPlainString(I.t.Zqlt5e, { blockedUserCount: n.length }) : I.intl.formatToPlainString(I.t.V0aCFx, { userName: null === (c = n[0]) || void 0 === c ? void 0 : c.username })
                },
                {
                    icon: (0, s.jsx)(i.S6n, {}),
                    text: I.intl.string(I.t['7jN3FB'])
                }
            ];
        }
        let d = o.Z.getChannel(t),
            u = n.length > 0,
            A = r.length > 0,
            g = [
                {
                    icon: (0, s.jsx)('div', {
                        className: f.icon,
                        children: (0, s.jsx)(i.aNP, {})
                    }),
                    text: I.intl.string(I.t['7jN3FB']),
                    className: f.row
                }
            ];
        if (u && A) {
            let e = [...n, ...r],
                l = e.slice(0, 2).map((e) => e.id);
            g.unshift({
                icon: (0, s.jsx)('div', {
                    className: f.icon,
                    children: (0, s.jsx)(a.Z, {
                        recipients: l,
                        size: i.EFr.SIZE_32
                    })
                }),
                text: (0, m.a)(l, e.length, null == d ? void 0 : d.guild_id, t),
                className: f.row
            });
        } else {
            let e = u ? n.slice(0, 2).map((e) => e.id) : r.slice(0, 2).map((e) => e.id),
                i = u ? n.length : r.length;
            g.unshift({
                icon: (0, s.jsx)('div', {
                    className: f.icon,
                    children: (0, m.r)(e, null == d ? void 0 : d.guild_id)
                }),
                text: (0, m.a)(e, i, null == d ? void 0 : d.guild_id, t),
                className: f.row
            });
        }
        return g;
    };
function N(e) {
    let { channelId: t, blockedUserIds: n, ignoredUserIds: i, transitionState: a, onClose: o, onJoin: m } = e,
        f = (0, l.Do)({ location: 'blocked_user_in_voice_channel_modal' }),
        N = Array.from(n)
            .map((e) => _.default.getUser(e))
            .filter((e) => null !== e),
        S = Array.from(i)
            .map((e) => _.default.getUser(e))
            .filter((e) => null !== e);
    if (0 === N.length && 0 === S.length) return null;
    let p = n.size > 1;
    return (0, s.jsx)(u.Z, {
        headerText: (0, s.jsx)(h, { multipleBlockedUsers: p }),
        secondaryHeaderText: f ? void 0 : I.intl.string(I.t.zPUmzc),
        descriptionText: (0, s.jsx)(E, {
            numOfBlockedUsers: n.size,
            numOfIgnoredUsers: i.size
        }),
        infoRows: x({
            channelId: t,
            blockedUsers: N,
            ignoredUsers: S,
            isStealthRemediationEnabled: f
        }),
        onDismissAndStay: () => {
            m(),
                o(),
                (0, d.g6)(t),
                c.default.track(g.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: A.q.CLICK_TO_JOIN,
                    channel_id: t,
                    blocked_user_ids: Array.from(n),
                    ignored_user_ids: Array.from(i),
                    warning_surface: A.fz.PRE_JOIN_MODAL
                });
        },
        onDismissAndLeave: () => {
            o(),
                c.default.track(g.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: A.q.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: Array.from(n),
                    ignored_user_ids: Array.from(i),
                    warning_surface: A.fz.PRE_JOIN_MODAL
                });
        },
        leaveButtonText: I.intl.string(I.t.Trz9Ji),
        stayButtonText: I.intl.string(I.t.kiODyM),
        transitionState: a,
        onClose: o,
        impression: {
            impressionName: r.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: Array.from(n),
                warning_surface: A.fz.PRE_JOIN_MODAL
            }
        }
    });
}
