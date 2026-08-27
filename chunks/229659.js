n.d(t, { A: () => d }), n(134528), n(947204);
var i = n(477900),
    l = n(582128),
    r = n(546738),
    s = n(661531),
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
            r = i.length,
            s = Array(n),
            a = 0,
            o = 0;
        if (r >= 2) {
            let t = i.at(0),
                n = i.at(1);
            if (null != t && null != n) {
                let i = n.time - t.time;
                i > 0 && t.time - e < 1.5 * i && (o = null != l ? l(t.value) : t.value);
            }
        }
        let u = e;
        for (let e = 0; e < n; e++) {
            for (; a < r; ) {
                let e = i.at(a);
                if (null == e) {
                    a++;
                    continue;
                }
                if (e.time >= u) break;
                (o = null != l ? l(e.value) : e.value), a++;
            }
            (s[e] = o), (u += t);
        }
        return s;
    }
}
function d(e) {
    let t = (0, l.useRef)(null),
        [n, d] = (0, l.useState)(null),
        c = (0, a.r)(s.A.colors.BACKGROUND_BASE_LOW).hsl(),
        h = (0, a.r)(s.A.colors.TEXT_DEFAULT).hsl(),
        g = (0, a.r)(s.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        f = (0, a.r)(s.A.unsafe_rawColors.BRAND_500).hsl(),
        A = e.windowMs,
        E = (0, l.useRef)(e);
    (0, l.useEffect)(() => {
        E.current = e;
    }),
        (0, l.useEffect)(() => {
            let n = t.current;
            if (null == n) return;
            (n.width = e.width), (n.height = e.height);
            let i = new r.TimelineGraphView(n, window.devicePixelRatio ?? 1);
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
                i = 0;
            return (
                (e = requestAnimationFrame(function l(r) {
                    if (null == n || ((e = requestAnimationFrame(l)), r - i < o)) return;
                    (i = r), n.updateEndDate(), n.repaint();
                    let s = E.current,
                        a = s.markers,
                        u = s.windowMs;
                    if (null != a && a.length > 0 && null != u && null != t.current) {
                        let e = t.current,
                            n = e.getContext("2d");
                        if (null == n) return;
                        let i = Date.now(),
                            l = window.devicePixelRatio ?? 1,
                            r = e.height - Math.ceil(11 * l) - 4;
                        for (let t of ((n.lineWidth = l), a)) {
                            let l = i - t.time;
                            if (l < 0 || l > u) continue;
                            let s = e.width * (1 - l / u);
                            n.save(),
                                (n.strokeStyle = t.color),
                                n.beginPath(),
                                n.moveTo(s, 0),
                                n.lineTo(s, r),
                                n.stroke(),
                                n.restore();
                        }
                    }
                    let d = s.hoverSource?.time;
                    if (null != d && null != u && null != t.current) {
                        let e = t.current,
                            n = e.getContext("2d");
                        if (null == n) return;
                        let i = Date.now() - d;
                        if (i >= 0 && i <= u) {
                            let t = window.devicePixelRatio ?? 1,
                                l = Math.round(e.width * (1 - i / u)),
                                r = e.height - Math.ceil(11 * t) - 4;
                            n.save(),
                                (n.strokeStyle = s.crosshairColor ?? h),
                                (n.lineWidth = t),
                                n.beginPath(),
                                n.moveTo(l, 0),
                                n.lineTo(l, r),
                                n.stroke(),
                                n.restore();
                        }
                    }
                })),
                () => cancelAnimationFrame(e)
            );
        }, [n, h]);
    let p = { width: e.width, height: e.height },
        { onHoverTime: m, onHoverClick: I } = e;
    function S(e) {
        if (null == A) return null;
        let t = e.currentTarget.getBoundingClientRect();
        if (t.width <= 0) return null;
        let n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width));
        return Date.now() - (1 - n) * A;
    }
    let C =
            null != m && null != A
                ? (e) => {
                      let t = S(e);
                      null != t && m(t);
                  }
                : void 0,
        _ =
            null != I && null != A
                ? (e) => {
                      let t = S(e);
                      null != t && I(t);
                  }
                : void 0;
    return (0, i.jsx)(
        "canvas",
        {
            style: p,
            width: e.width,
            height: e.height,
            ref: t,
            onPointerMove: C,
            onPointerLeave: null != m ? () => m(null) : void 0,
            onPointerDown: _,
        },
        "canvas",
    );
}
