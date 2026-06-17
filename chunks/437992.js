n.d(t, { A: () => x });
var l = n(627968),
    i = n(123292),
    s = n(834730),
    a = n(793574),
    r = n(688810),
    o = n(359800),
    d = n(46225),
    c = n(137177),
    u = n(559965),
    m = n(375708),
    h = n(215965);
function x(e) {
    let t,
        { application: n, size: x = "md" } = e,
        { analyticsLocations: g } = (0, r.Ay)(a.A.GAME_INVITE_CHANNEL_ACCOUNT_LINK_BANNER),
        { canStartAuthorization: f, hasAlreadyLinked: j, startAuthorization: v, fetched: p } = (0, d.RD)(n),
        A = (0, o.z)(v, j);
    if (!p || !f || j) return null;
    let C = !1;
    return (
        "sm" === x
            ? (t = m.intl.format(u.default.vznMVa, { onClick: () => A({ analyticsLocations: g }) }))
            : ((t = m.intl.string(u.default.UHF2Zn)), (C = !0)),
        (0, l.jsxs)("div", {
            className: h._,
            children: [
                (0, l.jsx)(c.A, { game: n, size: c.M.MEDIUM }),
                (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", className: h.d, children: t }),
                C
                    ? (0, l.jsx)(i.Q, {
                          variant: "primary",
                          size: "sm",
                          text: m.intl.string(u.default.EBSaL4),
                          onClick: () => A({ analyticsLocations: g }),
                      })
                    : null,
            ],
        })
    );
}
