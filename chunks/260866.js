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
n.d(t, {
    $o: () => _,
    NE: () => d,
    P1: () => u,
    P2: () => f,
    ie: () => r,
    jb: () => o,
    kn: () => a,
    qR: () => c,
    x3: () => l
}),
    n(47120);
let r = 'data-list-item-id',
    a = 'data-list-id',
    s = '___';
function o(e, t) {
    return ''.concat(e).concat(s).concat(t);
}
function l(e) {
    return e.split(s)[1];
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
    return '['.concat(t, '="').concat(e, '"]');
}
function c(e, t) {
    return ''.concat(e, '-').concat(t);
}
function d(e, t, n) {
    return ''.concat(e, '-').concat(t, '-').concat(n);
}
function f(e, t) {
    let n = !1;
    return function () {
        for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
        n || (e(...r), (n = !0), setTimeout(() => (n = !1), t));
    };
}
class _ {
    get(e) {
        let t = this.handlers.get(e);
        return null == t && ((t = this.makeHandler(e)), this.handlers.set(e, t)), t;
    }
    clean() {
        delete this.handlers, (this.handlers = new Map());
    }
    constructor(e) {
        i(this, 'makeHandler', void 0), i(this, 'handlers', void 0), (this.makeHandler = e), (this.handlers = new Map()), (this.makeHandler = e);
    }
}
