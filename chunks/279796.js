n.d(t, { Z: () => s });
var r = n(192379),
    i = n(723184),
    o = n(820611),
    a = n(877837);
let s = function (e) {
    var t = e.color,
        n = e.onClick,
        s = void 0 === n ? function () {} : n,
        l = e.onSwatchHover,
        c = e.active,
        u = (0, i.default)(
            {
                default: {
                    color: {
                        background: t,
                        width: '15px',
                        height: '15px',
                        float: 'left',
                        marginRight: '5px',
                        marginBottom: '5px',
                        position: 'relative',
                        cursor: 'pointer'
                    },
                    dot: {
                        absolute: '5px 5px 5px 5px',
                        background: o.Qg(t),
                        borderRadius: '50%',
                        opacity: '0'
                    }
                },
                active: { dot: { opacity: '1' } },
                'color-#FFFFFF': {
                    color: { boxShadow: 'inset 0 0 0 1px #ddd' },
                    dot: { background: '#000' }
                },
                transparent: { dot: { background: '#000' } }
            },
            {
                active: c,
                'color-#FFFFFF': '#FFFFFF' === t,
                transparent: 'transparent' === t
            }
        );
    return r.createElement(
        a.m4,
        {
            style: u.color,
            color: t,
            onClick: s,
            onHover: l,
            focusStyle: { boxShadow: '0 0 4px ' + t }
        },
        r.createElement('div', { style: u.dot })
    );
};
