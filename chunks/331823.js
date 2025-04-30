var n = r(192379),
    o = r(476400),
    a = r.n(o),
    i = r(723184),
    l = r(329022),
    s = r(829307),
    u = r(820611),
    c = r(877837),
    p = function (e) {
        var t = e.onChange,
            r = e.onSwatchHover,
            o = e.hex,
            a = e.colors,
            p = e.width,
            f = e.triangle,
            d = e.styles,
            h = e.className,
            b = (0, i.default)(
                (0, s.Z)(
                    {
                        default: {
                            card: {
                                width: p,
                                background: '#fff',
                                border: '0 solid rgba(0,0,0,0.25)',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
                                borderRadius: '4px',
                                position: 'relative'
                            },
                            body: { padding: '15px 9px 9px 15px' },
                            label: {
                                fontSize: '18px',
                                color: '#fff'
                            },
                            triangle: {
                                width: '0px',
                                height: '0px',
                                borderStyle: 'solid',
                                borderWidth: '0 9px 10px 9px',
                                borderColor: 'transparent transparent #fff transparent',
                                position: 'absolute'
                            },
                            triangleShadow: {
                                width: '0px',
                                height: '0px',
                                borderStyle: 'solid',
                                borderWidth: '0 9px 10px 9px',
                                borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
                                position: 'absolute'
                            },
                            hash: {
                                background: '#F0F0F0',
                                height: '30px',
                                width: '30px',
                                borderRadius: '4px 0 0 4px',
                                float: 'left',
                                color: '#98A1A4',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            input: {
                                width: '100px',
                                fontSize: '14px',
                                color: '#666',
                                border: '0px',
                                outline: 'none',
                                height: '28px',
                                boxShadow: 'inset 0 0 0 1px #F0F0F0',
                                boxSizing: 'content-box',
                                borderRadius: '0 4px 4px 0',
                                float: 'left',
                                paddingLeft: '8px'
                            },
                            swatch: {
                                width: '30px',
                                height: '30px',
                                float: 'left',
                                borderRadius: '4px',
                                margin: '0 6px 6px 0'
                            },
                            clear: { clear: 'both' }
                        },
                        'hide-triangle': {
                            triangle: { display: 'none' },
                            triangleShadow: { display: 'none' }
                        },
                        'top-left-triangle': {
                            triangle: {
                                top: '-10px',
                                left: '12px'
                            },
                            triangleShadow: {
                                top: '-11px',
                                left: '12px'
                            }
                        },
                        'top-right-triangle': {
                            triangle: {
                                top: '-10px',
                                right: '12px'
                            },
                            triangleShadow: {
                                top: '-11px',
                                right: '12px'
                            }
                        }
                    },
                    void 0 === d ? {} : d
                ),
                {
                    'hide-triangle': 'hide' === f,
                    'top-left-triangle': 'top-left' === f,
                    'top-right-triangle': 'top-right' === f
                }
            ),
            v = function (e, r) {
                u.FX(e) &&
                    t(
                        {
                            hex: e,
                            source: 'hex'
                        },
                        r
                    );
            };
        return n.createElement(
            'div',
            {
                style: b.card,
                className: 'twitter-picker ' + (void 0 === h ? '' : h)
            },
            n.createElement('div', { style: b.triangleShadow }),
            n.createElement('div', { style: b.triangle }),
            n.createElement(
                'div',
                { style: b.body },
                (0, l.Z)(a, function (e, t) {
                    return n.createElement(c.m4, {
                        key: t,
                        color: e,
                        hex: e,
                        style: b.swatch,
                        onClick: v,
                        onHover: r,
                        focusStyle: { boxShadow: '0 0 4px ' + e }
                    });
                }),
                n.createElement('div', { style: b.hash }, '#'),
                n.createElement(c.Vm, {
                    label: null,
                    style: { input: b.input },
                    value: o.replace('#', ''),
                    onChange: v
                }),
                n.createElement('div', { style: b.clear })
            )
        );
    };
(p.propTypes = {
    width: a().oneOfType([a().string, a().number]),
    triangle: a().oneOf(['hide', 'top-left', 'top-right']),
    colors: a().arrayOf(a().string),
    styles: a().object
}),
    (p.defaultProps = {
        width: 276,
        colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
        triangle: 'top-left',
        styles: {}
    }),
    (0, c.t1)(p);
