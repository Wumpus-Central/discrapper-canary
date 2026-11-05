(n(134528), n(947204));
var i = n(477900),
    r = n(582128),
    l = n(546738),
    s = n(646514),
    a = n(602853);
let o = 1e3 / 30;
class u {
    getSource;
    getConverter;
    color = "#000";
    constructor(e, t) {
        ((this.getSource = e), (this.getConverter = t));
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
            l = i.length,
            s = Array(n),
            a = 0,
            o = 0;
        if (l >= 2) {
            let t = i.at(0),
                n = i.at(1);
            if (null != t && null != n) {
                let i = n.time - t.time;
                i > 0 && t.time - e < 1.5 * i && (o = null != r ? r(t.value) : t.value);
            }
        }
        let u = e;
        for (let e = 0; e < n; e++) {
            for (; a < l;) {
                let e = i.at(a);
                if (null == e) {
                    a++;
                    continue;
                }
                if (e.time >= u) break;
                ((o = null != r ? r(e.value) : e.value), a++);
            }
            ((s[e] = o), (u += t));
        }
        return s;
    }
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, r.useRef)(null),
                [n, d] = (0, r.useState)(null),
                c = (0, a.r)(s.A.colors.BACKGROUND_BASE_LOW).hsl(),
                h = (0, a.r)(s.A.colors.TEXT_DEFAULT).hsl(),
                f = (0, a.r)(s.A.colors.BACKGROUND_MOD_MUTED).hsl(),
                g = (0, a.r)(s.A.unsafe_rawColors.BRAND_500).hsl(),
                A = e.windowMs,
                p = (0, r.useRef)(e);
            ((0, r.useEffect)(() => {
                p.current = e;
            }),
                (0, r.useEffect)(() => {
                    let n = t.current;
                    if (null == n) return;
                    ((n.width = e.width), (n.height = e.height));
                    let i = new l.TimelineGraphView(n, window.devicePixelRatio ?? 1);
                    ((i.backgroundColor = c),
                        (i.textColor = h),
                        (i.gridColor = f),
                        (i.timeOptions = { timeStyle: "short" }),
                        (i.fontFamily = "gg sans"),
                        (i.fontSize = 11),
                        null != A && i.setScale(A / n.width));
                    let r = new u(
                        () => p.current.dataPoints,
                        () => p.current.converter,
                    );
                    (r.setColor(g), i.addDataSeries(r), i.updateEndDate(), d(i));
                }, [t, c, g, f, h, A, e.width, e.height]),
                (0, r.useEffect)(() => {
                    if (null == n) return;
                    let e = 0,
                        i = 0;
                    return (
                        (e = requestAnimationFrame(function r(l) {
                            if (null == n || ((e = requestAnimationFrame(r)), l - i < o)) return;
                            ((i = l), n.updateEndDate(), n.repaint());
                            let s = p.current,
                                a = s.markers,
                                u = s.windowMs;
                            if (null != a && a.length > 0 && null != u && null != t.current) {
                                let e = t.current,
                                    n = e.getContext("2d");
                                if (null == n) return;
                                let i = Date.now(),
                                    r = window.devicePixelRatio ?? 1,
                                    l = e.height - Math.ceil(11 * r) - 4;
                                for (let t of ((n.lineWidth = r), a)) {
                                    let r = i - t.time;
                                    if (r < 0 || r > u) continue;
                                    let s = e.width * (1 - r / u);
                                    (n.save(),
                                        (n.strokeStyle = t.color),
                                        n.beginPath(),
                                        n.moveTo(s, 0),
                                        n.lineTo(s, l),
                                        n.stroke(),
                                        n.restore());
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
                                        r = Math.round(e.width * (1 - i / u)),
                                        l = e.height - Math.ceil(11 * t) - 4;
                                    (n.save(),
                                        (n.strokeStyle = s.crosshairColor ?? h),
                                        (n.lineWidth = t),
                                        n.beginPath(),
                                        n.moveTo(r, 0),
                                        n.lineTo(r, l),
                                        n.stroke(),
                                        n.restore());
                                }
                            }
                        })),
                        () => cancelAnimationFrame(e)
                    );
                }, [n, h]));
            let m = { width: e.width, height: e.height },
                { onHoverTime: I, onHoverClick: E } = e;
            function S(e) {
                if (null == A) return null;
                let t = e.currentTarget.getBoundingClientRect();
                if (t.width <= 0) return null;
                let n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width));
                return Date.now() - (1 - n) * A;
            }
            let C =
                    null != I && null != A
                        ? (e) => {
                              let t = S(e);
                              null != t && I(t);
                          }
                        : void 0,
                _ =
                    null != E && null != A
                        ? (e) => {
                              let t = S(e);
                              null != t && E(t);
                          }
                        : void 0;
            return (0, i.jsx)(
                "canvas",
                {
                    style: m,
                    width: e.width,
                    height: e.height,
                    ref: t,
                    onPointerMove: C,
                    onPointerLeave: null != I ? () => I(null) : void 0,
                    onPointerDown: _,
                },
                "canvas",
            );
        },
    },
);
