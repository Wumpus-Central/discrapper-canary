n.d(e, { Z: () => D });
var l = n(54381);
n(473749);
var i = n(442837),
    r = n(248514),
    u = n(481060),
    a = n(239091),
    o = n(749210),
    c = n(305325),
    s = n(281956),
    d = n(357156),
    g = n(703656),
    f = n(922482),
    p = n(984933),
    h = n(430824),
    v = n(496675),
    m = n(626135),
    Z = n(572004),
    b = n(482241),
    y = n(951539),
    P = n(894017),
    E = n(274311),
    C = n(854698),
    _ = n(118998),
    j = n(139712),
    x = n(765305),
    O = n(981631),
    k = n(388032);
function w(t) {
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
function D(t) {
    let { guild: e, channel: D, guildScheduledEvent: T, isActive: N, recurrenceId: I, onActionTaken: G } = t,
        { scheduled_start_time: H, id: L, entity_type: W, guild_id: V } = T,
        { canManageGuildEvent: z } = (0, d.XJ)(null != D ? D : e),
        A = z(T),
        X = (0, y.ZP)(T),
        U = (0, E.T)(null == D ? void 0 : D.id, T.id),
        { withinStartWindow: R } = (0, C.ub)(H),
        q = (0, i.e7)([v.Z], () => null == D || !D.isGuildVocal() || v.Z.can(O.Plq.CONNECT, D), [D]),
        J = (0, s.J)(V),
        Y = (0, P.Z)(I, L);
    function B(t) {
        t.stopPropagation(), (0, j.Z)(L, I, V);
    }
    async function M(t) {
        t.stopPropagation(),
            await o.Z.joinGuild(V),
            h.Z.addConditionalChangeListener(
                () =>
                    null == h.Z.getGuild(V) ||
                    (N || B(t),
                    (function (t) {
                        t.stopPropagation();
                        let e = p.ZP.getDefaultChannel(V);
                        (0, u.pTH)(), (0, g.XU)(V, null == e ? void 0 : e.id);
                    })(t),
                    !1),
            );
    }
    return {
        onDeleteClick: A
            ? function (t) {
                  t.stopPropagation(),
                      A &&
                          !N &&
                          (0, r.Z)({
                              title: k.intl.string(k.t.R5bpin),
                              subtitle: k.intl.string(k.t.v2GWNQ),
                              confirmText: k.intl.string(k.t.oyYWHE),
                              onConfirm: () => b.Z.deleteGuildEvent(L, V),
                          });
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
                                w(
                                    {
                                        guildEventId: L,
                                        recurrenceId: I,
                                        channel: D,
                                        guild: e,
                                    },
                                    n,
                                ),
                            );
                    });
        },
        onJoinClick:
            q || J
                ? function (t) {
                      if ((t.stopPropagation(), J)) {
                          null == G || G(), (0, c.hk)(V);
                          return;
                      }
                      (null == D ? void 0 : D.isGuildStageVoice())
                          ? ((0, f.Cq)(D), null == G || G())
                          : (null == D ? void 0 : D.isGuildVoice()) &&
                            (b.Z.joinVoiceEvent(D.guild_id, D.id), null == G || G());
                  }
                : void 0,
        onRsvpClick: B,
        onStartClick:
            A && R && !(null == Y ? void 0 : Y.is_canceled)
                ? function (t) {
                      t.stopPropagation(),
                          (0, u.ZDy)(async () => {
                              let { default: t } = await Promise.all([n.e("84722"), n.e("20247")]).then(
                                  n.bind(n, 296864),
                              );
                              return (e) =>
                                  (0, l.jsx)(
                                      t,
                                      S(w({}, e), {
                                          event: T,
                                          onSuccess: G,
                                      }),
                                  );
                          });
                  }
                : void 0,
        onInviteClick: function (t) {
            if ((t.stopPropagation(), null != e)) {
                if (!(0, _.T)(X, U, D)) {
                    let t = (0, _.H)({
                        guildId: V,
                        guildEventId: L,
                    });
                    (0, Z.JG)(t),
                        m.default.track(O.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: V,
                            guild_scheduled_event_id: L,
                        });
                    return;
                }
                (0, u.ZDy)(async () => {
                    let { default: t } = await Promise.all([n.e("49049"), n.e("7654"), n.e("40283")]).then(
                        n.bind(n, 560114),
                    );
                    return (n) =>
                        (0, l.jsx)(
                            t,
                            S(w({}, n), {
                                guild: e,
                                channel: D,
                                guildScheduledEvent: T,
                                source: O.t4x.GUILD_EVENTS,
                            }),
                        );
                });
            }
        },
        onEndClick:
            A && W === x.WX.EXTERNAL && N
                ? function (t) {
                      t.stopPropagation(),
                          A &&
                              (0, r.Z)({
                                  title: k.intl.string(k.t.qaYzPA),
                                  subtitle: k.intl.string(k.t.bnDQ7E),
                                  confirmText: k.intl.string(k.t.mjB9pd),
                                  onConfirm: () => {
                                      b.Z.endEvent(L, V), (0, u.pTH)();
                                  },
                              });
                  }
                : void 0,
        onJoinGuildClick: M,
    };
}
