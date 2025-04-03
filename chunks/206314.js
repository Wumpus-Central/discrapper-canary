r.d(t, { Z: () => p });
var n = r(200651),
    a = r(192379),
    i = r(120356),
    s = r.n(i),
    l = r(692547),
    o = r(481060),
    c = r(600164),
    d = r(4912),
    u = r(442122);
let m = ['firCount', 'nackCount'];
class p extends a.PureComponent {
    renderValueIcon() {
        let { label: e } = this.props;
        return m.includes(e)
            ? (0, n.jsx)(d.Z, {
                  color: l.Z.unsafe_rawColors.YELLOW_300.css,
                  className: u.valueIcon
              })
            : null;
    }
    render() {
        let { children: e, className: t, valueRendered: r, section: a, label: i, renderGraph: l } = this.props;
        return (0, n.jsxs)(c.Z, {
            className: s()(u.item, t),
            direction: c.Z.Direction.VERTICAL,
            basis: '50%',
            children: [
                (0, n.jsxs)(c.Z, {
                    className: u.kvContainer,
                    align: c.Z.Align.START,
                    children: [
                        (0, n.jsx)(c.Z.Child, {
                            children: (0, n.jsx)(o.H, {
                                className: u.title,
                                children: e
                            })
                        }),
                        Array.isArray(r)
                            ? (0, n.jsx)(c.Z.Child, {
                                  grow: 1,
                                  children: r
                              })
                            : (0, n.jsxs)(c.Z.Child, {
                                  grow: 0,
                                  shrink: 0,
                                  children: [
                                      this.renderValueIcon(),
                                      (0, n.jsx)('span', {
                                          className: u.itemValue,
                                          title: r,
                                          children: r
                                      })
                                  ]
                              })
                    ]
                }),
                null !== l &&
                    (0, n.jsx)(
                        c.Z.Child,
                        {
                            className: u.graph,
                            children: (0, n.jsx)(o.R94, {
                                type: o.geA.DESCRIPTION,
                                children: l
                            })
                        },
                        null != a ? ''.concat(a, '-').concat(i) : i
                    ),
                (0, n.jsx)(o.$i$, { className: u.divider })
            ]
        });
    }
}
