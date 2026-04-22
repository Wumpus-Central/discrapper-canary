r.d(t, { A: () => h });
var n = r(627968);
r(64700);
var s = r(935462),
    i = r(534514),
    l = r(834730),
    a = r(283900),
    c = r(475833),
    d = r(602339),
    o = r(985018),
    u = r(903310);
let x = (e) => {
    let { children: t, className: r, ...i } = e;
    return (0, n.jsx)(s.EO, {
        "data-migration-pending": !0,
        className: r,
        ...i,
        parentComponent: "FamilyCenterCommonModal",
        children: t,
    });
};
(x.ButtonFooter = (e) => {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: u.qr, children: t });
}),
    (x.Header = (e) => {
        let { icon: t, currentUser: r, otherUser: s, header: l } = e;
        return (0, n.jsxs)("div", {
            className: u.wx,
            children: [
                (0, n.jsx)(a.A, { currentUser: r, otherUser: s, children: t }),
                (0, n.jsxs)("div", {
                    className: u.R_,
                    children: [(0, n.jsx)(i.D, { variant: "text-lg/bold", children: l }), (0, n.jsx)(c.A, { user: s })],
                }),
            ],
        });
    }),
    (x.Content = (e) => {
        let { children: t } = e;
        return (0, n.jsx)("div", { className: u.Qs, children: t });
    }),
    (x.Notice = (e) => {
        let { notice: t } = e;
        return (0, n.jsxs)("div", {
            className: u.lm,
            children: [
                (0, n.jsx)(l.E, {
                    variant: "eyebrow",
                    color: "text-strong",
                    children: o.intl.string(d.default.cXgKMD),
                }),
                (0, n.jsx)(l.E, { variant: "text-sm/normal", color: "text-default", children: t }),
            ],
        });
    });
let h = x;
