n.d(t, {
    A: () => h,
}),
    n(896048),
    n(638769);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(575593),
    o = n(770178),
    c = n(590180),
    u = n(929283),
    d = n(758836),
    g = n(289920);
let f = [
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
    ],
    m = (e) => {
        let { config: t, baseLeft: n, transitioning: l } = e,
            s = window.innerHeight,
            a = c.A.getProduct(t.skuId),
            o = null == a ? void 0 : a.items[0],
            d = null == a ? void 0 : a.type,
            f = n + t.horizontalJitter;
        return (0, r.jsx)("div", {
            className: g.LY,
            style: {
                top: l ? -s - 384 : t.top,
                left: l ? f + t.transitionOffsetLeft : f,
                transform: "rotate(".concat(t.rotation, "deg)"),
                height: 160,
                width: 160,
                transitionDelay: t.transitionDelay,
                transitionDuration: t.transitionDuration,
            },
            children:
                null != o &&
                d === i.R.AVATAR_DECORATION &&
                (0, r.jsx)(u.i, {
                    item: o,
                }),
        });
    },
    p = (e) => {
        let { peaking: t, transitioning: n, parentWidth: s } = e,
            [i, o] = l.useState(!1),
            [c, u] = l.useState([]),
            [p] = l.useState(() =>
                [...f]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: "".concat(Math.random() / 3, "s"),
                        transitionDuration: "".concat(d.H1 - 200 * Math.random(), "ms"),
                    })),
            );
        return (
            l.useEffect(() => {
                if (null != s && s > 0) {
                    let e = Math.max(1, Math.floor(s / 130)),
                        t = s / e;
                    u(
                        Array.from(
                            {
                                length: e,
                            },
                            (e, n) => ({
                                config: p[n % p.length],
                                baseLeft: n * t,
                            }),
                        ),
                    );
                }
            }, [s, p]),
            l.useEffect(() => {
                n && setTimeout(() => o(!0), d.H1);
            }, [n]),
            (0, r.jsx)("div", {
                className: a()(g.rA, {
                    [g.Kb]: t,
                    [g.pp]: i,
                }),
                children: c.map((e, t) => {
                    let { config: l, baseLeft: s } = e;
                    return (0, r.jsx)(
                        m,
                        {
                            config: l,
                            baseLeft: s,
                            transitioning: n,
                        },
                        l.skuId + t,
                    );
                }),
            })
        );
    },
    h = (e) => {
        let { peaking: t, transitioning: n } = e,
            s = l.useRef(null),
            [a, i] = l.useState(0),
            c = l.useCallback(() => {
                null != s.current && i(s.current.offsetWidth);
            }, []);
        return (
            (0, o.g)(s, c),
            (0, r.jsx)("div", {
                ref: s,
                className: g.eL,
                children: (0, r.jsx)(p, {
                    peaking: t,
                    transitioning: n,
                    parentWidth: a,
                }),
            })
        );
    };
