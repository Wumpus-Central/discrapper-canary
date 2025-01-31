function i(e, t, n) {
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
function r(e, t, n) {
    a(e, t), t.set(e, n);
}
function a(e, t) {
    if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
function s(e, t) {
    var n = u(e, t, 'get');
    return o(e, n);
}
function o(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function l(e, t, n) {
    var i = u(e, t, 'set');
    return c(e, i, n), n;
}
function u(e, t, n) {
    if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
    return t.get(e);
}
function c(e, t, n) {
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
        r(this, d, {
            writable: !0,
            value: void 0
        }),
            i(this, 'register', (e) => {
                s(this, d).push(e);
            }),
            i(this, 'unregister', (e) => {
                let t;
                for (; -1 !== (t = s(this, d).indexOf(e)); ) s(this, d).splice(t, 1);
            }),
            i(this, 'backendChanged', (e) => {
                for (let t of s(this, d)) t.backendChanged(e);
            }),
            l(this, d, []);
    }
}
