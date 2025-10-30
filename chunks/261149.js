n.d(e, { default: () => f });
var r = n(951288),
    i = n(468194),
    o = n(793030),
    l = n(63063),
    a = n(49012),
    s = n(905551),
    u = n(619733),
    c = n(981631),
    d = n(97200),
    p = n(388032);
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
        title: p.intl.string(d.default.ny8Szd),
        subtitle: p.intl.format(d.default.D3STVx, {
            provider: (0, i.De)(e),
            providerUrl: () => (0, a.q)({ href: u.nd[e] }),
            helpCenterUrl: l.Z.getArticleURL(c.BhN.GAME_SERVER_HOSTING),
        }),
        size: "md",
        actions: [
            {
                text: p.intl.string(p.t["/g10LC"]),
                onClick: f.onClose,
                variant: "secondary",
            },
            {
                text: p.intl.string(d.default.K1xIXf),
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
