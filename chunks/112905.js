n.d(t, { Ln: () => p, kt: () => g, Z0: () => m }), n(321073);
var i = n(64700),
    l = n(17928),
    s = n(427358),
    r = n(95701),
    a = n(696451),
    o = n(576705),
    d = n(287809),
    c = n(607567),
    u = n(488926),
    h = n(228366),
    A = n(366251),
    _ = n(652215);
function g(e) {
    let { channel: t } = e,
        n = t?.guild_id;
    return (0, l.yK)([s.A, c.Ay, a.Ay, d.default], () => {
        if (null == t) return [];
        let e = s.A.getUserAffinitiesMap(),
            i = null != t ? c.Ay.getVoiceStatesForChannel(t) : [],
            l = new Set();
        i.forEach((e) => l.add(e.user.id));
        let o = [];
        for (let e of a.Ay.getMembers(n)) {
            if (l.has(e.userId)) continue;
            let n = d.default.getUser(e.userId);
            if (null == n) continue;
            let i = (0, r.TA)(t.type);
            (0, u.$3)({ permission: i, user: n, context: t }) && o.push(n);
        }
        let h = (t) => e.get(t)?.vcProbability ?? 0;
        return o.sort((e, t) => h(t.id) - h(e.id)).slice(0, 5);
    }, [t, n]);
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: n = !1 } = t,
        s = (0, l.bG)([A.A], () => A.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: s && !n,
        dismiss: i.useCallback(() => {
            var t;
            (t = e.id), h.h.dispatch({ type: "VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER", channelId: t });
        }, [e]),
    };
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: n = !1 } = t,
        i = A.A.getShouldShowPopover(e.id),
        l = o.A.can(_.xBc.CREATE_INSTANT_INVITE, e);
    return i && l && !n;
}
