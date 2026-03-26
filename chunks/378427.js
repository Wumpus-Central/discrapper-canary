"use strict";
n.d(t, { A: () => a });
var i,
    s = n(627968);
n(64700);
var l = n(397927),
    r = n(780266);
function a(e) {
    let { type: t } = e;
    return (0, s.jsx)("div", {
        className: r.fF,
        children: (0, s.jsx)("div", {
            className: r.Cf,
            children: (function (e) {
                switch (e) {
                    case "arrow_down":
                        return (0, s.jsx)(l.MFz, { size: "md", color: "currentColor", className: r.Gr });
                    case "cross":
                        return (0, s.jsx)(l.PGe, { size: "md", color: "currentColor", className: r.Gr });
                    default:
                        return null;
                }
            })(t),
        }),
    });
}
a.Type = (((i = {}).ARROW_DOWN = "arrow_down"), (i.CROSS = "cross"), i);
