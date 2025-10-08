n.d(t, { Z: () => S });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(129861),
    o = n(607070),
    s = n(570928),
    c = n(388905),
    u = n(1585),
    d = n(125988),
    p = n(43267),
    f = n(522289),
    h = n(699516),
    g = n(51144),
    m = n(998502),
    b = n(620924),
    _ = n(332712),
    O = n(81471),
    E = n(388032),
    y = n(79072);
let v = (e) => {
        let { userId: t } = e,
            n = (0, _.O)(t);
        return null == n || 0 === n.length
            ? (0, r.jsx)(l.Text, {
                  className: y.mutualGuilds,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: E.intl.string(E.t.jpY0X1),
              })
            : (0, r.jsxs)("div", {
                  className: y.mutualGuildsContainer,
                  children: [
                      (0, r.jsx)(f.Z, {
                          guilds: n,
                          maxGuilds: 3,
                          size: c.Vj.Sizes.SMOL,
                          hideOverflowCount: !0,
                      }),
                      (0, r.jsx)(l.Text, {
                          className: y.mutualGuilds,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: E.intl.format(E.t.eE3oen, { count: n.length }),
                      }),
                  ],
              });
    },
    I = m.ZP.getEnableHardwareAcceleration() ? l.Xo$ : l.qEK;
function S(e) {
    var t;
    let { channel: n, otherUser: c, active: f } = e,
        m = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        _ = (0, i.e7)([h.Z], () => (null == c ? null : h.Z.getNickname(c.id))),
        S = !m && f,
        C = (0, b.c)(n),
        { avatarDecorationSrc: T } = (0, d.Z)({
            user: c,
            size: (0, u.y9)(l.EFr.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I, {
                className: y.avatar,
                src: (0, p.x)(n, 40, S),
                avatarDecoration: T,
                size: l.EFr.SIZE_40,
                "aria-label": null != (t = null == c ? void 0 : c.username) ? t : E.intl.string(E.t["30mdIy"]),
            }),
            (0, r.jsxs)("div", {
                className: y.userPreview,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.userContainerWithPreview,
                        children: [
                            (0, r.jsx)(a.Z, {
                                nick: _,
                                user: c,
                                showAccountIdentifier: !0,
                                className: y.tagContainer,
                                usernameClass: y.username,
                                discriminatorClass: null != g.ZP.getGlobalName(c) ? y.globalName : y.discriminator,
                            }),
                            (0, r.jsx)(l.Text, {
                                className: y.timestampWithPreview,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: C,
                            }),
                        ],
                    }),
                    (0, r.jsx)(s.Z, {
                        hoverText: (0, r.jsx)(O.Z, { channel: n }),
                        forceHover: f,
                        children: (0, r.jsx)(v, { userId: c.id }),
                    }),
                ],
            }),
        ],
    });
}
