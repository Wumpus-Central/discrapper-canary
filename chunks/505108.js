var r = n(192379),
    i = n(476400),
    o = n.n(i),
    a = n(723184),
    s = n(829307),
    l = n(877837),
    c = n(474527),
    u = n(372712),
    d = n(899627),
    f = function (e) {
        var t = e.width,
            n = e.onChange,
            i = e.rgb,
            o = e.hsl,
            f = e.hsv,
            p = e.hex,
            _ = e.header,
            h = e.styles,
            m = void 0 === h ? {} : h,
            g = e.className,
            E = void 0 === g ? '' : g,
            v = (0, a.default)(
                (0, s.Z)(
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
                                background: 'rgba(' + i.r + ', ' + i.g + ', ' + i.b + ', 1)',
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
                    m
                )
            );
        return r.createElement(
            'div',
            {
                style: v.picker,
                className: 'google-picker ' + E
            },
            r.createElement('div', { style: v.head }, _),
            r.createElement('div', { style: v.swatch }),
            r.createElement(
                'div',
                { style: v.saturation },
                r.createElement(l.OQ, {
                    hsl: o,
                    hsv: f,
                    pointer: c.C,
                    onChange: n
                })
            ),
            r.createElement(
                'div',
                { style: v.body },
                r.createElement(
                    'div',
                    {
                        style: v.controls,
                        className: 'flexbox-fix'
                    },
                    r.createElement(
                        'div',
                        { style: v.hue },
                        r.createElement(l.PS, {
                            style: v.Hue,
                            hsl: o,
                            radius: '4px',
                            pointer: u.Z,
                            onChange: n
                        })
                    )
                ),
                r.createElement(d.Z, {
                    rgb: i,
                    hsl: o,
                    hex: p,
                    hsv: f,
                    onChange: n
                })
            )
        );
    };
(f.propTypes = {
    width: o().oneOfType([o().string, o().number]),
    styles: o().object,
    header: o().string
}),
    (f.defaultProps = {
        width: 652,
        styles: {},
        header: 'Color picker'
    }),
    (0, l.t1)(f);
