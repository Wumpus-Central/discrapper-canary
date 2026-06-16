e.d(s, { A: () => n });
var r = e(627968);
e(64700);
var a = e(503698),
    t = e.n(a),
    l = e(87221),
    u = e(39623),
    O = e(338717),
    i = e(2835);
let n = (c) => {
    let { obscureReason: s, iconClassname: e } = c;
    switch (s) {
        case O.Oc.EXPLICIT_CONTENT:
        case O.Oc.GORE_CONTENT:
        case O.Oc.SELF_HARM_CONTENT:
            return (0, r.jsx)(l.D, { className: t()(e, i.x), color: "white" });
        case O.Oc.SPOILER:
            return (0, r.jsx)(u.b, { size: "md", color: "currentColor", className: e });
        default:
            return null;
    }
};
