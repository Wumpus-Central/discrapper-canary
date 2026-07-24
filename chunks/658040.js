"use strict";
n.d(t, { Ay: () => _, Cy: () => l, sP: () => u, z0: () => c });
var i,
    r = n(17928),
    a = n(945810),
    s = n(710195),
    l = (((i = {}).CONTROL = "control"), (i.RED_EXPRESSIVE = "red_expressive"), (i.GREY_PRIMARY = "grey_primary"), i);
let o = { enabled: !1, bannerVariant: "control" },
    d = (0, a.mj)({
        name: "2026-07-past-due-checkout",
        kind: "user",
        defaultConfig: o,
        variations: {
            1: { enabled: !0, bannerVariant: "red_expressive" },
            2: { enabled: !0, bannerVariant: "grey_primary" },
        },
    });
function c(e) {
    let t = d.useConfig(e);
    return { enabled: t.enabled, bannerVariant: t.bannerVariant };
}
function u(e, t) {
    let n = (0, r.bG)(
        [s.A],
        function () {
            return e ? d.getConfig(t) : o;
        },
        [e, t.location],
    );
    return { enabled: n.enabled, bannerVariant: n.bannerVariant };
}
let _ = d;
