n.d(t, { Z: () => m });
var i,
    s = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(600164),
    c = n(705872);
function d(e, t, n) {
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
class u extends (i = r.PureComponent) {
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: i } = this.props;
        return (0, s.jsx)('div', {
            className: a()(c.card, t),
            onMouseEnter: n,
            onMouseLeave: i,
            children: e
        });
    }
}
d(u, 'Header', (e) => {
    let { children: t, className: n, splashArtURL: i } = e;
    return (0, s.jsxs)(o.Z, {
        className: a()(c.header, n),
        align: o.Z.Align.CENTER,
        children: [
            (0, s.jsx)('div', {
                className: c.splashArt,
                style: null != i ? { backgroundImage: 'url('.concat(i, ')') } : void 0
            }),
            t
        ]
    });
}),
    d(u, 'Body', (e) => {
        let { children: t, className: n } = e;
        return (0, s.jsx)('div', {
            className: a()(c.body, n),
            children: t
        });
    });
let m = u;
