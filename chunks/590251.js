"use strict";
n.d(t, { a: () => d });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(183834);
let o = Object.freeze({ XSMALL: 0.8, SMALL: 1, MEDIUM: 2, LARGE: 4 });
class d extends r.Component {
    static StrokeSizes = o;
    static defaultProps = { strokeSize: o.MEDIUM };
    renderCircle() {
        let { strokeSize: e, percent: t, colorOverride: n, background: r, ringColorOverrideClassName: a } = this.props,
            o = Math.min(Math.max(t, 0), 100),
            d = (20 - e) / 2,
            c = d * Math.PI * 2;
        return (0, i.jsxs)("svg", {
            viewBox: "0 0 20 20",
            className: l.n1,
            children: [
                (0, i.jsx)("circle", { className: void 0 !== a ? a : l.cj, cx: 10, cy: 10, r: 10 }),
                (0, i.jsx)("circle", { className: s()(l.rh, r), cx: 10, cy: 10, r: (20 - 2 * e) / 2 }),
                (0, i.jsx)("circle", {
                    className: l.iv,
                    cx: 10,
                    cy: 10,
                    r: d,
                    strokeWidth: `${e}px`,
                    strokeLinecap: "round",
                    transform: "rotate(-90 10 10)",
                    stroke: null != n ? n : "currentColor",
                    style: { strokeDasharray: c, strokeDashoffset: (1 - o / 100) * c },
                }),
            ],
        });
    }
    render() {
        let { className: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: s()(l.G3, e),
            children: [
                this.renderCircle(),
                null != t
                    ? (0, i.jsx)("div", { className: s()(l.Bd, this.props.overlayClassName), children: t })
                    : null,
            ],
        });
    }
}
