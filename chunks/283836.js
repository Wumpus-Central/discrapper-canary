r.d(n, {
    Z: function () {
        return p;
    },
    q: function () {
        return h;
    }
});
var i = r(192379),
    a = r(442837),
    s = r(241159),
    o = r(496929),
    l = r(558381),
    u = r(171246),
    c = r(314897),
    d = r(509545),
    f = r(238),
    _ = r(55563);
function h(e) {
    i.useEffect(() => {
        p(e);
    }, [e]);
    let n = (0, a.Wu)(
            [f.Z, _.Z, d.Z],
            () => {
                let n = f.Z.getStoreLayout(e);
                return (0, u.Ej)(n.subscriptions, _.Z, d.Z);
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
function p(e) {
    (0, s.k)(e), (0, l.oJ)(e), c.default.isAuthenticated() && (0, o.yD)(e, !1);
}
