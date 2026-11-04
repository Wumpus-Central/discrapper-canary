var r = e(477900);
e(582128);
var a = e(503698),
    t = e.n(a),
    n = e(87221),
    u = e(39623),
    o = e(338717),
    i = e(497780);
e.d(
    s,
    {},
    {
        A: function (c) {
            let { obscureReason: s, iconClassname: e } = c;
            switch (s) {
                case o.Oc.EXPLICIT_CONTENT:
                case o.Oc.GORE_CONTENT:
                case o.Oc.SELF_HARM_CONTENT:
                    return (0, r.jsx)(n.D, { className: t()(e, i.x), color: "white" });
                case o.Oc.SPOILER:
                    return (0, r.jsx)(u.EyeIcon, { size: "md", color: "currentColor", className: e });
                default:
                    return null;
            }
        },
    },
);
