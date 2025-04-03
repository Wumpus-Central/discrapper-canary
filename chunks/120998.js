n.d(t, { Z: () => p }), n(47120);
var r,
    i = n(200651),
    l = n(192379),
    a = n(392711),
    o = n.n(a),
    s = n(302221),
    c = n(33963);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class d extends (r = l.PureComponent) {
    onDataUpdate(e, t) {
        let { maxValue: n, data: r, animate: i } = this.props,
            l = null == e || (e.data !== t.data && !o().isEqual(e.data, t.data));
        if ((l && ((this.dataChangedAt = performance.now()), (this.maxValue = null != n ? n : Math.max(...r))), l || null == e || (!e.animate && i) || e.color !== this.props.color)) {
            let e = s.oo(this.props.color);
            (this.fillColor = 'rgba('.concat(e.r, ', ').concat(e.g, ', ').concat(e.b, ', 0.5)')), window.cancelAnimationFrame(this.animationFrameRequestId), (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
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
        return (0, i.jsx)('div', {
            className: e,
            children: (0, i.jsx)('canvas', {
                ref: this.canvas,
                className: c.canvas,
                width: t,
                height: n
            })
        });
    }
    constructor(...e) {
        super(...e),
            u(this, 'dataChangedAt', void 0),
            u(this, 'fillColor', void 0),
            u(this, 'maxValue', void 0),
            u(this, 'canvas', l.createRef()),
            u(this, 'animationFrameRequestId', void 0),
            u(this, 'updateAnimation', (e) => {
                let t,
                    n,
                    r = this.canvas.current;
                if (null == r) return;
                let { data: i, updateInterval: l, color: a, numUpdatesToShow: o, lineWidth: c, animate: u, gradientStopColor: d } = this.props;
                if (i.length < 2) return;
                let p = Math.max(Math.min((e - this.dataChangedAt) / l, 1), 0),
                    h = r.getContext('2d'),
                    f = this.maxValue;
                (h.strokeStyle = a), (h.lineWidth = c);
                let g = r.height - h.lineWidth,
                    m = h.createLinearGradient(0, 0, 0, g);
                if (null != d) m.addColorStop(0, d);
                else {
                    let { r: e, g: t, b: n } = s.oo(a);
                    m.addColorStop(0, 'rgba('.concat(e, ', ').concat(t, ', ').concat(n, ', 0)'));
                }
                m.addColorStop(1, this.fillColor), (h.fillStyle = m);
                let b = i.length >= o ? o : i.length;
                h.setTransform(1, 0, 0, -1, 0, r.height), h.clearRect(0, 0, r.width, r.height), h.translate(0, 0.5 * h.lineWidth);
                let _ = Math.floor(r.width / (b - 3)),
                    E = 0.5 * _;
                h.translate(_ - _ * p, 0), h.beginPath();
                let O = -_;
                i.forEach((e, r) => {
                    (t = {
                        x: O,
                        y: (g * e) / f
                    }),
                        0 === r ? h.moveTo(t.x, t.y) : h.bezierCurveTo(n.x + E, n.y, t.x - E, t.y, t.x, t.y),
                        (n = t),
                        (O += _);
                }),
                    h.stroke(),
                    h.lineTo(O - _, 0),
                    h.lineTo(0, 0),
                    h.fill(),
                    u && p < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
            });
    }
}
u(d, 'defaultProps', { animate: !0 });
let p = d;
