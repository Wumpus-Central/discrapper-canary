var i = n(192379),
    r = n(476400),
    a = n.n(r),
    s = n(723184),
    o = n(829307),
    l = n(877837),
    u = n(122900),
    c = n(717487),
    d = n(99737),
    f = function (e) {
        var t = e.width,
            n = e.onChange,
            r = e.disableAlpha,
            a = e.rgb,
            f = e.hsl,
            _ = e.hsv,
            p = e.hex,
            h = e.renderers,
            m = e.styles,
            g = void 0 === m ? {} : m,
            E = e.className,
            v = void 0 === E ? '' : E,
            y = e.defaultView,
            I = (0, s.default)(
                (0, o.Z)(
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
                                background: 'rgba(' + a.r + ', ' + a.g + ', ' + a.b + ', ' + a.a + ')',
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
                { disableAlpha: r }
            );
        return i.createElement(
            'div',
            {
                style: I.picker,
                className: 'chrome-picker ' + v
            },
            i.createElement(
                'div',
                { style: I.saturation },
                i.createElement(l.OQ, {
                    style: I.Saturation,
                    hsl: f,
                    hsv: _,
                    pointer: d.Z,
                    onChange: n
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
                    i.createElement('div', { style: I.color }, i.createElement('div', { style: I.swatch }, i.createElement('div', { style: I.active }), i.createElement(l.QN, { renderers: h }))),
                    i.createElement(
                        'div',
                        { style: I.toggles },
                        i.createElement(
                            'div',
                            { style: I.hue },
                            i.createElement(l.PS, {
                                style: I.Hue,
                                hsl: f,
                                pointer: c.Z,
                                onChange: n
                            })
                        ),
                        i.createElement(
                            'div',
                            { style: I.alpha },
                            i.createElement(l.xV, {
                                style: I.Alpha,
                                rgb: a,
                                hsl: f,
                                pointer: c.Z,
                                renderers: h,
                                onChange: n
                            })
                        )
                    )
                ),
                i.createElement(u.Z, {
                    rgb: a,
                    hsl: f,
                    hex: p,
                    view: y,
                    onChange: n,
                    disableAlpha: r
                })
            )
        );
    };
(f.propTypes = {
    width: a().oneOfType([a().string, a().number]),
    disableAlpha: a().bool,
    styles: a().object,
    defaultView: a().oneOf(['hex', 'rgb', 'hsl'])
}),
    (f.defaultProps = {
        width: 225,
        disableAlpha: !1,
        styles: {}
    }),
    (0, l.t1)(f);
