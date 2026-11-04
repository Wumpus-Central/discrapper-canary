var i = n(812729),
    r = n.n(i),
    a = n(253400),
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
    return e.bound && !1 === e.matchesTrigger;
}
n.d(
    t,
    {},
    {
        Rg: o,
        Sy: function (e) {
            if (0 === e.length) return !1;
            let t = 0;
            for (let [n, i] of e) {
                if (n !== s.zY.KEYBOARD_KEY && n !== s.zY.KEYBOARD_MODIFIER_KEY) return !1;
                !(n === s.zY.KEYBOARD_MODIFIER_KEY || l.has(i)) && t++;
            }
            return 1 === t;
        },
        jV: function () {
            return a.Ay.isWaylandGlobalShortcutsAvailable();
        },
        qM: function () {
            a.Ay.openWaylandPortalShortcutSettings();
        },
        u: function () {
            return a.Ay.canOpenWaylandPortalShortcutSettings();
        },
        uL: function (e, t, n, i) {
            null == i || !r()(t, n) || ((!i.bound || o(i)) && a.Ay.reofferWaylandPortalShortcut(parseInt(e, 10)));
        },
        yB: function (e) {
            return e.toLowerCase().replace(/_/g, "-");
        },
    },
);
