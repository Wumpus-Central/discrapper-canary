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
    g = n(758836),
    h = n(171934);
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
        g = n + t.horizontalJitter;
    return (0, l.jsx)("div", {
        className: h.LY,
        style: {
            top: s ? -r - 384 : t.top,
            left: s ? g + t.transitionOffsetLeft : g,
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
            [a, o] = s.useState(!1),
            [c, m] = s.useState([]),
            [E] = s.useState(() =>
                [...f]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${g.H1 - 200 * Math.random()}ms`,
                    })),
            );
        s.useEffect(() => {
            if (null != i && i > 0) {
                let e = Math.max(1, Math.floor(i / 130)),
                    t = i / e;
                m(Array.from({ length: e }, (e, n) => ({ config: E[n % E.length], baseLeft: n * t })));
            }
        }, [i, E]),
            s.useEffect(() => {
                n && setTimeout(() => o(!0), g.H1);
            }, [n]);
        let b = (0, d.$)("shop_transition_jumble"),
            v = s.useMemo(
                () => [
                    ...new Set(
                        c.map((e) => {
                            let { config: t } = e;
                            return t.skuId;
                        }),
                    ),
                ],
                [c],
            ),
            j = (0, u.hv)(b ? v : x, { needsCategory: !1 });
        return (0, l.jsx)("div", {
            className: r()(h.rA, { [h.Kb]: t, [h.pp]: a }),
            children: c.map((e, t) => {
                let { config: s, baseLeft: i } = e;
                return (0, l.jsx)(
                    p,
                    { config: s, baseLeft: i, transitioning: n, resolvedProduct: j[s.skuId]?.product },
                    s.skuId + t,
                );
            }),
        });
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
                className: h.eL,
                children: (0, l.jsx)(E, { peaking: t, transitioning: n, parentWidth: r }),
            })
        );
    };
