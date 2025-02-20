n.d(t, { Z: () => s });
var r = n(192379),
    i = n(723184),
    o = n(877837),
    a = function (e) {
        var t = e.hover,
            n = e.color,
            a = e.onClick,
            s = e.onSwatchHover,
            l = {
                position: 'relative',
                zIndex: '2',
                outline: '2px solid #fff',
                boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
            },
            c = (0, i.default)(
                {
                    default: {
                        swatch: {
                            width: '25px',
                            height: '25px',
                            fontSize: '0'
                        }
                    },
                    hover: { swatch: l }
                },
                { hover: t }
            );
        return r.createElement(
            'div',
            { style: c.swatch },
            r.createElement(o.m4, {
                color: n,
                onClick: a,
                onHover: s,
                focusStyle: l
            })
        );
    };
let s = (0, i.handleHover)(a);
