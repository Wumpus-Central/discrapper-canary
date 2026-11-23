n.d(t, { Dp: () => A, kW: () => C, r8: () => _ });
var r = n(582128),
    i = n(323889),
    s = n(855986),
    l = n(157695),
    a = n(907191),
    u = n(107195),
    o = n(797553),
    c = n(122760);
let d = (0, n(945810).mj)({
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
var f = n(977416);
function E(e, t) {
    let n = d.getConfig({ location: "quest-placement-refresh" }).enabled;
    (n || (0, o.N1)(), (0, o.r8)(e, t, n));
}
function A(e) {
    return (0, s.bG)([l.A], () => l.A.getAdDecisionsForPlacement(e)[0] ?? null, [e]);
}
function C(e) {
    (0, a.k)(e, { fetch: E, callerSource: "questBar" });
}
function _(e, t) {
    let n = (0, s.bG)([c.A], () => c.A.getQuestPreviewOverride(t), [t]),
        l = A(e),
        a = (0, u.Yz)(l?.creative),
        o = (0, s.bG)([c.A], () => (null != a ? (c.A.quests.get(a) ?? null) : null), [a]),
        d = null == o || (0, f.Ic)(o) ? null : o,
        E = n ?? d,
        C = (0, u.I4)(l?.creative),
        _ = (0, u.Hc)(l?.creative);
    return (0, r.useMemo)(
        () =>
            null != E
                ? { type: i.p.QUEST, quest: E }
                : null != C
                  ? { type: i.p.BOUNTY, bounty: C }
                  : null != _
                    ? { type: i.p.PLAYABLE, playable: _ }
                    : { type: i.p.NO_FILL },
        [E, C, _],
    );
}
