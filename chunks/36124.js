"use strict";
n.d(t, { Ay: () => c, JM: () => o, LD: () => l });
var i = n(735438),
    r = n.n(i),
    s = n(635377),
    a = n.n(s);
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
        return u(this._get(e));
    }
    _get(e) {
        return this._subscriptions[e] ?? new (a())({ max: 5 });
    }
    clear(e) {
        delete this._subscriptions[e];
    }
    subscribe(e, t, n) {
        let i = this._get(e);
        return !r().isEqual(i.get(t), n) && (i.set(t, n), (this._subscriptions[e] = i), this._onChange(e, u(i)), !0);
    }
}
