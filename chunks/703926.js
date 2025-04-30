n.d(t, { m: () => E });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(474936),
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
        [a.Cj.STANDARD_BOX]: f,
        [a.Cj.CAKE]: _,
        [a.Cj.CHEST]: p,
        [a.Cj.COFFEE]: h,
        [a.Cj.SNOWGLOBE]: '',
        [a.Cj.BOX]: '',
        [a.Cj.CUP]: '',
        [a.Cj.SEASONAL_CAKE]: c,
        [a.Cj.SEASONAL_CHEST]: u,
        [a.Cj.SEASONAL_COFFEE]: d,
        [a.Cj.SEASONAL_STANDARD_BOX]: l,
        [a.Cj.NITROWEEN_STANDARD]: m.Z
    },
    E = i.forwardRef(function (e, t) {
        let { isSelected: n, giftStyle: i, setSelectedGiftStyle: a, onFocus: l, onBlur: c } = e;
        return (0, r.jsx)(o.P3F, {
            className: s.button,
            innerRef: t,
            onClick: () => a(i),
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
