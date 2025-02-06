n.d(t, { Z: () => r }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(311308),
    o = n(692547),
    a = n(481060);
function r(e) {
    let t = (0, i.useRef)(null),
        [n, r] = (0, i.useState)(null),
        [c] = (0, i.useState)(() => new s.TimelineDataSeries()),
        u = (0, a.dQu)(o.Z.colors.BACKGROUND_PRIMARY).hsl(),
        d = (0, a.dQu)(o.Z.colors.TEXT_NORMAL).hsl(),
        h = (0, a.dQu)(o.Z.colors.BACKGROUND_ACCENT).hsl(),
        N = (0, a.dQu)(o.Z.unsafe_rawColors.BRAND_500).hsl();
    (0, i.useEffect)(() => {
        var e;
        let n = t.current;
        if (null == n) return;
        let l = new s.TimelineGraphView(n, null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1);
        (l.backgroundColor = u), (l.textColor = d), (l.gridColor = h), (l.timeOptions = { timeStyle: 'short' }), (l.fontFamily = 'gg sans'), (l.fontSize = 11), c.setColor(N), l.addDataSeries(c), l.updateEndDate(), r(l);
    }, [t, u, N, h, d, c]),
        c.setPoints(e.dataPoints),
        null == n || n.updateEndDate();
    let f = {
        width: e.width,
        height: e.height
    };
    return (0, l.jsx)(
        'canvas',
        {
            style: f,
            width: e.width,
            height: e.height,
            ref: t
        },
        'canvas'
    );
}
