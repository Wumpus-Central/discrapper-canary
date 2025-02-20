var r = n(192379),
    i = n(476400),
    o = n.n(i),
    a = n(723184),
    s = n(829307),
    l = n(820611),
    c = n(877837),
    u = n(726621),
    d = function (e) {
        var t = e.onChange,
            n = e.onSwatchHover,
            i = e.hex,
            o = e.colors,
            d = e.width,
            f = e.triangle,
            p = e.styles,
            _ = void 0 === p ? {} : p,
            h = e.className,
            m = void 0 === h ? '' : h,
            g = 'transparent' === i,
            E = function (e, n) {
                l.FX(e) &&
                    t(
                        {
                            hex: e,
                            source: 'hex'
                        },
                        n
                    );
            },
            v = (0, a.default)(
                (0, s.Z)(
                    {
                        default: {
                            card: {
                                width: d,
                                background: '#fff',
                                boxShadow: '0 1px rgba(0,0,0,.1)',
                                borderRadius: '6px',
                                position: 'relative'
                            },
                            head: {
                                height: '110px',
                                background: i,
                                borderRadius: '6px 6px 0 0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            },
                            body: { padding: '10px' },
                            label: {
                                fontSize: '18px',
                                color: l.Qg(i),
                                position: 'relative'
                            },
                            triangle: {
                                width: '0px',
                                height: '0px',
                                borderStyle: 'solid',
                                borderWidth: '0 10px 10px 10px',
                                borderColor: 'transparent transparent ' + i + ' transparent',
                                position: 'absolute',
                                top: '-10px',
                                left: '50%',
                                marginLeft: '-10px'
                            },
                            input: {
                                width: '100%',
                                fontSize: '12px',
                                color: '#666',
                                border: '0px',
                                outline: 'none',
                                height: '22px',
                                boxShadow: 'inset 0 0 0 1px #ddd',
                                borderRadius: '4px',
                                padding: '0 7px',
                                boxSizing: 'border-box'
                            }
                        },
                        'hide-triangle': { triangle: { display: 'none' } }
                    },
                    _
                ),
                { 'hide-triangle': 'hide' === f }
            );
        return r.createElement(
            'div',
            {
                style: v.card,
                className: 'block-picker ' + m
            },
            r.createElement('div', { style: v.triangle }),
            r.createElement('div', { style: v.head }, g && r.createElement(c.QN, { borderRadius: '6px 6px 0 0' }), r.createElement('div', { style: v.label }, i)),
            r.createElement(
                'div',
                { style: v.body },
                r.createElement(u.Z, {
                    colors: o,
                    onClick: E,
                    onSwatchHover: n
                }),
                r.createElement(c.Vm, {
                    style: { input: v.input },
                    value: i,
                    onChange: E
                })
            )
        );
    };
(d.propTypes = {
    width: o().oneOfType([o().string, o().number]),
    colors: o().arrayOf(o().string),
    triangle: o().oneOf(['top', 'hide']),
    styles: o().object
}),
    (d.defaultProps = {
        width: 170,
        colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'],
        triangle: 'top',
        styles: {}
    }),
    (0, c.t1)(d);
