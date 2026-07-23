"use strict";
n.d(t, { $: () => o });
var i = n(17928),
    r = n(462887),
    a = n(945810),
    s = n(363195);
let l = (0, a.mj)({
    name: "2026-06-expressive-button-test",
    kind: "user",
    defaultConfig: { buttonStyle: 0 },
    variations: { 0: { buttonStyle: 0 }, 1: { buttonStyle: 1 }, 2: { buttonStyle: 2 } },
});
function o(e) {
    let { buttonStyle: t } = l.useConfig({ location: e }),
        n = (0, i.bG)([s.A], () => (0, r.q)(s.A.theme));
    switch (t) {
        case 1:
            return n ? "primary" : "overlay-primary";
        case 2:
            return "primary";
        default:
            return;
    }
}
