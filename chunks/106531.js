"use strict";
n.d(t, { lX: () => l, W1: () => o });
var i = n(945810);
let r = (0, i.mj)({
        name: "2026-03-private-profiles-strict",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
    }),
    a = (0, i.mj)({
        name: "2026-03-private-profiles-strict-gb",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
    }),
    s = (0, i.mj)({
        name: "2026-02-private-profiles",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function l(e) {
    let t = s.useConfig({ location: e }).enabled,
        n = r.useConfig({ location: e }).enabled,
        i = a.useConfig({ location: e }).enabled;
    return t || n || i;
}
function o(e) {
    return (
        s.getConfig({ location: e }).enabled ||
        r.getConfig({ location: e }).enabled ||
        a.getConfig({ location: e }).enabled
    );
}
