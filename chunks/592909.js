t.d(n, { A0: () => _, _d: () => u, rl: () => d });
var r = t(945810);
let a = (0, r.mj)({
    kind: "user",
    name: "2026-07-cod-3pp",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
(0, r.mj)({
    kind: "user",
    name: "2026-07-call-of-duty-3pp-expired",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let i = (0, r.mj)({
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
function _(e) {
    let { location: n } = e,
        { enabled: t } = a.useConfig({ location: n });
    return t;
}
function u(e) {
    let { location: n } = e,
        { enabled: t } = i.useConfig({ location: n });
    return t;
}
function d(e) {
    let { location: n } = e,
        { enabled: t } = l.useConfig({ location: n });
    return t;
}
