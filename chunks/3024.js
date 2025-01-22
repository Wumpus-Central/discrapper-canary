var i = r(192379),
    a = r(723184),
    o = r(877837),
    s = function (e) {
        var n = e.hex,
            r = e.rgb,
            s = e.onChange,
            l = (0, a.default)({
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
                        background: n
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
            u = function (e, n) {
                e.r || e.g || e.b
                    ? s(
                          {
                              r: e.r || r.r,
                              g: e.g || r.g,
                              b: e.b || r.b,
                              source: 'rgb'
                          },
                          n
                      )
                    : s(
                          {
                              hex: e.hex,
                              source: 'hex'
                          },
                          n
                      );
            };
        return i.createElement(
            'div',
            {
                style: l.fields,
                className: 'flexbox-fix'
            },
            i.createElement('div', { style: l.active }),
            i.createElement(o.Vm, {
                style: {
                    wrap: l.HEXwrap,
                    input: l.HEXinput,
                    label: l.HEXlabel
                },
                label: 'hex',
                value: n,
                onChange: u
            }),
            i.createElement(o.Vm, {
                style: {
                    wrap: l.RGBwrap,
                    input: l.RGBinput,
                    label: l.RGBlabel
                },
                label: 'r',
                value: r.r,
                onChange: u
            }),
            i.createElement(o.Vm, {
                style: {
                    wrap: l.RGBwrap,
                    input: l.RGBinput,
                    label: l.RGBlabel
                },
                label: 'g',
                value: r.g,
                onChange: u
            }),
            i.createElement(o.Vm, {
                style: {
                    wrap: l.RGBwrap,
                    input: l.RGBinput,
                    label: l.RGBlabel
                },
                label: 'b',
                value: r.b,
                onChange: u
            })
        );
    };
n.Z = s;
