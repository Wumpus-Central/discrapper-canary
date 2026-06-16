"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(707554),
    l = n(235986),
    u = n(700817);
class c extends r.PureComponent {
    render() {
        let { note: e, title: t, action: n, className: r } = this.props;
        return (0, i.jsx)("div", {
            className: a()(u.iE, r),
            children: (0, i.jsxs)(l.A, {
                className: u.Bo,
                direction: l.A.Direction.VERTICAL,
                align: l.A.Align.CENTER,
                justify: l.A.Justify.CENTER,
                children: [
                    (0, i.jsx)(l.A.Child, { grow: 0, className: u.Sl }),
                    (0, i.jsxs)(l.A.Child, {
                        grow: 0,
                        className: u.Qq,
                        children: [
                            (0, i.jsx)(o.H, { className: u.DD, children: t }),
                            null != e ? (0, i.jsx)("div", { className: u.N4, children: e }) : null,
                        ],
                    }),
                    n,
                ],
            }),
        });
    }
}
let d = c;
