"use strict";
n.d(t, { A: () => l });
var i = n(627968),
    r = n(64700),
    s = n(546738),
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
        let n = t.current;
        if (null == n) return;
        (n.width = e.width), (n.height = e.height);
        let i = new s.TimelineGraphView(n, window.devicePixelRatio ?? 1);
        (i.backgroundColor = c),
            (i.textColor = d),
            (i.gridColor = _),
            (i.timeOptions = { timeStyle: "short" }),
            (i.fontFamily = "gg sans"),
            (i.fontSize = 11),
            null != h && i.setScale(h / n.width),
            u.setColor(f),
            i.addDataSeries(u),
            i.updateEndDate(),
            l(i);
    }, [t, c, f, _, d, u, h, e.width, e.height]);
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
            let r = Date.now(),
                s = window.devicePixelRatio ?? 1,
                a = n.height - Math.ceil(11 * s) - 4;
            for (let t of ((i.lineWidth = s), e.markers)) {
                let s = r - t.time;
                if (s < 0 || s > e.windowMs) continue;
                let o = n.width * (1 - s / e.windowMs);
                i.save(),
                    (i.strokeStyle = t.color),
                    i.beginPath(),
                    i.moveTo(o, 0),
                    i.lineTo(o, a),
                    i.stroke(),
                    i.restore();
            }
        });
    let m = { width: e.width, height: e.height };
    return (0, i.jsx)("canvas", { style: m, width: e.width, height: e.height, ref: t }, "canvas");
}
