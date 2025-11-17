n.d(t, { Z: () => p }), n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(392711),
    s = n.n(a),
    o = n(302221),
    c = n(781176);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class d extends (r = l.PureComponent) {
    onDataUpdate(e, t) {
        let { maxValue: n, data: r, animate: i } = this.props,
            l = null == e || (e.data !== t.data && !s().isEqual(e.data, t.data));
        if (
            (l && ((this.dataChangedAt = performance.now()), (this.maxValue = null != n ? n : Math.max(...r))),
            l || null == e || (!e.animate && i) || e.color !== this.props.color)
        ) {
            let e = o.oo(this.props.color);
            (this.fillColor = "rgba(".concat(e.r, ", ").concat(e.g, ", ").concat(e.b, ", 0.5)")),
                window.cancelAnimationFrame(this.animationFrameRequestId),
                (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
        }
    }
    componentDidMount() {
        (this.animationFrameRequestId = 0), this.onDataUpdate(null, this.props);
    }
    componentDidUpdate(e) {
        this.onDataUpdate(e, this.props);
    }
    componentWillUnmount() {
        window.cancelAnimationFrame(this.animationFrameRequestId), (this.animationFrameRequestId = 0);
    }
    render() {
        let { className: e, pixelWidth: t, pixelHeight: n } = this.props;
        return (0, i.jsx)("div", {
            className: e,
            children: (0, i.jsx)("canvas", {
                ref: this.canvas,
                className: c.canvas,
                width: t,
                height: n,
            }),
        });
    }
    constructor(...e) {
        super(...e),
            u(this, "dataChangedAt", void 0),
            u(this, "fillColor", void 0),
            u(this, "maxValue", void 0),
            u(this, "canvas", l.createRef()),
            u(this, "animationFrameRequestId", void 0),
            u(this, "updateAnimation", (e) => {
                let t,
                    n,
                    r = this.canvas.current;
                if (null == r) return;
                let {
                    data: i,
                    updateInterval: l,
                    color: a,
                    numUpdatesToShow: s,
                    lineWidth: c,
                    animate: u,
                    gradientStopColor: d,
                } = this.props;
                if (i.length < 2) return;
                let p = Math.max(Math.min((e - this.dataChangedAt) / l, 1), 0),
                    f = r.getContext("2d"),
                    h = this.maxValue;
                (f.strokeStyle = a), (f.lineWidth = c);
                let g = r.height - f.lineWidth,
                    m = f.createLinearGradient(0, 0, 0, g);
                if (null != d) m.addColorStop(0, d);
                else {
                    let { r: e, g: t, b: n } = o.oo(a);
                    m.addColorStop(0, "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", 0)"));
                }
                m.addColorStop(1, this.fillColor), (f.fillStyle = m);
                let _ = i.length >= s ? s : i.length;
                f.setTransform(1, 0, 0, -1, 0, r.height),
                    f.clearRect(0, 0, r.width, r.height),
                    f.translate(0, 0.5 * f.lineWidth);
                let b = Math.floor(r.width / (_ - 3)),
                    E = 0.5 * b;
                f.translate(b - b * p, 0), f.beginPath();
                let O = -b;
                i.forEach((e, r) => {
                    (t = {
                        x: O,
                        y: (g * e) / h,
                    }),
                        0 === r ? f.moveTo(t.x, t.y) : f.bezierCurveTo(n.x + E, n.y, t.x - E, t.y, t.x, t.y),
                        (n = t),
                        (O += b);
                }),
                    f.stroke(),
                    f.lineTo(O - b, 0),
                    f.lineTo(0, 0),
                    f.fill(),
                    u && p < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
            });
    }
}
u(d, "defaultProps", { animate: !0 });
let p = d;
