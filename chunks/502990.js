let a;
_.d(e, { C: () => i });
var r = _(370336),
    n = _(263449),
    o = _(151122);
let E = new WeakMap(),
    i = (0, o._I)(() => ({
        name: "FunctionToString",
        setupOnce() {
            a = Function.prototype.toString;
            try {
                Function.prototype.toString = function (...t) {
                    let e = (0, r.HK)(this),
                        _ = E.has((0, n.s3)()) && void 0 !== e ? e : this;
                    return a.apply(_, t);
                };
            } catch (t) {}
        },
        setup(t) {
            E.set(t, !0);
        },
    }));
