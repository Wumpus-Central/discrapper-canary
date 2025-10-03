r.d(e, { default: () => p });
var n = r(951288),
    o = r(763600),
    i = r(468194),
    l = r(793030),
    s = r(49012),
    a = r(744993),
    c = r(401561),
    u = r(388032);
function p(t) {
    var { provider: e, onAccept: r } = t,
        p = (function (t, e) {
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
    return (0, n.jsx)(l.Modal, {
        title: u.intl.string(c.default.bnsSPj),
        subtitle: u.intl.format(c.default.MaWfLi, {
            provider: (0, i.De)(e),
            providerUrl: () =>
                (0, s.q)({ href: e === o.Z.SHOCKBYTE ? "https://shockbyte.com/legal/acceptable-use-policy" : "" }),
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
                    (0, a.g$)(!0, e), null == r || r(), p.onClose();
                },
                variant: "primary",
            },
        ],
        transitionState: p.transitionState,
        onClose: p.onClose,
    });
}
