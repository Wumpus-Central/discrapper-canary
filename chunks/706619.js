n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var l = n(200651),
    r = n(192379),
    s = n(311308),
    o = n(692547),
    i = n(481060);
function a(e) {
    let t = (0, r.useRef)(null),
        [n, a] = (0, r.useState)(null),
        [c] = (0, r.useState)(() => new s.TimelineDataSeries()),
        u = (0, i.useToken)(o.Z.colors.BACKGROUND_PRIMARY).hsl(),
        d = (0, i.useToken)(o.Z.colors.TEXT_NORMAL).hsl(),
        h = (0, i.useToken)(o.Z.colors.BACKGROUND_ACCENT).hsl(),
        x = (0, i.useToken)(o.Z.unsafe_rawColors.BRAND_500).hsl();
    (0, r.useEffect)(() => {
        var e;
        let n = t.current;
        if (null == n) return;
        let l = new s.TimelineGraphView(n, null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1);
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
