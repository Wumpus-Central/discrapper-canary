n.d(t, { Z: () => M }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(149765),
    u = n(442837),
    d = n(36563),
    p = n(481060),
    f = n(787014),
    h = n(911969),
    m = n(933557),
    g = n(185413),
    b = n(626786),
    _ = n(434404),
    y = n(454585),
    C = n(345162),
    v = n(485386),
    O = n(430824),
    x = n(496675),
    E = n(594174),
    j = n(700785),
    S = n(51144),
    P = n(396769),
    I = n(967128),
    Z = n(786721),
    T = n(981631),
    N = n(388032),
    A = n(73288),
    w = n(602009);
function M(e) {
    let { channel: t } = e,
        [n, l] = i.useState(!1),
        o = (0, m.ZP)(t, !0),
        M = t.guild_id,
        R = (0, u.e7)([v.Z], () => (null != M ? v.Z.getSortedRoles(M) : void 0)),
        D = (0, u.e7)([E.default, O.Z], () => {
            var e;
            return E.default.getUser(null == (e = O.Z.getGuild(M)) ? void 0 : e.ownerId);
        }),
        L = i.useMemo(() => (null != R ? R.filter((e) => !(0, C.fI)(e)) : []), [R]),
        k = i.useMemo(
            () =>
                s()(L)
                    .filter((e) => {
                        if (null == M) return !1;
                        let n = j.I0({
                            forceRoles: { [e.id]: e },
                            context: t,
                        });
                        return c.Db(n, c.$e(T.Plq.ADMINISTRATOR, T.Plq.VIEW_CHANNEL));
                    })
                    .value(),
            [t, M, L],
        ),
        U = (0, u.Wu)([E.default], () => {
            let e = {};
            for (let n of (null != D && (e[D.id] = D), Object.values(t.permissionOverwrites))) {
                if (n.type !== h.BN.MEMBER || null != e[n.id]) continue;
                let t = E.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return s()(e)
                .filter((e) => {
                    var n;
                    let r = j.BT({
                            permission: T.Plq.ADMINISTRATOR,
                            user: e,
                            context: t,
                        }),
                        i = null != (n = t.permissionOverwrites[e.id]) ? n : j.Hn,
                        l = c.e$(i.allow, T.Plq.VIEW_CHANNEL);
                    return r || l;
                })
                .value();
        }, [t, D]),
        B = x.Z.can(T.Plq.MANAGE_CHANNELS, t) || x.Z.can(T.Plq.MANAGE_ROLES, t),
        F = i.useCallback(() => l(!1), []);
    return (0, r.jsxs)(I.ZP, {
        channelId: t.id,
        children: [
            (0, r.jsx)(I.Kq, {
                locked: !0,
                channelType: t.type,
            }),
            (0, r.jsx)(I.Ot, { children: N.intl.format(N.t.I3R7Vn, { channelName: o }) }),
            (0, r.jsx)(I.jz, {
                className: w.markup,
                children: N.intl.format(N.t.QuwqjG, {
                    channelName: o,
                    topicHook: () => y.Z.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            B
                ? (0, r.jsxs)("div", {
                      className: A.channelSettingButtons,
                      children: [
                          (0, r.jsx)(P.Z, {
                              label: N.intl.string(N.t.dMJ3Y6),
                              onClick: () => l(!0),
                              icon: (0, r.jsx)(p.BFJ, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                          }),
                          (0, r.jsx)(P.Z, {
                              label: N.intl.string(N.t["3gUsJb"]),
                              onClick: function () {
                                  f.ZP.open(t.id);
                              },
                              icon: (0, r.jsx)(p.vdY, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                          }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: A.members,
                children: [
                    (function () {
                        if (1 !== U.length || k.length > 0)
                            return (0, r.jsx)(d.Z, {
                                guildId: t.guild_id,
                                className: A.avatars,
                                maxUsers: 5,
                                users: U,
                            });
                        let e = U[0],
                            n = S.ZP.getName(e);
                        return (0, r.jsxs)("div", {
                            className: A.avatars,
                            children: [
                                (0, r.jsx)(p.qEK, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: p.EFr.SIZE_24,
                                }),
                                (0, r.jsx)(p.Text, {
                                    tag: "span",
                                    className: A.singleUserName,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xA0",
                                (0, r.jsx)(p.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: N.intl.string(N.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    k.map((e, n) => {
                        var i, l;
                        let o = null != (l = e.colorString) ? l : T.Pbq,
                            s = (null == (i = e.tags) ? void 0 : i.guild_connections) !== void 0;
                        return B
                            ? (0, r.jsx)(
                                  Z.Z,
                                  {
                                      className: a()(A.role, { [A.last]: n === k.length - 1 }),
                                      roleName: e.name,
                                      roleColor: o,
                                      disabled: !B,
                                      verified: s,
                                      onClick: () => {
                                          _.Z.open(t.guild_id, T.pNK.MEMBERS), _.Z.selectRole(e.id);
                                      },
                                  },
                                  e.id,
                              )
                            : (0, r.jsx)(
                                  b.Z,
                                  {
                                      className: a()(A.role, { [A.last]: n === k.length - 1 }),
                                      roleName: e.name,
                                      roleColor: o,
                                      verified: s,
                                  },
                                  e.id,
                              );
                    }),
                ],
            }),
            n
                ? (0, r.jsx)(p.u_l, {
                      renderModal: (e) => {
                          var n, i;
                          return (0, r.jsx)(
                              g.default,
                              ((n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (i = i =
                                  {
                                      onClose: () => (F(), e.onClose()),
                                      channelId: t.id,
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
                              n),
                          );
                      },
                      onCloseRequest: () => l(!1),
                  })
                : null,
        ],
    });
}
