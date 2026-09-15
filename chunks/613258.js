n.d(t, { A: () => E });
var l = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    a = n(575593),
    o = n(770178),
    d = n(590180),
    c = n(395856),
    u = n(682301),
    m = n(929283),
    h = n(758836),
    g = n(171934);
let x = [],
    f = [
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
function p(e) {
    let { config: t, baseLeft: n, transitioning: s, resolvedProduct: i } = e,
        r = window.innerHeight,
        o = i ?? d.A.getProduct(t.skuId),
        c = o?.items[0],
        u = o?.type,
        h = n + t.horizontalJitter;
    return (0, l.jsx)("div", {
        className: g.LY,
        style: {
            top: s ? -r - 384 : t.top,
            left: s ? h + t.transitionOffsetLeft : h,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != c && u === a.R.AVATAR_DECORATION && (0, l.jsx)(m.i, { item: c }),
    });
}
function b(e) {
    let { peaking: t, transitioning: n, parentWidth: i } = e,
        [o, d] = s.useState(!1),
        [m] = s.useState(() =>
            [...f]
                .sort(() => Math.random() - 0.5)
                .map((e) => ({
                    skuId: e,
                    top: 0 + 48 * Math.random(),
                    rotation: -32 + 64 * Math.random(),
                    horizontalJitter: -(20 * Math.random()),
                    transitionOffsetLeft: -20 - 35 * Math.random(),
                    transitionDelay: `${Math.random() / 3}s`,
                    transitionDuration: `${h.H1 - 200 * Math.random()}ms`,
                })),
        ),
        b = (0, c.$)("shop_transition_jumble"),
        E = s.useMemo(() => f, []),
        v = (0, u.hv)(b ? E : x, { needsCategory: !1 }),
        j = s.useMemo(() => {
            if (!b) return m;
            let e = m.filter((e) => {
                let t = v[e.skuId]?.product;
                return t?.items[0] != null && t.type === a.R.AVATAR_DECORATION;
            });
            return e.length > 0 ? e : m;
        }, [b, m, v]),
        S = s.useMemo(() => {
            if (null == i || i <= 0) return [];
            let e = Math.max(1, Math.floor(i / 130)),
                t = i / e;
            return Array.from({ length: e }, (e, n) => ({ config: j[n % j.length], baseLeft: n * t }));
        }, [i, j]);
    return (
        s.useEffect(() => {
            n && setTimeout(() => d(!0), h.H1);
        }, [n]),
        (0, l.jsx)("div", {
            className: r()(g.rA, { [g.Kb]: t, [g.pp]: o }),
            children: S.map((e, t) => {
                let { config: s, baseLeft: i } = e;
                return (0, l.jsx)(
                    p,
                    { config: s, baseLeft: i, transitioning: n, resolvedProduct: v[s.skuId]?.product },
                    s.skuId + t,
                );
            }),
        })
    );
}
let E = function (e) {
    let { peaking: t, transitioning: n } = e,
        i = s.useRef(null),
        [r, a] = s.useState(0),
        d = s.useCallback(() => {
            null != i.current && a(i.current.offsetWidth);
        }, []);
    return (
        (0, o.g)(i, d),
        (0, l.jsx)("div", {
            ref: i,
            className: g.eL,
            children: (0, l.jsx)(b, { peaking: t, transitioning: n, parentWidth: r }),
        })
    );
};
