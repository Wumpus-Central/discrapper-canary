n.d(t, { Dp: () => T, kW: () => _, r8: () => p });
var i = n(582128),
    r = n(323889),
    s = n(855986),
    l = n(157695),
    u = n(183636),
    a = n(971276),
    o = n(887947),
    c = n(107195);
function d(e, t, n, i) {
    if (!(!(0, a.s)() || (e.length > 0 && e.every((e) => (0, c.sv)(e))))) {
        if ("focused" !== u.A.getState()) {
            e.length > 0 && (0, o.F)(t, Math.min(...e.map((e) => e.ttlMillis)));
            return;
        }
        !l.A.isFetchingAdToDeliverByPlacement(t) && l.A.canRefreshAd(t) && n(t, i);
    }
}
var f = n(153229),
    A = n(122760);
let C = (0, n(945810).mj)({
    name: "2026-11-return-full-quest-status-in-decision",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
        2: { enabled: !0 },
        3: { enabled: !0 },
        4: { enabled: !0 },
        5: { enabled: !0 },
        6: { enabled: !0 },
        7: { enabled: !0 },
        8: { enabled: !0 },
        9: { enabled: !0 },
    },
});
var g = n(977416);
function E(e, t) {
    let n = C.getConfig({ location: "quest-placement-refresh" }).enabled;
    (n || (0, f.N1)(), (0, f.r8)(e, t, n));
}
function T(e) {
    return (0, s.bG)([l.A], () => l.A.getAdDecisionsForPlacement(e)[0] ?? null, [e]);
}
function _(e) {
    !(function (e, t) {
        let { fetch: n, callerSource: r } = t,
            u = (0, s.bG)([l.A], () => (null == e ? null : l.A.getAdDecisionsForPlacement(e)), [e]);
        (0, i.useEffect)(() => {
            if (null == e || null == u) return;
            d(u, e, n, `${r}-open`);
            let t = setInterval(() => {
                d(l.A.getAdDecisionsForPlacement(e), e, n, `${r}-interval`);
            }, 3e4);
            return () => clearInterval(t);
        }, [u, e, n, r]);
    })(e, { fetch: E, callerSource: "questBar" });
}
function p(e, t) {
    let n = (0, s.bG)([A.A], () => A.A.getQuestPreviewOverride(t), [t]),
        l = T(e),
        u = (0, c.Yz)(l?.creative),
        a = (0, s.bG)([A.A], () => (null != u ? (A.A.quests.get(u) ?? null) : null), [u]),
        o = null == a || (0, g.Ic)(a) ? null : a,
        d = n ?? o,
        f = (0, c.I4)(l?.creative),
        C = (0, c.Hc)(l?.creative);
    return (0, i.useMemo)(
        () =>
            null != d
                ? { type: r.p.QUEST, quest: d }
                : null != f
                  ? { type: r.p.BOUNTY, bounty: f }
                  : null != C
                    ? { type: r.p.PLAYABLE, playable: C }
                    : { type: r.p.NO_FILL },
        [d, f, C],
    );
}
