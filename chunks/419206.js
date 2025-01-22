var i = r(192379),
    a = r(476400),
    o = r.n(a),
    s = r(723184),
    l = r(829307),
    u = r(820611),
    c = r(877837),
    d = r(726621),
    f = function (e) {
        var n = e.onChange,
            r = e.onSwatchHover,
            a = e.hex,
            o = e.colors,
            f = e.width,
            p = e.triangle,
            h = e.styles,
            _ = void 0 === h ? {} : h,
            m = e.className,
            g = void 0 === m ? '' : m,
            E = 'transparent' === a,
            v = function (e, r) {
                u.FX(e) &&
                    n(
                        {
                            hex: e,
                            source: 'hex'
                        },
                        r
                    );
            },
            y = (0, s.default)(
                (0, l.Z)(
                    {
                        default: {
                            card: {
                                width: f,
                                background: '#fff',
                                boxShadow: '0 1px rgba(0,0,0,.1)',
                                borderRadius: '6px',
                                position: 'relative'
                            },
                            head: {
                                height: '110px',
                                background: a,
                                borderRadius: '6px 6px 0 0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            },
                            body: { padding: '10px' },
                            label: {
                                fontSize: '18px',
                                color: u.Qg(a),
                                position: 'relative'
                            },
                            triangle: {
                                width: '0px',
                                height: '0px',
                                borderStyle: 'solid',
                                borderWidth: '0 10px 10px 10px',
                                borderColor: 'transparent transparent ' + a + ' transparent',
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
                { 'hide-triangle': 'hide' === p }
            );
        return i.createElement(
            'div',
            {
                style: y.card,
                className: 'block-picker ' + g
            },
            i.createElement('div', { style: y.triangle }),
            i.createElement('div', { style: y.head }, E && i.createElement(c.QN, { borderRadius: '6px 6px 0 0' }), i.createElement('div', { style: y.label }, a)),
            i.createElement(
                'div',
                { style: y.body },
                i.createElement(d.Z, {
                    colors: o,
                    onClick: v,
                    onSwatchHover: r
                }),
                i.createElement(c.Vm, {
                    style: { input: y.input },
                    value: a,
                    onChange: v
                })
            )
        );
    };
(f.propTypes = {
    width: o().oneOfType([o().string, o().number]),
    colors: o().arrayOf(o().string),
    triangle: o().oneOf(['top', 'hide']),
    styles: o().object
}),
    (f.defaultProps = {
        width: 170,
        colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'],
        triangle: 'top',
        styles: {}
    }),
    (0, c.t1)(f);
