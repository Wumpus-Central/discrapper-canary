n.d(t, { Ay: () => m, Dp: () => T });
var r = n(582128),
    i = n(17928),
    s = n(157695),
    l = n(107195),
    u = n(183636),
    a = n(927813),
    o = n(396813),
    c = n(859703);
let d = (0, n(945810).mj)({
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
    C = 588245 != n.j ? d : null;
var f = n(971276),
    A = n(710969);
let E = 10 * a.A.Millis.MINUTE,
    _ = 30 * a.A.Millis.SECOND;
function g(e, t, n) {
    if (!(!(0, f.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now()))) {
        if ("focused" !== u.A.getState()) {
            null != e && (0, o.Fr)(t, e.ttlMillis);
            return;
        }
        s.A.isFetchingQuestToDeliverByPlacement(t) || (s.A.canRefreshAd(t) && ((0, o.N1)(), (0, o.r8)(t, n)));
    }
}
function T(e) {
    return (0, i.bG)([s.A], () => s.A.questAdDecisionByPlacement.get(e) ?? null, [e]);
}
function m(e) {
    !(function (e) {
        let t = (0, r.useRef)(null),
            n = T(e),
            { enableFastAdRecheck: i } = C.useConfig({ location: "useQuestForAdPlacement" });
        (0, r.useEffect)(() => {
            null != t.current && clearInterval(t.current);
            let r = i ? _ : E;
            g(n, e, "questBar-open"),
                (t.current = setInterval(() => {
                    g(s.A.questAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                }, r));
            let l = t.current;
            return () => {
                null != l && clearInterval(l);
            };
        }, [n, e, i]);
    })(e);
    let t = T(e),
        n = (0, l.Yz)(t?.creative),
        u = (0, i.bG)([c.A], () => (null != n ? (c.A.quests.get(n) ?? null) : null));
    return null == u || (0, A.Ic)(u) ? null : u;
}
