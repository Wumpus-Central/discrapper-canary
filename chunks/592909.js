"use strict";
n.d(t, { A0: () => l, _d: () => o, rl: () => d });
var i = n(945810);
let r = (0, i.mj)({
    kind: "user",
    name: "2026-07-cod-3pp",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
(0, i.mj)({
    kind: "user",
    name: "2026-07-call-of-duty-3pp-expired",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
let a = (0, i.mj)({
        kind: "user",
        name: "2026-07-call-of-duty-3pp-marketing",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = (0, i.mj)({
        kind: "user",
        name: "2026-07-call-of-duty-3pp-non-sub-marketing",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function l(e) {
    let { location: t } = e,
        { enabled: n } = r.useConfig({ location: t });
    return n;
}
function o(e) {
    let { location: t } = e,
        { enabled: n } = a.useConfig({ location: t });
    return n;
}
function d(e) {
    let { location: t } = e,
        { enabled: n } = s.useConfig({ location: t });
    return n;
}
