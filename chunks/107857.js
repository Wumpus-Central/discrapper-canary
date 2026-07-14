"use strict";
n.d(t, { Iz: () => a, TF: () => l });
var i,
    r = n(945810),
    a =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.NITRO_HOME_TILE = 1)] = "NITRO_HOME_TILE"),
        (i[(i.STICKY_BAR = 2)] = "STICKY_BAR"),
        (i[(i.NITRO_TAB_POPOVER = 3)] = "NITRO_TAB_POPOVER"),
        i);
let s = (0, r.mj)({
    name: "2026-06-monthly-to-yearly-upsells",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2, 3: 3 },
});
function l(e) {
    let { location: t } = e;
    return s.useConfig({ location: t });
}
