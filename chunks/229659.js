n.d(t, { A: () => o });
var l = n(627968),
    i = n(64700),
    s = n(502671),
    r = n(661531),
    a = n(602853);
function o(e) {
    let t = (0, i.useRef)(null),
        [n, o] = (0, i.useState)(null),
        [c] = (0, i.useState)(() => new s.TimelineDataSeries()),
        d = (0, a.r)(r.A.colors.BACKGROUND_BASE_LOW).hsl(),
        u = (0, a.r)(r.A.colors.TEXT_DEFAULT).hsl(),
        h = (0, a.r)(r.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        g = (0, a.r)(r.A.unsafe_rawColors.BRAND_500).hsl();
    (0, i.useEffect)(() => {
        let e = t.current;
        if (null == e) return;
        let n = new s.TimelineGraphView(e, window.devicePixelRatio ?? 1);
        (n.backgroundColor = d),
            (n.textColor = u),
            (n.gridColor = h),
            (n.timeOptions = { timeStyle: "short" }),
            (n.fontFamily = "gg sans"),
            (n.fontSize = 11),
            c.setColor(g),
            n.addDataSeries(c),
            n.updateEndDate(),
            o(n);
    }, [t, d, g, h, u, c]);
    let p = e.converter,
        m = null != p ? e.dataPoints.map((e) => ({ ...e, value: p(e.value) })) : e.dataPoints;
    c.setPoints(m), n?.updateEndDate();
    let x = { width: e.width, height: e.height };
    return (0, l.jsx)("canvas", { style: x, width: e.width, height: e.height, ref: t }, "canvas");
}
