var i,
    a,
    o,
    s = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(600164),
    f = r(355787);
function p(e, n, r) {
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
!(function (e) {
    (e.PRIMARY = 'primary'), (e.SECONDARY = 'secondary'), (e.WARNING = 'warning'), (e.ERROR = 'error');
})(i || (i = {})),
    !(function (e) {
        (e.SMALL = 'small'), (e.LARGE = 'large'), (e.NONE = 'none');
    })(a || (a = {}));
let h = {
        primary: f.colorPrimary,
        secondary: f.colorSecondary,
        warning: f.colorWarning,
        error: f.colorError
    },
    _ = {
        small: f.small,
        large: f.large,
        none: null
    };
class m extends (o = l.PureComponent) {
    render() {
        let { icon: e, color: n, children: r, iconSize: i, className: a, iconClassName: o } = this.props;
        return (0, s.jsxs)(d.Z, {
            className: c()(f.note, h[n], a),
            align: d.Z.Align.CENTER,
            children: [
                (0, s.jsx)(e, {
                    className: c()(f.icon, _[i], o),
                    color: 'currentColor'
                }),
                (0, s.jsx)('div', { children: r })
            ]
        });
    }
}
p(m, 'Colors', i), p(m, 'Sizes', a), (n.Z = m);
