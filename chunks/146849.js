t.d(n, { I2: () => s, XQ: () => u, wG: () => d, wr: () => o });
var a = t(945810),
    i = t(731699),
    l = t(735729);
let r = (0, a.mj)({
        name: "2025-04-native-markdown",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    d = (0, a.mj)({
        name: "2026-10-native-markdown-setting",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    u = "enable_native_markdown";
function o(e, n) {
    let { location: t } = e;
    return d.getConfig({ location: t }, n).enabled ? i.A.get(u) : r.getConfig({ location: t }, n).enabled;
}
function s(e) {
    let { location: n } = e,
        t = d.useConfig({ location: n }).enabled,
        a = (0, l.A)(u),
        i = r.useConfig({ location: n }).enabled;
    return { enabled: t ? a : i };
}
