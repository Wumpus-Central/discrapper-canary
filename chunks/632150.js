a.d(s, { A: () => h });
var t = a(627968);
a(64700);
var i = a(320448),
    n = a(661531),
    l = a(192308),
    c = a(834730),
    r = a(286320),
    d = a(579245),
    o = a(778712),
    u = a(123139);
function h(e) {
    let { subtitle: s } = e,
        h = (0, r.b)();
    return (0, t.jsxs)("button", {
        className: u.kL,
        onClick: function () {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await Promise.all([a.e("33902"), a.e("99709"), a.e("3370"), a.e("69595")]).then(
                    a.bind(a, 526710),
                );
                return (s) => (0, t.jsx)(e, { ...s });
            });
        },
        children: [
            h.length > 1 &&
                (0, t.jsx)("div", {
                    className: u.zc,
                    children: h
                        .slice(0, 3)
                        .map((e, s, a) =>
                            (0, t.jsx)(d.n, { affinity: e, applyMask: s !== a.length - 1, size: o._3.SIZE_20 }, e.id),
                        ),
                }),
            (0, t.jsx)(c.E, { variant: "text-md/medium", color: "text-default", className: u.VA, children: s }),
            (0, t.jsx)(i._, { size: "sm", color: n.A.colors.INTERACTIVE_ICON_DEFAULT }),
        ],
    });
}
