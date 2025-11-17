n.d(t, { y: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(388032),
    l = n(328310),
    c = n(818033);
let u = (e) => {
    let { children: t, footer: n, className: i } = e;
    return (0, r.jsx)("div", {
        className: a()(c.root, c.focusLock, c.small, c.rootWithShadow, l.modal, i),
        "aria-label": s.intl.string(s.t.eQ2bLp),
        children: (0, r.jsxs)("form", {
            className: l.form,
            onSubmit: (e) => {
                e.preventDefault();
            },
            children: [
                (0, r.jsx)(o.hzk, {
                    className: l.scrollerContent,
                    children: t,
                }),
                n,
            ],
        }),
    });
};
