var i = n(192379),
    r = n(476400),
    a = n.n(r),
    s = n(723184),
    o = n(829307),
    l = n(877837),
    u = n(474527),
    c = n(372712),
    d = n(899627),
    f = function (e) {
        var t = e.width,
            n = e.onChange,
            r = e.rgb,
            a = e.hsl,
            f = e.hsv,
            _ = e.hex,
            p = e.header,
            h = e.styles,
            m = void 0 === h ? {} : h,
            g = e.className,
            E = void 0 === g ? '' : g,
            v = (0, s.default)(
                (0, o.Z)(
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
                                background: 'rgba(' + r.r + ', ' + r.g + ', ' + r.b + ', 1)',
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
        return i.createElement(
            'div',
            {
                style: v.picker,
                className: 'google-picker ' + E
            },
            i.createElement('div', { style: v.head }, p),
            i.createElement('div', { style: v.swatch }),
            i.createElement(
                'div',
                { style: v.saturation },
                i.createElement(l.OQ, {
                    hsl: a,
                    hsv: f,
                    pointer: u.C,
                    onChange: n
                })
            ),
            i.createElement(
                'div',
                { style: v.body },
                i.createElement(
                    'div',
                    {
                        style: v.controls,
                        className: 'flexbox-fix'
                    },
                    i.createElement(
                        'div',
                        { style: v.hue },
                        i.createElement(l.PS, {
                            style: v.Hue,
                            hsl: a,
                            radius: '4px',
                            pointer: c.Z,
                            onChange: n
                        })
                    )
                ),
                i.createElement(d.Z, {
                    rgb: r,
                    hsl: a,
                    hex: _,
                    hsv: f,
                    onChange: n
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
    (0, l.t1)(f);
