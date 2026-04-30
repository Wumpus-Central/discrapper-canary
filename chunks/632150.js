"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(320448),
    s = n(661531),
    a = n(192308),
    o = n(834730),
    l = n(286320),
    u = n(224850),
    c = n(778712),
    d = n(123139);
function _(e) {
    let { subtitle: t } = e,
        _ = (0, l.b)();
    return (0, i.jsxs)("button", {
        className: d.kL,
        onClick: function () {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("33902"), n.e("99709"), n.e("3370"), n.e("69595")]).then(
                    n.bind(n, 526710),
                );
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        children: [
            _.length > 1 &&
                (0, i.jsx)("div", {
                    className: d.zc,
                    children: _.slice(0, 3).map((e, t, n) =>
                        (0, i.jsx)(u.n, { affinity: e, applyMask: t !== n.length - 1, size: c._3.SIZE_20 }, e.id),
                    ),
                }),
            (0, i.jsx)(o.E, { variant: "text-md/medium", color: "text-default", className: d.VA, children: t }),
            (0, i.jsx)(r._, { size: "sm", color: s.A.colors.INTERACTIVE_ICON_DEFAULT }),
        ],
    });
}
