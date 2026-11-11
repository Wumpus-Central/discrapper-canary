var a = t(945810),
    i = t(813645),
    l = t(735729);
let r = (0, a.mj)({
        name: "2025-04-native-markdown",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    o = (0, a.mj)({
        name: "2026-10-native-markdown-setting",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    u = "enable_native_markdown";
t.d(
    n,
    {},
    {
        I2: function (e) {
            let { location: n } = e,
                t = o.useConfig({ location: n }).enabled,
                a = (0, l.A)(u),
                i = r.useConfig({ location: n }).enabled;
            return { enabled: t ? a : i };
        },
        XQ: u,
        wG: o,
        wr: function (e, n) {
            let { location: t } = e;
            return o.getConfig({ location: t }, n).enabled ? i.A.get(u) : r.getConfig({ location: t }, n).enabled;
        },
    },
);
