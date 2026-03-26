"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(398590),
    a = n(793574),
    o = n(688810),
    l = n(509536),
    u = n(361158),
    c = n(976860),
    d = n(979286),
    _ = n(652215),
    f = n(985018),
    p = n(104236);
let h = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, o.Ay)(),
        h = () => {
            t(),
                (0, c.pX)(_.BVt.COLLECTIBLES_SHOP),
                (0, d.Cz)({ analyticsSource: a.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
                (0, s.jH)(),
                (0, u.dF)(l.Zt);
        };
    return (0, r.jsxs)("div", {
        className: p.kL,
        children: [
            (0, r.jsx)("div", {
                className: p.Wk,
                children: (0, r.jsx)(i.U1X, { size: "custom", width: 20, height: 20, color: i.LU0.colors.WHITE }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                children: f.intl.format(f.t.twSHte, {
                    checkItOut: (e) => (0, r.jsx)(i.DUT, { className: p.nf, onClick: h, children: e }),
                }),
            }),
        ],
    });
};
