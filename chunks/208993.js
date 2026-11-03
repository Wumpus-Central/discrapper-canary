r.d(n, { A: () => h });
var t = r(477900);
r(582128);
var s = r(935462),
    i = r(534514),
    a = r(834730),
    l = r(283900),
    c = r(475833),
    d = r(83152),
    o = r(105292),
    u = r(170219);
function m(e) {
    let { children: n, className: r, ...i } = e;
    return (0, t.jsx)(s.EO, {
        "data-migration-pending": !0,
        className: r,
        ...i,
        parentComponent: "FamilyCenterCommonModal",
        children: n,
    });
}
((m.ButtonFooter = function (e) {
    let { children: n } = e;
    return (0, t.jsx)("div", { className: u.qr, children: n });
}),
    (m.Header = function (e) {
        let { icon: n, currentUser: r, otherUser: s, header: a } = e;
        return (0, t.jsxs)("div", {
            className: u.wx,
            children: [
                (0, t.jsx)(l.A, { currentUser: r, otherUser: s, children: n }),
                (0, t.jsxs)("div", {
                    className: u.R_,
                    children: [
                        (0, t.jsx)(i.D, { variant: "body-lg/semibold", children: a }),
                        (0, t.jsx)(c.A, { user: s }),
                    ],
                }),
            ],
        });
    }),
    (m.Content = function (e) {
        let { children: n } = e;
        return (0, t.jsx)("div", { className: u.Qs, children: n });
    }),
    (m.Notice = function (e) {
        let { notice: n } = e;
        return (0, t.jsxs)("div", {
            className: u.lm,
            children: [
                (0, t.jsx)(a.E, {
                    variant: "body-sm/medium",
                    color: "text-strong",
                    children: o.intl.string(d.default.cXgKMD),
                }),
                (0, t.jsx)(a.E, { variant: "body-sm/normal", color: "text-default", children: n }),
            ],
        });
    }));
let h = m;
