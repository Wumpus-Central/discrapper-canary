n.d(t, {
    A: () => d,
});
var l = n(627968),
    i = n(64700),
    a = n(397927),
    r = n(804724),
    s = n(236972),
    u = n(637368),
    o = n(985018),
    c = n(83363);
let d = i.memo(function (e) {
    let { sound: t, volume: n, disabled: i = !1, onChange: d } = e,
        { file: f } = (0, s.L)();
    return (0, l.jsx)(a.D0$, {
        label: o.intl.string(o.t.CCRKNz),
        children: (0, l.jsxs)("div", {
            className: c.UV,
            children: [
                null != t &&
                    (0, l.jsx)(u.A, {
                        sound: t,
                        volume: n,
                        disabled: i,
                    }),
                null == t &&
                    null != f &&
                    (0, l.jsx)(r.A, {
                        className: c.lF,
                        volume: n,
                        disabled: i,
                        onChange: d,
                    }),
            ],
        }),
    });
});
