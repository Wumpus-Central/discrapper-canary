"use strict";
function r(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
function i(e, t) {
    var n,
        r,
        i = s(e, t, "get");
    return (n = e), (r = i).get ? r.get.call(n) : r.value;
}
function s(e, t, n) {
    if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
}
n.d(t, { V: () => o });
var a = new WeakMap();
class o {
    constructor() {
        !(function (e, t, n) {
            (function (e, t) {
                if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
            })(e, t),
                t.set(e, n);
        })(this, a, { writable: !0, value: void 0 }),
            r(this, "register", (e) => {
                i(this, a).push(e);
            }),
            r(this, "unregister", (e) => {
                let t;
                for (; -1 !== (t = i(this, a).indexOf(e)); ) i(this, a).splice(t, 1);
            }),
            r(this, "backendChanged", (e) => {
                for (let t of i(this, a)) t.backendChanged(e);
            }),
            (function (e, t, n) {
                var r = s(e, t, "set"),
                    i = e,
                    a = r,
                    o = n;
                if (a.set) a.set.call(i, o);
                else {
                    if (!a.writable) throw TypeError("attempted to set read only private field");
                    a.value = o;
                }
            })(this, a, []);
    }
}
