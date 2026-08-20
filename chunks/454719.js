i.d(t, { A: () => u }), i(321073);
var E = i(90644),
    s = i(382483),
    n = i(385113),
    r = i(627363),
    l = i(587895),
    a = i(201718),
    _ = i(885386),
    S = i(889227),
    A = i(280450),
    c = i(633075),
    o = i(321191),
    I = i(758873),
    T = i(903209);
async function d() {
    let e = _.Q_.getSetting(),
        t = [(0, s.Wq)()];
    e && t.push((0, s.i$)()), await Promise.allSettled(t);
}
async function R(e) {
    let t = new Set(
        (o.A.getWidgets(e) ?? [])
            .filter((e) => e instanceof c.R)
            .map((e) => e.applicationId)
            .filter((e) => n.A.getFetchState(e) === n.e.NOT_FETCHED),
    );
    0 !== t.size && (await Promise.allSettled([...t].map((e) => (0, s.un)(e))));
}
async function N(e, t) {
    let [i] = (0, I.G)({ userId: e, currentUserId: A.default.getId(), guildId: t }).cards;
    if (i?.type !== "live" || null == i.activity.application_id || (0, E.A)(i.activity)) return;
    let s = i.activity.application_id;
    l.A.isHydrated(s) || l.A.didFetchingApplicationFail(s) || (await r.Ay.fetchApplication(s, !1));
}
async function u() {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    let [E, s, n] = t[0] instanceof S.A ? [t[0].id, t[0].getAvatarURL(void 0, 80), t[1]] : t,
        r = (0, T.A)(E, s, { withMutualFriends: !0, withMutualGuilds: !0, waitForRefetch: !1, ...n });
    if (n?.type !== "popout" && n?.type !== "account_popout") return r;
    let l = a.P.fetchMany([E]),
        _ = d(),
        A = N(E, n?.guildId),
        c = Promise.allSettled([r, _]).then((e) => {
            let [t] = e;
            if ("rejected" !== t.status) return R(E);
        });
    await Promise.all([r, Promise.allSettled([l, _, A, c])]);
}
