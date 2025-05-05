n.d(t, { m: () => E });
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(474936),
    s = n(192826),
    l = n(426831),
    c = n(257510),
    u = n(74838),
    d = n(720834),
    f = n(385925),
    _ = n(588921),
    p = n(718720),
    h = n(721513),
    m = n(959191);
let g = {
        [o.Cj.STANDARD_BOX]: f,
        [o.Cj.CAKE]: _,
        [o.Cj.CHEST]: p,
        [o.Cj.COFFEE]: h,
        [o.Cj.SNOWGLOBE]: '',
        [o.Cj.BOX]: '',
        [o.Cj.CUP]: '',
        [o.Cj.SEASONAL_CAKE]: c,
        [o.Cj.SEASONAL_CHEST]: u,
        [o.Cj.SEASONAL_COFFEE]: d,
        [o.Cj.SEASONAL_STANDARD_BOX]: l,
        [o.Cj.NITROWEEN_STANDARD]: m.Z
    },
    E = i.forwardRef(function (e, t) {
        let { isSelected: n, giftStyle: i, setSelectedGiftStyle: o, onFocus: l, onBlur: c } = e;
        return (0, r.jsx)(a.P3F, {
            className: s.button,
            innerRef: t,
            onClick: () => o(i),
            onFocus: l,
            onBlur: c,
            children: (0, r.jsx)('img', {
                style: {
                    width: '100%',
                    height: '100%'
                },
                alt: '',
                src: g[i],
                className: n ? s.customGiftBoxHighlighted : s.customGiftBox
            })
        });
    });
