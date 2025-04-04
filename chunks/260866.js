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
n.d(t, {
    $o: () => _,
    NE: () => d,
    P1: () => c,
    P2: () => f,
    ie: () => i,
    jb: () => s,
    kn: () => o,
    qR: () => u,
    x3: () => l
}),
    n(301563),
    n(47120);
let i = 'data-list-item-id',
    o = 'data-list-id',
    a = '___';
function s(e, t) {
    return ''.concat(e).concat(a).concat(t);
}
function l(e) {
    return e.split(a)[1];
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return '['.concat(t, '="').concat(e, '"]');
}
function u(e, t) {
    return ''.concat(e, '-').concat(t);
}
function d(e, t, n) {
    return ''.concat(e, '-').concat(t, '-').concat(n);
}
function f(e, t) {
    let n = !1;
    return function () {
        for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
        n || (e(...i), (n = !0), setTimeout(() => (n = !1), t));
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
        r(this, 'makeHandler', void 0), r(this, 'handlers', void 0), (this.makeHandler = e), (this.handlers = new Map()), (this.makeHandler = e);
    }
}
