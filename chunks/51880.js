(n.d(t, {
    Z: () => s,
    d: () => a
}),
    n(415506),
    n(388685));
var i = n(281215);
let a = '$root';
class s {
    get(e) {
        return this.items[e];
    }
    constructor(...e) {
        var t, n;
        ((n = void 0),
            (t = 'items') in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n));
        let s = {},
            o = (e, t) => {
                if (null != s[e.key]) throw Error("Duplicate setting key '".concat(e.key, "'"));
                if ((null != t && e.linkToParent(t), (s[e.key] = e), e.isLayoutType())) for (let t of e) o(t, e);
            };
        (o(new i.ZP(i.Jq.ROOT, a, { layout: e })), (this.items = Object.freeze(s)));
    }
}
