l.d(t, { Z: () => x });
var s,
    r,
    i = l(200651),
    n = l(192379),
    a = l(120356),
    c = l.n(a),
    o = l(600164),
    d = l(471085);
function f(e, t, l) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = l),
        e
    );
}
var u = (((s = u || {}).WRAP = 'wrap'), (s.STACK = 'stack'), s);
class h extends (r = n.PureComponent) {
    renderChildren() {
        let e;
        let { children: t, layout: l, columns: s } = this.props;
        switch (l) {
            case 'stack':
                e = '100%';
                break;
            case 'wrap':
                e = ''.concat((1 / s) * 100, '%');
        }
        return t.map((t, l) =>
            (0, i.jsx)(
                o.Z.Child,
                {
                    className: d.tile,
                    basis: e,
                    grow: 0,
                    children: t
                },
                l
            )
        );
    }
    render() {
        let { className: e } = this.props;
        return (0, i.jsx)(o.Z, {
            className: c()(e, d.grid),
            wrap: o.Z.Wrap.WRAP,
            children: this.renderChildren()
        });
    }
}
f(h, 'Layout', u),
    f(h, 'defaultProps', {
        children: [],
        layout: 'wrap',
        columns: 4
    });
let x = h;
