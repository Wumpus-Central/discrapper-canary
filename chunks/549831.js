(t.d(i, { A: () => S }), t(321073));
var s = t(90644),
    n = t(382483),
    r = t(385113),
    l = t(627363),
    a = t(587895),
    c = t(71393),
    d = t(287809),
    o = t(793480);
async function h(e) {
    try {
        await (0, l.TA)(e, !1);
    } catch {}
}
var u = t(201718),
    j = t(885386),
    x = t(889227),
    v = t(280450),
    m = t(633075),
    f = t(321191),
    g = t(758873),
    N = t(903209);
async function A() {
    let e = j.Q_.getSetting(),
        i = [(0, n.Wq)()];
    (e && i.push((0, n.i$)()), await Promise.allSettled(i));
}
async function p(e) {
    let i = new Set(
        (f.A.getWidgets(e) ?? [])
            .filter((e) => e instanceof m.R)
            .map((e) => e.applicationId)
            .filter((e) => r.A.getFetchState(e) === r.e.NOT_FETCHED),
    );
    0 !== i.size && (await Promise.allSettled([...i].map((e) => (0, n.un)(e))));
}
async function w(e, i) {
    let [t] = (0, g.G)({ userId: e, currentUserId: v.default.getId(), guildId: i }).cards;
    if (t?.type !== "live" || null == t.activity.application_id || (0, s.A)(t.activity)) return;
    let n = t.activity.application_id;
    a.A.isHydrated(n) || a.A.didFetchingApplicationFail(n) || (await l.Ay.fetchApplication(n, !1));
}
async function S() {
    for (var e = arguments.length, i = Array(e), t = 0; t < e; t++) i[t] = arguments[t];
    let [s, n, r] = i[0] instanceof x.A ? [i[0].id, i[0].getAvatarURL(void 0, 80), i[1]] : i,
        l = (0, N.A)(s, n, { withMutualFriends: !0, withMutualGuilds: !0, waitForRefetch: !1, ...r });
    if (r?.type !== "popout" && r?.type !== "account_popout") return l;
    !(function (e) {
        if (d.default.getUser(e)?.bot !== !0 || !(0, o.OC)(Object.values(c.A.getGuilds()), "preloadConjureBotProfile"))
            return;
        let i = a.A.getAppIdForBotUserId(e) ?? e;
        a.A.isHydrated(i) || a.A.isFetchingApplication(i) || a.A.didFetchingApplicationFail(i) || h(i);
    })(s);
    let j = u.P.fetchMany([s]),
        v = A(),
        m = w(s, r?.guildId),
        f = Promise.allSettled([l, v]).then((e) => {
            let [i] = e;
            if ("rejected" !== i.status) return p(s);
        });
    await Promise.all([l, Promise.allSettled([j, v, m, f])]);
}
