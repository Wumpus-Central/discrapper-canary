l.d(t, { Ay: () => u, Cy: () => s, sP: () => h, z0: () => d });
var i,
    n = l(17928),
    a = l(945810),
    r = l(710195),
    s = (((i = {}).CONTROL = "control"), (i.RED_EXPRESSIVE = "red_expressive"), (i.GREY_PRIMARY = "grey_primary"), i);
let o = { enabled: !1, bannerVariant: "control" },
    c = (0, a.mj)({
        name: "2026-07-past-due-checkout",
        kind: "user",
        defaultConfig: o,
        variations: {
            1: { enabled: !0, bannerVariant: "red_expressive" },
            2: { enabled: !0, bannerVariant: "grey_primary" },
        },
    });
function d(e) {
    let t = c.useConfig(e);
    return { enabled: t.enabled, bannerVariant: t.bannerVariant };
}
function h(e, t) {
    let l = (0, n.bG)(
        [r.A],
        function () {
            return e ? c.getConfig(t) : o;
        },
        [e, t.location],
    );
    return { enabled: l.enabled, bannerVariant: l.bannerVariant };
}
let u = c;
