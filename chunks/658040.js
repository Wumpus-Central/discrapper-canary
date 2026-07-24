l.d(t, { Ay: () => u, Cy: () => s, sP: () => h, z0: () => d });
var a,
    i = l(17928),
    n = l(945810),
    r = l(710195),
    s = (((a = {}).CONTROL = "control"), (a.RED_EXPRESSIVE = "red_expressive"), (a.GREY_PRIMARY = "grey_primary"), a);
let o = { enabled: !1, bannerVariant: "control" },
    c = (0, n.mj)({
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
    let l = (0, i.bG)(
        [r.A],
        function () {
            return e ? c.getConfig(t) : o;
        },
        [e, t.location],
    );
    return { enabled: l.enabled, bannerVariant: l.bannerVariant };
}
let u = c;
