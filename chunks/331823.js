var i = r(192379),
    a = r(476400),
    o = r.n(a),
    s = r(723184),
    l = r(329022),
    u = r(829307),
    c = r(820611),
    d = r(877837),
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
            E = (0, s.default)(
                (0, u.Z)(
                    {
                        default: {
                            card: {
                                width: f,
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
                    'hide-triangle': 'hide' === p,
                    'top-left-triangle': 'top-left' === p,
                    'top-right-triangle': 'top-right' === p
                }
            ),
            v = function (e, r) {
                c.FX(e) &&
                    n(
                        {
                            hex: e,
                            source: 'hex'
                        },
                        r
                    );
            };
        return i.createElement(
            'div',
            {
                style: E.card,
                className: 'twitter-picker ' + g
            },
            i.createElement('div', { style: E.triangleShadow }),
            i.createElement('div', { style: E.triangle }),
            i.createElement(
                'div',
                { style: E.body },
                (0, l.Z)(o, function (e, n) {
                    return i.createElement(d.m4, {
                        key: n,
                        color: e,
                        hex: e,
                        style: E.swatch,
                        onClick: v,
                        onHover: r,
                        focusStyle: { boxShadow: '0 0 4px ' + e }
                    });
                }),
                i.createElement('div', { style: E.hash }, '#'),
                i.createElement(d.Vm, {
                    label: null,
                    style: { input: E.input },
                    value: a.replace('#', ''),
                    onChange: v
                }),
                i.createElement('div', { style: E.clear })
            )
        );
    };
(f.propTypes = {
    width: o().oneOfType([o().string, o().number]),
    triangle: o().oneOf(['hide', 'top-left', 'top-right']),
    colors: o().arrayOf(o().string),
    styles: o().object
}),
    (f.defaultProps = {
        width: 276,
        colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
        triangle: 'top-left',
        styles: {}
    }),
    (0, d.t1)(f);
