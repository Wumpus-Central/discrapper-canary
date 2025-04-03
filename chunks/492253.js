r.d(t, { Z: () => l });
var n = r(192379),
    o = r(723184),
    a = r(820611),
    i = r(877837);
let l = function (e) {
    var t = e.onChange,
        r = e.rgb,
        l = e.hsv,
        s = e.hex,
        u = (0, o.default)({
            default: {
                fields: {
                    paddingTop: '5px',
                    paddingBottom: '9px',
                    width: '80px',
                    position: 'relative'
                },
                divider: { height: '5px' },
                RGBwrap: { position: 'relative' },
                RGBinput: {
                    marginLeft: '40%',
                    width: '40%',
                    height: '18px',
                    border: '1px solid #888888',
                    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
                    marginBottom: '5px',
                    fontSize: '13px',
                    paddingLeft: '3px',
                    marginRight: '10px'
                },
                RGBlabel: {
                    left: '0px',
                    top: '0px',
                    width: '34px',
                    textTransform: 'uppercase',
                    fontSize: '13px',
                    height: '18px',
                    lineHeight: '22px',
                    position: 'absolute'
                },
                HEXwrap: { position: 'relative' },
                HEXinput: {
                    marginLeft: '20%',
                    width: '80%',
                    height: '18px',
                    border: '1px solid #888888',
                    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
                    marginBottom: '6px',
                    fontSize: '13px',
                    paddingLeft: '3px'
                },
                HEXlabel: {
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '14px',
                    textTransform: 'uppercase',
                    fontSize: '13px',
                    height: '18px',
                    lineHeight: '22px'
                },
                fieldSymbols: {
                    position: 'absolute',
                    top: '5px',
                    right: '-7px',
                    fontSize: '13px'
                },
                symbol: {
                    height: '20px',
                    lineHeight: '22px',
                    paddingBottom: '7px'
                }
            }
        }),
        c = function (e, n) {
            e['#']
                ? a.FX(e['#']) &&
                  t(
                      {
                          hex: e['#'],
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
                            source: 'rgb'
                        },
                        n
                    )
                  : (e.h || e.s || e.v) &&
                    t(
                        {
                            h: e.h || l.h,
                            s: e.s || l.s,
                            v: e.v || l.v,
                            source: 'hsv'
                        },
                        n
                    );
        };
    return n.createElement(
        'div',
        { style: u.fields },
        n.createElement(i.Vm, {
            style: {
                wrap: u.RGBwrap,
                input: u.RGBinput,
                label: u.RGBlabel
            },
            label: 'h',
            value: Math.round(l.h),
            onChange: c
        }),
        n.createElement(i.Vm, {
            style: {
                wrap: u.RGBwrap,
                input: u.RGBinput,
                label: u.RGBlabel
            },
            label: 's',
            value: Math.round(100 * l.s),
            onChange: c
        }),
        n.createElement(i.Vm, {
            style: {
                wrap: u.RGBwrap,
                input: u.RGBinput,
                label: u.RGBlabel
            },
            label: 'v',
            value: Math.round(100 * l.v),
            onChange: c
        }),
        n.createElement('div', { style: u.divider }),
        n.createElement(i.Vm, {
            style: {
                wrap: u.RGBwrap,
                input: u.RGBinput,
                label: u.RGBlabel
            },
            label: 'r',
            value: r.r,
            onChange: c
        }),
        n.createElement(i.Vm, {
            style: {
                wrap: u.RGBwrap,
                input: u.RGBinput,
                label: u.RGBlabel
            },
            label: 'g',
            value: r.g,
            onChange: c
        }),
        n.createElement(i.Vm, {
            style: {
                wrap: u.RGBwrap,
                input: u.RGBinput,
                label: u.RGBlabel
            },
            label: 'b',
            value: r.b,
            onChange: c
        }),
        n.createElement('div', { style: u.divider }),
        n.createElement(i.Vm, {
            style: {
                wrap: u.HEXwrap,
                input: u.HEXinput,
                label: u.HEXlabel
            },
            label: '#',
            value: s.replace('#', ''),
            onChange: c
        }),
        n.createElement('div', { style: u.fieldSymbols }, n.createElement('div', { style: u.symbol }, '\xB0'), n.createElement('div', { style: u.symbol }, '%'), n.createElement('div', { style: u.symbol }, '%'))
    );
};
