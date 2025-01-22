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
    o = r(120356),
    s = r.n(o),
    l = r(780384),
    u = r(481060),
    c = r(600164),
    d = r(981631),
    f = r(129121),
    p = r(232186);
let { Provider: h, Consumer: _ } = a.createContext(d.BRd.DARK);
class m extends a.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: n, width: r, height: a, offsetX: o, offsetY: u, style: d } = this.props;
        return (0, i.jsx)(_, {
            children: (h) =>
                (0, i.jsx)(c.Z.Child, {
                    grow: 0,
                    className: s()(f.image, p.marginBottom40),
                    style: {
                        ...d,
                        width: r,
                        height: a,
                        marginLeft: o,
                        marginTop: u,
                        backgroundImage: 'url('.concat((0, l.wj)(h) ? n : e, ')')
                    }
                })
        });
    }
}
let g = (e) => {
    let { children: n, className: r, noteClassName: a, note: o, style: l } = e;
    return (0, i.jsxs)(c.Z.Child, {
        grow: 0,
        direction: c.Z.Direction.VERTICAL,
        style: l,
        children: [
            null != n &&
                (0, i.jsx)(u.H, {
                    className: s()(r, f.title),
                    children: n
                }),
            null != o
                ? (0, i.jsx)('div', {
                      className: s()(a, f.text, p.marginTop8),
                      children: o
                  })
                : null
        ]
    });
};
function E(e) {
    let { children: n, theme: r, className: a, style: o } = e;
    return (0, i.jsx)(h, {
        value: r,
        children: (0, i.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            justify: c.Z.Justify.CENTER,
            className: s()(f.wrapper, a),
            style: o,
            children: n
        })
    });
}
