"use strict";
n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(34188),
    s = n(827734),
    a = n(834730),
    o = n(939249),
    l = n(398590),
    u = n(793574),
    c = n(688810),
    d = n(509536),
    _ = n(361158),
    f = n(976860),
    p = n(979286),
    h = n(652215),
    E = n(985018),
    m = n(456508);
let g = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, c.Ay)(),
        g = () => {
            t(),
                (0, f.pX)(h.BVt.COLLECTIBLES_SHOP),
                (0, p.Cz)({ analyticsSource: u.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
                (0, l.jH)(),
                (0, _.dF)(d.Zt);
        };
    return (0, r.jsxs)("div", {
        className: m.kL,
        children: [
            (0, r.jsx)("div", {
                className: m.Wk,
                children: (0, r.jsx)(i.U, { size: "custom", width: 20, height: 20, color: s.A.colors.WHITE }),
            }),
            (0, r.jsx)(a.E, {
                variant: "text-sm/normal",
                children: E.intl.format(E.t.twSHte, {
                    checkItOut: (e) => (0, r.jsx)(o.D, { className: m.nf, onClick: g, children: e }),
                }),
            }),
        ],
    });
};
