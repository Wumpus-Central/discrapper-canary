n.d(t, { A: () => o });
var r = n(627968),
    i = n(821609),
    l = n(450481),
    a = n(758836),
    s = n(375708);
let o = (e) => {
    let { product: t, onSuccess: n, onTrackClick: o } = e,
        { handleUseNow: c, isApplying: u } = (0, l.p)({ product: t, onSuccess: n });
    return (0, r.jsx)(i.$, {
        variant: "primary",
        onClick: () => {
            o?.(a.sH.USE_NOW), c();
        },
        loading: u,
        text: s.intl.string(s.t.MAS7uK),
        fullWidth: !0,
    });
};
