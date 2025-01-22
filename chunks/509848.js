r.d(n, {
    KV: function () {
        return c;
    },
    ZP: function () {
        return p;
    },
    dj: function () {
        return u;
    }
});
var i = r(392711),
    a = r.n(i),
    o = r(31775),
    s = r.n(o);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = 100,
    c = [[0, 99]];
function d(e) {
    let n = {};
    return (
        e.forEach((e, r) => {
            n[r] = e;
        }),
        n
    );
}
let f = 5;
class p {
    reset() {
        this._subscriptions = {};
    }
    get(e) {
        return d(this._get(e));
    }
    _get(e) {
        var n;
        return null !== (n = this._subscriptions[e]) && void 0 !== n ? n : new (s())({ max: f });
    }
    clear(e) {
        delete this._subscriptions[e];
    }
    subscribe(e, n, r) {
        let i = this._get(e);
        return !a().isEqual(i.get(n), r) && (i.set(n, r), (this._subscriptions[e] = i), this._onChange(e, d(i)), !0);
    }
    constructor(e) {
        l(this, '_subscriptions', {}), l(this, '_onChange', void 0), (this._onChange = e);
    }
}
