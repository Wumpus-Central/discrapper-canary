var r = n(192379),
    i = n(476400),
    o = n.n(i),
    a = n(723184),
    s = n(829307),
    l = n(877837),
    c = n(122900),
    u = n(717487),
    d = n(99737),
    f = function (e) {
        var t = e.width,
            n = e.onChange,
            i = e.disableAlpha,
            o = e.rgb,
            f = e.hsl,
            p = e.hsv,
            _ = e.hex,
            h = e.renderers,
            m = e.styles,
            g = void 0 === m ? {} : m,
            E = e.className,
            v = void 0 === E ? '' : E,
            b = e.defaultView,
            y = (0, a.default)(
                (0, s.Z)(
                    {
                        default: {
                            picker: {
                                width: t,
                                background: '#fff',
                                borderRadius: '2px',
                                boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
                                boxSizing: 'initial',
                                fontFamily: 'Menlo'
                            },
                            saturation: {
                                width: '100%',
                                paddingBottom: '55%',
                                position: 'relative',
                                borderRadius: '2px 2px 0 0',
                                overflow: 'hidden'
                            },
                            Saturation: { radius: '2px 2px 0 0' },
                            body: { padding: '16px 16px 12px' },
                            controls: { display: 'flex' },
                            color: { width: '32px' },
                            swatch: {
                                marginTop: '6px',
                                width: '16px',
                                height: '16px',
                                borderRadius: '8px',
                                position: 'relative',
                                overflow: 'hidden'
                            },
                            active: {
                                absolute: '0px 0px 0px 0px',
                                borderRadius: '8px',
                                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
                                background: 'rgba(' + o.r + ', ' + o.g + ', ' + o.b + ', ' + o.a + ')',
                                zIndex: '2'
                            },
                            toggles: { flex: '1' },
                            hue: {
                                height: '10px',
                                position: 'relative',
                                marginBottom: '8px'
                            },
                            Hue: { radius: '2px' },
                            alpha: {
                                height: '10px',
                                position: 'relative'
                            },
                            Alpha: { radius: '2px' }
                        },
                        disableAlpha: {
                            color: { width: '22px' },
                            alpha: { display: 'none' },
                            hue: { marginBottom: '0px' },
                            swatch: {
                                width: '10px',
                                height: '10px',
                                marginTop: '0px'
                            }
                        }
                    },
                    g
                ),
                { disableAlpha: i }
            );
        return r.createElement(
            'div',
            {
                style: y.picker,
                className: 'chrome-picker ' + v
            },
            r.createElement(
                'div',
                { style: y.saturation },
                r.createElement(l.OQ, {
                    style: y.Saturation,
                    hsl: f,
                    hsv: p,
                    pointer: d.Z,
                    onChange: n
                })
            ),
            r.createElement(
                'div',
                { style: y.body },
                r.createElement(
                    'div',
                    {
                        style: y.controls,
                        className: 'flexbox-fix'
                    },
                    r.createElement('div', { style: y.color }, r.createElement('div', { style: y.swatch }, r.createElement('div', { style: y.active }), r.createElement(l.QN, { renderers: h }))),
                    r.createElement(
                        'div',
                        { style: y.toggles },
                        r.createElement(
                            'div',
                            { style: y.hue },
                            r.createElement(l.PS, {
                                style: y.Hue,
                                hsl: f,
                                pointer: u.Z,
                                onChange: n
                            })
                        ),
                        r.createElement(
                            'div',
                            { style: y.alpha },
                            r.createElement(l.xV, {
                                style: y.Alpha,
                                rgb: o,
                                hsl: f,
                                pointer: u.Z,
                                renderers: h,
                                onChange: n
                            })
                        )
                    )
                ),
                r.createElement(c.Z, {
                    rgb: o,
                    hsl: f,
                    hex: _,
                    view: b,
                    onChange: n,
                    disableAlpha: i
                })
            )
        );
    };
(f.propTypes = {
    width: o().oneOfType([o().string, o().number]),
    disableAlpha: o().bool,
    styles: o().object,
    defaultView: o().oneOf(['hex', 'rgb', 'hsl'])
}),
    (f.defaultProps = {
        width: 225,
        disableAlpha: !1,
        styles: {}
    }),
    (0, l.t1)(f);
