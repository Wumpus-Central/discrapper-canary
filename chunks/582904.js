"use strict";
n.d(t, { Ln: () => f, Z0: () => g, kt: () => p }), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(394577),
    a = n(21119),
    r = n(95701),
    o = n(696451),
    c = n(576705),
    d = n(287809),
    u = n(607567),
    h = n(488926),
    A = n(605431),
    m = n(366251),
    _ = n(652215);
function p(e) {
    let { channel: t } = e,
        n = t?.guild_id,
        { totalSuggestions: i } = l.A.useExperiment(
            { guildId: n, location: "useVoiceInviteSuggestions" },
            { autoTrackExposure: !1 },
        );
    return (0, s.yK)([a.A, u.Ay, o.Ay, d.default], () => {
        if (null == t) return [];
        let e = a.A.getUserAffinitiesMap(),
            s = null != t ? u.Ay.getVoiceStatesForChannel(t) : [],
            l = new Set();
        s.forEach((e) => l.add(e.user.id));
        let c = [];
        for (let e of o.Ay.getMembers(n)) {
            if (l.has(e.userId)) continue;
            let n = d.default.getUser(e.userId);
            if (null == n) continue;
            let i = (0, r.TA)(t.type);
            (0, h.$3)({ permission: i, user: n, context: t }) && c.push(n);
        }
        let A = (t) => e.get(t)?.vcProbability ?? 0;
        return c.sort((e, t) => A(t.id) - A(e.id)).slice(0, i);
    }, [t, n, i]);
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: n = !1 } = t,
        l = (0, s.bG)([m.A], () => m.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: l && !n,
        dismiss: i.useCallback(() => {
            (0, A.w)(e.id);
        }, [e]),
    };
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: n = !1 } = t,
        i = m.A.getShouldShowPopover(e.id),
        s = c.A.can(_.xBc.CREATE_INSTANT_INVITE, e);
    return i && s && !n;
}
