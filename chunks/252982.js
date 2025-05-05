n.d(t, { Z: () => a });
var r = n(81825);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
class a extends r.Z {
    constructor(e) {
        var t, n;
        super(), i(this, 'id', void 0), i(this, 'layoutId', void 0), i(this, 'type', void 0), i(this, 'anchor', void 0), i(this, 'size', void 0), i(this, 'pinned', void 0), i(this, 'zIndex', void 0), i(this, 'opacity', void 0), i(this, 'meta', void 0), (this.id = e.id || ''), (this.layoutId = e.layoutId || ''), (this.type = e.type);
        let {
            top: r,
            left: a,
            bottom: s,
            right: l
        } = null != (t = e.anchor)
            ? t
            : {
                  top: 0,
                  left: 0
              };
        'number' == typeof s ? (r = void 0) : (s = void 0),
            'number' == typeof l ? (a = void 0) : (l = void 0),
            (this.anchor = {
                top: r,
                left: a,
                bottom: s,
                right: l
            }),
            (this.size = o(
                {
                    width: 0,
                    height: 0
                },
                e.size
            )),
            (this.pinned = !!e.pinned),
            (this.zIndex = e.zIndex || 0),
            (this.opacity = null != (n = e.opacity) ? n : 1),
            (this.meta = o({}, e.meta));
    }
}
