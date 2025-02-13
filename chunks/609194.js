n.d(t, { Z: () => m });
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(600164),
    u = n(490472);
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
var d = (function (e) {
        return (e.PRIMARY = 'primary'), (e.SECONDARY = 'secondary'), (e.WARNING = 'warning'), (e.ERROR = 'error'), e;
    })(d || {}),
    f = (function (e) {
        return (e.SMALL = 'small'), (e.LARGE = 'large'), (e.NONE = 'none'), e;
    })(f || {});
let _ = {
        primary: u.colorPrimary,
        secondary: u.colorSecondary,
        warning: u.colorWarning,
        error: u.colorError
    },
    p = {
        small: u.small,
        large: u.large,
        none: null
    };
class h extends (i = a.PureComponent) {
    render() {
        let { icon: e, color: t, children: n, iconSize: i, className: a, iconClassName: s } = this.props;
        return (0, r.jsxs)(l.Z, {
            className: o()(u.note, _[t], a),
            align: l.Z.Align.CENTER,
            children: [
                (0, r.jsx)(e, {
                    className: o()(u.icon, p[i], s),
                    color: 'currentColor'
                }),
                (0, r.jsx)('div', { children: n })
            ]
        });
    }
}
c(h, 'Colors', d), c(h, 'Sizes', f);
let m = h;
