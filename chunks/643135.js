let a;
r.d(t, { d: () => s });
var o = r(477900),
    l = r(582128),
    n = r(745262),
    i = r(259678);
let d = `
  visibility:hidden;
  overflow:hidden;
  position:absolute;
  z-index:-1000;
  top:0;
  right:0;
`,
    u = [
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
    s = l.forwardRef(function (e, t) {
        let { style: r, autoFocus: a = !1, disabled: n = !1, autoCorrect: d = "off", maxRows: u = 15, ...s } = e,
            g = l.useRef(null),
            [b, p] = l.useState(() => c(g.current, s.rows, u, s.value));
        return (
            l.useLayoutEffect(() => {
                p(c(g.current, s.rows, u, s.value));
            }, [s.rows, u, s.value]),
            (0, o.jsx)(i.vN, {
                children: (0, o.jsx)("textarea", {
                    ...s,
                    ref: function (e) {
                        (g.current = e), "function" == typeof t ? t(g.current) : null != t && (t.current = e);
                    },
                    style: { ...r, height: b },
                    autoFocus: a,
                    disabled: n,
                    autoCorrect: d,
                }),
            })
        );
    });
function c(e, t, r, o) {
    var l, i, s, c, g, b;
    let p, h, x, m, y, f;
    if (null == e) return;
    (o = o ?? e.value),
        null == a && null != document.body && ((a = document.createElement("textarea")), document.body.appendChild(a));
    let {
            paddingSize: v,
            borderSize: w,
            boxSizing: j,
            sizingStyle: z,
        } = ((l = e),
        (p = window.getComputedStyle(l)),
        (h = (0, n.G)(
            p.getPropertyValue("box-sizing"),
            p.getPropertyValue("-moz-box-sizing"),
            p.getPropertyValue("-webkit-box-sizing"),
        )),
        (x = parseFloat(p.getPropertyValue("padding-bottom")) + parseFloat(p.getPropertyValue("padding-top"))),
        (m =
            parseFloat(p.getPropertyValue("border-bottom-width")) + parseFloat(p.getPropertyValue("border-top-width"))),
        {
            sizingStyle: u.map((e) => `${e}:${p.getPropertyValue(e)}`).join(";"),
            paddingSize: x,
            borderSize: m,
            boxSizing: h,
        }),
        { minHeight: C, maxHeight: V } =
            ((i = z),
            (s = v),
            (c = w),
            (g = j),
            (b = r),
            null == a &&
                null != document.body &&
                ((a = document.createElement("textarea")), document.body.appendChild(a)),
            a.setAttribute("style", i + ";" + d),
            a.setAttribute("rows", "1"),
            (a.value = ""),
            (y = a.scrollHeight),
            a.setAttribute("rows", `${b}`),
            (a.value = ""),
            (f = a.scrollHeight),
            "border-box" === g ? ((y += c), (f += c)) : "content-box" === g && ((y -= s), (f -= s)),
            { minHeight: y, maxHeight: f });
    a.setAttribute("style", z + ";" + d),
        (a.value = o),
        null != t ? a.setAttribute("rows", `${t}`) : a.removeAttribute("rows");
    let M = Math.ceil(a.scrollHeight + 1);
    return "border-box" === j ? (M += w) : "content-box" === j && (M -= v), (M = Math.max(C, Math.min(M, V)));
}
