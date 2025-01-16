r.d(n, {
    _: function () {
        return _;
    }
});
var i,
    a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(74927);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = Object.freeze({
        SMALL: 1,
        MEDIUM: 2,
        LARGE: 4
    }),
    f = 20;
class _ extends (i = s.Component) {
    renderCircle() {
        let { strokeSize: e, percent: n, colorOverride: r, background: i } = this.props,
            s = Math.min(Math.max(n, 0), 100),
            o = (f - e) / 2,
            c = o * Math.PI * 2;
        return (0, a.jsxs)('svg', {
            viewBox: '0 0 '.concat(f, ' ').concat(f),
            className: u.circle,
            children: [
                (0, a.jsx)('circle', {
                    className: u.circleBackgroundAlt,
                    cx: f / 2,
                    cy: f / 2,
                    r: f / 2
                }),
                (0, a.jsx)('circle', {
                    className: l()(u.circleBackground, i),
                    cx: f / 2,
                    cy: f / 2,
                    r: (f - 2 * e) / 2
                }),
                (0, a.jsx)('circle', {
                    className: u.circleProgress,
                    cx: f / 2,
                    cy: f / 2,
                    r: o,
                    strokeWidth: ''.concat(e, 'px'),
                    strokeLinecap: 'round',
                    transform: 'rotate(-90 '.concat(f / 2, ' ').concat(f / 2, ')'),
                    stroke: null != r ? r : 'currentColor',
                    style: {
                        strokeDasharray: c,
                        strokeDashoffset: (1 - s / 100) * c
                    }
                })
            ]
        });
    }
    render() {
        let { className: e, children: n } = this.props;
        return (0, a.jsxs)('div', {
            className: l()(u.progressCircle, e),
            children: [
                this.renderCircle(),
                null != n
                    ? (0, a.jsx)('div', {
                          className: u.circleOverlay,
                          children: n
                      })
                    : null
            ]
        });
    }
}
c(_, 'StrokeSizes', d), c(_, 'defaultProps', { strokeSize: d.MEDIUM });
