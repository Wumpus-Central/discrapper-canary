r.d(n, {
    OZ: function () {
        return g;
    },
    ox: function () {
        return m;
    },
    ub: function () {
        return E;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(780384),
    u = r(481060),
    c = r(600164),
    d = r(981631),
    f = r(129121),
    _ = r(232186);
let { Provider: h, Consumer: p } = a.createContext(d.BRd.DARK);
class m extends a.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: n, width: r, height: a, offsetX: s, offsetY: u, style: d } = this.props;
        return (0, i.jsx)(p, {
            children: (h) =>
                (0, i.jsx)(c.Z.Child, {
                    grow: 0,
                    className: o()(f.image, _.marginBottom40),
                    style: {
                        ...d,
                        width: r,
                        height: a,
                        marginLeft: s,
                        marginTop: u,
                        backgroundImage: 'url('.concat((0, l.wj)(h) ? n : e, ')')
                    }
                })
        });
    }
}
let g = (e) => {
    let { children: n, className: r, noteClassName: a, note: s, style: l } = e;
    return (0, i.jsxs)(c.Z.Child, {
        grow: 0,
        direction: c.Z.Direction.VERTICAL,
        style: l,
        children: [
            null != n &&
                (0, i.jsx)(u.H, {
                    className: o()(r, f.title),
                    children: n
                }),
            null != s
                ? (0, i.jsx)('div', {
                      className: o()(a, f.text, _.marginTop8),
                      children: s
                  })
                : null
        ]
    });
};
function E(e) {
    let { children: n, theme: r, className: a, style: s } = e;
    return (0, i.jsx)(h, {
        value: r,
        children: (0, i.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            justify: c.Z.Justify.CENTER,
            className: o()(f.wrapper, a),
            style: s,
            children: n
        })
    });
}
