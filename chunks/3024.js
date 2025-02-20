n.d(t, { Z: () => a });
var r = n(192379),
    i = n(723184),
    o = n(877837);
let a = function (e) {
    var t = e.hex,
        n = e.rgb,
        a = e.onChange,
        s = (0, i.default)({
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
        l = function (e, t) {
            e.r || e.g || e.b
                ? a(
                      {
                          r: e.r || n.r,
                          g: e.g || n.g,
                          b: e.b || n.b,
                          source: 'rgb'
                      },
                      t
                  )
                : a(
                      {
                          hex: e.hex,
                          source: 'hex'
                      },
                      t
                  );
        };
    return r.createElement(
        'div',
        {
            style: s.fields,
            className: 'flexbox-fix'
        },
        r.createElement('div', { style: s.active }),
        r.createElement(o.Vm, {
            style: {
                wrap: s.HEXwrap,
                input: s.HEXinput,
                label: s.HEXlabel
            },
            label: 'hex',
            value: t,
            onChange: l
        }),
        r.createElement(o.Vm, {
            style: {
                wrap: s.RGBwrap,
                input: s.RGBinput,
                label: s.RGBlabel
            },
            label: 'r',
            value: n.r,
            onChange: l
        }),
        r.createElement(o.Vm, {
            style: {
                wrap: s.RGBwrap,
                input: s.RGBinput,
                label: s.RGBlabel
            },
            label: 'g',
            value: n.g,
            onChange: l
        }),
        r.createElement(o.Vm, {
            style: {
                wrap: s.RGBwrap,
                input: s.RGBinput,
                label: s.RGBlabel
            },
            label: 'b',
            value: n.b,
            onChange: l
        })
    );
};
