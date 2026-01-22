n.d(t, {
    P: () => a,
});
var r = n(627968),
    i = n(750390);

function a(e) {
    let { graphic: t, layout: n } = e;
    if ("type" in t)
        switch (t.type) {
            case "role":
                let { color: a } = t;
                return (0, r.jsx)("div", {
                    className: i.m4,
                    style: {
                        backgroundColor: a,
                    },
                });
            case "avatar":
                let { src: s } = t;
                return (0, r.jsx)("img", {
                    className: i.my,
                    src: s,
                    alt: "",
                });
            case "image":
                let { src: o } = t;
                return (0, r.jsx)("img", {
                    className: i.Sl,
                    src: o,
                    alt: "",
                });
            default:
                return null;
        }
    let l = "inline" === n ? "xs" : "sm",
        c = t;
    return (0, r.jsx)(c, {
        size: l,
    });
}
