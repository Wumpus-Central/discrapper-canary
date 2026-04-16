s.d(t, { A: () => d });
var n = s(627968);
s(64700);
var l = s(503698),
    a = s.n(l),
    i = s(397927),
    r = s(338717),
    o = s(2835);
let d = (e) => {
    let { obscureReason: t, iconClassname: s } = e;
    switch (t) {
        case r.Oc.EXPLICIT_CONTENT:
        case r.Oc.GORE_CONTENT:
        case r.Oc.SELF_HARM_CONTENT:
            return (0, n.jsx)(i.DAq, { className: a()(s, o.x), color: "white" });
        case r.Oc.SPOILER:
            return (0, n.jsx)(i.bMW, { size: "md", color: "currentColor", className: s });
        default:
            return null;
    }
};
