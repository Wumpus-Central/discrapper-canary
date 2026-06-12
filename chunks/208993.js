t.d(r, { A: () => m });
var s = t(627968);
t(64700);
var n = t(935462),
    a = t(534514),
    l = t(834730),
    i = t(283900),
    d = t(475833),
    c = t(602339),
    o = t(375708),
    h = t(903310);
let x = (e) => {
    let { children: r, className: t, ...a } = e;
    return (0, s.jsx)(n.EO, {
        "data-migration-pending": !0,
        className: t,
        ...a,
        parentComponent: "FamilyCenterCommonModal",
        children: r,
    });
};
(x.ButtonFooter = (e) => {
    let { children: r } = e;
    return (0, s.jsx)("div", { className: h.qr, children: r });
}),
    (x.Header = (e) => {
        let { icon: r, currentUser: t, otherUser: n, header: l } = e;
        return (0, s.jsxs)("div", {
            className: h.wx,
            children: [
                (0, s.jsx)(i.A, { currentUser: t, otherUser: n, children: r }),
                (0, s.jsxs)("div", {
                    className: h.R_,
                    children: [(0, s.jsx)(a.D, { variant: "text-lg/bold", children: l }), (0, s.jsx)(d.A, { user: n })],
                }),
            ],
        });
    }),
    (x.Content = (e) => {
        let { children: r } = e;
        return (0, s.jsx)("div", { className: h.Qs, children: r });
    }),
    (x.Notice = (e) => {
        let { notice: r } = e;
        return (0, s.jsxs)("div", {
            className: h.lm,
            children: [
                (0, s.jsx)(l.E, {
                    variant: "eyebrow",
                    color: "text-strong",
                    children: o.intl.string(c.default.cXgKMD),
                }),
                (0, s.jsx)(l.E, { variant: "text-sm/normal", color: "text-default", children: r }),
            ],
        });
    });
let m = x;
