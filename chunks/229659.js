n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    s = n(502671),
    r = n(661531),
    a = n(602853);
function o(e) {
    let t = (0, l.useRef)(null),
        [n, o] = (0, l.useState)(null),
        [u] = (0, l.useState)(() => new s.TimelineDataSeries()),
        d = (0, a.r)(r.A.colors.BACKGROUND_BASE_LOW).hsl(),
        c = (0, a.r)(r.A.colors.TEXT_DEFAULT).hsl(),
        h = (0, a.r)(r.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        g = (0, a.r)(r.A.unsafe_rawColors.BRAND_500).hsl();
    (0, l.useEffect)(() => {
        let e = t.current;
        if (null == e) return;
        let n = new s.TimelineGraphView(e, window.devicePixelRatio ?? 1);
        (n.backgroundColor = d),
            (n.textColor = c),
            (n.gridColor = h),
            (n.timeOptions = { timeStyle: "short" }),
            (n.fontFamily = "gg sans"),
            (n.fontSize = 11),
            u.setColor(g),
            n.addDataSeries(u),
            n.updateEndDate(),
            o(n);
    }, [t, d, g, h, c, u]);
    let A = e.converter,
        f = null != A ? e.dataPoints.map((e) => ({ ...e, value: A(e.value) })) : e.dataPoints;
    u.setPoints(f), n?.updateEndDate();
    let E = { width: e.width, height: e.height };
    return (0, i.jsx)("canvas", { style: E, width: e.width, height: e.height, ref: t }, "canvas");
}
