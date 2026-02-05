"use strict";
n.d(t, { $: () => c });
var r = n(143236);
let i = 160,
    a = 500;
var s = (function (e) {
    return (e.VERTICAL = "vertical"), (e.HORIZONTAL = "horizontal"), e;
})(s || {});
let o = { open: !1, orientation: null };
function l() {
    try {
        return window.outerWidth - window.innerWidth;
    } catch (e) {
        return 0;
    }
}
function u() {
    try {
        return window.outerHeight - window.innerHeight;
    } catch (e) {
        return 0;
    }
}
class c extends r.EventEmitter {
    constructor() {
        super(), setInterval(() => this.check(), a);
    }
    get orientations() {
        return Object.values(s);
    }
    get state() {
        return o;
    }
    check() {
        let e = l() > i,
            t = u() > i,
            n = e ? "vertical" : "horizontal";
        if (!(t && e) && (e || t)) {
            let e = o.open;
            (o = { open: !0, orientation: n }), (e && o.orientation === n) || this.emit("changed", o);
        } else o.open && ((o.open = !1), this.emit("changed", o));
    }
}
