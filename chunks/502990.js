let r;
a.d(e, { C: () => E });
var _ = a(370336),
    n = a(263449),
    o = a(151122);
let i = new WeakMap(),
    E = (0, o._I)(() => ({
        name: "FunctionToString",
        setupOnce() {
            r = Function.prototype.toString;
            try {
                Function.prototype.toString = function (...t) {
                    let e = (0, _.HK)(this),
                        a = i.has((0, n.s3)()) && void 0 !== e ? e : this;
                    return r.apply(a, t);
                };
            } catch (t) {}
        },
        setup(t) {
            i.set(t, !0);
        },
    }));
