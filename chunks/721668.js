n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(235986),
    c = n(967626);
class u extends i.PureComponent {
    render() {
        let { note: e, title: t, action: n, className: i } = this.props;
        return (0, r.jsx)("div", {
            className: s()(c.iE, i),
            children: (0, r.jsxs)(l.A, {
                className: c.Bo,
                direction: l.A.Direction.VERTICAL,
                align: l.A.Align.CENTER,
                justify: l.A.Justify.CENTER,
                children: [
                    (0, r.jsx)(l.A.Child, {
                        grow: 0,
                        className: c.Sl,
                    }),
                    (0, r.jsxs)(l.A.Child, {
                        grow: 0,
                        className: c.Qq,
                        children: [
                            (0, r.jsx)(o.H, {
                                className: c.DD,
                                children: t,
                            }),
                            null != e
                                ? (0, r.jsx)("div", {
                                      className: c.N4,
                                      children: e,
                                  })
                                : null,
                        ],
                    }),
                    n,
                ],
            }),
        });
    }
}
let d = u;
