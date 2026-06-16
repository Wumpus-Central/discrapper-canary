a.d(t, { a: () => o });
var s = a(627968),
    i = a(64700),
    n = a(503698),
    r = a.n(n),
    l = a(183834);
let c = Object.freeze({ XSMALL: 0.8, SMALL: 1, MEDIUM: 2, LARGE: 4 });
class o extends i.Component {
    static StrokeSizes = c;
    static defaultProps = { strokeSize: c.MEDIUM };
    renderCircle() {
        let { strokeSize: e, percent: t, colorOverride: a, background: i, ringColorOverrideClassName: n } = this.props,
            c = Math.min(Math.max(t, 0), 100),
            o = (20 - e) / 2,
            d = o * Math.PI * 2;
        return (0, s.jsxs)("svg", {
            viewBox: "0 0 20 20",
            className: l.n1,
            children: [
                (0, s.jsx)("circle", { className: void 0 !== n ? n : l.cj, cx: 10, cy: 10, r: 10 }),
                (0, s.jsx)("circle", { className: r()(l.rh, i), cx: 10, cy: 10, r: (20 - 2 * e) / 2 }),
                (0, s.jsx)("circle", {
                    className: l.iv,
                    cx: 10,
                    cy: 10,
                    r: o,
                    strokeWidth: `${e}px`,
                    strokeLinecap: "round",
                    transform: "rotate(-90 10 10)",
                    stroke: null != a ? a : "currentColor",
                    style: { strokeDasharray: d, strokeDashoffset: (1 - c / 100) * d },
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
