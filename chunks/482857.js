n.d(e, { A: () => G });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(314116),
    u = n(397927),
    a = n(442433),
    s = n(686956),
    o = n(202384),
    c = n(51758),
    d = n(931991),
    g = n(976860),
    v = n(323443),
    p = n(808728),
    f = n(71393),
    h = n(576705),
    y = n(954571),
    m = n(957565),
    A = n(496092),
    b = n(485394),
    E = n(722260),
    C = n(530209),
    _ = n(974930),
    j = n(625142),
    O = n(666394),
    P = n(988794),
    x = n(652215),
    w = n(985018);
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
function k(t, e) {
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
function G(t) {
    let { guild: e, channel: G, guildScheduledEvent: N, isActive: S, recurrenceId: I, onActionTaken: T } = t,
        { scheduled_start_time: L, id: V, entity_type: X, guild_id: R } = N,
        { canManageGuildEvent: q } = (0, d.nr)(null != G ? G : e),
        z = q(N),
        H = (0, b.Ay)(N),
        K = (0, C.e)(null == G ? void 0 : G.id, N.id),
        { withinStartWindow: M } = (0, _.CC)(L),
        U = (0, i.bG)([h.A], () => null == G || !G.isGuildVocal() || h.A.can(x.xBc.CONNECT, G), [G]),
        B = (0, c.H)(R),
        Y = (0, E.A)(I, V);
    function Z(t) {
        t.stopPropagation(), (0, O.A)(V, I, R);
    }
    async function W(t) {
        t.stopPropagation(),
            await s.A.joinGuild(R),
            f.A.addConditionalChangeListener(() => {
                let e;
                return (
                    null == f.A.getGuild(R) ||
                    (S || Z(t),
                    t.stopPropagation(),
                    (e = p.Ay.getDefaultChannel(R)),
                    (0, u.s7G)(),
                    (0, g.uh)(R, null == e ? void 0 : e.id),
                    !1)
                );
            });
    }
    return {
        onDeleteClick: z
            ? function (t) {
                  t.stopPropagation(),
                      z &&
                          !S &&
                          (0, r.A)({
                              title: w.intl.string(w.t.R5bpin),
                              subtitle: w.intl.string(w.t.v2GWNQ),
                              confirmText: w.intl.string(w.t.oyYWHE),
                              onConfirm: () => A.A.deleteGuildEvent(V, R),
                          });
              }
            : void 0,
        onContextMenu: function (t) {
            t.stopPropagation(),
                null != e &&
                    (0, a.L3)(t, async () => {
                        let { default: t } = await Promise.all([n.e("95950"), n.e("7869")]).then(n.bind(n, 406406));
                        return (n) =>
                            (0, l.jsx)(
                                t,
                                D(
                                    {
                                        guildEventId: V,
                                        recurrenceId: I,
                                        channel: G,
                                        guild: e,
                                    },
                                    n,
                                ),
                            );
                    });
        },
        onJoinClick:
            U || B
                ? function (t) {
                      if ((t.stopPropagation(), B)) {
                          null == T || T(), (0, o.Ze)(R);
                          return;
                      }
                      (null == G ? void 0 : G.isGuildStageVoice())
                          ? ((0, v.av)(G), null == T || T())
                          : (null == G ? void 0 : G.isGuildVoice()) &&
                            (A.A.joinVoiceEvent(G.guild_id, G.id), null == T || T());
                  }
                : void 0,
        onRsvpClick: Z,
        onStartClick:
            z && M && !(null == Y ? void 0 : Y.is_canceled)
                ? function (t) {
                      t.stopPropagation(),
                          (0, u.mMO)(async () => {
                              let { default: t } = await Promise.all([n.e("77223"), n.e("5784")]).then(
                                  n.bind(n, 199226),
                              );
                              return (e) =>
                                  (0, l.jsx)(
                                      t,
                                      k(D({}, e), {
                                          event: N,
                                          onSuccess: T,
                                      }),
                                  );
                          });
                  }
                : void 0,
        onInviteClick: function (t) {
            if ((t.stopPropagation(), null != e)) {
                if (!(0, j.y)(H, K, G)) {
                    let t = (0, j.d)({
                        guildId: R,
                        guildEventId: V,
                    });
                    (0, m.C)(t),
                        y.default.track(x.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: R,
                            guild_scheduled_event_id: V,
                        });
                    return;
                }
                (0, u.mMO)(async () => {
                    let { default: t } = await Promise.all([n.e("43600"), n.e("28136"), n.e("41278")]).then(
                        n.bind(n, 234355),
                    );
                    return (n) =>
                        (0, l.jsx)(
                            t,
                            k(D({}, n), {
                                guild: e,
                                channel: G,
                                guildScheduledEvent: N,
                                source: x.PE1.GUILD_EVENTS,
                            }),
                        );
                });
            }
        },
        onEndClick:
            z && X === P.Ps.EXTERNAL && S
                ? function (t) {
                      t.stopPropagation(),
                          z &&
                              (0, r.A)({
                                  title: w.intl.string(w.t.qaYzPA),
                                  subtitle: w.intl.string(w.t.bnDQ7E),
                                  confirmText: w.intl.string(w.t.mjB9pd),
                                  onConfirm: () => {
                                      A.A.endEvent(V, R), (0, u.s7G)();
                                  },
                              });
                  }
                : void 0,
        onJoinGuildClick: W,
    };
}
