n.d(t, {
    KV: () => u,
    ZP: () => f,
    dj: () => l
});
var i = n(392711),
    r = n.n(i),
    a = n(31775),
    s = n.n(a);
function o(e, t, n) {
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
    u = [[0, 99]];
function c(e) {
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
        return c(this._get(e));
    }
    _get(e) {
        var t;
        return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new (s())({ max: d });
    }
    clear(e) {
        delete this._subscriptions[e];
    }
    subscribe(e, t, n) {
        let i = this._get(e);
        return !r().isEqual(i.get(t), n) && (i.set(t, n), (this._subscriptions[e] = i), this._onChange(e, c(i)), !0);
    }
    constructor(e) {
        o(this, '_subscriptions', {}), o(this, '_onChange', void 0), (this._onChange = e);
    }
}
