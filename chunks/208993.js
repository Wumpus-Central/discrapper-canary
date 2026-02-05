r.d(t, { A: () => u });
var n = r(627968);
r(64700);
var s = r(397927),
    i = r(283900),
    l = r(475833),
    a = r(842130),
    c = r(985018),
    d = r(195357);
let o = (e) => {
    let { children: t, className: r, ...i } = e;
    return (0, n.jsx)(s.EOs, {
        "data-migration-pending": !0,
        className: r,
        ...i,
        parentComponent: "FamilyCenterCommonModal",
        children: t,
    });
};
(o.ButtonFooter = (e) => {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: d.qr, children: t });
}),
    (o.Header = (e) => {
        let { icon: t, currentUser: r, otherUser: a, header: c } = e;
        return (0, n.jsxs)("div", {
            className: d.wx,
            children: [
                (0, n.jsx)(i.A, { currentUser: r, otherUser: a, children: t }),
                (0, n.jsxs)("div", {
                    className: d.R_,
                    children: [
                        (0, n.jsx)(s.Heading, { variant: "text-lg/bold", children: c }),
                        (0, n.jsx)(l.A, { user: a }),
                    ],
                }),
            ],
        });
    }),
    (o.Content = (e) => {
        let { children: t } = e;
        return (0, n.jsx)("div", { className: d.Qs, children: t });
    }),
    (o.Notice = (e) => {
        let { notice: t } = e;
        return (0, n.jsxs)("div", {
            className: d.lm,
            children: [
                (0, n.jsx)(s.Text, {
                    variant: "eyebrow",
                    color: "text-strong",
                    children: c.intl.string(a.default.cXgKMD),
                }),
                (0, n.jsx)(s.Text, { variant: "text-sm/normal", color: "text-default", children: t }),
            ],
        });
    });
let u = o;
