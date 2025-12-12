let r;
n.d(t, { C: () => s });
var i = n(886649),
    a = n(509440),
    o = n(688560);
let _ = new WeakMap(),
    s = (0, o._I)(() => ({
        name: "FunctionToString",
        setupOnce() {
            r = Function.prototype.toString;
            try {
                Function.prototype.toString = function (...e) {
                    let t = (0, i.HK)(this),
                        n = _.has((0, a.s3)()) && void 0 !== t ? t : this;
                    return r.apply(n, e);
                };
            } catch (e) {}
        },
        setup(e) {
            _.set(e, !0);
        },
    }));
