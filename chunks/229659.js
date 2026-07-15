"use strict";
n.d(t, { A: () => c }), n(134528), n(947204);
var i = n(627968),
    r = n(64700),
    a = n(546738),
    s = n(661531),
    l = n(602853);
let o = 1e3 / 30;
class d {
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
            r = this.getConverter(),
            a = i.length,
            s = Array(n),
            l = 0,
            o = 0;
        if (a >= 2) {
            let t = i.at(0),
                n = i.at(1);
            if (null != t && null != n) {
                let i = n.time - t.time;
                i > 0 && t.time - e < 1.5 * i && (o = null != r ? r(t.value) : t.value);
            }
        }
        let d = e;
        for (let e = 0; e < n; e++) {
            for (; l < a; ) {
                let e = i.at(l);
                if (null == e) {
                    l++;
                    continue;
                }
                if (e.time >= d) break;
                (o = null != r ? r(e.value) : e.value), l++;
            }
            (s[e] = o), (d += t);
        }
        return s;
    }
}
function c(e) {
    let t = (0, r.useRef)(null),
        [n, c] = (0, r.useState)(null),
        u = (0, l.r)(s.A.colors.BACKGROUND_BASE_LOW).hsl(),
        _ = (0, l.r)(s.A.colors.TEXT_DEFAULT).hsl(),
        E = (0, l.r)(s.A.colors.BACKGROUND_MOD_MUTED).hsl(),
        A = (0, l.r)(s.A.unsafe_rawColors.BRAND_500).hsl(),
        h = e.windowMs,
        I = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        I.current = e;
    }),
        (0, r.useEffect)(() => {
            let n = t.current;
            if (null == n) return;
            (n.width = e.width), (n.height = e.height);
            let i = new a.TimelineGraphView(n, window.devicePixelRatio ?? 1);
            (i.backgroundColor = u),
                (i.textColor = _),
                (i.gridColor = E),
                (i.timeOptions = { timeStyle: "short" }),
                (i.fontFamily = "gg sans"),
                (i.fontSize = 11),
                null != h && i.setScale(h / n.width);
            let r = new d(
                () => I.current.dataPoints,
                () => I.current.converter,
            );
            r.setColor(A), i.addDataSeries(r), i.updateEndDate(), c(i);
        }, [t, u, A, E, _, h, e.width, e.height]),
        (0, r.useEffect)(() => {
            if (null == n) return;
            let e = 0,
                i = 0,
                r = (a) => {
                    if (((e = requestAnimationFrame(r)), a - i < o)) return;
                    (i = a), n.updateEndDate(), n.repaint();
                    let s = I.current,
                        l = s.markers,
                        d = s.windowMs;
                    if (null != l && l.length > 0 && null != d && null != t.current) {
                        let e = t.current,
                            n = e.getContext("2d");
                        if (null == n) return;
                        let i = Date.now(),
                            r = window.devicePixelRatio ?? 1,
                            a = e.height - Math.ceil(11 * r) - 4;
                        for (let t of ((n.lineWidth = r), l)) {
                            let r = i - t.time;
                            if (r < 0 || r > d) continue;
                            let s = e.width * (1 - r / d);
                            n.save(),
                                (n.strokeStyle = t.color),
                                n.beginPath(),
                                n.moveTo(s, 0),
                                n.lineTo(s, a),
                                n.stroke(),
                                n.restore();
                        }
                    }
                    let c = s.hoverSource?.time;
                    if (null != c && null != d && null != t.current) {
                        let e = t.current,
                            n = e.getContext("2d");
                        if (null == n) return;
                        let i = Date.now() - c;
                        if (i >= 0 && i <= d) {
                            let t = window.devicePixelRatio ?? 1,
                                r = Math.round(e.width * (1 - i / d)),
                                a = e.height - Math.ceil(11 * t) - 4;
                            n.save(),
                                (n.strokeStyle = s.crosshairColor ?? _),
                                (n.lineWidth = t),
                                n.beginPath(),
                                n.moveTo(r, 0),
                                n.lineTo(r, a),
                                n.stroke(),
                                n.restore();
                        }
                    }
                };
            return (e = requestAnimationFrame(r)), () => cancelAnimationFrame(e);
        }, [n, _]);
    let f = { width: e.width, height: e.height },
        { onHoverTime: p, onHoverClick: T } = e,
        m = (e) => {
            if (null == h) return null;
            let t = e.currentTarget.getBoundingClientRect();
            if (t.width <= 0) return null;
            let n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width));
            return Date.now() - (1 - n) * h;
        },
        g =
            null != p && null != h
                ? (e) => {
                      let t = m(e);
                      null != t && p(t);
                  }
                : void 0,
        S =
            null != T && null != h
                ? (e) => {
                      let t = m(e);
                      null != t && T(t);
                  }
                : void 0;
    return (0, i.jsx)(
        "canvas",
        {
            style: f,
            width: e.width,
            height: e.height,
            ref: t,
            onPointerMove: g,
            onPointerLeave: null != p ? () => p(null) : void 0,
            onPointerDown: S,
        },
        "canvas",
    );
}
