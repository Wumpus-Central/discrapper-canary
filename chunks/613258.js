n.d(t, { A: () => b });
var l = n(477900),
    s = n(582128),
    i = n(503698),
    r = n.n(i),
    a = n(575593),
    o = n(770178),
    c = n(590180),
    d = n(395856),
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
        o = i ?? c.A.getProduct(t.skuId),
        d = o?.items[0],
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
        children: null != d && u === a.R.AVATAR_DECORATION && (0, l.jsx)(m.i, { item: d }),
    });
}
let E = (e) => {
        let { peaking: t, transitioning: n, parentWidth: i } = e,
            [o, c] = s.useState(!1),
            [m, E] = s.useState([]),
            [b] = s.useState(() =>
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
            v = (0, d.$)("shop_transition_jumble"),
            j = s.useMemo(() => f, []),
            S = (0, u.hv)(v ? j : x, { needsCategory: !1 }),
            C = s.useMemo(() => {
                if (!v) return b;
                let e = b.filter((e) => {
                    let t = S[e.skuId]?.product;
                    return t?.items[0] != null && t.type === a.R.AVATAR_DECORATION;
                });
                return e.length > 0 ? e : b;
            }, [v, b, S]);
        return (
            s.useEffect(() => {
                if (null != i && i > 0) {
                    let e = Math.max(1, Math.floor(i / 130)),
                        t = i / e;
                    E(Array.from({ length: e }, (e, n) => ({ config: C[n % C.length], baseLeft: n * t })));
                }
            }, [i, C]),
            s.useEffect(() => {
                n && setTimeout(() => c(!0), h.H1);
            }, [n]),
            (0, l.jsx)("div", {
                className: r()(g.rA, { [g.Kb]: t, [g.pp]: o }),
                children: m.map((e, t) => {
                    let { config: s, baseLeft: i } = e;
                    return (0, l.jsx)(
                        p,
                        { config: s, baseLeft: i, transitioning: n, resolvedProduct: S[s.skuId]?.product },
                        s.skuId + t,
                    );
                }),
            })
        );
    },
    b = function (e) {
        let { peaking: t, transitioning: n } = e,
            i = s.useRef(null),
            [r, a] = s.useState(0),
            c = s.useCallback(() => {
                null != i.current && a(i.current.offsetWidth);
            }, []);
        return (
            (0, o.g)(i, c),
            (0, l.jsx)("div", {
                ref: i,
                className: g.eL,
                children: (0, l.jsx)(E, { peaking: t, transitioning: n, parentWidth: r }),
            })
        );
    };
