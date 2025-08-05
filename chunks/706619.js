(n.d(t, { Z: () => o }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(311308),
    s = n(692547),
    a = n(481060);
function o(e) {
    let t = (0, l.useRef)(null),
        [n, o] = (0, l.useState)(null),
        [c] = (0, l.useState)(() => new i.TimelineDataSeries()),
        u = (0, a.dQu)(s.Z.colors.BACKGROUND_BASE_LOW).hsl(),
        d = (0, a.dQu)(s.Z.colors.TEXT_DEFAULT).hsl(),
        h = (0, a.dQu)(s.Z.colors.BACKGROUND_ACCENT).hsl(),
        f = (0, a.dQu)(s.Z.unsafe_rawColors.BRAND_500).hsl();
    ((0, l.useEffect)(() => {
        var e;
        let n = t.current;
        if (null == n) return;
        let r = new i.TimelineGraphView(n, null != (e = window.devicePixelRatio) ? e : 1);
        ((r.backgroundColor = u), (r.textColor = d), (r.gridColor = h), (r.timeOptions = { timeStyle: 'short' }), (r.fontFamily = 'gg sans'), (r.fontSize = 11), c.setColor(f), r.addDataSeries(c), r.updateEndDate(), o(r));
    }, [t, u, f, h, d, c]),
        c.setPoints(e.dataPoints),
        null == n || n.updateEndDate());
    let g = {
        width: e.width,
        height: e.height
    };
    return (0, r.jsx)(
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
