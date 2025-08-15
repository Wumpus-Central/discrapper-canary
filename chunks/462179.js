t.d(n, { Z: () => O });
var i = t(951288);
t(647438);
var l = t(442837),
    r = t(481060),
    d = t(239091),
    a = t(749210),
    o = t(305325),
    s = t(281956),
    c = t(357156),
    u = t(703656),
    _ = t(922482),
    g = t(984933),
    p = t(430824),
    m = t(496675),
    f = t(626135),
    I = t(572004),
    v = t(482241),
    h = t(951539),
    E = t(894017),
    b = t(274311),
    C = t(954313),
    T = t(118998),
    y = t(139712),
    x = t(765305),
    L = t(981631),
    S = t(388032);
function D(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function j(e, n) {
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
function O(e) {
    let { guild: n, channel: O, guildScheduledEvent: U, isActive: N, recurrenceId: G, onActionTaken: Z } = e,
        { scheduled_start_time: P, id: R, entity_type: z, guild_id: A } = U,
        { canManageGuildEvent: B } = (0, c.XJ)(null != O ? O : n),
        w = B(U),
        k = (0, h.ZP)(U),
        H = (0, b.T)(null == O ? void 0 : O.id, U.id),
        { withinStartWindow: M } = (0, C.ub)(P),
        X = (0, l.e7)([m.Z], () => null == O || !O.isGuildVocal() || m.Z.can(L.Plq.CONNECT, O), [O]),
        V = (0, s.J)(A),
        F = (0, E.Z)(G, R);
    function Y(e) {
        e.stopPropagation(), (0, y.Z)(R, G, A);
    }
    async function W(e) {
        e.stopPropagation(),
            await a.Z.joinGuild(A),
            p.Z.addConditionalChangeListener(() => null == p.Z.getGuild(A) || (N || Y(e), q(e), !1));
    }
    function q(e) {
        e.stopPropagation();
        let n = g.ZP.getDefaultChannel(A);
        (0, r.pTH)(), (0, u.XU)(A, null == n ? void 0 : n.id);
    }
    return {
        onDeleteClick: w
            ? function (e) {
                  e.stopPropagation(),
                      w &&
                          !N &&
                          (0, r.h7j)((e) =>
                              (0, i.jsx)(
                                  r.ConfirmModal,
                                  j(D({}, e), {
                                      header: S.intl.string(S.t.R5bpio),
                                      confirmText: S.intl.string(S.t.oyYWHB),
                                      cancelText: S.intl.string(S.t["ETE/oK"]),
                                      onConfirm: () => v.Z.deleteGuildEvent(R, A),
                                      children: (0, i.jsx)(r.Text, {
                                          variant: "text-md/normal",
                                          children: S.intl.string(S.t.v2GWNT),
                                      }),
                                  }),
                              ),
                          );
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != n &&
                    (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            t.e("34261"),
                            t.e("70274"),
                            t.e("42743"),
                            t.e("27434"),
                        ]).then(t.bind(t, 215269));
                        return (t) =>
                            (0, i.jsx)(
                                e,
                                D(
                                    {
                                        guildEventId: R,
                                        recurrenceId: G,
                                        channel: O,
                                        guild: n,
                                    },
                                    t,
                                ),
                            );
                    });
        },
        onJoinClick:
            X || V
                ? function (e) {
                      if ((e.stopPropagation(), V)) {
                          null == Z || Z(), (0, o.hk)(A);
                          return;
                      }
                      (null == O ? void 0 : O.isGuildStageVoice())
                          ? ((0, _.Cq)(O), null == Z || Z())
                          : (null == O ? void 0 : O.isGuildVoice()) &&
                            (v.Z.joinVoiceEvent(O.guild_id, O.id), null == Z || Z());
                  }
                : void 0,
        onRsvpClick: Y,
        onStartClick:
            w && M && !(null == F ? void 0 : F.is_canceled)
                ? function (e) {
                      e.stopPropagation(),
                          (0, r.ZDy)(async () => {
                              let { default: e } = await Promise.all([t.e("70274"), t.e("84722"), t.e("29129")]).then(
                                  t.bind(t, 296864),
                              );
                              return (n) =>
                                  (0, i.jsx)(
                                      e,
                                      j(D({}, n), {
                                          event: U,
                                          onSuccess: Z,
                                      }),
                                  );
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!k || !H) {
                    let e = (0, T.H)({
                        guildId: A,
                        guildEventId: R,
                    });
                    (0, I.JG)(e),
                        f.default.track(L.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: A,
                            guild_scheduled_event_id: R,
                        });
                    return;
                }
                (0, r.ZDy)(async () => {
                    let { default: e } = await Promise.all([t.e("7654"), t.e("49049"), t.e("24262")]).then(
                        t.bind(t, 560114),
                    );
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            j(D({}, t), {
                                guild: n,
                                channel: O,
                                guildScheduledEvent: U,
                                source: L.t4x.GUILD_EVENTS,
                            }),
                        );
                });
            }
        },
        onEndClick:
            w && z === x.WX.EXTERNAL && N
                ? function (e) {
                      if ((e.stopPropagation(), !w)) return;
                      let n = () => {
                          v.Z.endEvent(R, A), (0, r.pTH)();
                      };
                      (0, r.h7j)((e) =>
                          (0, i.jsx)(
                              r.ConfirmModal,
                              j(D({}, e), {
                                  header: S.intl.string(S.t.qaYzPD),
                                  confirmText: S.intl.string(S.t.mjB9pa),
                                  cancelText: S.intl.string(S.t["ETE/oK"]),
                                  onConfirm: n,
                                  children: (0, i.jsx)(r.Text, {
                                      variant: "text-md/normal",
                                      children: S.intl.string(S.t.bnDQ7O),
                                  }),
                              }),
                          ),
                      );
                  }
                : void 0,
        onJoinGuildClick: W,
        onGoToGuildClick: q,
    };
}
