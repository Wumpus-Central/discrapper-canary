n.d(t, { A: () => c });
var r = n(627968),
    i = n(821609),
    a = n(450481),
    l = n(758836),
    s = n(985018);
let c = (e) => {
    let { product: t, onSuccess: n, onTrackClick: c } = e,
        { handleUseNow: o, isApplying: d } = (0, a.p)({ product: t, onSuccess: n });
    return (0, r.jsx)(i.$, {
        variant: "primary",
        onClick: () => {
            c?.(l.sH.USE_NOW), o();
        },
        loading: d,
        text: s.intl.string(s.t.MAS7uK),
        fullWidth: !0,
    });
};
