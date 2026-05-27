n.d(t, { a: () => o });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(183834);
let c = Object.freeze({ XSMALL: 0.8, SMALL: 1, MEDIUM: 2, LARGE: 4 });
class o extends l.Component {
    static StrokeSizes = c;
    static defaultProps = { strokeSize: c.MEDIUM };
    renderCircle() {
        let { strokeSize: e, percent: t, colorOverride: n, background: l, ringColorOverrideClassName: r } = this.props,
            c = Math.min(Math.max(t, 0), 100),
            o = (20 - e) / 2,
            d = o * Math.PI * 2;
        return (0, i.jsxs)("svg", {
            viewBox: "0 0 20 20",
            className: a.n1,
            children: [
                (0, i.jsx)("circle", { className: void 0 !== r ? r : a.cj, cx: 10, cy: 10, r: 10 }),
                (0, i.jsx)("circle", { className: s()(a.rh, l), cx: 10, cy: 10, r: (20 - 2 * e) / 2 }),
                (0, i.jsx)("circle", {
                    className: a.iv,
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
            className: s()(a.G3, e),
            children: [
                this.renderCircle(),
                null != t
                    ? (0, i.jsx)("div", { className: s()(a.Bd, this.props.overlayClassName), children: t })
                    : null,
            ],
        });
    }
}
