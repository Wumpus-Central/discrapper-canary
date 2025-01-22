r.d(n, {
    Z: function () {
        return _;
    },
    q: function () {
        return h;
    }
});
var i = r(192379),
    a = r(442837),
    o = r(241159),
    s = r(496929),
    l = r(558381),
    u = r(171246),
    c = r(314897),
    d = r(509545),
    f = r(238),
    p = r(55563);
function h(e) {
    i.useEffect(() => {
        _(e);
    }, [e]);
    let n = (0, a.Wu)(
            [f.Z, p.Z, d.Z],
            () => {
                let n = f.Z.getStoreLayout(e);
                return (0, u.Ej)(n.subscriptions, p.Z, d.Z);
            },
            [e]
        ),
        r = (0, a.Wu)([f.Z], () => f.Z.getStoreLayout(e).otps, [e]);
    return i.useMemo(
        () => ({
            subscriptions: n,
            otps: r
        }),
        [n, r]
    );
}
function _(e) {
    (0, o.k)(e), (0, l.oJ)(e), c.default.isAuthenticated() && (0, s.yD)(e, !1);
}
