t.d(n, { N: () => p });
var l = t(477900),
    r = t(582128),
    a = t(503698),
    u = t.n(a),
    i = t(939249),
    s = t(933832),
    c = t(624479),
    o = t(143145),
    d = t(78377),
    h = t(441136),
    v = t(957565),
    m = t(165648),
    f = t(969490);
function x(e) {
    let { text: n } = e,
        [t, a] = r.useState(!1);
    return (0, l.jsx)(i.D, {
        onClick: function () {
            (0, v.C)(
                n,
                () => a(!0),
                () => a(!1),
            );
        },
        children: t
            ? (0, l.jsx)(s.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(c.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
function p(e) {
    let { language: n, content: t } = e;
    if ((0, d.p)()?.formatInline === !0) {
        let e = t.replace(/^\n+|\n+$/g, "").replaceAll("\n", " ");
        return (
            n?.toLowerCase() === "ansi" && (e = e.replaceAll(o.Q0, "")),
            (0, l.jsx)("code", { className: "inline", children: e })
        );
    }
    return (0, l.jsx)("pre", {
        children: (0, l.jsxs)("div", {
            className: m.Hy,
            children: [
                v.p5 ? (0, l.jsx)("div", { className: m.lB, children: (0, l.jsx)(x, { text: t }) }) : null,
                (0, l.jsx)(h.E, { code: t, lang: n, className: u()(f.kw, "hljs") }),
            ],
        }),
    });
}
