r.d(t, { Z: () => i });
var n = r(192379),
    o = r(723184),
    a = r(877837);
let i = (0, o.handleHover)(function (e) {
    var t = e.hover,
        r = e.color,
        i = e.onClick,
        l = e.onSwatchHover,
        s = {
            position: 'relative',
            zIndex: '2',
            outline: '2px solid #fff',
            boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
        },
        u = (0, o.default)(
            {
                default: {
                    swatch: {
                        width: '25px',
                        height: '25px',
                        fontSize: '0'
                    }
                },
                hover: { swatch: s }
            },
            { hover: t }
        );
    return n.createElement(
        'div',
        { style: u.swatch },
        n.createElement(a.m4, {
            color: r,
            onClick: i,
            onHover: l,
            focusStyle: s
        })
    );
});
