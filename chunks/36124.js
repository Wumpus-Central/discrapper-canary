"use strict";
n.d(t, { Ay: () => d, JM: () => o, LD: () => l });
var r = n(735438),
    i = n.n(r),
    a = n(635377),
    s = n.n(a);
let o = 100,
    l = [[0, 99]];
function u(e) {
    let t = {};
    return (
        e.forEach((e, n) => {
            t[n] = e;
        }),
        t
    );
}
let c = 5;
class d {
    _subscriptions = {};
    _onChange;
    constructor(e) {
        this._onChange = e;
    }
    reset() {
        this._subscriptions = {};
    }
    get(e) {
        return u(this._get(e));
    }
    _get(e) {
        return this._subscriptions[e] ?? new (s())({ max: c });
    }
    clear(e) {
        delete this._subscriptions[e];
    }
    subscribe(e, t, n) {
        let r = this._get(e);
        return !i().isEqual(r.get(t), n) && (r.set(t, n), (this._subscriptions[e] = r), this._onChange(e, u(r)), !0);
    }
}
