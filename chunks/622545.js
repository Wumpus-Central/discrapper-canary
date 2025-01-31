n.d(t, { Z: () => s });
var i = n(388032);
let l = ['a', 'b', 'c', 'd'],
    a = (e) => e;
function r(e, t) {
    let n = {},
        i = Math.min(e.length, l.length);
    for (let a = 0; a < i; ++a) n[l[a]] = (n, i) => t(e[a], i);
    return n;
}
class s {
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
                return i.intl.format(i.t.GENERIC_FORMATTED_LIST_TWO, r(this.items, e));
            case 3:
                return i.intl.format(i.t.GENERIC_FORMATTED_LIST_THREE, r(this.items, e));
            default:
                return i.intl.format(i.t.GENERIC_FORMATTED_LIST_FOUR, r(this.items, e));
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
