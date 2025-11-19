n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(979554),
    o = n(876917),
    c = n(597688),
    u = n(616066),
    d = n(215023),
    g = n(721275);
let p = {
        x: 160,
        y: 160,
    },
    f = [
        {
            left: 0,
            top: 20,
            rotation: -32,
            size: p,
            skuId: "1212569433839636530",
        },
        {
            left: 110,
            top: 48,
            rotation: -24,
            size: p,
            skuId: "1144308439720394944",
        },
        {
            left: 230,
            top: 12,
            rotation: 8,
            size: p,
            skuId: "1228251144065777765",
        },
        {
            left: 354,
            top: 44,
            rotation: -48,
            size: p,
            skuId: "1343751620965564426",
        },
        {
            left: 470,
            top: 52,
            rotation: 12,
            size: p,
            skuId: "1157407831348228141",
        },
        {
            left: 600,
            top: 28,
            rotation: -4,
            size: p,
            skuId: "1197344326133502032",
        },
        {
            left: 740,
            top: 12,
            rotation: -32,
            size: p,
            skuId: "1232071712695386162",
        },
        {
            left: 870,
            top: 40,
            rotation: -20,
            size: p,
            skuId: "1220513977683935373",
        },
        {
            left: 1010,
            top: 30,
            rotation: 15,
            size: p,
            skuId: "1144046002110738634",
        },
        {
            left: 1140,
            top: 52,
            rotation: -18,
            size: p,
            skuId: "1271174324375519273",
        },
        {
            left: 1270,
            top: 32,
            rotation: 25,
            size: p,
            skuId: "1237653964582031400",
        },
        {
            left: 1400,
            top: 33,
            rotation: -5,
            size: p,
            skuId: "1217625794382401577",
        },
    ],
    m = (e) => {
        let { peaking: t, transitioning: n, style: i } = e,
            p = window.innerHeight,
            [m, h] = l.useState(!1),
            C = f.map((e) => {
                let { skuId: t } = e;
                return c.Z.getProduct(t);
            });
        return (
            l.useEffect(() => {
                n &&
                    setTimeout(() => {
                        h(!0);
                    }, d.lb);
            }, [n]),
            (0, r.jsx)("div", {
                style: i,
                className: a()(g.jumbleWrapper, {
                    [g.peaking]: t,
                    [g.transitioned]: m,
                }),
                children: f.map((e, t) => {
                    var l, i;
                    let { top: a, left: c, rotation: f, size: m, skuId: h } = e,
                        _ = null == (l = C[t]) ? void 0 : l.items[0],
                        b = null == (i = C[t]) ? void 0 : i.type,
                        v = b === s.Z.AVATAR_DECORATION ? 384 : 512;
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: g.asset,
                            style: {
                                top: n ? -p - v : a,
                                left: n ? "".concat(c - 75 - 350 * Math.random()) : c,
                                transform: "rotate(".concat(f, "deg)"),
                                height: m.y,
                                width: m.x,
                                transitionDelay: "".concat(Math.random() / 3, "s"),
                                transitionDuration: "".concat(d.lb - 200 * Math.random(), "ms"),
                            },
                            children: [
                                null != _ && b === s.Z.AVATAR_DECORATION && (0, r.jsx)(u.R, { item: _ }),
                                null != _ &&
                                    b === s.Z.PROFILE_EFFECT &&
                                    (0, r.jsx)(o.Z, {
                                        skuId: _.skuId,
                                        isPurchased: !1,
                                        isHighlighted: !0,
                                    }),
                            ],
                        },
                        h + t,
                    );
                }),
            })
        );
    };
