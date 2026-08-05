r.d(e, { a: () => n });
var t = r(477900),
    a = r(582128),
    c = r(503698),
    i = r.n(c),
    l = r(90050);
let o = Object.freeze({ XSMALL: 0.8, SMALL: 1, MEDIUM: 2, LARGE: 4 });
class n extends a.Component {
    static StrokeSizes = o;
    static defaultProps = { strokeSize: o.MEDIUM };
    renderCircle() {
        let { strokeSize: s, percent: e, colorOverride: r, background: a, ringColorOverrideClassName: c } = this.props,
            o = Math.min(Math.max(e, 0), 100),
            n = (20 - s) / 2,
            d = n * Math.PI * 2;
        return (0, t.jsxs)("svg", {
            viewBox: "0 0 20 20",
            className: l.n1,
            children: [
                (0, t.jsx)("circle", { className: void 0 !== c ? c : l.cj, cx: 10, cy: 10, r: 10 }),
                (0, t.jsx)("circle", { className: i()(l.rh, a), cx: 10, cy: 10, r: (20 - 2 * s) / 2 }),
                (0, t.jsx)("circle", {
                    className: l.iv,
                    cx: 10,
                    cy: 10,
                    r: n,
                    strokeWidth: `${s}px`,
                    strokeLinecap: "round",
                    transform: "rotate(-90 10 10)",
                    stroke: null != r ? r : "currentColor",
                    style: { strokeDasharray: d, strokeDashoffset: (1 - o / 100) * d },
                }),
            ],
        });
    }
    render() {
        let { className: s, children: e } = this.props;
        return (0, t.jsxs)("div", {
            className: i()(l.G3, s),
            children: [
                this.renderCircle(),
                null != e
                    ? (0, t.jsx)("div", { className: i()(l.Bd, this.props.overlayClassName), children: e })
                    : null,
            ],
        });
    }
}
