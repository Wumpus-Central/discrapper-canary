var r = n(192379),
    i = n(723184),
    o = n(829307),
    a = n(820611),
    s = n(877837),
    l = function (e) {
        var t = e.onChange,
            n = e.hex,
            l = e.rgb,
            c = e.styles,
            u = void 0 === c ? {} : c,
            d = e.className,
            f = void 0 === d ? '' : d,
            p = (0, i.default)(
                (0, o.Z)(
                    {
                        default: {
                            material: {
                                width: '98px',
                                height: '98px',
                                padding: '16px',
                                fontFamily: 'Roboto'
                            },
                            HEXwrap: { position: 'relative' },
                            HEXinput: {
                                width: '100%',
                                marginTop: '12px',
                                fontSize: '15px',
                                color: '#333',
                                padding: '0px',
                                border: '0px',
                                borderBottom: '2px solid ' + n,
                                outline: 'none',
                                height: '30px'
                            },
                            HEXlabel: {
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                fontSize: '11px',
                                color: '#999999',
                                textTransform: 'capitalize'
                            },
                            Hex: { style: {} },
                            RGBwrap: { position: 'relative' },
                            RGBinput: {
                                width: '100%',
                                marginTop: '12px',
                                fontSize: '15px',
                                color: '#333',
                                padding: '0px',
                                border: '0px',
                                borderBottom: '1px solid #eee',
                                outline: 'none',
                                height: '30px'
                            },
                            RGBlabel: {
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                fontSize: '11px',
                                color: '#999999',
                                textTransform: 'capitalize'
                            },
                            split: {
                                display: 'flex',
                                marginRight: '-10px',
                                paddingTop: '11px'
                            },
                            third: {
                                flex: '1',
                                paddingRight: '10px'
                            }
                        }
                    },
                    u
                )
            ),
            _ = function (e, n) {
                e.hex
                    ? a.FX(e.hex) &&
                      t(
                          {
                              hex: e.hex,
                              source: 'hex'
                          },
                          n
                      )
                    : (e.r || e.g || e.b) &&
                      t(
                          {
                              r: e.r || l.r,
                              g: e.g || l.g,
                              b: e.b || l.b,
                              source: 'rgb'
                          },
                          n
                      );
            };
        return r.createElement(
            s.xZ,
            { styles: u },
            r.createElement(
                'div',
                {
                    style: p.material,
                    className: 'material-picker ' + f
                },
                r.createElement(s.Vm, {
                    style: {
                        wrap: p.HEXwrap,
                        input: p.HEXinput,
                        label: p.HEXlabel
                    },
                    label: 'hex',
                    value: n,
                    onChange: _
                }),
                r.createElement(
                    'div',
                    {
                        style: p.split,
                        className: 'flexbox-fix'
                    },
                    r.createElement(
                        'div',
                        { style: p.third },
                        r.createElement(s.Vm, {
                            style: {
                                wrap: p.RGBwrap,
                                input: p.RGBinput,
                                label: p.RGBlabel
                            },
                            label: 'r',
                            value: l.r,
                            onChange: _
                        })
                    ),
                    r.createElement(
                        'div',
                        { style: p.third },
                        r.createElement(s.Vm, {
                            style: {
                                wrap: p.RGBwrap,
                                input: p.RGBinput,
                                label: p.RGBlabel
                            },
                            label: 'g',
                            value: l.g,
                            onChange: _
                        })
                    ),
                    r.createElement(
                        'div',
                        { style: p.third },
                        r.createElement(s.Vm, {
                            style: {
                                wrap: p.RGBwrap,
                                input: p.RGBinput,
                                label: p.RGBlabel
                            },
                            label: 'b',
                            value: l.b,
                            onChange: _
                        })
                    )
                )
            )
        );
    };
(0, s.t1)(l);
