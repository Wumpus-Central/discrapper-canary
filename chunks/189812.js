"use strict";
let i;
n.d(t, { d: () => c });
var r = n(627968),
    s = n(64700),
    a = n(745262),
    o = n(187322);
let l = `
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
    c = s.forwardRef(function (e, t) {
        let { style: n, autoFocus: i = !1, disabled: a = !1, autoCorrect: l = "off", ...u } = e,
            c = s.useRef(null),
            [_, f] = s.useState(() => d(c.current, u.rows, u.value));
        return (
            s.useLayoutEffect(() => {
                f(d(c.current, u.rows, u.value));
            }, [u.rows, u.value]),
            (0, r.jsx)(o.vN, {
                children: (0, r.jsx)("textarea", {
                    ...u,
                    ref: (e) => {
                        (c.current = e), "function" == typeof t ? t(c.current) : null != t && (t.current = e);
                    },
                    style: { ...n, height: _ },
                    autoFocus: i,
                    disabled: a,
                    autoCorrect: l,
                }),
            })
        );
    });
function d(e, t, n) {
    var r, s, o, c, d;
    let _, f, h, p, E, m;
    if (null == e) return;
    (n = n ?? e.value),
        null == i && null != document.body && ((i = document.createElement("textarea")), document.body.appendChild(i));
    let {
            paddingSize: g,
            borderSize: A,
            boxSizing: I,
            sizingStyle: T,
        } = ((r = e),
        (_ = window.getComputedStyle(r)),
        (f = (0, a.G)(
            _.getPropertyValue("box-sizing"),
            _.getPropertyValue("-moz-box-sizing"),
            _.getPropertyValue("-webkit-box-sizing"),
        )),
        (h = parseFloat(_.getPropertyValue("padding-bottom")) + parseFloat(_.getPropertyValue("padding-top"))),
        (p =
            parseFloat(_.getPropertyValue("border-bottom-width")) + parseFloat(_.getPropertyValue("border-top-width"))),
        {
            sizingStyle: u.map((e) => `${e}:${_.getPropertyValue(e)}`).join(";"),
            paddingSize: h,
            borderSize: p,
            boxSizing: f,
        }),
        { minHeight: S, maxHeight: N } =
            ((s = T),
            (o = g),
            (c = A),
            (d = I),
            null == i &&
                null != document.body &&
                ((i = document.createElement("textarea")), document.body.appendChild(i)),
            i.setAttribute("style", s + ";" + l),
            i.setAttribute("rows", "1"),
            (i.value = ""),
            (E = i.scrollHeight),
            i.setAttribute("rows", "15"),
            (i.value = ""),
            (m = i.scrollHeight),
            "border-box" === d ? ((E += c), (m += c)) : "content-box" === d && ((E -= o), (m -= o)),
            { minHeight: E, maxHeight: m });
    i.setAttribute("style", T + ";" + l),
        (i.value = n),
        null != t ? i.setAttribute("rows", `${t}`) : i.removeAttribute("rows");
    let y = Math.ceil(i.scrollHeight + 1);
    return "border-box" === I ? (y += A) : "content-box" === I && (y -= g), (y = Math.max(S, Math.min(y, N)));
}
