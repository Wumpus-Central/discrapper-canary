r.d(t, { Z: () => C }), r(47120);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    a = r.n(i),
    o = r(979554),
    s = r(876917),
    c = r(597688),
    d = r(616066),
    u = r(215023),
    p = r(587097);
let f = {
        x: 160,
        y: 160
    },
    h = [
        {
            left: 0,
            top: 20,
            rotation: -32,
            size: f,
            skuId: '1212569433839636530'
        },
        {
            left: 110,
            top: 48,
            rotation: -24,
            size: f,
            skuId: '1144308439720394944'
        },
        {
            left: 230,
            top: 12,
            rotation: 8,
            size: f,
            skuId: '1228251144065777765'
        },
        {
            left: 354,
            top: 44,
            rotation: -48,
            size: f,
            skuId: '1262491137394868308'
        },
        {
            left: 470,
            top: 52,
            rotation: 12,
            size: f,
            skuId: '1157407831348228141'
        },
        {
            left: 600,
            top: 28,
            rotation: -4,
            size: f,
            skuId: '1197344326133502032'
        },
        {
            left: 740,
            top: 12,
            rotation: -32,
            size: f,
            skuId: '1232071712695386162'
        },
        {
            left: 870,
            top: 40,
            rotation: -20,
            size: f,
            skuId: '1220513977683935373'
        },
        {
            left: 1010,
            top: 30,
            rotation: 15,
            size: f,
            skuId: '1144046002110738634'
        },
        {
            left: 1140,
            top: 52,
            rotation: -18,
            size: f,
            skuId: '1271174324375519273'
        },
        {
            left: 1270,
            top: 32,
            rotation: 25,
            size: f,
            skuId: '1237653964582031400'
        },
        {
            left: 1400,
            top: 33,
            rotation: -5,
            size: f,
            skuId: '1217625794382401577'
        }
    ],
    C = (e) => {
        let { peaking: t, transitioning: r, style: i } = e,
            f = window.innerHeight,
            [C, m] = l.useState(!1),
            b = h.map((e) => {
                let { skuId: t } = e;
                return c.Z.getProduct(t);
            });
        return (
            l.useEffect(() => {
                r &&
                    setTimeout(() => {
                        m(!0);
                    }, u.lb);
            }, [r]),
            (0, n.jsx)('div', {
                style: i,
                className: a()(p.jumbleWrapper, {
                    [p.peaking]: t,
                    [p.transitioned]: C
                }),
                children: h.map((e, t) => {
                    var l, i;
                    let { top: a, left: c, rotation: h, size: C, skuId: m } = e,
                        g = null === (l = b[t]) || void 0 === l ? void 0 : l.items[0],
                        v = null === (i = b[t]) || void 0 === i ? void 0 : i.type,
                        x = v === o.Z.AVATAR_DECORATION ? 384 : 512;
                    return (0, n.jsxs)(
                        'div',
                        {
                            className: p.asset,
                            style: {
                                top: r ? -f - x : a,
                                left: r ? ''.concat(c - 75 - 350 * Math.random()) : c,
                                transform: 'rotate('.concat(h, 'deg)'),
                                height: C.y,
                                width: C.x,
                                transitionDelay: ''.concat(Math.random() / 3, 's'),
                                transitionDuration: ''.concat(u.lb - 200 * Math.random(), 'ms')
                            },
                            children: [
                                null != g && v === o.Z.AVATAR_DECORATION && (0, n.jsx)(d.R, { item: g }),
                                null != g &&
                                    v === o.Z.PROFILE_EFFECT &&
                                    (0, n.jsx)(s.Z, {
                                        profileEffectId: g.id,
                                        isPurchased: !1,
                                        isHovering: !0
                                    })
                            ]
                        },
                        m + t
                    );
                })
            })
        );
    };
