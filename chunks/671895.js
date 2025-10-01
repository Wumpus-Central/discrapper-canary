t.d(n, { Z: () => d });
var a = t(951288),
    l = t(647438),
    i = t(481060),
    r = t(87686),
    o = t(586826),
    s = t(507419),
    u = t(388032),
    c = t(47903);
let d = l.memo(function (e) {
    let { sound: n, volume: t, disabled: l = !1, onChange: d } = e,
        { file: f } = (0, o.p)();
    return (0, a.jsx)(i.hjN, {
        className: c.section,
        title: u.intl.string(u.t.CCRKNz),
        children: (0, a.jsxs)("div", {
            className: c.fakeInput,
            children: [
                null != n &&
                    (0, a.jsx)(s.Z, {
                        sound: n,
                        volume: t,
                        disabled: l,
                    }),
                null == n &&
                    null != f &&
                    (0, a.jsx)(r.Z, {
                        className: c.audioTrimmer,
                        volume: t,
                        disabled: l,
                        onChange: d,
                    }),
            ],
        }),
    });
});
