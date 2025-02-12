n.d(t, { m: () => E });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(474936),
    o = n(681025),
    l = n(426831),
    u = n(257510),
    c = n(74838),
    d = n(720834),
    f = n(385925),
    _ = n(588921),
    p = n(718720),
    h = n(721513),
    m = n(959191);
let g = {
        [s.Cj.STANDARD_BOX]: f,
        [s.Cj.CAKE]: _,
        [s.Cj.CHEST]: p,
        [s.Cj.COFFEE]: h,
        [s.Cj.SNOWGLOBE]: '',
        [s.Cj.BOX]: '',
        [s.Cj.CUP]: '',
        [s.Cj.SEASONAL_CAKE]: u,
        [s.Cj.SEASONAL_CHEST]: c,
        [s.Cj.SEASONAL_COFFEE]: d,
        [s.Cj.SEASONAL_STANDARD_BOX]: l,
        [s.Cj.NITROWEEN_STANDARD]: m.Z
    },
    E = r.forwardRef(function (e, t) {
        let { isSelected: n, giftStyle: r, setSelectedGiftStyle: s, onFocus: l, onBlur: u } = e;
        return (0, i.jsx)(a.P3F, {
            className: o.button,
            innerRef: t,
            onClick: () => s(r),
            onFocus: l,
            onBlur: u,
            children: (0, i.jsx)('img', {
                style: {
                    width: '100%',
                    height: '100%'
                },
                alt: '',
                src: g[r],
                className: n ? o.customGiftBoxHighlighted : o.customGiftBox
            })
        });
    });
