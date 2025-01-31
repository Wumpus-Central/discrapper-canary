n.d(t, {
    OZ: () => m,
    ox: () => h,
    ub: () => g
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(780384),
    l = n(481060),
    u = n(600164),
    c = n(981631),
    d = n(129121),
    f = n(232186);
let { Provider: _, Consumer: p } = r.createContext(c.BRd.DARK);
class h extends r.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: t, width: n, height: r, offsetX: a, offsetY: l, style: c } = this.props;
        return (0, i.jsx)(p, {
            children: (_) =>
                (0, i.jsx)(u.Z.Child, {
                    grow: 0,
                    className: s()(d.image, f.marginBottom40),
                    style: {
                        ...c,
                        width: n,
                        height: r,
                        marginLeft: a,
                        marginTop: l,
                        backgroundImage: 'url('.concat((0, o.wj)(_) ? t : e, ')')
                    }
                })
        });
    }
}
let m = (e) => {
    let { children: t, className: n, noteClassName: r, note: a, style: o } = e;
    return (0, i.jsxs)(u.Z.Child, {
        grow: 0,
        direction: u.Z.Direction.VERTICAL,
        style: o,
        children: [
            null != t &&
                (0, i.jsx)(l.H, {
                    className: s()(n, d.title),
                    children: t
                }),
            null != a
                ? (0, i.jsx)('div', {
                      className: s()(r, d.text, f.marginTop8),
                      children: a
                  })
                : null
        ]
    });
};
function g(e) {
    let { children: t, theme: n, className: r, style: a } = e;
    return (0, i.jsx)(_, {
        value: n,
        children: (0, i.jsx)(u.Z, {
            direction: u.Z.Direction.VERTICAL,
            align: u.Z.Align.CENTER,
            justify: u.Z.Justify.CENTER,
            className: s()(d.wrapper, r),
            style: a,
            children: t
        })
    });
}
