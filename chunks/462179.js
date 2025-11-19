e.d(n, { Z: () => S });
var l = e(54381);
e(473749);
var i = e(442837),
    r = e(481060),
    u = e(239091),
    a = e(749210),
    o = e(305325),
    c = e(281956),
    s = e(357156),
    d = e(703656),
    g = e(922482),
    f = e(984933),
    h = e(430824),
    p = e(496675),
    v = e(626135),
    m = e(572004),
    Z = e(482241),
    y = e(951539),
    E = e(894017),
    b = e(274311),
    C = e(854698),
    P = e(118998),
    j = e(139712),
    x = e(765305),
    _ = e(981631),
    O = e(388032);
function T(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(e);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = e[n]),
                    n in t
                        ? Object.defineProperty(t, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[n] = l);
            });
    }
    return t;
}
function w(t, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (t, n) {
                  var e = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(t);
                      e.push.apply(e, l);
                  }
                  return e;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t
    );
}
function S(t) {
    let { guild: n, channel: S, guildScheduledEvent: k, isActive: D, recurrenceId: N, onActionTaken: I } = t,
        { scheduled_start_time: G, id: H, entity_type: L, guild_id: W } = k,
        { canManageGuildEvent: V } = (0, s.XJ)(null != S ? S : n),
        z = V(k),
        A = (0, y.ZP)(k),
        X = (0, b.T)(null == S ? void 0 : S.id, k.id),
        { withinStartWindow: U } = (0, C.ub)(G),
        R = (0, i.e7)([p.Z], () => null == S || !S.isGuildVocal() || p.Z.can(_.Plq.CONNECT, S), [S]),
        q = (0, c.J)(W),
        J = (0, E.Z)(N, H);
    function M(t) {
        t.stopPropagation(), (0, j.Z)(H, N, W);
    }
    async function Y(t) {
        t.stopPropagation(),
            await a.Z.joinGuild(W),
            h.Z.addConditionalChangeListener(
                () =>
                    null == h.Z.getGuild(W) ||
                    (D || M(t),
                    (function (t) {
                        t.stopPropagation();
                        let n = f.ZP.getDefaultChannel(W);
                        (0, r.pTH)(), (0, d.XU)(W, null == n ? void 0 : n.id);
                    })(t),
                    !1),
            );
    }
    return {
        onDeleteClick: z
            ? function (t) {
                  t.stopPropagation(),
                      z &&
                          !D &&
                          (0, r.h7j)((t) =>
                              (0, l.jsx)(
                                  r.ConfirmModal,
                                  w(T({}, t), {
                                      header: O.intl.string(O.t.R5bpin),
                                      confirmText: O.intl.string(O.t.oyYWHE),
                                      cancelText: O.intl.string(O.t["ETE/oC"]),
                                      onConfirm: () => Z.Z.deleteGuildEvent(H, W),
                                      children: (0, l.jsx)(r.Text, {
                                          variant: "text-md/normal",
                                          children: O.intl.string(O.t.v2GWNQ),
                                      }),
                                  }),
                              ),
                          );
              }
            : void 0,
        onContextMenu: function (t) {
            t.stopPropagation(),
                null != n &&
                    (0, u.jW)(t, async () => {
                        let { default: t } = await Promise.all([e.e("91973"), e.e("470")]).then(e.bind(e, 215269));
                        return (e) =>
                            (0, l.jsx)(
                                t,
                                T(
                                    {
                                        guildEventId: H,
                                        recurrenceId: N,
                                        channel: S,
                                        guild: n,
                                    },
                                    e,
                                ),
                            );
                    });
        },
        onJoinClick:
            R || q
                ? function (t) {
                      if ((t.stopPropagation(), q)) {
                          null == I || I(), (0, o.hk)(W);
                          return;
                      }
                      (null == S ? void 0 : S.isGuildStageVoice())
                          ? ((0, g.Cq)(S), null == I || I())
                          : (null == S ? void 0 : S.isGuildVoice()) &&
                            (Z.Z.joinVoiceEvent(S.guild_id, S.id), null == I || I());
                  }
                : void 0,
        onRsvpClick: M,
        onStartClick:
            z && U && !(null == J ? void 0 : J.is_canceled)
                ? function (t) {
                      t.stopPropagation(),
                          (0, r.ZDy)(async () => {
                              let { default: t } = await Promise.all([e.e("84722"), e.e("48221")]).then(
                                  e.bind(e, 296864),
                              );
                              return (n) =>
                                  (0, l.jsx)(
                                      t,
                                      w(T({}, n), {
                                          event: k,
                                          onSuccess: I,
                                      }),
                                  );
                          });
                  }
                : void 0,
        onInviteClick: function (t) {
            if ((t.stopPropagation(), null != n)) {
                if (!(0, P.T)(A, X, S)) {
                    let t = (0, P.H)({
                        guildId: W,
                        guildEventId: H,
                    });
                    (0, m.JG)(t),
                        v.default.track(_.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: W,
                            guild_scheduled_event_id: H,
                        });
                    return;
                }
                (0, r.ZDy)(async () => {
                    let { default: t } = await Promise.all([e.e("49049"), e.e("7654"), e.e("72651")]).then(
                        e.bind(e, 560114),
                    );
                    return (e) =>
                        (0, l.jsx)(
                            t,
                            w(T({}, e), {
                                guild: n,
                                channel: S,
                                guildScheduledEvent: k,
                                source: _.t4x.GUILD_EVENTS,
                            }),
                        );
                });
            }
        },
        onEndClick:
            z && L === x.WX.EXTERNAL && D
                ? function (t) {
                      if ((t.stopPropagation(), !z)) return;
                      let n = () => {
                          Z.Z.endEvent(H, W), (0, r.pTH)();
                      };
                      (0, r.h7j)((t) =>
                          (0, l.jsx)(
                              r.ConfirmModal,
                              w(T({}, t), {
                                  header: O.intl.string(O.t.qaYzPA),
                                  confirmText: O.intl.string(O.t.mjB9pd),
                                  cancelText: O.intl.string(O.t["ETE/oC"]),
                                  onConfirm: n,
                                  children: (0, l.jsx)(r.Text, {
                                      variant: "text-md/normal",
                                      children: O.intl.string(O.t.bnDQ7E),
                                  }),
                              }),
                          ),
                      );
                  }
                : void 0,
        onJoinGuildClick: Y,
    };
}
