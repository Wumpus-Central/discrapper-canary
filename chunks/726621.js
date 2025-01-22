var i = r(192379),
    a = r(723184),
    o = r(329022),
    s = r(877837),
    l = function (e) {
        var n = e.colors,
            r = e.onClick,
            l = e.onSwatchHover,
            u = (0, a.default)({
                default: {
                    swatches: { marginRight: '-10px' },
                    swatch: {
                        width: '22px',
                        height: '22px',
                        float: 'left',
                        marginRight: '10px',
                        marginBottom: '10px',
                        borderRadius: '4px'
                    },
                    clear: { clear: 'both' }
                }
            });
        return i.createElement(
            'div',
            { style: u.swatches },
            (0, o.Z)(n, function (e) {
                return i.createElement(s.m4, {
                    key: e,
                    color: e,
                    style: u.swatch,
                    onClick: r,
                    onHover: l,
                    focusStyle: { boxShadow: '0 0 4px ' + e }
                });
            }),
            i.createElement('div', { style: u.clear })
        );
    };
n.Z = l;
