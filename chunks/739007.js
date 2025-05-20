n.d(t, { _: () => d });
var r = n(255367),
    i = n(73800),
    a = n(392711),
    o = n.n(a),
    s = n(670596),
    l = n(561779),
    c = n(43231);
let u = (e) => ''.concat(e.toFixed(0), '%'),
    d = i.forwardRef(function (e, t) {
        let { value: n, minValue: a = 0, maxValue: d = 100, onChange: f, onInteraction: _, renderValue: p = u, 'aria-label': h } = e,
            m = i.useRef(null),
            g = i.useRef(o().debounce(() => (null == _ ? void 0 : _(s.U.SLIDER)), 100));
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
                minValue: a,
                maxValue: d,
                onValueChange: E,
                asValueChanges: f,
                onValueRender: p,
                orientation: 'horizontal',
                'aria-label': h
            })
        });
    });
