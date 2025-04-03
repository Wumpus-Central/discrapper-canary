r.d(t, { Z: () => l });
var n = r(192379),
    o = r(723184),
    a = r(877837),
    i = function (e) {
        var t = e.color,
            r = e.onClick,
            i = e.onSwatchHover,
            l = e.hover,
            s = e.active,
            u = e.circleSize,
            c = e.circleSpacing,
            p = (0, o.default)(
                {
                    default: {
                        swatch: {
                            width: u,
                            height: u,
                            marginRight: c,
                            marginBottom: c,
                            transform: 'scale(1)',
                            transition: '100ms transform ease'
                        },
                        Swatch: {
                            borderRadius: '50%',
                            background: 'transparent',
                            boxShadow: 'inset 0 0 0 ' + (u / 2 + 1) + 'px ' + t,
                            transition: '100ms box-shadow ease'
                        }
                    },
                    hover: { swatch: { transform: 'scale(1.2)' } },
                    active: { Swatch: { boxShadow: 'inset 0 0 0 3px ' + t } }
                },
                {
                    hover: l,
                    active: s
                }
            );
        return n.createElement(
            'div',
            { style: p.swatch },
            n.createElement(a.m4, {
                style: p.Swatch,
                color: t,
                onClick: r,
                onHover: i,
                focusStyle: { boxShadow: p.Swatch.boxShadow + ', 0 0 5px ' + t }
            })
        );
    };
i.defaultProps = {
    circleSize: 28,
    circleSpacing: 14
};
let l = (0, o.handleHover)(i);
