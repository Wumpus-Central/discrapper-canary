r.d(t, { Z: () => p });
var n = r(200651),
    a = r(192379),
    i = r(120356),
    l = r.n(i),
    s = r(692547),
    o = r(481060),
    d = r(600164),
    c = r(4912),
    u = r(378481);
let m = ['firCount', 'nackCount'];
class p extends a.PureComponent {
    renderValueIcon() {
        let { label: e } = this.props;
        return m.includes(e)
            ? (0, n.jsx)(c.Z, {
                  color: s.Z.unsafe_rawColors.YELLOW_300.css,
                  className: u.valueIcon
              })
            : null;
    }
    render() {
        let { children: e, className: t, valueRendered: r, section: a, label: i, renderGraph: s } = this.props;
        return (0, n.jsxs)(d.Z, {
            className: l()(u.item, t),
            direction: d.Z.Direction.VERTICAL,
            basis: '50%',
            children: [
                (0, n.jsxs)(d.Z, {
                    className: u.kvContainer,
                    align: d.Z.Align.START,
                    children: [
                        (0, n.jsx)(d.Z.Child, {
                            children: (0, n.jsx)(o.H, {
                                className: u.title,
                                children: e
                            })
                        }),
                        Array.isArray(r)
                            ? (0, n.jsx)(d.Z.Child, {
                                  grow: 1,
                                  children: r
                              })
                            : (0, n.jsxs)(d.Z.Child, {
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
                null !== s &&
                    (0, n.jsx)(
                        d.Z.Child,
                        {
                            className: u.graph,
                            children: (0, n.jsx)(o.R94, {
                                type: o.geA.DESCRIPTION,
                                children: s
                            })
                        },
                        null != a ? ''.concat(a, '-').concat(i) : i
                    ),
                (0, n.jsx)(o.$i$, { className: u.divider })
            ]
        });
    }
}
