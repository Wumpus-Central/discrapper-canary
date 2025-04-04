n.d(t, {
    Z: () => p,
    q: () => _
});
var r = n(192379),
    i = n(442837),
    o = n(241159),
    a = n(496929),
    s = n(558381),
    l = n(171246),
    c = n(314897),
    u = n(509545),
    d = n(238),
    f = n(55563);
function _(e) {
    r.useEffect(() => {
        p(e);
    }, [e]);
    let t = (0, i.Wu)(
            [d.Z, f.Z, u.Z],
            () => {
                let t = d.Z.getStoreLayout(e);
                return (0, l.Ej)(t.subscriptions, f.Z, u.Z);
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
    (0, o.k)(e), (0, s.oJ)(e), c.default.isAuthenticated() && (0, a.yD)(e, !1);
}
