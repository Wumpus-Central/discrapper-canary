e.d(i, { default: () => T });
var t = e(627968),
    s = e(64700),
    r = e(562708),
    _ = e(17928),
    a = e(738188),
    d = e(730852),
    c = e(964486),
    l = e(734057),
    u = e(994500),
    o = e(287809),
    N = e(174459),
    A = e(549022),
    g = e(212758),
    E = e(90386),
    O = e(64175),
    C = e(652215),
    f = e(375708),
    p = e(897455);
function T(n) {
    let { channelId: i, userId: e, transitionState: T, onClose: h } = n,
        I = s.useRef(!1),
        L = (0, _.bG)([u.A], () => u.A.isBlocked(e)),
        m = (0, _.bG)([l.A], () => l.A.getChannel(i));
    if (
        ((0, c.l0)(() => {
            I.current || (0, A.$Y)(e);
        }),
        null == o.default.getUser(e))
    )
        return null;
    let D = [
            { icon: (0, E.I)([e], m?.guild_id), text: (0, E.T)([e], 1, m?.guild_id, i), className: p.n },
            {
                icon: (0, t.jsx)("div", { className: p.K, children: (0, t.jsx)(a.i, {}) }),
                text: f.intl.string(f.t["+4O9nX"]),
                className: p.n,
            },
        ],
        k = L ? f.intl.string(f.t.QnTzrp) : f.intl.string(f.t.QsWbfY);
    return (0, t.jsx)(g.A, {
        headerText: f.intl.string(f.t["1/gpFh"]),
        descriptionText: k,
        infoRows: D,
        onDismissAndStay: function () {
            (I.current = !0),
                h(),
                (0, A.$Y)(e),
                N.default.track(C.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: O.Qi.CLICK_TO_STAY,
                    channel_id: i,
                    blocked_user_ids: L ? [e] : [],
                    ignored_user_ids: L ? [] : [e],
                    warning_surface: O.gD.POST_JOIN_MODAL,
                });
        },
        onDismissAndLeave: function () {
            (I.current = !0),
                h(),
                d.default.disconnect(),
                N.default.track(C.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: O.Qi.CLICK_TO_LEAVE,
                    channel_id: i,
                    blocked_user_ids: L ? [e] : [],
                    ignored_user_ids: L ? [] : [e],
                    warning_surface: O.gD.POST_JOIN_MODAL,
                });
        },
        leaveButtonText: f.intl.string(f.t["Hi1/aQ"]),
        stayButtonText: f.intl.string(f.t["Z+/hfb"]),
        transitionState: T,
        onClose: h,
        impression: {
            impressionName: r.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: i,
                blocked_user_ids: L ? [e] : [],
                ignored_user_ids: L ? [] : [e],
                warning_surface: O.gD.POST_JOIN_MODAL,
            },
        },
    });
}
