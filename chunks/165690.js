var i = r(192379),
    a = r(476400),
    o = r.n(a),
    s = r(723184),
    l = r(829307),
    u = r(877837),
    c = r(122900),
    d = r(717487),
    f = r(99737),
    p = function (e) {
        var n = e.width,
            r = e.onChange,
            a = e.disableAlpha,
            o = e.rgb,
            p = e.hsl,
            h = e.hsv,
            _ = e.hex,
            m = e.renderers,
            g = e.styles,
            E = void 0 === g ? {} : g,
            v = e.className,
            y = void 0 === v ? '' : v,
            b = e.defaultView,
            I = (0, s.default)(
                (0, l.Z)(
                    {
                        default: {
                            picker: {
                                width: n,
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
                    E
                ),
                { disableAlpha: a }
            );
        return i.createElement(
            'div',
            {
                style: I.picker,
                className: 'chrome-picker ' + y
            },
            i.createElement(
                'div',
                { style: I.saturation },
                i.createElement(u.OQ, {
                    style: I.Saturation,
                    hsl: p,
                    hsv: h,
                    pointer: f.Z,
                    onChange: r
                })
            ),
            i.createElement(
                'div',
                { style: I.body },
                i.createElement(
                    'div',
                    {
                        style: I.controls,
                        className: 'flexbox-fix'
                    },
                    i.createElement('div', { style: I.color }, i.createElement('div', { style: I.swatch }, i.createElement('div', { style: I.active }), i.createElement(u.QN, { renderers: m }))),
                    i.createElement(
                        'div',
                        { style: I.toggles },
                        i.createElement(
                            'div',
                            { style: I.hue },
                            i.createElement(u.PS, {
                                style: I.Hue,
                                hsl: p,
                                pointer: d.Z,
                                onChange: r
                            })
                        ),
                        i.createElement(
                            'div',
                            { style: I.alpha },
                            i.createElement(u.xV, {
                                style: I.Alpha,
                                rgb: o,
                                hsl: p,
                                pointer: d.Z,
                                renderers: m,
                                onChange: r
                            })
                        )
                    )
                ),
                i.createElement(c.Z, {
                    rgb: o,
                    hsl: p,
                    hex: _,
                    view: b,
                    onChange: r,
                    disableAlpha: a
                })
            )
        );
    };
(p.propTypes = {
    width: o().oneOfType([o().string, o().number]),
    disableAlpha: o().bool,
    styles: o().object,
    defaultView: o().oneOf(['hex', 'rgb', 'hsl'])
}),
    (p.defaultProps = {
        width: 225,
        disableAlpha: !1,
        styles: {}
    }),
    (0, u.t1)(p);
