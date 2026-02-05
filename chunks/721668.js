"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(235986),
    u = n(967626);
class c extends i.PureComponent {
    render() {
        let { note: e, title: t, action: n, className: i } = this.props;
        return (0, r.jsx)("div", {
            className: s()(u.iE, i),
            children: (0, r.jsxs)(l.A, {
                className: u.Bo,
                direction: l.A.Direction.VERTICAL,
                align: l.A.Align.CENTER,
                justify: l.A.Justify.CENTER,
                children: [
                    (0, r.jsx)(l.A.Child, { grow: 0, className: u.Sl }),
                    (0, r.jsxs)(l.A.Child, {
                        grow: 0,
                        className: u.Qq,
                        children: [
                            (0, r.jsx)(o.H, { className: u.DD, children: t }),
                            null != e ? (0, r.jsx)("div", { className: u.N4, children: e }) : null,
                        ],
                    }),
                    n,
                ],
            }),
        });
    }
}
let d = c;
