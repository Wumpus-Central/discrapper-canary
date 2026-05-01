i.d(t, { Ln: () => I, Z0: () => p, kt: () => A }), i(321073);
var n = i(64700),
    l = i(17928),
    s = i(427358),
    a = i(95701),
    r = i(696451),
    d = i(576705),
    o = i(287809),
    u = i(607567),
    c = i(488926),
    m = i(605431),
    h = i(366251),
    g = i(652215);
function A(e) {
    let { channel: t } = e,
        i = t?.guild_id;
    return (0, l.yK)([s.A, u.Ay, r.Ay, o.default], () => {
        if (null == t) return [];
        let e = s.A.getUserAffinitiesMap(),
            n = null != t ? u.Ay.getVoiceStatesForChannel(t) : [],
            l = new Set();
        n.forEach((e) => l.add(e.user.id));
        let d = [];
        for (let e of r.Ay.getMembers(i)) {
            if (l.has(e.userId)) continue;
            let i = o.default.getUser(e.userId);
            if (null == i) continue;
            let n = (0, a.TA)(t.type);
            (0, c.$3)({ permission: n, user: i, context: t }) && d.push(i);
        }
        let m = (t) => e.get(t)?.vcProbability ?? 0;
        return d.sort((e, t) => m(t.id) - m(e.id)).slice(0, 5);
    }, [t, i]);
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: i = !1 } = t,
        s = (0, l.bG)([h.A], () => h.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: s && !i,
        dismiss: n.useCallback(() => {
            (0, m.w)(e.id);
        }, [e]),
    };
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: i = !1 } = t,
        n = h.A.getShouldShowPopover(e.id),
        l = d.A.can(g.xBc.CREATE_INSTANT_INVITE, e);
    return n && l && !i;
}
