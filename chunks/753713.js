n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(853390),
    s = n(246453);
function o(e) {
    let { start: t, end: n } = e,
        {
            elapsed: o,
            duration: l,
            percentage: c,
        } = (0, a.A)({
            start: t,
            end: n,
        });
    return (0, r.jsxs)("div", {
        className: s.kL,
        children: [
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                className: s.Qq,
                children: (0, a.f)(o),
            }),
            (0, r.jsx)("div", {
                className: s.M0,
                children: (0, r.jsx)("div", {
                    className: s.qB,
                    style: { width: "".concat(100 * c, "%") },
                }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                className: s.Qq,
                children: (0, a.f)(l),
            }),
        ],
    });
}
