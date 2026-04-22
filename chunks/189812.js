let t;
a.d(l, { d: () => u });
var n = a(627968),
    o = a(64700),
    i = a(745262),
    r = a(187322);
let s = `
  visibility:hidden;
  overflow:hidden;
  position:absolute;
  z-index:-1000;
  top:0;
  right:0;
`,
    d = [
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
    u = o.forwardRef(function (e, l) {
        let { style: a, autoFocus: t = !1, disabled: i = !1, autoCorrect: s = "off", ...d } = e,
            u = o.useRef(null),
            [b, p] = o.useState(() => c(u.current, d.rows, d.value));
        return (
            o.useLayoutEffect(() => {
                p(c(u.current, d.rows, d.value));
            }, [d.rows, d.value]),
            (0, n.jsx)(r.vN, {
                children: (0, n.jsx)("textarea", {
                    ...d,
                    ref: (e) => {
                        (u.current = e), "function" == typeof l ? l(u.current) : null != l && (l.current = e);
                    },
                    style: { ...a, height: b },
                    autoFocus: t,
                    disabled: i,
                    autoCorrect: s,
                }),
            })
        );
    });
function c(e, l, a) {
    var n, o, r, u, c;
    let b, p, m, h, x, g;
    if (null == e) return;
    (a = a ?? e.value),
        null == t && null != document.body && ((t = document.createElement("textarea")), document.body.appendChild(t));
    let {
            paddingSize: f,
            borderSize: v,
            boxSizing: y,
            sizingStyle: _,
        } = ((n = e),
        (b = window.getComputedStyle(n)),
        (p = (0, i.G)(
            b.getPropertyValue("box-sizing"),
            b.getPropertyValue("-moz-box-sizing"),
            b.getPropertyValue("-webkit-box-sizing"),
        )),
        (m = parseFloat(b.getPropertyValue("padding-bottom")) + parseFloat(b.getPropertyValue("padding-top"))),
        (h =
            parseFloat(b.getPropertyValue("border-bottom-width")) + parseFloat(b.getPropertyValue("border-top-width"))),
        {
            sizingStyle: d.map((e) => `${e}:${b.getPropertyValue(e)}`).join(";"),
            paddingSize: m,
            borderSize: h,
            boxSizing: p,
        }),
        { minHeight: C, maxHeight: j } =
            ((o = _),
            (r = f),
            (u = v),
            (c = y),
            null == t &&
                null != document.body &&
                ((t = document.createElement("textarea")), document.body.appendChild(t)),
            t.setAttribute("style", o + ";" + s),
            t.setAttribute("rows", "1"),
            (t.value = ""),
            (x = t.scrollHeight),
            t.setAttribute("rows", "15"),
            (t.value = ""),
            (g = t.scrollHeight),
            "border-box" === c ? ((x += u), (g += u)) : "content-box" === c && ((x -= r), (g -= r)),
            { minHeight: x, maxHeight: g });
    t.setAttribute("style", _ + ";" + s),
        (t.value = a),
        null != l ? t.setAttribute("rows", `${l}`) : t.removeAttribute("rows");
    let V = Math.ceil(t.scrollHeight + 1);
    return "border-box" === y ? (V += v) : "content-box" === y && (V -= f), (V = Math.max(C, Math.min(V, j)));
}
