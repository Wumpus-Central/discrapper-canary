n.d(t, {
    G8: () => b,
    SG: () => y,
    pp: () => O,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(582754),
    l = n(397927),
    c = n(235986),
    u = n(652215),
    d = n(537356),
    f = n(473169);
function p(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
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
let { Provider: g, Consumer: E } = i.createContext(u.NJ8.DARK);
class b extends i.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: t, width: n, height: i, offsetX: a, offsetY: l, style: u } = this.props;
        return (0, r.jsx)(E, {
            children: (p) =>
                (0, r.jsx)(c.A.Child, {
                    grow: 0,
                    className: s()(d.Sl, f.C2),
                    style: m(_({}, u), {
                        width: n,
                        height: i,
                        marginLeft: a,
                        marginTop: l,
                        backgroundImage: "url(".concat((0, o.Mw)(p) ? t : e, ")"),
                    }),
                }),
        });
    }
}
let y = (e) => {
    let { children: t, className: n, noteClassName: i, note: a, style: o } = e;
    return (0, r.jsxs)(c.A.Child, {
        grow: 0,
        direction: c.A.Direction.VERTICAL,
        style: o,
        children: [
            null != t &&
                (0, r.jsx)(l.H, {
                    className: s()(n, d.DD),
                    children: t,
                }),
            null != a
                ? (0, r.jsx)("div", {
                      className: s()(i, d.Qq, f.Ot),
                      children: a,
                  })
                : null,
        ],
    });
};
function O(e) {
    let { children: t, theme: n, className: i, style: a } = e;
    return (0, r.jsx)(g, {
        value: n,
        children: (0, r.jsx)(c.A, {
            direction: c.A.Direction.VERTICAL,
            align: c.A.Align.CENTER,
            justify: c.A.Justify.CENTER,
            className: s()(d.iE, i),
            style: a,
            children: t,
        }),
    });
}
