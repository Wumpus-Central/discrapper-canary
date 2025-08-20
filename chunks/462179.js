n.d(t, { Z: () => U });
var i = n(951288);
n(647438);
var l = n(442837),
    r = n(481060),
    a = n(239091),
    d = n(749210),
    s = n(305325),
    o = n(281956),
    c = n(357156),
    u = n(703656),
    _ = n(922482),
    g = n(984933),
    p = n(430824),
    m = n(496675),
    I = n(626135),
    E = n(572004),
    f = n(482241),
    h = n(951539),
    v = n(894017),
    T = n(274311),
    y = n(954313),
    C = n(118998),
    x = n(139712),
    L = n(765305),
    j = n(981631),
    b = n(388032);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e) {
    let { guild: t, channel: U, guildScheduledEvent: D, isActive: G, recurrenceId: N, onActionTaken: Z } = e,
        { scheduled_start_time: P, id: A, entity_type: R, guild_id: z } = D,
        { canManageGuildEvent: w } = (0, c.XJ)(null != U ? U : t),
        H = w(D),
        k = (0, h.ZP)(D),
        B = (0, T.T)(null == U ? void 0 : U.id, D.id),
        { withinStartWindow: M } = (0, y.ub)(P),
        X = (0, l.e7)([m.Z], () => null == U || !U.isGuildVocal() || m.Z.can(j.Plq.CONNECT, U), [U]),
        V = (0, o.J)(z),
        Y = (0, v.Z)(N, A);
    function F(e) {
        e.stopPropagation(), (0, x.Z)(A, N, z);
    }
    async function q(e) {
        e.stopPropagation(),
            await d.Z.joinGuild(z),
            p.Z.addConditionalChangeListener(() => null == p.Z.getGuild(z) || (G || F(e), K(e), !1));
    }
    function K(e) {
        e.stopPropagation();
        let t = g.ZP.getDefaultChannel(z);
        (0, r.pTH)(), (0, u.XU)(z, null == t ? void 0 : t.id);
    }
    return {
        onDeleteClick: H
            ? function (e) {
                  e.stopPropagation(),
                      H &&
                          !G &&
                          (0, r.h7j)((e) =>
                              (0, i.jsx)(
                                  r.ConfirmModal,
                                  S(O({}, e), {
                                      header: b.intl.string(b.t.R5bpio),
                                      confirmText: b.intl.string(b.t.oyYWHB),
                                      cancelText: b.intl.string(b.t["ETE/oK"]),
                                      onConfirm: () => f.Z.deleteGuildEvent(A, z),
                                      children: (0, i.jsx)(r.Text, {
                                          variant: "text-md/normal",
                                          children: b.intl.string(b.t.v2GWNT),
                                      }),
                                  }),
                              ),
                          );
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != t &&
                    (0, a.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("34261"), n.e("42743"), n.e("27434")]).then(
                            n.bind(n, 215269),
                        );
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                O(
                                    {
                                        guildEventId: A,
                                        recurrenceId: N,
                                        channel: U,
                                        guild: t,
                                    },
                                    n,
                                ),
                            );
                    });
        },
        onJoinClick:
            X || V
                ? function (e) {
                      if ((e.stopPropagation(), V)) {
                          null == Z || Z(), (0, s.hk)(z);
                          return;
                      }
                      (null == U ? void 0 : U.isGuildStageVoice())
                          ? ((0, _.Cq)(U), null == Z || Z())
                          : (null == U ? void 0 : U.isGuildVoice()) &&
                            (f.Z.joinVoiceEvent(U.guild_id, U.id), null == Z || Z());
                  }
                : void 0,
        onRsvpClick: F,
        onStartClick:
            H && M && !(null == Y ? void 0 : Y.is_canceled)
                ? function (e) {
                      e.stopPropagation(),
                          (0, r.ZDy)(async () => {
                              let { default: e } = await Promise.all([n.e("84722"), n.e("14531")]).then(
                                  n.bind(n, 296864),
                              );
                              return (t) =>
                                  (0, i.jsx)(
                                      e,
                                      S(O({}, t), {
                                          event: D,
                                          onSuccess: Z,
                                      }),
                                  );
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != t)) {
                if (!k || !B) {
                    let e = (0, C.H)({
                        guildId: z,
                        guildEventId: A,
                    });
                    (0, E.JG)(e),
                        I.default.track(j.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: z,
                            guild_scheduled_event_id: A,
                        });
                    return;
                }
                (0, r.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("7654"), n.e("49049"), n.e("83691")]).then(
                        n.bind(n, 560114),
                    );
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            S(O({}, n), {
                                guild: t,
                                channel: U,
                                guildScheduledEvent: D,
                                source: j.t4x.GUILD_EVENTS,
                            }),
                        );
                });
            }
        },
        onEndClick:
            H && R === L.WX.EXTERNAL && G
                ? function (e) {
                      if ((e.stopPropagation(), !H)) return;
                      let t = () => {
                          f.Z.endEvent(A, z), (0, r.pTH)();
                      };
                      (0, r.h7j)((e) =>
                          (0, i.jsx)(
                              r.ConfirmModal,
                              S(O({}, e), {
                                  header: b.intl.string(b.t.qaYzPD),
                                  confirmText: b.intl.string(b.t.mjB9pa),
                                  cancelText: b.intl.string(b.t["ETE/oK"]),
                                  onConfirm: t,
                                  children: (0, i.jsx)(r.Text, {
                                      variant: "text-md/normal",
                                      children: b.intl.string(b.t.bnDQ7O),
                                  }),
                              }),
                          ),
                      );
                  }
                : void 0,
        onJoinGuildClick: q,
        onGoToGuildClick: K,
    };
}
