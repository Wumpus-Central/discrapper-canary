i.d(t, { Ln: () => I, kt: () => g, Z0: () => A }), i(321073);
var r = i(64700),
    n = i(17928),
    o = i(427358),
    a = i(95701),
    l = i(696451),
    s = i(576705),
    u = i(287809),
    d = i(607567),
    c = i(488926),
    h = i(228366),
    p = i(366251),
    _ = i(652215);
function g(e) {
    let { channel: t } = e,
        i = t?.guild_id;
    return (0, n.yK)([o.A, d.Ay, l.Ay, u.default], () => {
        if (null == t) return [];
        let e = o.A.getUserAffinitiesMap(),
            r = null != t ? d.Ay.getVoiceStatesForChannel(t) : [],
            n = new Set();
        r.forEach((e) => n.add(e.user.id));
        let s = [];
        for (let e of l.Ay.getMembers(i)) {
            if (n.has(e.userId)) continue;
            let i = u.default.getUser(e.userId);
            if (null == i) continue;
            let r = (0, a.TA)(t.type);
            (0, c.$3)({ permission: r, user: i, context: t }) && s.push(i);
        }
        let h = (t) => e.get(t)?.vcProbability ?? 0;
        return s.sort((e, t) => h(t.id) - h(e.id)).slice(0, 5);
    }, [t, i]);
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: i = !1 } = t,
        o = (0, n.bG)([p.A], () => p.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: o && !i,
        dismiss: r.useCallback(() => {
            var t;
            (t = e.id), h.h.dispatch({ type: "VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER", channelId: t });
        }, [e]),
    };
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: i = !1 } = t,
        r = p.A.getShouldShowPopover(e.id),
        n = s.A.can(_.xBc.CREATE_INSTANT_INVITE, e);
    return r && n && !i;
}
