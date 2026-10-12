(t.d(i, { A: () => g }), t(321073));
var s = t(90644),
    n = t(382483),
    r = t(385113),
    l = t(627363),
    a = t(587895),
    c = t(201718),
    d = t(885386),
    o = t(889227),
    h = t(280450),
    u = t(633075),
    j = t(321191),
    x = t(758873),
    v = t(903209);
async function m() {
    let e = d.Q_.getSetting(),
        i = [(0, n.Wq)()];
    (e && i.push((0, n.i$)()), await Promise.allSettled(i));
}
async function f(e) {
    let i = new Set(
        (j.A.getWidgets(e) ?? [])
            .filter((e) => e instanceof u.R)
            .map((e) => e.applicationId)
            .filter((e) => r.A.getFetchState(e) === r.e.NOT_FETCHED),
    );
    0 !== i.size && (await Promise.allSettled([...i].map((e) => (0, n.un)(e))));
}
async function N(e, i) {
    let [t] = (0, x.G)({ userId: e, currentUserId: h.default.getId(), guildId: i }).cards;
    if (t?.type !== "live" || null == t.activity.application_id || (0, s.A)(t.activity)) return;
    let n = t.activity.application_id;
    a.A.isHydrated(n) || a.A.didFetchingApplicationFail(n) || (await l.Ay.fetchApplication(n, !1));
}
async function g() {
    for (var e = arguments.length, i = Array(e), t = 0; t < e; t++) i[t] = arguments[t];
    let [s, n, r] = i[0] instanceof o.A ? [i[0].id, i[0].getAvatarURL(void 0, 80), i[1]] : i,
        l = (0, v.A)(s, n, { withMutualFriends: !0, withMutualGuilds: !0, waitForRefetch: !1, ...r });
    if (r?.type !== "popout" && r?.type !== "account_popout") return l;
    let a = c.P.fetchMany([s]),
        d = m(),
        h = N(s, r?.guildId),
        u = Promise.allSettled([l, d]).then((e) => {
            let [i] = e;
            if ("rejected" !== i.status) return f(s);
        });
    await Promise.all([l, Promise.allSettled([a, d, h, u])]);
}
