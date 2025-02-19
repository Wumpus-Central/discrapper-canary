n.d(t, { Z: () => w }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(149765),
    u = n(866442),
    d = n(442837),
    p = n(481060),
    h = n(787014),
    f = n(911969),
    m = n(933557),
    g = n(605436),
    b = n(185413),
    _ = n(42311),
    C = n(626786),
    v = n(434404),
    y = n(454585),
    x = n(430824),
    j = n(496675),
    O = n(594174),
    N = n(700785),
    E = n(51144),
    P = n(396769),
    I = n(967128),
    S = n(318374),
    Z = n(981631),
    T = n(388032),
    A = n(542161);
function w(e) {
    let { channel: t } = e,
        [n, l] = i.useState(!1),
        a = (0, m.ZP)(t, !0),
        w = t.guild_id,
        R = (0, d.e7)([x.Z], () => (null != w ? x.Z.getRoles(w) : void 0)),
        k = (0, d.e7)([O.default, x.Z], () => {
            var e;
            return O.default.getUser(null === (e = x.Z.getGuild(w)) || void 0 === e ? void 0 : e.ownerId);
        }),
        M = i.useMemo(
            () =>
                null != w
                    ? s()(R)
                          .sortBy((e) => -e.position)
                          .filter((e) => !(0, g.pM)(w, e.id))
                          .value()
                    : [],
            [w, R]
        ),
        L = i.useMemo(
            () =>
                s()(M)
                    .filter((e) => {
                        if (null == w) return !1;
                        let n = N.I0({
                            forceRoles: { [e.id]: e },
                            context: t
                        });
                        return c.e$(n, Z.Plq.ADMINISTRATOR) || c.e$(n, Z.Plq.VIEW_CHANNEL);
                    })
                    .value(),
            [t, w, M]
        ),
        D = (0, d.Wu)(
            [O.default],
            () => {
                let e = {};
                for (let n of (null != k && (e[k.id] = k), Object.values(t.permissionOverwrites))) {
                    if (n.type !== f.BN.MEMBER || null != e[n.id]) continue;
                    let t = O.default.getUser(n.id);
                    null != t && (e[t.id] = t);
                }
                return s()(e)
                    .filter((e) => {
                        var n;
                        let r = N.BT({
                                permission: Z.Plq.ADMINISTRATOR,
                                user: e,
                                context: t
                            }),
                            i = null !== (n = t.permissionOverwrites[e.id]) && void 0 !== n ? n : N.Hn,
                            l = c.e$(i.allow, Z.Plq.VIEW_CHANNEL);
                        return r || l;
                    })
                    .value();
            },
            [t, k]
        ),
        W = j.Z.can(Z.Plq.MANAGE_CHANNELS, t) || j.Z.can(Z.Plq.MANAGE_ROLES, t),
        U = i.useCallback(() => l(!1), []);
    return (0, r.jsxs)(I.ZP, {
        channelId: t.id,
        children: [
            (0, r.jsx)(I.Kq, {
                locked: !0,
                channelType: t.type
            }),
            (0, r.jsx)(I.Ot, { children: T.NW.format(T.t.I3R7Vl, { channelName: a }) }),
            (0, r.jsx)(I.jz, {
                children: T.NW.format(T.t.QuwqjI, {
                    channelName: a,
                    topicHook: () => y.Z.parseTopic(t.topic, !0, { channelId: t.id })
                })
            }),
            W
                ? (0, r.jsxs)('div', {
                      className: A.channelSettingButtons,
                      children: [
                          (0, r.jsx)(P.Z, {
                              label: T.NW.string(T.t.dMJ3Y2),
                              onClick: () => l(!0),
                              icon: (0, r.jsx)(p.BFJ, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          }),
                          (0, r.jsx)(P.Z, {
                              label: T.NW.string(T.t['3gUsJS']),
                              onClick: function () {
                                  h.ZP.open(t.id);
                              },
                              icon: (0, r.jsx)(p.vdY, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  })
                : null,
            (0, r.jsxs)('div', {
                className: A.members,
                children: [
                    (function () {
                        if (1 !== D.length || L.length > 0)
                            return (0, r.jsx)(S.Z, {
                                guildId: t.guild_id,
                                className: A.avatars,
                                maxUsers: 5,
                                users: D
                            });
                        let e = D[0],
                            n = E.ZP.getName(e);
                        return (0, r.jsxs)('div', {
                            className: A.avatars,
                            children: [
                                (0, r.jsx)(p.qEK, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    'aria-label': n,
                                    size: p.EFr.SIZE_24
                                }),
                                (0, r.jsx)(p.Text, {
                                    tag: 'span',
                                    className: A.singleUserName,
                                    variant: 'text-md/normal',
                                    children: n
                                }),
                                '\xA0',
                                (0, r.jsx)(p.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: T.NW.string(T.t.rt0ERU)
                                })
                            ]
                        });
                    })(),
                    L.map((e, n) => {
                        var i, l;
                        let a = null !== (l = e.colorString) && void 0 !== l ? l : (0, u.Rf)(Z.p6O),
                            s = (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) !== void 0;
                        return W
                            ? (0, r.jsx)(
                                  _.Z,
                                  {
                                      className: o()(A.role, { [A.last]: n === L.length - 1 }),
                                      roleName: e.name,
                                      roleColor: a,
                                      disabled: !W,
                                      verified: s,
                                      onClick: () => {
                                          v.Z.open(t.guild_id, Z.pNK.MEMBERS), v.Z.selectRole(e.id);
                                      }
                                  },
                                  e.id
                              )
                            : (0, r.jsx)(
                                  C.Z,
                                  {
                                      className: o()(A.role, { [A.last]: n === L.length - 1 }),
                                      roleName: e.name,
                                      roleColor: a,
                                      verified: s
                                  },
                                  e.id
                              );
                    })
                ]
            }),
            n
                ? (0, r.jsx)(p.u_l, {
                      renderModal: (e) => {
                          var n, i;
                          return (0, r.jsx)(
                              b.default,
                              ((n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (i = i =
                                  {
                                      onClose: () => (U(), e.onClose()),
                                      channelId: t.id
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              n)
                          );
                      },
                      onCloseRequest: () => l(!1)
                  })
                : null
        ]
    });
}
