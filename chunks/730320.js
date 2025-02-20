n.d(t, { Z: () => l });
var r = n(192379),
    i = n(723184),
    o = n(820611),
    a = n(877837),
    s = n(197499);
let l = function (e) {
    var t = e.color,
        n = e.onClick,
        l = void 0 === n ? function () {} : n,
        c = e.onSwatchHover,
        u = e.first,
        d = e.last,
        f = e.active,
        p = (0, i.default)(
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
                        color: o.Qg(t),
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
                first: u,
                last: d,
                active: f,
                'color-#FFFFFF': '#FFFFFF' === t,
                transparent: 'transparent' === t
            }
        );
    return r.createElement(
        a.m4,
        {
            color: t,
            style: p.color,
            onClick: l,
            onHover: c,
            focusStyle: { boxShadow: '0 0 4px ' + t }
        },
        r.createElement('div', { style: p.check }, r.createElement(s.default, null))
    );
};
