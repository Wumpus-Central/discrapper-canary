let r;
n.d(t, {
    d: () => E,
}),
    n(896048);
var i = n(627968),
    a = n(64700),
    s = n(745262),
    o = n(158954);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let _ = 1,
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
        let [n, ...r] = [e, t],
            { style: s, autoFocus: l = !1, disabled: u = !1, autoCorrect: p = "off" } = n,
            _ = f(n, ["style", "autoFocus", "disabled", "autoCorrect"]),
            [h] = r,
            m = a.useRef(null),
            g = (e) => {
                (m.current = e), "function" == typeof h ? h(m.current) : null != h && (h.current = e);
            },
            [E, y] = a.useState(() => b(m.current, _.rows, _.value));
        return (
            a.useLayoutEffect(() => {
                y(b(m.current, _.rows, _.value));
            }, [_.rows, _.value]),
            (0, i.jsx)(o.vN3, {
                children: (0, i.jsx)(
                    "textarea",
                    d(c({}, _), {
                        ref: g,
                        style: d(c({}, s), {
                            height: E,
                        }),
                        autoFocus: l,
                        disabled: u,
                        autoCorrect: p,
                    }),
                ),
            })
        );
    });

function b(e, t, n) {
    if (null == e) return;
    (n = null != n ? n : e.value),
        null == r && null != document.body && ((r = document.createElement("textarea")), document.body.appendChild(r));
    let { paddingSize: i, borderSize: a, boxSizing: s, sizingStyle: o } = O(e),
        { minHeight: l, maxHeight: c } = y(o, i, a, s);
    r.setAttribute("style", o + ";" + m),
        (r.value = n),
        null != t ? r.setAttribute("rows", "".concat(t)) : r.removeAttribute("rows");
    let u = r.scrollHeight;
    return "border-box" === s ? (u += a) : "content-box" === s && (u -= i), (u = Math.max(l, Math.min(u, c)));
}

function y(e, t, n, i) {
    null == r && null != document.body && ((r = document.createElement("textarea")), document.body.appendChild(r)),
        r.setAttribute("style", e + ";" + m),
        r.setAttribute("rows", "".concat(_)),
        (r.value = "");
    let a = r.scrollHeight;
    r.setAttribute("rows", "".concat(h)), (r.value = "");
    let s = r.scrollHeight;
    return (
        "border-box" === i ? ((a += n), (s += n)) : "content-box" === i && ((a -= t), (s -= t)),
        {
            minHeight: a,
            maxHeight: s,
        }
    );
}

function O(e) {
    let t = window.getComputedStyle(e),
        n = (0, s.G)(
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
