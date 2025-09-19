n.d(e, { default: () => s });
var r = n(951288),
    o = n(82659),
    i = n(744993),
    l = n(401561),
    a = n(388032);
function s(t) {
    var { provider: e, onAccept: n } = t,
        s = (function (t, e) {
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
        })(t, ["provider", "onAccept"]);
    return (0, r.jsx)(o.Modal, {
        title: a.intl.string(l.default.bnsSPj),
        subtitle: a.intl.format(l.default.MaWfLi, {
            provider: e,
            providerUrl: "https://google.com/terms-of-service",
        }),
        size: "md",
        actions: [
            {
                text: a.intl.string(a.t["/g10LC"]),
                onClick: s.onClose,
                variant: "secondary",
            },
            {
                text: a.intl.string(l.default.IfMFoK),
                onClick: () => {
                    (0, i.g$)(!0, e), null == n || n(), s.onClose();
                },
                variant: "primary",
            },
        ],
        transitionState: s.transitionState,
        onClose: s.onClose,
    });
}
