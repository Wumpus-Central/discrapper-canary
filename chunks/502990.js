let n;
r.d(t, { C: () => s });
var a = r(370336),
    i = r(263449),
    o = r(151122);
let _ = new WeakMap(),
    s = (0, o._I)(() => ({
        name: "FunctionToString",
        setupOnce() {
            n = Function.prototype.toString;
            try {
                Function.prototype.toString = function (...e) {
                    let t = (0, a.HK)(this),
                        r = _.has((0, i.s3)()) && void 0 !== t ? t : this;
                    return n.apply(r, e);
                };
            } catch (e) {}
        },
        setup(e) {
            _.set(e, !0);
        },
    }));
