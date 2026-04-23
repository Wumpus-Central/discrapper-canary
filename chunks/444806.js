"use strict";
n.d(t, { P: () => s });
var r = n(627968),
    i = n(543893);
function s(e) {
    let { graphic: t, layout: n } = e;
    if ("type" in t)
        switch (t.type) {
            case "role":
                let { color: s } = t;
                return (0, r.jsx)("div", { className: i.m4, style: { backgroundColor: s } });
            case "avatar":
                let { src: a } = t;
                return (0, r.jsx)("img", { className: i.my, src: a, alt: "" });
            case "image":
                let { src: o } = t;
                return (0, r.jsx)("img", { className: i.Sl, src: o, alt: "" });
            default:
                return null;
        }
    return (0, r.jsx)(t, { size: "inline" === n ? "xs" : "sm" });
}
