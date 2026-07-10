"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(945810),
    a = n(952818),
    s = n(734066),
    l = n(888916);
let o = (0, r.mj)({
    kind: "user",
    name: "2026-07-autoclipping-marketing",
    defaultConfig: { enableMarketing: !1 },
    variations: { 1: { enableMarketing: !0 } },
});
function d(e) {
    let t = (0, s.sw)(),
        n = (0, l.As)(),
        r = (0, i.bG)([a.Ay], () => a.Ay.getGamesSeen(!1).length > 0),
        d = o.useConfig({ location: e }).enableMarketing;
    return t && n && r && d;
}
