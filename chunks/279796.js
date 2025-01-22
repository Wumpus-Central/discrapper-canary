var i = r(192379),
    a = r(723184),
    o = r(820611),
    s = r(877837),
    l = function (e) {
        var n = e.color,
            r = e.onClick,
            l = void 0 === r ? function () {} : r,
            u = e.onSwatchHover,
            c = e.active,
            d = (0, a.default)(
                {
                    default: {
                        color: {
                            background: n,
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
                            background: o.Qg(n),
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
                    'color-#FFFFFF': '#FFFFFF' === n,
                    transparent: 'transparent' === n
                }
            );
        return i.createElement(
            s.m4,
            {
                style: d.color,
                color: n,
                onClick: l,
                onHover: u,
                focusStyle: { boxShadow: '0 0 4px ' + n }
            },
            i.createElement('div', { style: d.dot })
        );
    };
n.Z = l;
