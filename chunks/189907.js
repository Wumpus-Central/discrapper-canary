n.d(t, { Z: () => _ });
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(600164),
    c = n(190995);
function u(e, t, n) {
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
let d = (e) => {
        let { children: t, className: n, splashArtURL: r } = e;
        return (0, i.jsxs)(l.Z, {
            className: s()(c.header, n),
            align: l.Z.Align.CENTER,
            children: [
                (0, i.jsx)("div", {
                    className: c.splashArt,
                    style: null != r ? { backgroundImage: "url(".concat(r, ")") } : void 0,
                }),
                t,
            ],
        });
    },
    f = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", {
            className: s()(c.body, n),
            children: t,
        });
    };
class p extends (r = a.PureComponent) {
    render() {
        let { children: e, className: t, onMouseEnter: n, onMouseLeave: r } = this.props;
        return (0, i.jsx)("div", {
            className: s()(c.card, t),
            onMouseEnter: n,
            onMouseLeave: r,
            children: e,
        });
    }
}
u(p, "Header", d), u(p, "Body", f);
let _ = p;
