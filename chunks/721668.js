n.d(t, { A: () => u });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(707554),
    o = n(235986),
    d = n(634236);
class c extends r.PureComponent {
    render() {
        let { note: e, title: t, action: n, className: r } = this.props;
        return (0, i.jsx)("div", {
            className: s()(d.iE, r),
            children: (0, i.jsxs)(o.A, {
                className: d.Bo,
                direction: o.A.Direction.VERTICAL,
                align: o.A.Align.CENTER,
                justify: o.A.Justify.CENTER,
                children: [
                    (0, i.jsx)(o.A.Child, { grow: 0, className: d.Sl }),
                    (0, i.jsxs)(o.A.Child, {
                        grow: 0,
                        className: d.Qq,
                        children: [
                            (0, i.jsx)(l.H, { className: d.DD, children: t }),
                            null != e ? (0, i.jsx)("div", { className: d.N4, children: e }) : null,
                        ],
                    }),
                    n,
                ],
            }),
        });
    }
}
let u = c;
