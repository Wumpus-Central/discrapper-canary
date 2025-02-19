t.d(n, { Z: () => I });
var r = t(200651);
t(192379);
var i = t(442837),
    l = t(481060),
    o = t(239091),
    c = t(749210),
    a = t(305325),
    s = t(281956),
    u = t(357156),
    d = t(703656),
    g = t(922482),
    p = t(984933),
    v = t(430824),
    h = t(496675),
    f = t(626135),
    m = t(572004),
    j = t(482241),
    b = t(951539),
    y = t(894017),
    x = t(274311),
    Z = t(854698),
    O = t(118998),
    N = t(139712),
    P = t(765305),
    C = t(981631),
    E = t(388032);
function k(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
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
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
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
        { scheduled_start_time: G, id: W, entity_type: L, guild_id: R } = S,
        { canManageGuildEvent: M } = (0, u.XJ)(null != I ? I : n),
        U = M(S),
        H = (0, b.ZP)(S),
        A = (0, x.T)(null == I ? void 0 : I.id, S.id),
        { withinStartWindow: z } = (0, Z.ub)(G),
        B = (0, i.e7)([h.Z], () => null == I || !I.isGuildVocal() || h.Z.can(C.Plq.CONNECT, I), [I]),
        X = (0, s.J)(R),
        J = (0, y.Z)(_, W);
    function V(e) {
        e.stopPropagation(), (0, N.Z)(W, _, R);
    }
    async function q(e) {
        e.stopPropagation(), await c.Z.joinGuild(R), v.Z.addConditionalChangeListener(() => null == v.Z.getGuild(R) || (T || V(e), K(e), !1));
    }
    function K(e) {
        e.stopPropagation();
        let n = p.ZP.getDefaultChannel(R);
        (0, l.pTH)(), (0, d.XU)(R, null == n ? void 0 : n.id);
    }
    return {
        onDeleteClick: U
            ? function (e) {
                  e.stopPropagation(),
                      U &&
                          !T &&
                          (0, l.h7j)((e) =>
                              (0, r.jsx)(
                                  l.ConfirmModal,
                                  w(k({}, e), {
                                      header: E.NW.string(E.t.R5bpio),
                                      confirmText: E.NW.string(E.t.oyYWHB),
                                      cancelText: E.NW.string(E.t['ETE/oK']),
                                      onConfirm: () => j.Z.deleteGuildEvent(W, R),
                                      children: (0, r.jsx)(l.Text, {
                                          variant: 'text-md/normal',
                                          children: E.NW.string(E.t.v2GWNT)
                                      })
                                  })
                              )
                          );
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != n &&
                    (0, o.jW)(e, async () => {
                        let { default: e } = await Promise.all([t.e('99272'), t.e('42743'), t.e('10472')]).then(t.bind(t, 215269));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                k(
                                    {
                                        guildEventId: W,
                                        recurrenceId: _,
                                        channel: I,
                                        guild: n
                                    },
                                    t
                                )
                            );
                    });
        },
        onJoinClick:
            B || X
                ? function (e) {
                      if ((e.stopPropagation(), X)) {
                          null == D || D(), (0, a.hk)(R);
                          return;
                      }
                      (null == I ? void 0 : I.isGuildStageVoice()) ? ((0, g.Cq)(I), null == D || D()) : (null == I ? void 0 : I.isGuildVoice()) && (j.Z.joinVoiceEvent(I.guild_id, I.id), null == D || D());
                  }
                : void 0,
        onRsvpClick: V,
        onStartClick:
            U && z && !(null == J ? void 0 : J.is_canceled)
                ? function (e) {
                      e.stopPropagation(),
                          (0, l.ZDy)(async () => {
                              let { default: e } = await Promise.all([t.e('84722'), t.e('21817')]).then(t.bind(t, 296864));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      w(k({}, n), {
                                          event: S,
                                          onSuccess: D
                                      })
                                  );
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!H || !A) {
                    let e = (0, O.H)({
                        guildId: R,
                        guildEventId: W
                    });
                    (0, m.JG)(e),
                        f.default.track(C.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: R,
                            guild_scheduled_event_id: W
                        });
                    return;
                }
                (0, l.ZDy)(async () => {
                    let { default: e } = await Promise.all([t.e('7654'), t.e('49049'), t.e('90067')]).then(t.bind(t, 560114));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            w(k({}, t), {
                                guild: n,
                                channel: I,
                                guildScheduledEvent: S,
                                source: C.t4x.GUILD_EVENTS
                            })
                        );
                });
            }
        },
        onEndClick:
            U && L === P.WX.EXTERNAL && T
                ? function (e) {
                      if ((e.stopPropagation(), !U)) return;
                      let n = () => {
                          j.Z.endEvent(W, R), (0, l.pTH)();
                      };
                      (0, l.h7j)((e) =>
                          (0, r.jsx)(
                              l.ConfirmModal,
                              w(k({}, e), {
                                  header: E.NW.string(E.t.qaYzPD),
                                  confirmText: E.NW.string(E.t.mjB9pa),
                                  cancelText: E.NW.string(E.t['ETE/oK']),
                                  onConfirm: n,
                                  children: (0, r.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: E.NW.string(E.t.bnDQ7O)
                                  })
                              })
                          )
                      );
                  }
                : void 0,
        onJoinGuildClick: q,
        onGoToGuildClick: K
    };
}
