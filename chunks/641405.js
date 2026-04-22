n.d(t, { A: () => o });
var i = n(627968),
    r = n(821609),
    a = n(450481),
    l = n(758836),
    s = n(985018);
let o = (e) => {
    let { product: t, onSuccess: n, onTrackClick: o } = e,
        { handleUseNow: c, isApplying: d } = (0, a.p)({ product: t, onSuccess: n });
    return (0, i.jsx)(r.$, {
        variant: "primary",
        onClick: () => {
            o?.(l.sH.USE_NOW), c();
        },
        loading: d,
        text: s.intl.string(s.t.MAS7uK),
        fullWidth: !0,
    });
};
