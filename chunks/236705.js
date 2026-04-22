"use strict";
n.d(t, { $: () => o });
var r,
    i = n(143236),
    s = (((r = s || {}).VERTICAL = "vertical"), (r.HORIZONTAL = "horizontal"), r);
let a = { open: !1, orientation: null };
class o extends i.EventEmitter {
    constructor() {
        super(), setInterval(() => this.check(), 500);
    }
    get orientations() {
        return Object.values(s);
    }
    get state() {
        return a;
    }
    check() {
        let e =
                (function () {
                    try {
                        return window.outerWidth - window.innerWidth;
                    } catch (e) {
                        return 0;
                    }
                })() > 160,
            t =
                (function () {
                    try {
                        return window.outerHeight - window.innerHeight;
                    } catch (e) {
                        return 0;
                    }
                })() > 160,
            n = e ? "vertical" : "horizontal";
        if (!(t && e) && (e || t)) {
            let e = a.open;
            (a = { open: !0, orientation: n }), (e && a.orientation === n) || this.emit("changed", a);
        } else a.open && ((a.open = !1), this.emit("changed", a));
    }
}
