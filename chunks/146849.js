a.d(l, { I2: () => o, XQ: () => d, wG: () => r, wr: () => c });
var n = a(945810),
    t = a(731699),
    i = a(735729);
let s = (0, n.mj)({
        name: "2025-04-native-markdown",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    r = (0, n.mj)({
        name: "2026-10-native-markdown-setting",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    d = "enable_native_markdown";
function c(e, l) {
    let { location: a } = e;
    return r.getConfig({ location: a }, l).enabled ? t.A.get(d) : s.getConfig({ location: a }, l).enabled;
}
function o(e) {
    let { location: l } = e,
        a = r.useConfig({ location: l }).enabled,
        n = (0, i.A)(d),
        t = s.useConfig({ location: l }).enabled;
    return { enabled: a ? n : t };
}
