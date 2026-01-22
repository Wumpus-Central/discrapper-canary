n.d(t, {
    A: () => R,
}),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(80682),
    u = n(685399),
    d = n(833349),
    f = n(765379),
    p = n(713654),
    h = n(565688),
    b = n(93879),
    g = n(961350),
    m = n(71393),
    A = n(576705),
    y = n(290863),
    O = n(461213),
    j = n(977997),
    v = n(403362),
    x = n(246084),
    E = n(667936),
    _ = n(879349),
    C = n(884415),
    S = n(611330),
    I = n(652215),
    N = n(188275),
    T = n(985018),
    P = n(439792),
    w = n(335419);

function R(e) {
    var t, i;
    let a,
        { channel: p, guild: m, onAction: A, voiceStates: j, isChannelSelected: x, shouldShowSettingNudge: _ } = e;
    (a = l.useMemo(() => {
        var e;
        return null == j || j.length > 50
            ? {}
            : {
                  [p.getGuildId()]:
                      null !=
                      (e = j.map((e) => {
                          let { user: t } = e;
                          return t.id;
                      }))
                          ? e
                          : [],
              };
    }, [p, j])),
        (0, c.E)(a, "VoiceChannelActivities");
    let C = (0, u.Ay)(p),
        S = Array.from((0, u.Rz)(C).values()),
        w = null != (t = null == j ? void 0 : j.filter(v.Vq)) ? t : [],
        R = () => (e) =>
            ([I.$pd.PLAYING, I.$pd.WATCHING].includes(e.type) &&
                (null != e.assets || null != e.state || null != e.details || null != e.party)) ||
            e.type === I.$pd.LISTENING,
        M = (0, s.bG)(
            [O.A, y.A, g.default],
            () => {
                let e = {};
                return (
                    w.forEach((t) => {
                        let n =
                            t.user.id === g.default.getId()
                                ? O.A.findActivity(R(), !0)
                                : y.A.findActivity(t.user.id, R());
                        if (null != n && !(0, f.A)(n)) {
                            var r, l, i, a;
                            let s = ""
                                    .concat(null != (r = n.application_id) ? r : "", ":")
                                    .concat(null != (l = null == (a = n.party) ? void 0 : a.id) ? l : t.user.id),
                                o =
                                    null != (i = e[s])
                                        ? i
                                        : {
                                              members: [],
                                              activity: n,
                                          };
                            o.members.push(t), (0, d.A)(o.activity, I.jUm.JOIN) || (o.activity = n), (e[s] = o);
                        }
                    }),
                    Object.values(e)
                );
            },
            [w],
            s.My,
        ),
        L = (0, h.m)({
            location: "voice_channel_activities",
        });
    return M.length + S.length === 0
        ? null
        : (0, r.jsxs)(o.HOs, {
              className: P.kL,
              children: [
                  (0, r.jsx)(D, {
                      channel: p,
                      isChannelSelected: x,
                      voiceStatesCount: null != (i = null == j ? void 0 : j.length) ? i : 0,
                  }),
                  (0, r.jsx)("div", {
                      className: P.zN,
                  }),
                  S.map((e, t) => {
                      var n;
                      return (0, r.jsx)(
                          E.A,
                          {
                              embeddedApp: e,
                              presenceActivity: null != (n = e.presenceActivity) ? n : void 0,
                              channel: p,
                              onAction: A,
                          },
                          t,
                      );
                  }),
                  M.map((e, t) => {
                      let { members: n, activity: i } = e;
                      return L && null != i.application_id && N.sQ.has(i.application_id)
                          ? (0, r.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(E.A, {
                                            presenceActivity: i,
                                            channel: p,
                                            members: n,
                                            onAction: A,
                                        }),
                                        (0, r.jsx)(b.A, {
                                            className: P.L,
                                            applicationId: i.application_id,
                                            userIds: n.map((e) => e.user.id),
                                            location: "voice_channel",
                                            guildId: p.guild_id,
                                            channelId: p.id,
                                        }),
                                    ],
                                },
                                "".concat(t, "-with-gifting-breadcrumb"),
                            )
                          : (0, r.jsx)(
                                E.A,
                                {
                                    presenceActivity: i,
                                    channel: p,
                                    members: n,
                                    onAction: A,
                                },
                                t,
                            );
                  }),
                  _ &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("div", {
                                  className: P.zN,
                              }),
                              (0, r.jsx)("div", {
                                  className: P.Vo,
                                  children: (0, r.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      tag: "span",
                                      children: T.intl.format(T.t.ePyoY2, {
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
                                                                  guild: m,
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

function D(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: l } = e,
        i = (0, s.bG)([A.A], () => !A.A.can(I.xBc.CONNECT, t)),
        o = (0, s.bG)([j.A], () => j.A.hasVideo(t.id)),
        c = (0, x.Ay)({
            channel: t,
            locked: i,
            video: o,
            selected: n,
        }),
        u = (0, s.bG)([m.A], () => m.A.getGuild(t.guild_id));
    return null == (0, p.gU)(t, u)
        ? null
        : (0, r.jsxs)("div", {
              className: a()(P.oT, w.oT),
              children: [
                  (0, r.jsx)(_.A, {
                      channel: t,
                  }),
                  c
                      ? (0, r.jsx)(C.A, {
                            userCount: l,
                            video: o,
                            channel: t,
                        })
                      : (0, r.jsx)(S.A, {
                            userCount: l,
                        }),
              ],
          });
}
