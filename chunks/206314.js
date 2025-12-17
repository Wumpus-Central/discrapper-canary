n.d(t, { Z: () => p });
var r = n(54381),
    a = n(473749),
    i = n(120356),
    l = n.n(i),
    o = n(692547),
    s = n(481060),
    c = n(600164),
    d = n(4912),
    u = n(101713);
let m = ["firCount", "nackCount"];
class p extends a.PureComponent {
    renderValueIcon() {
        let { label: e } = this.props;
        return m.includes(e)
            ? (0, r.jsx)(d.Z, {
                  color: o.Z.unsafe_rawColors.YELLOW_300.css,
                  className: u.valueIcon,
              })
            : null;
    }
    render() {
        let { children: e, className: t, valueRendered: n, section: a, label: i, renderGraph: o } = this.props;
        return (0, r.jsxs)(c.Z, {
            className: l()(u.item, t),
            direction: c.Z.Direction.VERTICAL,
            basis: "50%",
            children: [
                (0, r.jsxs)(c.Z, {
                    className: u.kvContainer,
                    align: c.Z.Align.START,
                    children: [
                        (0, r.jsx)(c.Z.Child, {
                            children: (0, r.jsx)(s.H, {
                                className: u.title,
                                children: e,
                            }),
                        }),
                        Array.isArray(n)
                            ? (0, r.jsx)(c.Z.Child, {
                                  grow: 1,
                                  children: n,
                              })
                            : (0, r.jsxs)(c.Z.Child, {
                                  grow: 0,
                                  shrink: 0,
                                  children: [
                                      this.renderValueIcon(),
                                      (0, r.jsx)("span", {
                                          className: u.itemValue,
                                          title: n,
                                          children: n,
                                      }),
                                  ],
                              }),
                    ],
                }),
                null !== o &&
                    (0, r.jsx)(
                        c.Z.Child,
                        {
                            className: u.graph,
                            children: o,
                        },
                        null != a ? "".concat(a, "-").concat(i) : i,
                    ),
                (0, r.jsx)(s.izJ, { className: u.divider }),
            ],
        });
    }
}
