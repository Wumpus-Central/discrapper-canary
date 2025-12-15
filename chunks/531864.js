n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    i = n(979554),
    s = n(876917),
    c = n(597688),
    u = n(616066),
    d = n(215023),
    f = n(952113);
let g = {
        x: 160,
        y: 160,
    },
    p = [
        {
            left: 0,
            top: 20,
            rotation: -32,
            size: g,
            skuId: "1212569433839636530",
        },
        {
            left: 110,
            top: 48,
            rotation: -24,
            size: g,
            skuId: "1144308439720394944",
        },
        {
            left: 230,
            top: 12,
            rotation: 8,
            size: g,
            skuId: "1228251144065777765",
        },
        {
            left: 354,
            top: 44,
            rotation: -48,
            size: g,
            skuId: "1343751620965564426",
        },
        {
            left: 470,
            top: 52,
            rotation: 12,
            size: g,
            skuId: "1157407831348228141",
        },
        {
            left: 600,
            top: 28,
            rotation: -4,
            size: g,
            skuId: "1197344326133502032",
        },
        {
            left: 740,
            top: 12,
            rotation: -32,
            size: g,
            skuId: "1232071712695386162",
        },
        {
            left: 870,
            top: 40,
            rotation: -20,
            size: g,
            skuId: "1220513977683935373",
        },
        {
            left: 1010,
            top: 30,
            rotation: 15,
            size: g,
            skuId: "1144046002110738634",
        },
        {
            left: 1140,
            top: 52,
            rotation: -18,
            size: g,
            skuId: "1271174324375519273",
        },
        {
            left: 1270,
            top: 32,
            rotation: 25,
            size: g,
            skuId: "1237653964582031400",
        },
        {
            left: 1400,
            top: 33,
            rotation: -5,
            size: g,
            skuId: "1217625794382401577",
        },
    ],
    b = (e) => {
        let { peaking: t, transitioning: n, style: a } = e,
            g = window.innerHeight,
            [b, m] = l.useState(!1),
            C = p.map((e) => {
                let { skuId: t } = e;
                return c.Z.getProduct(t);
            });
        return (
            l.useEffect(() => {
                n &&
                    setTimeout(() => {
                        m(!0);
                    }, d.lb);
            }, [n]),
            (0, r.jsx)("div", {
                style: a,
                className: o()(f.jumbleWrapper, {
                    [f.peaking]: t,
                    [f.transitioned]: b,
                }),
                children: p.map((e, t) => {
                    var l, a;
                    let { top: o, left: c, rotation: p, size: b, skuId: m } = e,
                        h = null == (l = C[t]) ? void 0 : l.items[0],
                        v = null == (a = C[t]) ? void 0 : a.type,
                        E = v === i.Z.AVATAR_DECORATION ? 384 : 512;
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: f.asset,
                            style: {
                                top: n ? -g - E : o,
                                left: n ? "".concat(c - 75 - 350 * Math.random()) : c,
                                transform: "rotate(".concat(p, "deg)"),
                                height: b.y,
                                width: b.x,
                                transitionDelay: "".concat(Math.random() / 3, "s"),
                                transitionDuration: "".concat(d.lb - 200 * Math.random(), "ms"),
                            },
                            children: [
                                null != h && v === i.Z.AVATAR_DECORATION && (0, r.jsx)(u.R, { item: h }),
                                null != h &&
                                    v === i.Z.PROFILE_EFFECT &&
                                    (0, r.jsx)(s.Z, {
                                        skuId: h.skuId,
                                        isHighlighted: !0,
                                    }),
                            ],
                        },
                        m + t,
                    );
                }),
            })
        );
    };
