"use strict";
n.d(t, { Ln: () => p, Z0: () => g, kt: () => _ }), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(21119),
    a = n(95701),
    r = n(696451),
    o = n(576705),
    c = n(287809),
    d = n(607567),
    u = n(488926),
    h = n(605431),
    A = n(366251),
    m = n(652215);
function _(e) {
    let { channel: t } = e,
        n = t?.guild_id;
    return (0, s.yK)([l.A, d.Ay, r.Ay, c.default], () => {
        if (null == t) return [];
        let e = l.A.getUserAffinitiesMap(),
            i = null != t ? d.Ay.getVoiceStatesForChannel(t) : [],
            s = new Set();
        i.forEach((e) => s.add(e.user.id));
        let o = [];
        for (let e of r.Ay.getMembers(n)) {
            if (s.has(e.userId)) continue;
            let n = c.default.getUser(e.userId);
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
        l = (0, s.bG)([A.A], () => A.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: l && !n,
        dismiss: i.useCallback(() => {
            (0, h.w)(e.id);
        }, [e]),
    };
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: n = !1 } = t,
        i = A.A.getShouldShowPopover(e.id),
        s = o.A.can(m.xBc.CREATE_INSTANT_INVITE, e);
    return i && s && !n;
}
