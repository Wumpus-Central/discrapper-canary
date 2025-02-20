var r = n(192379),
    i = n(476400),
    o = n.n(i),
    a = n(723184),
    s = n(329022),
    l = n(829307),
    c = n(820611),
    u = n(877837),
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
            g = (0, a.default)(
                (0, l.Z)(
                    {
                        default: {
                            card: {
                                width: d,
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
                    _
                ),
                {
                    'hide-triangle': 'hide' === f,
                    'top-left-triangle': 'top-left' === f,
                    'top-right-triangle': 'top-right' === f
                }
            ),
            E = function (e, n) {
                c.FX(e) &&
                    t(
                        {
                            hex: e,
                            source: 'hex'
                        },
                        n
                    );
            };
        return r.createElement(
            'div',
            {
                style: g.card,
                className: 'twitter-picker ' + m
            },
            r.createElement('div', { style: g.triangleShadow }),
            r.createElement('div', { style: g.triangle }),
            r.createElement(
                'div',
                { style: g.body },
                (0, s.Z)(o, function (e, t) {
                    return r.createElement(u.m4, {
                        key: t,
                        color: e,
                        hex: e,
                        style: g.swatch,
                        onClick: E,
                        onHover: n,
                        focusStyle: { boxShadow: '0 0 4px ' + e }
                    });
                }),
                r.createElement('div', { style: g.hash }, '#'),
                r.createElement(u.Vm, {
                    label: null,
                    style: { input: g.input },
                    value: i.replace('#', ''),
                    onChange: E
                }),
                r.createElement('div', { style: g.clear })
            )
        );
    };
(d.propTypes = {
    width: o().oneOfType([o().string, o().number]),
    triangle: o().oneOf(['hide', 'top-left', 'top-right']),
    colors: o().arrayOf(o().string),
    styles: o().object
}),
    (d.defaultProps = {
        width: 276,
        colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
        triangle: 'top-left',
        styles: {}
    }),
    (0, u.t1)(d);
