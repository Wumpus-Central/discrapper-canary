t.d(n, { Z: () => I });
var i = t(255367);
t(73800);
var r = t(442837),
    l = t(481060),
    o = t(239091),
    c = t(749210),
    a = t(305325),
    s = t(281956),
    u = t(357156),
    d = t(703656),
    g = t(922482),
    p = t(984933),
    f = t(430824),
    h = t(496675),
    v = t(626135),
    m = t(572004),
    j = t(482241),
    b = t(951539),
    y = t(894017),
    x = t(274311),
    O = t(854698),
    Z = t(118998),
    C = t(139712),
    P = t(765305),
    E = t(981631),
    k = t(388032);
function N(e) {
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
function w(e, n) {
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
function I(e) {
    let { guild: n, channel: I, guildScheduledEvent: S, isActive: T, recurrenceId: _, onActionTaken: D } = e,
        { scheduled_start_time: G, id: L, entity_type: R, guild_id: H } = S,
        { canManageGuildEvent: M } = (0, u.XJ)(null != I ? I : n),
        U = M(S),
        z = (0, b.ZP)(S),
        A = (0, x.T)(null == I ? void 0 : I.id, S.id),
        { withinStartWindow: J } = (0, O.ub)(G),
        B = (0, r.e7)([h.Z], () => null == I || !I.isGuildVocal() || h.Z.can(E.Plq.CONNECT, I), [I]),
        X = (0, s.J)(H),
        W = (0, y.Z)(_, L);
    function V(e) {
        e.stopPropagation(), (0, C.Z)(L, _, H);
    }
    async function q(e) {
        e.stopPropagation(),
            await c.Z.joinGuild(H),
            f.Z.addConditionalChangeListener(() => null == f.Z.getGuild(H) || (T || V(e), K(e), !1));
    }
    function K(e) {
        e.stopPropagation();
        let n = p.ZP.getDefaultChannel(H);
        (0, l.pTH)(), (0, d.XU)(H, null == n ? void 0 : n.id);
    }
    return {
        onDeleteClick: U
            ? function (e) {
                  e.stopPropagation(),
                      U &&
                          !T &&
                          (0, l.h7j)((e) =>
                              (0, i.jsx)(
                                  l.ConfirmModal,
                                  w(N({}, e), {
                                      header: k.intl.string(k.t.R5bpio),
                                      confirmText: k.intl.string(k.t.oyYWHB),
                                      cancelText: k.intl.string(k.t["ETE/oK"]),
                                      onConfirm: () => j.Z.deleteGuildEvent(L, H),
                                      children: (0, i.jsx)(l.Text, {
                                          variant: "text-md/normal",
                                          children: k.intl.string(k.t.v2GWNT),
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
                            (0, i.jsx)(
                                e,
                                N(
                                    {
                                        guildEventId: L,
                                        recurrenceId: _,
                                        channel: I,
                                        guild: n,
                                    },
                                    t,
                                ),
                            );
                    });
        },
        onJoinClick:
            B || X
                ? function (e) {
                      if ((e.stopPropagation(), X)) {
                          null == D || D(), (0, a.hk)(H);
                          return;
                      }
                      (null == I ? void 0 : I.isGuildStageVoice())
                          ? ((0, g.Cq)(I), null == D || D())
                          : (null == I ? void 0 : I.isGuildVoice()) &&
                            (j.Z.joinVoiceEvent(I.guild_id, I.id), null == D || D());
                  }
                : void 0,
        onRsvpClick: V,
        onStartClick:
            U && J && !(null == W ? void 0 : W.is_canceled)
                ? function (e) {
                      e.stopPropagation(),
                          (0, l.ZDy)(async () => {
                              let { default: e } = await Promise.all([t.e("84722"), t.e("4598")]).then(
                                  t.bind(t, 296864),
                              );
                              return (n) =>
                                  (0, i.jsx)(
                                      e,
                                      w(N({}, n), {
                                          event: S,
                                          onSuccess: D,
                                      }),
                                  );
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!z || !A) {
                    let e = (0, Z.H)({
                        guildId: H,
                        guildEventId: L,
                    });
                    (0, m.JG)(e),
                        v.default.track(E.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: H,
                            guild_scheduled_event_id: L,
                        });
                    return;
                }
                (0, l.ZDy)(async () => {
                    let { default: e } = await Promise.all([t.e("7654"), t.e("49049"), t.e("29328")]).then(
                        t.bind(t, 560114),
                    );
                    return (t) =>
                        (0, i.jsx)(
                            e,
                            w(N({}, t), {
                                guild: n,
                                channel: I,
                                guildScheduledEvent: S,
                                source: E.t4x.GUILD_EVENTS,
                            }),
                        );
                });
            }
        },
        onEndClick:
            U && R === P.WX.EXTERNAL && T
                ? function (e) {
                      if ((e.stopPropagation(), !U)) return;
                      let n = () => {
                          j.Z.endEvent(L, H), (0, l.pTH)();
                      };
                      (0, l.h7j)((e) =>
                          (0, i.jsx)(
                              l.ConfirmModal,
                              w(N({}, e), {
                                  header: k.intl.string(k.t.qaYzPD),
                                  confirmText: k.intl.string(k.t.mjB9pa),
                                  cancelText: k.intl.string(k.t["ETE/oK"]),
                                  onConfirm: n,
                                  children: (0, i.jsx)(l.Text, {
                                      variant: "text-md/normal",
                                      children: k.intl.string(k.t.bnDQ7O),
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
