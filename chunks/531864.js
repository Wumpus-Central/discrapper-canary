n.d(t, { Z: () => p }), n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(979554),
    o = n(876917),
    d = n(597688),
    c = n(616066),
    u = n(215023),
    C = n(549179);
let h = {
        x: 160,
        y: 160
    },
    m = [
        {
            left: 0,
            top: 20,
            rotation: -32,
            size: h,
            skuId: '1212569433839636530'
        },
        {
            left: 110,
            top: 48,
            rotation: -24,
            size: h,
            skuId: '1144308439720394944'
        },
        {
            left: 230,
            top: 12,
            rotation: 8,
            size: h,
            skuId: '1228251144065777765'
        },
        {
            left: 354,
            top: 44,
            rotation: -48,
            size: h,
            skuId: '1262491137394868308'
        },
        {
            left: 470,
            top: 52,
            rotation: 12,
            size: h,
            skuId: '1157407831348228141'
        },
        {
            left: 600,
            top: 28,
            rotation: -4,
            size: h,
            skuId: '1197344326133502032'
        },
        {
            left: 740,
            top: 12,
            rotation: -32,
            size: h,
            skuId: '1232071712695386162'
        },
        {
            left: 870,
            top: 40,
            rotation: -20,
            size: h,
            skuId: '1220513977683935373'
        },
        {
            left: 1010,
            top: 30,
            rotation: 15,
            size: h,
            skuId: '1144046002110738634'
        },
        {
            left: 1140,
            top: 52,
            rotation: -18,
            size: h,
            skuId: '1271174324375519273'
        },
        {
            left: 1270,
            top: 32,
            rotation: 25,
            size: h,
            skuId: '1237653964582031400'
        },
        {
            left: 1400,
            top: 33,
            rotation: -5,
            size: h,
            skuId: '1217625794382401577'
        }
    ],
    p = (e) => {
        let { peaking: t, transitioning: n, style: i } = e,
            h = window.innerHeight,
            [p, g] = r.useState(!1),
            f = m.map((e) => {
                let { skuId: t } = e;
                return d.Z.getProduct(t);
            });
        return (
            r.useEffect(() => {
                n &&
                    setTimeout(() => {
                        g(!0);
                    }, u.lb);
            }, [n]),
            (0, l.jsx)('div', {
                style: i,
                className: a()(C.jumbleWrapper, {
                    [C.peaking]: t,
                    [C.transitioned]: p
                }),
                children: m.map((e, t) => {
                    var r, i;
                    let { top: a, left: d, rotation: m, size: p, skuId: g } = e,
                        x = null === (r = f[t]) || void 0 === r ? void 0 : r.items[0],
                        b = null === (i = f[t]) || void 0 === i ? void 0 : i.type,
                        v = b === s.Z.AVATAR_DECORATION ? 384 : 512;
                    return (0, l.jsxs)(
                        'div',
                        {
                            className: C.asset,
                            style: {
                                top: n ? -h - v : a,
                                left: n ? ''.concat(d - 75 - 350 * Math.random()) : d,
                                transform: 'rotate('.concat(m, 'deg)'),
                                height: p.y,
                                width: p.x,
                                transitionDelay: ''.concat(Math.random() / 3, 's'),
                                transitionDuration: ''.concat(u.lb - 200 * Math.random(), 'ms')
                            },
                            children: [
                                null != x && b === s.Z.AVATAR_DECORATION && (0, l.jsx)(c.R, { item: x }),
                                null != x &&
                                    b === s.Z.PROFILE_EFFECT &&
                                    (0, l.jsx)(o.Z, {
                                        profileEffectId: x.id,
                                        isPurchased: !1,
                                        isHovering: !0
                                    })
                            ]
                        },
                        g + t
                    );
                })
            })
        );
    };
