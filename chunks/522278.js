r.d(t, { A: () => p });
var n = r(627968),
    a = r(64700),
    i = r(503698),
    s = r.n(i),
    l = r(827734),
    o = r(397927),
    d = r(235986),
    u = r(603349),
    c = r(41604);
let m = ["firCount", "nackCount"];
class p extends a.PureComponent {
    renderValueIcon() {
        let { label: e } = this.props;
        return m.includes(e) ? (0, n.jsx)(u.A, { color: l.A.unsafe_rawColors.YELLOW_300.css, className: c.nm }) : null;
    }
    render() {
        let { children: e, className: t, valueRendered: r, section: a, label: i, renderGraph: l } = this.props;
        return (0, n.jsxs)(d.A, {
            className: s()(c.AS, t),
            direction: d.A.Direction.VERTICAL,
            basis: "50%",
            children: [
                (0, n.jsxs)(d.A, {
                    className: c.l5,
                    align: d.A.Align.START,
                    children: [
                        (0, n.jsx)(d.A.Child, { children: (0, n.jsx)(o.H, { className: c.DD, children: e }) }),
                        Array.isArray(r)
                            ? (0, n.jsx)(d.A.Child, { grow: 1, children: r })
                            : (0, n.jsxs)(d.A.Child, {
                                  grow: 0,
                                  shrink: 0,
                                  children: [
                                      this.renderValueIcon(),
                                      (0, n.jsx)("span", { className: c.R$, title: r, children: r }),
                                  ],
                              }),
                    ],
                }),
                null !== l && (0, n.jsx)(d.A.Child, { className: c.JB, children: l }, null != a ? `${a}-${i}` : i),
                (0, n.jsx)(o.cGx, { className: c.yF }),
            ],
        });
    }
}
