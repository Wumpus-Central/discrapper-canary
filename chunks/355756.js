var i = n(192379),
    r = n(723184),
    a = n(829307),
    s = n(820611),
    o = n(877837),
    l = function (e) {
        var t = e.onChange,
            n = e.hex,
            l = e.rgb,
            u = e.styles,
            c = void 0 === u ? {} : u,
            d = e.className,
            f = void 0 === d ? '' : d,
            _ = (0, r.default)(
                (0, a.Z)(
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
                    c
                )
            ),
            p = function (e, n) {
                e.hex
                    ? s.FX(e.hex) &&
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
        return i.createElement(
            o.xZ,
            { styles: c },
            i.createElement(
                'div',
                {
                    style: _.material,
                    className: 'material-picker ' + f
                },
                i.createElement(o.Vm, {
                    style: {
                        wrap: _.HEXwrap,
                        input: _.HEXinput,
                        label: _.HEXlabel
                    },
                    label: 'hex',
                    value: n,
                    onChange: p
                }),
                i.createElement(
                    'div',
                    {
                        style: _.split,
                        className: 'flexbox-fix'
                    },
                    i.createElement(
                        'div',
                        { style: _.third },
                        i.createElement(o.Vm, {
                            style: {
                                wrap: _.RGBwrap,
                                input: _.RGBinput,
                                label: _.RGBlabel
                            },
                            label: 'r',
                            value: l.r,
                            onChange: p
                        })
                    ),
                    i.createElement(
                        'div',
                        { style: _.third },
                        i.createElement(o.Vm, {
                            style: {
                                wrap: _.RGBwrap,
                                input: _.RGBinput,
                                label: _.RGBlabel
                            },
                            label: 'g',
                            value: l.g,
                            onChange: p
                        })
                    ),
                    i.createElement(
                        'div',
                        { style: _.third },
                        i.createElement(o.Vm, {
                            style: {
                                wrap: _.RGBwrap,
                                input: _.RGBinput,
                                label: _.RGBlabel
                            },
                            label: 'b',
                            value: l.b,
                            onChange: p
                        })
                    )
                )
            )
        );
    };
(0, o.t1)(l);
