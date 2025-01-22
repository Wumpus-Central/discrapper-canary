var i = r(192379),
    a = r(723184),
    o = r(820611),
    s = r(877837),
    l = function (e) {
        var n = e.onChange,
            r = e.rgb,
            l = e.hsv,
            u = e.hex,
            c = (0, a.default)({
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
            d = function (e, i) {
                e['#']
                    ? o.FX(e['#']) &&
                      n(
                          {
                              hex: e['#'],
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
                                source: 'rgb'
                            },
                            i
                        )
                      : (e.h || e.s || e.v) &&
                        n(
                            {
                                h: e.h || l.h,
                                s: e.s || l.s,
                                v: e.v || l.v,
                                source: 'hsv'
                            },
                            i
                        );
            };
        return i.createElement(
            'div',
            { style: c.fields },
            i.createElement(s.Vm, {
                style: {
                    wrap: c.RGBwrap,
                    input: c.RGBinput,
                    label: c.RGBlabel
                },
                label: 'h',
                value: Math.round(l.h),
                onChange: d
            }),
            i.createElement(s.Vm, {
                style: {
                    wrap: c.RGBwrap,
                    input: c.RGBinput,
                    label: c.RGBlabel
                },
                label: 's',
                value: Math.round(100 * l.s),
                onChange: d
            }),
            i.createElement(s.Vm, {
                style: {
                    wrap: c.RGBwrap,
                    input: c.RGBinput,
                    label: c.RGBlabel
                },
                label: 'v',
                value: Math.round(100 * l.v),
                onChange: d
            }),
            i.createElement('div', { style: c.divider }),
            i.createElement(s.Vm, {
                style: {
                    wrap: c.RGBwrap,
                    input: c.RGBinput,
                    label: c.RGBlabel
                },
                label: 'r',
                value: r.r,
                onChange: d
            }),
            i.createElement(s.Vm, {
                style: {
                    wrap: c.RGBwrap,
                    input: c.RGBinput,
                    label: c.RGBlabel
                },
                label: 'g',
                value: r.g,
                onChange: d
            }),
            i.createElement(s.Vm, {
                style: {
                    wrap: c.RGBwrap,
                    input: c.RGBinput,
                    label: c.RGBlabel
                },
                label: 'b',
                value: r.b,
                onChange: d
            }),
            i.createElement('div', { style: c.divider }),
            i.createElement(s.Vm, {
                style: {
                    wrap: c.HEXwrap,
                    input: c.HEXinput,
                    label: c.HEXlabel
                },
                label: '#',
                value: u.replace('#', ''),
                onChange: d
            }),
            i.createElement('div', { style: c.fieldSymbols }, i.createElement('div', { style: c.symbol }, '\xB0'), i.createElement('div', { style: c.symbol }, '%'), i.createElement('div', { style: c.symbol }, '%'))
        );
    };
n.Z = l;
