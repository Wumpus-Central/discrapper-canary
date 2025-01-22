var i = r(192379),
    a = r(476400),
    o = r.n(a),
    s = r(723184),
    l = r(829307),
    u = r(877837),
    c = r(376670),
    d = r(796892),
    f =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    p = function (e) {
        var n = e.width,
            r = e.rgb,
            a = e.hex,
            o = e.hsv,
            p = e.hsl,
            h = e.onChange,
            _ = e.onSwatchHover,
            m = e.disableAlpha,
            g = e.presetColors,
            E = e.renderers,
            v = e.styles,
            y = void 0 === v ? {} : v,
            b = e.className,
            I = void 0 === b ? '' : b,
            T = (0, s.default)(
                (0, l.Z)(
                    {
                        default: f(
                            {
                                picker: {
                                    width: n,
                                    padding: '10px 10px 0',
                                    boxSizing: 'initial',
                                    background: '#fff',
                                    borderRadius: '4px',
                                    boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
                                },
                                saturation: {
                                    width: '100%',
                                    paddingBottom: '75%',
                                    position: 'relative',
                                    overflow: 'hidden'
                                },
                                Saturation: {
                                    radius: '3px',
                                    shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
                                },
                                controls: { display: 'flex' },
                                sliders: {
                                    padding: '4px 0',
                                    flex: '1'
                                },
                                color: {
                                    width: '24px',
                                    height: '24px',
                                    position: 'relative',
                                    marginTop: '4px',
                                    marginLeft: '4px',
                                    borderRadius: '3px'
                                },
                                activeColor: {
                                    absolute: '0px 0px 0px 0px',
                                    borderRadius: '2px',
                                    background: 'rgba(' + r.r + ',' + r.g + ',' + r.b + ',' + r.a + ')',
                                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
                                },
                                hue: {
                                    position: 'relative',
                                    height: '10px',
                                    overflow: 'hidden'
                                },
                                Hue: {
                                    radius: '2px',
                                    shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
                                },
                                alpha: {
                                    position: 'relative',
                                    height: '10px',
                                    marginTop: '4px',
                                    overflow: 'hidden'
                                },
                                Alpha: {
                                    radius: '2px',
                                    shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
                                }
                            },
                            y
                        ),
                        disableAlpha: {
                            color: { height: '10px' },
                            hue: { height: '10px' },
                            alpha: { display: 'none' }
                        }
                    },
                    y
                ),
                { disableAlpha: m }
            );
        return i.createElement(
            'div',
            {
                style: T.picker,
                className: 'sketch-picker ' + I
            },
            i.createElement(
                'div',
                { style: T.saturation },
                i.createElement(u.OQ, {
                    style: T.Saturation,
                    hsl: p,
                    hsv: o,
                    onChange: h
                })
            ),
            i.createElement(
                'div',
                {
                    style: T.controls,
                    className: 'flexbox-fix'
                },
                i.createElement(
                    'div',
                    { style: T.sliders },
                    i.createElement(
                        'div',
                        { style: T.hue },
                        i.createElement(u.PS, {
                            style: T.Hue,
                            hsl: p,
                            onChange: h
                        })
                    ),
                    i.createElement(
                        'div',
                        { style: T.alpha },
                        i.createElement(u.xV, {
                            style: T.Alpha,
                            rgb: r,
                            hsl: p,
                            renderers: E,
                            onChange: h
                        })
                    )
                ),
                i.createElement('div', { style: T.color }, i.createElement(u.QN, null), i.createElement('div', { style: T.activeColor }))
            ),
            i.createElement(c.Z, {
                rgb: r,
                hsl: p,
                hex: a,
                onChange: h,
                disableAlpha: m
            }),
            i.createElement(d.Z, {
                colors: g,
                onClick: h,
                onSwatchHover: _
            })
        );
    };
(p.propTypes = {
    disableAlpha: o().bool,
    width: o().oneOfType([o().string, o().number]),
    styles: o().object
}),
    (p.defaultProps = {
        disableAlpha: !1,
        width: 200,
        styles: {},
        presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
    }),
    (0, u.t1)(p);
