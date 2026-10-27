i.d(n, { C: () => l, Zd: () => o, fk: () => u, ws: () => r });
var a = i(945810);
let d = (0, a.mj)({
        name: "2026-10-pinot-admin",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    t = (0, a.mj)({
        name: "2026-10-pinot-member",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function l(e, n) {
    let { enabled: i } = d.useConfig({ guildId: e ?? "", location: n });
    return null != e && i;
}
function u(e, n) {
    return null != e && d.getConfig({ guildId: e, location: n }).enabled;
}
function o(e) {
    let { enabled: n } = t.useConfig({ location: e });
    return n;
}
function r(e, n) {
    return t.getConfig({ location: e }, n).enabled;
}
(0, a.mj)({
    name: "2026-10-pinot-member-notice",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
