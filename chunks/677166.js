i.d(e, { C: () => r, Hg: () => b, Zd: () => g, ao: () => c, fk: () => f, ws: () => s });
var t = i(17928),
    a = i(945810),
    u = i(710195);
let d = (0, a.mj)({
        name: "2026-10-pinot-admin",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    l = (0, a.mj)({
        name: "2026-10-pinot-member",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    o = (0, a.mj)({
        name: "2026-10-pinot-member-notice",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function r(n, e) {
    let { enabled: i } = d.useConfig({ guildId: n ?? "", location: e });
    return null != n && i;
}
function f(n, e) {
    return null != n && d.getConfig({ guildId: n, location: e }).enabled;
}
function b(n, e) {
    let { enabled: i } = o.useConfig({ guildId: n ?? "", location: e });
    return null != n && i;
}
function g(n) {
    let { enabled: e } = l.useConfig({ location: n });
    return e;
}
function s(n, e) {
    return l.getConfig({ location: n }, e).enabled;
}
function c(n) {
    return (0, t.bG)([u.A], () => l.getConfig({ location: n }, { autoTrackExposure: !1 }).enabled, [n]);
}
