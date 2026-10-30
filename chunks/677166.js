t.d(n, { C: () => d, Hg: () => o, Zd: () => f, ao: () => g, fk: () => c, ws: () => h });
var l = t(17928),
    i = t(945810),
    a = t(710195);
let r = (0, i.mj)({
        name: "2026-10-pinot-admin",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    u = (0, i.mj)({
        name: "2026-10-pinot-member",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = (0, i.mj)({
        name: "2026-10-pinot-member-notice",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function d(e, n) {
    let { enabled: t } = r.useConfig({ guildId: e ?? "", location: n });
    return null != e && t;
}
function c(e, n) {
    return null != e && r.getConfig({ guildId: e, location: n }).enabled;
}
function o(e, n) {
    let { enabled: t } = s.useConfig({ guildId: e ?? "", location: n });
    return null != e && t;
}
function f(e) {
    let { enabled: n } = u.useConfig({ location: e });
    return n;
}
function h(e, n) {
    return u.getConfig({ location: e }, n).enabled;
}
function g(e) {
    return (0, l.bG)([a.A], () => u.getConfig({ location: e }, { autoTrackExposure: !1 }).enabled, [e]);
}
(0, i.mj)({
    name: "2026-10-pinot-channel-discoverable",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
