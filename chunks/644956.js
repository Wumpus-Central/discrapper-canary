r.d(n, {
    Z: function () {
        return L;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(392711),
    l = r.n(s),
    u = r(866442),
    c = r(442837),
    d = r(481060),
    f = r(239091),
    p = r(276264),
    h = r(607070),
    _ = r(100527),
    m = r(906732),
    g = r(600164),
    E = r(82295),
    v = r(818083),
    y = r(480608),
    b = r(124072),
    I = r(184301),
    T = r(347475),
    S = r(592125),
    A = r(271383),
    C = r(430824),
    N = r(594174),
    R = r(388032),
    O = r(665162),
    D = r(822944);
let x = (0, v.B)({
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
function L(e) {
    let { roleColor: n, roleId: a, channelId: s, roleName: v, guildId: L, children: w, inlinePreview: P = !1 } = e,
        { analyticsLocations: M } = (0, m.ZP)(_.Z.ROLE_MENTION),
        k = (0, c.e7)([h.Z], () => h.Z.roleStyle),
        U = null != n && 0 !== n && !P,
        B = U && 'dot' === k,
        G = (e) =>
            (0, i.jsxs)(b.Z, {
                className: o()(O.roleMention),
                color: 'username' === k && U ? n : null,
                ...e,
                children: [
                    B &&
                        (0, i.jsx)(d.RoleDot, {
                            color: (0, u.Rf)(n),
                            className: D.roleDot,
                            background: !1,
                            tooltip: !1
                        }),
                    w
                ]
            }),
        { enabled: Z } = x.getCurrentConfig({ location: '2ec235_1' }, { autoTrackExposure: !1 });
    return !Z || P || null == s || null == L || (null == a && '@everyone' !== v)
        ? (0, i.jsx)(m.Gt, {
              value: M,
              children: G()
          })
        : (0, i.jsx)(m.Gt, {
              value: M,
              children: (0, i.jsx)(d.Popout, {
                  preload: async () => {
                      null != a && (await (0, y.H)(L, a));
                  },
                  renderPopout: (e) => {
                      let n = S.Z.getChannel(s),
                          o = C.Z.getGuild(L),
                          u = A.ZP.getMembers(o.id),
                          c = C.Z.getRole(L, null != a ? a : o.getEveryoneRoleId()),
                          h = l()(u)
                              .filter((e) => !!('@everyone' === v || e.roles.includes(a)) && null != N.default.getUser(e.userId))
                              .sortBy((e) => {
                                  var n;
                                  let r = N.default.getUser(e.userId);
                                  return (null != r ? (null !== (n = e.nick) && void 0 !== n ? n : r.username) : '').toLocaleLowerCase();
                              })
                              .map((e) => {
                                  let a = N.default.getUser(e.userId);
                                  return (0, i.jsx)(
                                      d.Popout,
                                      {
                                          preload: () =>
                                              (0, I.Z)(a.id, a.getAvatarURL(n.guild_id, 80), {
                                                  guildId: n.guild_id,
                                                  channelId: n.id
                                              }),
                                          renderPopout: (r) =>
                                              (0, i.jsx)(T.Z, {
                                                  ...r,
                                                  userId: e.userId,
                                                  guildId: o.id,
                                                  channelId: n.id,
                                                  roleId: c.id
                                              }),
                                          spacing: 14,
                                          children: (s, l) => {
                                              let { isShown: u } = l;
                                              return (0, i.jsx)(
                                                  p.Z,
                                                  {
                                                      selected: u,
                                                      colorString: e.colorString,
                                                      colorRoleName: c.name,
                                                      user: a,
                                                      isOwner: e.userId === o.ownerId,
                                                      nick: e.nick,
                                                      premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                                      channel: n,
                                                      guildId: o.id,
                                                      onContextMenu: (e) => {
                                                          (0, f.jW)(e, async () => {
                                                              let { default: e } = await Promise.all([r.e('50506'), r.e('79695'), r.e('51269'), r.e('13351'), r.e('33862'), r.e('92453'), r.e('13125'), r.e('54492')]).then(r.bind(r, 757387));
                                                              return (r) =>
                                                                  (0, i.jsx)(e, {
                                                                      ...r,
                                                                      user: a,
                                                                      guildId: o.id,
                                                                      channel: n,
                                                                      showMediaItems: !0
                                                                  });
                                                          });
                                                      },
                                                      ...s
                                                  },
                                                  e.userId
                                              );
                                          }
                                      },
                                      a.id
                                  );
                              })
                              .value();
                      return (0, i.jsx)(g.Z, {
                          className: O.rolePopout,
                          ...e,
                          children: (0, i.jsxs)(d.Scroller, {
                              className: O.roleScroller,
                              children: [
                                  (0, i.jsx)(E.Z, {
                                      className: O.roleHeader,
                                      'aria-label': R.intl.formatToPlainString(R.t.UaqbkZ, {
                                          title: c.name,
                                          count: h.length
                                      }),
                                      children: (0, i.jsxs)('span', {
                                          'aria-hidden': !0,
                                          children: [c.name, ' \u2014 ', h.length]
                                      })
                                  }),
                                  h
                              ]
                          })
                      });
                  },
                  position: 'right',
                  children: G
              })
          });
}
