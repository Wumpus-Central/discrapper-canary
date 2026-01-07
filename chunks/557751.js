e.d(n, { default: () => s });
var r = e(54381),
    i = e(793030),
    a = e(481060),
    o = e(701488),
    l = e(388032);
function s(t) {
    var { application: n, onCancel: e, onClose: s, onConfirm: c } = t,
        u = (function (t, n) {
            if (null == t) return {};
            var e,
                r,
                i = (function (t, n) {
                    if (null == t) return {};
                    var e,
                        r,
                        i = {},
                        a = Object.keys(t);
                    for (r = 0; r < a.length; r++) (e = a[r]), n.indexOf(e) >= 0 || (i[e] = t[e]);
                    return i;
                })(t, n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (r = 0; r < a.length; r++)
                    (e = a[r]),
                        !(n.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (i[e] = t[e]);
            }
            return i;
        })(t, ["application", "onCancel", "onClose", "onConfirm"]);
    return (0, r.jsx)(i.Modal, {
        transitionState: u.transitionState,
        onClose: s,
        title: l.intl.string(l.t["06YebE"]),
        actions: [
            {
                text: l.intl.string(l.t["ETE/oC"]),
                onClick: () => {
                    e(), s();
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
        children: (0, r.jsxs)(a.Kqy, {
            children: [
                (0, r.jsxs)(a.Text, {
                    variant: "text-sm/normal",
                    children: [l.intl.format(l.t["s+WDGz"], { activityName: n.name }), " "],
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: (0, r.jsx)(a.eee, {
                        href: o.OF,
                        children: l.intl.string(l.t.E0gf5l),
                    }),
                }),
            ],
        }),
    });
}
