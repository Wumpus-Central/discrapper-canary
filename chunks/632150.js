s.d(a, { A: () => m });
var i = s(627968);
s(64700);
var n = s(320448),
    t = s(661531),
    l = s(192308),
    r = s(834730),
    c = s(286320),
    o = s(224850),
    d = s(778712),
    u = s(123139);
function m(e) {
    let { subtitle: a } = e,
        m = (0, c.b)();
    return (0, i.jsxs)("button", {
        className: u.kL,
        onClick: function () {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("33902"), s.e("3370"), s.e("99709"), s.e("69595")]).then(
                    s.bind(s, 526710),
                );
                return (a) => (0, i.jsx)(e, { ...a });
            });
        },
        children: [
            m.length > 1 &&
                (0, i.jsx)("div", {
                    className: u.zc,
                    children: m
                        .slice(0, 3)
                        .map((e, a, s) =>
                            (0, i.jsx)(o.n, { affinity: e, applyMask: a !== s.length - 1, size: d._3.SIZE_20 }, e.id),
                        ),
                }),
            (0, i.jsx)(r.E, { variant: "text-md/medium", color: "text-default", className: u.VA, children: a }),
            (0, i.jsx)(n._, { size: "sm", color: t.A.colors.INTERACTIVE_ICON_DEFAULT }),
        ],
    });
}
