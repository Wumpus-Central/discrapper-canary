"use strict";
let r;
n.d(t, { d: () => u });
var i = n(627968),
    a = n(64700),
    l = n(745262),
    s = n(187322);
let o = `
  visibility:hidden;
  overflow:hidden;
  position:absolute;
  z-index:-1000;
  top:0;
  right:0;
`,
    c = [
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
    u = a.forwardRef(function (e, t) {
        let { style: n, autoFocus: r = !1, disabled: l = !1, autoCorrect: o = "off", ...c } = e,
            u = a.useRef(null),
            [_, p] = a.useState(() => d(u.current, c.rows, c.value));
        return (
            a.useLayoutEffect(() => {
                p(d(u.current, c.rows, c.value));
            }, [c.rows, c.value]),
            (0, i.jsx)(s.vN, {
                children: (0, i.jsx)("textarea", {
                    ...c,
                    ref: (e) => {
                        (u.current = e), "function" == typeof t ? t(u.current) : null != t && (t.current = e);
                    },
                    style: { ...n, height: _ },
                    autoFocus: r,
                    disabled: l,
                    autoCorrect: o,
                }),
            })
        );
    });
function d(e, t, n) {
    var i, a, s, u, d;
    let _, p, f, h, m, g;
    if (null == e) return;
    (n = n ?? e.value),
        null == r && null != document.body && ((r = document.createElement("textarea")), document.body.appendChild(r));
    let {
            paddingSize: b,
            borderSize: A,
            boxSizing: E,
            sizingStyle: v,
        } = ((i = e),
        (_ = window.getComputedStyle(i)),
        (p = (0, l.G)(
            _.getPropertyValue("box-sizing"),
            _.getPropertyValue("-moz-box-sizing"),
            _.getPropertyValue("-webkit-box-sizing"),
        )),
        (f = parseFloat(_.getPropertyValue("padding-bottom")) + parseFloat(_.getPropertyValue("padding-top"))),
        (h =
            parseFloat(_.getPropertyValue("border-bottom-width")) + parseFloat(_.getPropertyValue("border-top-width"))),
        {
            sizingStyle: c.map((e) => `${e}:${_.getPropertyValue(e)}`).join(";"),
            paddingSize: f,
            borderSize: h,
            boxSizing: p,
        }),
        { minHeight: y, maxHeight: I } =
            ((a = v),
            (s = b),
            (u = A),
            (d = E),
            null == r &&
                null != document.body &&
                ((r = document.createElement("textarea")), document.body.appendChild(r)),
            r.setAttribute("style", a + ";" + o),
            r.setAttribute("rows", "1"),
            (r.value = ""),
            (m = r.scrollHeight),
            r.setAttribute("rows", "15"),
            (r.value = ""),
            (g = r.scrollHeight),
            "border-box" === d ? ((m += u), (g += u)) : "content-box" === d && ((m -= s), (g -= s)),
            { minHeight: m, maxHeight: g });
    r.setAttribute("style", v + ";" + o),
        (r.value = n),
        null != t ? r.setAttribute("rows", `${t}`) : r.removeAttribute("rows");
    let S = Math.ceil(r.scrollHeight + 1);
    return "border-box" === E ? (S += A) : "content-box" === E && (S -= b), (S = Math.max(y, Math.min(S, I)));
}
