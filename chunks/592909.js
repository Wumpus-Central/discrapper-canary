t.d(n, { A0: () => u, _d: () => o, hd: () => d, rl: () => s });
var r = t(945810);
let a = (0, r.mj)({
        kind: "user",
        name: "2026-07-cod-3pp",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    i = (0, r.mj)({
        kind: "user",
        name: "2026-07-call-of-duty-3pp-expired",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    _ = (0, r.mj)({
        kind: "user",
        name: "2026-07-call-of-duty-3pp-marketing",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    l = (0, r.mj)({
        kind: "user",
        name: "2026-07-call-of-duty-3pp-non-sub-marketing",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function u(e) {
    let { location: n } = e,
        { enabled: t } = a.useConfig({ location: n });
    return t;
}
function d(e) {
    let { location: n } = e,
        { enabled: t } = i.useConfig({ location: n });
    return t;
}
function o(e) {
    let { location: n } = e,
        { enabled: t } = _.useConfig({ location: n });
    return t;
}
function s(e) {
    let { location: n } = e,
        { enabled: t } = l.useConfig({ location: n });
    return t;
}
