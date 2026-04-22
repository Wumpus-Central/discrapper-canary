n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    a = n(502671),
    s = n(827734),
    r = n(602853);
function o(e) {
    let t = (0, l.useRef)(null),
        [n, o] = (0, l.useState)(null),
        [c] = (0, l.useState)(() => new a.TimelineDataSeries()),
        d = (0, r.r)(s.A.colors.BACKGROUND_BASE_LOW).hsl(),
        u = (0, r.r)(s.A.colors.TEXT_DEFAULT).hsl(),
        h = (0, r.r)(s.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        m = (0, r.r)(s.A.unsafe_rawColors.BRAND_500).hsl();
    (0, l.useEffect)(() => {
        let e = t.current;
        if (null == e) return;
        let n = new a.TimelineGraphView(e, window.devicePixelRatio ?? 1);
        (n.backgroundColor = d),
            (n.textColor = u),
            (n.gridColor = h),
            (n.timeOptions = { timeStyle: "short" }),
            (n.fontFamily = "gg sans"),
            (n.fontSize = 11),
            c.setColor(m),
            n.addDataSeries(c),
            n.updateEndDate(),
            o(n);
    }, [t, d, m, h, u, c]);
    let A = e.converter,
        g = null != A ? e.dataPoints.map((e) => ({ ...e, value: A(e.value) })) : e.dataPoints;
    c.setPoints(g), n?.updateEndDate();
    let p = { width: e.width, height: e.height };
    return (0, i.jsx)("canvas", { style: p, width: e.width, height: e.height, ref: t }, "canvas");
}
