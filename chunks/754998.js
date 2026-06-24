"use strict";
n.d(t, { $: () => r });
let i = (0, n(945810).mj)({
    name: "2026-06-expressive-button-test",
    kind: "user",
    defaultConfig: { buttonVariant: null },
    variations: {
        0: { buttonVariant: null },
        1: { buttonVariant: "overlay-primary" },
        2: { buttonVariant: "primary" },
    },
});
function r(e) {
    let { buttonVariant: t } = i.useConfig({ location: e });
    return t ?? void 0;
}
