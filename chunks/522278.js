r.d(t, { A: () => h });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    o = r.n(a),
    l = r(827734),
    s = r(707554),
    d = r(404778),
    c = r(235986),
    u = r(603349),
    m = r(41604);
let p = ["firCount", "nackCount"];
class h extends i.PureComponent {
    renderValueIcon() {
        let { label: e } = this.props;
        return p.includes(e) ? (0, n.jsx)(u.A, { color: l.A.unsafe_rawColors.YELLOW_300.css, className: m.nm }) : null;
    }
    render() {
        let { children: e, className: t, valueRendered: r, section: i, label: a, renderGraph: l } = this.props;
        return (0, n.jsxs)(c.A, {
            className: o()(m.AS, t),
            direction: c.A.Direction.VERTICAL,
            basis: "50%",
            children: [
                (0, n.jsxs)(c.A, {
                    className: m.l5,
                    align: c.A.Align.START,
                    children: [
                        (0, n.jsx)(c.A.Child, { children: (0, n.jsx)(s.H, { className: m.DD, children: e }) }),
                        Array.isArray(r)
                            ? (0, n.jsx)(c.A.Child, { grow: 1, children: r })
                            : (0, n.jsxs)(c.A.Child, {
                                  grow: 0,
                                  shrink: 0,
                                  children: [
                                      this.renderValueIcon(),
                                      (0, n.jsx)("span", { className: m.R$, title: r, children: r }),
                                  ],
                              }),
                    ],
                }),
                null !== l && (0, n.jsx)(c.A.Child, { className: m.JB, children: l }, null != i ? `${i}-${a}` : a),
                (0, n.jsx)(d.c, { className: m.yF }),
            ],
        });
    }
}
