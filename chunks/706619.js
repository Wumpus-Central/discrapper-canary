n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var l = n(200651),
    s = n(192379),
    r = n(311308),
    i = n(692547),
    o = n(481060);
function a(e) {
    let t = (0, s.useRef)(null),
        [n, a] = (0, s.useState)(null),
        [c] = (0, s.useState)(() => new r.TimelineDataSeries()),
        u = (0, o.useToken)(i.Z.colors.BACKGROUND_PRIMARY).hsl(),
        d = (0, o.useToken)(i.Z.colors.TEXT_NORMAL).hsl(),
        h = (0, o.useToken)(i.Z.colors.BACKGROUND_ACCENT).hsl(),
        x = (0, o.useToken)(i.Z.unsafe_rawColors.BRAND_500).hsl();
    (0, s.useEffect)(() => {
        var e;
        let n = t.current;
        if (null == n) return;
        let l = new r.TimelineGraphView(n, null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1);
        (l.backgroundColor = u), (l.textColor = d), (l.gridColor = h), (l.timeOptions = { timeStyle: 'short' }), (l.fontFamily = 'gg sans'), (l.fontSize = 11), c.setColor(x), l.addDataSeries(c), l.updateEndDate(), a(l);
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
