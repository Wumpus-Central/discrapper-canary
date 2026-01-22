d.d(a, {
    A: () => f,
}),
    d(896048);
var c = d(64700),
    b = d(933725),
    t = d(849841);

function f(e, a) {
    let [d, f] = c.useState(!1),
        n = c.useCallback(async () => {
            null != e && (f(!0), await (0, b.m)(e, !0), f(!1)), null == a || a();
        }, [e, a]),
        r = (0, t.A)(e);
    return {
        isAdopting: d,
        onAdoptTag: n,
        onEditProfile: c.useCallback(() => {
            null == a || a(), r();
        }, [r, a]),
    };
}
