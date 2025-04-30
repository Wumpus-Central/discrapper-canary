r.d(t, { Z: () => l });
var n = r(192379),
    o = r(723184),
    a = r(329022),
    i = r(877837);
let l = function (e) {
    var t = e.colors,
        r = e.onClick,
        l = e.onSwatchHover,
        s = (0, o.default)({
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
    return n.createElement(
        'div',
        { style: s.swatches },
        (0, a.Z)(t, function (e) {
            return n.createElement(i.m4, {
                key: e,
                color: e,
                style: s.swatch,
                onClick: r,
                onHover: l,
                focusStyle: { boxShadow: '0 0 4px ' + e }
            });
        }),
        n.createElement('div', { style: s.clear })
    );
};
