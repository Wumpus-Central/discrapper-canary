"use strict";
s.d(t, { A: () => p });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(575593),
    o = s(770178),
    c = s(590180),
    d = s(929283),
    u = s(758836),
    g = s(275483);
let h = [
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
    _ = (e) => {
        let { config: t, baseLeft: s, transitioning: l } = e,
            r = window.innerHeight,
            a = c.A.getProduct(t.skuId),
            o = a?.items[0],
            u = a?.type,
            h = s + t.horizontalJitter;
        return (0, n.jsx)("div", {
            className: g.LY,
            style: {
                top: l ? -r - 384 : t.top,
                left: l ? h + t.transitionOffsetLeft : h,
                transform: `rotate(${t.rotation}deg)`,
                height: 160,
                width: 160,
                transitionDelay: t.transitionDelay,
                transitionDuration: t.transitionDuration,
            },
            children: null != o && u === i.R.AVATAR_DECORATION && (0, n.jsx)(d.i, { item: o }),
        });
    },
    m = (e) => {
        let { peaking: t, transitioning: s, parentWidth: r } = e,
            [i, o] = l.useState(!1),
            [c, d] = l.useState([]),
            [m] = l.useState(() =>
                [...h]
                    .sort(() => Math.random() - 0.5)
                    .map((e) => ({
                        skuId: e,
                        top: 0 + 48 * Math.random(),
                        rotation: -32 + 64 * Math.random(),
                        horizontalJitter: -(20 * Math.random()),
                        transitionOffsetLeft: -20 - 35 * Math.random(),
                        transitionDelay: `${Math.random() / 3}s`,
                        transitionDuration: `${u.H1 - 200 * Math.random()}ms`,
                    })),
            );
        return (
            l.useEffect(() => {
                if (null != r && r > 0) {
                    let e = Math.max(1, Math.floor(r / 130)),
                        t = r / e;
                    d(Array.from({ length: e }, (e, s) => ({ config: m[s % m.length], baseLeft: s * t })));
                }
            }, [r, m]),
            l.useEffect(() => {
                s && setTimeout(() => o(!0), u.H1);
            }, [s]),
            (0, n.jsx)("div", {
                className: a()(g.rA, { [g.Kb]: t, [g.pp]: i }),
                children: c.map((e, t) => {
                    let { config: l, baseLeft: r } = e;
                    return (0, n.jsx)(_, { config: l, baseLeft: r, transitioning: s }, l.skuId + t);
                }),
            })
        );
    },
    p = (e) => {
        let { peaking: t, transitioning: s } = e,
            r = l.useRef(null),
            [a, i] = l.useState(0),
            c = l.useCallback(() => {
                null != r.current && i(r.current.offsetWidth);
            }, []);
        return (
            (0, o.g)(r, c),
            (0, n.jsx)("div", {
                ref: r,
                className: g.eL,
                children: (0, n.jsx)(m, { peaking: t, transitioning: s, parentWidth: a }),
            })
        );
    };
