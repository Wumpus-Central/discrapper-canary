n.d(t, {
    A: () => D,
}),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(80682),
    u = n(845056),
    d = n(685399),
    p = n(833349),
    h = n(765379),
    g = n(713654),
    f = n(565688),
    m = n(93879),
    b = n(961350),
    A = n(71393),
    y = n(576705),
    O = n(290863),
    j = n(461213),
    _ = n(977997),
    x = n(403362),
    v = n(246084),
    E = n(667936),
    C = n(879349),
    S = n(884415),
    I = n(611330),
    N = n(652215),
    T = n(188275),
    P = n(985018),
    w = n(439792),
    R = n(335419);

function D(e) {
    var t, i;
    let s,
        { channel: g, guild: A, onAction: y, voiceStates: _, isChannelSelected: v, shouldShowSettingNudge: C } = e;
    (s = l.useMemo(() => {
        var e;
        return null == _ || _.length > 50
            ? {}
            : {
                  [g.getGuildId()]:
                      null !=
                      (e = _.map((e) => {
                          let { user: t } = e;
                          return t.id;
                      }))
                          ? e
                          : [],
              };
    }, [g, _])),
        (0, c.E)(s, "VoiceChannelActivities");
    let S = (0, d.Ay)(g),
        I = Array.from((0, d.Rz)(S).values()),
        R = null != (t = null == _ ? void 0 : _.filter(x.Vq)) ? t : [],
        D = (0, a.bG)(
            [j.A, O.A, b.default],
            () => {
                let e = {};
                return (
                    R.forEach((t) => {
                        let n =
                            t.user.id === b.default.getId()
                                ? j.A.findActivity(u.N, !0)
                                : O.A.findActivity(t.user.id, u.N);
                        if (null != n && !(0, h.A)(n)) {
                            var r, l, i, s;
                            let a = ""
                                    .concat(null != (r = n.application_id) ? r : "", ":")
                                    .concat(null != (l = null == (s = n.party) ? void 0 : s.id) ? l : t.user.id),
                                o =
                                    null != (i = e[a])
                                        ? i
                                        : {
                                              members: [],
                                              activity: n,
                                          };
                            o.members.push(t), (0, p.A)(o.activity, N.jUm.JOIN) || (o.activity = n), (e[a] = o);
                        }
                    }),
                    Object.values(e)
                );
            },
            [R],
            a.My,
        ),
        M = (0, f.m)({
            location: "voice_channel_activities",
        });
    return D.length + I.length === 0
        ? null
        : (0, r.jsxs)(o.HOs, {
              className: w.kL,
              children: [
                  (0, r.jsx)(L, {
                      channel: g,
                      isChannelSelected: v,
                      voiceStatesCount: null != (i = null == _ ? void 0 : _.length) ? i : 0,
                  }),
                  (0, r.jsx)("div", {
                      className: w.zN,
                  }),
                  I.map((e, t) => {
                      var n;
                      return (0, r.jsx)(
                          E.A,
                          {
                              embeddedApp: e,
                              presenceActivity: null != (n = e.presenceActivity) ? n : void 0,
                              channel: g,
                              onAction: y,
                          },
                          t,
                      );
                  }),
                  D.map((e, t) => {
                      let { members: n, activity: i } = e;
                      return M && null != i.application_id && T.sQ.has(i.application_id)
                          ? (0, r.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(E.A, {
                                            presenceActivity: i,
                                            channel: g,
                                            members: n,
                                            onAction: y,
                                        }),
                                        (0, r.jsx)(m.A, {
                                            className: w.L,
                                            applicationId: i.application_id,
                                            userIds: n.map((e) => e.user.id),
                                            location: "voice_channel",
                                            guildId: g.guild_id,
                                            channelId: g.id,
                                        }),
                                    ],
                                },
                                "".concat(t, "-with-gifting-breadcrumb"),
                            )
                          : (0, r.jsx)(
                                E.A,
                                {
                                    presenceActivity: i,
                                    channel: g,
                                    members: n,
                                    onAction: y,
                                },
                                t,
                            );
                  }),
                  C &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: w.zN,
                              }),
                              (0, r.jsx)("div", {
                                  className: w.Vo,
                                  children: (0, r.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      tag: "span",
                                      children: P.intl.format(P.t.ePyoY2, {
                                          onClick: () => {
                                              (0, o.mMO)(async () => {
                                                  let { default: e } = await n.e("62026").then(n.bind(n, 585265));
                                                  return (t) => {
                                                      var n, l;
                                                      return (0, r.jsx)(
                                                          e,
                                                          ((n = (function (e) {
                                                              for (var t = 1; t < arguments.length; t++) {
                                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                                      r = Object.keys(n);
                                                                  "function" == typeof Object.getOwnPropertySymbols &&
                                                                      (r = r.concat(
                                                                          Object.getOwnPropertySymbols(n).filter(
                                                                              function (e) {
                                                                                  return Object.getOwnPropertyDescriptor(
                                                                                      n,
                                                                                      e,
                                                                                  ).enumerable;
                                                                              },
                                                                          ),
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
                                                          })({}, t)),
                                                          (l = l =
                                                              {
                                                                  guild: A,
                                                              }),
                                                          Object.getOwnPropertyDescriptors
                                                              ? Object.defineProperties(
                                                                    n,
                                                                    Object.getOwnPropertyDescriptors(l),
                                                                )
                                                              : (function (e, t) {
                                                                    var n = Object.keys(e);
                                                                    if (Object.getOwnPropertySymbols) {
                                                                        var r = Object.getOwnPropertySymbols(e);
                                                                        n.push.apply(n, r);
                                                                    }
                                                                    return n;
                                                                })(Object(l)).forEach(function (e) {
                                                                    Object.defineProperty(
                                                                        n,
                                                                        e,
                                                                        Object.getOwnPropertyDescriptor(l, e),
                                                                    );
                                                                }),
                                                          n),
                                                      );
                                                  };
                                              });
                                          },
                                      }),
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}

function L(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: l } = e,
        i = (0, a.bG)([y.A], () => !y.A.can(N.xBc.CONNECT, t)),
        o = (0, a.bG)([_.A], () => _.A.hasVideo(t.id)),
        c = (0, v.Ay)({
            channel: t,
            locked: i,
            video: o,
            selected: n,
        }),
        u = (0, a.bG)([A.A], () => A.A.getGuild(t.guild_id));
    return null == (0, g.gU)(t, u)
        ? null
        : (0, r.jsxs)("div", {
              className: s()(w.oT, R.oT),
              children: [
                  (0, r.jsx)(C.A, {
                      channel: t,
                  }),
                  c
                      ? (0, r.jsx)(S.A, {
                            userCount: l,
                            video: o,
                            channel: t,
                        })
                      : (0, r.jsx)(I.A, {
                            userCount: l,
                        }),
              ],
          });
}
