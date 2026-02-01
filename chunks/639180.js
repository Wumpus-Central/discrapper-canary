n.d(t, {
    A: () => o,
});
var r = n(315069);

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

function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
class o extends r.A {
    constructor(e) {
        var t, n, r;
        super(),
            i(this, "id", void 0),
            i(this, "layoutId", void 0),
            i(this, "type", void 0),
            i(this, "anchor", void 0),
            i(this, "size", void 0),
            i(this, "minSize", void 0),
            i(this, "pinned", void 0),
            i(this, "showExtrasHintTimestamp", void 0),
            i(this, "zIndex", void 0),
            i(this, "opacity", void 0),
            i(this, "meta", void 0),
            (this.id = e.id || ""),
            (this.layoutId = e.layoutId || ""),
            (this.type = e.type);
        const o = null != (t = e.anchor) ? t : {},
            s = null != (n = e.size) ? n : {};
        let l = "number" == typeof o.top ? o.top : void 0,
            c = "number" == typeof o.bottom ? o.bottom : void 0,
            u = "number" == typeof o.left ? o.left : void 0,
            d = "number" == typeof o.right ? o.right : void 0;
        const f = null != l && null != c && "auto" === s.height;
        f || (null != c ? (l = void 0) : (c = void 0)),
            (null != u && null != d && "auto" === s.width) || (null != d ? (u = void 0) : (d = void 0)),
            null == l && null == c && (l = 0),
            null == u && null == d && (u = 0),
            (this.anchor = {
                top: l,
                left: u,
                bottom: c,
                right: d,
            }),
            (this.size = a(
                {
                    width: 0,
                    height: 0,
                },
                e.size,
            )),
            (this.minSize = a(
                {
                    width: void 0,
                    height: void 0,
                },
                e.minSize,
            )),
            (this.pinned = !!e.pinned),
            (this.zIndex = e.zIndex || 0),
            (this.opacity = null != (r = e.opacity) ? r : 1),
            (this.meta = a({}, e.meta)),
            null != e.showExtrasHintTimestamp && (this.showExtrasHintTimestamp = e.showExtrasHintTimestamp);
    }
}
