var D,
    t = r(945810);
let a = (0, t.mj)({
        name: "2026-11-norbs",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    n = (0, t.mj)({
        name: "2026-11-norbs-2",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    R = new Date(2026, 11, 21);
var E = (((D = {}).DEFAULT = "default"), (D.DEPRECATED = "deprecated"), (D.REMOVED = "removed"), D);
r.d(
    _,
    {},
    {
        Au: function (e) {
            if (null == e) return !0;
            let _ = new Date(e).getTime();
            return Number.isNaN(_) || _ >= R.getTime();
        },
        Ds: R,
        EX: function (e) {
            let { location: _ } = e,
                r = n.useConfig({ location: _ }).enabled,
                D = a.useConfig({ location: _ }, { autoTrackExposure: !r }).enabled;
            return r ? "removed" : D ? "deprecated" : "default";
        },
        F9: E,
    },
);
