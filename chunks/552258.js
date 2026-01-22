n.d(t, { default: () => E });
var s = n(627968),
    i = n(64700),
    r = n(110259),
    a = n(311907),
    l = n(397927),
    o = n(956793),
    d = n(964486),
    c = n(734057),
    u = n(994500),
    _ = n(287809),
    m = n(954571),
    f = n(549022),
    g = n(212758),
    x = n(90386),
    N = n(64175),
    A = n(652215),
    h = n(985018),
    p = n(927884);
function E(e) {
    let { channelId: t, userId: n, transitionState: E, onClose: C } = e,
        k = i.useRef(!1),
        O = (0, a.bG)([u.A], () => u.A.isBlocked(n)),
        b = (0, a.bG)([c.A], () => c.A.getChannel(t));
    if (
        ((0, d.l0)(() => {
            k.current || (0, f.$Y)(n);
        }),
        null == _.default.getUser(n))
    )
        return null;
    let v = [
            {
                icon: (0, x.I)([n], null == b ? void 0 : b.guild_id),
                text: (0, x.T)([n], 1, null == b ? void 0 : b.guild_id, t),
                className: p.n,
            },
            {
                icon: (0, s.jsx)("div", {
                    className: p.K,
                    children: (0, s.jsx)(l.id, {}),
                }),
                text: h.intl.string(h.t["+4O9nX"]),
                className: p.n,
            },
        ],
        I = O ? h.intl.string(h.t.QnTzrp) : h.intl.string(h.t.QsWbfY);
    return (0, s.jsx)(g.A, {
        headerText: h.intl.string(h.t["1/gpFh"]),
        descriptionText: I,
        infoRows: v,
        onDismissAndStay: () => {
            (k.current = !0),
                C(),
                (0, f.$Y)(n),
                m.default.track(A.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: N.Qi.CLICK_TO_STAY,
                    channel_id: t,
                    blocked_user_ids: O ? [n] : [],
                    ignored_user_ids: O ? [] : [n],
                    warning_surface: N.gD.POST_JOIN_MODAL,
                });
        },
        onDismissAndLeave: () => {
            (k.current = !0),
                C(),
                o.default.disconnect(),
                m.default.track(A.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: N.Qi.CLICK_TO_LEAVE,
                    channel_id: t,
                    blocked_user_ids: O ? [n] : [],
                    ignored_user_ids: O ? [] : [n],
                    warning_surface: N.gD.POST_JOIN_MODAL,
                });
        },
        leaveButtonText: h.intl.string(h.t["Hi1/aQ"]),
        stayButtonText: h.intl.string(h.t["Z+/hfb"]),
        transitionState: E,
        onClose: C,
        impression: {
            impressionName: r.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: O ? [n] : [],
                ignored_user_ids: O ? [] : [n],
                warning_surface: N.gD.POST_JOIN_MODAL,
            },
        },
    });
}
