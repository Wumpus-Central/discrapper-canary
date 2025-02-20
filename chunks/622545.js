n.d(t, { Z: () => l });
var r = n(388032);
let i = ['a', 'b', 'c', 'd'],
    a = (e) => e;
function o(e, t) {
    let n = {},
        r = Math.min(e.length, i.length);
    for (let a = 0; a < r; ++a) n[i[a]] = (n, r) => t(e[a], r);
    return n;
}
class l {
    asString() {
        return this.transformed(a);
    }
    isEmpty() {
        return 0 === this.items.length;
    }
    transformed(e) {
        switch (this.items.length) {
            case 0:
                return '';
            case 1:
                return e(this.items[0], '');
            case 2:
                return r.NW.format(r.t.GENERIC_FORMATTED_LIST_TWO, o(this.items, e));
            case 3:
                return r.NW.format(r.t.GENERIC_FORMATTED_LIST_THREE, o(this.items, e));
            default:
                return r.NW.format(r.t.GENERIC_FORMATTED_LIST_FOUR, o(this.items, e));
        }
    }
    constructor(e) {
        var t, n;
        (n = void 0),
            (t = 'items') in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n),
            (this.items = e);
    }
}
