r.d(e, { default: () => p });
var n = r(951288),
    i = r(468194),
    o = r(793030),
    l = r(49012),
    s = r(744993),
    a = r(473682),
    c = r(401561),
    u = r(388032);
function p(t) {
    var { provider: e, onAccept: r } = t,
        p = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                i = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(t);
                    for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
                    return i;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (n = 0; n < o.length; n++)
                    (r = o[n]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
            }
            return i;
        })(t, ["provider", "onAccept"]);
    return (0, n.jsx)(o.Modal, {
        title: u.intl.string(c.default.bnsSPj),
        subtitle: u.intl.format(c.default.MaWfLi, {
            provider: (0, i.De)(e),
            providerUrl: () => (0, l.q)({ href: a.Q_[e] }),
            helpCenterUrl: "https://support.discord.com/hc/en-us/articles/35370817986839/",
        }),
        size: "md",
        actions: [
            {
                text: u.intl.string(u.t["/g10LC"]),
                onClick: p.onClose,
                variant: "secondary",
            },
            {
                text: u.intl.string(c.default.IfMFoK),
                onClick: () => {
                    (0, s.g$)(!0, e), null == r || r(), p.onClose();
                },
                variant: "primary",
            },
        ],
        transitionState: p.transitionState,
        onClose: p.onClose,
    });
}
