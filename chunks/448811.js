n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(398590),
    s = n(793574),
    o = n(688810),
    l = n(976860),
    c = n(979286),
    u = n(652215),
    d = n(985018),
    f = n(732475);
let p = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, o.Ay)(),
        p = () => {
            t(),
                (0, l.pX)(u.BVt.COLLECTIBLES_SHOP),
                (0, c.Cz)({
                    analyticsSource: s.A.PREMIUM_PAYMENT_MODAL,
                    analyticsLocations: n,
                }),
                (0, a.jH)();
        };
    return (0, r.jsxs)("div", {
        className: f.kL,
        children: [
            (0, r.jsx)("div", {
                className: f.Wk,
                children: (0, r.jsx)(i.U1X, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: i.LU0.colors.WHITE,
                }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                children: d.intl.format(d.t.twSHte, {
                    checkItOut: (e) =>
                        (0, r.jsx)(i.DUT, {
                            className: f.nf,
                            onClick: p,
                            children: e,
                        }),
                }),
            }),
        ],
    });
};
