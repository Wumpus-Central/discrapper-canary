n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(635552),
    l = n(388032);
let o = (e) => {
    let { product: t, onSuccess: n } = e,
        { handleUseNow: o, isApplying: s } = (0, a.W)({
            product: t,
            onSuccess: n,
        });
    return (0, r.jsx)(i.Button, {
        variant: "primary",
        onClick: o,
        loading: s,
        text: l.intl.string(l.t.MAS7uK),
        fullWidth: !0,
    });
};
