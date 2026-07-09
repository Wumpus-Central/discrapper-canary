"use strict";
let i;
n.d(t, { d: () => c });
var r = n(627968),
    a = n(64700),
    s = n(745262),
    l = n(187322);
let o = `
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
    c = a.forwardRef(function (e, t) {
        let { style: n, autoFocus: i = !1, disabled: s = !1, autoCorrect: o = "off", ...d } = e,
            c = a.useRef(null),
            [_, E] = a.useState(() => u(c.current, d.rows, d.value));
        return (
            a.useLayoutEffect(() => {
                E(u(c.current, d.rows, d.value));
            }, [d.rows, d.value]),
            (0, r.jsx)(l.vN, {
                children: (0, r.jsx)("textarea", {
                    ...d,
                    ref: (e) => {
                        (c.current = e), "function" == typeof t ? t(c.current) : null != t && (t.current = e);
                    },
                    style: { ...n, height: _ },
                    autoFocus: i,
                    disabled: s,
                    autoCorrect: o,
                }),
            })
        );
    });
function u(e, t, n) {
    var r, a, l, c, u;
    let _, E, A, h, I, f;
    if (null == e) return;
    (n = n ?? e.value),
        null == i && null != document.body && ((i = document.createElement("textarea")), document.body.appendChild(i));
    let {
            paddingSize: p,
            borderSize: T,
            boxSizing: m,
            sizingStyle: g,
        } = ((r = e),
        (_ = window.getComputedStyle(r)),
        (E = (0, s.G)(
            _.getPropertyValue("box-sizing"),
            _.getPropertyValue("-moz-box-sizing"),
            _.getPropertyValue("-webkit-box-sizing"),
        )),
        (A = parseFloat(_.getPropertyValue("padding-bottom")) + parseFloat(_.getPropertyValue("padding-top"))),
        (h =
            parseFloat(_.getPropertyValue("border-bottom-width")) + parseFloat(_.getPropertyValue("border-top-width"))),
        {
            sizingStyle: d.map((e) => `${e}:${_.getPropertyValue(e)}`).join(";"),
            paddingSize: A,
            borderSize: h,
            boxSizing: E,
        }),
        { minHeight: S, maxHeight: N } =
            ((a = g),
            (l = p),
            (c = T),
            (u = m),
            null == i &&
                null != document.body &&
                ((i = document.createElement("textarea")), document.body.appendChild(i)),
            i.setAttribute("style", a + ";" + o),
            i.setAttribute("rows", "1"),
            (i.value = ""),
            (I = i.scrollHeight),
            i.setAttribute("rows", "15"),
            (i.value = ""),
            (f = i.scrollHeight),
            "border-box" === u ? ((I += c), (f += c)) : "content-box" === u && ((I -= l), (f -= l)),
            { minHeight: I, maxHeight: f });
    i.setAttribute("style", g + ";" + o),
        (i.value = n),
        null != t ? i.setAttribute("rows", `${t}`) : i.removeAttribute("rows");
    let C = Math.ceil(i.scrollHeight + 1);
    return "border-box" === m ? (C += T) : "content-box" === m && (C -= p), (C = Math.max(S, Math.min(C, N)));
}
