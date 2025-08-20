n.d(t, { Z: () => l });
var r = n(388032);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let a = ["a", "b", "c", "d"],
    o = (e) => e;
function s(e, t) {
    let n = {},
        r = Math.min(e.length, a.length);
    for (let i = 0; i < r; ++i) n[a[i]] = (n, r) => t(e[i], r);
    return n;
}
class l {
    asString() {
        return this.transformed(o);
    }
    isEmpty() {
        return 0 === this.items.length;
    }
    transformed(e) {
        switch (this.items.length) {
            case 0:
                return "";
            case 1:
                return e(this.items[0], "");
            case 2:
                return r.intl.format(r.t.GENERIC_FORMATTED_LIST_TWO, s(this.items, e));
            case 3:
                return r.intl.format(r.t.GENERIC_FORMATTED_LIST_THREE, s(this.items, e));
            default:
                return r.intl.format(r.t.GENERIC_FORMATTED_LIST_FOUR, s(this.items, e));
        }
    }
    constructor(e) {
        i(this, "items", void 0), (this.items = e);
    }
}
