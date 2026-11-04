var i = n(945810);
let r = (0, i.mj)({
        name: "2026-09-build-a-bear",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    a = (0, i.mj)({
        name: "2026-09-build-a-bear-cards",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = (0, i.mj)({
        name: "2026-10-build-a-bear-qa",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
n.d(
    t,
    {},
    {
        FX: function (e) {
            let { enabled: t } = r.useConfig({ location: e });
            return t;
        },
        Hd: function (e) {
            let { enabled: t } = a.useConfig({ location: e });
            return t;
        },
        TX: function (e) {
            let { enabled: t } = s.useConfig({ location: e });
            return t;
        },
        w: function (e) {
            let { enabled: t } = r.getConfig({ location: e });
            return t;
        },
        wV: function (e) {
            let { enabled: t } = a.getConfig({ location: e });
            return t;
        },
    },
);
