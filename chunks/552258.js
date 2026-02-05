s.d(e, { default: () => G });
var _ = s(627968),
    i = s(64700),
    a = s(110259),
    A = s(311907),
    n = s(397927),
    r = s(956793),
    l = s(964486),
    I = s(734057),
    E = s(994500),
    o = s(287809),
    d = s(954571),
    u = s(549022),
    h = s(212758),
    L = s(90386),
    c = s(64175),
    N = s(652215),
    C = s(985018),
    O = s(927884);
function G(t) {
    let { channelId: e, userId: s, transitionState: G, onClose: f } = t,
        g = i.useRef(!1),
        P = (0, A.bG)([E.A], () => E.A.isBlocked(s)),
        D = (0, A.bG)([I.A], () => I.A.getChannel(e));
    if (
        ((0, l.l0)(() => {
            g.current || (0, u.$Y)(s);
        }),
        null == o.default.getUser(s))
    )
        return null;
    let m = [
            { icon: (0, L.I)([s], D?.guild_id), text: (0, L.T)([s], 1, D?.guild_id, e), className: O.n },
            {
                icon: (0, _.jsx)("div", { className: O.K, children: (0, _.jsx)(n.id, {}) }),
                text: C.intl.string(C.t["+4O9nX"]),
                className: O.n,
            },
        ],
        T = P ? C.intl.string(C.t.QnTzrp) : C.intl.string(C.t.QsWbfY);
    return (0, _.jsx)(h.A, {
        headerText: C.intl.string(C.t["1/gpFh"]),
        descriptionText: T,
        infoRows: m,
        onDismissAndStay: () => {
            (g.current = !0),
                f(),
                (0, u.$Y)(s),
                d.default.track(N.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: c.Qi.CLICK_TO_STAY,
                    channel_id: e,
                    blocked_user_ids: P ? [s] : [],
                    ignored_user_ids: P ? [] : [s],
                    warning_surface: c.gD.POST_JOIN_MODAL,
                });
        },
        onDismissAndLeave: () => {
            (g.current = !0),
                f(),
                r.default.disconnect(),
                d.default.track(N.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: c.Qi.CLICK_TO_LEAVE,
                    channel_id: e,
                    blocked_user_ids: P ? [s] : [],
                    ignored_user_ids: P ? [] : [s],
                    warning_surface: c.gD.POST_JOIN_MODAL,
                });
        },
        leaveButtonText: C.intl.string(C.t["Hi1/aQ"]),
        stayButtonText: C.intl.string(C.t["Z+/hfb"]),
        transitionState: G,
        onClose: f,
        impression: {
            impressionName: a.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: e,
                blocked_user_ids: P ? [s] : [],
                ignored_user_ids: P ? [] : [s],
                warning_surface: c.gD.POST_JOIN_MODAL,
            },
        },
    });
}
