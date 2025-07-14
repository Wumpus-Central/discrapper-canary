(n.d(t, { Z: () => a }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(311308),
    o = n(692547),
    s = n(481060);
function a(e) {
    let t = (0, l.useRef)(null),
        [n, a] = (0, l.useState)(null),
        [c] = (0, l.useState)(() => new i.TimelineDataSeries()),
        u = (0, s.dQu)(o.Z.colors.BACKGROUND_BASE_LOW).hsl(),
        d = (0, s.dQu)(o.Z.colors.TEXT_DEFAULT).hsl(),
        h = (0, s.dQu)(o.Z.colors.BACKGROUND_ACCENT).hsl(),
        f = (0, s.dQu)(o.Z.unsafe_rawColors.BRAND_500).hsl();
    ((0, l.useEffect)(() => {
        var e;
        let n = t.current;
        if (null == n) return;
        let r = new i.TimelineGraphView(n, null != (e = window.devicePixelRatio) ? e : 1);
        ((r.backgroundColor = u), (r.textColor = d), (r.gridColor = h), (r.timeOptions = { timeStyle: 'short' }), (r.fontFamily = 'gg sans'), (r.fontSize = 11), c.setColor(f), r.addDataSeries(c), r.updateEndDate(), a(r));
    }, [t, u, f, h, d, c]),
        c.setPoints(e.dataPoints),
        null == n || n.updateEndDate());
    let p = {
        width: e.width,
        height: e.height
    };
    return (0, r.jsx)(
        'canvas',
        {
            style: p,
            width: e.width,
            height: e.height,
            ref: t
        },
        'canvas'
    );
}
