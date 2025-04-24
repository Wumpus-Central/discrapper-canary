n.d(t, { Z: () => s }), n(388685);
var l = n(200651),
    r = n(192379),
    i = n(311308),
    a = n(692547),
    o = n(481060);
function s(e) {
    let t = (0, r.useRef)(null),
        [n, s] = (0, r.useState)(null),
        [u] = (0, r.useState)(() => new i.TimelineDataSeries()),
        c = (0, o.dQu)(a.Z.colors.BACKGROUND_PRIMARY).hsl(),
        d = (0, o.dQu)(a.Z.colors.TEXT_NORMAL).hsl(),
        f = (0, o.dQu)(a.Z.colors.BACKGROUND_ACCENT).hsl(),
        h = (0, o.dQu)(a.Z.unsafe_rawColors.BRAND_500).hsl();
    (0, r.useEffect)(() => {
        var e;
        let n = t.current;
        if (null == n) return;
        let l = new i.TimelineGraphView(n, null != (e = window.devicePixelRatio) ? e : 1);
        (l.backgroundColor = c), (l.textColor = d), (l.gridColor = f), (l.timeOptions = { timeStyle: 'short' }), (l.fontFamily = 'gg sans'), (l.fontSize = 11), u.setColor(h), l.addDataSeries(u), l.updateEndDate(), s(l);
    }, [t, c, h, f, d, u]),
        u.setPoints(e.dataPoints),
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
