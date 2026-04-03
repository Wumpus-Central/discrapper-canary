"use strict";
let r;
n.d(t, { d: () => _ });
var i = n(627968),
    s = n(64700),
    a = n(745262),
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
    _ = s.forwardRef(function (e, t) {
        let { style: n, autoFocus: r = !1, disabled: a = !1, autoCorrect: l = "off", ...u } = e,
            c = s.useRef(null),
            d = (e) => {
                (c.current = e), "function" == typeof t ? t(c.current) : null != t && (t.current = e);
            },
            [_, p] = s.useState(() => f(c.current, u.rows, u.value));
        return (
            s.useLayoutEffect(() => {
                p(f(c.current, u.rows, u.value));
            }, [u.rows, u.value]),
            (0, i.jsx)(o.vN3, {
                children: (0, i.jsx)("textarea", {
                    ...u,
                    ref: d,
                    style: { ...n, height: _ },
                    autoFocus: r,
                    disabled: a,
                    autoCorrect: l,
                }),
            })
        );
    });
function f(e, t, n) {
    if (null == e) return;
    (n = n ?? e.value),
        null == r && null != document.body && ((r = document.createElement("textarea")), document.body.appendChild(r));
    let { paddingSize: i, borderSize: s, boxSizing: a, sizingStyle: o } = h(e),
        { minHeight: l, maxHeight: u } = p(o, i, s, a);
    r.setAttribute("style", o + ";" + c),
        (r.value = n),
        null != t ? r.setAttribute("rows", `${t}`) : r.removeAttribute("rows");
    let d = Math.ceil(r.scrollHeight + 1);
    return "border-box" === a ? (d += s) : "content-box" === a && (d -= i), (d = Math.max(l, Math.min(d, u)));
}
function p(e, t, n, i) {
    null == r && null != document.body && ((r = document.createElement("textarea")), document.body.appendChild(r)),
        r.setAttribute("style", e + ";" + c),
        r.setAttribute("rows", `${l}`),
        (r.value = "");
    let s = r.scrollHeight;
    r.setAttribute("rows", `${u}`), (r.value = "");
    let a = r.scrollHeight;
    return (
        "border-box" === i ? ((s += n), (a += n)) : "content-box" === i && ((s -= t), (a -= t)),
        { minHeight: s, maxHeight: a }
    );
}
function h(e) {
    let t = window.getComputedStyle(e),
        n = (0, a.G)(
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
