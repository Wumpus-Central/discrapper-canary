s.d(e, { A: () => i });
var r = s(477900);
s(582128);
var a = s(503698),
    t = s.n(a),
    n = s(87221),
    u = s(39623),
    l = s(338717),
    o = s(497780);
let i = function (c) {
    let { obscureReason: e, iconClassname: s } = c;
    switch (e) {
        case l.Oc.EXPLICIT_CONTENT:
        case l.Oc.GORE_CONTENT:
        case l.Oc.SELF_HARM_CONTENT:
            return (0, r.jsx)(n.D, { className: t()(s, o.x), color: "white" });
        case l.Oc.SPOILER:
            return (0, r.jsx)(u.EyeIcon, { size: "md", color: "currentColor", className: s });
        default:
            return null;
    }
};
