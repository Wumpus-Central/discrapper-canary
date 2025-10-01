n.d(t, { Z: () => M }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(149765),
    u = n(442837),
    d = n(481060),
    p = n(787014),
    h = n(911969),
    f = n(933557),
    m = n(185413),
    g = n(42311),
    b = n(626786),
    y = n(434404),
    C = n(454585),
    _ = n(345162),
    v = n(485386),
    x = n(430824),
    O = n(496675),
    j = n(594174),
    E = n(700785),
    S = n(51144),
    P = n(396769),
    I = n(967128),
    Z = n(318374),
    T = n(981631),
    N = n(388032),
    A = n(73288),
    w = n(602009);
function M(e) {
    let { channel: t } = e,
        [n, l] = i.useState(!1),
        o = (0, f.ZP)(t, !0),
        M = t.guild_id,
        R = (0, u.e7)([v.Z], () => (null != M ? v.Z.getSortedRoles(M) : void 0)),
        k = (0, u.e7)([j.default, x.Z], () => {
            var e;
            return j.default.getUser(null == (e = x.Z.getGuild(M)) ? void 0 : e.ownerId);
        }),
        L = i.useMemo(() => (null != R ? R.filter((e) => !(0, _.fI)(e)) : []), [R]),
        D = i.useMemo(
            () =>
                s()(L)
                    .filter((e) => {
                        if (null == M) return !1;
                        let n = E.I0({
                            forceRoles: { [e.id]: e },
                            context: t,
                        });
                        return c.Db(n, c.$e(T.Plq.ADMINISTRATOR, T.Plq.VIEW_CHANNEL));
                    })
                    .value(),
            [t, M, L],
        ),
        U = (0, u.Wu)([j.default], () => {
            let e = {};
            for (let n of (null != k && (e[k.id] = k), Object.values(t.permissionOverwrites))) {
                if (n.type !== h.BN.MEMBER || null != e[n.id]) continue;
                let t = j.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return s()(e)
                .filter((e) => {
                    var n;
                    let r = E.BT({
                            permission: T.Plq.ADMINISTRATOR,
                            user: e,
                            context: t,
                        }),
                        i = null != (n = t.permissionOverwrites[e.id]) ? n : E.Hn,
                        l = c.e$(i.allow, T.Plq.VIEW_CHANNEL);
                    return r || l;
                })
                .value();
        }, [t, k]),
        B = O.Z.can(T.Plq.MANAGE_CHANNELS, t) || O.Z.can(T.Plq.MANAGE_ROLES, t),
        H = i.useCallback(() => l(!1), []);
    return (0, r.jsxs)(I.ZP, {
        channelId: t.id,
        children: [
            (0, r.jsx)(I.Kq, {
                locked: !0,
                channelType: t.type,
            }),
            (0, r.jsx)(I.Ot, { children: N.intl.format(N.t.I3R7Vl, { channelName: o }) }),
            (0, r.jsx)(I.jz, {
                className: w.markup,
                children: N.intl.format(N.t.QuwqjI, {
                    channelName: o,
                    topicHook: () => C.Z.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            B
                ? (0, r.jsxs)("div", {
                      className: A.channelSettingButtons,
                      children: [
                          (0, r.jsx)(P.Z, {
                              label: N.intl.string(N.t.dMJ3Y2),
                              onClick: () => l(!0),
                              icon: (0, r.jsx)(d.BFJ, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                          }),
                          (0, r.jsx)(P.Z, {
                              label: N.intl.string(N.t["3gUsJS"]),
                              onClick: function () {
                                  p.ZP.open(t.id);
                              },
                              icon: (0, r.jsx)(d.vdY, {
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
                        if (1 !== U.length || D.length > 0)
                            return (0, r.jsx)(Z.Z, {
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
                                (0, r.jsx)(d.qEK, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: d.EFr.SIZE_24,
                                }),
                                (0, r.jsx)(d.Text, {
                                    tag: "span",
                                    className: A.singleUserName,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xA0",
                                (0, r.jsx)(d.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: N.intl.string(N.t.rt0ERU),
                                }),
                            ],
                        });
                    })(),
                    D.map((e, n) => {
                        var i, l;
                        let o = null != (l = e.colorString) ? l : T.Pbq,
                            s = (null == (i = e.tags) ? void 0 : i.guild_connections) !== void 0;
                        return B
                            ? (0, r.jsx)(
                                  g.Z,
                                  {
                                      className: a()(A.role, { [A.last]: n === D.length - 1 }),
                                      roleName: e.name,
                                      roleColor: o,
                                      disabled: !B,
                                      verified: s,
                                      onClick: () => {
                                          y.Z.open(t.guild_id, T.pNK.MEMBERS), y.Z.selectRole(e.id);
                                      },
                                  },
                                  e.id,
                              )
                            : (0, r.jsx)(
                                  b.Z,
                                  {
                                      className: a()(A.role, { [A.last]: n === D.length - 1 }),
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
                ? (0, r.jsx)(d.u_l, {
                      renderModal: (e) => {
                          var n, i;
                          return (0, r.jsx)(
                              m.default,
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
                                      onClose: () => (H(), e.onClose()),
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
