var t = a(945810),
    l = a(813645),
    i = a(735729);
let r = (0, t.mj)({
        name: "2025-04-native-markdown",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    d = (0, t.mj)({
        name: "2026-10-native-markdown-setting",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    o = "enable_native_markdown";
a.d(
    n,
    {},
    {
        I2: function (e) {
            let { location: n } = e,
                a = d.useConfig({ location: n }).enabled,
                t = (0, i.A)(o),
                l = r.useConfig({ location: n }).enabled;
            return { enabled: a ? t : l };
        },
        XQ: o,
        wG: d,
        wr: function (e, n) {
            let { location: a } = e;
            return d.getConfig({ location: a }, n).enabled ? l.A.get(o) : r.getConfig({ location: a }, n).enabled;
        },
    },
);
