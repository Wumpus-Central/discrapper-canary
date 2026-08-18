"use strict";
n.d(t, { A: () => h });
var l = n(477900);
n(582128);
var i = n(320448),
    s = n(661531),
    r = n(192308),
    a = n(834730),
    o = n(286320),
    u = n(579245),
    c = n(778712),
    d = n(785787);
function h(e) {
    let { subtitle: t } = e,
        h = (0, o.b)();
    return (0, l.jsxs)("button", {
        className: d.kL,
        onClick: function () {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("499709"), n.e("403370"), n.e("569595")]).then(
                    n.bind(n, 526710),
                );
                return (t) => (0, l.jsx)(e, { ...t });
            });
        },
        children: [
            h.length > 1 &&
                (0, l.jsx)("div", {
                    className: d.zc,
                    children: h
                        .slice(0, 3)
                        .map((e, t, n) =>
                            (0, l.jsx)(u.n, { affinity: e, applyMask: t !== n.length - 1, size: c._3.SIZE_20 }, e.id),
                        ),
                }),
            (0, l.jsx)(a.E, { variant: "text-md/medium", color: "text-default", className: d.VA, children: t }),
            (0, l.jsx)(i._, { size: "sm", color: s.A.colors.INTERACTIVE_ICON_DEFAULT }),
        ],
    });
}
