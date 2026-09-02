n.d(e, { A: () => d });
var l = n(477900);
n(582128);
var r = n(320448),
    a = n(661531),
    i = n(192308),
    u = n(834730),
    s = n(286320),
    o = n(579245),
    f = n(778712),
    c = n(638010);
function d(t) {
    let { subtitle: e } = t,
        d = (0, s.b)();
    return (0, l.jsxs)("button", {
        className: c.kL,
        onClick: function () {
            (0, i.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                    n.e("133902"),
                    n.e("499709"),
                    n.e("403370"),
                    n.e("569595"),
                ]).then(n.bind(n, 526710));
                return (e) => (0, l.jsx)(t, { ...e });
            });
        },
        children: [
            d.length > 1 &&
                (0, l.jsx)("div", {
                    className: c.zc,
                    children: d
                        .slice(0, 3)
                        .map((t, e, n) =>
                            (0, l.jsx)(o.n, { affinity: t, applyMask: e !== n.length - 1, size: f._3.SIZE_20 }, t.id),
                        ),
                }),
            (0, l.jsx)(u.E, { variant: "text-md/medium", color: "text-default", className: c.VA, children: e }),
            (0, l.jsx)(r._, { size: "sm", color: a.A.colors.INTERACTIVE_ICON_DEFAULT }),
        ],
    });
}
