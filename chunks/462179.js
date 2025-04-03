t.d(n, { Z: () => D });
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    a = t(239091),
    d = t(749210),
    o = t(305325),
    s = t(281956),
    c = t(357156),
    u = t(703656),
    _ = t(922482),
    p = t(984933),
    g = t(430824),
    m = t(496675),
    I = t(626135),
    f = t(572004),
    v = t(482241),
    N = t(951539),
    h = t(894017),
    E = t(274311),
    C = t(854698),
    b = t(118998),
    x = t(139712),
    T = t(765305),
    y = t(981631),
    L = t(388032);
function j(e) {
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
        { scheduled_start_time: P, id: W, entity_type: z, guild_id: k } = O,
        { canManageGuildEvent: A } = (0, c.XJ)(null != D ? D : n),
        R = A(O),
        B = (0, N.ZP)(O),
        w = (0, E.T)(null == D ? void 0 : D.id, O.id),
        { withinStartWindow: H } = (0, C.ub)(P),
        M = (0, r.e7)([m.Z], () => null == D || !D.isGuildVocal() || m.Z.can(y.Plq.CONNECT, D), [D]),
        X = (0, s.J)(k),
        V = (0, h.Z)(Z, W);
    function F(e) {
        e.stopPropagation(), (0, x.Z)(W, Z, k);
    }
    async function Y(e) {
        e.stopPropagation(), await d.Z.joinGuild(k), g.Z.addConditionalChangeListener(() => null == g.Z.getGuild(k) || (U || F(e), q(e), !1));
    }
    function q(e) {
        e.stopPropagation();
        let n = p.ZP.getDefaultChannel(k);
        (0, l.pTH)(), (0, u.XU)(k, null == n ? void 0 : n.id);
    }
    return {
        onDeleteClick: R
            ? function (e) {
                  e.stopPropagation(),
                      R &&
                          !U &&
                          (0, l.h7j)((e) =>
                              (0, i.jsx)(
                                  l.ConfirmModal,
                                  S(j({}, e), {
                                      header: L.NW.string(L.t.R5bpio),
                                      confirmText: L.NW.string(L.t.oyYWHB),
                                      cancelText: L.NW.string(L.t['ETE/oK']),
                                      onConfirm: () => v.Z.deleteGuildEvent(W, k),
                                      children: (0, i.jsx)(l.Text, {
                                          variant: 'text-md/normal',
                                          children: L.NW.string(L.t.v2GWNT)
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
                        let { default: e } = await Promise.all([t.e('99272'), t.e('42743'), t.e('10472')]).then(t.bind(t, 215269));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                j(
                                    {
                                        guildEventId: W,
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
            M || X
                ? function (e) {
                      if ((e.stopPropagation(), X)) {
                          null == G || G(), (0, o.hk)(k);
                          return;
                      }
                      (null == D ? void 0 : D.isGuildStageVoice()) ? ((0, _.Cq)(D), null == G || G()) : (null == D ? void 0 : D.isGuildVoice()) && (v.Z.joinVoiceEvent(D.guild_id, D.id), null == G || G());
                  }
                : void 0,
        onRsvpClick: F,
        onStartClick:
            R && H && !(null == V ? void 0 : V.is_canceled)
                ? function (e) {
                      e.stopPropagation(),
                          (0, l.ZDy)(async () => {
                              let { default: e } = await Promise.all([t.e('84722'), t.e('37805')]).then(t.bind(t, 296864));
                              return (n) =>
                                  (0, i.jsx)(
                                      e,
                                      S(j({}, n), {
                                          event: O,
                                          onSuccess: G
                                      })
                                  );
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!B || !w) {
                    let e = (0, b.H)({
                        guildId: k,
                        guildEventId: W
                    });
                    (0, f.JG)(e),
                        I.default.track(y.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: k,
                            guild_scheduled_event_id: W
                        });
                    return;
                }
                (0, l.ZDy)(async () => {
                    let { default: e } = await Promise.all([t.e('7654'), t.e('49049'), t.e('80429')]).then(t.bind(t, 560114));
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            S(j({}, t), {
                                guild: n,
                                channel: D,
                                guildScheduledEvent: O,
                                source: y.t4x.GUILD_EVENTS
                            })
                        );
                });
            }
        },
        onEndClick:
            R && z === T.WX.EXTERNAL && U
                ? function (e) {
                      if ((e.stopPropagation(), !R)) return;
                      let n = () => {
                          v.Z.endEvent(W, k), (0, l.pTH)();
                      };
                      (0, l.h7j)((e) =>
                          (0, i.jsx)(
                              l.ConfirmModal,
                              S(j({}, e), {
                                  header: L.NW.string(L.t.qaYzPD),
                                  confirmText: L.NW.string(L.t.mjB9pa),
                                  cancelText: L.NW.string(L.t['ETE/oK']),
                                  onConfirm: n,
                                  children: (0, i.jsx)(l.Text, {
                                      variant: 'text-md/normal',
                                      children: L.NW.string(L.t.bnDQ7O)
                                  })
                              })
                          )
                      );
                  }
                : void 0,
        onJoinGuildClick: Y,
        onGoToGuildClick: q
    };
}
