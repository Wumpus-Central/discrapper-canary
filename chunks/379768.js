n.d(t, { A: () => R }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(136722),
    u = n(311907),
    d = n(342952),
    f = n(397927),
    p = n(435183),
    h = n(155718),
    b = n(47167),
    g = n(685374),
    m = n(569989),
    A = n(997509),
    y = n(46054),
    O = n(34457),
    j = n(317525),
    v = n(71393),
    x = n(576705),
    E = n(287809),
    _ = n(488926),
    C = n(427262),
    S = n(314307),
    I = n(234567),
    N = n(652215),
    T = n(985018),
    P = n(391514),
    w = n(206314);
function R(e) {
    let { channel: t } = e,
        [n, i] = l.useState(!1),
        s = (0, b.Ay)(t, !0),
        R = t.guild_id,
        D = (0, u.bG)([j.A], () => (null != R ? j.A.getSortedRoles(R) : void 0)),
        M = (0, u.bG)([E.default, v.A], () => {
            var e;
            return E.default.getUser(null == (e = v.A.getGuild(R)) ? void 0 : e.ownerId);
        }),
        L = l.useMemo(() => (null != D ? D.filter((e) => !(0, O.Oy)(e)) : []), [D]),
        G = l.useMemo(
            () =>
                o()(L)
                    .filter((e) => {
                        if (null == R) return !1;
                        let n = _.aH({
                            forceRoles: { [e.id]: e },
                            context: t,
                        });
                        return c.X8(n, c.kg(N.xBc.ADMINISTRATOR, N.xBc.VIEW_CHANNEL));
                    })
                    .value(),
            [t, R, L],
        ),
        k = (0, u.yK)([E.default], () => {
            let e = {};
            for (let n of (null != M && (e[M.id] = M), Object.values(t.permissionOverwrites))) {
                if (n.type !== h.r2.MEMBER || null != e[n.id]) continue;
                let t = E.default.getUser(n.id);
                null != t && (e[t.id] = t);
            }
            return o()(e)
                .filter((e) => {
                    var n;
                    let r = _.$3({
                            permission: N.xBc.ADMINISTRATOR,
                            user: e,
                            context: t,
                        }),
                        l = null != (n = t.permissionOverwrites[e.id]) ? n : _.x3,
                        i = c.zy(l.allow, N.xBc.VIEW_CHANNEL);
                    return r || i;
                })
                .value();
        }, [t, M]),
        U = x.A.can(N.xBc.MANAGE_CHANNELS, t) || x.A.can(N.xBc.MANAGE_ROLES, t),
        V = l.useCallback(() => i(!1), []);
    return (0, r.jsxs)(S.Ay, {
        channelId: t.id,
        children: [
            (0, r.jsx)(S.WK, {
                locked: !0,
                channelType: t.type,
            }),
            (0, r.jsx)(S.cr, { children: T.intl.format(T.t.I3R7Vn, { channelName: s }) }),
            (0, r.jsx)(S.j1, {
                className: w.PT,
                children: T.intl.format(T.t.QuwqjG, {
                    channelName: s,
                    topicHook: () => y.A.parseTopic(t.topic, !0, { channelId: t.id }),
                }),
            }),
            U
                ? (0, r.jsxs)("div", {
                      className: P.$x,
                      children: [
                          (0, r.jsx)(f.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: T.intl.string(T.t.dMJ3Y6),
                              onClick: () => i(!0),
                              icon: f.nFg,
                          }),
                          (0, r.jsx)(f.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: T.intl.string(T.t["3gUsJb"]),
                              onClick: function () {
                                  p.Ay.open(t.id);
                              },
                              icon: f.R2l,
                          }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: P.ol,
                children: [
                    (function () {
                        if (1 !== k.length || G.length > 0)
                            return (0, r.jsx)(d.A, {
                                guildId: t.guild_id,
                                className: P.HD,
                                maxUsers: 5,
                                users: k,
                            });
                        let e = k[0],
                            n = C.Ay.getName(e);
                        return (0, r.jsxs)("div", {
                            className: P.HD,
                            children: [
                                (0, r.jsx)(f.euF, {
                                    src: e.getAvatarURL(t.guild_id, 24),
                                    "aria-label": n,
                                    size: f._3J.SIZE_24,
                                }),
                                (0, r.jsx)(f.Text, {
                                    tag: "span",
                                    className: P.Jk,
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                "\xA0",
                                (0, r.jsx)(f.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: T.intl.string(T.t.rt0ERW),
                                }),
                            ],
                        });
                    })(),
                    G.map((e, n) => {
                        var l, i;
                        let s = null != (l = e.colorString) ? l : N.TpD,
                            o = (null == (i = e.tags) ? void 0 : i.guild_connections) !== void 0;
                        return U
                            ? (0, r.jsx)(
                                  I.A,
                                  {
                                      className: a()(P.JC, { [P.HV]: n === G.length - 1 }),
                                      roleName: e.name,
                                      roleColor: s,
                                      disabled: !U,
                                      verified: o,
                                      onClick: () => {
                                          A.A.open(t.guild_id, N.BEX.MEMBERS), A.A.selectRole(e.id);
                                      },
                                  },
                                  e.id,
                              )
                            : (0, r.jsx)(
                                  m.A,
                                  {
                                      className: a()(P.JC, { [P.HV]: n === G.length - 1 }),
                                      roleName: e.name,
                                      roleColor: s,
                                      verified: o,
                                  },
                                  e.id,
                              );
                    }),
                ],
            }),
            n
                ? (0, r.jsx)(f.aFV, {
                      renderModal: (e) => {
                          var n, l;
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
                              (l = l =
                                  {
                                      onClose: () => (V(), e.onClose()),
                                      channelId: t.id,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              n),
                          );
                      },
                      onCloseRequest: () => i(!1),
                  })
                : null,
        ],
    });
}
