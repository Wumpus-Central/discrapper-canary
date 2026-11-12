n.d(t, { Dp: () => T, kW: () => _, r8: () => p });
var r = n(582128),
    s = n(323889),
    i = n(855986),
    l = n(157695),
    u = n(107195),
    a = n(183636),
    o = n(927813),
    c = n(153229),
    d = n(122760);
let f = (0, n(945810).mj)({
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
var A = n(971276),
    C = n(977416);
let E = 30 * o.A.Millis.SECOND;
function g(e, t, n) {
    if (!(0, A.s)() || (0, u.sv)(e)) return;
    if ("focused" !== a.A.getState()) {
        null != e && (0, c.Fr)(t, e.ttlMillis);
        return;
    }
    if (l.A.isFetchingAdToDeliverByPlacement(t) || !l.A.canRefreshAd(t)) return;
    let r = f.getConfig({ location: "quest-placement-refresh" }).enabled;
    (r || (0, c.N1)(), (0, c.r8)(t, n, r));
}
function T(e) {
    return (0, i.bG)([l.A], () => l.A.getAdDecisionsForPlacement(e)[0] ?? null, [e]);
}
function _(e) {
    let t = (0, r.useRef)(null),
        n = T(e);
    (0, r.useEffect)(() => {
        (null != t.current && clearInterval(t.current),
            g(n, e, "questBar-open"),
            (t.current = setInterval(() => {
                g(l.A.getAdDecisionsForPlacement(e)[0] ?? null, e, "questBar-interval");
            }, E)));
        let r = t.current;
        return () => {
            null != r && clearInterval(r);
        };
    }, [n, e]);
}
function p(e, t) {
    let n = (0, i.bG)([d.A], () => d.A.getQuestPreviewOverride(t), [t]),
        l = T(e),
        a = (0, u.Yz)(l?.creative),
        o = (0, i.bG)([d.A], () => (null != a ? (d.A.quests.get(a) ?? null) : null), [a]),
        c = null == o || (0, C.Ic)(o) ? null : o,
        f = n ?? c,
        A = (0, u.I4)(l?.creative),
        E = (0, u.Hc)(l?.creative);
    return (0, r.useMemo)(
        () =>
            null != f
                ? { type: s.p.QUEST, quest: f }
                : null != A
                  ? { type: s.p.BOUNTY, bounty: A }
                  : null != E
                    ? { type: s.p.PLAYABLE, playable: E }
                    : { type: s.p.NO_FILL },
        [f, A, E],
    );
}
