n.d(t, { A: () => x });
var r = n(627968);
n(64700);
var s = n(935462),
    i = n(534514),
    a = n(834730),
    l = n(283900),
    c = n(475833),
    d = n(602339),
    o = n(375708),
    u = n(903310);
function h(e) {
    let { children: t, className: n, ...i } = e;
    return (0, r.jsx)(s.EO, {
        "data-migration-pending": !0,
        className: n,
        ...i,
        parentComponent: "FamilyCenterCommonModal",
        children: t,
    });
}
(h.ButtonFooter = function (e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: u.qr, children: t });
}),
    (h.Header = function (e) {
        let { icon: t, currentUser: n, otherUser: s, header: a } = e;
        return (0, r.jsxs)("div", {
            className: u.wx,
            children: [
                (0, r.jsx)(l.A, { currentUser: n, otherUser: s, children: t }),
                (0, r.jsxs)("div", {
                    className: u.R_,
                    children: [(0, r.jsx)(i.D, { variant: "text-lg/bold", children: a }), (0, r.jsx)(c.A, { user: s })],
                }),
            ],
        });
    }),
    (h.Content = function (e) {
        let { children: t } = e;
        return (0, r.jsx)("div", { className: u.Qs, children: t });
    }),
    (h.Notice = function (e) {
        let { notice: t } = e;
        return (0, r.jsxs)("div", {
            className: u.lm,
            children: [
                (0, r.jsx)(a.E, {
                    variant: "eyebrow",
                    color: "text-strong",
                    children: o.intl.string(d.default.cXgKMD),
                }),
                (0, r.jsx)(a.E, { variant: "text-sm/normal", color: "text-default", children: t }),
            ],
        });
    });
let x = h;
