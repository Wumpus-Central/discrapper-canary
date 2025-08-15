n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var a = n(120356),
    s = n.n(a),
    l = n(481060),
    i = n(936141),
    o = n(836956);
let c = (e) => {
    let { obscureReason: t, iconClassname: n } = e;
    switch (t) {
        case i.wk.EXPLICIT_CONTENT:
        case i.wk.GORE_CONTENT:
            return (0, r.jsx)(l.fFY, {
                className: s()(n, o.obscuredIcon),
                color: "white",
            });
        case i.wk.SPOILER:
            return (0, r.jsx)(l.tEF, {
                size: "md",
                color: "currentColor",
                className: n,
            });
        default:
            return null;
    }
};
