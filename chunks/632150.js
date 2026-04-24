"use strict";
n.d(t, { A: () => h });
var l = n(627968);
n(64700);
var i = n(320448),
    s = n(661531),
    a = n(192308),
    r = n(834730),
    o = n(286320),
    c = n(224850),
    u = n(778712),
    d = n(123139);
function h(e) {
    let { subtitle: t } = e,
        h = (0, o.b)();
    return (0, l.jsxs)("button", {
        className: d.kL,
        onClick: function () {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e("91976").then(n.bind(n, 526710));
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
                            (0, l.jsx)(c.n, { affinity: e, applyMask: t !== n.length - 1, size: u._3.SIZE_20 }, e.id),
                        ),
                }),
            (0, l.jsx)(r.E, { variant: "text-md/medium", color: "text-default", className: d.VA, children: t }),
            (0, l.jsx)(i._, { size: "sm", color: s.A.colors.INTERACTIVE_ICON_DEFAULT }),
        ],
    });
}
