r.d(n, { default: () => s });
var e = r(54381),
    i = r(793030),
    a = r(481060),
    o = r(701488),
    l = r(388032);
function s(t) {
    var { application: n, onCancel: r, onClose: s, onConfirm: c } = t,
        u = (function (t, n) {
            if (null == t) return {};
            var r,
                e,
                i = (function (t, n) {
                    if (null == t) return {};
                    var r,
                        e,
                        i = {},
                        a = Object.keys(t);
                    for (e = 0; e < a.length; e++) (r = a[e]), n.indexOf(r) >= 0 || (i[r] = t[r]);
                    return i;
                })(t, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (e = 0; e < a.length; e++)
                    (r = a[e]),
                        !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
            }
            return i;
        })(t, ["application", "onCancel", "onClose", "onConfirm"]);
    return (0, e.jsx)(i.Modal, {
        transitionState: u.transitionState,
        onClose: s,
        title: l.intl.string(l.t["06YebE"]),
        actions: [
            {
                text: l.intl.string(l.t["ETE/oC"]),
                onClick: () => {
                    r(), s();
                },
                variant: "secondary",
            },
            {
                text: l.intl.string(l.t["3PatSz"]),
                onClick: () => {
                    c(), s();
                },
                variant: "primary",
            },
        ],
        children: (0, e.jsxs)(a.Kqy, {
            children: [
                (0, e.jsxs)(a.Text, {
                    variant: "text-sm/normal",
                    children: [l.intl.format(l.t["s+WDGz"], { activityName: n.name }), " "],
                }),
                (0, e.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: (0, e.jsx)(a.Anchor, {
                        href: o.OF,
                        children: l.intl.string(l.t.E0gf5l),
                    }),
                }),
            ],
        }),
    });
}
