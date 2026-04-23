"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(320448),
    s = n(827734),
    a = n(192308),
    o = n(834730),
    l = n(848245),
    u = n(224850),
    c = n(778712),
    d = n(123139);
function _(e) {
    let { subtitle: t } = e,
        _ = (0, l.b)();
    return (0, r.jsxs)("button", {
        className: d.kL,
        onClick: function () {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e("69595").then(n.bind(n, 526710));
                return (t) => (0, r.jsx)(e, { ...t });
            });
        },
        children: [
            _.length > 1 &&
                (0, r.jsx)("div", {
                    className: d.zc,
                    children: _.slice(0, 3).map((e, t, n) =>
                        (0, r.jsx)(u.n, { affinity: e, applyMask: t !== n.length - 1, size: c._3.SIZE_20 }, e.id),
                    ),
                }),
            (0, r.jsx)(o.E, { variant: "text-md/medium", color: "text-default", className: d.VA, children: t }),
            (0, r.jsx)(i._, { size: "sm", color: s.A.colors.INTERACTIVE_ICON_DEFAULT }),
        ],
    });
}
