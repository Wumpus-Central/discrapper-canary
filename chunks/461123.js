l.d(t, { A: () => c });
var n = l(627968),
    a = l(64700),
    i = l(397927),
    s = l(582343),
    r = l(236972),
    u = l(637368),
    o = l(985018),
    d = l(891122);
let c = a.memo(function (e) {
    let { sound: t, volume: l, disabled: a = !1, onChange: c } = e,
        { file: m } = (0, r.L)();
    return (0, n.jsx)(i.D0$, {
        label: o.intl.string(o.t.CCRKNz),
        children: (0, n.jsxs)("div", {
            className: d.UV,
            children: [
                null != t && (0, n.jsx)(u.A, { sound: t, volume: l, disabled: a }),
                null == t && null != m && (0, n.jsx)(s.A, { className: d.lF, volume: l, disabled: a, onChange: c }),
            ],
        }),
    });
});
