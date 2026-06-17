"use strict";
n.d(t, { A: () => T }), n(321073);
var i = n(90644),
    r = n(382483),
    s = n(385113);
let a = (0, n(945810).mj)({
    name: "2026-06-application-widget-profile-popout-preload",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var o = n(369374),
    l = n(627363),
    u = n(587895),
    c = n(201718),
    d = n(885386),
    _ = n(889227),
    h = n(495544),
    f = n(633075),
    p = n(841595),
    E = n(758873),
    m = n(903209);
async function g() {
    let e = d.Q_.getSetting(),
        t = [(0, r.Wq)()];
    e && t.push((0, r.i$)()), await Promise.allSettled(t);
}
async function A(e) {
    let t = new Set(
        (p.A.getWidgets(e) ?? [])
            .filter((e) => e instanceof f.R)
            .map((e) => e.applicationId)
            .filter((e) => s.A.getFetchState(e) === s.e.NOT_FETCHED),
    );
    0 !== t.size && (await Promise.allSettled([...t].map((e) => (0, r.un)(e))));
}
async function I(e, t) {
    let [n] = (0, E.G)({ userId: e, currentUserId: h.default.getId(), guildId: t }).cards;
    if (n?.type !== "live" || null == n.activity.application_id || (0, i.A)(n.activity)) return;
    let r = n.activity.application_id;
    u.A.isHydrated(r) || u.A.didFetchingApplicationFail(r) || (await l.Ay.fetchApplication(r, !1));
}
async function T() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [i, r, s] = t[0] instanceof _.A ? [t[0].id, t[0].getAvatarURL(void 0, 80), t[1]] : t,
        l = (0, m.A)(i, r, { withMutualFriends: !0, withMutualGuilds: !0, waitForRefetch: !1, ...s });
    if (
        (s?.type !== "popout" && s?.type !== "account_popout") ||
        !a.getConfig({ location: "preloadUserProfileForPopout" }).enabled ||
        !o.A.getConfig({ location: "preloadUserProfileForPopout" }).enabled
    )
        return l;
    let u = c.P.fetchMany([i]),
        d = g(),
        h = I(i, s?.guildId),
        f = Promise.allSettled([l, d]).then((e) => {
            let [t] = e;
            if ("rejected" !== t.status) return A(i);
        });
    await Promise.all([l, Promise.allSettled([u, d, h, f])]);
}
