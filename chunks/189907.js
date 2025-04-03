n.d(t, { Z: () => m });
var r,
    i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(600164),
    c = n(559595);
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
class u extends (r = s.PureComponent) {
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: r } = this.props;
        return (0, i.jsx)('div', {
            className: l()(c.card, t),
            onMouseEnter: n,
            onMouseLeave: r,
            children: e
        });
    }
}
d(u, 'Header', (e) => {
    let { children: t, className: n, splashArtURL: r } = e;
    return (0, i.jsxs)(o.Z, {
        className: l()(c.header, n),
        align: o.Z.Align.CENTER,
        children: [
            (0, i.jsx)('div', {
                className: c.splashArt,
                style: null != r ? { backgroundImage: 'url('.concat(r, ')') } : void 0
            }),
            t
        ]
    });
}),
    d(u, 'Body', (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)('div', {
            className: l()(c.body, n),
            children: t
        });
    });
let m = u;
