r.d(e, { default: () => u });
var n = r(951288),
    o = r(763600),
    i = r(468194),
    l = r(793030),
    s = r(49012),
    a = r(744993),
    c = r(401561),
    p = r(388032);
function u(t) {
    var { provider: e, onAccept: r } = t,
        u = (function (t, e) {
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
        title: p.intl.string(c.default.bnsSPj),
        subtitle: p.intl.format(c.default.MaWfLi, {
            provider: (0, i.De)(e),
            providerUrl: () =>
                (0, s.q)({ href: e === o.Z.SHOCKBYTE ? "https://shockbyte.com/legal/acceptable-use-policy" : "" }),
            helpCenterUrl: "https://support.discord.com/hc/en-us/articles/35370817986839/",
        }),
        size: "md",
        actions: [
            {
                text: p.intl.string(p.t["/g10LC"]),
                onClick: u.onClose,
                variant: "secondary",
            },
            {
                text: p.intl.string(c.default.IfMFoK),
                onClick: () => {
                    (0, a.g$)(!0, e), null == r || r(), u.onClose();
                },
                variant: "primary",
            },
        ],
        transitionState: u.transitionState,
        onClose: u.onClose,
    });
}
