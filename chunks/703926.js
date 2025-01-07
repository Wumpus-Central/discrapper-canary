t.d(n, {
    m: function () {
        return E;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(481060),
    s = t(474936),
    a = t(803731),
    c = t(426831),
    o = t(257510),
    u = t(74838),
    d = t(720834),
    m = t(385925),
    p = t(704253),
    x = t(718720),
    h = t(721513),
    f = t(959191);
let v = {
        [s.Cj.STANDARD_BOX]: m,
        [s.Cj.CAKE]: p,
        [s.Cj.CHEST]: x,
        [s.Cj.COFFEE]: h,
        [s.Cj.SNOWGLOBE]: '',
        [s.Cj.BOX]: '',
        [s.Cj.CUP]: '',
        [s.Cj.SEASONAL_CAKE]: o,
        [s.Cj.SEASONAL_CHEST]: u,
        [s.Cj.SEASONAL_COFFEE]: d,
        [s.Cj.SEASONAL_STANDARD_BOX]: c,
        [s.Cj.NITROWEEN_STANDARD]: f.Z
    },
    E = l.forwardRef(function (e, n) {
        let { isSelected: t, giftStyle: l, setSelectedGiftStyle: s, onFocus: c, onBlur: o } = e;
        return (0, i.jsx)(r.Clickable, {
            className: a.button,
            innerRef: n,
            onClick: () => s(l),
            onFocus: c,
            onBlur: o,
            children: (0, i.jsx)('img', {
                style: {
                    width: '100%',
                    height: '100%'
                },
                alt: '',
                src: v[l],
                className: t ? a.customGiftBoxHighlighted : a.customGiftBox
            })
        });
    });
