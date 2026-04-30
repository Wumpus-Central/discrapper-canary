"use strict";
n.d(t, { A: () => l });
var i = n(627968),
    r = n(64700),
    s = n(502671),
    a = n(661531),
    o = n(602853);
function l(e) {
    let t = (0, r.useRef)(null),
        [n, l] = (0, r.useState)(null),
        [u] = (0, r.useState)(() => new s.TimelineDataSeries()),
        c = (0, o.r)(a.A.colors.BACKGROUND_BASE_LOW).hsl(),
        d = (0, o.r)(a.A.colors.TEXT_DEFAULT).hsl(),
        _ = (0, o.r)(a.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        f = (0, o.r)(a.A.unsafe_rawColors.BRAND_500).hsl();
    (0, r.useEffect)(() => {
        let e = t.current;
        if (null == e) return;
        let n = new s.TimelineGraphView(e, window.devicePixelRatio ?? 1);
        (n.backgroundColor = c),
            (n.textColor = d),
            (n.gridColor = _),
            (n.timeOptions = { timeStyle: "short" }),
            (n.fontFamily = "gg sans"),
            (n.fontSize = 11),
            u.setColor(f),
            n.addDataSeries(u),
            n.updateEndDate(),
            l(n);
    }, [t, c, f, _, d, u]);
    let h = e.converter,
        p = null != h ? e.dataPoints.map((e) => ({ ...e, value: h(e.value) })) : e.dataPoints;
    u.setPoints(p), n?.updateEndDate();
    let E = { width: e.width, height: e.height };
    return (0, i.jsx)("canvas", { style: E, width: e.width, height: e.height, ref: t }, "canvas");
}
