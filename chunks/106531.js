a.d(n, { lX: () => o, W1: () => b });
var i = a(945810);
let l = (0, i.mj)({
        name: "2026-03-private-profiles-strict",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
    }),
    d = (0, i.mj)({
        name: "2026-03-private-profiles-strict-gb",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
    }),
    t = (0, i.mj)({
        name: "2026-02-private-profiles",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function o(e) {
    let n = t.useConfig({ location: e }).enabled,
        a = l.useConfig({ location: e }).enabled,
        i = d.useConfig({ location: e }).enabled;
    return n || a || i;
}
function b(e) {
    return (
        t.getConfig({ location: e }).enabled ||
        l.getConfig({ location: e }).enabled ||
        d.getConfig({ location: e }).enabled
    );
}
