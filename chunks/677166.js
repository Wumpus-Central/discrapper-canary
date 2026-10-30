a.d(n, { C: () => S, Hg: () => E, Zd: () => f, Zu: () => _, ao: () => b, fk: () => s, ws: () => C });
var i = a(17928),
    l = a(945810),
    t = a(710195);
let d = (0, l.mj)({
        name: "2026-10-pinot-admin",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    u = (0, l.mj)({
        name: "2026-10-pinot-member",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    o = (0, l.mj)({
        name: "2026-10-pinot-member-notice",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    r = (0, l.mj)({
        name: "2026-10-pinot-channel-discoverable",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function S(e, n) {
    let { enabled: a } = d.useConfig({ guildId: e ?? "", location: n });
    return null != e && a;
}
function s(e, n) {
    return null != e && d.getConfig({ guildId: e, location: n }).enabled;
}
function E(e, n) {
    let { enabled: a } = o.useConfig({ guildId: e ?? "", location: n });
    return null != e && a;
}
function _(e, n) {
    let { enabled: a } = r.useConfig({ guildId: e ?? "", location: n });
    return null != e && a;
}
function f(e) {
    let { enabled: n } = u.useConfig({ location: e });
    return n;
}
function C(e, n) {
    return u.getConfig({ location: e }, n).enabled;
}
function b(e) {
    return (0, i.bG)([t.A], () => u.getConfig({ location: e }, { autoTrackExposure: !1 }).enabled, [e]);
}
