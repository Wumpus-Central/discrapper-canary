n.d(t, { _: () => l });
var i = n(200651),
    r = n(192379),
    a = n(561779),
    s = n(180636);
let o = (e) => ''.concat(e.toFixed(0), '%'),
    l = r.forwardRef(function (e, t) {
        let { value: n, minValue: l = 0, maxValue: u = 100, onChange: c, renderValue: d = o, 'aria-label': f } = e,
            _ = r.useRef(null);
        return (
            r.useImperativeHandle(
                t,
                () => ({
                    focus: () => {
                        var e;
                        return null === (e = _.current) || void 0 === e ? void 0 : e.focus();
                    },
                    blur: () => {
                        var e;
                        return null === (e = _.current) || void 0 === e ? void 0 : e.blur();
                    },
                    activate: () => !1
                }),
                []
            ),
            (0, i.jsx)('div', {
                className: s.sliderContainer,
                children: (0, i.jsx)(a.i, {
                    ref: _,
                    mini: !0,
                    handleSize: 16,
                    className: s.slider,
                    initialValue: n,
                    minValue: l,
                    maxValue: u,
                    onValueChange: c,
                    asValueChanges: c,
                    onValueRender: d,
                    orientation: 'horizontal',
                    'aria-label': f
                })
            })
        );
    });
