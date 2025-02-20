n.d(t, { Z: () => s });
var r = n(192379),
    i = n(723184),
    o = n(877837),
    a = function (e) {
        var t = e.color,
            n = e.onClick,
            a = e.onSwatchHover,
            s = e.hover,
            l = e.active,
            c = e.circleSize,
            u = e.circleSpacing,
            d = (0, i.default)(
                {
                    default: {
                        swatch: {
                            width: c,
                            height: c,
                            marginRight: u,
                            marginBottom: u,
                            transform: 'scale(1)',
                            transition: '100ms transform ease'
                        },
                        Swatch: {
                            borderRadius: '50%',
                            background: 'transparent',
                            boxShadow: 'inset 0 0 0 ' + (c / 2 + 1) + 'px ' + t,
                            transition: '100ms box-shadow ease'
                        }
                    },
                    hover: { swatch: { transform: 'scale(1.2)' } },
                    active: { Swatch: { boxShadow: 'inset 0 0 0 3px ' + t } }
                },
                {
                    hover: s,
                    active: l
                }
            );
        return r.createElement(
            'div',
            { style: d.swatch },
            r.createElement(o.m4, {
                style: d.Swatch,
                color: t,
                onClick: n,
                onHover: a,
                focusStyle: { boxShadow: d.Swatch.boxShadow + ', 0 0 5px ' + t }
            })
        );
    };
a.defaultProps = {
    circleSize: 28,
    circleSpacing: 14
};
let s = (0, i.handleHover)(a);
