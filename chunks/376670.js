r.d(t, { Z: () => l });
var n = r(192379),
    o = r(723184),
    a = r(820611),
    i = r(877837);
let l = function (e) {
    var t = e.onChange,
        r = e.rgb,
        l = e.hsl,
        s = e.hex,
        u = e.disableAlpha,
        c = (0, o.default)(
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
        p = function (e, n) {
            e.hex
                ? a.FX(e.hex) &&
                  t(
                      {
                          hex: e.hex,
                          source: 'hex'
                      },
                      n
                  )
                : e.r || e.g || e.b
                  ? t(
                        {
                            r: e.r || r.r,
                            g: e.g || r.g,
                            b: e.b || r.b,
                            a: r.a,
                            source: 'rgb'
                        },
                        n
                    )
                  : e.a &&
                    (e.a < 0 ? (e.a = 0) : e.a > 100 && (e.a = 100),
                    (e.a /= 100),
                    t(
                        {
                            h: l.h,
                            s: l.s,
                            l: l.l,
                            a: e.a,
                            source: 'rgb'
                        },
                        n
                    ));
        };
    return n.createElement(
        'div',
        {
            style: c.fields,
            className: 'flexbox-fix'
        },
        n.createElement(
            'div',
            { style: c.double },
            n.createElement(i.Vm, {
                style: {
                    input: c.input,
                    label: c.label
                },
                label: 'hex',
                value: s.replace('#', ''),
                onChange: p
            })
        ),
        n.createElement(
            'div',
            { style: c.single },
            n.createElement(i.Vm, {
                style: {
                    input: c.input,
                    label: c.label
                },
                label: 'r',
                value: r.r,
                onChange: p,
                dragLabel: 'true',
                dragMax: '255'
            })
        ),
        n.createElement(
            'div',
            { style: c.single },
            n.createElement(i.Vm, {
                style: {
                    input: c.input,
                    label: c.label
                },
                label: 'g',
                value: r.g,
                onChange: p,
                dragLabel: 'true',
                dragMax: '255'
            })
        ),
        n.createElement(
            'div',
            { style: c.single },
            n.createElement(i.Vm, {
                style: {
                    input: c.input,
                    label: c.label
                },
                label: 'b',
                value: r.b,
                onChange: p,
                dragLabel: 'true',
                dragMax: '255'
            })
        ),
        n.createElement(
            'div',
            { style: c.alpha },
            n.createElement(i.Vm, {
                style: {
                    input: c.input,
                    label: c.label
                },
                label: 'a',
                value: Math.round(100 * r.a),
                onChange: p,
                dragLabel: 'true',
                dragMax: '100'
            })
        )
    );
};
