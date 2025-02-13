n.d(t, { Z: () => s }), n(47120);
var l = n(200651),
    i = n(192379),
    a = n(311308),
    r = n(692547),
    o = n(481060);
function s(e) {
    let t = (0, i.useRef)(null),
        [n, s] = (0, i.useState)(null),
        [c] = (0, i.useState)(() => new a.TimelineDataSeries()),
        u = (0, o.dQu)(r.Z.colors.BACKGROUND_PRIMARY).hsl(),
        d = (0, o.dQu)(r.Z.colors.TEXT_NORMAL).hsl(),
        h = (0, o.dQu)(r.Z.colors.BACKGROUND_ACCENT).hsl(),
        f = (0, o.dQu)(r.Z.unsafe_rawColors.BRAND_500).hsl();
    (0, i.useEffect)(() => {
        var e;
        let n = t.current;
        if (null == n) return;
        let l = new a.TimelineGraphView(n, null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1);
        (l.backgroundColor = u), (l.textColor = d), (l.gridColor = h), (l.timeOptions = { timeStyle: 'short' }), (l.fontFamily = 'gg sans'), (l.fontSize = 11), c.setColor(f), l.addDataSeries(c), l.updateEndDate(), s(l);
    }, [t, u, f, h, d, c]),
        c.setPoints(e.dataPoints),
        null == n || n.updateEndDate();
    let g = {
        width: e.width,
        height: e.height
    };
    return (0, l.jsx)(
        'canvas',
        {
            style: g,
            width: e.width,
            height: e.height,
            ref: t
        },
        'canvas'
    );
}
