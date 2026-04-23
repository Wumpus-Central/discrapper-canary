"use strict";
let r;
n.d(t, { Z: () => l });
var i = n(630449),
    o = n(688331),
    a = n(690094);
let s = new WeakMap(),
    l = (0, o._C)(() => ({
        name: "FunctionToString",
        setupOnce() {
            r = Function.prototype.toString;
            try {
                Function.prototype.toString = function (...e) {
                    let t = (0, a.sp)(this),
                        n = s.has((0, i.KU)()) && void 0 !== t ? t : this;
                    return r.apply(n, e);
                };
            } catch (e) {}
        },
        setup(e) {
            s.set(e, !0);
        },
    }));
