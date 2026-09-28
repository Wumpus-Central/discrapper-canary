l.d(t, { A: () => _ });
var n = l(477900),
    s = l(582128),
    i = l(503698),
    r = l.n(i),
    a = l(575593),
    o = l(770178),
    u = l(590180),
    c = l(395856),
    d = l(682301),
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
        o = i ?? u.A.getProduct(t.skuId),
        c = o?.items[0],
        d = o?.type,
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
        children: null != c && d === a.R.AVATAR_DECORATION && (0, n.jsx)(m.i, { item: c }),
    });
}
function E(e) {
    let { peaking: t, transitioning: l, parentWidth: i } = e,
        [o, u] = s.useState(!1),
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
        E = (0, c.$)("shop_transition_jumble"),
        _ = s.useMemo(() => f, []),
        b = (0, d.hv)(E ? _ : x, { needsCategory: !1 }),
        C = s.useMemo(() => {
            if (!E) return m;
            let e = m.filter((e) => {
                let t = b[e.skuId]?.product;
                return t?.items[0] != null && t.type === a.R.AVATAR_DECORATION;
            });
            return e.length > 0 ? e : m;
        }, [E, m, b]),
        v = s.useMemo(() => {
            if (null == i || i <= 0) return [];
            let e = Math.max(1, Math.floor(i / 130)),
                t = i / e;
            return Array.from({ length: e }, (e, l) => ({ config: C[l % C.length], baseLeft: l * t }));
        }, [i, C]);
    return (
        s.useEffect(() => {
            l && setTimeout(() => u(!0), h.H1);
        }, [l]),
        (0, n.jsx)("div", {
            className: r()(g.rA, { [g.Kb]: t, [g.pp]: o }),
            children: v.map((e, t) => {
                let { config: s, baseLeft: i } = e;
                return (0, n.jsx)(
                    p,
                    { config: s, baseLeft: i, transitioning: l, resolvedProduct: b[s.skuId]?.product },
                    s.skuId + t,
                );
            }),
        })
    );
}
let _ = function (e) {
    let { peaking: t, transitioning: l } = e,
        i = s.useRef(null),
        [r, a] = s.useState(0),
        u = s.useCallback(() => {
            null != i.current && a(i.current.offsetWidth);
        }, []);
    return (
        (0, o.g)(i, u),
        (0, n.jsx)("div", {
            ref: i,
            className: g.eL,
            children: (0, n.jsx)(E, { peaking: t, transitioning: l, parentWidth: r }),
        })
    );
};
