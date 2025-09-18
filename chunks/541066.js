n.d(e, { default: () => s });
var r = n(951288),
    o = n(82659),
    i = n(744993),
    l = n(401561),
    a = n(388032);
function s(t) {
    var { onAccept: e } = t,
        n = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
            }
            return o;
        })(t, ["onAccept"]);
    return (0, r.jsx)(o.Modal, {
        title: a.intl.string(l.default.bnsSPj),
        subtitle: a.intl.format(l.default.MaWfLi, {
            provider: "Portkey",
            providerUrl: "https://google.com/terms-of-service",
        }),
        size: "md",
        actions: [
            {
                text: a.intl.string(a.t["/g10LC"]),
                onClick: n.onClose,
                variant: "secondary",
            },
            {
                text: a.intl.string(l.default.IfMFoK),
                onClick: () => {
                    (0, i.g$)(!0, "Portkey"), null == e || e(), n.onClose();
                },
                variant: "primary",
            },
        ],
        transitionState: n.transitionState,
        onClose: n.onClose,
    });
}
