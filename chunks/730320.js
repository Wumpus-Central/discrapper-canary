n.d(t, { Z: () => l });
var i = n(192379),
    r = n(723184),
    a = n(820611),
    s = n(877837),
    o = n(197499);
let l = function (e) {
    var t = e.color,
        n = e.onClick,
        l = void 0 === n ? function () {} : n,
        u = e.onSwatchHover,
        c = e.first,
        d = e.last,
        f = e.active,
        _ = (0, r.default)(
            {
                default: {
                    color: {
                        width: '40px',
                        height: '24px',
                        cursor: 'pointer',
                        background: t,
                        marginBottom: '1px'
                    },
                    check: {
                        color: a.Qg(t),
                        marginLeft: '8px',
                        display: 'none'
                    }
                },
                first: {
                    color: {
                        overflow: 'hidden',
                        borderRadius: '2px 2px 0 0'
                    }
                },
                last: {
                    color: {
                        overflow: 'hidden',
                        borderRadius: '0 0 2px 2px'
                    }
                },
                active: { check: { display: 'block' } },
                'color-#FFFFFF': {
                    color: { boxShadow: 'inset 0 0 0 1px #ddd' },
                    check: { color: '#333' }
                },
                transparent: { check: { color: '#333' } }
            },
            {
                first: c,
                last: d,
                active: f,
                'color-#FFFFFF': '#FFFFFF' === t,
                transparent: 'transparent' === t
            }
        );
    return i.createElement(
        s.m4,
        {
            color: t,
            style: _.color,
            onClick: l,
            onHover: u,
            focusStyle: { boxShadow: '0 0 4px ' + t }
        },
        i.createElement('div', { style: _.check }, i.createElement(o.default, null))
    );
};
