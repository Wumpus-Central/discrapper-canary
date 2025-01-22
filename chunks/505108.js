var i = r(192379),
    a = r(476400),
    o = r.n(a),
    s = r(723184),
    l = r(829307),
    u = r(877837),
    c = r(474527),
    d = r(372712),
    f = r(899627),
    p = function (e) {
        var n = e.width,
            r = e.onChange,
            a = e.rgb,
            o = e.hsl,
            p = e.hsv,
            h = e.hex,
            _ = e.header,
            m = e.styles,
            g = void 0 === m ? {} : m,
            E = e.className,
            v = void 0 === E ? '' : E,
            y = (0, s.default)(
                (0, l.Z)(
                    {
                        default: {
                            picker: {
                                width: n,
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
                                background: 'rgba(' + a.r + ', ' + a.g + ', ' + a.b + ', 1)',
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
                    g
                )
            );
        return i.createElement(
            'div',
            {
                style: y.picker,
                className: 'google-picker ' + v
            },
            i.createElement('div', { style: y.head }, _),
            i.createElement('div', { style: y.swatch }),
            i.createElement(
                'div',
                { style: y.saturation },
                i.createElement(u.OQ, {
                    hsl: o,
                    hsv: p,
                    pointer: c.C,
                    onChange: r
                })
            ),
            i.createElement(
                'div',
                { style: y.body },
                i.createElement(
                    'div',
                    {
                        style: y.controls,
                        className: 'flexbox-fix'
                    },
                    i.createElement(
                        'div',
                        { style: y.hue },
                        i.createElement(u.PS, {
                            style: y.Hue,
                            hsl: o,
                            radius: '4px',
                            pointer: d.Z,
                            onChange: r
                        })
                    )
                ),
                i.createElement(f.Z, {
                    rgb: a,
                    hsl: o,
                    hex: h,
                    hsv: p,
                    onChange: r
                })
            )
        );
    };
(p.propTypes = {
    width: o().oneOfType([o().string, o().number]),
    styles: o().object,
    header: o().string
}),
    (p.defaultProps = {
        width: 652,
        styles: {},
        header: 'Color picker'
    }),
    (0, u.t1)(p);
