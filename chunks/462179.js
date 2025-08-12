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
    f = t(922482),
    g = t(984933),
    h = t(430824),
    _ = t(496675),
    v = t(626135),
    m = t(572004),
    x = t(482241),
    j = t(951539),
    p = t(894017),
    b = t(274311),
    Z = t(854698),
    y = t(118998),
    P = t(139712),
    C = t(765305),
    N = t(981631),
    E = t(388032);
function I(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
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
    let { guild: n, channel: S, guildScheduledEvent: T, isActive: w, recurrenceId: k, onActionTaken: R } = e,
        { scheduled_start_time: L, id: D, entity_type: G, guild_id: B } = T,
        { canManageGuildEvent: M } = (0, u.XJ)(null != S ? S : n),
        A = M(T),
        U = (0, j.ZP)(T),
        F = (0, b.T)(null == S ? void 0 : S.id, T.id),
        { withinStartWindow: V } = (0, Z.ub)(L),
        X = (0, i.e7)([_.Z], () => null == S || !S.isGuildVocal() || _.Z.can(N.Plq.CONNECT, S), [S]),
        z = (0, a.J)(B),
        H = (0, p.Z)(k, D);
    function W(e) {
        e.stopPropagation(), (0, P.Z)(D, k, B);
    }
    async function q(e) {
        e.stopPropagation(),
            await c.Z.joinGuild(B),
            h.Z.addConditionalChangeListener(() => null == h.Z.getGuild(B) || (w || W(e), J(e), !1));
    }
    function J(e) {
        e.stopPropagation();
        let n = g.ZP.getDefaultChannel(B);
        (0, r.pTH)(), (0, d.XU)(B, null == n ? void 0 : n.id);
    }
    return {
        onDeleteClick: A
            ? function (e) {
                  e.stopPropagation(),
                      A &&
                          !w &&
                          (0, r.h7j)((e) =>
                              (0, l.jsx)(
                                  r.ConfirmModal,
                                  O(I({}, e), {
                                      header: E.intl.string(E.t.R5bpio),
                                      confirmText: E.intl.string(E.t.oyYWHB),
                                      cancelText: E.intl.string(E.t["ETE/oK"]),
                                      onConfirm: () => x.Z.deleteGuildEvent(D, B),
                                      children: (0, l.jsx)(r.Text, {
                                          variant: "text-md/normal",
                                          children: E.intl.string(E.t.v2GWNT),
                                      }),
                                  }),
                              ),
                          );
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != n &&
                    (0, o.jW)(e, async () => {
                        let { default: e } = await Promise.all([t.e("34261"), t.e("27434")]).then(t.bind(t, 215269));
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                I(
                                    {
                                        guildEventId: D,
                                        recurrenceId: k,
                                        channel: S,
                                        guild: n,
                                    },
                                    t,
                                ),
                            );
                    });
        },
        onJoinClick:
            X || z
                ? function (e) {
                      if ((e.stopPropagation(), z)) {
                          null == R || R(), (0, s.hk)(B);
                          return;
                      }
                      (null == S ? void 0 : S.isGuildStageVoice())
                          ? ((0, f.Cq)(S), null == R || R())
                          : (null == S ? void 0 : S.isGuildVoice()) &&
                            (x.Z.joinVoiceEvent(S.guild_id, S.id), null == R || R());
                  }
                : void 0,
        onRsvpClick: W,
        onStartClick:
            A && V && !(null == H ? void 0 : H.is_canceled)
                ? function (e) {
                      e.stopPropagation(),
                          (0, r.ZDy)(async () => {
                              let { default: e } = await Promise.all([t.e("84722"), t.e("23725")]).then(
                                  t.bind(t, 296864),
                              );
                              return (n) =>
                                  (0, l.jsx)(
                                      e,
                                      O(I({}, n), {
                                          event: T,
                                          onSuccess: R,
                                      }),
                                  );
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!U || !F) {
                    let e = (0, y.H)({
                        guildId: B,
                        guildEventId: D,
                    });
                    (0, m.JG)(e),
                        v.default.track(N.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: B,
                            guild_scheduled_event_id: D,
                        });
                    return;
                }
                (0, r.ZDy)(async () => {
                    let { default: e } = await Promise.all([t.e("7654"), t.e("49049"), t.e("36264")]).then(
                        t.bind(t, 560114),
                    );
                    return (t) =>
                        (0, l.jsx)(
                            e,
                            O(I({}, t), {
                                guild: n,
                                channel: S,
                                guildScheduledEvent: T,
                                source: N.t4x.GUILD_EVENTS,
                            }),
                        );
                });
            }
        },
        onEndClick:
            A && G === C.WX.EXTERNAL && w
                ? function (e) {
                      if ((e.stopPropagation(), !A)) return;
                      let n = () => {
                          x.Z.endEvent(D, B), (0, r.pTH)();
                      };
                      (0, r.h7j)((e) =>
                          (0, l.jsx)(
                              r.ConfirmModal,
                              O(I({}, e), {
                                  header: E.intl.string(E.t.qaYzPD),
                                  confirmText: E.intl.string(E.t.mjB9pa),
                                  cancelText: E.intl.string(E.t["ETE/oK"]),
                                  onConfirm: n,
                                  children: (0, l.jsx)(r.Text, {
                                      variant: "text-md/normal",
                                      children: E.intl.string(E.t.bnDQ7O),
                                  }),
                              }),
                          ),
                      );
                  }
                : void 0,
        onJoinGuildClick: q,
        onGoToGuildClick: J,
    };
}
