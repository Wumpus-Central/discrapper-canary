"use strict";
let r;
n.d(t, { d: () => _ });
var i = n(627968),
    a = n(64700),
    s = n(745262),
    o = n(158954);
let l = 1,
    u = 15,
    c = `
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
    _ = a.forwardRef(function (e, t) {
        let { style: n, autoFocus: r = !1, disabled: s = !1, autoCorrect: l = "off", ...u } = e,
            c = a.useRef(null),
            d = (e) => {
                (c.current = e), "function" == typeof t ? t(c.current) : null != t && (t.current = e);
            },
            [_, p] = a.useState(() => f(c.current, u.rows, u.value));
        return (
            a.useLayoutEffect(() => {
                p(f(c.current, u.rows, u.value));
            }, [u.rows, u.value]),
            (0, i.jsx)(o.vN3, {
                children: (0, i.jsx)("textarea", {
                    ...u,
                    ref: d,
                    style: { ...n, height: _ },
                    autoFocus: r,
                    disabled: s,
                    autoCorrect: l,
                }),
            })
        );
    });
function f(e, t, n) {
    if (null == e) return;
    (n = n ?? e.value),
        null == r && null != document.body && ((r = document.createElement("textarea")), document.body.appendChild(r));
    let { paddingSize: i, borderSize: a, boxSizing: s, sizingStyle: o } = h(e),
        { minHeight: l, maxHeight: u } = p(o, i, a, s);
    r.setAttribute("style", o + ";" + c),
        (r.value = n),
        null != t ? r.setAttribute("rows", `${t}`) : r.removeAttribute("rows");
    let d = r.scrollHeight;
    return "border-box" === s ? (d += a) : "content-box" === s && (d -= i), (d = Math.max(l, Math.min(d, u)));
}
function p(e, t, n, i) {
    null == r && null != document.body && ((r = document.createElement("textarea")), document.body.appendChild(r)),
        r.setAttribute("style", e + ";" + c),
        r.setAttribute("rows", `${l}`),
        (r.value = "");
    let a = r.scrollHeight;
    r.setAttribute("rows", `${u}`), (r.value = "");
    let s = r.scrollHeight;
    return (
        "border-box" === i ? ((a += n), (s += n)) : "content-box" === i && ((a -= t), (s -= t)),
        { minHeight: a, maxHeight: s }
    );
}
function h(e) {
    let t = window.getComputedStyle(e),
        n = (0, s.G)(
            t.getPropertyValue("box-sizing"),
            t.getPropertyValue("-moz-box-sizing"),
            t.getPropertyValue("-webkit-box-sizing"),
        ),
        r = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top")),
        i = parseFloat(t.getPropertyValue("border-bottom-width")) + parseFloat(t.getPropertyValue("border-top-width"));
    return {
        sizingStyle: d.map((e) => `${e}:${t.getPropertyValue(e)}`).join(";"),
        paddingSize: r,
        borderSize: i,
        boxSizing: n,
    };
}
