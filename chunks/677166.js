i.d(e, { C: () => u, Hg: () => r, Zd: () => f, fk: () => o, ws: () => b });
var d = i(945810);
let t = (0, d.mj)({
        name: "2026-10-pinot-admin",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    a = (0, d.mj)({
        name: "2026-10-pinot-member",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    l = (0, d.mj)({
        name: "2026-10-pinot-member-notice",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function u(n, e) {
    let { enabled: i } = t.useConfig({ guildId: n ?? "", location: e });
    return null != n && i;
}
function o(n, e) {
    return null != n && t.getConfig({ guildId: n, location: e }).enabled;
}
function r(n, e) {
    let { enabled: i } = l.useConfig({ guildId: n ?? "", location: e });
    return null != n && i;
}
function f(n) {
    let { enabled: e } = a.useConfig({ location: n });
    return e;
}
function b(n, e) {
    return a.getConfig({ location: n }, e).enabled;
}
