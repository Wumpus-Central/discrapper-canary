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
    m = n(699516),
    h = n(51144),
    g = n(998502),
    _ = n(620924),
    b = n(332712),
    E = n(81471),
    O = n(388032),
    I = n(418337);
let y = (e) => {
        let { userId: t } = e,
            n = (0, b.O)(t);
        return null == n || 0 === n.length
            ? (0, r.jsx)(a.Text, {
                  className: I.mutualGuilds,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: O.intl.string(O.t.jpY0X5),
              })
            : (0, r.jsxs)("div", {
                  className: I.mutualGuildsContainer,
                  children: [
                      (0, r.jsx)(l.Z, {
                          guilds: n,
                          maxGuilds: 3,
                          size: u.Vj.Sizes.SMOL,
                          hideOverflowCount: !0,
                      }),
                      (0, r.jsx)(a.Text, {
                          className: I.mutualGuilds,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: O.intl.format(O.t.eE3oep, { count: n.length }),
                      }),
                  ],
              });
    },
    v = g.ZP.getEnableHardwareAcceleration() ? a.Xo$ : a.qEK;
function C(e) {
    var t;
    let { channel: n, otherUser: l, active: u } = e,
        g = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        b = (0, i.e7)([m.Z], () => (null == l ? null : m.Z.getNickname(l.id))),
        C = !g && u,
        S = (0, _.c)(n),
        { avatarDecorationSrc: T } = (0, p.Z)({
            user: l,
            size: (0, d.y9)(a.EFr.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v, {
                className: I.avatar,
                src: (0, f.x)(n, 40, C),
                avatarDecoration: T,
                size: a.EFr.SIZE_40,
                "aria-label": null != (t = null == l ? void 0 : l.username) ? t : O.intl.string(O.t["30mdIx"]),
            }),
            (0, r.jsxs)("div", {
                className: I.userPreview,
                children: [
                    (0, r.jsxs)("div", {
                        className: I.userContainerWithPreview,
                        children: [
                            (0, r.jsx)(s.Z, {
                                nick: b,
                                user: l,
                                showAccountIdentifier: !0,
                                className: I.tagContainer,
                                usernameClass: I.username,
                                discriminatorClass: null != h.ZP.getGlobalName(l) ? I.globalName : I.discriminator,
                            }),
                            (0, r.jsx)(a.Text, {
                                className: I.timestampWithPreview,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: S,
                            }),
                        ],
                    }),
                    (0, r.jsx)(c.Z, {
                        hoverText: (0, r.jsx)(E.Z, { channel: n }),
                        forceHover: u,
                        children: (0, r.jsx)(y, { userId: l.id }),
                    }),
                ],
            }),
        ],
    });
}
