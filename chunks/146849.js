var a = n(945810),
    i = n(813645),
    r = n(735729);
let l = (0, a.mj)({
        name: "2025-04-native-markdown",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = (0, a.mj)({
        name: "2026-10-native-markdown-setting",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    o = "enable_native_markdown";
n.d(
    t,
    {},
    {
        I2: function (e) {
            let { location: t } = e,
                n = s.useConfig({ location: t }).enabled,
                a = (0, r.A)(o),
                i = l.useConfig({ location: t }).enabled;
            return { enabled: n ? a : i };
        },
        XQ: o,
        wG: s,
        wr: function (e, t) {
            let { location: n } = e;
            return s.getConfig({ location: n }, t).enabled ? i.A.get(o) : l.getConfig({ location: n }, t).enabled;
        },
    },
);
