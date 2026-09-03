n.d(t, { H6: () => o, Jy: () => l, R8: () => s });
var i = n(945810);
let r = (0, i.mj)({
        name: "2026-04-kestrel",
        kind: "user",
        defaultConfig: { enabled: !1, threshold: 0 },
        variations: {
            0: { enabled: !1, threshold: 0 },
            1: { enabled: !0, threshold: 15 },
            2: { enabled: !0, threshold: 20 },
            3: { enabled: !0, threshold: 25 },
        },
    }),
    a = (0, i.mj)({
        name: "2026-08-kestrel-ga",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function s(e) {
    let { location: t } = e;
    if (a.getConfig({ location: t }).enabled) return { enabled: !0, threshold: 20, isGA: !0 };
    let n = r.getConfig({ location: t });
    return { enabled: n.enabled, threshold: n.threshold, isGA: !1 };
}
function l(e, t) {
    return e.enabled ? Math.max(1048576 * e.threshold, t) : t;
}
function o(e) {
    return e.isGA
        ? "kestrel_ga"
        : e.enabled
          ? 15 === e.threshold
              ? "kestrel_a"
              : 20 === e.threshold
                ? "kestrel_b"
                : 25 === e.threshold
                  ? "kestrel_c"
                  : "unknown"
          : "control";
}
