r.d(e, { default: () => c });
var n = r(951288),
    o = r(793030),
    i = r(49012),
    l = r(744993),
    s = r(401561),
    a = r(388032);
function c(t) {
    var { provider: e, onAccept: r } = t,
        c = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            }
            return o;
        })(t, ["provider", "onAccept"]);
    return (0, n.jsx)(o.Modal, {
        title: a.intl.string(s.default.bnsSPj),
        subtitle: a.intl.format(s.default.MaWfLi, {
            provider: e,
            providerUrl: () => (0, i.q)({ href: "https://google.com/terms-of-service" }),
            helpCenterUrl: "https://google.com/help-center",
        }),
        size: "md",
        actions: [
            {
                text: a.intl.string(a.t["/g10LC"]),
                onClick: c.onClose,
                variant: "secondary",
            },
            {
                text: a.intl.string(s.default.IfMFoK),
                onClick: () => {
                    (0, l.g$)(!0, e), null == r || r(), c.onClose();
                },
                variant: "primary",
            },
        ],
        transitionState: c.transitionState,
        onClose: c.onClose,
    });
}
