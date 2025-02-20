n.d(t, { Z: () => s });
var r = n(192379),
    i = n(723184),
    o = n(329022),
    a = n(877837);
let s = function (e) {
    var t = e.colors,
        n = e.onClick,
        s = e.onSwatchHover,
        l = (0, i.default)({
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
    return r.createElement(
        'div',
        { style: l.swatches },
        (0, o.Z)(t, function (e) {
            return r.createElement(a.m4, {
                key: e,
                color: e,
                style: l.swatch,
                onClick: n,
                onHover: s,
                focusStyle: { boxShadow: '0 0 4px ' + e }
            });
        }),
        r.createElement('div', { style: l.clear })
    );
};
