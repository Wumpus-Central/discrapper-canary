n.d(t, { A: () => x });
var l = n(627968),
    i = n(123292),
    s = n(834730),
    a = n(793574),
    r = n(688810),
    o = n(359800),
    c = n(206828),
    d = n(769015),
    u = n(774418),
    m = n(375708),
    h = n(27549);
function x(e) {
    let t,
        { application: n, size: x = "md", analyticsLocation: g = a.A.GAME_INVITE_CHANNEL_ACCOUNT_LINK_BANNER } = e,
        { analyticsLocations: f } = (0, r.Ay)(g),
        { canStartAuthorization: j, hasAlreadyLinked: v, startAuthorization: p, fetched: A } = (0, c.RD)(n),
        C = (0, o.z)(p, v);
    if (!A || !j || v) return null;
    let N = !1;
    return (
        "sm" === x
            ? (t = m.intl.format(u.default.vznMVa, { onClick: () => C({ analyticsLocations: f }) }))
            : ((t = m.intl.string(u.default.UHF2Zn)), (N = !0)),
        (0, l.jsxs)("div", {
            className: h._,
            children: [
                (0, l.jsx)(d.A, { game: n, size: d.M.MEDIUM }),
                (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", className: h.d, children: t }),
                N
                    ? (0, l.jsx)(i.Q, {
                          variant: "primary",
                          size: "sm",
                          text: m.intl.string(u.default.EBSaL4),
                          onClick: () => C({ analyticsLocations: f }),
                      })
                    : null,
            ],
        })
    );
}
