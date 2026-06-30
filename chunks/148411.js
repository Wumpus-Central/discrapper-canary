"use strict";
n.d(t, { A: () => I }), n(321073);
var i = n(90644),
    r = n(382483),
    s = n(385113);
let a = (0, n(945810).mj)({
    name: "2026-06-application-widget-profile-popout-preload",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var o = n(627363),
    l = n(587895),
    u = n(201718),
    c = n(885386),
    d = n(889227),
    _ = n(495544),
    h = n(633075),
    f = n(321191),
    p = n(758873),
    E = n(903209);
async function m() {
    let e = c.Q_.getSetting(),
        t = [(0, r.Wq)()];
    e && t.push((0, r.i$)()), await Promise.allSettled(t);
}
async function g(e) {
    let t = new Set(
        (f.A.getWidgets(e) ?? [])
            .filter((e) => e instanceof h.R)
            .map((e) => e.applicationId)
            .filter((e) => s.A.getFetchState(e) === s.e.NOT_FETCHED),
    );
    0 !== t.size && (await Promise.allSettled([...t].map((e) => (0, r.un)(e))));
}
async function A(e, t) {
    let [n] = (0, p.G)({ userId: e, currentUserId: _.default.getId(), guildId: t }).cards;
    if (n?.type !== "live" || null == n.activity.application_id || (0, i.A)(n.activity)) return;
    let r = n.activity.application_id;
    l.A.isHydrated(r) || l.A.didFetchingApplicationFail(r) || (await o.Ay.fetchApplication(r, !1));
}
async function I() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [i, r, s] = t[0] instanceof d.A ? [t[0].id, t[0].getAvatarURL(void 0, 80), t[1]] : t,
        o = (0, E.A)(i, r, { withMutualFriends: !0, withMutualGuilds: !0, waitForRefetch: !1, ...s });
    if (
        (s?.type !== "popout" && s?.type !== "account_popout") ||
        !a.getConfig({ location: "preloadUserProfileForPopout" }).enabled
    )
        return o;
    let l = u.P.fetchMany([i]),
        c = m(),
        _ = A(i, s?.guildId),
        h = Promise.allSettled([o, c]).then((e) => {
            let [t] = e;
            if ("rejected" !== t.status) return g(i);
        });
    await Promise.all([o, Promise.allSettled([l, c, _, h])]);
}
