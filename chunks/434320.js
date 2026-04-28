"use strict";
n.d(t, { f: () => u });
var i = n(627968),
    r = n(64700),
    s = n(408278),
    a = n(22231),
    o = n(990078),
    l = n(609174),
    _ = n(271597),
    d = n(985018);
let u = (e) => {
    let { onBeforeEdit: t, variant: n = "overlay-secondary" } = e,
        u = (0, l.Y_)(),
        c = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, _.p)({ initialEditingClipId: u.id });
            },
            [u, t],
        );
    return (0, i.jsx)(o.m, {
        text: d.intl.string(d.t.bt75uw),
        position: "top",
        children: (0, i.jsx)(s.K, {
            onClick: c,
            icon: a.R,
            "aria-label": d.intl.string(d.t.bt75uw),
            variant: n,
            size: "sm",
        }),
    });
};
