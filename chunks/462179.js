t.d(n, { Z: () => D });
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(239091),
    d = t(749210),
    o = t(305325),
    s = t(281956),
    c = t(357156),
    u = t(703656),
    _ = t(922482),
    g = t(984933),
    p = t(430824),
    m = t(496675),
    I = t(626135),
    f = t(572004),
    v = t(482241),
    h = t(951539),
    C = t(894017),
    E = t(274311),
    b = t(854698),
    x = t(118998),
    T = t(139712),
    y = t(765305),
    L = t(981631),
    j = t(388032);
function N(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function S(e, n) {
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
function D(e) {
    let { guild: n, channel: D, guildScheduledEvent: O, isActive: U, recurrenceId: Z, onActionTaken: G } = e,
        { scheduled_start_time: P, id: z, entity_type: k, guild_id: A } = O,
        { canManageGuildEvent: R } = (0, c.XJ)(null != D ? D : n),
        B = R(O),
        w = (0, h.ZP)(O),
        H = (0, E.T)(null == D ? void 0 : D.id, O.id),
        { withinStartWindow: M } = (0, b.ub)(P),
        X = (0, l.e7)([m.Z], () => null == D || !D.isGuildVocal() || m.Z.can(L.Plq.CONNECT, D), [D]),
        V = (0, s.J)(A),
        F = (0, C.Z)(Z, z);
    function Y(e) {
        e.stopPropagation(), (0, T.Z)(z, Z, A);
    }
    async function W(e) {
        e.stopPropagation(), await d.Z.joinGuild(A), p.Z.addConditionalChangeListener(() => null == p.Z.getGuild(A) || (U || Y(e), q(e), !1));
    }
    function q(e) {
        e.stopPropagation();
        let n = g.ZP.getDefaultChannel(A);
        (0, r.pTH)(), (0, u.XU)(A, null == n ? void 0 : n.id);
    }
    return {
        onDeleteClick: B
            ? function (e) {
                  e.stopPropagation(),
                      B &&
                          !U &&
                          (0, r.h7j)((e) =>
                              (0, i.jsx)(
                                  r.ConfirmModal,
                                  S(N({}, e), {
                                      header: j.intl.string(j.t.R5bpio),
                                      confirmText: j.intl.string(j.t.oyYWHB),
                                      cancelText: j.intl.string(j.t['ETE/oK']),
                                      onConfirm: () => v.Z.deleteGuildEvent(z, A),
                                      children: (0, i.jsx)(r.Text, {
                                          variant: 'text-md/normal',
                                          children: j.intl.string(j.t.v2GWNT)
                                      })
                                  })
                              )
                          );
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != n &&
                    (0, a.jW)(e, async () => {
                        let { default: e } = await Promise.all([t.e('34261'), t.e('42743'), t.e('27434')]).then(t.bind(t, 215269));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                N(
                                    {
                                        guildEventId: z,
                                        recurrenceId: Z,
                                        channel: D,
                                        guild: n
                                    },
                                    t
                                )
                            );
                    });
        },
        onJoinClick:
            X || V
                ? function (e) {
                      if ((e.stopPropagation(), V)) {
                          null == G || G(), (0, o.hk)(A);
                          return;
                      }
                      (null == D ? void 0 : D.isGuildStageVoice()) ? ((0, _.Cq)(D), null == G || G()) : (null == D ? void 0 : D.isGuildVoice()) && (v.Z.joinVoiceEvent(D.guild_id, D.id), null == G || G());
                  }
                : void 0,
        onRsvpClick: Y,
        onStartClick:
            B && M && !(null == F ? void 0 : F.is_canceled)
                ? function (e) {
                      e.stopPropagation(),
                          (0, r.ZDy)(async () => {
                              let { default: e } = await Promise.all([t.e('84722'), t.e('37805')]).then(t.bind(t, 296864));
                              return (n) =>
                                  (0, i.jsx)(
                                      e,
                                      S(N({}, n), {
                                          event: O,
                                          onSuccess: G
                                      })
                                  );
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!w || !H) {
                    let e = (0, x.H)({
                        guildId: A,
                        guildEventId: z
                    });
                    (0, f.JG)(e),
                        I.default.track(L.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: A,
                            guild_scheduled_event_id: z
                        });
                    return;
                }
                (0, r.ZDy)(async () => {
                    let { default: e } = await Promise.all([t.e('7654'), t.e('49049'), t.e('47888')]).then(t.bind(t, 560114));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            S(N({}, t), {
                                guild: n,
                                channel: D,
                                guildScheduledEvent: O,
                                source: L.t4x.GUILD_EVENTS
                            })
                        );
                });
            }
        },
        onEndClick:
            B && k === y.WX.EXTERNAL && U
                ? function (e) {
                      if ((e.stopPropagation(), !B)) return;
                      let n = () => {
                          v.Z.endEvent(z, A), (0, r.pTH)();
                      };
                      (0, r.h7j)((e) =>
                          (0, i.jsx)(
                              r.ConfirmModal,
                              S(N({}, e), {
                                  header: j.intl.string(j.t.qaYzPD),
                                  confirmText: j.intl.string(j.t.mjB9pa),
                                  cancelText: j.intl.string(j.t['ETE/oK']),
                                  onConfirm: n,
                                  children: (0, i.jsx)(r.Text, {
                                      variant: 'text-md/normal',
                                      children: j.intl.string(j.t.bnDQ7O)
                                  })
                              })
                          )
                      );
                  }
                : void 0,
        onJoinGuildClick: W,
        onGoToGuildClick: q
    };
}
