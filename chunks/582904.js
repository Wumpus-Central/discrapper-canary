t.d(i, { Ln: () => f, Z0: () => p, kt: () => h }), t(321073);
var n = t(64700),
    l = t(17928),
    s = t(427358),
    a = t(95701),
    r = t(696451),
    d = t(576705),
    o = t(287809),
    u = t(607567),
    c = t(488926),
    m = t(605431),
    A = t(366251),
    g = t(652215);
function h(e) {
    let { channel: i } = e,
        t = i?.guild_id;
    return (0, l.yK)([s.A, u.Ay, r.Ay, o.default], () => {
        if (null == i) return [];
        let e = s.A.getUserAffinitiesMap(),
            n = null != i ? u.Ay.getVoiceStatesForChannel(i) : [],
            l = new Set();
        n.forEach((e) => l.add(e.user.id));
        let d = [];
        for (let e of r.Ay.getMembers(t)) {
            if (l.has(e.userId)) continue;
            let t = o.default.getUser(e.userId);
            if (null == t) continue;
            let n = (0, a.TA)(i.type);
            (0, c.$3)({ permission: n, user: t, context: i }) && d.push(t);
        }
        function m(i) {
            return e.get(i)?.vcProbability ?? 0;
        }
        return d.sort((e, i) => m(i.id) - m(e.id)).slice(0, 5);
    }, [i, t]);
}
function p(e) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: t = !1 } = i,
        s = (0, l.bG)([A.A], () => A.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: s && !t,
        dismiss: n.useCallback(() => {
            (0, m.w)(e.id);
        }, [e]),
    };
}
function f(e) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: t = !1 } = i,
        n = A.A.getShouldShowPopover(e.id),
        l = d.A.can(g.xBc.CREATE_INSTANT_INVITE, e);
    return n && l && !t;
}
