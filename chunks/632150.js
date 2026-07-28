"use strict";
n.d(t, { A: () => _ });
var i = n(477900);
n(582128);
var r = n(320448),
    a = n(661531),
    s = n(192308),
    l = n(834730),
    o = n(286320),
    d = n(579245),
    c = n(778712),
    u = n(785787);
function _(e) {
    let { subtitle: t } = e,
        _ = (0, o.b)();
    return (0, i.jsxs)("button", {
        className: u.kL,
        onClick: function () {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("99709"), n.e("3370"), n.e("69595")]).then(
                    n.bind(n, 526710),
                );
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        children: [
            _.length > 1 &&
                (0, i.jsx)("div", {
                    className: u.zc,
                    children: _.slice(0, 3).map((e, t, n) =>
                        (0, i.jsx)(d.n, { affinity: e, applyMask: t !== n.length - 1, size: c._3.SIZE_20 }, e.id),
                    ),
                }),
            (0, i.jsx)(l.E, { variant: "text-md/medium", color: "text-default", className: u.VA, children: t }),
            (0, i.jsx)(r._, { size: "sm", color: a.A.colors.INTERACTIVE_ICON_DEFAULT }),
        ],
    });
}
