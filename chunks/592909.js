n.d(t, { A0: () => c, VI: () => o, _d: () => u, hd: () => E, j: () => a, rl: () => d });
var i = n(945810);
let l = (0, i.mj)({
        kind: "user",
        name: "2026-07-cod-3pp",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    r = (0, i.mj)({
        kind: "user",
        name: "2026-07-call-of-duty-3pp-expired",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = (0, i.mj)({
        kind: "user",
        name: "2026-07-call-of-duty-3pp-marketing",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    a = (0, i.mj)({
        kind: "user",
        name: "2026-07-call-of-duty-3pp-non-sub-marketing",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    o = (0, i.mj)({
        kind: "user",
        name: "2026-08-call-of-duty-3pp-nagbar",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function c(e) {
    let { location: t } = e,
        { enabled: n } = l.useConfig({ location: t });
    return n;
}
function E(e) {
    let { location: t } = e,
        { enabled: n } = r.useConfig({ location: t });
    return n;
}
function u(e) {
    let { location: t } = e,
        { enabled: n } = s.useConfig({ location: t });
    return n;
}
function d(e) {
    let { location: t } = e,
        { enabled: n } = a.useConfig({ location: t });
    return n;
}
