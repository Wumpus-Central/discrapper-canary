"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(398590),
    s = n(793574),
    o = n(688810),
    l = n(976860),
    u = n(979286),
    c = n(652215),
    d = n(985018),
    _ = n(732475);
let f = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, o.Ay)(),
        f = () => {
            t(),
                (0, l.pX)(c.BVt.COLLECTIBLES_SHOP),
                (0, u.Cz)({ analyticsSource: s.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
                (0, a.jH)();
        };
    return (0, r.jsxs)("div", {
        className: _.kL,
        children: [
            (0, r.jsx)("div", {
                className: _.Wk,
                children: (0, r.jsx)(i.U1X, { size: "custom", width: 20, height: 20, color: i.LU0.colors.WHITE }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                children: d.intl.format(d.t.twSHte, {
                    checkItOut: (e) => (0, r.jsx)(i.DUT, { className: _.nf, onClick: f, children: e }),
                }),
            }),
        ],
    });
};
