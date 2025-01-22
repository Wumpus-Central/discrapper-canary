var i = r(192379),
    a = r(476400),
    o = r.n(a),
    s = r(723184),
    l = r(329022),
    u = r(829307),
    c = r(877837),
    d = r(444366),
    f = function (e) {
        var n = e.width,
            r = e.colors,
            a = e.onChange,
            o = e.onSwatchHover,
            c = e.triangle,
            f = e.styles,
            p = void 0 === f ? {} : f,
            h = e.className,
            _ = void 0 === h ? '' : h,
            m = (0, s.default)(
                (0, u.Z)(
                    {
                        default: {
                            card: {
                                width: n,
                                background: '#fff',
                                border: '1px solid rgba(0,0,0,0.2)',
                                boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
                                borderRadius: '4px',
                                position: 'relative',
                                padding: '5px',
                                display: 'flex',
                                flexWrap: 'wrap'
                            },
                            triangle: {
                                position: 'absolute',
                                border: '7px solid transparent',
                                borderBottomColor: '#fff'
                            },
                            triangleShadow: {
                                position: 'absolute',
                                border: '8px solid transparent',
                                borderBottomColor: 'rgba(0,0,0,0.15)'
                            }
                        },
                        'hide-triangle': {
                            triangle: { display: 'none' },
                            triangleShadow: { display: 'none' }
                        },
                        'top-left-triangle': {
                            triangle: {
                                top: '-14px',
                                left: '10px'
                            },
                            triangleShadow: {
                                top: '-16px',
                                left: '9px'
                            }
                        },
                        'top-right-triangle': {
                            triangle: {
                                top: '-14px',
                                right: '10px'
                            },
                            triangleShadow: {
                                top: '-16px',
                                right: '9px'
                            }
                        },
                        'bottom-left-triangle': {
                            triangle: {
                                top: '35px',
                                left: '10px',
                                transform: 'rotate(180deg)'
                            },
                            triangleShadow: {
                                top: '37px',
                                left: '9px',
                                transform: 'rotate(180deg)'
                            }
                        },
                        'bottom-right-triangle': {
                            triangle: {
                                top: '35px',
                                right: '10px',
                                transform: 'rotate(180deg)'
                            },
                            triangleShadow: {
                                top: '37px',
                                right: '9px',
                                transform: 'rotate(180deg)'
                            }
                        }
                    },
                    p
                ),
                {
                    'hide-triangle': 'hide' === c,
                    'top-left-triangle': 'top-left' === c,
                    'top-right-triangle': 'top-right' === c,
                    'bottom-left-triangle': 'bottom-left' === c,
                    'bottom-right-triangle': 'bottom-right' === c
                }
            ),
            g = function (e, n) {
                return a(
                    {
                        hex: e,
                        source: 'hex'
                    },
                    n
                );
            };
        return i.createElement(
            'div',
            {
                style: m.card,
                className: 'github-picker ' + _
            },
            i.createElement('div', { style: m.triangleShadow }),
            i.createElement('div', { style: m.triangle }),
            (0, l.Z)(r, function (e) {
                return i.createElement(d.Z, {
                    color: e,
                    key: e,
                    onClick: g,
                    onSwatchHover: o
                });
            })
        );
    };
(f.propTypes = {
    width: o().oneOfType([o().string, o().number]),
    colors: o().arrayOf(o().string),
    triangle: o().oneOf(['hide', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
    styles: o().object
}),
    (f.defaultProps = {
        width: 200,
        colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
        triangle: 'top-left',
        styles: {}
    }),
    (0, c.t1)(f);
