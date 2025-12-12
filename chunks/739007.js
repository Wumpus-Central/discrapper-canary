n.d(t, { _: () => d });
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(670596),
    l = n(561779),
    c = n(30724);
let u = (e) => "".concat(e.toFixed(0), "%"),
    d = i.forwardRef(function (e, t) {
        let {
                value: n,
                minValue: a = 0,
                maxValue: d = 100,
                onChange: f,
                onInteraction: p,
                renderValue: _ = u,
                "aria-label": m,
            } = e,
            h = i.useRef(null),
            g = i.useMemo(() => o().debounce(() => (null == p ? void 0 : p(s.U.SLIDER)), 100), [p]);
        i.useImperativeHandle(
            t,
            () => ({
                focus: () => {
                    var e;
                    return null == (e = h.current) ? void 0 : e.focus();
                },
                blur: () => {
                    var e;
                    return null == (e = h.current) ? void 0 : e.blur();
                },
                activate: () => !1,
            }),
            [],
        );
        let E = (e) => {
            f(e), g();
        };
        return (0, r.jsx)("div", {
            className: c.sliderContainer,
            children: (0, r.jsx)(l.i, {
                ref: h,
                mini: !0,
                handleSize: 16,
                className: c.slider,
                initialValue: n,
                minValue: a,
                maxValue: d,
                onValueChange: E,
                asValueChanges: f,
                onValueRender: _,
                orientation: "horizontal",
                "aria-label": m,
            }),
        });
    });
