n.d(t, { Z: () => m });
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(600164),
    c = n(984586);
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
var d = (function (e) {
        return (e.PRIMARY = 'primary'), (e.SECONDARY = 'secondary'), (e.WARNING = 'warning'), (e.ERROR = 'error'), e;
    })(d || {}),
    f = (function (e) {
        return (e.SMALL = 'small'), (e.LARGE = 'large'), (e.NONE = 'none'), e;
    })(f || {});
let p = {
        primary: c.colorPrimary,
        secondary: c.colorSecondary,
        warning: c.colorWarning,
        error: c.colorError
    },
    _ = {
        small: c.small,
        large: c.large,
        none: null
    };
class h extends (r = o.PureComponent) {
    render() {
        let { icon: e, color: t, children: n, iconSize: r, className: o, iconClassName: a } = this.props;
        return (0, i.jsxs)(l.Z, {
            className: s()(c.note, p[t], o),
            align: l.Z.Align.CENTER,
            children: [
                (0, i.jsx)(e, {
                    className: s()(c.icon, _[r], a),
                    color: 'currentColor'
                }),
                (0, i.jsx)('div', { children: n })
            ]
        });
    }
}
u(h, 'Colors', d), u(h, 'Sizes', f);
let m = h;
