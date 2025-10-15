n.d(e, { Z: () => k });
var l = n(951288);
n(647438);
var i = n(442837),
    r = n(481060),
    a = n(239091),
    u = n(749210),
    o = n(305325),
    c = n(281956),
    s = n(357156),
    d = n(703656),
    g = n(922482),
    f = n(984933),
    h = n(430824),
    p = n(496675),
    v = n(626135),
    m = n(572004),
    y = n(482241),
    Z = n(951539),
    b = n(894017),
    E = n(274311),
    P = n(954313),
    C = n(118998),
    j = n(139712),
    x = n(765305),
    _ = n(981631),
    O = n(388032);
function D(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            l.forEach(function (e) {
                var l;
                (l = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = l);
            });
    }
    return t;
}
function S(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function k(t) {
    let { guild: e, channel: k, guildScheduledEvent: T, isActive: w, recurrenceId: N, onActionTaken: I } = t,
        { scheduled_start_time: G, id: H, entity_type: L, guild_id: V } = T,
        { canManageGuildEvent: z } = (0, s.XJ)(null != k ? k : e),
        U = z(T),
        W = (0, Z.ZP)(T),
        X = (0, E.T)(null == k ? void 0 : k.id, T.id),
        { withinStartWindow: R } = (0, P.ub)(G),
        A = (0, i.e7)([p.Z], () => null == k || !k.isGuildVocal() || p.Z.can(_.Plq.CONNECT, k), [k]),
        B = (0, c.J)(V),
        J = (0, b.Z)(N, H);
    function M(t) {
        t.stopPropagation(), (0, j.Z)(H, N, V);
    }
    async function q(t) {
        t.stopPropagation(),
            await u.Z.joinGuild(V),
            h.Z.addConditionalChangeListener(
                () =>
                    null == h.Z.getGuild(V) ||
                    (w || M(t),
                    (function (t) {
                        t.stopPropagation();
                        let e = f.ZP.getDefaultChannel(V);
                        (0, r.pTH)(), (0, d.XU)(V, null == e ? void 0 : e.id);
                    })(t),
                    !1),
            );
    }
    return {
        onDeleteClick: U
            ? function (t) {
                  t.stopPropagation(),
                      U &&
                          !w &&
                          (0, r.h7j)((t) =>
                              (0, l.jsx)(
                                  r.ConfirmModal,
                                  S(D({}, t), {
                                      header: O.intl.string(O.t.R5bpio),
                                      confirmText: O.intl.string(O.t.oyYWHB),
                                      cancelText: O.intl.string(O.t["ETE/oK"]),
                                      onConfirm: () => y.Z.deleteGuildEvent(H, V),
                                      children: (0, l.jsx)(r.Text, {
                                          variant: "text-md/normal",
                                          children: O.intl.string(O.t.v2GWNT),
                                      }),
                                  }),
                              ),
                          );
              }
            : void 0,
        onContextMenu: function (t) {
            t.stopPropagation(),
                null != e &&
                    (0, a.jW)(t, async () => {
                        let { default: t } = await Promise.all([n.e("91973"), n.e("470")]).then(n.bind(n, 215269));
                        return (n) =>
                            (0, l.jsx)(
                                t,
                                D(
                                    {
                                        guildEventId: H,
                                        recurrenceId: N,
                                        channel: k,
                                        guild: e,
                                    },
                                    n,
                                ),
                            );
                    });
        },
        onJoinClick:
            A || B
                ? function (t) {
                      if ((t.stopPropagation(), B)) {
                          null == I || I(), (0, o.hk)(V);
                          return;
                      }
                      (null == k ? void 0 : k.isGuildStageVoice())
                          ? ((0, g.Cq)(k), null == I || I())
                          : (null == k ? void 0 : k.isGuildVoice()) &&
                            (y.Z.joinVoiceEvent(k.guild_id, k.id), null == I || I());
                  }
                : void 0,
        onRsvpClick: M,
        onStartClick:
            U && R && !(null == J ? void 0 : J.is_canceled)
                ? function (t) {
                      t.stopPropagation(),
                          (0, r.ZDy)(async () => {
                              let { default: t } = await Promise.all([n.e("84722"), n.e("14531")]).then(
                                  n.bind(n, 296864),
                              );
                              return (e) =>
                                  (0, l.jsx)(
                                      t,
                                      S(D({}, e), {
                                          event: T,
                                          onSuccess: I,
                                      }),
                                  );
                          });
                  }
                : void 0,
        onInviteClick: function (t) {
            if ((t.stopPropagation(), null != e)) {
                if (!W || !X) {
                    let t = (0, C.H)({
                        guildId: V,
                        guildEventId: H,
                    });
                    (0, m.JG)(t),
                        v.default.track(_.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: V,
                            guild_scheduled_event_id: H,
                        });
                    return;
                }
                (0, r.ZDy)(async () => {
                    let { default: t } = await Promise.all([n.e("49049"), n.e("7654"), n.e("68971")]).then(
                        n.bind(n, 560114),
                    );
                    return (n) =>
                        (0, l.jsx)(
                            t,
                            S(D({}, n), {
                                guild: e,
                                channel: k,
                                guildScheduledEvent: T,
                                source: _.t4x.GUILD_EVENTS,
                            }),
                        );
                });
            }
        },
        onEndClick:
            U && L === x.WX.EXTERNAL && w
                ? function (t) {
                      if ((t.stopPropagation(), !U)) return;
                      let e = () => {
                          y.Z.endEvent(H, V), (0, r.pTH)();
                      };
                      (0, r.h7j)((t) =>
                          (0, l.jsx)(
                              r.ConfirmModal,
                              S(D({}, t), {
                                  header: O.intl.string(O.t.qaYzPD),
                                  confirmText: O.intl.string(O.t.mjB9pa),
                                  cancelText: O.intl.string(O.t["ETE/oK"]),
                                  onConfirm: e,
                                  children: (0, l.jsx)(r.Text, {
                                      variant: "text-md/normal",
                                      children: O.intl.string(O.t.bnDQ7O),
                                  }),
                              }),
                          ),
                      );
                  }
                : void 0,
        onJoinGuildClick: q,
    };
}
