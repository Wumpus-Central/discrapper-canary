(n.d(t, { Z: () => M }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
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
    y = n(626786),
    C = n(434404),
    x = n(454585),
    v = n(485386),
    O = n(430824),
    j = n(496675),
    E = n(594174),
    S = n(700785),
    P = n(51144),
    I = n(396769),
    Z = n(967128),
    N = n(318374),
    T = n(981631),
    A = n(388032),
    w = n(279078),
    R = n(73433);
function M(e) {
    let { channel: t } = e,
        [n, l] = i.useState(!1),
        o = (0, m.ZP)(t, !0),
        M = t.guild_id,
        D = (0, d.e7)([v.Z], () => (null != M ? v.Z.getRoles(M) : void 0)),
        L = (0, d.e7)([E.default, O.Z], () => {
            var e;
            return E.default.getUser(null == (e = O.Z.getGuild(M)) ? void 0 : e.ownerId);
        }),
        k = i.useMemo(
            () =>
                null != M
                    ? s()(D)
                          .sortBy((e) => -e.position)
                          .filter((e) => !(0, g.pM)(M, e.id))
                          .value()
                    : [],
            [M, D]
        ),
        U = i.useMemo(
            () =>
                s()(k)
                    .filter((e) => {
                        if (null == M) return !1;
                        let n = S.I0({
                            forceRoles: { [e.id]: e },
                            context: t
                        });
                        return c.e$(n, T.Plq.ADMINISTRATOR) || c.e$(n, T.Plq.VIEW_CHANNEL);
                    })
                    .value(),
            [t, M, k]
        ),
        B = (0, d.Wu)(
            [E.default],
            () => {
                let e = {};
                for (let n of (null != L && (e[L.id] = L), Object.values(t.permissionOverwrites))) {
                    if (n.type !== f.BN.MEMBER || null != e[n.id]) continue;
                    let t = E.default.getUser(n.id);
                    null != t && (e[t.id] = t);
                }
                return s()(e)
                    .filter((e) => {
                        var n;
                        let r = S.BT({
                                permission: T.Plq.ADMINISTRATOR,
                                user: e,
                                context: t
                            }),
                            i = null != (n = t.permissionOverwrites[e.id]) ? n : S.Hn,
                            l = c.e$(i.allow, T.Plq.VIEW_CHANNEL);
                        return r || l;
                    })
                    .value();
            },
            [t, L]
        ),
        F = j.Z.can(T.Plq.MANAGE_CHANNELS, t) || j.Z.can(T.Plq.MANAGE_ROLES, t),
        H = i.useCallback(() => l(!1), []);
    return (0, r.jsxs)(Z.ZP, {
        channelId: t.id,
        children: [
            (0, r.jsx)(Z.Kq, {
                locked: !0,
                channelType: t.type
            }),
            (0, r.jsx)(Z.Ot, { children: A.intl.format(A.t.I3R7Vl, { channelName: o }) }),
            (0, r.jsx)(Z.jz, {
                className: R.markup,
                children: A.intl.format(A.t.QuwqjI, {
                    channelName: o,
                    topicHook: () => x.Z.parseTopic(t.topic, !0, { channelId: t.id })
                })
            }),
            F
                ? (0, r.jsxs)('div', {
                      className: w.channelSettingButtons,
                      children: [
                          (0, r.jsx)(I.Z, {
                              label: A.intl.string(A.t.dMJ3Y2),
                              onClick: () => l(!0),
                              icon: (0, r.jsx)(p.BFJ, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          }),
                          (0, r.jsx)(I.Z, {
                              label: A.intl.string(A.t['3gUsJS']),
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
                className: w.members,
                children: [
                    (function () {
                        if (1 !== B.length || U.length > 0)
                            return (0, r.jsx)(N.Z, {
                                guildId: t.guild_id,
                                className: w.avatars,
                                maxUsers: 5,
                                users: B
                            });
                        let e = B[0],
                            n = P.ZP.getName(e);
                        return (0, r.jsxs)('div', {
                            className: w.avatars,
                            children: [
                                (0, r.jsx)(p.qEK, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    'aria-label': n,
                                    size: p.EFr.SIZE_24
                                }),
                                (0, r.jsx)(p.Text, {
                                    tag: 'span',
                                    className: w.singleUserName,
                                    variant: 'text-md/normal',
                                    children: n
                                }),
                                '\xA0',
                                (0, r.jsx)(p.Text, {
                                    tag: 'span',
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: A.intl.string(A.t.rt0ERU)
                                })
                            ]
                        });
                    })(),
                    U.map((e, n) => {
                        var i, l;
                        let o = null != (l = e.colorString) ? l : (0, u.Rf)(T.p6O),
                            s = (null == (i = e.tags) ? void 0 : i.guild_connections) !== void 0;
                        return F
                            ? (0, r.jsx)(
                                  _.Z,
                                  {
                                      className: a()(w.role, { [w.last]: n === U.length - 1 }),
                                      roleName: e.name,
                                      roleColor: o,
                                      disabled: !F,
                                      verified: s,
                                      onClick: () => {
                                          (C.Z.open(t.guild_id, T.pNK.MEMBERS), C.Z.selectRole(e.id));
                                      }
                                  },
                                  e.id
                              )
                            : (0, r.jsx)(
                                  y.Z,
                                  {
                                      className: a()(w.role, { [w.last]: n === U.length - 1 }),
                                      roleName: e.name,
                                      roleColor: o,
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
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              ((r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r));
                                          }));
                                  }
                                  return e;
                              })({}, e)),
                              (i = i =
                                  {
                                      onClose: () => (H(), e.onClose()),
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
