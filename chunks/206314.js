r.d(t, { Z: () => p });
var n = r(255367),
    a = r(73800),
    i = r(120356),
    l = r.n(i),
    o = r(692547),
    s = r(481060),
    c = r(600164),
    d = r(4912),
    u = r(442122);
let m = ['firCount', 'nackCount'];
class p extends a.PureComponent {
    renderValueIcon() {
        let { label: e } = this.props;
        return m.includes(e)
            ? (0, n.jsx)(d.Z, {
                  color: o.Z.unsafe_rawColors.YELLOW_300.css,
                  className: u.valueIcon
              })
            : null;
    }
    render() {
        let { children: e, className: t, valueRendered: r, section: a, label: i, renderGraph: o } = this.props;
        return (0, n.jsxs)(c.Z, {
            className: l()(u.item, t),
            direction: c.Z.Direction.VERTICAL,
            basis: '50%',
            children: [
                (0, n.jsxs)(c.Z, {
                    className: u.kvContainer,
                    align: c.Z.Align.START,
                    children: [
                        (0, n.jsx)(c.Z.Child, {
                            children: (0, n.jsx)(s.H, {
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
                null !== o &&
                    (0, n.jsx)(
                        c.Z.Child,
                        {
                            className: u.graph,
                            children: (0, n.jsx)(s.R94, {
                                type: s.geA.DESCRIPTION,
                                children: o
                            })
                        },
                        null != a ? ''.concat(a, '-').concat(i) : i
                    ),
                (0, n.jsx)(s.$i$, { className: u.divider })
            ]
        });
    }
}
