n.d(t, { _: () => f });
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(218446);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = Object.freeze({
        XSMALL: 0.8,
        SMALL: 1,
        MEDIUM: 2,
        LARGE: 4,
    }),
    d = 20;
class f extends (r = a.Component) {
    renderCircle() {
        let { strokeSize: e, percent: t, colorOverride: n, background: r, ringColorOverrideClassName: a } = this.props,
            o = Math.min(Math.max(t, 0), 100),
            c = (d - e) / 2,
            u = c * Math.PI * 2;
        return (0, i.jsxs)("svg", {
            viewBox: "0 0 ".concat(d, " ").concat(d),
            className: l.circle,
            children: [
                (0, i.jsx)("circle", {
                    className: void 0 !== a ? a : l.circleBackgroundAlt,
                    cx: d / 2,
                    cy: d / 2,
                    r: d / 2,
                }),
                (0, i.jsx)("circle", {
                    className: s()(l.circleBackground, r),
                    cx: d / 2,
                    cy: d / 2,
                    r: (d - 2 * e) / 2,
                }),
                (0, i.jsx)("circle", {
                    className: l.circleProgress,
                    cx: d / 2,
                    cy: d / 2,
                    r: c,
                    strokeWidth: "".concat(e, "px"),
                    strokeLinecap: "round",
                    transform: "rotate(-90 ".concat(d / 2, " ").concat(d / 2, ")"),
                    stroke: null != n ? n : "currentColor",
                    style: {
                        strokeDasharray: u,
                        strokeDashoffset: (1 - o / 100) * u,
                    },
                }),
            ],
        });
    }
    render() {
        let { className: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: s()(l.progressCircle, e),
            children: [
                this.renderCircle(),
                null != t
                    ? (0, i.jsx)("div", {
                          className: s()(l.circleOverlay, this.props.overlayClassName),
                          children: t,
                      })
                    : null,
            ],
        });
    }
}
c(f, "StrokeSizes", u), c(f, "defaultProps", { strokeSize: u.MEDIUM });
