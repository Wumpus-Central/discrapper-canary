"use strict";
r.d(t, { A: () => l });
var n = r(627968);
r(64700);
var i = r(397927),
    s = r(450481),
    a = r(985018);
let l = (e) => {
    let { product: t, onSuccess: r } = e,
        { handleUseNow: l, isApplying: c } = (0, s.p)({ product: t, onSuccess: r });
    return (0, n.jsx)(i.Button, {
        variant: "primary",
        onClick: l,
        loading: c,
        text: a.intl.string(a.t.MAS7uK),
        fullWidth: !0,
    });
};
