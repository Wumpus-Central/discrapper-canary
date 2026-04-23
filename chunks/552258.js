_.d(t, { default: () => f });
var s = _(627968),
    i = _(64700),
    a = _(110259),
    n = _(17928),
    r = _(738188),
    A = _(956793),
    l = _(964486),
    o = _(734057),
    c = _(994500),
    I = _(287809),
    d = _(954571),
    E = _(549022),
    u = _(212758),
    h = _(90386),
    L = _(64175),
    N = _(652215),
    C = _(985018),
    g = _(897455);
function f(e) {
    let { channelId: t, userId: _, transitionState: f, onClose: O } = e,
        m = i.useRef(!1),
        G = (0, n.bG)([c.A], () => c.A.isBlocked(_)),
        P = (0, n.bG)([o.A], () => o.A.getChannel(t));
    if (
        ((0, l.l0)(() => {
            m.current || (0, E.$Y)(_);
        }),
        null == I.default.getUser(_))
    )
        return null;
    let p = [
            { icon: (0, h.I)([_], P?.guild_id), text: (0, h.T)([_], 1, P?.guild_id, t), className: g.n },
            {
                icon: (0, s.jsx)("div", { className: g.K, children: (0, s.jsx)(r.i, {}) }),
                text: C.intl.string(C.t["+4O9nX"]),
                className: g.n,
            },
        ],
        D = G ? C.intl.string(C.t.QnTzrp) : C.intl.string(C.t.QsWbfY);
    return (0, s.jsx)(u.A, {
        headerText: C.intl.string(C.t["1/gpFh"]),
        descriptionText: D,
        infoRows: p,
        onDismissAndStay: () => {
            (m.current = !0),
                O(),
                (0, E.$Y)(_),
                d.default.track(N.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: L.Qi.CLICK_TO_STAY,
                    channel_id: t,
                    blocked_user_ids: G ? [_] : [],
                    ignored_user_ids: G ? [] : [_],
                    warning_surface: L.gD.POST_JOIN_MODAL,
                });
        },
        onDismissAndLeave: () => {
            (m.current = !0),
                O(),
                A.default.disconnect(),
                d.default.track(N.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: L.Qi.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: G ? [_] : [],
                    ignored_user_ids: G ? [] : [_],
                    warning_surface: L.gD.POST_JOIN_MODAL,
                });
        },
        leaveButtonText: C.intl.string(C.t["Hi1/aQ"]),
        stayButtonText: C.intl.string(C.t["Z+/hfb"]),
        transitionState: f,
        onClose: O,
        impression: {
            impressionName: a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: G ? [_] : [],
                ignored_user_ids: G ? [] : [_],
                warning_surface: L.gD.POST_JOIN_MODAL,
            },
        },
    });
}
