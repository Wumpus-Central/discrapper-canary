let a;
r.d(t, { d: () => s });
var o = r(627968),
    l = r(64700),
    n = r(745262),
    i = r(187322);
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
        let { style: r, autoFocus: a = !1, disabled: n = !1, autoCorrect: d = "off", ...u } = e,
            s = l.useRef(null),
            [g, b] = l.useState(() => c(s.current, u.rows, u.value));
        return (
            l.useLayoutEffect(() => {
                b(c(s.current, u.rows, u.value));
            }, [u.rows, u.value]),
            (0, o.jsx)(i.vN, {
                children: (0, o.jsx)("textarea", {
                    ...u,
                    ref: function (e) {
                        (s.current = e), "function" == typeof t ? t(s.current) : null != t && (t.current = e);
                    },
                    style: { ...r, height: g },
                    autoFocus: a,
                    disabled: n,
                    autoCorrect: d,
                }),
            })
        );
    });
function c(e, t, r) {
    var o, l, i, s, c;
    let g, b, p, h, x, m;
    if (null == e) return;
    (r = r ?? e.value),
        null == a && null != document.body && ((a = document.createElement("textarea")), document.body.appendChild(a));
    let {
            paddingSize: y,
            borderSize: f,
            boxSizing: v,
            sizingStyle: w,
        } = ((o = e),
        (g = window.getComputedStyle(o)),
        (b = (0, n.G)(
            g.getPropertyValue("box-sizing"),
            g.getPropertyValue("-moz-box-sizing"),
            g.getPropertyValue("-webkit-box-sizing"),
        )),
        (p = parseFloat(g.getPropertyValue("padding-bottom")) + parseFloat(g.getPropertyValue("padding-top"))),
        (h =
            parseFloat(g.getPropertyValue("border-bottom-width")) + parseFloat(g.getPropertyValue("border-top-width"))),
        {
            sizingStyle: u.map((e) => `${e}:${g.getPropertyValue(e)}`).join(";"),
            paddingSize: p,
            borderSize: h,
            boxSizing: b,
        }),
        { minHeight: j, maxHeight: z } =
            ((l = w),
            (i = y),
            (s = f),
            (c = v),
            null == a &&
                null != document.body &&
                ((a = document.createElement("textarea")), document.body.appendChild(a)),
            a.setAttribute("style", l + ";" + d),
            a.setAttribute("rows", "1"),
            (a.value = ""),
            (x = a.scrollHeight),
            a.setAttribute("rows", "15"),
            (a.value = ""),
            (m = a.scrollHeight),
            "border-box" === c ? ((x += s), (m += s)) : "content-box" === c && ((x -= i), (m -= i)),
            { minHeight: x, maxHeight: m });
    a.setAttribute("style", w + ";" + d),
        (a.value = r),
        null != t ? a.setAttribute("rows", `${t}`) : a.removeAttribute("rows");
    let C = Math.ceil(a.scrollHeight + 1);
    return "border-box" === v ? (C += f) : "content-box" === v && (C -= y), (C = Math.max(j, Math.min(C, z)));
}
