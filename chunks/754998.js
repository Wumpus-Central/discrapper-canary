"use strict";
n.d(t, { $: () => l });
var i = n(17928),
    r = n(462887),
    s = n(945810),
    a = n(363195);
let o = (0, s.mj)({
    name: "2026-06-expressive-button-test",
    kind: "user",
    defaultConfig: { buttonStyle: 0 },
    variations: { 0: { buttonStyle: 0 }, 1: { buttonStyle: 1 }, 2: { buttonStyle: 2 } },
});
function l(e) {
    let { buttonStyle: t } = o.useConfig({ location: e }),
        n = (0, i.bG)([a.A], () => (0, r.q)(a.A.theme));
    switch (t) {
        case 1:
            return n ? "primary" : "overlay-primary";
        case 2:
            return "primary";
        default:
            return;
    }
}
