n.d(e, { Z: () => N });
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
    p = n(430104),
    h = n(984933),
    v = n(430824),
    m = n(496675),
    Z = n(626135),
    y = n(572004),
    b = n(658041),
    P = n(482241),
    E = n(951539),
    C = n(894017),
    _ = n(274311),
    j = n(854698),
    x = n(118998),
    O = n(139712),
    w = n(765305),
    S = n(981631),
    k = n(388032);
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
function T(t, e) {
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
function N(t) {
    let { guild: e, channel: N, guildScheduledEvent: I, isActive: G, recurrenceId: H, onActionTaken: L } = t,
        { scheduled_start_time: W, id: V, entity_type: z, guild_id: A } = I,
        { canManageGuildEvent: X } = (0, d.XJ)(null != N ? N : e),
        U = X(I),
        R = (0, E.ZP)(I),
        q = (0, _.T)(null == N ? void 0 : N.id, I.id),
        { withinStartWindow: J } = (0, j.ub)(W),
        Y = (0, i.e7)([m.Z], () => null == N || !N.isGuildVocal() || m.Z.can(S.Plq.CONNECT, N), [N]),
        B = (0, s.J)(A),
        M = (0, C.Z)(H, V);
    function K(t) {
        t.stopPropagation(), (0, O.Z)(V, H, A);
    }
    async function Q(t) {
        t.stopPropagation(),
            await o.Z.joinGuild(A),
            v.Z.addConditionalChangeListener(
                () =>
                    null == v.Z.getGuild(A) ||
                    (G || K(t),
                    (function (t) {
                        t.stopPropagation();
                        let e = h.ZP.getDefaultChannel(A);
                        (0, u.pTH)(), (0, g.XU)(A, null == e ? void 0 : e.id);
                    })(t),
                    !1),
            );
    }
    return {
        onDeleteClick: U
            ? function (t) {
                  t.stopPropagation(),
                      U &&
                          !G &&
                          (0, r.Z)({
                              title: k.intl.string(k.t.R5bpin),
                              subtitle: k.intl.string(k.t.v2GWNQ),
                              confirmText: k.intl.string(k.t.oyYWHE),
                              onConfirm: () => P.Z.deleteGuildEvent(V, A),
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
                                D(
                                    {
                                        guildEventId: V,
                                        recurrenceId: H,
                                        channel: N,
                                        guild: e,
                                    },
                                    n,
                                ),
                            );
                    });
        },
        onJoinClick:
            Y || B
                ? function (t) {
                      if ((t.stopPropagation(), B)) {
                          null == L || L(), (0, c.hk)(A);
                          return;
                      }
                      (null == N ? void 0 : N.isGuildStageVoice())
                          ? ((0, f.Cq)(N), null == L || L())
                          : (null == N ? void 0 : N.isGuildVoice()) &&
                            (P.Z.joinVoiceEvent(N.guild_id, N.id), null == L || L());
                  }
                : void 0,
        onRsvpClick: K,
        onStartClick:
            U && J && !(null == M ? void 0 : M.is_canceled)
                ? function (t) {
                      t.stopPropagation();
                      let e = () => {
                          (0, u.ZDy)(async () => {
                              let { default: t } = await Promise.all([n.e("84722"), n.e("14531")]).then(
                                  n.bind(n, 296864),
                              );
                              return (e) =>
                                  (0, l.jsx)(
                                      t,
                                      T(D({}, e), {
                                          event: I,
                                          onSuccess: L,
                                      }),
                                  );
                          });
                      };
                      (0, p.u1)() && (0, b.s)(I)
                          ? (0, u.ZDy)(async () => {
                                let { AgeVerificationRequiredSpeedbumpModal: t } = await n
                                    .e("26513")
                                    .then(n.bind(n, 31362));
                                return (n) => (0, l.jsx)(t, T(D({}, n), { onStart: () => e() }));
                            })
                          : e();
                  }
                : void 0,
        onInviteClick: function (t) {
            if ((t.stopPropagation(), null != e)) {
                if (!(0, x.T)(R, q, N)) {
                    let t = (0, x.H)({
                        guildId: A,
                        guildEventId: V,
                    });
                    (0, y.JG)(t),
                        Z.default.track(S.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: A,
                            guild_scheduled_event_id: V,
                        });
                    return;
                }
                (0, u.ZDy)(async () => {
                    let { default: t } = await Promise.all([n.e("49049"), n.e("7654"), n.e("27267")]).then(
                        n.bind(n, 560114),
                    );
                    return (n) =>
                        (0, l.jsx)(
                            t,
                            T(D({}, n), {
                                guild: e,
                                channel: N,
                                guildScheduledEvent: I,
                                source: S.t4x.GUILD_EVENTS,
                            }),
                        );
                });
            }
        },
        onEndClick:
            U && z === w.WX.EXTERNAL && G
                ? function (t) {
                      t.stopPropagation(),
                          U &&
                              (0, r.Z)({
                                  title: k.intl.string(k.t.qaYzPA),
                                  subtitle: k.intl.string(k.t.bnDQ7E),
                                  confirmText: k.intl.string(k.t.mjB9pd),
                                  onConfirm: () => {
                                      P.Z.endEvent(V, A), (0, u.pTH)();
                                  },
                              });
                  }
                : void 0,
        onJoinGuildClick: Q,
    };
}
