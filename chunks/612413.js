var i = n(945810);
let a = (0, i.mj)({
        kind: "user",
        name: "2026-09-youtube-3p",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    l = (0, i.mj)({
        kind: "user",
        name: "2026-09-youtube-3p-nagbar",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
n.d(
    t,
    {},
    {
        Tp: function (e) {
            let { location: t } = e,
                { enabled: n } = a.getConfig({ location: t });
            return n;
        },
        mh: function (e) {
            let { location: t } = e,
                { enabled: n } = a.useConfig({ location: t });
            return n;
        },
        zA: l,
    },
);
