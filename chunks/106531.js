n.d(a, { lX: () => d, W1: () => o });
var i = n(945810);
let l = (0, i.mj)({
        name: "2026-03-private-profiles-strict",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
    }),
    t = (0, i.mj)({
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
function d(e) {
    let a = s.useConfig({ location: e }).enabled,
        n = l.useConfig({ location: e }).enabled,
        i = t.useConfig({ location: e }).enabled;
    return a || n || i;
}
function o(e) {
    return (
        s.getConfig({ location: e }).enabled ||
        l.getConfig({ location: e }).enabled ||
        t.getConfig({ location: e }).enabled
    );
}
