n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var a = n(397927),
    i = n(450481),
    s = n(985018);
let l = (e) => {
    let { product: t, onSuccess: n } = e,
        { handleUseNow: l, isApplying: o } = (0, i.p)({ product: t, onSuccess: n });
    return (0, r.jsx)(a.Button, {
        variant: "primary",
        onClick: l,
        loading: o,
        text: s.intl.string(s.t.MAS7uK),
        fullWidth: !0,
    });
};
