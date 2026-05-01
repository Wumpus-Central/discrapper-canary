"use strict";
n.d(t, { f: () => c });
var i = n(627968),
    r = n(64700),
    s = n(22231),
    a = n(821609),
    o = n(609174),
    l = n(271597),
    u = n(375708);
let c = (e) => {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
        c = (0, o.Y_)(),
        d = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), t?.(), (0, l.p)({ initialEditingClipId: c.id });
            },
            [c, t],
        );
    return (0, i.jsx)(a.$, {
        onClick: d,
        icon: s.R,
        variant: n,
        size: "sm",
        text: u.intl.string(u.t.bt75uw),
        fullWidth: !0,
    });
};
