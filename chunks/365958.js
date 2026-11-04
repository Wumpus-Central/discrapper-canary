(i.d(t, { A: () => N }), i(321073));
var s = i(90644),
    n = i(382483),
    r = i(385113),
    l = i(627363),
    a = i(587895),
    c = i(71393),
    d = i(287809),
    o = i(499466),
    h = i(201718),
    u = i(253932),
    j = i(619019),
    x = i(46653),
    v = i(633075),
    m = i(851767),
    f = i(758873),
    g = i(917445);
async function N() {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    let [N, A, p] = t[0] instanceof j.A ? [t[0].id, t[0].getAvatarURL(void 0, 80), t[1]] : t,
        w = (0, g.A)(N, A, { withMutualFriends: !0, withMutualGuilds: !0, waitForRefetch: !1, ...p });
    if (p?.type !== "popout" && p?.type !== "account_popout") return w;
    !(function (e) {
        if (d.default.getUser(e)?.bot !== !0 || !(0, o.OC)(Object.values(c.A.getGuilds()), "preloadConjureBotProfile"))
            return;
        let t = a.A.getAppIdForBotUserId(e) ?? e;
        a.A.isHydrated(t) ||
            a.A.isFetchingApplication(t) ||
            a.A.didFetchingApplicationFail(t) ||
            (async function (e) {
                try {
                    await (0, l.TA)(e, !1);
                } catch {}
            })(t);
    })(N);
    let S = h.P.fetchMany([N]),
        b = (async function () {
            let e = u.Q_.getSetting(),
                t = [(0, n.Wq)()];
            (e && t.push((0, n.i$)()), await Promise.allSettled(t));
        })(),
        y = (async function (e, t) {
            let [i] = (0, f.G)({ userId: e, currentUserId: x.default.getId(), guildId: t }).cards;
            if (i?.type !== "live" || null == i.activity.application_id || (0, s.A)(i.activity)) return;
            let n = i.activity.application_id;
            a.A.isHydrated(n) || a.A.didFetchingApplicationFail(n) || (await l.Ay.fetchApplication(n, !1));
        })(N, p?.guildId),
        C = Promise.allSettled([w, b]).then((e) => {
            let [t] = e;
            if ("rejected" !== t.status)
                return (async function (e) {
                    let t = new Set(
                        (m.A.getWidgets(e) ?? [])
                            .filter((e) => e instanceof v.R)
                            .map((e) => e.applicationId)
                            .filter((e) => r.A.getFetchState(e) === r.e.NOT_FETCHED),
                    );
                    0 !== t.size && (await Promise.allSettled([...t].map((e) => (0, n.un)(e))));
                })(N);
        });
    await Promise.all([w, Promise.allSettled([S, b, y, C])]);
}
