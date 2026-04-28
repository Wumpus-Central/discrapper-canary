n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var a = n(320448),
    l = n(661531),
    i = n(192308),
    s = n(834730),
    o = n(286320),
    c = n(224850),
    E = n(778712),
    _ = n(123139);
function A(e) {
    let { subtitle: t } = e,
        A = (0, o.b)();
    return (0, r.jsxs)("button", {
        className: _.kL,
        onClick: function () {
            (0, i.openModalLazy)(async () => {
                let { default: e } = await n.e("91976").then(n.bind(n, 526710));
                return (t) => (0, r.jsx)(e, { ...t });
            });
        },
        children: [
            A.length > 1 &&
                (0, r.jsx)("div", {
                    className: _.zc,
                    children: A.slice(0, 3).map((e, t, n) =>
                        (0, r.jsx)(c.n, { affinity: e, applyMask: t !== n.length - 1, size: E._3.SIZE_20 }, e.id),
                    ),
                }),
            (0, r.jsx)(s.E, { variant: "text-md/medium", color: "text-default", className: _.VA, children: t }),
            (0, r.jsx)(a._, { size: "sm", color: l.A.colors.INTERACTIVE_ICON_DEFAULT }),
        ],
    });
}
