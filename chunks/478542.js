"use strict";
n.d(t, { p: () => u });
var r = n(627968),
    i = n(64700),
    s = n(113325),
    a = n(815021),
    o = n(985018),
    l = n(96867);
function u(e) {
    let { onClick: t, "aria-label": n = o.intl.string(o.t.cpT0Cq) } = e,
        { firstFocusableItemProps: u } = i.useContext(s.M);
    return (0, r.jsx)("div", {
        className: l.b,
        children: (0, r.jsx)(a.J, { size: "xs", "aria-label": n, onClick: t, variant: "overlay-secondary", ...u }),
    });
}
