"use strict";
n.d(t, { A: () => l });
var i = n(627968),
    r = n(64700),
    s = n(205459),
    a = n(661531),
    o = n(602853);
function l(e) {
    let t = (0, r.useRef)(null),
        [n, l] = (0, r.useState)(null),
        [u] = (0, r.useState)(() => new s.TimelineDataSeries()),
        c = (0, o.r)(a.A.colors.BACKGROUND_BASE_LOW).hsl(),
        d = (0, o.r)(a.A.colors.TEXT_DEFAULT).hsl(),
        _ = (0, o.r)(a.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        f = (0, o.r)(a.A.unsafe_rawColors.BRAND_500).hsl(),
        h = e.windowMs;
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
            null != h && n.setScale(h / e.width),
            u.setColor(f),
            n.addDataSeries(u),
            n.updateEndDate(),
            l(n);
    }, [t, c, f, _, d, u, h, e.width]);
    let p = e.converter,
        E = null != p ? e.dataPoints.map((e) => ({ ...e, value: p(e.value) })) : e.dataPoints;
    u.setPoints(E),
        n?.updateEndDate(),
        n?.repaint(),
        (0, r.useLayoutEffect)(() => {
            if (null == e.markers || 0 === e.markers.length || null == e.windowMs || null == t.current) return;
            let n = t.current,
                i = n.getContext("2d");
            if (null == i) return;
            let r = Date.now();
            for (let t of ((i.lineWidth = window.devicePixelRatio ?? 1), e.markers)) {
                let s = r - t.time;
                if (s < 0 || s > e.windowMs) continue;
                let a = n.width * (1 - s / e.windowMs);
                i.save(),
                    (i.strokeStyle = t.color),
                    i.beginPath(),
                    i.moveTo(a, 0),
                    i.lineTo(a, n.height),
                    i.stroke(),
                    i.restore();
            }
        });
    let m = { width: e.width, height: e.height };
    return (0, i.jsx)("canvas", { style: m, width: e.width, height: e.height, ref: t }, "canvas");
}
