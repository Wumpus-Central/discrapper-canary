n.d(t, { Z: () => C });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(139117),
    a = n(481060),
    s = n(129861),
    o = n(607070),
    c = n(570928),
    u = n(388905),
    d = n(1585),
    p = n(125988),
    f = n(43267),
    h = n(699516),
    g = n(51144),
    m = n(998502),
    _ = n(620924),
    b = n(332712),
    E = n(81471),
    O = n(388032),
    y = n(418337);
let v = (e) => {
        let { userId: t } = e,
            n = (0, b.O)(t);
        return null == n || 0 === n.length
            ? (0, r.jsx)(a.Text, {
                  className: y.mutualGuilds,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: O.intl.string(O.t.jpY0X5),
              })
            : (0, r.jsxs)("div", {
                  className: y.mutualGuildsContainer,
                  children: [
                      (0, r.jsx)(l.Z, {
                          guilds: n,
                          maxGuilds: 3,
                          size: u.Vj.Sizes.SMOL,
                          hideOverflowCount: !0,
                      }),
                      (0, r.jsx)(a.Text, {
                          className: y.mutualGuilds,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: O.intl.format(O.t.eE3oep, { count: n.length }),
                      }),
                  ],
              });
    },
    I = m.ZP.getEnableHardwareAcceleration() ? a.Xo$ : a.qEK;
function C(e) {
    var t;
    let { channel: n, otherUser: l, active: u } = e,
        m = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        b = (0, i.e7)([h.Z], () => (null == l ? null : h.Z.getNickname(l.id))),
        C = !m && u,
        S = (0, _.c)(n),
        { avatarDecorationSrc: T } = (0, p.Z)({
            user: l,
            size: (0, d.y9)(a.EFr.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I, {
                className: y.avatar,
                src: (0, f.x)(n, 40, C),
                avatarDecoration: T,
                size: a.EFr.SIZE_40,
                "aria-label": null != (t = null == l ? void 0 : l.username) ? t : O.intl.string(O.t["30mdIx"]),
            }),
            (0, r.jsxs)("div", {
                className: y.userPreview,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.userContainerWithPreview,
                        children: [
                            (0, r.jsx)(s.Z, {
                                nick: b,
                                user: l,
                                showAccountIdentifier: !0,
                                className: y.tagContainer,
                                usernameClass: y.username,
                                discriminatorClass: null != g.ZP.getGlobalName(l) ? y.globalName : y.discriminator,
                            }),
                            (0, r.jsx)(a.Text, {
                                className: y.timestampWithPreview,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: S,
                            }),
                        ],
                    }),
                    (0, r.jsx)(c.Z, {
                        hoverText: (0, r.jsx)(E.Z, { channel: n }),
                        forceHover: u,
                        children: (0, r.jsx)(v, { userId: l.id }),
                    }),
                ],
            }),
        ],
    });
}
