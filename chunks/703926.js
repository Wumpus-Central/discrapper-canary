r.d(n, {
    m: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(481060),
    s = r(474936),
    l = r(803731),
    u = r(426831),
    c = r(257510),
    d = r(74838),
    f = r(720834),
    p = r(385925),
    h = r(704253),
    _ = r(718720),
    m = r(721513),
    g = r(959191);
let E = {
        [s.Cj.STANDARD_BOX]: p,
        [s.Cj.CAKE]: h,
        [s.Cj.CHEST]: _,
        [s.Cj.COFFEE]: m,
        [s.Cj.SNOWGLOBE]: '',
        [s.Cj.BOX]: '',
        [s.Cj.CUP]: '',
        [s.Cj.SEASONAL_CAKE]: c,
        [s.Cj.SEASONAL_CHEST]: d,
        [s.Cj.SEASONAL_COFFEE]: f,
        [s.Cj.SEASONAL_STANDARD_BOX]: u,
        [s.Cj.NITROWEEN_STANDARD]: g.Z
    },
    v = a.forwardRef(function (e, n) {
        let { isSelected: r, giftStyle: a, setSelectedGiftStyle: s, onFocus: u, onBlur: c } = e;
        return (0, i.jsx)(o.Clickable, {
            className: l.button,
            innerRef: n,
            onClick: () => s(a),
            onFocus: u,
            onBlur: c,
            children: (0, i.jsx)('img', {
                style: {
                    width: '100%',
                    height: '100%'
                },
                alt: '',
                src: E[a],
                className: r ? l.customGiftBoxHighlighted : l.customGiftBox
            })
        });
    });
