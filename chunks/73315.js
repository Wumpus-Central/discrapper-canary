t.d(n, { Z: () => c });
var s = t(54381);
t(473749);
var l = t(120356),
    a = t.n(l),
    r = t(481060),
    i = t(936141),
    o = t(836956);
let c = (e) => {
    let { obscureReason: n, iconClassname: t } = e;
    switch (n) {
        case i.wk.EXPLICIT_CONTENT:
        case i.wk.GORE_CONTENT:
        case i.wk.SELF_HARM_CONTENT:
            return (0, s.jsx)(r.fFY, {
                className: a()(t, o.obscuredIcon),
                color: "white",
            });
        case i.wk.SPOILER:
            return (0, s.jsx)(r.tEF, {
                size: "md",
                color: "currentColor",
                className: t,
            });
        default:
            return null;
    }
};
