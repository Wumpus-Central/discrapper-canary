n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(397927),
    a = n(338717),
    o = n(116806);
let c = (e) => {
    let { obscureReason: t, iconClassname: n } = e;
    switch (t) {
        case a.Oc.EXPLICIT_CONTENT:
        case a.Oc.GORE_CONTENT:
        case a.Oc.SELF_HARM_CONTENT:
            return (0, i.jsx)(l.DAq, {
                className: r()(n, o.x),
                color: "white",
            });
        case a.Oc.SPOILER:
            return (0, i.jsx)(l.bMW, {
                size: "md",
                color: "currentColor",
                className: n,
            });
        default:
            return null;
    }
};
