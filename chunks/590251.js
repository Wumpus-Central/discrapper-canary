i.d(t, { a: () => d });
var s = i(627968),
    a = i(64700),
    n = i(503698),
    r = i.n(n),
    l = i(183834);
let c = Object.freeze({ XSMALL: 0.8, SMALL: 1, MEDIUM: 2, LARGE: 4 });
class d extends a.Component {
    static StrokeSizes = c;
    static defaultProps = { strokeSize: c.MEDIUM };
    renderCircle() {
        let { strokeSize: e, percent: t, colorOverride: i, background: a, ringColorOverrideClassName: n } = this.props,
            c = Math.min(Math.max(t, 0), 100),
            d = (20 - e) / 2,
            o = d * Math.PI * 2;
        return (0, s.jsxs)("svg", {
            viewBox: "0 0 20 20",
            className: l.n1,
            children: [
                (0, s.jsx)("circle", { className: void 0 !== n ? n : l.cj, cx: 10, cy: 10, r: 10 }),
                (0, s.jsx)("circle", { className: r()(l.rh, a), cx: 10, cy: 10, r: (20 - 2 * e) / 2 }),
                (0, s.jsx)("circle", {
                    className: l.iv,
                    cx: 10,
                    cy: 10,
                    r: d,
                    strokeWidth: `${e}px`,
                    strokeLinecap: "round",
                    transform: "rotate(-90 10 10)",
                    stroke: null != i ? i : "currentColor",
                    style: { strokeDasharray: o, strokeDashoffset: (1 - c / 100) * o },
                }),
            ],
        });
    }
    render() {
        let { className: e, children: t } = this.props;
        return (0, s.jsxs)("div", {
            className: r()(l.G3, e),
            children: [
                this.renderCircle(),
                null != t
                    ? (0, s.jsx)("div", { className: r()(l.Bd, this.props.overlayClassName), children: t })
                    : null,
            ],
        });
    }
}
