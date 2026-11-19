var D,
    a = r(945810);
let t = (0, a.mj)({
        name: "2026-11-norbs",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    R = (0, a.mj)({
        name: "2026-11-norbs-2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    n = new Date(2026, 11, 21);
var E = (((D = {}).DEFAULT = "default"), (D.DEPRECATED = "deprecated"), (D.REMOVED = "removed"), D);
r.d(
    _,
    {},
    {
        Ds: n,
        EX: function (e) {
            let { location: _ } = e,
                r = R.useConfig({ location: _ }).enabled,
                D = t.useConfig({ location: _ }, { autoTrackExposure: !r }).enabled;
            return r ? "removed" : D ? "deprecated" : "default";
        },
        F9: E,
    },
);
