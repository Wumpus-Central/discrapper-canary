n.d(e, { default: () => g });
var r = n(951288),
    i = n(647438),
    s = n(990547),
    a = n(442837),
    l = n(481060),
    o = n(287734),
    u = n(493773),
    _ = n(592125),
    c = n(699516),
    d = n(594174),
    A = n(626135),
    E = n(33194),
    f = n(343544),
    I = n(14251),
    S = n(110223),
    N = n(981631),
    L = n(388032),
    O = n(623146);
function g(t) {
    let { channelId: e, userId: n, transitionState: g, onClose: p } = t,
        m = i.useRef(!1),
        h = (0, a.e7)([c.Z], () => c.Z.isBlocked(n)),
        C = (0, a.e7)([_.Z], () => _.Z.getChannel(e));
    if (
        ((0, u.zq)(() => {
            m.current || (0, E.nC)(n);
        }),
        null == d.default.getUser(n))
    )
        return null;
    let P = [
            {
                icon: (0, I.r)([n], null == C ? void 0 : C.guild_id),
                text: (0, I.a)([n], 1, null == C ? void 0 : C.guild_id, e),
                className: O.row,
            },
            {
                icon: (0, r.jsx)("div", {
                    className: O.icon,
                    children: (0, r.jsx)(l.aNP, {}),
                }),
                text: L.intl.string(L.t["+4O9nZ"]),
                className: O.row,
            },
        ],
        x = h ? L.intl.string(L.t.QnTzrq) : L.intl.string(L.t.QsWbfX);
    return (0, r.jsx)(f.Z, {
        headerText: L.intl.string(L.t["1/gpFh"]),
        descriptionText: x,
        infoRows: P,
        onDismissAndStay: () => {
            (m.current = !0),
                p(),
                (0, E.nC)(n),
                A.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: S.q.CLICK_TO_STAY,
                    channel_id: e,
                    blocked_user_ids: h ? [n] : [],
                    ignored_user_ids: h ? [] : [n],
                    warning_surface: S.fz.POST_JOIN_MODAL,
                });
        },
        onDismissAndLeave: () => {
            (m.current = !0),
                p(),
                o.default.disconnect(),
                A.default.track(N.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: S.q.CLICK_TO_LEAVE,
                    channel_id: e,
                    blocked_user_ids: h ? [n] : [],
                    ignored_user_ids: h ? [] : [n],
                    warning_surface: S.fz.POST_JOIN_MODAL,
                });
        },
        leaveButtonText: L.intl.string(L.t["Hi1/aW"]),
        stayButtonText: L.intl.string(L.t["Z+/hfX"]),
        transitionState: g,
        onClose: p,
        impression: {
            impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: e,
                blocked_user_ids: h ? [n] : [],
                ignored_user_ids: h ? [] : [n],
                warning_surface: S.fz.POST_JOIN_MODAL,
            },
        },
    });
}
