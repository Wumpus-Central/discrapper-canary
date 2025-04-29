n.d(t, { _: () => d });
var r = n(200651),
    i = n(192379),
    o = n(392711),
    a = n.n(o),
    s = n(670596),
    l = n(561779),
    c = n(993817);
let u = (e) => ''.concat(e.toFixed(0), '%'),
    d = i.forwardRef(function (e, t) {
        let { value: n, minValue: o = 0, maxValue: d = 100, onChange: f, onInteraction: _, renderValue: p = u, 'aria-label': h } = e,
            m = i.useRef(null),
            g = i.useRef(a().debounce(() => (null == _ ? void 0 : _(s.U.SLIDER)), 100));
        i.useImperativeHandle(
            t,
            () => ({
                focus: () => {
                    var e;
                    return null == (e = m.current) ? void 0 : e.focus();
                },
                blur: () => {
                    var e;
                    return null == (e = m.current) ? void 0 : e.blur();
                },
                activate: () => !1
            }),
            []
        );
        let E = (e) => {
            f(e), g.current();
        };
        return (0, r.jsx)('div', {
            className: c.sliderContainer,
            children: (0, r.jsx)(l.i, {
                ref: m,
                mini: !0,
                handleSize: 16,
                className: c.slider,
                initialValue: n,
                minValue: o,
                maxValue: d,
                onValueChange: E,
                asValueChanges: f,
                onValueRender: p,
                orientation: 'horizontal',
                'aria-label': h
            })
        });
    });
