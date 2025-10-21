n.d(t, { Z: () => M }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(149765),
    u = n(442837),
    d = n(36563),
    p = n(481060),
    h = n(787014),
    f = n(911969),
    m = n(933557),
    g = n(185413),
    b = n(42311),
    C = n(626786),
    y = n(434404),
    _ = n(454585),
    v = n(345162),
    x = n(485386),
    O = n(430824),
    j = n(496675),
    E = n(594174),
    S = n(700785),
    P = n(51144),
    I = n(396769),
    Z = n(967128),
    T = n(981631),
    N = n(388032),
    A = n(73288),
    w = n(602009);
function M(e) {
    let { channel: t } = e,
        [n, l] = r.useState(!1),
        o = (0, m.ZP)(t, !0),
        M = t.guild_id,
        R = (0, u.e7)([x.Z], () => (null != M ? x.Z.getSortedRoles(M) : void 0)),
        L = (0, u.e7)([E.default, O.Z], () => {
            var e;
            return E.default.getUser(null == (e = O.Z.getGuild(M)) ? void 0 : e.ownerId);
        }),
        D = r.useMemo(() => (null != R ? R.filter((e) => !(0, v.fI)(e)) : []), [R]),
        k = r.useMemo(
            () =>
                s()(D)
                    .filter((e) => {
                        if (null == M) return !1;
                        let n = S.I0({
                            forceRoles: { [e.id]: e },
                            context: t,
                        });
                        return c.Db(n, c.$e(T.Plq.ADMINISTRATOR, T.Plq.VIEW_CHANNEL));
                    })
                    .value(),
            [t, M, D],
        ),
        U = (0, u.Wu)([E.default], () => {
            let e = {};
            for (let n of (null != L && (e[L.id] = L), Object.values(t.permissionOverwrites))) {
                if (n.type !== f.BN.MEMBER || null != e[n.id]) continue;
                let t = E.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return s()(e)
                .filter((e) => {
                    var n;
                    let i = S.BT({
                            permission: T.Plq.ADMINISTRATOR,
                            user: e,
                            context: t,
                        }),
                        r = null != (n = t.permissionOverwrites[e.id]) ? n : S.Hn,
                        l = c.e$(r.allow, T.Plq.VIEW_CHANNEL);
                    return i || l;
                })
                .value();
        }, [t, L]),
        B = j.Z.can(T.Plq.MANAGE_CHANNELS, t) || j.Z.can(T.Plq.MANAGE_ROLES, t),
        H = r.useCallback(() => l(!1), []);
    return (0, i.jsxs)(Z.ZP, {
        channelId: t.id,
        children: [
            (0, i.jsx)(Z.Kq, {
                locked: !0,
                channelType: t.type,
            }),
            (0, i.jsx)(Z.Ot, { children: N.intl.format(N.t.I3R7Vl, { channelName: o }) }),
            (0, i.jsx)(Z.jz, {
                className: w.markup,
                children: N.intl.format(N.t.QuwqjI, {
                    channelName: o,
                    topicHook: () => _.Z.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            B
                ? (0, i.jsxs)("div", {
                      className: A.channelSettingButtons,
                      children: [
                          (0, i.jsx)(I.Z, {
                              label: N.intl.string(N.t.dMJ3Y2),
                              onClick: () => l(!0),
                              icon: (0, i.jsx)(p.BFJ, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                          }),
                          (0, i.jsx)(I.Z, {
                              label: N.intl.string(N.t["3gUsJS"]),
                              onClick: function () {
                                  h.ZP.open(t.id);
                              },
                              icon: (0, i.jsx)(p.vdY, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                          }),
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: A.members,
                children: [
                    (function () {
                        if (1 !== U.length || k.length > 0)
                            return (0, i.jsx)(d.Z, {
                                guildId: t.guild_id,
                                className: A.avatars,
                                maxUsers: 5,
                                users: U,
                            });
                        let e = U[0],
                            n = P.ZP.getName(e);
                        return (0, i.jsxs)("div", {
                            className: A.avatars,
                            children: [
                                (0, i.jsx)(p.qEK, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: p.EFr.SIZE_24,
                                }),
                                (0, i.jsx)(p.Text, {
                                    tag: "span",
                                    className: A.singleUserName,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xA0",
                                (0, i.jsx)(p.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: N.intl.string(N.t.rt0ERU),
                                }),
                            ],
                        });
                    })(),
                    k.map((e, n) => {
                        var r, l;
                        let o = null != (l = e.colorString) ? l : T.Pbq,
                            s = (null == (r = e.tags) ? void 0 : r.guild_connections) !== void 0;
                        return B
                            ? (0, i.jsx)(
                                  b.Z,
                                  {
                                      className: a()(A.role, { [A.last]: n === k.length - 1 }),
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
                            : (0, i.jsx)(
                                  C.Z,
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
                ? (0, i.jsx)(p.u_l, {
                      renderModal: (e) => {
                          var n, r;
                          return (0, i.jsx)(
                              g.default,
                              ((n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = i);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (r = r =
                                  {
                                      onClose: () => (H(), e.onClose()),
                                      channelId: t.id,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, i);
                                        }
                                        return n;
                                    })(Object(r)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
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
