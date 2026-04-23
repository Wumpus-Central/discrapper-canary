"use strict";
n.d(t, { A: () => s, r: () => i });
let r = (0, n(945810).mj)({
    name: "2026-02-pubsub-bulk-ban-users",
    kind: "user",
    defaultConfig: { usePubSub: !1 },
    variations: { 1: { usePubSub: !0 } },
});
function i(e) {
    let { location: t } = e;
    return r.useConfig({ location: t });
}
let s = r;
