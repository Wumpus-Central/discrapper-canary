n.d(t, { _: () => l });
var r = n(200651),
    i = n(192379),
    o = n(561779),
    a = n(504841);
let s = (e) => ''.concat(e.toFixed(0), '%'),
    l = i.forwardRef(function (e, t) {
        let { value: n, minValue: l = 0, maxValue: c = 100, onChange: u, renderValue: d = s, 'aria-label': f } = e,
            p = i.useRef(null);
        return (
            i.useImperativeHandle(
                t,
                () => ({
                    focus: () => {
                        var e;
                        return null === (e = p.current) || void 0 === e ? void 0 : e.focus();
                    },
                    blur: () => {
                        var e;
                        return null === (e = p.current) || void 0 === e ? void 0 : e.blur();
                    },
                    activate: () => !1
                }),
                []
            ),
            (0, r.jsx)('div', {
                className: a.sliderContainer,
                children: (0, r.jsx)(o.i, {
                    ref: p,
                    mini: !0,
                    handleSize: 16,
                    className: a.slider,
                    initialValue: n,
                    minValue: l,
                    maxValue: c,
                    onValueChange: u,
                    asValueChanges: u,
                    onValueRender: d,
                    orientation: 'horizontal',
                    'aria-label': f
                })
            })
        );
    });
