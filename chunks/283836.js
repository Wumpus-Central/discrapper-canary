n.d(t, {
    Z: () => p,
    q: () => f
});
var r = n(73800),
    i = n(442837),
    a = n(241159),
    o = n(496929),
    s = n(558381),
    l = n(171246),
    c = n(314897),
    u = n(509545),
    d = n(238),
    _ = n(55563);
function f(e) {
    r.useEffect(() => {
        p(e);
    }, [e]);
    let t = (0, i.Wu)(
            [d.Z, _.Z, u.Z],
            () => {
                let t = d.Z.getStoreLayout(e);
                return (0, l.Ej)(t.subscriptions, _.Z, u.Z);
            },
            [e]
        ),
        n = (0, i.Wu)([d.Z], () => d.Z.getStoreLayout(e).otps, [e]);
    return r.useMemo(
        () => ({
            subscriptions: t,
            otps: n
        }),
        [t, n]
    );
}
function p(e) {
    (0, a.k)(e), (0, s.oJ)(e), c.default.isAuthenticated() && (0, o.yD)(e, !1);
}
