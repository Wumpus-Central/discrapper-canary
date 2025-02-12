n.d(t, { _: () => f });
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(245871);
function u(e, t, n) {
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
let c = Object.freeze({
        SMALL: 1,
        MEDIUM: 2,
        LARGE: 4
    }),
    d = 20;
class f extends (i = a.Component) {
    renderCircle() {
        let { strokeSize: e, percent: t, colorOverride: n, background: i } = this.props,
            a = Math.min(Math.max(t, 0), 100),
            s = (d - e) / 2,
            u = s * Math.PI * 2;
        return (0, r.jsxs)('svg', {
            viewBox: '0 0 '.concat(d, ' ').concat(d),
            className: l.circle,
            children: [
                (0, r.jsx)('circle', {
                    className: l.circleBackgroundAlt,
                    cx: d / 2,
                    cy: d / 2,
                    r: d / 2
                }),
                (0, r.jsx)('circle', {
                    className: o()(l.circleBackground, i),
                    cx: d / 2,
                    cy: d / 2,
                    r: (d - 2 * e) / 2
                }),
                (0, r.jsx)('circle', {
                    className: l.circleProgress,
                    cx: d / 2,
                    cy: d / 2,
                    r: s,
                    strokeWidth: ''.concat(e, 'px'),
                    strokeLinecap: 'round',
                    transform: 'rotate(-90 '.concat(d / 2, ' ').concat(d / 2, ')'),
                    stroke: null != n ? n : 'currentColor',
                    style: {
                        strokeDasharray: u,
                        strokeDashoffset: (1 - a / 100) * u
                    }
                })
            ]
        });
    }
    render() {
        let { className: e, children: t } = this.props;
        return (0, r.jsxs)('div', {
            className: o()(l.progressCircle, e),
            children: [
                this.renderCircle(),
                null != t
                    ? (0, r.jsx)('div', {
                          className: l.circleOverlay,
                          children: t
                      })
                    : null
            ]
        });
    }
}
u(f, 'StrokeSizes', c), u(f, 'defaultProps', { strokeSize: c.MEDIUM });
