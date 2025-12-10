t.d(n, { default: () => C });
var i = t(54381),
    r = t(473749),
    s = t(990547),
    o = t(442837),
    a = t(481060),
    l = t(287734),
    c = t(493773),
    u = t(592125),
    d = t(699516),
    _ = t(594174),
    f = t(626135),
    m = t(33194),
    x = t(343544),
    N = t(14251),
    g = t(110223),
    p = t(981631),
    E = t(388032),
    h = t(623146);
function C(e) {
    let { channelId: n, userId: t, transitionState: C, onClose: k } = e,
        O = r.useRef(!1),
        v = (0, o.e7)([d.Z], () => d.Z.isBlocked(t)),
        A = (0, o.e7)([u.Z], () => u.Z.getChannel(n));
    if (
        ((0, c.zq)(() => {
            O.current || (0, m.nC)(t);
        }),
        null == _.default.getUser(t))
    )
        return null;
    let w = [
            {
                icon: (0, N.r)([t], null == A ? void 0 : A.guild_id),
                text: (0, N.a)([t], 1, null == A ? void 0 : A.guild_id, n),
                className: h.row,
            },
            {
                icon: (0, i.jsx)("div", {
                    className: h.icon,
                    children: (0, i.jsx)(a.aNP, {}),
                }),
                text: E.intl.string(E.t["+4O9nX"]),
                className: h.row,
            },
        ],
        I = v ? E.intl.string(E.t.QnTzrp) : E.intl.string(E.t.QsWbfY);
    return (0, i.jsx)(x.Z, {
        headerText: E.intl.string(E.t["1/gpFh"]),
        descriptionText: I,
        infoRows: w,
        onDismissAndStay: () => {
            (O.current = !0),
                k(),
                (0, m.nC)(t),
                f.default.track(p.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: g.q.CLICK_TO_STAY,
                    channel_id: n,
                    blocked_user_ids: v ? [t] : [],
                    ignored_user_ids: v ? [] : [t],
                    warning_surface: g.fz.POST_JOIN_MODAL,
                });
        },
        onDismissAndLeave: () => {
            (O.current = !0),
                k(),
                l.default.disconnect(),
                f.default.track(p.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: g.q.CLICK_TO_LEAVE,
                    channel_id: n,
                    blocked_user_ids: v ? [t] : [],
                    ignored_user_ids: v ? [] : [t],
                    warning_surface: g.fz.POST_JOIN_MODAL,
                });
        },
        leaveButtonText: E.intl.string(E.t["Hi1/aQ"]),
        stayButtonText: E.intl.string(E.t["Z+/hfb"]),
        transitionState: C,
        onClose: k,
        impression: {
            impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: n,
                blocked_user_ids: v ? [t] : [],
                ignored_user_ids: v ? [] : [t],
                warning_surface: g.fz.POST_JOIN_MODAL,
            },
        },
    });
}
