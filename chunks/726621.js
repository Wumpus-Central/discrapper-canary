n.d(t, { Z: () => o });
var i = n(192379),
    r = n(723184),
    a = n(329022),
    s = n(877837);
let o = function (e) {
    var t = e.colors,
        n = e.onClick,
        o = e.onSwatchHover,
        l = (0, r.default)({
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
        { style: l.swatches },
        (0, a.Z)(t, function (e) {
            return i.createElement(s.m4, {
                key: e,
                color: e,
                style: l.swatch,
                onClick: n,
                onHover: o,
                focusStyle: { boxShadow: '0 0 4px ' + e }
            });
        }),
        i.createElement('div', { style: l.clear })
    );
};
