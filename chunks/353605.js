"use strict";
n.d(t, { k: () => u });
var i = n(627968),
    r = n(64700),
    s = n(408278),
    a = n(241326),
    o = n(990078),
    l = n(609174),
    _ = n(140423),
    d = n(985018);
let u = (e) => {
    let { onBeforeDelete: t, onAfterDelete: n, variant: u = "overlay-secondary" } = e,
        c = (0, l.Y_)(),
        E = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), (0, _.R)({ clips: [c], onAfterDelete: n, onBeforeDelete: t });
            },
            [c, n, t],
        );
    return (0, i.jsx)(o.m, {
        text: d.intl.string(d.t.oyYWHE),
        position: "top",
        children: (0, i.jsx)(s.K, {
            onClick: E,
            icon: a.u,
            "aria-label": d.intl.string(d.t.oyYWHE),
            variant: u,
            size: "sm",
        }),
    });
};
