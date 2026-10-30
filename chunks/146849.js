t.d(n, { I2: () => s, XQ: () => d, wG: () => u, wr: () => o });
var a = t(945810),
    i = t(731699),
    r = t(735729);
let l = (0, a.mj)({
        name: "2025-04-native-markdown",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    u = (0, a.mj)({
        name: "2026-10-native-markdown-setting",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    d = "enable_native_markdown";
function o(e, n) {
    let { location: t } = e;
    return u.getConfig({ location: t }, n).enabled ? i.A.get(d) : l.getConfig({ location: t }, n).enabled;
}
function s(e) {
    let { location: n } = e,
        t = u.useConfig({ location: n }).enabled,
        a = (0, r.A)(d),
        i = l.useConfig({ location: n }).enabled;
    return { enabled: t ? a : i };
}
