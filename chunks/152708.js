var l,
    r,
    n,
    s = i(200651),
    a = i(192379),
    c = i(120356),
    o = i.n(c),
    d = i(600164),
    f = i(82126);
function u(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
((l = r || (r = {})).WRAP = 'wrap'), (l.STACK = 'stack');
class h extends (n = a.PureComponent) {
    renderChildren() {
        let e;
        let { children: t, layout: i, columns: l } = this.props;
        switch (i) {
            case 'stack':
                e = '100%';
                break;
            case 'wrap':
                e = ''.concat((1 / l) * 100, '%');
        }
        return t.map((t, i) =>
            (0, s.jsx)(
                d.Z.Child,
                {
                    className: f.tile,
                    basis: e,
                    grow: 0,
                    children: t
                },
                i
            )
        );
    }
    render() {
        let { className: e } = this.props;
        return (0, s.jsx)(d.Z, {
            className: o()(e, f.grid),
            wrap: d.Z.Wrap.WRAP,
            children: this.renderChildren()
        });
    }
}
u(h, 'Layout', r),
    u(h, 'defaultProps', {
        children: [],
        layout: 'wrap',
        columns: 4
    }),
    (t.Z = h);
