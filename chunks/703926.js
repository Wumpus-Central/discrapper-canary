n.d(t, { m: () => E });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(474936),
    s = n(129649),
    l = n(426831),
    c = n(257510),
    u = n(74838),
    d = n(720834),
    f = n(385925),
    p = n(588921),
    _ = n(718720),
    m = n(721513),
    h = n(959191);
let g = {
        [o.Cj.STANDARD_BOX]: f,
        [o.Cj.CAKE]: p,
        [o.Cj.CHEST]: _,
        [o.Cj.COFFEE]: m,
        [o.Cj.SNOWGLOBE]: "",
        [o.Cj.BOX]: "",
        [o.Cj.CUP]: "",
        [o.Cj.SEASONAL_CAKE]: c,
        [o.Cj.SEASONAL_CHEST]: u,
        [o.Cj.SEASONAL_COFFEE]: d,
        [o.Cj.SEASONAL_STANDARD_BOX]: l,
        [o.Cj.NITROWEEN_STANDARD]: h.Z,
    },
    E = i.forwardRef(function (e, t) {
        let { isSelected: n, giftStyle: i, setSelectedGiftStyle: o, onFocus: l, onBlur: c } = e;
        return (0, r.jsx)(a.P3F, {
            className: s.button,
            innerRef: t,
            onClick: () => o(i),
            onFocus: l,
            onBlur: c,
            children: (0, r.jsx)("img", {
                style: {
                    width: "100%",
                    height: "100%",
                },
                alt: "",
                src: g[i],
                className: n ? s.customGiftBoxHighlighted : s.customGiftBox,
            }),
        });
    });
