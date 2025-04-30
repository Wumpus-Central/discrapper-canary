r.d(t, { Z: () => i });
var n = r(192379),
    o = r(723184),
    a = r(877837);
let i = function (e) {
    var t = e.hex,
        r = e.rgb,
        i = e.onChange,
        l = (0, o.default)({
            default: {
                fields: {
                    display: 'flex',
                    paddingBottom: '6px',
                    paddingRight: '5px',
                    position: 'relative'
                },
                active: {
                    position: 'absolute',
                    top: '6px',
                    left: '5px',
                    height: '9px',
                    width: '9px',
                    background: t
                },
                HEXwrap: {
                    flex: '6',
                    position: 'relative'
                },
                HEXinput: {
                    width: '80%',
                    padding: '0px',
                    paddingLeft: '20%',
                    border: 'none',
                    outline: 'none',
                    background: 'none',
                    fontSize: '12px',
                    color: '#333',
                    height: '16px'
                },
                HEXlabel: { display: 'none' },
                RGBwrap: {
                    flex: '3',
                    position: 'relative'
                },
                RGBinput: {
                    width: '70%',
                    padding: '0px',
                    paddingLeft: '30%',
                    border: 'none',
                    outline: 'none',
                    background: 'none',
                    fontSize: '12px',
                    color: '#333',
                    height: '16px'
                },
                RGBlabel: {
                    position: 'absolute',
                    top: '3px',
                    left: '0px',
                    lineHeight: '16px',
                    textTransform: 'uppercase',
                    fontSize: '12px',
                    color: '#999'
                }
            }
        }),
        s = function (e, t) {
            e.r || e.g || e.b
                ? i(
                      {
                          r: e.r || r.r,
                          g: e.g || r.g,
                          b: e.b || r.b,
                          source: 'rgb'
                      },
                      t
                  )
                : i(
                      {
                          hex: e.hex,
                          source: 'hex'
                      },
                      t
                  );
        };
    return n.createElement(
        'div',
        {
            style: l.fields,
            className: 'flexbox-fix'
        },
        n.createElement('div', { style: l.active }),
        n.createElement(a.Vm, {
            style: {
                wrap: l.HEXwrap,
                input: l.HEXinput,
                label: l.HEXlabel
            },
            label: 'hex',
            value: t,
            onChange: s
        }),
        n.createElement(a.Vm, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: 'r',
            value: r.r,
            onChange: s
        }),
        n.createElement(a.Vm, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: 'g',
            value: r.g,
            onChange: s
        }),
        n.createElement(a.Vm, {
            style: {
                wrap: l.RGBwrap,
                input: l.RGBinput,
                label: l.RGBlabel
            },
            label: 'b',
            value: r.b,
            onChange: s
        })
    );
};
