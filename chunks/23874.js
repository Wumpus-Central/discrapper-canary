i.d(e, { default: () => C });
var n = i(627968),
    r = i(23339),
    a = i(189213),
    l = i(975571),
    o = i(123917),
    s = i(396748),
    d = i(800007),
    p = i(652215),
    c = i(576709),
    u = i(375708);
function C(t) {
    let { provider: e, onAccept: i, ...C } = t;
    return (0, n.jsx)(a.Modal, {
        title: u.intl.string(c.default.ny8Szd),
        subtitle: u.intl.format(c.default.D3STVx, {
            provider: (0, r.$G)(e),
            providerUrl: () => (0, o.h)({ href: d.eh[e] }),
            helpCenterUrl: l.A.getArticleURL(p.MVz.GAME_SERVER_HOSTING),
        }),
        size: "md",
        actions: [
            { text: u.intl.string(u.t["/g10LC"]), onClick: C.onClose, variant: "secondary" },
            {
                text: u.intl.string(c.default.K1xIXf),
                onClick: () => {
                    (0, s.Wp)(!0, e), i?.(), C.onClose();
                },
                variant: "primary",
            },
        ],
        transitionState: C.transitionState,
        onClose: C.onClose,
    });
}
