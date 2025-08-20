n.d(e, { Z: () => w });
var l = n(951288);
n(647438);
var i = n(442837),
    r = n(481060),
    a = n(239091),
    o = n(749210),
    u = n(305325),
    c = n(281956),
    s = n(357156),
    d = n(703656),
    g = n(922482),
    f = n(984933),
    p = n(430824),
    h = n(496675),
    v = n(626135),
    m = n(572004),
    y = n(482241),
    b = n(951539),
    P = n(894017),
    j = n(274311),
    Z = n(954313),
    E = n(118998),
    O = n(139712),
    C = n(765305),
    x = n(981631),
    _ = n(388032);
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
function w(t) {
    let { guild: e, channel: w, guildScheduledEvent: k, isActive: T, recurrenceId: N, onActionTaken: I } = t,
        { scheduled_start_time: G, id: H, entity_type: L, guild_id: V } = k,
        { canManageGuildEvent: X } = (0, s.XJ)(null != w ? w : e),
        z = X(k),
        U = (0, b.ZP)(k),
        W = (0, j.T)(null == w ? void 0 : w.id, k.id),
        { withinStartWindow: R } = (0, Z.ub)(G),
        A = (0, i.e7)([h.Z], () => null == w || !w.isGuildVocal() || h.Z.can(x.Plq.CONNECT, w), [w]),
        q = (0, c.J)(V),
        B = (0, P.Z)(N, H);
    function J(t) {
        t.stopPropagation(), (0, O.Z)(H, N, V);
    }
    async function M(t) {
        t.stopPropagation(),
            await o.Z.joinGuild(V),
            p.Z.addConditionalChangeListener(
                () =>
                    null == p.Z.getGuild(V) ||
                    (T || J(t),
                    (function (t) {
                        t.stopPropagation();
                        let e = f.ZP.getDefaultChannel(V);
                        (0, r.pTH)(), (0, d.XU)(V, null == e ? void 0 : e.id);
                    })(t),
                    !1),
            );
    }
    return {
        onDeleteClick: z
            ? function (t) {
                  t.stopPropagation(),
                      z &&
                          !T &&
                          (0, r.h7j)((t) =>
                              (0, l.jsx)(
                                  r.ConfirmModal,
                                  S(D({}, t), {
                                      header: _.intl.string(_.t.R5bpio),
                                      confirmText: _.intl.string(_.t.oyYWHB),
                                      cancelText: _.intl.string(_.t["ETE/oK"]),
                                      onConfirm: () => y.Z.deleteGuildEvent(H, V),
                                      children: (0, l.jsx)(r.Text, {
                                          variant: "text-md/normal",
                                          children: _.intl.string(_.t.v2GWNT),
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
                        let { default: t } = await Promise.all([n.e("34261"), n.e("27434")]).then(n.bind(n, 215269));
                        return (n) =>
                            (0, l.jsx)(
                                t,
                                D(
                                    {
                                        guildEventId: H,
                                        recurrenceId: N,
                                        channel: w,
                                        guild: e,
                                    },
                                    n,
                                ),
                            );
                    });
        },
        onJoinClick:
            A || q
                ? function (t) {
                      if ((t.stopPropagation(), q)) {
                          null == I || I(), (0, u.hk)(V);
                          return;
                      }
                      (null == w ? void 0 : w.isGuildStageVoice())
                          ? ((0, g.Cq)(w), null == I || I())
                          : (null == w ? void 0 : w.isGuildVoice()) &&
                            (y.Z.joinVoiceEvent(w.guild_id, w.id), null == I || I());
                  }
                : void 0,
        onRsvpClick: J,
        onStartClick:
            z && R && !(null == B ? void 0 : B.is_canceled)
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
                                          event: k,
                                          onSuccess: I,
                                      }),
                                  );
                          });
                  }
                : void 0,
        onInviteClick: function (t) {
            if ((t.stopPropagation(), null != e)) {
                if (!U || !W) {
                    let t = (0, E.H)({
                        guildId: V,
                        guildEventId: H,
                    });
                    (0, m.JG)(t),
                        v.default.track(x.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: V,
                            guild_scheduled_event_id: H,
                        });
                    return;
                }
                (0, r.ZDy)(async () => {
                    let { default: t } = await Promise.all([n.e("7654"), n.e("49049"), n.e("83691")]).then(
                        n.bind(n, 560114),
                    );
                    return (n) =>
                        (0, l.jsx)(
                            t,
                            S(D({}, n), {
                                guild: e,
                                channel: w,
                                guildScheduledEvent: k,
                                source: x.t4x.GUILD_EVENTS,
                            }),
                        );
                });
            }
        },
        onEndClick:
            z && L === C.WX.EXTERNAL && T
                ? function (t) {
                      if ((t.stopPropagation(), !z)) return;
                      let e = () => {
                          y.Z.endEvent(H, V), (0, r.pTH)();
                      };
                      (0, r.h7j)((t) =>
                          (0, l.jsx)(
                              r.ConfirmModal,
                              S(D({}, t), {
                                  header: _.intl.string(_.t.qaYzPD),
                                  confirmText: _.intl.string(_.t.mjB9pa),
                                  cancelText: _.intl.string(_.t["ETE/oK"]),
                                  onConfirm: e,
                                  children: (0, l.jsx)(r.Text, {
                                      variant: "text-md/normal",
                                      children: _.intl.string(_.t.bnDQ7O),
                                  }),
                              }),
                          ),
                      );
                  }
                : void 0,
        onJoinGuildClick: M,
    };
}
