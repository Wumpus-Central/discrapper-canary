n.d(t, { DW: () => r, ux: () => o });
var l = n(945810);
let s = (0, l.mj)({
        kind: "user",
        name: "2026-06-gummy-bears",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    a = (0, l.mj)({
        kind: "user",
        name: "2026-06-gummy-viewers",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function r(e) {
    return a.useConfig({ location: e }).enabled;
}
function o(e) {
    return s.useConfig({ location: e }).enabled;
}
