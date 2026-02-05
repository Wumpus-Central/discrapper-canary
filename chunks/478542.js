"use strict";
n.d(t, { p: () => u });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(732955),
    o = n(985018),
    l = n(161222);
function u(e) {
    let { onClick: t, "aria-label": n = o.intl.string(o.t.cpT0Cq) } = e,
        { firstFocusableItemProps: u } = i.useContext(a.MVj);
    return (0, r.jsx)("div", {
        className: l.b,
        children: (0, r.jsx)(s.JnF, { size: "xs", "aria-label": n, onClick: t, variant: "overlay-secondary", ...u }),
    });
}
