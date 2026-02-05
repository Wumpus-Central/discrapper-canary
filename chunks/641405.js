n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(450481),
    l = n(985018);
let s = (e) => {
    let { product: t, onSuccess: n } = e,
        { handleUseNow: s, isApplying: c } = (0, a.p)({ product: t, onSuccess: n });
    return (0, r.jsx)(i.Button, {
        variant: "primary",
        onClick: s,
        loading: c,
        text: l.intl.string(l.t.MAS7uK),
        fullWidth: !0,
    });
};
