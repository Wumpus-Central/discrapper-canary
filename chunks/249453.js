n.d(e, { Z: () => d });
var a = n(200651),
    i = n(192379),
    o = n(392711),
    l = n(481060),
    r = n(765250),
    c = n(444295),
    u = n(388032);
let s = (0, o.throttle)((t, e) => {
    (0, c.JS)(t.type, { opacity: e });
}, 1000);
function d(t) {
    let e = i.useCallback((e) => s(t, e), [t]);
    return (0, a.jsx)(l.II_, {
        id: 'opacity',
        'aria-haspopup': !0,
        label: u.intl.string(u.t.OVovCQ),
        control: (n, i) =>
            (0, a.jsx)(l._wy, {
                ...n,
                ref: i,
                value: 100 * t.opacity,
                maxValue: 100,
                onChange: (n) => {
                    (0, r.nv)({
                        widgetId: t.id,
                        opacity: n / 100
                    }),
                        e(Math.floor(n));
                },
                'aria-label': u.intl.string(u.t.kbFsAA)
            })
    });
}
