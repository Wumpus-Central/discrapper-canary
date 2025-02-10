n.d(t, { Z: () => r }), n(47120);
var i = n(200651),
    l = n(192379),
    o = n(311308),
    s = n(692547),
    a = n(481060);
function r(e) {
    let t = (0, l.useRef)(null),
        [n, r] = (0, l.useState)(null),
        [c] = (0, l.useState)(() => new o.TimelineDataSeries()),
        u = (0, a.dQu)(s.Z.colors.BACKGROUND_PRIMARY).hsl(),
        d = (0, a.dQu)(s.Z.colors.TEXT_NORMAL).hsl(),
        h = (0, a.dQu)(s.Z.colors.BACKGROUND_ACCENT).hsl(),
        f = (0, a.dQu)(s.Z.unsafe_rawColors.BRAND_500).hsl();
    (0, l.useEffect)(() => {
        var e;
        let n = t.current;
        if (null == n) return;
        let i = new o.TimelineGraphView(n, null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1);
        (i.backgroundColor = u), (i.textColor = d), (i.gridColor = h), (i.timeOptions = { timeStyle: 'short' }), (i.fontFamily = 'gg sans'), (i.fontSize = 11), c.setColor(f), i.addDataSeries(c), i.updateEndDate(), r(i);
    }, [t, u, f, h, d, c]),
        c.setPoints(e.dataPoints),
        null == n || n.updateEndDate();
    let N = {
        width: e.width,
        height: e.height
    };
    return (0, i.jsx)(
        'canvas',
        {
            style: N,
            width: e.width,
            height: e.height,
            ref: t
        },
        'canvas'
    );
}
