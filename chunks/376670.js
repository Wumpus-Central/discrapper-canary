var i = r(192379),
    a = r(723184),
    o = r(820611),
    s = r(877837),
    l = function (e) {
        var n = e.onChange,
            r = e.rgb,
            l = e.hsl,
            u = e.hex,
            c = e.disableAlpha,
            d = (0, a.default)(
                {
                    default: {
                        fields: {
                            display: 'flex',
                            paddingTop: '4px'
                        },
                        single: {
                            flex: '1',
                            paddingLeft: '6px'
                        },
                        alpha: {
                            flex: '1',
                            paddingLeft: '6px'
                        },
                        double: { flex: '2' },
                        input: {
                            width: '80%',
                            padding: '4px 10% 3px',
                            border: 'none',
                            boxShadow: 'inset 0 0 0 1px #ccc',
                            fontSize: '11px'
                        },
                        label: {
                            display: 'block',
                            textAlign: 'center',
                            fontSize: '11px',
                            color: '#222',
                            paddingTop: '3px',
                            paddingBottom: '4px',
                            textTransform: 'capitalize'
                        }
                    },
                    disableAlpha: { alpha: { display: 'none' } }
                },
                { disableAlpha: c }
            ),
            f = function (e, i) {
                e.hex
                    ? o.FX(e.hex) &&
                      n(
                          {
                              hex: e.hex,
                              source: 'hex'
                          },
                          i
                      )
                    : e.r || e.g || e.b
                      ? n(
                            {
                                r: e.r || r.r,
                                g: e.g || r.g,
                                b: e.b || r.b,
                                a: r.a,
                                source: 'rgb'
                            },
                            i
                        )
                      : e.a &&
                        (e.a < 0 ? (e.a = 0) : e.a > 100 && (e.a = 100),
                        (e.a /= 100),
                        n(
                            {
                                h: l.h,
                                s: l.s,
                                l: l.l,
                                a: e.a,
                                source: 'rgb'
                            },
                            i
                        ));
            };
        return i.createElement(
            'div',
            {
                style: d.fields,
                className: 'flexbox-fix'
            },
            i.createElement(
                'div',
                { style: d.double },
                i.createElement(s.Vm, {
                    style: {
                        input: d.input,
                        label: d.label
                    },
                    label: 'hex',
                    value: u.replace('#', ''),
                    onChange: f
                })
            ),
            i.createElement(
                'div',
                { style: d.single },
                i.createElement(s.Vm, {
                    style: {
                        input: d.input,
                        label: d.label
                    },
                    label: 'r',
                    value: r.r,
                    onChange: f,
                    dragLabel: 'true',
                    dragMax: '255'
                })
            ),
            i.createElement(
                'div',
                { style: d.single },
                i.createElement(s.Vm, {
                    style: {
                        input: d.input,
                        label: d.label
                    },
                    label: 'g',
                    value: r.g,
                    onChange: f,
                    dragLabel: 'true',
                    dragMax: '255'
                })
            ),
            i.createElement(
                'div',
                { style: d.single },
                i.createElement(s.Vm, {
                    style: {
                        input: d.input,
                        label: d.label
                    },
                    label: 'b',
                    value: r.b,
                    onChange: f,
                    dragLabel: 'true',
                    dragMax: '255'
                })
            ),
            i.createElement(
                'div',
                { style: d.alpha },
                i.createElement(s.Vm, {
                    style: {
                        input: d.input,
                        label: d.label
                    },
                    label: 'a',
                    value: Math.round(100 * r.a),
                    onChange: f,
                    dragLabel: 'true',
                    dragMax: '100'
                })
            )
        );
    };
n.Z = l;
