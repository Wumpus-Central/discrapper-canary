n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    s = n(546738),
    r = n(661531),
    a = n(602853);
function o(e) {
    let t = (0, l.useRef)(null),
        [n, o] = (0, l.useState)(null),
        [u] = (0, l.useState)(() => new s.TimelineDataSeries()),
        d = (0, a.r)(r.A.colors.BACKGROUND_BASE_LOW).hsl(),
        c = (0, a.r)(r.A.colors.TEXT_DEFAULT).hsl(),
        h = (0, a.r)(r.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        g = (0, a.r)(r.A.unsafe_rawColors.BRAND_500).hsl(),
        f = e.windowMs;
    (0, l.useEffect)(() => {
        let n = t.current;
        if (null == n) return;
        (n.width = e.width), (n.height = e.height);
        let i = new s.TimelineGraphView(n, window.devicePixelRatio ?? 1);
        (i.backgroundColor = d),
            (i.textColor = c),
            (i.gridColor = h),
            (i.timeOptions = { timeStyle: "short" }),
            (i.fontFamily = "gg sans"),
            (i.fontSize = 11),
            null != f && i.setScale(f / n.width),
            u.setColor(g),
            i.addDataSeries(u),
            i.updateEndDate(),
            o(i);
    }, [t, d, g, h, c, u, f, e.width, e.height]);
    let A = e.converter,
        E = null != A ? e.dataPoints.map((e) => ({ ...e, value: A(e.value) })) : e.dataPoints;
    u.setPoints(E),
        n?.updateEndDate(),
        n?.repaint(),
        (0, l.useLayoutEffect)(() => {
            if (null == e.markers || 0 === e.markers.length || null == e.windowMs || null == t.current) return;
            let n = t.current,
                i = n.getContext("2d");
            if (null == i) return;
            let l = Date.now(),
                s = window.devicePixelRatio ?? 1,
                r = n.height - Math.ceil(11 * s) - 4;
            for (let t of ((i.lineWidth = s), e.markers)) {
                let s = l - t.time;
                if (s < 0 || s > e.windowMs) continue;
                let a = n.width * (1 - s / e.windowMs);
                i.save(),
                    (i.strokeStyle = t.color),
                    i.beginPath(),
                    i.moveTo(a, 0),
                    i.lineTo(a, r),
                    i.stroke(),
                    i.restore();
            }
        });
    let I = { width: e.width, height: e.height };
    return (0, i.jsx)("canvas", { style: I, width: e.width, height: e.height, ref: t }, "canvas");
}
