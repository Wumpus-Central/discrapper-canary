n.d(t, { Z: () => v });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(129861),
    o = n(607070),
    s = n(570928),
    c = n(388905),
    u = n(1585),
    d = n(125988),
    p = n(43267),
    h = n(522289),
    f = n(699516),
    g = n(51144),
    m = n(998502),
    b = n(620924),
    _ = n(332712),
    E = n(81471),
    O = n(388032),
    N = n(818816);
let y = (e) => {
        let { userId: t } = e,
            n = (0, _.O)(t);
        return null == n || 0 === n.length
            ? (0, r.jsx)(l.Text, {
                  className: N.mutualGuilds,
                  variant: 'text-sm/normal',
                  color: 'text-muted',
                  children: O.NW.string(O.t.jpY0X1)
              })
            : (0, r.jsxs)('div', {
                  className: N.mutualGuildsContainer,
                  children: [
                      (0, r.jsx)(h.Z, {
                          guilds: n,
                          maxGuilds: 3,
                          size: c.Vj.Sizes.SMOL,
                          hideOverflowCount: !0
                      }),
                      (0, r.jsx)(l.Text, {
                          className: N.mutualGuilds,
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          children: O.NW.format(O.t.eE3oen, { count: n.length })
                      })
                  ]
              });
    },
    I = m.ZP.getEnableHardwareAcceleration() ? l.Xo$ : l.qEK;
function v(e) {
    var t;
    let { channel: n, otherUser: c, active: h } = e,
        m = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        _ = (0, i.e7)([f.Z], () => (null == c ? null : f.Z.getNickname(c.id))),
        v = !m && h,
        C = (0, b.c)(n),
        { avatarDecorationSrc: S } = (0, d.Z)({
            user: c,
            size: (0, u.y9)(l.EFr.SIZE_40),
            onlyAnimateOnHover: !0
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I, {
                className: N.avatar,
                src: (0, p.x)(n, 40, v),
                avatarDecoration: S,
                size: l.EFr.SIZE_40,
                'aria-label': null != (t = null == c ? void 0 : c.username) ? t : O.NW.string(O.t['30mdIy'])
            }),
            (0, r.jsxs)('div', {
                className: N.userPreview,
                children: [
                    (0, r.jsxs)('div', {
                        className: N.userContainerWithPreview,
                        children: [
                            (0, r.jsx)(a.Z, {
                                nick: _,
                                user: c,
                                showAccountIdentifier: !0,
                                className: N.tagContainer,
                                usernameClass: N.username,
                                discriminatorClass: null != g.ZP.getGlobalName(c) ? N.globalName : N.discriminator
                            }),
                            (0, r.jsx)(l.Text, {
                                className: N.timestampWithPreview,
                                color: 'text-muted',
                                variant: 'text-xs/normal',
                                children: C
                            })
                        ]
                    }),
                    (0, r.jsx)(s.Z, {
                        hoverText: (0, r.jsx)(E.Z, { channel: n }),
                        forceHover: h,
                        children: (0, r.jsx)(y, { userId: c.id })
                    })
                ]
            })
        ]
    });
}
