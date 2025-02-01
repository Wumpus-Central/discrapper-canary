n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(866442),
    u = n(442837),
    c = n(481060),
    d = n(239091),
    f = n(276264),
    _ = n(607070),
    p = n(100527),
    h = n(906732),
    m = n(600164),
    g = n(82295),
    E = n(818083),
    v = n(480608),
    y = n(124072),
    I = n(184301),
    T = n(347475),
    b = n(592125),
    S = n(271383),
    A = n(430824),
    N = n(594174),
    C = n(388032),
    R = n(665162),
    O = n(822944);
let D = (0, E.B)({
    kind: 'user',
    id: '2021-07_role_popout',
    label: 'Role Popout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Popout',
            config: { enabled: !0 }
        }
    ]
});
function x(e) {
    let { roleColor: t, roleId: r, channelId: s, roleName: E, guildId: x, children: L, inlinePreview: P = !1 } = e,
        { analyticsLocations: w } = (0, h.ZP)(p.Z.ROLE_MENTION),
        M = (0, u.e7)([_.Z], () => _.Z.roleStyle),
        k = null != t && 0 !== t && !P,
        U = k && 'dot' === M,
        G = (0, u.e7)([A.Z], () => A.Z.getGuild(x)),
        B = (0, u.e7)([b.Z], () => b.Z.getChannel(s)),
        Z = (e) =>
            (0, i.jsxs)(y.Z, {
                className: a()(R.roleMention),
                color: 'username' === M && k ? t : null,
                ...e,
                children: [
                    U &&
                        (0, i.jsx)(c.FhE, {
                            color: (0, l.Rf)(t),
                            className: O.roleDot,
                            background: !1,
                            tooltip: !1
                        }),
                    L
                ]
            }),
        { enabled: F } = D.getCurrentConfig({ location: '2ec235_1' }, { autoTrackExposure: !1 });
    return !F || P || null == s || null == x || null == G || null == B || (null == r && '@everyone' !== E)
        ? (0, i.jsx)(h.Gt, {
              value: w,
              children: Z()
          })
        : (0, i.jsx)(h.Gt, {
              value: w,
              children: (0, i.jsx)(c.yRy, {
                  preload: async () => {
                      null != r && (await (0, v.H)(x, r));
                  },
                  renderPopout: (e) => {
                      let t = S.ZP.getMembers(G.id),
                          a = A.Z.getRole(x, null != r ? r : G.getEveryoneRoleId()),
                          s = o()(t)
                              .filter((e) => !!('@everyone' === E || e.roles.includes(r)) && null != N.default.getUser(e.userId))
                              .sortBy((e) => {
                                  var t;
                                  let n = N.default.getUser(e.userId);
                                  return (null != n ? (null !== (t = e.nick) && void 0 !== t ? t : n.username) : '').toLocaleLowerCase();
                              })
                              .map((e) => {
                                  let t = N.default.getUser(e.userId);
                                  return (0, i.jsx)(
                                      c.yRy,
                                      {
                                          preload: () =>
                                              (0, I.Z)(t.id, t.getAvatarURL(B.guild_id, 80), {
                                                  guildId: B.guild_id,
                                                  channelId: B.id
                                              }),
                                          renderPopout: (t) =>
                                              (0, i.jsx)(T.Z, {
                                                  ...t,
                                                  userId: e.userId,
                                                  guildId: G.id,
                                                  channelId: B.id,
                                                  roleId: a.id
                                              }),
                                          spacing: 14,
                                          children: (r, s) => {
                                              let { isShown: o } = s;
                                              return (0, i.jsx)(
                                                  f.Z,
                                                  {
                                                      selected: o,
                                                      colorString: e.colorString,
                                                      colorRoleName: a.name,
                                                      user: t,
                                                      isOwner: e.userId === G.ownerId,
                                                      nick: e.nick,
                                                      premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                                      channel: B,
                                                      guildId: G.id,
                                                      onContextMenu: (e) => {
                                                          (0, d.jW)(e, async () => {
                                                              let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('51269'), n.e('13351'), n.e('33862'), n.e('98783'), n.e('13125'), n.e('61389')]).then(n.bind(n, 757387));
                                                              return (n) =>
                                                                  (0, i.jsx)(e, {
                                                                      ...n,
                                                                      user: t,
                                                                      guildId: G.id,
                                                                      channel: B,
                                                                      showMediaItems: !0
                                                                  });
                                                          });
                                                      },
                                                      ...r
                                                  },
                                                  e.userId
                                              );
                                          }
                                      },
                                      t.id
                                  );
                              })
                              .value();
                      return (0, i.jsx)(m.Z, {
                          className: R.rolePopout,
                          ...e,
                          children: (0, i.jsxs)(c.Ttm, {
                              className: R.roleScroller,
                              children: [
                                  (0, i.jsx)(g.Z, {
                                      className: R.roleHeader,
                                      'aria-label': C.intl.formatToPlainString(C.t.UaqbkZ, {
                                          title: a.name,
                                          count: s.length
                                      }),
                                      children: (0, i.jsxs)('span', {
                                          'aria-hidden': !0,
                                          children: [a.name, ' \u2014 ', s.length]
                                      })
                                  }),
                                  s
                              ]
                          })
                      });
                  },
                  position: 'right',
                  children: Z
              })
          });
}
