var r = n(192379),
    i = n(476400),
    o = n.n(i),
    a = n(723184),
    s = n(829307),
    l = n(877837),
    c = n(376670),
    u = n(796892),
    d =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    f = function (e) {
        var t = e.width,
            n = e.rgb,
            i = e.hex,
            o = e.hsv,
            f = e.hsl,
            p = e.onChange,
            _ = e.onSwatchHover,
            h = e.disableAlpha,
            m = e.presetColors,
            g = e.renderers,
            E = e.styles,
            v = void 0 === E ? {} : E,
            b = e.className,
            y = void 0 === b ? '' : b,
            O = (0, a.default)(
                (0, s.Z)(
                    {
                        default: d(
                            {
                                picker: {
                                    width: t,
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
                                    background: 'rgba(' + n.r + ',' + n.g + ',' + n.b + ',' + n.a + ')',
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
                            v
                        ),
                        disableAlpha: {
                            color: { height: '10px' },
                            hue: { height: '10px' },
                            alpha: { display: 'none' }
                        }
                    },
                    v
                ),
                { disableAlpha: h }
            );
        return r.createElement(
            'div',
            {
                style: O.picker,
                className: 'sketch-picker ' + y
            },
            r.createElement(
                'div',
                { style: O.saturation },
                r.createElement(l.OQ, {
                    style: O.Saturation,
                    hsl: f,
                    hsv: o,
                    onChange: p
                })
            ),
            r.createElement(
                'div',
                {
                    style: O.controls,
                    className: 'flexbox-fix'
                },
                r.createElement(
                    'div',
                    { style: O.sliders },
                    r.createElement(
                        'div',
                        { style: O.hue },
                        r.createElement(l.PS, {
                            style: O.Hue,
                            hsl: f,
                            onChange: p
                        })
                    ),
                    r.createElement(
                        'div',
                        { style: O.alpha },
                        r.createElement(l.xV, {
                            style: O.Alpha,
                            rgb: n,
                            hsl: f,
                            renderers: g,
                            onChange: p
                        })
                    )
                ),
                r.createElement('div', { style: O.color }, r.createElement(l.QN, null), r.createElement('div', { style: O.activeColor }))
            ),
            r.createElement(c.Z, {
                rgb: n,
                hsl: f,
                hex: i,
                onChange: p,
                disableAlpha: h
            }),
            r.createElement(u.Z, {
                colors: m,
                onClick: p,
                onSwatchHover: _
            })
        );
    };
(f.propTypes = {
    disableAlpha: o().bool,
    width: o().oneOfType([o().string, o().number]),
    styles: o().object
}),
    (f.defaultProps = {
        disableAlpha: !1,
        width: 200,
        styles: {},
        presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
    }),
    (0, l.t1)(f);
