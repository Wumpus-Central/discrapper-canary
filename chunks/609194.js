var l,
    t,
    o,
    s,
    a,
    c = n(200651),
    i = n(192379),
    d = n(120356),
    u = n.n(d),
    p = n(600164),
    m = n(355787);
function f(e, r, n) {
    return (
        r in e
            ? Object.defineProperty(e, r, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[r] = n),
        e
    );
}
((l = o || (o = {})).PRIMARY = 'primary'), (l.SECONDARY = 'secondary'), (l.WARNING = 'warning'), (l.ERROR = 'error'), ((t = s || (s = {})).SMALL = 'small'), (t.LARGE = 'large'), (t.NONE = 'none');
let h = {
        primary: m.colorPrimary,
        secondary: m.colorSecondary,
        warning: m.colorWarning,
        error: m.colorError
    },
    _ = {
        small: m.small,
        large: m.large,
        none: null
    };
class x extends (a = i.PureComponent) {
    render() {
        let { icon: e, color: r, children: n, iconSize: l, className: t, iconClassName: o } = this.props;
        return (0, c.jsxs)(p.Z, {
            className: u()(m.note, h[r], t),
            align: p.Z.Align.CENTER,
            children: [
                (0, c.jsx)(e, {
                    className: u()(m.icon, _[l], o),
                    color: 'currentColor'
                }),
                (0, c.jsx)('div', { children: n })
            ]
        });
    }
}
f(x, 'Colors', o), f(x, 'Sizes', s), (r.Z = x);
