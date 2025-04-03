var n = r(192379),
    o = r(476400),
    a = r.n(o),
    i = r(723184),
    l = r(829307),
    s = r(877837),
    u = r(474527),
    c = r(372712),
    p = r(899627),
    f = function (e) {
        var t = e.width,
            r = e.onChange,
            o = e.rgb,
            a = e.hsl,
            f = e.hsv,
            d = e.hex,
            h = e.header,
            b = e.styles,
            v = e.className,
            g = (0, i.default)(
                (0, l.Z)(
                    {
                        default: {
                            picker: {
                                width: t,
                                background: '#fff',
                                border: '1px solid #dfe1e5',
                                boxSizing: 'initial',
                                display: 'flex',
                                flexWrap: 'wrap',
                                borderRadius: '8px 8px 0px 0px'
                            },
                            head: {
                                height: '57px',
                                width: '100%',
                                paddingTop: '16px',
                                paddingBottom: '16px',
                                paddingLeft: '16px',
                                fontSize: '20px',
                                boxSizing: 'border-box',
                                fontFamily: 'Roboto-Regular,HelveticaNeue,Arial,sans-serif'
                            },
                            saturation: {
                                width: '70%',
                                padding: '0px',
                                position: 'relative',
                                overflow: 'hidden'
                            },
                            swatch: {
                                width: '30%',
                                height: '228px',
                                padding: '0px',
                                background: 'rgba(' + o.r + ', ' + o.g + ', ' + o.b + ', 1)',
                                position: 'relative',
                                overflow: 'hidden'
                            },
                            body: {
                                margin: 'auto',
                                width: '95%'
                            },
                            controls: {
                                display: 'flex',
                                boxSizing: 'border-box',
                                height: '52px',
                                paddingTop: '22px'
                            },
                            color: { width: '32px' },
                            hue: {
                                height: '8px',
                                position: 'relative',
                                margin: '0px 16px 0px 16px',
                                width: '100%'
                            },
                            Hue: { radius: '2px' }
                        }
                    },
                    void 0 === b ? {} : b
                )
            );
        return n.createElement(
            'div',
            {
                style: g.picker,
                className: 'google-picker ' + (void 0 === v ? '' : v)
            },
            n.createElement('div', { style: g.head }, h),
            n.createElement('div', { style: g.swatch }),
            n.createElement(
                'div',
                { style: g.saturation },
                n.createElement(s.OQ, {
                    hsl: a,
                    hsv: f,
                    pointer: u.C,
                    onChange: r
                })
            ),
            n.createElement(
                'div',
                { style: g.body },
                n.createElement(
                    'div',
                    {
                        style: g.controls,
                        className: 'flexbox-fix'
                    },
                    n.createElement(
                        'div',
                        { style: g.hue },
                        n.createElement(s.PS, {
                            style: g.Hue,
                            hsl: a,
                            radius: '4px',
                            pointer: c.Z,
                            onChange: r
                        })
                    )
                ),
                n.createElement(p.Z, {
                    rgb: o,
                    hsl: a,
                    hex: d,
                    hsv: f,
                    onChange: r
                })
            )
        );
    };
(f.propTypes = {
    width: a().oneOfType([a().string, a().number]),
    styles: a().object,
    header: a().string
}),
    (f.defaultProps = {
        width: 652,
        styles: {},
        header: 'Color picker'
    }),
    (0, s.t1)(f);
