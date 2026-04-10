n.d(t, { QG: () => s, xb: () => r });
var i,
    a = n(945810),
    r =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.POPOVER = 1)] = "POPOVER"),
        (i[(i.ANNOUNCEMENT_MODAL = 2)] = "ANNOUNCEMENT_MODAL"),
        i);
let l = (0, a.mj)({
    name: "2026-03-premium-group-popover",
    kind: "user",
    defaultConfig: { variant: 0 },
    variations: { 0: { variant: 0 }, 1: { variant: 1 }, 2: { variant: 2 } },
});
function s(e) {
    let { location: t } = e,
        { variant: n } = l.useConfig({ location: t });
    return n;
}
