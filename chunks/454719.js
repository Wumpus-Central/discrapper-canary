i.d(t, { A: () => N }), i(321073);
var s = i(90644),
    n = i(382483),
    r = i(385113),
    a = i(627363),
    l = i(587895),
    c = i(201718),
    o = i(885386),
    d = i(889227),
    h = i(280450),
    u = i(633075),
    j = i(321191),
    x = i(758873),
    v = i(903209);
async function f() {
    let e = o.Q_.getSetting(),
        t = [(0, n.Wq)()];
    e && t.push((0, n.i$)()), await Promise.allSettled(t);
}
async function m(e) {
    let t = new Set(
        (j.A.getWidgets(e) ?? [])
            .filter((e) => e instanceof u.R)
            .map((e) => e.applicationId)
            .filter((e) => r.A.getFetchState(e) === r.e.NOT_FETCHED),
    );
    0 !== t.size && (await Promise.allSettled([...t].map((e) => (0, n.un)(e))));
}
async function A(e, t) {
    let [i] = (0, x.G)({ userId: e, currentUserId: h.default.getId(), guildId: t }).cards;
    if (i?.type !== "live" || null == i.activity.application_id || (0, s.A)(i.activity)) return;
    let n = i.activity.application_id;
    l.A.isHydrated(n) || l.A.didFetchingApplicationFail(n) || (await a.Ay.fetchApplication(n, !1));
}
async function N() {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    let [s, n, r] = t[0] instanceof d.A ? [t[0].id, t[0].getAvatarURL(void 0, 80), t[1]] : t,
        a = (0, v.A)(s, n, { withMutualFriends: !0, withMutualGuilds: !0, waitForRefetch: !1, ...r });
    if (r?.type !== "popout" && r?.type !== "account_popout") return a;
    let l = c.P.fetchMany([s]),
        o = f(),
        h = A(s, r?.guildId),
        u = Promise.allSettled([a, o]).then((e) => {
            let [t] = e;
            if ("rejected" !== t.status) return m(s);
        });
    await Promise.all([a, Promise.allSettled([l, o, h, u])]);
}
