var i = n(192379),
    r = n(476400),
    a = n.n(r),
    s = n(723184),
    o = n(329022),
    l = n(829307),
    u = n(877837),
    c = n(444366),
    d = function (e) {
        var t = e.width,
            n = e.colors,
            r = e.onChange,
            a = e.onSwatchHover,
            u = e.triangle,
            d = e.styles,
            f = void 0 === d ? {} : d,
            _ = e.className,
            p = void 0 === _ ? '' : _,
            h = (0, s.default)(
                (0, l.Z)(
                    {
                        default: {
                            card: {
                                width: t,
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
                    f
                ),
                {
                    'hide-triangle': 'hide' === u,
                    'top-left-triangle': 'top-left' === u,
                    'top-right-triangle': 'top-right' === u,
                    'bottom-left-triangle': 'bottom-left' === u,
                    'bottom-right-triangle': 'bottom-right' === u
                }
            ),
            m = function (e, t) {
                return r(
                    {
                        hex: e,
                        source: 'hex'
                    },
                    t
                );
            };
        return i.createElement(
            'div',
            {
                style: h.card,
                className: 'github-picker ' + p
            },
            i.createElement('div', { style: h.triangleShadow }),
            i.createElement('div', { style: h.triangle }),
            (0, o.Z)(n, function (e) {
                return i.createElement(c.Z, {
                    color: e,
                    key: e,
                    onClick: m,
                    onSwatchHover: a
                });
            })
        );
    };
(d.propTypes = {
    width: a().oneOfType([a().string, a().number]),
    colors: a().arrayOf(a().string),
    triangle: a().oneOf(['hide', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
    styles: a().object
}),
    (d.defaultProps = {
        width: 200,
        colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
        triangle: 'top-left',
        styles: {}
    }),
    (0, u.t1)(d);
