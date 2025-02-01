n.d(t, { Z: () => o });
var i = n(192379),
    r = n(723184),
    a = n(820611),
    s = n(877837);
let o = function (e) {
    var t = e.color,
        n = e.onClick,
        o = void 0 === n ? function () {} : n,
        l = e.onSwatchHover,
        u = e.active,
        c = (0, r.default)(
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
                        background: a.Qg(t),
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
                active: u,
                'color-#FFFFFF': '#FFFFFF' === t,
                transparent: 'transparent' === t
            }
        );
    return i.createElement(
        s.m4,
        {
            style: c.color,
            color: t,
            onClick: o,
            onHover: l,
            focusStyle: { boxShadow: '0 0 4px ' + t }
        },
        i.createElement('div', { style: c.dot })
    );
};
