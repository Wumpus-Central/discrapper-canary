n.d(t, { V: () => j, j: () => v });
var l = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    a = n(199510),
    o = n.n(a),
    u = n(575593),
    c = n(765671),
    d = n(590180),
    m = n(395856),
    h = n(682301),
    g = n(929283),
    x = n(758836),
    f = n(171934);
let E = [],
    p = [
        "1212569433839636530",
        "1144308439720394944",
        "1228251144065777765",
        "1343751620965564426",
        "1157407831348228141",
        "1197344326133502032",
        "1232071712695386162",
        "1144046002110738634",
        "1271174324375519273",
        "1237653964582031400",
        "1217625794382401577",
        "1462116613871636542",
        "1458472704469499965",
        "1447654091072344195",
        "1432550258839392376",
        "1409898407849365565",
        "1404558257065824347",
    ];
function b(e) {
    let { config: t, baseLeft: n, transitioning: s, resolvedProduct: i } = e,
        r = window.innerHeight,
        a = i ?? d.A.getProduct(t.skuId),
        o = a?.items[0],
        c = a?.type,
        m = n + t.horizontalJitter,
        h = s ? t.transitionOffsetLeft : 0,
        x = s ? -r - 384 - t.top : t.top;
    return (0, l.jsx)("div", {
        className: f.LY,
        style: {
            bottom: 0,
            left: m,
            transform: `translate(${h}px, ${x}px) rotate(${t.rotation}deg)`,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != o && c === u.R.AVATAR_DECORATION && (0, l.jsx)(g.i, { item: o, className: f.my }),
    });
}
function _(e) {
    let { peaking: t, transitioning: n } = e,
        { ref: i, width: a } = (0, c.Ay)(),
        [d] = s.useState(() =>
            o()(p).map((e) => ({
                skuId: e,
                top: 0 + 48 * Math.random(),
                rotation: -32 + 64 * Math.random(),
                horizontalJitter: -(20 * Math.random()),
                transitionOffsetLeft: -20 - 35 * Math.random(),
                transitionDelay: `${Math.random() / 3}s`,
                transitionDuration: `${x.H1 - 200 * Math.random()}ms`,
            })),
        ),
        g = (0, m.$)("shop_transition_jumble"),
        _ = (0, h.hv)(g ? p : E, { needsCategory: !1 }),
        j = s.useMemo(() => {
            if (!g) return d;
            let e = d.filter((e) => {
                let t = _[e.skuId]?.product;
                return t?.items[0] != null && t.type === u.R.AVATAR_DECORATION;
            });
            return e.length > 0 ? e : d;
        }, [g, d, _]),
        v = s.useMemo(() => {
            if (null == a || a <= 0) return [];
            let e = Math.max(1, Math.floor(a / 130)),
                t = a / e;
            return Array.from({ length: e }, (e, n) => ({ config: j[n % j.length], baseLeft: n * t }));
        }, [a, j]);
    return (0, l.jsx)("div", {
        ref: i,
        className: r()(f.rA, { [f.Kb]: t }),
        children: v.map((e, t) => {
            let { config: s, baseLeft: i } = e;
            return (0, l.jsx)(
                b,
                { config: s, baseLeft: i, transitioning: n, resolvedProduct: _[s.skuId]?.product },
                s.skuId + t,
            );
        }),
    });
}
function j() {
    return (0, l.jsx)("div", { className: r()(f.I2, f.F$) });
}
function v(e) {
    let { isVisible: t, transitioning: n } = e;
    return (0, l.jsx)("div", { className: r()(f.I2, f.MU), children: (0, l.jsx)(_, { peaking: t, transitioning: n }) });
}
