n.d(t, {
    KV: () => c,
    ZP: () => f,
    dj: () => l
});
var r = n(392711),
    i = n.n(r),
    o = n(31775),
    a = n.n(o);
function s(e, t, n) {
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
let l = 100,
    c = [[0, 99]];
function u(e) {
    let t = {};
    return (
        e.forEach((e, n) => {
            t[n] = e;
        }),
        t
    );
}
let d = 5;
class f {
    reset() {
        this._subscriptions = {};
    }
    get(e) {
        return u(this._get(e));
    }
    _get(e) {
        var t;
        return null != (t = this._subscriptions[e]) ? t : new (a())({ max: d });
    }
    clear(e) {
        delete this._subscriptions[e];
    }
    subscribe(e, t, n) {
        let r = this._get(e);
        return !i().isEqual(r.get(t), n) && (r.set(t, n), (this._subscriptions[e] = r), this._onChange(e, u(r)), !0);
    }
    constructor(e) {
        s(this, '_subscriptions', {}), s(this, '_onChange', void 0), (this._onChange = e);
    }
}
