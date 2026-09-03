n.d(t, { M: () => o, d: () => d });
var i = n(17928),
    r = n(945810),
    a = n(207913),
    s = n(393033);
let l = (0, r.mj)({
    kind: "user",
    name: "2026-07-expressive-modal-v2",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 }, 2: { enabled: !0 } },
});
function o(e) {
    let t = (0, s.W$)(),
        n = (0, i.bG)([a.A], () => a.A.getIsExpressiveModalV2Enabled()),
        r = l.useConfig({ location: e }).enabled;
    return t ? n : r;
}
function d(e) {
    return (0, s.qn)() ? a.A.getIsExpressiveModalV2Enabled() : l.getConfig({ location: e }).enabled;
}
