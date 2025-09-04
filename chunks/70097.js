n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    a = n(374470),
    o = n(442837),
    s = n(607070),
    l = n(217702);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    e.removeAttribute("src"),
        Array.from(e.children).forEach((e) => {
            (0, a.k)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")),
                (0, a.k)(e, HTMLImageElement) && e.removeAttribute("src");
        });
    try {
        e.load();
    } catch (e) {}
}
let m = (e) => {
        var { alt: t, externalRef: n, autoPlay: a, playOnHover: c, responsive: d, mediaLayoutType: f } = e,
            p = _(e, ["alt", "externalRef", "autoPlay", "playOnHover", "responsive", "mediaLayoutType"]);
        let m = !(0, o.e7)([s.Z], () => s.Z.useReducedMotion) && !c && a,
            g = i.useRef(null);
        function E() {
            var e;
            c && (null == g || null == (e = g.current) || e.play());
        }
        function b() {
            var e;
            c && (null == g || null == (e = g.current) || e.pause());
        }
        function y() {
            return f === l.hV.MOSAIC
                ? {
                      width: "100%",
                      height: "100%",
                      maxHeight: "inherit",
                      objectFit: "contain",
                  }
                : d
                  ? O()
                  : {};
        }
        function O() {
            return {
                maxWidth: p.width,
                maxHeight: p.height,
                width: "100%",
                height: "100%",
            };
        }
        return (
            i.useLayoutEffect(
                () => () => {
                    let { current: e } = g;
                    null != e && h(e);
                },
                [],
            ),
            i.useLayoutEffect(
                () => (
                    "function" == typeof n ? (n(null), n(g.current)) : null != n && (n.current = g.current),
                    () => {
                        "function" == typeof n ? n(null) : null != n && (n.current = null);
                    }
                ),
                [n, g],
            ),
            (0, r.jsx)(
                "video",
                u(
                    {
                        "aria-label": t,
                        ref: g,
                        autoPlay: m,
                        onMouseEnter: E,
                        onMouseLeave: b,
                        onFocus: E,
                        onBlur: b,
                        style: y(),
                    },
                    p,
                ),
            )
        );
    },
    g = i.forwardRef((e, t) => (0, r.jsx)(m, f(u({}, e), { externalRef: t })));
