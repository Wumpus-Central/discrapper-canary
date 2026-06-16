"use strict";
n.d(t, { a: () => u });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(183834);
let l = Object.freeze({ XSMALL: 0.8, SMALL: 1, MEDIUM: 2, LARGE: 4 });
class u extends r.Component {
    static StrokeSizes = l;
    static defaultProps = { strokeSize: l.MEDIUM };
    renderCircle() {
        let { strokeSize: e, percent: t, colorOverride: n, background: r, ringColorOverrideClassName: s } = this.props,
            l = Math.min(Math.max(t, 0), 100),
            u = (20 - e) / 2,
            c = u * Math.PI * 2;
        return (0, i.jsxs)("svg", {
            viewBox: "0 0 20 20",
            className: o.n1,
            children: [
                (0, i.jsx)("circle", { className: void 0 !== s ? s : o.cj, cx: 10, cy: 10, r: 10 }),
                (0, i.jsx)("circle", { className: a()(o.rh, r), cx: 10, cy: 10, r: (20 - 2 * e) / 2 }),
                (0, i.jsx)("circle", {
                    className: o.iv,
                    cx: 10,
                    cy: 10,
                    r: u,
                    strokeWidth: `${e}px`,
                    strokeLinecap: "round",
                    transform: "rotate(-90 10 10)",
                    stroke: null != n ? n : "currentColor",
                    style: { strokeDasharray: c, strokeDashoffset: (1 - l / 100) * c },
                }),
            ],
        });
    }
    render() {
        let { className: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: a()(o.G3, e),
            children: [
                this.renderCircle(),
                null != t
                    ? (0, i.jsx)("div", { className: a()(o.Bd, this.props.overlayClassName), children: t })
                    : null,
            ],
        });
    }
}
