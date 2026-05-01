n.d(t, { Ay: () => c, JM: () => l, LD: () => o });
var i = n(735438),
    a = n.n(i),
    r = n(635377),
    s = n.n(r);
let l = 100,
    o = [[0, 99]];
function d(e) {
    let t = {};
    return (
        e.forEach((e, n) => {
            t[n] = e;
        }),
        t
    );
}
class c {
    _subscriptions = {};
    _onChange;
    constructor(e) {
        this._onChange = e;
    }
    reset() {
        this._subscriptions = {};
    }
    get(e) {
        return d(this._get(e));
    }
    _get(e) {
        return this._subscriptions[e] ?? new (s())({ max: 5 });
    }
    clear(e) {
        delete this._subscriptions[e];
    }
    subscribe(e, t, n) {
        let i = this._get(e);
        return !a().isEqual(i.get(t), n) && (i.set(t, n), (this._subscriptions[e] = i), this._onChange(e, d(i)), !0);
    }
}
