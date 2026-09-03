n.d(t, { Ay: () => m, Dp: () => T });
var i = n(582128),
    l = n(17928),
    r = n(157695),
    s = n(107195),
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
    f = 588245 != n.j ? d : null;
var A = n(971276),
    C = n(710969);
let E = 10 * a.A.Millis.MINUTE,
    _ = 30 * a.A.Millis.SECOND;
function g(e, t, n) {
    if (!(!(0, A.s)() || (null != e && e.fetchedAt + e.ttlMillis >= Date.now()))) {
        if ("focused" !== u.A.getState()) {
            null != e && (0, o.Fr)(t, e.ttlMillis);
            return;
        }
        r.A.isFetchingAdToDeliverByPlacement(t) || (r.A.canRefreshAd(t) && ((0, o.N1)(), (0, o.r8)(t, n)));
    }
}
function T(e) {
    return (0, l.bG)([r.A], () => r.A.deliveryAdDecisionByPlacement.get(e) ?? null, [e]);
}
function m(e) {
    !(function (e) {
        let t = (0, i.useRef)(null),
            n = T(e),
            { enableFastAdRecheck: l } = f.useConfig({ location: "useQuestForAdPlacement" });
        (0, i.useEffect)(() => {
            null != t.current && clearInterval(t.current);
            let i = l ? _ : E;
            g(n, e, "questBar-open"),
                (t.current = setInterval(() => {
                    g(r.A.deliveryAdDecisionByPlacement.get(e) ?? null, e, "questBar-interval");
                }, i));
            let s = t.current;
            return () => {
                null != s && clearInterval(s);
            };
        }, [n, e, l]);
    })(e);
    let t = T(e),
        n = (0, s.Yz)(t?.creative),
        u = (0, l.bG)([c.A], () => (null != n ? (c.A.quests.get(n) ?? null) : null));
    return null == u || (0, C.Ic)(u) ? null : u;
}
