(i.d(t, { A: () => S }), i(321073));
var s = i(90644),
    n = i(382483),
    r = i(385113),
    l = i(627363),
    a = i(587895),
    c = i(71393),
    d = i(287809),
    o = i(97005);
async function h(e) {
    try {
        await (0, l.TA)(e, !1);
    } catch {}
}
var u = i(201718),
    j = i(253932),
    x = i(889227),
    v = i(280450),
    m = i(633075),
    f = i(321191),
    g = i(758873),
    N = i(903209);
async function A() {
    let e = j.Q_.getSetting(),
        t = [(0, n.Wq)()];
    (e && t.push((0, n.i$)()), await Promise.allSettled(t));
}
async function p(e) {
    let t = new Set(
        (f.A.getWidgets(e) ?? [])
            .filter((e) => e instanceof m.R)
            .map((e) => e.applicationId)
            .filter((e) => r.A.getFetchState(e) === r.e.NOT_FETCHED),
    );
    0 !== t.size && (await Promise.allSettled([...t].map((e) => (0, n.un)(e))));
}
async function w(e, t) {
    let [i] = (0, g.G)({ userId: e, currentUserId: v.default.getId(), guildId: t }).cards;
    if (i?.type !== "live" || null == i.activity.application_id || (0, s.A)(i.activity)) return;
    let n = i.activity.application_id;
    a.A.isHydrated(n) || a.A.didFetchingApplicationFail(n) || (await l.Ay.fetchApplication(n, !1));
}
async function S() {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    let [s, n, r] = t[0] instanceof x.A ? [t[0].id, t[0].getAvatarURL(void 0, 80), t[1]] : t,
        l = (0, N.A)(s, n, { withMutualFriends: !0, withMutualGuilds: !0, waitForRefetch: !1, ...r });
    if (r?.type !== "popout" && r?.type !== "account_popout") return l;
    !(function (e) {
        if (d.default.getUser(e)?.bot !== !0 || !(0, o.OC)(Object.values(c.A.getGuilds()), "preloadConjureBotProfile"))
            return;
        let t = a.A.getAppIdForBotUserId(e) ?? e;
        a.A.isHydrated(t) || a.A.isFetchingApplication(t) || a.A.didFetchingApplicationFail(t) || h(t);
    })(s);
    let j = u.P.fetchMany([s]),
        v = A(),
        m = w(s, r?.guildId),
        f = Promise.allSettled([l, v]).then((e) => {
            let [t] = e;
            if ("rejected" !== t.status) return p(s);
        });
    await Promise.all([l, Promise.allSettled([j, v, m, f])]);
}
