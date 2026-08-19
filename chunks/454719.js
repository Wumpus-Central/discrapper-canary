n.d(t, { A: () => R }), n(321073);
var i = n(90644),
    s = n(382483),
    a = n(385113),
    l = n(627363),
    r = n(587895),
    E = n(201718),
    o = n(885386),
    c = n(889227),
    d = n(280450),
    _ = n(633075),
    S = n(321191),
    u = n(758873),
    A = n(903209);
async function I() {
    let e = o.Q_.getSetting(),
        t = [(0, s.Wq)()];
    e && t.push((0, s.i$)()), await Promise.allSettled(t);
}
async function h(e) {
    let t = new Set(
        (S.A.getWidgets(e) ?? [])
            .filter((e) => e instanceof _.R)
            .map((e) => e.applicationId)
            .filter((e) => a.A.getFetchState(e) === a.e.NOT_FETCHED),
    );
    0 !== t.size && (await Promise.allSettled([...t].map((e) => (0, s.un)(e))));
}
async function T(e, t) {
    let [n] = (0, u.G)({ userId: e, currentUserId: d.default.getId(), guildId: t }).cards;
    if (n?.type !== "live" || null == n.activity.application_id || (0, i.A)(n.activity)) return;
    let s = n.activity.application_id;
    r.A.isHydrated(s) || r.A.didFetchingApplicationFail(s) || (await l.Ay.fetchApplication(s, !1));
}
async function R() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [i, s, a] = t[0] instanceof c.A ? [t[0].id, t[0].getAvatarURL(void 0, 80), t[1]] : t,
        l = (0, A.A)(i, s, { withMutualFriends: !0, withMutualGuilds: !0, waitForRefetch: !1, ...a });
    if (a?.type !== "popout" && a?.type !== "account_popout") return l;
    let r = E.P.fetchMany([i]),
        o = I(),
        d = T(i, a?.guildId),
        _ = Promise.allSettled([l, o]).then((e) => {
            let [t] = e;
            if ("rejected" !== t.status) return h(i);
        });
    await Promise.all([l, Promise.allSettled([r, o, d, _])]);
}
