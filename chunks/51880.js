(n.d(t, {
    Z: () => o,
    d: () => i
}),
    n(415506),
    n(388685));
var a = n(281215);
let i = '$root';
class o {
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
        let o = {},
            s = (e, t) => {
                if (null != o[e.key]) throw Error("Duplicate setting key '".concat(e.key, "'"));
                if ((null != t && e.linkToParent(t), (o[e.key] = e), e.isLayoutType())) for (let t of e) s(t, e);
            };
        (s(new a.ZP(a.Jq.ROOT, i, { layout: e })), (this.items = Object.freeze(o)));
    }
}
