t.d(a, { default: () => s });
var n = t(200651),
    r = t(192379),
    i = t(232713),
    l = t(481060),
    u = t(239091),
    o = t(667142),
    c = t(388032);
function s(e) {
    let { onSelect: a, onClose: t } = e,
        s = (function () {
            let e = o.ZP.useState((e) => e.timeToLiveMs, i.X);
            return (0, n.jsx)(l.II_, {
                id: 'opacity',
                'aria-haspopup': !0,
                label: 'Time To Live',
                control: (a, t) =>
                    (0, n.jsx)(l._wy, {
                        ...a,
                        ref: t,
                        value: e,
                        maxValue: o.VX,
                        minValue: o.ih,
                        renderValue: (e) => ''.concat(e, 'ms'),
                        onChange: (e) => (0, o.S_)(e),
                        'aria-label': 'Time To Live'
                    })
            });
        })(),
        p = (function () {
            let e = o.ZP.useState((e) => e.reappearTimeMs, i.X);
            return (0, n.jsx)(l.II_, {
                id: 'opacity',
                'aria-haspopup': !0,
                label: 'Time To Reappear',
                control: (a, t) =>
                    (0, n.jsx)(l._wy, {
                        ...a,
                        ref: t,
                        value: e,
                        maxValue: o.V5,
                        minValue: o.xc,
                        renderValue: (e) => ''.concat(e, 'ms'),
                        onChange: (e) => (0, o.Df)(e),
                        'aria-label': 'Time To Reappear'
                    })
            });
        })(),
        f = r.useRef(t);
    return (
        r.useEffect(() => {
            f.current = t;
        }),
        r.useEffect(() => () => f.current(), []),
        (0, n.jsxs)(l.v2r, {
            navId: 'overlay-click-zone-debug-context-menu',
            onClose: u.Zy,
            'aria-label': c.intl.string(c.t.tPfVWl),
            onSelect: a,
            children: [s, p]
        })
    );
}
