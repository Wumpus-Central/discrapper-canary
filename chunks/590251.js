n.d(t, { a: () => o });
var i = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    l = n(183834);
let c = Object.freeze({ XSMALL: 0.8, SMALL: 1, MEDIUM: 2, LARGE: 4 });
class o extends a.Component {
    static StrokeSizes = c;
    static defaultProps = { strokeSize: c.MEDIUM };
    renderCircle() {
        let { strokeSize: e, percent: t, colorOverride: n, background: a, ringColorOverrideClassName: s } = this.props,
            c = Math.min(Math.max(t, 0), 100),
            o = (20 - e) / 2,
            d = o * Math.PI * 2;
        return (0, i.jsxs)("svg", {
            viewBox: "0 0 20 20",
            className: l.n1,
            children: [
                (0, i.jsx)("circle", { className: void 0 !== s ? s : l.cj, cx: 10, cy: 10, r: 10 }),
                (0, i.jsx)("circle", { className: r()(l.rh, a), cx: 10, cy: 10, r: (20 - 2 * e) / 2 }),
                (0, i.jsx)("circle", {
                    className: l.iv,
                    cx: 10,
                    cy: 10,
                    r: o,
                    strokeWidth: `${e}px`,
                    strokeLinecap: "round",
                    transform: "rotate(-90 10 10)",
                    stroke: null != n ? n : "currentColor",
                    style: { strokeDasharray: d, strokeDashoffset: (1 - c / 100) * d },
                }),
            ],
        });
    }
    render() {
        let { className: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: r()(l.G3, e),
            children: [
                this.renderCircle(),
                null != t
                    ? (0, i.jsx)("div", { className: r()(l.Bd, this.props.overlayClassName), children: t })
                    : null,
            ],
        });
    }
}
