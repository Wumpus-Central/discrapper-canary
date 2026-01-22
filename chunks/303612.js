n.d(t, {
    A: () => u,
    y: () => f,
});
var r = n(627968);
n(64700);
var i = n(23339),
    l = n(319060),
    s = n(492749),
    a = n(234914);
function c(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function o(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++)
                (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l;
}
let d = (0, i.xI)(l.A.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);
function u(e) {
    let { listing: t, imageSize: n, alt: i } = e,
        l = o(e, ["listing", "imageSize", "alt"]),
        a = (0, s.R)(t, n);
    return (0, r.jsx)(
        "img",
        c(
            {
                src: a,
                alt: i,
            },
            l,
        ),
    );
}
function f(e) {
    let { listing: t, aspectRatio: n = 16 / 9, height: i } = e,
        l = o(e, ["listing", "aspectRatio", "height"]),
        u = (i - 2 * d) * n,
        f = (0, s.R)(t, u),
        g = (0, s.R)(t, u, { shouldAnimate: !1 });
    return (0, r.jsx)(
        a.A,
        c(
            {
                src: f,
                backgroundSrc: g,
                aspectRatio: n,
            },
            l,
        ),
    );
}
