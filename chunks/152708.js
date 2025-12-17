n.d(t, { Z: () => h });
var r,
    i,
    l = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    c = n(600164),
    d = n(187040);
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
var f = (((r = f || {}).WRAP = "wrap"), (r.STACK = "stack"), r);
class p extends (i = s.PureComponent) {
    renderChildren() {
        let e,
            { children: t, layout: n, columns: r } = this.props;
        switch (n) {
            case "stack":
                e = "100%";
                break;
            case "wrap":
                e = "".concat((1 / r) * 100, "%");
        }
        return t.map((t, n) =>
            (0, l.jsx)(
                c.Z.Child,
                {
                    className: d.tile,
                    basis: e,
                    grow: 0,
                    children: t,
                },
                n,
            ),
        );
    }
    render() {
        let { className: e } = this.props;
        return (0, l.jsx)(c.Z, {
            className: a()(e, d.grid),
            wrap: c.Z.Wrap.WRAP,
            children: this.renderChildren(),
        });
    }
}
u(p, "Layout", f),
    u(p, "defaultProps", {
        children: [],
        layout: "wrap",
        columns: 4,
    });
let h = p;
