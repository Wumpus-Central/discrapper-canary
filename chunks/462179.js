t.d(n, { Z: () => I });
var i = t(255367);
t(73800);
var r = t(442837),
    l = t(481060),
    o = t(239091),
    a = t(749210),
    c = t(305325),
    s = t(281956),
    u = t(357156),
    d = t(703656),
    g = t(922482),
    p = t(984933),
    f = t(430824),
    h = t(496675),
    v = t(626135),
    m = t(572004),
    j = t(482241),
    b = t(951539),
    y = t(894017),
    x = t(274311),
    Z = t(854698),
    O = t(118998),
    P = t(139712),
    C = t(765305),
    E = t(981631),
    N = t(388032);
function k(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                ((i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i));
            }));
    }
    return e;
}
function w(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, i);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function I(e) {
    let { guild: n, channel: I, guildScheduledEvent: S, isActive: T, recurrenceId: _, onActionTaken: D } = e,
        { scheduled_start_time: G, id: L, entity_type: R, guild_id: M } = S,
        { canManageGuildEvent: U } = (0, u.XJ)(null != I ? I : n),
        H = U(S),
        A = (0, b.ZP)(S),
        B = (0, x.T)(null == I ? void 0 : I.id, S.id),
        { withinStartWindow: J } = (0, Z.ub)(G),
        X = (0, r.e7)([h.Z], () => null == I || !I.isGuildVocal() || h.Z.can(E.Plq.CONNECT, I), [I]),
        z = (0, s.J)(M),
        V = (0, y.Z)(_, L);
    function q(e) {
        (e.stopPropagation(), (0, P.Z)(L, _, M));
    }
    async function W(e) {
        (e.stopPropagation(), await a.Z.joinGuild(M), f.Z.addConditionalChangeListener(() => null == f.Z.getGuild(M) || (T || q(e), K(e), !1)));
    }
    function K(e) {
        e.stopPropagation();
        let n = p.ZP.getDefaultChannel(M);
        ((0, l.pTH)(), (0, d.XU)(M, null == n ? void 0 : n.id));
    }
    return {
        onDeleteClick: H
            ? function (e) {
                  (e.stopPropagation(),
                      H &&
                          !T &&
                          (0, l.h7j)((e) =>
                              (0, i.jsx)(
                                  l.ConfirmModal,
                                  w(k({}, e), {
                                      header: N.intl.string(N.t.R5bpio),
                                      confirmText: N.intl.string(N.t.oyYWHB),
                                      cancelText: N.intl.string(N.t['ETE/oK']),
                                      onConfirm: () => j.Z.deleteGuildEvent(L, M),
                                      children: (0, i.jsx)(l.Text, {
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
                            (0, i.jsx)(
                                e,
                                k(
                                    {
                                        guildEventId: L,
                                        recurrenceId: _,
                                        channel: I,
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
                          (null == D || D(), (0, c.hk)(M));
                          return;
                      }
                      (null == I ? void 0 : I.isGuildStageVoice()) ? ((0, g.Cq)(I), null == D || D()) : (null == I ? void 0 : I.isGuildVoice()) && (j.Z.joinVoiceEvent(I.guild_id, I.id), null == D || D());
                  }
                : void 0,
        onRsvpClick: q,
        onStartClick:
            H && J && !(null == V ? void 0 : V.is_canceled)
                ? function (e) {
                      (e.stopPropagation(),
                          (0, l.ZDy)(async () => {
                              let { default: e } = await Promise.all([t.e('84722'), t.e('4598')]).then(t.bind(t, 296864));
                              return (n) =>
                                  (0, i.jsx)(
                                      e,
                                      w(k({}, n), {
                                          event: S,
                                          onSuccess: D
                                      })
                                  );
                          }));
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!A || !B) {
                    let e = (0, O.H)({
                        guildId: M,
                        guildEventId: L
                    });
                    ((0, m.JG)(e),
                        v.default.track(E.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: M,
                            guild_scheduled_event_id: L
                        }));
                    return;
                }
                (0, l.ZDy)(async () => {
                    let { default: e } = await Promise.all([t.e('7654'), t.e('49049'), t.e('29328')]).then(t.bind(t, 560114));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            w(k({}, t), {
                                guild: n,
                                channel: I,
                                guildScheduledEvent: S,
                                source: E.t4x.GUILD_EVENTS
                            })
                        );
                });
            }
        },
        onEndClick:
            H && R === C.WX.EXTERNAL && T
                ? function (e) {
                      if ((e.stopPropagation(), !H)) return;
                      let n = () => {
                          (j.Z.endEvent(L, M), (0, l.pTH)());
                      };
                      (0, l.h7j)((e) =>
                          (0, i.jsx)(
                              l.ConfirmModal,
                              w(k({}, e), {
                                  header: N.intl.string(N.t.qaYzPD),
                                  confirmText: N.intl.string(N.t.mjB9pa),
                                  cancelText: N.intl.string(N.t['ETE/oK']),
                                  onConfirm: n,
                                  children: (0, i.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: N.intl.string(N.t.bnDQ7O)
                                  })
                              })
                          )
                      );
                  }
                : void 0,
        onJoinGuildClick: W,
        onGoToGuildClick: K
    };
}
