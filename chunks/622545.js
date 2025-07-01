n.d(t, { Z: () => s });
var r = n(388032);
let i = ['a', 'b', 'c', 'd'],
    l = (e) => e;
function a(e, t) {
    let n = {},
        r = Math.min(e.length, i.length);
    for (let l = 0; l < r; ++l) n[i[l]] = (n, r) => t(e[l], r);
    return n;
}
class s {
    asString() {
        return this.transformed(l);
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
                return r.intl.format(r.t.GENERIC_FORMATTED_LIST_TWO, a(this.items, e));
            case 3:
                return r.intl.format(r.t.GENERIC_FORMATTED_LIST_THREE, a(this.items, e));
            default:
                return r.intl.format(r.t.GENERIC_FORMATTED_LIST_FOUR, a(this.items, e));
        }
    }
    constructor(e) {
        var t, n;
        ((n = void 0),
            (t = 'items') in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n),
            (this.items = e));
    }
}
