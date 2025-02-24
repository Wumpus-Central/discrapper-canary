var n = r(192379),
    o = r(476400),
    a = r.n(o),
    i = r(723184),
    l = r(829307),
    s = r(877837),
    u = r(376670),
    c = r(796892),
    p =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    f = function (e) {
        var t = e.width,
            r = e.rgb,
            o = e.hex,
            a = e.hsv,
            f = e.hsl,
            d = e.onChange,
            h = e.onSwatchHover,
            b = e.disableAlpha,
            v = e.presetColors,
            g = e.renderers,
            x = e.styles,
            y = void 0 === x ? {} : x,
            m = e.className,
            w = (0, i.default)(
                (0, l.Z)(
                    {
                        default: p(
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
                { disableAlpha: b }
            );
        return n.createElement(
            'div',
            {
                style: w.picker,
                className: 'sketch-picker ' + (void 0 === m ? '' : m)
            },
            n.createElement(
                'div',
                { style: w.saturation },
                n.createElement(s.OQ, {
                    style: w.Saturation,
                    hsl: f,
                    hsv: a,
                    onChange: d
                })
            ),
            n.createElement(
                'div',
                {
                    style: w.controls,
                    className: 'flexbox-fix'
                },
                n.createElement(
                    'div',
                    { style: w.sliders },
                    n.createElement(
                        'div',
                        { style: w.hue },
                        n.createElement(s.PS, {
                            style: w.Hue,
                            hsl: f,
                            onChange: d
                        })
                    ),
                    n.createElement(
                        'div',
                        { style: w.alpha },
                        n.createElement(s.xV, {
                            style: w.Alpha,
                            rgb: r,
                            hsl: f,
                            renderers: g,
                            onChange: d
                        })
                    )
                ),
                n.createElement('div', { style: w.color }, n.createElement(s.QN, null), n.createElement('div', { style: w.activeColor }))
            ),
            n.createElement(u.Z, {
                rgb: r,
                hsl: f,
                hex: o,
                onChange: d,
                disableAlpha: b
            }),
            n.createElement(c.Z, {
                colors: v,
                onClick: d,
                onSwatchHover: h
            })
        );
    };
(f.propTypes = {
    disableAlpha: a().bool,
    width: a().oneOfType([a().string, a().number]),
    styles: a().object
}),
    (f.defaultProps = {
        disableAlpha: !1,
        width: 200,
        styles: {},
        presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
    }),
    (0, s.t1)(f);
