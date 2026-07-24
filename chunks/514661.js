t.d(s, { A: () => i });
var e = t(64700),
    u = t(933725),
    c = t(849841);
function i(a, s) {
    let [t, i] = e.useState(!1),
        l = e.useCallback(async () => {
            null != a && (i(!0), await (0, u.m)(a, !0), i(!1)), s?.();
        }, [a, s]),
        n = (0, c.A)(a);
    return {
        isAdopting: t,
        onAdoptTag: l,
        onEditProfile: e.useCallback(() => {
            s?.(), n();
        }, [n, s]),
    };
}
