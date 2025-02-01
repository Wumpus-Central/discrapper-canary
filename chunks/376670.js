n.d(t, { Z: () => o });
var i = n(192379),
    r = n(723184),
    a = n(820611),
    s = n(877837);
let o = function (e) {
    var t = e.onChange,
        n = e.rgb,
        o = e.hsl,
        l = e.hex,
        u = e.disableAlpha,
        c = (0, r.default)(
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
            { disableAlpha: u }
        ),
        d = function (e, i) {
            e.hex
                ? a.FX(e.hex) &&
                  t(
                      {
                          hex: e.hex,
                          source: 'hex'
                      },
                      i
                  )
                : e.r || e.g || e.b
                  ? t(
                        {
                            r: e.r || n.r,
                            g: e.g || n.g,
                            b: e.b || n.b,
                            a: n.a,
                            source: 'rgb'
                        },
                        i
                    )
                  : e.a &&
                    (e.a < 0 ? (e.a = 0) : e.a > 100 && (e.a = 100),
                    (e.a /= 100),
                    t(
                        {
                            h: o.h,
                            s: o.s,
                            l: o.l,
                            a: e.a,
                            source: 'rgb'
                        },
                        i
                    ));
        };
    return i.createElement(
        'div',
        {
            style: c.fields,
            className: 'flexbox-fix'
        },
        i.createElement(
            'div',
            { style: c.double },
            i.createElement(s.Vm, {
                style: {
                    input: c.input,
                    label: c.label
                },
                label: 'hex',
                value: l.replace('#', ''),
                onChange: d
            })
        ),
        i.createElement(
            'div',
            { style: c.single },
            i.createElement(s.Vm, {
                style: {
                    input: c.input,
                    label: c.label
                },
                label: 'r',
                value: n.r,
                onChange: d,
                dragLabel: 'true',
                dragMax: '255'
            })
        ),
        i.createElement(
            'div',
            { style: c.single },
            i.createElement(s.Vm, {
                style: {
                    input: c.input,
                    label: c.label
                },
                label: 'g',
                value: n.g,
                onChange: d,
                dragLabel: 'true',
                dragMax: '255'
            })
        ),
        i.createElement(
            'div',
            { style: c.single },
            i.createElement(s.Vm, {
                style: {
                    input: c.input,
                    label: c.label
                },
                label: 'b',
                value: n.b,
                onChange: d,
                dragLabel: 'true',
                dragMax: '255'
            })
        ),
        i.createElement(
            'div',
            { style: c.alpha },
            i.createElement(s.Vm, {
                style: {
                    input: c.input,
                    label: c.label
                },
                label: 'a',
                value: Math.round(100 * n.a),
                onChange: d,
                dragLabel: 'true',
                dragMax: '100'
            })
        )
    );
};
