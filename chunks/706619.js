n.d(t, { Z: () => s }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(311308),
    o = n(692547),
    a = n(481060);
function s(e) {
    let t = (0, l.useRef)(null),
        [n, s] = (0, l.useState)(null),
        [u] = (0, l.useState)(() => new i.TimelineDataSeries()),
        c = (0, a.dQu)(o.Z.colors.BACKGROUND_PRIMARY).hsl(),
        d = (0, a.dQu)(o.Z.colors.TEXT_NORMAL).hsl(),
        h = (0, a.dQu)(o.Z.colors.BACKGROUND_ACCENT).hsl(),
        f = (0, a.dQu)(o.Z.unsafe_rawColors.BRAND_500).hsl();
    (0, l.useEffect)(() => {
        var e;
        let n = t.current;
        if (null == n) return;
        let r = new i.TimelineGraphView(n, null != (e = window.devicePixelRatio) ? e : 1);
        (r.backgroundColor = c), (r.textColor = d), (r.gridColor = h), (r.timeOptions = { timeStyle: 'short' }), (r.fontFamily = 'gg sans'), (r.fontSize = 11), u.setColor(f), r.addDataSeries(u), r.updateEndDate(), s(r);
    }, [t, c, f, h, d, u]),
        u.setPoints(e.dataPoints),
        null == n || n.updateEndDate();
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
