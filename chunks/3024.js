n.d(t, { Z: () => s });
var i = n(192379),
    r = n(723184),
    a = n(877837);
let s = function (e) {
    var t = e.hex,
        n = e.rgb,
        s = e.onChange,
        o = (0, r.default)({
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
                ? s(
                      {
                          r: e.r || n.r,
                          g: e.g || n.g,
                          b: e.b || n.b,
                          source: 'rgb'
                      },
                      t
                  )
                : s(
                      {
                          hex: e.hex,
                          source: 'hex'
                      },
                      t
                  );
        };
    return i.createElement(
        'div',
        {
            style: o.fields,
            className: 'flexbox-fix'
        },
        i.createElement('div', { style: o.active }),
        i.createElement(a.Vm, {
            style: {
                wrap: o.HEXwrap,
                input: o.HEXinput,
                label: o.HEXlabel
            },
            label: 'hex',
            value: t,
            onChange: l
        }),
        i.createElement(a.Vm, {
            style: {
                wrap: o.RGBwrap,
                input: o.RGBinput,
                label: o.RGBlabel
            },
            label: 'r',
            value: n.r,
            onChange: l
        }),
        i.createElement(a.Vm, {
            style: {
                wrap: o.RGBwrap,
                input: o.RGBinput,
                label: o.RGBlabel
            },
            label: 'g',
            value: n.g,
            onChange: l
        }),
        i.createElement(a.Vm, {
            style: {
                wrap: o.RGBwrap,
                input: o.RGBinput,
                label: o.RGBlabel
            },
            label: 'b',
            value: n.b,
            onChange: l
        })
    );
};
