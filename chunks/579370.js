n.d(t, { Rg: () => c, Sy: () => o, jV: () => _, qM: () => A, u: () => E, uL: () => u, yB: () => d });
var i = n(812729),
    r = n.n(i),
    a = n(19575),
    s = n(650583);
let l = new Set([
    s.C8.shift,
    s.C8["right shift"],
    s.C8.ctrl,
    s.C8["right ctrl"],
    s.C8.alt,
    s.C8["right alt"],
    s.C8.meta,
    s.C8["right meta"],
]);
function o(e) {
    if (0 === e.length) return !1;
    let t = 0;
    for (let [n, i] of e) {
        if (n !== s.zY.KEYBOARD_KEY && n !== s.zY.KEYBOARD_MODIFIER_KEY) return !1;
        !(n === s.zY.KEYBOARD_MODIFIER_KEY || l.has(i)) && t++;
    }
    return 1 === t;
}
function d(e) {
    return e.toLowerCase().replace(/_/g, "-");
}
function c(e) {
    return e.bound && !1 === e.matchesTrigger;
}
function u(e, t, n, i) {
    null == i || !r()(t, n) || ((!i.bound || c(i)) && a.Ay.reofferWaylandPortalShortcut(parseInt(e, 10)));
}
function _() {
    return a.Ay.isWaylandGlobalShortcutsAvailable();
}
function E() {
    return a.Ay.canOpenWaylandPortalShortcutSettings();
}
function A() {
    a.Ay.openWaylandPortalShortcutSettings();
}
