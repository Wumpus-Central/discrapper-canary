n.d(t, { Z: () => d });
var l = n(255367),
    a = n(73800),
    i = n(481060),
    r = n(87686),
    s = n(586826),
    o = n(507419),
    u = n(388032),
    c = n(359324);
let d = a.memo(function (e) {
    let { sound: t, volume: n, disabled: a = !1, onChange: d } = e,
        { file: f } = (0, s.p)();
    return (0, l.jsx)(i.hjN, {
        className: c.section,
        title: u.intl.string(u.t.CCRKNz),
        children: (0, l.jsxs)('div', {
            className: c.fakeInput,
            children: [
                null != t &&
                    (0, l.jsx)(o.Z, {
                        sound: t,
                        volume: n,
                        disabled: a
                    }),
                null == t &&
                    null != f &&
                    (0, l.jsx)(r.Z, {
                        className: c.audioTrimmer,
                        volume: n,
                        disabled: a,
                        onChange: d
                    })
            ]
        })
    });
});
