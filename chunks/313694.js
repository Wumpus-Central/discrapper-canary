function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function i(e, t, n) {
    o(e, t), t.set(e, n);
}
function o(e, t) {
    if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
function a(e, t) {
    var n = c(e, t, 'get');
    return s(e, n);
}
function s(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function l(e, t, n) {
    var r = c(e, t, 'set');
    return u(e, r, n), n;
}
function c(e, t, n) {
    if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
    return t.get(e);
}
function u(e, t, n) {
    if (t.set) t.set.call(e, n);
    else {
        if (!t.writable) throw TypeError('attempted to set read only private field');
        t.value = n;
    }
}
n.d(t, { J: () => f });
var d = new WeakMap();
class f {
    constructor() {
        i(this, d, {
            writable: !0,
            value: void 0
        }),
            r(this, 'register', (e) => {
                a(this, d).push(e);
            }),
            r(this, 'unregister', (e) => {
                let t;
                for (; -1 !== (t = a(this, d).indexOf(e)); ) a(this, d).splice(t, 1);
            }),
            r(this, 'backendChanged', (e) => {
                for (let t of a(this, d)) t.backendChanged(e);
            }),
            l(this, d, []);
    }
}
