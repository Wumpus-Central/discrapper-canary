"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(320448),
    s = n(661531),
    a = n(192308),
    o = n(834730),
    l = n(286320),
    d = n(224850),
    _ = n(778712),
    u = n(123139);
function c(e) {
    let { subtitle: t } = e,
        c = (0, l.b)();
    return (0, i.jsxs)("button", {
        className: u.kL,
        onClick: function () {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        children: [
            c.length > 1 &&
                (0, i.jsx)("div", {
                    className: u.zc,
                    children: c
                        .slice(0, 3)
                        .map((e, t, n) =>
                            (0, i.jsx)(d.n, { affinity: e, applyMask: t !== n.length - 1, size: _._3.SIZE_20 }, e.id),
                        ),
                }),
            (0, i.jsx)(o.E, { variant: "text-md/medium", color: "text-default", className: u.VA, children: t }),
            (0, i.jsx)(r._, { size: "sm", color: s.A.colors.INTERACTIVE_ICON_DEFAULT }),
        ],
    });
}
