r.d(n, {
    _: function () {
        return u;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(561779),
    s = r(960451);
let l = (e) => ''.concat(e.toFixed(0), '%'),
    u = a.forwardRef(function (e, n) {
        let { value: r, minValue: u = 0, maxValue: c = 100, onChange: d, renderValue: f = l, 'aria-label': p } = e,
            h = a.useRef(null);
        return (
            a.useImperativeHandle(
                n,
                () => ({
                    focus: () => {
                        var e;
                        return null === (e = h.current) || void 0 === e ? void 0 : e.focus();
                    },
                    blur: () => {
                        var e;
                        return null === (e = h.current) || void 0 === e ? void 0 : e.blur();
                    },
                    activate: () => !1
                }),
                []
            ),
            (0, i.jsx)('div', {
                className: s.sliderContainer,
                children: (0, i.jsx)(o.i, {
                    ref: h,
                    mini: !0,
                    handleSize: 16,
                    className: s.slider,
                    initialValue: r,
                    minValue: u,
                    maxValue: c,
                    onValueChange: d,
                    asValueChanges: d,
                    onValueRender: f,
                    orientation: 'horizontal',
                    'aria-label': p
                })
            })
        );
    });
