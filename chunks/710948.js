l.d(n, { A: () => o });
var a = l(627968);
l(64700);
var s = l(503698),
    t = l.n(s),
    i = l(87221),
    r = l(39623),
    d = l(338717),
    c = l(2835);
let o = (e) => {
    let { obscureReason: n, iconClassname: l } = e;
    switch (n) {
        case d.Oc.EXPLICIT_CONTENT:
        case d.Oc.GORE_CONTENT:
        case d.Oc.SELF_HARM_CONTENT:
            return (0, a.jsx)(i.D, { className: t()(l, c.x), color: "white" });
        case d.Oc.SPOILER:
            return (0, a.jsx)(r.b, { size: "md", color: "currentColor", className: l });
        default:
            return null;
    }
};
