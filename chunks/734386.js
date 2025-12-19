n.d(t, { Z: () => w }), n(388685);
var i = n(54381),
    r = n(473749),
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
    y = n(434404),
    C = n(454585),
    v = n(345162),
    x = n(485386),
    O = n(430824),
    E = n(496675),
    j = n(594174),
    S = n(700785),
    _ = n(51144),
    P = n(967128),
    I = n(786721),
    Z = n(981631),
    T = n(388032),
    N = n(56759),
    A = n(960324);
function w(e) {
    let { channel: t } = e,
        [n, l] = r.useState(!1),
        o = (0, m.ZP)(t, !0),
        w = t.guild_id,
        M = (0, u.e7)([x.Z], () => (null != w ? x.Z.getSortedRoles(w) : void 0)),
        R = (0, u.e7)([j.default, O.Z], () => {
            var e;
            return j.default.getUser(null == (e = O.Z.getGuild(w)) ? void 0 : e.ownerId);
        }),
        D = r.useMemo(() => (null != M ? M.filter((e) => !(0, v.fI)(e)) : []), [M]),
        k = r.useMemo(
            () =>
                s()(D)
                    .filter((e) => {
                        if (null == w) return !1;
                        let n = S.I0({
                            forceRoles: { [e.id]: e },
                            context: t,
                        });
                        return c.Db(n, c.$e(Z.Plq.ADMINISTRATOR, Z.Plq.VIEW_CHANNEL));
                    })
                    .value(),
            [t, w, D],
        ),
        L = (0, u.Wu)([j.default], () => {
            let e = {};
            for (let n of (null != R && (e[R.id] = R), Object.values(t.permissionOverwrites))) {
                if (n.type !== h.BN.MEMBER || null != e[n.id]) continue;
                let t = j.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return s()(e)
                .filter((e) => {
                    var n;
                    let i = S.BT({
                            permission: Z.Plq.ADMINISTRATOR,
                            user: e,
                            context: t,
                        }),
                        r = null != (n = t.permissionOverwrites[e.id]) ? n : S.Hn,
                        l = c.e$(r.allow, Z.Plq.VIEW_CHANNEL);
                    return i || l;
                })
                .value();
        }, [t, R]),
        U = E.Z.can(Z.Plq.MANAGE_CHANNELS, t) || E.Z.can(Z.Plq.MANAGE_ROLES, t),
        V = r.useCallback(() => l(!1), []);
    return (0, i.jsxs)(P.ZP, {
        channelId: t.id,
        children: [
            (0, i.jsx)(P.Kq, {
                locked: !0,
                channelType: t.type,
            }),
            (0, i.jsx)(P.Ot, { children: T.intl.format(T.t.I3R7Vn, { channelName: o }) }),
            (0, i.jsx)(P.jz, {
                className: A.markup,
                children: T.intl.format(T.t.QuwqjG, {
                    channelName: o,
                    topicHook: () => C.Z.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            U
                ? (0, i.jsxs)("div", {
                      className: N.channelSettingButtons,
                      children: [
                          (0, i.jsx)(p.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: T.intl.string(T.t.dMJ3Y6),
                              onClick: () => l(!0),
                              icon: p.BFJ,
                          }),
                          (0, i.jsx)(p.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: T.intl.string(T.t["3gUsJb"]),
                              onClick: function () {
                                  f.ZP.open(t.id);
                              },
                              icon: p.vdY,
                          }),
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: N.members,
                children: [
                    (function () {
                        if (1 !== L.length || k.length > 0)
                            return (0, i.jsx)(d.Z, {
                                guildId: t.guild_id,
                                className: N.avatars,
                                maxUsers: 5,
                                users: L,
                            });
                        let e = L[0],
                            n = _.ZP.getName(e);
                        return (0, i.jsxs)("div", {
                            className: N.avatars,
                            children: [
                                (0, i.jsx)(p.qEK, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: p.EFr.SIZE_24,
                                }),
                                (0, i.jsx)(p.Text, {
                                    tag: "span",
                                    className: N.singleUserName,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xA0",
                                (0, i.jsx)(p.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: T.intl.string(T.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    k.map((e, n) => {
                        var r, l;
                        let o = null != (l = e.colorString) ? l : Z.Pbq,
                            s = (null == (r = e.tags) ? void 0 : r.guild_connections) !== void 0;
                        return U
                            ? (0, i.jsx)(
                                  I.Z,
                                  {
                                      className: a()(N.role, { [N.last]: n === k.length - 1 }),
                                      roleName: e.name,
                                      roleColor: o,
                                      disabled: !U,
                                      verified: s,
                                      onClick: () => {
                                          y.Z.open(t.guild_id, Z.pNK.MEMBERS), y.Z.selectRole(e.id);
                                      },
                                  },
                                  e.id,
                              )
                            : (0, i.jsx)(
                                  b.Z,
                                  {
                                      className: a()(N.role, { [N.last]: n === k.length - 1 }),
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
                                      onClose: () => (V(), e.onClose()),
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
