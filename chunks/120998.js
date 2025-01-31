n.d(t, { Z: () => h }), n(47120);
var i,
    l = n(200651),
    r = n(192379),
    a = n(392711),
    s = n.n(a),
    o = n(302221),
    c = n(911785);
function d(e, t, n) {
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
class u extends (i = r.PureComponent) {
    onDataUpdate(e, t) {
        let { maxValue: n, data: i, animate: l } = this.props,
            r = null == e || (e.data !== t.data && !s().isEqual(e.data, t.data));
        if ((r && ((this.dataChangedAt = performance.now()), (this.maxValue = null != n ? n : Math.max(...i))), r || null == e || (!e.animate && l) || e.color !== this.props.color)) {
            let e = o.oo(this.props.color);
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
        return (0, l.jsx)('div', {
            className: e,
            children: (0, l.jsx)('canvas', {
                ref: this.canvas,
                className: c.canvas,
                width: t,
                height: n
            })
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'dataChangedAt', void 0),
            d(this, 'fillColor', void 0),
            d(this, 'maxValue', void 0),
            d(this, 'canvas', r.createRef()),
            d(this, 'animationFrameRequestId', void 0),
            d(this, 'updateAnimation', (e) => {
                let t, n;
                let i = this.canvas.current;
                if (null == i) return;
                let { data: l, updateInterval: r, color: a, numUpdatesToShow: s, lineWidth: c, animate: d, gradientStopColor: u } = this.props;
                if (l.length < 2) return;
                let h = Math.max(Math.min((e - this.dataChangedAt) / r, 1), 0),
                    m = i.getContext('2d'),
                    p = this.maxValue;
                (m.strokeStyle = a), (m.lineWidth = c);
                let g = i.height - m.lineWidth,
                    _ = m.createLinearGradient(0, 0, 0, g);
                if (null != u) _.addColorStop(0, u);
                else {
                    let { r: e, g: t, b: n } = o.oo(a);
                    _.addColorStop(0, 'rgba('.concat(e, ', ').concat(t, ', ').concat(n, ', 0)'));
                }
                _.addColorStop(1, this.fillColor), (m.fillStyle = _);
                let f = l.length >= s ? s : l.length;
                m.setTransform(1, 0, 0, -1, 0, i.height), m.clearRect(0, 0, i.width, i.height), m.translate(0, 0.5 * m.lineWidth);
                let E = Math.floor(i.width / (f - 3)),
                    I = 0.5 * E;
                m.translate(E - E * h, 0), m.beginPath();
                let C = -E;
                l.forEach((e, i) => {
                    (t = {
                        x: C,
                        y: (g * e) / p
                    }),
                        0 === i ? m.moveTo(t.x, t.y) : m.bezierCurveTo(n.x + I, n.y, t.x - I, t.y, t.x, t.y),
                        (n = t),
                        (C += E);
                }),
                    m.stroke(),
                    m.lineTo(C - E, 0),
                    m.lineTo(0, 0),
                    m.fill(),
                    d && h < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation));
            });
    }
}
d(u, 'defaultProps', { animate: !0 });
let h = u;
