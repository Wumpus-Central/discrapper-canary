n.d(t, { Z: () => c });
var a = n(54381);
n(473749);
var l = n(120356),
    s = n.n(l),
    r = n(481060),
    i = n(936141),
    o = n(818794);
let c = (e) => {
    let { obscureReason: t, iconClassname: n } = e;
    switch (t) {
        case i.wk.EXPLICIT_CONTENT:
        case i.wk.GORE_CONTENT:
        case i.wk.SELF_HARM_CONTENT:
            return (0, a.jsx)(r.fFY, {
                className: s()(n, o.obscuredIcon),
                color: "white",
            });
        case i.wk.SPOILER:
            return (0, a.jsx)(r.tEF, {
                size: "md",
                color: "currentColor",
                className: n,
            });
        default:
            return null;
    }
};
