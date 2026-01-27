t.d(n, {
    A: () => _,
});
var l = t(627968);
t(64700);
var r = t(311907),
    i = t(314116),
    a = t(397927),
    o = t(442433),
    c = t(686956),
    s = t(202384),
    u = t(51758),
    d = t(931991),
    g = t(976860),
    p = t(323443),
    m = t(808728),
    v = t(71393),
    f = t(576705),
    h = t(954571),
    b = t(957565),
    y = t(496092),
    A = t(485394),
    j = t(722260),
    x = t(530209),
    O = t(974930),
    C = t(625142),
    E = t(666394),
    N = t(988794),
    P = t(652215),
    k = t(985018);

function w(e) {
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

function G(e, n) {
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

function _(e) {
    let { guild: n, channel: _, guildScheduledEvent: I, isActive: S, recurrenceId: T, onActionTaken: D } = e,
        { scheduled_start_time: L, id: M, entity_type: B, guild_id: U } = I,
        { canManageGuildEvent: R } = (0, d.nr)(null != _ ? _ : n),
        V = R(I),
        K = (0, A.Ay)(I),
        H = (0, x.e)(null == _ ? void 0 : _.id, I.id),
        { withinStartWindow: J } = (0, O.CC)(L),
        z = (0, r.bG)([f.A], () => null == _ || !_.isGuildVocal() || f.A.can(P.xBc.CONNECT, _), [_]),
        q = (0, u.H)(U),
        F = (0, j.A)(T, M);

    function X(e) {
        e.stopPropagation(), (0, E.A)(M, T, U);
    }
    async function W(e) {
        e.stopPropagation(),
            await c.A.joinGuild(U),
            v.A.addConditionalChangeListener(() => {
                let n;
                return (
                    null == v.A.getGuild(U) ||
                    (S || X(e),
                    e.stopPropagation(),
                    (n = m.Ay.getDefaultChannel(U)),
                    (0, a.s7G)(),
                    (0, g.uh)(U, null == n ? void 0 : n.id),
                    !1)
                );
            });
    }
    return {
        onDeleteClick: V
            ? function (e) {
                  e.stopPropagation(),
                      V &&
                          !S &&
                          (0, i.A)({
                              title: k.intl.string(k.t.R5bpin),
                              subtitle: k.intl.string(k.t.v2GWNQ),
                              confirmText: k.intl.string(k.t.oyYWHE),
                              onConfirm: () => y.A.deleteGuildEvent(M, U),
                          });
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != n &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await Promise.all([t.e("95950"), t.e("3795"), t.e("7869")]).then(
                            t.bind(t, 406406),
                        );
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                w(
                                    {
                                        guildEventId: M,
                                        recurrenceId: T,
                                        channel: _,
                                        guild: n,
                                    },
                                    t,
                                ),
                            );
                    });
        },
        onJoinClick:
            z || q
                ? function (e) {
                      if ((e.stopPropagation(), q)) {
                          null == D || D(), (0, s.Ze)(U);
                          return;
                      }
                      (null == _ ? void 0 : _.isGuildStageVoice())
                          ? ((0, p.av)(_), null == D || D())
                          : (null == _ ? void 0 : _.isGuildVoice()) &&
                            (y.A.joinVoiceEvent(_.guild_id, _.id), null == D || D());
                  }
                : void 0,
        onRsvpClick: X,
        onStartClick:
            V && J && !(null == F ? void 0 : F.is_canceled)
                ? function (e) {
                      e.stopPropagation(),
                          (0, a.mMO)(async () => {
                              let { default: e } = await Promise.all([t.e("3795"), t.e("77223"), t.e("88317")]).then(
                                  t.bind(t, 199226),
                              );
                              return (n) =>
                                  (0, l.jsx)(
                                      e,
                                      G(w({}, n), {
                                          event: I,
                                          onSuccess: D,
                                      }),
                                  );
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!(0, C.y)(K, H, _)) {
                    let e = (0, C.d)({
                        guildId: U,
                        guildEventId: M,
                    });
                    (0, b.C)(e),
                        h.default.track(P.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: U,
                            guild_scheduled_event_id: M,
                        });
                    return;
                }
                (0, a.mMO)(async () => {
                    let { default: e } = await Promise.all([t.e("43600"), t.e("28136"), t.e("43629")]).then(
                        t.bind(t, 234355),
                    );
                    return (t) =>
                        (0, l.jsx)(
                            e,
                            G(w({}, t), {
                                guild: n,
                                channel: _,
                                guildScheduledEvent: I,
                                source: P.PE1.GUILD_EVENTS,
                            }),
                        );
                });
            }
        },
        onEndClick:
            V && B === N.Ps.EXTERNAL && S
                ? function (e) {
                      e.stopPropagation(),
                          V &&
                              (0, i.A)({
                                  title: k.intl.string(k.t.qaYzPA),
                                  subtitle: k.intl.string(k.t.bnDQ7E),
                                  confirmText: k.intl.string(k.t.mjB9pd),
                                  onConfirm: () => {
                                      y.A.endEvent(M, U), (0, a.s7G)();
                                  },
                              });
                  }
                : void 0,
        onJoinGuildClick: W,
    };
}
