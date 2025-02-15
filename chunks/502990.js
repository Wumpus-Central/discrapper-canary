let r;
a.d(e, { C: () => c });
var n = a(370336),
    _ = a(263449),
    o = a(151122);
let i = new WeakMap(),
    c = (0, o._I)(() => ({
        name: 'FunctionToString',
        setupOnce() {
            r = Function.prototype.toString;
            try {
                Function.prototype.toString = function (...t) {
                    let e = (0, n.HK)(this),
                        a = i.has((0, _.s3)()) && void 0 !== e ? e : this;
                    return r.apply(a, t);
                };
            } catch (t) {}
        },
        setup(t) {
            i.set(t, !0);
        }
    }));
