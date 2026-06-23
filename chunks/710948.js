e.d(s, { A: () => o });
var r = e(627968);
e(64700);
var a = e(503698),
    t = e.n(a),
    u = e(87221),
    l = e(39623),
    n = e(338717),
    i = e(2835);
let o = function (c) {
    let { obscureReason: s, iconClassname: e } = c;
    switch (s) {
        case n.Oc.EXPLICIT_CONTENT:
        case n.Oc.GORE_CONTENT:
        case n.Oc.SELF_HARM_CONTENT:
            return (0, r.jsx)(u.D, { className: t()(e, i.x), color: "white" });
        case n.Oc.SPOILER:
            return (0, r.jsx)(l.b, { size: "md", color: "currentColor", className: e });
        default:
            return null;
    }
};
