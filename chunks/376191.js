n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(129861),
    s = n(607070),
    o = n(570928),
    c = n(388905),
    d = n(1585),
    u = n(125988),
    h = n(43267),
    m = n(522289),
    p = n(699516),
    g = n(51144),
    f = n(998502),
    _ = n(620924),
    E = n(332712),
    I = n(81471),
    C = n(388032),
    v = n(993595);
let N = (e) => {
        let { userId: t } = e,
            n = (0, E.O)(t);
        return null == n || 0 === n.length
            ? (0, i.jsx)(l.Text, {
                  className: v.mutualGuilds,
                  variant: 'text-sm/normal',
                  color: 'text-muted',
                  children: C.intl.string(C.t.jpY0X1)
              })
            : (0, i.jsxs)('div', {
                  className: v.mutualGuildsContainer,
                  children: [
                      (0, i.jsx)(m.Z, {
                          guilds: n,
                          maxGuilds: 3,
                          size: c.Vj.Sizes.SMOL,
                          hideOverflowCount: !0
                      }),
                      (0, i.jsx)(l.Text, {
                          className: v.mutualGuilds,
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          children: C.intl.format(C.t.eE3oen, { count: n.length })
                      })
                  ]
              });
    },
    S = f.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function T(e) {
    var t;
    let { channel: n, otherUser: c, active: m } = e,
        f = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
        E = (0, r.e7)([p.Z], () => (null == c ? null : p.Z.getNickname(c.id))),
        T = !f && m,
        b = (0, _.c)(n),
        { avatarDecorationSrc: A } = (0, u.Z)({
            user: c,
            size: (0, d.y9)(l.AvatarSizes.SIZE_40),
            onlyAnimateOnHover: !0
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S, {
                className: v.avatar,
                src: (0, h.x)(n, 40, T),
                avatarDecoration: A,
                size: l.AvatarSizes.SIZE_40,
                'aria-label': null !== (t = null == c ? void 0 : c.username) && void 0 !== t ? t : C.intl.string(C.t['30mdIy'])
            }),
            (0, i.jsxs)('div', {
                className: v.userPreview,
                children: [
                    (0, i.jsxs)('div', {
                        className: v.userContainerWithPreview,
                        children: [
                            (0, i.jsx)(a.Z, {
                                nick: E,
                                user: c,
                                showAccountIdentifier: !0,
                                className: v.tagContainer,
                                usernameClass: v.username,
                                discriminatorClass: null != g.ZP.getGlobalName(c) ? v.globalName : v.discriminator
                            }),
                            (0, i.jsx)(l.Text, {
                                className: v.timestampWithPreview,
                                color: 'text-muted',
                                variant: 'text-xs/normal',
                                children: b
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Z, {
                        hoverText: (0, i.jsx)(I.Z, { channel: n }),
                        forceHover: m,
                        children: (0, i.jsx)(N, { userId: c.id })
                    })
                ]
            })
        ]
    });
}
