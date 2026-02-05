"use strict";
n.d(t, { a: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(332099);
let l = Object.freeze({ XSMALL: 0.8, SMALL: 1, MEDIUM: 2, LARGE: 4 }),
    u = 20;
class c extends i.Component {
    static StrokeSizes = l;
    static defaultProps = { strokeSize: l.MEDIUM };
    renderCircle() {
        let { strokeSize: e, percent: t, colorOverride: n, background: i, ringColorOverrideClassName: a } = this.props,
            l = Math.min(Math.max(t, 0), 100),
            c = (u - e) / 2,
            d = c * Math.PI * 2;
        return (0, r.jsxs)("svg", {
            viewBox: `0 0 ${u} ${u}`,
            className: o.n1,
            children: [
                (0, r.jsx)("circle", { className: void 0 !== a ? a : o.cj, cx: u / 2, cy: u / 2, r: u / 2 }),
                (0, r.jsx)("circle", { className: s()(o.rh, i), cx: u / 2, cy: u / 2, r: (u - 2 * e) / 2 }),
                (0, r.jsx)("circle", {
                    className: o.iv,
                    cx: u / 2,
                    cy: u / 2,
                    r: c,
                    strokeWidth: `${e}px`,
                    strokeLinecap: "round",
                    transform: `rotate(-90 ${u / 2} ${u / 2})`,
                    stroke: null != n ? n : "currentColor",
                    style: { strokeDasharray: d, strokeDashoffset: (1 - l / 100) * d },
                }),
            ],
        });
    }
    render() {
        let { className: e, children: t } = this.props;
        return (0, r.jsxs)("div", {
            className: s()(o.G3, e),
            children: [
                this.renderCircle(),
                null != t
                    ? (0, r.jsx)("div", { className: s()(o.Bd, this.props.overlayClassName), children: t })
                    : null,
            ],
        });
    }
}
