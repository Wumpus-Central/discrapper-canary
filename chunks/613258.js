l.d(t, { A: () => E });
var n = l(477900),
    s = l(582128),
    i = l(503698),
    r = l.n(i),
    a = l(575593),
    o = l(770178),
    c = l(590180),
    d = l(395856),
    u = l(682301),
    m = l(929283),
    h = l(758836),
    g = l(171934);
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
    let { config: t, baseLeft: l, transitioning: s, resolvedProduct: i } = e,
        r = window.innerHeight,
        o = i ?? c.A.getProduct(t.skuId),
        d = o?.items[0],
        u = o?.type,
        h = l + t.horizontalJitter;
    return (0, n.jsx)("div", {
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
        children: null != d && u === a.R.AVATAR_DECORATION && (0, n.jsx)(m.i, { item: d }),
    });
}
function b(e) {
    let { peaking: t, transitioning: l, parentWidth: i } = e,
        [o, c] = s.useState(!1),
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
        b = (0, d.$)("shop_transition_jumble"),
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
            return Array.from({ length: e }, (e, l) => ({ config: j[l % j.length], baseLeft: l * t }));
        }, [i, j]);
    return (
        s.useEffect(() => {
            l && setTimeout(() => c(!0), h.H1);
        }, [l]),
        (0, n.jsx)("div", {
            className: r()(g.rA, { [g.Kb]: t, [g.pp]: o }),
            children: S.map((e, t) => {
                let { config: s, baseLeft: i } = e;
                return (0, n.jsx)(
                    p,
                    { config: s, baseLeft: i, transitioning: l, resolvedProduct: v[s.skuId]?.product },
                    s.skuId + t,
                );
            }),
        })
    );
}
let E = function (e) {
    let { peaking: t, transitioning: l } = e,
        i = s.useRef(null),
        [r, a] = s.useState(0),
        c = s.useCallback(() => {
            null != i.current && a(i.current.offsetWidth);
        }, []);
    return (
        (0, o.g)(i, c),
        (0, n.jsx)("div", {
            ref: i,
            className: g.eL,
            children: (0, n.jsx)(b, { peaking: t, transitioning: l, parentWidth: r }),
        })
    );
};
