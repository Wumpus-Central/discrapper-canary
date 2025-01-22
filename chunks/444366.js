var i = r(192379),
    a = r(723184),
    o = r(877837),
    s = function (e) {
        var n = e.hover,
            r = e.color,
            s = e.onClick,
            l = e.onSwatchHover,
            u = {
                position: 'relative',
                zIndex: '2',
                outline: '2px solid #fff',
                boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
            },
            c = (0, a.default)(
                {
                    default: {
                        swatch: {
                            width: '25px',
                            height: '25px',
                            fontSize: '0'
                        }
                    },
                    hover: { swatch: u }
                },
                { hover: n }
            );
        return i.createElement(
            'div',
            { style: c.swatch },
            i.createElement(o.m4, {
                color: r,
                onClick: s,
                onHover: l,
                focusStyle: u
            })
        );
    };
n.Z = (0, a.handleHover)(s);
