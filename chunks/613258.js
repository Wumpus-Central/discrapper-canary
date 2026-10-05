n.d(t, { A: () => v });
var l = n(477900),
    s = n(582128),
    r = n(503698),
    i = n.n(r),
    a = n(575593),
    o = n(770178),
    u = n(590180),
    c = n(395856),
    d = n(682301),
    m = n(929283),
    h = n(758836),
    g = n(171934);
let f = [],
    x = [
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
function E(e) {
    let { config: t, baseLeft: n, transitioning: s, resolvedProduct: r } = e,
        i = window.innerHeight,
        o = r ?? u.A.getProduct(t.skuId),
        c = o?.items[0],
        d = o?.type,
        h = n + t.horizontalJitter;
    return (0, l.jsx)("div", {
        className: g.LY,
        style: {
            top: s ? -i - 384 : t.top,
            left: s ? h + t.transitionOffsetLeft : h,
            transform: `rotate(${t.rotation}deg)`,
            height: 160,
            width: 160,
            transitionDelay: t.transitionDelay,
            transitionDuration: t.transitionDuration,
        },
        children: null != c && d === a.R.AVATAR_DECORATION && (0, l.jsx)(m.i, { item: c }),
    });
}
function p(e) {
    let { peaking: t, transitioning: n, parentWidth: r } = e,
        [o, u] = s.useState(!1),
        [m] = s.useState(() =>
            [...x]
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
        p = (0, c.$)("shop_transition_jumble"),
        v = s.useMemo(() => x, []),
        _ = (0, d.hv)(p ? v : f, { needsCategory: !1 }),
        b = s.useMemo(() => {
            if (!p) return m;
            let e = m.filter((e) => {
                let t = _[e.skuId]?.product;
                return t?.items[0] != null && t.type === a.R.AVATAR_DECORATION;
            });
            return e.length > 0 ? e : m;
        }, [p, m, _]),
        C = s.useMemo(() => {
            if (null == r || r <= 0) return [];
            let e = Math.max(1, Math.floor(r / 130)),
                t = r / e;
            return Array.from({ length: e }, (e, n) => ({ config: b[n % b.length], baseLeft: n * t }));
        }, [r, b]);
    return (
        s.useEffect(() => {
            n && setTimeout(() => u(!0), h.H1);
        }, [n]),
        (0, l.jsx)("div", {
            className: i()(g.rA, { [g.Kb]: t, [g.pp]: o }),
            children: C.map((e, t) => {
                let { config: s, baseLeft: r } = e;
                return (0, l.jsx)(
                    E,
                    { config: s, baseLeft: r, transitioning: n, resolvedProduct: _[s.skuId]?.product },
                    s.skuId + t,
                );
            }),
        })
    );
}
let v = function (e) {
    let { peaking: t, transitioning: n } = e,
        r = s.useRef(null),
        [i, a] = s.useState(0),
        u = s.useCallback(() => {
            null != r.current && a(r.current.offsetWidth);
        }, []);
    return (
        (0, o.g)(r, u),
        (0, l.jsx)("div", {
            ref: r,
            className: g.eL,
            children: (0, l.jsx)(p, { peaking: t, transitioning: n, parentWidth: i }),
        })
    );
};
