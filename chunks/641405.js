n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var l = n(397927),
    a = n(450481),
    i = n(985018);
let s = (e) => {
    let { product: t, onSuccess: n } = e,
        { handleUseNow: s, isApplying: c } = (0, a.p)({
            product: t,
            onSuccess: n,
        });
    return (0, r.jsx)(l.Button, {
        variant: "primary",
        onClick: s,
        loading: c,
        text: i.intl.string(i.t.MAS7uK),
        fullWidth: !0,
    });
};
