n.d(t, {
    OZ: () => y,
    ox: () => b,
    ub: () => v
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(780384),
    l = n(481060),
    c = n(600164),
    u = n(981631),
    d = n(318343),
    f = n(20493);
function _(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let { Provider: g, Consumer: E } = i.createContext(u.BRd.DARK);
class b extends i.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: t, width: n, height: i, offsetX: o, offsetY: l, style: u } = this.props;
        return (0, r.jsx)(E, {
            children: (_) =>
                (0, r.jsx)(c.Z.Child, {
                    grow: 0,
                    className: a()(d.image, f.marginBottom40),
                    style: m(p({}, u), {
                        width: n,
                        height: i,
                        marginLeft: o,
                        marginTop: l,
                        backgroundImage: 'url('.concat((0, s.wj)(_) ? t : e, ')')
                    })
                })
        });
    }
}
let y = (e) => {
    let { children: t, className: n, noteClassName: i, note: o, style: s } = e;
    return (0, r.jsxs)(c.Z.Child, {
        grow: 0,
        direction: c.Z.Direction.VERTICAL,
        style: s,
        children: [
            null != t &&
                (0, r.jsx)(l.H, {
                    className: a()(n, d.title),
                    children: t
                }),
            null != o
                ? (0, r.jsx)('div', {
                      className: a()(i, d.text, f.marginTop8),
                      children: o
                  })
                : null
        ]
    });
};
function v(e) {
    let { children: t, theme: n, className: i, style: o } = e;
    return (0, r.jsx)(g, {
        value: n,
        children: (0, r.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            justify: c.Z.Justify.CENTER,
            className: a()(d.wrapper, i),
            style: o,
            children: t
        })
    });
}
