var a = s(477900);
s(582128);
var r = s(503698),
    n = s.n(r),
    t = s(87221),
    o = s(39623),
    u = s(338717),
    i = s(497780);
s.d(
    e,
    {},
    {
        A: function (c) {
            let { obscureReason: e, iconClassname: s } = c;
            switch (e) {
                case u.Oc.EXPLICIT_CONTENT:
                case u.Oc.GORE_CONTENT:
                case u.Oc.SELF_HARM_CONTENT:
                    return (0, a.jsx)(t.ImageWarningIcon, { className: n()(s, i.x), color: "white" });
                case u.Oc.SPOILER:
                    return (0, a.jsx)(o.EyeIcon, { size: "md", color: "currentColor", className: s });
                default:
                    return null;
            }
        },
    },
);
