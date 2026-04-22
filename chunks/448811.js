n.d(t, { A: () => E });
var l = n(627968);
n(64700);
var i = n(34188),
    a = n(827734),
    r = n(834730),
    s = n(939249),
    o = n(398590),
    u = n(793574),
    c = n(688810),
    d = n(509536),
    p = n(361158),
    m = n(976860),
    h = n(979286),
    A = n(652215),
    _ = n(985018),
    C = n(456508);
let E = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, c.Ay)(),
        E = () => {
            t(),
                (0, m.pX)(A.BVt.COLLECTIBLES_SHOP),
                (0, h.Cz)({ analyticsSource: u.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
                (0, o.jH)(),
                (0, p.dF)(d.Zt);
        };
    return (0, l.jsxs)("div", {
        className: C.kL,
        children: [
            (0, l.jsx)("div", {
                className: C.Wk,
                children: (0, l.jsx)(i.U, { size: "custom", width: 20, height: 20, color: a.A.colors.WHITE }),
            }),
            (0, l.jsx)(r.E, {
                variant: "text-sm/normal",
                children: _.intl.format(_.t.twSHte, {
                    checkItOut: (e) => (0, l.jsx)(s.D, { className: C.nf, onClick: E, children: e }),
                }),
            }),
        ],
    });
};
