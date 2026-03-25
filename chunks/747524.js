"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(672385),
    r = n(985018),
    a = n(776814);
function o(e) {
    let { handleOpenProfile: t, analyticsLocations: n, context: o } = e;
    return (0, i.jsx)("div", {
        className: a.q,
        children: (0, i.jsx)(s.DUT, {
            onClick: () => {
                t(), (0, l.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: n, ...o });
            },
            className: a.w,
            children: (0, i.jsx)(s.Text, {
                color: "text-strong",
                variant: "text-sm/normal",
                children: r.intl.string(r.t["+Xp3hq"]),
            }),
        }),
    });
}
