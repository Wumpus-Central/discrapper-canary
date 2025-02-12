t.d(n, { Z: () => c });
var l = t(200651),
    a = t(192379),
    i = t(481060),
    s = t(87686),
    r = t(586826),
    u = t(507419),
    o = t(388032),
    d = t(367451);
let c = a.memo(function (e) {
    let { sound: n, volume: t, disabled: a = !1, onChange: c } = e,
        { file: f } = (0, r.p)();
    return (0, l.jsx)(i.hjN, {
        className: d.section,
        title: o.intl.string(o.t.CCRKNz),
        children: (0, l.jsxs)('div', {
            className: d.fakeInput,
            children: [
                null != n &&
                    (0, l.jsx)(u.Z, {
                        sound: n,
                        volume: t,
                        disabled: a
                    }),
                null == n &&
                    null != f &&
                    (0, l.jsx)(s.Z, {
                        className: d.audioTrimmer,
                        volume: t,
                        disabled: a,
                        onChange: c
                    })
            ]
        })
    });
});
