t.d(n, { Z: () => d });
var l = t(200651),
    a = t(192379),
    i = t(481060),
    r = t(87686),
    s = t(586826),
    o = t(507419),
    u = t(388032),
    c = t(359324);
let d = a.memo(function (e) {
    let { sound: n, volume: t, disabled: a = !1, onChange: d } = e,
        { file: f } = (0, s.p)();
    return (0, l.jsx)(i.hjN, {
        className: c.section,
        title: u.NW.string(u.t.CCRKNz),
        children: (0, l.jsxs)('div', {
            className: c.fakeInput,
            children: [
                null != n &&
                    (0, l.jsx)(o.Z, {
                        sound: n,
                        volume: t,
                        disabled: a
                    }),
                null == n &&
                    null != f &&
                    (0, l.jsx)(r.Z, {
                        className: c.audioTrimmer,
                        volume: t,
                        disabled: a,
                        onChange: d
                    })
            ]
        })
    });
});
