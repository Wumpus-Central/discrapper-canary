n.d(t, { Ay: () => E, JM: () => _, LD: () => l });
var i = n(735438),
    r = n.n(i),
    a = n(635377),
    s = n.n(a);
let _ = 100,
    l = [[0, 99]];
function o(e) {
    let t = {};
    return (
        e.forEach((e, n) => {
            t[n] = e;
        }),
        t
    );
}
class E {
    _subscriptions = {};
    _onChange;
    constructor(e) {
        this._onChange = e;
    }
    reset() {
        this._subscriptions = {};
    }
    get(e) {
        return o(this._get(e));
    }
    _get(e) {
        return this._subscriptions[e] ?? new (s())({ max: 5 });
    }
    clear(e) {
        delete this._subscriptions[e];
    }
    subscribe(e, t, n) {
        let i = this._get(e);
        return !r().isEqual(i.get(t), n) && (i.set(t, n), (this._subscriptions[e] = i), this._onChange(e, o(i)), !0);
    }
}
