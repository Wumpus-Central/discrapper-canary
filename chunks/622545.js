n.d(t, { Z: () => s });
var i = n(388032);
let r = ["a", "b", "c", "d"],
    l = (e) => e;
function a(e, t) {
    let n = {},
        i = Math.min(e.length, r.length);
    for (let l = 0; l < i; ++l) n[r[l]] = (n, i) => t(e[l], i);
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
                return "";
            case 1:
                return e(this.items[0], "");
            case 2:
                return i.intl.format(i.t.GENERIC_FORMATTED_LIST_TWO, a(this.items, e));
            case 3:
                return i.intl.format(i.t.GENERIC_FORMATTED_LIST_THREE, a(this.items, e));
            default:
                return i.intl.format(i.t.GENERIC_FORMATTED_LIST_FOUR, a(this.items, e));
        }
    }
    constructor(e) {
        !(function (e, t, n) {
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[t] = n);
        })(this, "items", void 0),
            (this.items = e);
    }
}
