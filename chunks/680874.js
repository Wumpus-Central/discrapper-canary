let r;
n.d(t, { l: () => E }), n(388685);
var i = n(54381),
    a = n(473749),
    o = n(58654),
    s = n(793030);
function l(e, t, n) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let p = 1,
    h = 15,
    m = "\n  visibility:hidden;\n  overflow:hidden;\n  position:absolute;\n  z-index:-1000;\n  top:0;\n  right:0;\n",
    g = [
        "letter-spacing",
        "line-height",
        "padding-top",
        "padding-bottom",
        "font-family",
        "font-weight",
        "font-size",
        "text-transform",
        "width",
        "padding-left",
        "padding-right",
        "border-width",
        "box-sizing",
    ],
    E = a.forwardRef(function (e, t) {
        var { style: n, autoFocus: r = !1, disabled: o = !1, autoCorrect: l = "off" } = e,
            u = f(e, ["style", "autoFocus", "disabled", "autoCorrect"]);
        let _ = a.useRef(null),
            p = (e) => {
                (_.current = e), "function" == typeof t ? t(_.current) : null != t && (t.current = e);
            },
            [h, m] = a.useState(() => b(_.current, u.rows, u.value));
        return (
            a.useLayoutEffect(() => {
                m(b(_.current, u.rows, u.value));
            }, [u.rows, u.value]),
            (0, i.jsx)(s.tEY, {
                children: (0, i.jsx)(
                    "textarea",
                    d(c({}, u), {
                        ref: p,
                        style: d(c({}, n), { height: h }),
                        autoFocus: r,
                        disabled: o,
                        autoCorrect: l,
                    }),
                ),
            })
        );
    });
function b(e, t, n) {
    if (null == e) return;
    (n = null != n ? n : e.value),
        null == r && null != document.body && ((r = document.createElement("textarea")), document.body.appendChild(r));
    let { paddingSize: i, borderSize: a, boxSizing: o, sizingStyle: s } = O(e),
        { minHeight: l, maxHeight: c } = y(s, i, a, o);
    r.setAttribute("style", s + ";" + m),
        (r.value = n),
        null != t ? r.setAttribute("rows", "".concat(t)) : r.removeAttribute("rows");
    let u = r.scrollHeight;
    return "border-box" === o ? (u += a) : "content-box" === o && (u -= i), (u = Math.max(l, Math.min(u, c)));
}
function y(e, t, n, i) {
    null == r && null != document.body && ((r = document.createElement("textarea")), document.body.appendChild(r)),
        r.setAttribute("style", e + ";" + m),
        r.setAttribute("rows", "".concat(p)),
        (r.value = "");
    let a = r.scrollHeight;
    r.setAttribute("rows", "".concat(h)), (r.value = "");
    let o = r.scrollHeight;
    return (
        "border-box" === i ? ((a += n), (o += n)) : "content-box" === i && ((a -= t), (o -= t)),
        {
            minHeight: a,
            maxHeight: o,
        }
    );
}
function O(e) {
    let t = window.getComputedStyle(e),
        n = (0, o.L)(
            t.getPropertyValue("box-sizing"),
            t.getPropertyValue("-moz-box-sizing"),
            t.getPropertyValue("-webkit-box-sizing"),
        ),
        r = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top")),
        i = parseFloat(t.getPropertyValue("border-bottom-width")) + parseFloat(t.getPropertyValue("border-top-width"));
    return {
        sizingStyle: g.map((e) => "".concat(e, ":").concat(t.getPropertyValue(e))).join(";"),
        paddingSize: r,
        borderSize: i,
        boxSizing: n,
    };
}
