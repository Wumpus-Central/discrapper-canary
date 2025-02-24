var n = r(192379),
    o = r(476400),
    a = r.n(o),
    i = r(723184),
    l = r(329022),
    s = r(829307),
    u = r(877837),
    c = r(444366),
    p = function (e) {
        var t = e.width,
            r = e.colors,
            o = e.onChange,
            a = e.onSwatchHover,
            u = e.triangle,
            p = e.styles,
            f = e.className,
            d = (0, i.default)(
                (0, s.Z)(
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
                    void 0 === p ? {} : p
                ),
                {
                    'hide-triangle': 'hide' === u,
                    'top-left-triangle': 'top-left' === u,
                    'top-right-triangle': 'top-right' === u,
                    'bottom-left-triangle': 'bottom-left' === u,
                    'bottom-right-triangle': 'bottom-right' === u
                }
            ),
            h = function (e, t) {
                return o(
                    {
                        hex: e,
                        source: 'hex'
                    },
                    t
                );
            };
        return n.createElement(
            'div',
            {
                style: d.card,
                className: 'github-picker ' + (void 0 === f ? '' : f)
            },
            n.createElement('div', { style: d.triangleShadow }),
            n.createElement('div', { style: d.triangle }),
            (0, l.Z)(r, function (e) {
                return n.createElement(c.Z, {
                    color: e,
                    key: e,
                    onClick: h,
                    onSwatchHover: a
                });
            })
        );
    };
(p.propTypes = {
    width: a().oneOfType([a().string, a().number]),
    colors: a().arrayOf(a().string),
    triangle: a().oneOf(['hide', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
    styles: a().object
}),
    (p.defaultProps = {
        width: 200,
        colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
        triangle: 'top-left',
        styles: {}
    }),
    (0, u.t1)(p);
