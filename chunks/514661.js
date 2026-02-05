n.d(t, { A: () => l });
var a = n(64700),
    s = n(933725),
    i = n(849841);
function l(e, t) {
    let [n, l] = a.useState(!1),
        r = a.useCallback(async () => {
            null != e && (l(!0), await (0, s.m)(e, !0), l(!1)), t?.();
        }, [e, t]),
        o = (0, i.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: r,
        onEditProfile: a.useCallback(() => {
            t?.(), o();
        }, [o, t]),
    };
}
