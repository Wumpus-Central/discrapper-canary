var n = r(192379),
    o = r(723184),
    a = r(829307),
    i = r(820611),
    l = r(877837);
(0, l.t1)(function (e) {
    var t = e.onChange,
        r = e.hex,
        s = e.rgb,
        u = e.styles,
        c = void 0 === u ? {} : u,
        p = e.className,
        f = (0, o.default)(
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
                            borderBottom: '2px solid ' + r,
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
        d = function (e, r) {
            e.hex
                ? i.FX(e.hex) &&
                  t(
                      {
                          hex: e.hex,
                          source: 'hex'
                      },
                      r
                  )
                : (e.r || e.g || e.b) &&
                  t(
                      {
                          r: e.r || s.r,
                          g: e.g || s.g,
                          b: e.b || s.b,
                          source: 'rgb'
                      },
                      r
                  );
        };
    return n.createElement(
        l.xZ,
        { styles: c },
        n.createElement(
            'div',
            {
                style: f.material,
                className: 'material-picker ' + (void 0 === p ? '' : p)
            },
            n.createElement(l.Vm, {
                style: {
                    wrap: f.HEXwrap,
                    input: f.HEXinput,
                    label: f.HEXlabel
                },
                label: 'hex',
                value: r,
                onChange: d
            }),
            n.createElement(
                'div',
                {
                    style: f.split,
                    className: 'flexbox-fix'
                },
                n.createElement(
                    'div',
                    { style: f.third },
                    n.createElement(l.Vm, {
                        style: {
                            wrap: f.RGBwrap,
                            input: f.RGBinput,
                            label: f.RGBlabel
                        },
                        label: 'r',
                        value: s.r,
                        onChange: d
                    })
                ),
                n.createElement(
                    'div',
                    { style: f.third },
                    n.createElement(l.Vm, {
                        style: {
                            wrap: f.RGBwrap,
                            input: f.RGBinput,
                            label: f.RGBlabel
                        },
                        label: 'g',
                        value: s.g,
                        onChange: d
                    })
                ),
                n.createElement(
                    'div',
                    { style: f.third },
                    n.createElement(l.Vm, {
                        style: {
                            wrap: f.RGBwrap,
                            input: f.RGBinput,
                            label: f.RGBlabel
                        },
                        label: 'b',
                        value: s.b,
                        onChange: d
                    })
                )
            )
        )
    );
});
