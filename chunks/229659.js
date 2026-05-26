n.d(t, { A: () => d }), n(134528), n(947204);
var i = n(627968),
    l = n(64700),
    s = n(546738),
    r = n(661531),
    a = n(602853);
let o = 1e3 / 30;
class u {
    getSource;
    getConverter;
    color = "#000";
    constructor(e, t) {
        (this.getSource = e), (this.getConverter = t);
    }
    setColor(e) {
        this.color = e;
    }
    getColor() {
        return this.color;
    }
    isVisible() {
        return !0;
    }
    getValues(e, t, n) {
        let i = this.getSource(),
            l = this.getConverter(),
            s = i.length,
            r = Array(n),
            a = 0,
            o = 0;
        if (s >= 2) {
            let t = i.at(0),
                n = i.at(1);
            if (null != t && null != n) {
                let i = n.time - t.time;
                i > 0 && t.time - e < 1.5 * i && (o = null != l ? l(t.value) : t.value);
            }
        }
        let u = e;
        for (let e = 0; e < n; e++) {
            for (; a < s; ) {
                let e = i.at(a);
                if (null == e) {
                    a++;
                    continue;
                }
                if (e.time >= u) break;
                (o = null != l ? l(e.value) : e.value), a++;
            }
            (r[e] = o), (u += t);
        }
        return r;
    }
}
function d(e) {
    let t = (0, l.useRef)(null),
        [n, d] = (0, l.useState)(null),
        c = (0, a.r)(r.A.colors.BACKGROUND_BASE_LOW).hsl(),
        h = (0, a.r)(r.A.colors.TEXT_DEFAULT).hsl(),
        g = (0, a.r)(r.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        f = (0, a.r)(r.A.unsafe_rawColors.BRAND_500).hsl(),
        A = e.windowMs,
        E = (0, l.useRef)(e);
    (0, l.useEffect)(() => {
        E.current = e;
    }),
        (0, l.useEffect)(() => {
            let n = t.current;
            if (null == n) return;
            (n.width = e.width), (n.height = e.height);
            let i = new s.TimelineGraphView(n, window.devicePixelRatio ?? 1);
            (i.backgroundColor = c),
                (i.textColor = h),
                (i.gridColor = g),
                (i.timeOptions = { timeStyle: "short" }),
                (i.fontFamily = "gg sans"),
                (i.fontSize = 11),
                null != A && i.setScale(A / n.width);
            let l = new u(
                () => E.current.dataPoints,
                () => E.current.converter,
            );
            l.setColor(f), i.addDataSeries(l), i.updateEndDate(), d(i);
        }, [t, c, f, g, h, A, e.width, e.height]),
        (0, l.useEffect)(() => {
            if (null == n) return;
            let e = 0,
                i = 0,
                l = (s) => {
                    if (((e = requestAnimationFrame(l)), s - i < o)) return;
                    (i = s), n.updateEndDate(), n.repaint();
                    let r = E.current,
                        a = r.markers,
                        u = r.windowMs;
                    if (null != a && a.length > 0 && null != u && null != t.current) {
                        let e = t.current,
                            n = e.getContext("2d");
                        if (null == n) return;
                        let i = Date.now(),
                            l = window.devicePixelRatio ?? 1,
                            s = e.height - Math.ceil(11 * l) - 4;
                        for (let t of ((n.lineWidth = l), a)) {
                            let l = i - t.time;
                            if (l < 0 || l > u) continue;
                            let r = e.width * (1 - l / u);
                            n.save(),
                                (n.strokeStyle = t.color),
                                n.beginPath(),
                                n.moveTo(r, 0),
                                n.lineTo(r, s),
                                n.stroke(),
                                n.restore();
                        }
                    }
                };
            return (e = requestAnimationFrame(l)), () => cancelAnimationFrame(e);
        }, [n]);
    let I = { width: e.width, height: e.height };
    return (0, i.jsx)("canvas", { style: I, width: e.width, height: e.height, ref: t }, "canvas");
}
