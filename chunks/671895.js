n.d(t, { Z: () => d });
var l = n(200651),
    a = n(192379),
    r = n(481060),
    i = n(87686),
    s = n(586826),
    o = n(507419),
    u = n(388032),
    c = n(799134);
let d = a.memo(function (e) {
    let { sound: t, volume: n, disabled: a = !1, onChange: d } = e,
        { file: f } = (0, s.p)();
    return (0, l.jsx)(r.hjN, {
        className: c.section,
        title: u.NW.string(u.t.CCRKNz),
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
                    (0, l.jsx)(i.Z, {
                        className: c.audioTrimmer,
                        volume: n,
                        disabled: a,
                        onChange: d
                    })
            ]
        })
    });
});
