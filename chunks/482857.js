var i = n(477900);
n(582128);
var o = n(855986),
    l = n(314116),
    a = n(192308),
    d = n(765178),
    u = n(442433),
    r = n(778858),
    s = n(202384),
    c = n(51758),
    g = n(931991),
    p = n(976860),
    f = n(129095),
    C = n(808728),
    E = n(71393),
    v = n(576705),
    _ = n(129230),
    h = n(957565),
    P = n(496092),
    A = n(485394),
    k = n(722260),
    m = n(530209),
    G = n(974930),
    b = n(625142),
    y = n(666394),
    D = n(988794),
    I = n(652215),
    w = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { guild: t, channel: x, guildScheduledEvent: L, isActive: N, recurrenceId: V, onActionTaken: j } = e,
                { scheduled_start_time: S, id: T, entity_type: H, guild_id: M } = L,
                { canManageGuildEvent: O } = (0, g.nr)(x ?? t),
                R = O(L),
                U = (0, A.Ay)(L),
                B = (0, m.e)(x?.id, L.id),
                { withinStartWindow: J } = (0, G.CC)(S),
                Q = (0, o.bG)([v.A], () => !x?.isGuildVocal() || v.A.can(I.xBc.CONNECT, x), [x]),
                W = (0, c.H)(M),
                Y = (0, k.A)(V, T);
            function Z(e) {
                (e.stopPropagation(), (0, y.A)(T, V, M));
            }
            return {
                onDeleteClick: R
                    ? function (e) {
                          (e.stopPropagation(),
                              R &&
                                  !N &&
                                  (0, l.A)({
                                      title: w.intl.string(w.t.R5bpin),
                                      subtitle: w.intl.string(w.t.v2GWNQ),
                                      confirmText: w.intl.string(w.t.oyYWHE),
                                      onConfirm: () => P.default.deleteGuildEvent(T, M),
                                  }));
                      }
                    : void 0,
                onContextMenu: function (e) {
                    (e.stopPropagation(),
                        null != t &&
                            (0, u.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e(476662),
                                    n.e(253044),
                                    n.e(881717),
                                    n.e(363269),
                                    n.e(200858),
                                    n.e(993103),
                                    n.e(489218),
                                    n.e(912875),
                                    n.e(862782),
                                    n.e(638221),
                                    n.e(482861),
                                    n.e(95340),
                                    n.e(252229),
                                    n.e(60086),
                                    n.e(856753),
                                    n.e(256373),
                                    n.e(543267),
                                    n.e(599990),
                                    n.e(127814),
                                ]).then(n.bind(n, 924037));
                                return (n) =>
                                    (0, i.jsx)(e, { guildEventId: T, recurrenceId: V, channel: x, guild: t, ...n });
                            }));
                },
                onJoinClick:
                    Q || W
                        ? function (e) {
                              if ((e.stopPropagation(), W)) {
                                  (j?.(), (0, s.Ze)(M));
                                  return;
                              }
                              x?.isGuildStageVoice()
                                  ? ((0, f.av)(x), j?.())
                                  : x?.isGuildVoice() && (P.default.joinVoiceEvent(x.guild_id, x.id), j?.());
                          }
                        : void 0,
                onRsvpClick: Z,
                onStartClick:
                    R && J && !Y?.is_canceled
                        ? function (e) {
                              (e.stopPropagation(),
                                  (0, a.mM)(async () => {
                                      let { default: e } = await Promise.all([
                                          n.e(998835),
                                          n.e(107427),
                                          n.e(858337),
                                          n.e(60086),
                                          n.e(856753),
                                          n.e(2329),
                                          n.e(908170),
                                          n.e(612502),
                                      ]).then(n.bind(n, 163765));
                                      return (t) => (0, i.jsx)(e, { ...t, event: L, onSuccess: j });
                                  }));
                          }
                        : void 0,
                onInviteClick: function (e, o) {
                    if ((e.stopPropagation(), null != t)) {
                        if (!(0, b.y)(U, B, x)) {
                            let e = (0, b.d)({ guildId: M, guildEventId: T });
                            (0, h.C)(e, () => {
                                (d.O.announce(w.intl.string(w.t.t5VZ88)),
                                    o?.(),
                                    _.default.track(I.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                                        guild_id: M,
                                        guild_scheduled_event_id: T,
                                    }));
                            });
                            return;
                        }
                        (0, a.mM)(async () => {
                            let { default: e } = await Promise.all([
                                n.e(876400),
                                n.e(881717),
                                n.e(683621),
                                n.e(388859),
                                n.e(711162),
                                n.e(401425),
                                n.e(919170),
                                n.e(363269),
                                n.e(489218),
                                n.e(592028),
                                n.e(70833),
                                n.e(425906),
                                n.e(123216),
                                n.e(897073),
                                n.e(182408),
                                n.e(837687),
                                n.e(630582),
                                n.e(159957),
                                n.e(728136),
                                n.e(678195),
                                n.e(643104),
                                n.e(368426),
                                n.e(680029),
                                n.e(966623),
                                n.e(658216),
                                n.e(128781),
                            ]).then(n.bind(n, 660194));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    guild: t,
                                    channel: x,
                                    guildScheduledEvent: L,
                                    source: I.PE1.GUILD_EVENTS,
                                });
                        });
                    }
                },
                onEndClick:
                    R && H === D.Ps.EXTERNAL && N
                        ? function (e) {
                              (e.stopPropagation(),
                                  R &&
                                      (0, l.A)({
                                          title: w.intl.string(w.t.qaYzPA),
                                          subtitle: w.intl.string(w.t.bnDQ7E),
                                          confirmText: w.intl.string(w.t.mjB9pd),
                                          onConfirm: function () {
                                              (P.default.endEvent(T, M), (0, a.s7)());
                                          },
                                      }));
                          }
                        : void 0,
                onJoinGuildClick: async function (e) {
                    (e.stopPropagation(),
                        await r.A.joinGuild(M),
                        E.A.addConditionalChangeListener(() => {
                            let t;
                            return (
                                null == E.A.getGuild(M) ||
                                (N || Z(e),
                                e.stopPropagation(),
                                (t = C.A.getDefaultChannel(M)),
                                (0, a.s7)(),
                                (0, p.uh)(M, t?.id),
                                !1)
                            );
                        }));
                },
            };
        },
    },
);
