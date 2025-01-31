n.d(t, { Z: () => o }), n(47120);
var l = n(200651),
    s = n(192379),
    r = n(311308),
    a = n(692547),
    i = n(481060);
function o(e) {
    let t = (0, s.useRef)(null),
        [n, o] = (0, s.useState)(null),
        [c] = (0, s.useState)(() => new r.TimelineDataSeries()),
        u = (0, i.dQu)(a.Z.colors.BACKGROUND_PRIMARY).hsl(),
        d = (0, i.dQu)(a.Z.colors.TEXT_NORMAL).hsl(),
        h = (0, i.dQu)(a.Z.colors.BACKGROUND_ACCENT).hsl(),
        x = (0, i.dQu)(a.Z.unsafe_rawColors.BRAND_500).hsl();
    (0, s.useEffect)(() => {
        var e;
        let n = t.current;
        if (null == n) return;
        let l = new r.TimelineGraphView(n, null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1);
        (l.backgroundColor = u), (l.textColor = d), (l.gridColor = h), (l.timeOptions = { timeStyle: 'short' }), (l.fontFamily = 'gg sans'), (l.fontSize = 11), c.setColor(x), l.addDataSeries(c), l.updateEndDate(), o(l);
    }, [t, u, x, h, d, c]),
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
