n.d(t, {
    A: () => p,
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(827734),
    o = n(397927),
    d = n(235986),
    c = n(603349),
    u = n(518959);
let m = ["firCount", "nackCount"];
class p extends a.PureComponent {
    renderValueIcon() {
        let { label: e } = this.props;
        return m.includes(e)
            ? (0, r.jsx)(c.A, {
                  color: s.A.unsafe_rawColors.YELLOW_300.css,
                  className: u.nm,
              })
            : null;
    }
    render() {
        let { children: e, className: t, valueRendered: n, section: a, label: i, renderGraph: s } = this.props;
        return (0, r.jsxs)(d.A, {
            className: l()(u.AS, t),
            direction: d.A.Direction.VERTICAL,
            basis: "50%",
            children: [
                (0, r.jsxs)(d.A, {
                    className: u.l5,
                    align: d.A.Align.START,
                    children: [
                        (0, r.jsx)(d.A.Child, {
                            children: (0, r.jsx)(o.H, {
                                className: u.DD,
                                children: e,
                            }),
                        }),
                        Array.isArray(n)
                            ? (0, r.jsx)(d.A.Child, {
                                  grow: 1,
                                  children: n,
                              })
                            : (0, r.jsxs)(d.A.Child, {
                                  grow: 0,
                                  shrink: 0,
                                  children: [
                                      this.renderValueIcon(),
                                      (0, r.jsx)("span", {
                                          className: u.R$,
                                          title: n,
                                          children: n,
                                      }),
                                  ],
                              }),
                    ],
                }),
                null !== s &&
                    (0, r.jsx)(
                        d.A.Child,
                        {
                            className: u.JB,
                            children: s,
                        },
                        null != a ? "".concat(a, "-").concat(i) : i,
                    ),
                (0, r.jsx)(o.cGx, {
                    className: u.yF,
                }),
            ],
        });
    }
}
