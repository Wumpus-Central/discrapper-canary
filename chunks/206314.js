n.d(t, { Z: () => p });
var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(692547),
    s = n(481060),
    d = n(600164),
    c = n(4912),
    u = n(316095);
let m = ['firCount', 'nackCount'];
class p extends a.PureComponent {
    renderValueIcon() {
        let { label: e } = this.props;
        return m.includes(e)
            ? (0, r.jsx)(c.Z, {
                  color: l.Z.unsafe_rawColors.YELLOW_300.css,
                  className: u.valueIcon
              })
            : null;
    }
    render() {
        let { children: e, className: t, valueRendered: n, section: a, label: i, renderGraph: l } = this.props;
        return (0, r.jsxs)(d.Z, {
            className: o()(u.item, t),
            direction: d.Z.Direction.VERTICAL,
            basis: '50%',
            children: [
                (0, r.jsxs)(d.Z, {
                    className: u.kvContainer,
                    align: d.Z.Align.START,
                    children: [
                        (0, r.jsx)(d.Z.Child, {
                            children: (0, r.jsx)(s.H, {
                                className: u.title,
                                children: e
                            })
                        }),
                        Array.isArray(n)
                            ? (0, r.jsx)(d.Z.Child, {
                                  grow: 1,
                                  children: n
                              })
                            : (0, r.jsxs)(d.Z.Child, {
                                  grow: 0,
                                  shrink: 0,
                                  children: [
                                      this.renderValueIcon(),
                                      (0, r.jsx)('span', {
                                          className: u.itemValue,
                                          title: n,
                                          children: n
                                      })
                                  ]
                              })
                    ]
                }),
                null !== l &&
                    (0, r.jsx)(
                        d.Z.Child,
                        {
                            className: u.graph,
                            children: (0, r.jsx)(s.R94, {
                                type: s.geA.DESCRIPTION,
                                children: l
                            })
                        },
                        null != a ? ''.concat(a, '-').concat(i) : i
                    ),
                (0, r.jsx)(s.$i$, { className: u.divider })
            ]
        });
    }
}
