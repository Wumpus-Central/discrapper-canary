t.d(n, { Z: () => S });
var l = t(255367);
t(73800);
var i = t(442837),
    r = t(481060),
    o = t(239091),
    c = t(749210),
    s = t(305325),
    a = t(281956),
    u = t(357156),
    d = t(703656),
    _ = t(922482),
    f = t(984933),
    h = t(430824),
    g = t(496675),
    m = t(626135),
    v = t(572004),
    p = t(482241),
    x = t(951539),
    j = t(894017),
    b = t(274311),
    Z = t(854698),
    y = t(118998),
    P = t(139712),
    C = t(765305),
    I = t(981631),
    N = t(388032);
function E(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                ((l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l));
            }));
    }
    return e;
}
function O(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function S(e) {
    let { guild: n, channel: S, guildScheduledEvent: T, isActive: k, recurrenceId: w, onActionTaken: R } = e,
        { scheduled_start_time: L, id: B, entity_type: D, guild_id: G } = T,
        { canManageGuildEvent: M } = (0, u.XJ)(null != S ? S : n),
        U = M(T),
        F = (0, x.ZP)(T),
        V = (0, b.T)(null == S ? void 0 : S.id, T.id),
        { withinStartWindow: A } = (0, Z.ub)(L),
        X = (0, i.e7)([g.Z], () => null == S || !S.isGuildVocal() || g.Z.can(I.Plq.CONNECT, S), [S]),
        z = (0, a.J)(G),
        H = (0, j.Z)(w, B);
    function W(e) {
        (e.stopPropagation(), (0, P.Z)(B, w, G));
    }
    async function q(e) {
        (e.stopPropagation(), await c.Z.joinGuild(G), h.Z.addConditionalChangeListener(() => null == h.Z.getGuild(G) || (k || W(e), J(e), !1)));
    }
    function J(e) {
        e.stopPropagation();
        let n = f.ZP.getDefaultChannel(G);
        ((0, r.pTH)(), (0, d.XU)(G, null == n ? void 0 : n.id));
    }
    return {
        onDeleteClick: U
            ? function (e) {
                  (e.stopPropagation(),
                      U &&
                          !k &&
                          (0, r.h7j)((e) =>
                              (0, l.jsx)(
                                  r.ConfirmModal,
                                  O(E({}, e), {
                                      header: N.intl.string(N.t.R5bpio),
                                      confirmText: N.intl.string(N.t.oyYWHB),
                                      cancelText: N.intl.string(N.t['ETE/oK']),
                                      onConfirm: () => p.Z.deleteGuildEvent(B, G),
                                      children: (0, l.jsx)(r.Text, {
                                          variant: 'text-md/normal',
                                          children: N.intl.string(N.t.v2GWNT)
                                      })
                                  })
                              )
                          ));
              }
            : void 0,
        onContextMenu: function (e) {
            (e.stopPropagation(),
                null != n &&
                    (0, o.jW)(e, async () => {
                        let { default: e } = await Promise.all([t.e('34261'), t.e('27434')]).then(t.bind(t, 215269));
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                E(
                                    {
                                        guildEventId: B,
                                        recurrenceId: w,
                                        channel: S,
                                        guild: n
                                    },
                                    t
                                )
                            );
                    }));
        },
        onJoinClick:
            X || z
                ? function (e) {
                      if ((e.stopPropagation(), z)) {
                          (null == R || R(), (0, s.hk)(G));
                          return;
                      }
                      (null == S ? void 0 : S.isGuildStageVoice()) ? ((0, _.Cq)(S), null == R || R()) : (null == S ? void 0 : S.isGuildVoice()) && (p.Z.joinVoiceEvent(S.guild_id, S.id), null == R || R());
                  }
                : void 0,
        onRsvpClick: W,
        onStartClick:
            U && A && !(null == H ? void 0 : H.is_canceled)
                ? function (e) {
                      (e.stopPropagation(),
                          (0, r.ZDy)(async () => {
                              let { default: e } = await Promise.all([t.e('84722'), t.e('4598')]).then(t.bind(t, 296864));
                              return (n) =>
                                  (0, l.jsx)(
                                      e,
                                      O(E({}, n), {
                                          event: T,
                                          onSuccess: R
                                      })
                                  );
                          }));
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!F || !V) {
                    let e = (0, y.H)({
                        guildId: G,
                        guildEventId: B
                    });
                    ((0, v.JG)(e),
                        m.default.track(I.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: G,
                            guild_scheduled_event_id: B
                        }));
                    return;
                }
                (0, r.ZDy)(async () => {
                    let { default: e } = await Promise.all([t.e('7654'), t.e('49049'), t.e('29328')]).then(t.bind(t, 560114));
                    return (t) =>
                        (0, l.jsx)(
                            e,
                            O(E({}, t), {
                                guild: n,
                                channel: S,
                                guildScheduledEvent: T,
                                source: I.t4x.GUILD_EVENTS
                            })
                        );
                });
            }
        },
        onEndClick:
            U && D === C.WX.EXTERNAL && k
                ? function (e) {
                      if ((e.stopPropagation(), !U)) return;
                      let n = () => {
                          (p.Z.endEvent(B, G), (0, r.pTH)());
                      };
                      (0, r.h7j)((e) =>
                          (0, l.jsx)(
                              r.ConfirmModal,
                              O(E({}, e), {
                                  header: N.intl.string(N.t.qaYzPD),
                                  confirmText: N.intl.string(N.t.mjB9pa),
                                  cancelText: N.intl.string(N.t['ETE/oK']),
                                  onConfirm: n,
                                  children: (0, l.jsx)(r.Text, {
                                      variant: 'text-md/normal',
                                      children: N.intl.string(N.t.bnDQ7O)
                                  })
                              })
                          )
                      );
                  }
                : void 0,
        onJoinGuildClick: q,
        onGoToGuildClick: J
    };
}
