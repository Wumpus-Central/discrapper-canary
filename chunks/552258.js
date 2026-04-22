n.d(_, { default: () => h });
var s = n(627968),
    t = n(64700),
    i = n(110259),
    r = n(311907),
    a = n(738188),
    c = n(956793),
    o = n(964486),
    d = n(734057),
    l = n(994500),
    u = n(287809),
    g = n(954571),
    p = n(549022),
    N = n(212758),
    A = n(90386),
    C = n(64175),
    f = n(652215),
    m = n(985018),
    E = n(897455);
function h(e) {
    let { channelId: _, userId: n, transitionState: h, onClose: O } = e,
        b = t.useRef(!1),
        I = (0, r.bG)([l.A], () => l.A.isBlocked(n)),
        M = (0, r.bG)([d.A], () => d.A.getChannel(_));
    if (
        ((0, o.l0)(() => {
            b.current || (0, p.$Y)(n);
        }),
        null == u.default.getUser(n))
    )
        return null;
    let x = [
            { icon: (0, A.I)([n], M?.guild_id), text: (0, A.T)([n], 1, M?.guild_id, _), className: E.n },
            {
                icon: (0, s.jsx)("div", { className: E.K, children: (0, s.jsx)(a.i, {}) }),
                text: m.intl.string(m.t["+4O9nX"]),
                className: E.n,
            },
        ],
        L = I ? m.intl.string(m.t.QnTzrp) : m.intl.string(m.t.QsWbfY);
    return (0, s.jsx)(N.A, {
        headerText: m.intl.string(m.t["1/gpFh"]),
        descriptionText: L,
        infoRows: x,
        onDismissAndStay: () => {
            (b.current = !0),
                O(),
                (0, p.$Y)(n),
                g.default.track(f.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: C.Qi.CLICK_TO_STAY,
                    channel_id: _,
                    blocked_user_ids: I ? [n] : [],
                    ignored_user_ids: I ? [] : [n],
                    warning_surface: C.gD.POST_JOIN_MODAL,
                });
        },
        onDismissAndLeave: () => {
            (b.current = !0),
                O(),
                c.default.disconnect(),
                g.default.track(f.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: C.Qi.CLICK_TO_LEAVE,
                    channel_id: _,
                    blocked_user_ids: I ? [n] : [],
                    ignored_user_ids: I ? [] : [n],
                    warning_surface: C.gD.POST_JOIN_MODAL,
                });
        },
        leaveButtonText: m.intl.string(m.t["Hi1/aQ"]),
        stayButtonText: m.intl.string(m.t["Z+/hfb"]),
        transitionState: h,
        onClose: O,
        impression: {
            impressionName: i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: _,
                blocked_user_ids: I ? [n] : [],
                ignored_user_ids: I ? [] : [n],
                warning_surface: C.gD.POST_JOIN_MODAL,
            },
        },
    });
}
