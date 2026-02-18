i.d(e, { m: () => r, r: () => a });
var n = i(945810),
    l = i(890164);
let s = (0, n.mj)({
        name: "2026-02-activity-privacy-matching",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    r = (t) => {
        let e = (0, l.lX)(t),
            i = s.useConfig({ location: t }).enabled;
        return e || i;
    },
    a = (t) => (0, l.W1)(t) || s.getConfig({ location: t }).enabled;
