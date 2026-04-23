n.d(t, { Ln: () => p, Z0: () => g, kt: () => m }), n(321073);
var i = n(64700),
    l = n(311907),
    s = n(21119),
    a = n(95701),
    r = n(696451),
    o = n(576705),
    d = n(287809),
    c = n(607567),
    u = n(488926),
    h = n(605431),
    A = n(366251),
    _ = n(652215);
function m(e) {
    let { channel: t } = e,
        n = t?.guild_id;
    return (0, l.yK)([s.A, c.Ay, r.Ay, d.default], () => {
        if (null == t) return [];
        let e = s.A.getUserAffinitiesMap(),
            i = null != t ? c.Ay.getVoiceStatesForChannel(t) : [],
            l = new Set();
        i.forEach((e) => l.add(e.user.id));
        let o = [];
        for (let e of r.Ay.getMembers(n)) {
            if (l.has(e.userId)) continue;
            let n = d.default.getUser(e.userId);
            if (null == n) continue;
            let i = (0, a.TA)(t.type);
            (0, u.$3)({ permission: i, user: n, context: t }) && o.push(n);
        }
        let h = (t) => e.get(t)?.vcProbability ?? 0;
        return o.sort((e, t) => h(t.id) - h(e.id)).slice(0, 5);
    }, [t, n]);
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: n = !1 } = t,
        s = (0, l.bG)([A.A], () => A.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: s && !n,
        dismiss: i.useCallback(() => {
            (0, h.w)(e.id);
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
