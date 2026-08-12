n.d(t, { Ay: () => g, Dp: () => _ });
var r = n(582128),
    s = n(17928),
    i = n(183636),
    l = n(927813),
    u = n(352774),
    a = n(859703);
let o = (0, n(945810).mj)({
        name: "2026-07-ad-recheck-interval-experiment",
        kind: "user",
        defaultConfig: { enableFastAdRecheck: !1 },
        variations: {
            1: { enableFastAdRecheck: !1 },
            2: { enableFastAdRecheck: !0 },
            3: { enableFastAdRecheck: !0 },
            4: { enableFastAdRecheck: !0 },
            5: { enableFastAdRecheck: !0 },
        },
    }),
    c = 88245 != n.j ? o : null;
var d = n(971276),
    C = n(710969);
let f = 10 * l.A.Millis.MINUTE,
    A = 30 * l.A.Millis.SECOND;
function E(e, t, n) {
    if (!(!(0, d.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now()))) {
        if ("focused" !== i.A.getState()) {
            null != e && (0, u.Fr)(t, e.ttlMillis);
            return;
        }
        a.A.isFetchingQuestToDeliverByPlacement(t) || (a.A.canRefreshAd(t) && ((0, u.N1)(), (0, u.r8)(t, n)));
    }
}
function _(e) {
    return (0, s.bG)([a.A], () => a.A.questAdDecisionByPlacement.get(e) ?? null, [e]);
}
function g(e) {
    !(function (e) {
        let t = (0, r.useRef)(null),
            n = _(e),
            { enableFastAdRecheck: s } = c.useConfig({ location: "useQuestForAdPlacement" });
        (0, r.useEffect)(() => {
            null != t.current && clearInterval(t.current);
            let r = s ? A : f;
            E(n, e, "questBar-open"),
                (t.current = setInterval(() => {
                    E(a.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                }, r));
            let i = t.current;
            return () => {
                null != i && clearInterval(i);
            };
        }, [n, e, s]);
    })(e);
    let t = _(e),
        n = (0, s.bG)([a.A], () => (t?.questId != null ? (a.A.quests.get(t.questId) ?? null) : null));
    return null == n || (0, C.Ic)(n) ? null : n;
}
