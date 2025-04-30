n.d(t, { _: () => f });
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(584209);
function c(e, t, n) {
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
let u = Object.freeze({
        SMALL: 1,
        MEDIUM: 2,
        LARGE: 4
    }),
    d = 20;
class f extends (r = o.Component) {
    renderCircle() {
        let { strokeSize: e, percent: t, colorOverride: n, background: r } = this.props,
            o = Math.min(Math.max(t, 0), 100),
            a = (d - e) / 2,
            c = a * Math.PI * 2;
        return (0, i.jsxs)('svg', {
            viewBox: '0 0 '.concat(d, ' ').concat(d),
            className: l.circle,
            children: [
                (0, i.jsx)('circle', {
                    className: l.circleBackgroundAlt,
                    cx: d / 2,
                    cy: d / 2,
                    r: d / 2
                }),
                (0, i.jsx)('circle', {
                    className: s()(l.circleBackground, r),
                    cx: d / 2,
                    cy: d / 2,
                    r: (d - 2 * e) / 2
                }),
                (0, i.jsx)('circle', {
                    className: l.circleProgress,
                    cx: d / 2,
                    cy: d / 2,
                    r: a,
                    strokeWidth: ''.concat(e, 'px'),
                    strokeLinecap: 'round',
                    transform: 'rotate(-90 '.concat(d / 2, ' ').concat(d / 2, ')'),
                    stroke: null != n ? n : 'currentColor',
                    style: {
                        strokeDasharray: c,
                        strokeDashoffset: (1 - o / 100) * c
                    }
                })
            ]
        });
    }
    render() {
        let { className: e, children: t } = this.props;
        return (0, i.jsxs)('div', {
            className: s()(l.progressCircle, e),
            children: [
                this.renderCircle(),
                null != t
                    ? (0, i.jsx)('div', {
                          className: l.circleOverlay,
                          children: t
                      })
                    : null
            ]
        });
    }
}
c(f, 'StrokeSizes', u), c(f, 'defaultProps', { strokeSize: u.MEDIUM });
