n.d(t, {
    Z: () => p,
    q: () => _
});
var i = n(192379),
    r = n(442837),
    a = n(241159),
    s = n(496929),
    o = n(558381),
    l = n(171246),
    u = n(314897),
    c = n(509545),
    d = n(238),
    f = n(55563);
function _(e) {
    i.useEffect(() => {
        p(e);
    }, [e]);
    let t = (0, r.Wu)(
            [d.Z, f.Z, c.Z],
            () => {
                let t = d.Z.getStoreLayout(e);
                return (0, l.Ej)(t.subscriptions, f.Z, c.Z);
            },
            [e]
        ),
        n = (0, r.Wu)([d.Z], () => d.Z.getStoreLayout(e).otps, [e]);
    return i.useMemo(
        () => ({
            subscriptions: t,
            otps: n
        }),
        [t, n]
    );
}
function p(e) {
    (0, a.k)(e), (0, o.oJ)(e), u.default.isAuthenticated() && (0, s.yD)(e, !1);
}
