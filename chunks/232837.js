t.d(n, { default: () => C });
var i = t(54381),
    r = t(473749),
    s = t(990547),
    o = t(442837),
    a = t(481060),
    l = t(287734),
    u = t(493773),
    d = t(592125),
    c = t(699516),
    _ = t(594174),
    f = t(626135),
    m = t(33194),
    x = t(343544),
    N = t(14251),
    g = t(110223),
    E = t(981631),
    p = t(388032),
    h = t(942734);
function C(e) {
    let { channelId: n, userId: t, transitionState: C, onClose: k } = e,
        O = r.useRef(!1),
        v = (0, o.e7)([c.Z], () => c.Z.isBlocked(t)),
        A = (0, o.e7)([d.Z], () => d.Z.getChannel(n));
    if (
        ((0, u.zq)(() => {
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
                text: p.intl.string(p.t["+4O9nX"]),
                className: h.row,
            },
        ],
        I = v ? p.intl.string(p.t.QnTzrp) : p.intl.string(p.t.QsWbfY);
    return (0, i.jsx)(x.Z, {
        headerText: p.intl.string(p.t["1/gpFh"]),
        descriptionText: I,
        infoRows: w,
        onDismissAndStay: () => {
            (O.current = !0),
                k(),
                (0, m.nC)(t),
                f.default.track(E.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
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
                f.default.track(E.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: g.q.CLICK_TO_LEAVE,
                    channel_id: n,
                    blocked_user_ids: v ? [t] : [],
                    ignored_user_ids: v ? [] : [t],
                    warning_surface: g.fz.POST_JOIN_MODAL,
                });
        },
        leaveButtonText: p.intl.string(p.t["Hi1/aQ"]),
        stayButtonText: p.intl.string(p.t["Z+/hfb"]),
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
