n.d(e, { default: () => f });
var r = n(951288),
    i = n(468194),
    o = n(793030),
    l = n(63063),
    a = n(49012),
    s = n(905551),
    c = n(619733),
    u = n(981631),
    p = n(45765),
    d = n(388032);
function f(t) {
    var { provider: e, onAccept: n } = t,
        f = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                i = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
            }
            return i;
        })(t, ["provider", "onAccept"]);
    return (0, r.jsx)(o.Modal, {
        title: d.intl.string(p.default.ny8Szc),
        subtitle: d.intl.format(p.default.D3STV1, {
            provider: (0, i.De)(e),
            providerUrl: () => (0, a.q)({ href: c.nd[e] }),
            helpCenterUrl: l.Z.getArticleURL(u.BhN.GAME_SERVER_HOSTING),
        }),
        size: "md",
        actions: [
            {
                text: d.intl.string(d.t["/g10LC"]),
                onClick: f.onClose,
                variant: "secondary",
            },
            {
                text: d.intl.string(p.default.K1xIXV),
                onClick: () => {
                    (0, s.WY)(!0, e), null == n || n(), f.onClose();
                },
                variant: "primary",
            },
        ],
        transitionState: f.transitionState,
        onClose: f.onClose,
    });
}
