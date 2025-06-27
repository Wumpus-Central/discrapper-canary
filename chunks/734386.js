n.d(t, { Z: () => k }), n(388685);
var r = n(255367),
    i = n(73800),
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
    y = n(626786),
    C = n(434404),
    x = n(454585),
    v = n(485386),
    j = n(430824),
    O = n(496675),
    E = n(594174),
    I = n(700785),
    S = n(51144),
    P = n(396769),
    Z = n(967128),
    N = n(318374),
    T = n(981631),
    A = n(388032),
    w = n(279078),
    R = n(73433);
function k(e) {
    let { channel: t } = e,
        [n, l] = i.useState(!1),
        a = (0, m.ZP)(t, !0),
        k = t.guild_id,
        M = (0, d.e7)([v.Z], () => (null != k ? v.Z.getRoles(k) : void 0)),
        D = (0, d.e7)([E.default, j.Z], () => {
            var e;
            return E.default.getUser(null == (e = j.Z.getGuild(k)) ? void 0 : e.ownerId);
        }),
        L = i.useMemo(
            () =>
                null != k
                    ? s()(M)
                          .sortBy((e) => -e.position)
                          .filter((e) => !(0, g.pM)(k, e.id))
                          .value()
                    : [],
            [k, M]
        ),
        U = i.useMemo(
            () =>
                s()(L)
                    .filter((e) => {
                        if (null == k) return !1;
                        let n = I.I0({
                            forceRoles: { [e.id]: e },
                            context: t
                        });
                        return c.e$(n, T.Plq.ADMINISTRATOR) || c.e$(n, T.Plq.VIEW_CHANNEL);
                    })
                    .value(),
            [t, k, L]
        ),
        B = (0, d.Wu)(
            [E.default],
            () => {
                let e = {};
                for (let n of (null != D && (e[D.id] = D), Object.values(t.permissionOverwrites))) {
                    if (n.type !== f.BN.MEMBER || null != e[n.id]) continue;
                    let t = E.default.getUser(n.id);
                    null != t && (e[t.id] = t);
                }
                return s()(e)
                    .filter((e) => {
                        var n;
                        let r = I.BT({
                                permission: T.Plq.ADMINISTRATOR,
                                user: e,
                                context: t
                            }),
                            i = null != (n = t.permissionOverwrites[e.id]) ? n : I.Hn,
                            l = c.e$(i.allow, T.Plq.VIEW_CHANNEL);
                        return r || l;
                    })
                    .value();
            },
            [t, D]
        ),
        F = O.Z.can(T.Plq.MANAGE_CHANNELS, t) || O.Z.can(T.Plq.MANAGE_ROLES, t),
        G = i.useCallback(() => l(!1), []);
    return (0, r.jsxs)(Z.ZP, {
        channelId: t.id,
        children: [
            (0, r.jsx)(Z.Kq, {
                locked: !0,
                channelType: t.type
            }),
            (0, r.jsx)(Z.Ot, { children: A.intl.format(A.t.I3R7Vl, { channelName: a }) }),
            (0, r.jsx)(Z.jz, {
                className: R.markup,
                children: A.intl.format(A.t.QuwqjI, {
                    channelName: a,
                    topicHook: () => x.Z.parseTopic(t.topic, !0, { channelId: t.id })
                })
            }),
            F
                ? (0, r.jsxs)('div', {
                      className: w.channelSettingButtons,
                      children: [
                          (0, r.jsx)(P.Z, {
                              label: A.intl.string(A.t.dMJ3Y2),
                              onClick: () => l(!0),
                              icon: (0, r.jsx)(p.BFJ, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          }),
                          (0, r.jsx)(P.Z, {
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
                            n = S.ZP.getName(e);
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
                        let a = null != (l = e.colorString) ? l : (0, u.Rf)(T.p6O),
                            s = (null == (i = e.tags) ? void 0 : i.guild_connections) !== void 0;
                        return F
                            ? (0, r.jsx)(
                                  _.Z,
                                  {
                                      className: o()(w.role, { [w.last]: n === U.length - 1 }),
                                      roleName: e.name,
                                      roleColor: a,
                                      disabled: !F,
                                      verified: s,
                                      onClick: () => {
                                          C.Z.open(t.guild_id, T.pNK.MEMBERS), C.Z.selectRole(e.id);
                                      }
                                  },
                                  e.id
                              )
                            : (0, r.jsx)(
                                  y.Z,
                                  {
                                      className: o()(w.role, { [w.last]: n === U.length - 1 }),
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
                                      onClose: () => (G(), e.onClose()),
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
