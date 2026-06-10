n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var o = n(17928),
    l = n(314116),
    a = n(192308),
    d = n(442433),
    u = n(66834),
    s = n(202384),
    r = n(51758),
    c = n(931991),
    p = n(976860),
    g = n(790535),
    f = n(808728),
    C = n(71393),
    E = n(576705),
    v = n(174459),
    A = n(957565),
    _ = n(496092),
    h = n(485394),
    P = n(722260),
    k = n(530209),
    y = n(647090),
    G = n(625142),
    b = n(666394),
    m = n(988794),
    L = n(652215),
    D = n(375708);
function I(e) {
    let { guild: t, channel: I, guildScheduledEvent: w, isActive: x, recurrenceId: N, onActionTaken: j } = e,
        { scheduled_start_time: S, id: T, entity_type: V, guild_id: M } = w,
        { canManageGuildEvent: H } = (0, c.nr)(I ?? t),
        z = H(w),
        R = (0, h.Ay)(w),
        U = (0, k.e)(I?.id, w.id),
        { withinStartWindow: B } = (0, y.CC)(S),
        J = (0, o.bG)([E.A], () => !I?.isGuildVocal() || E.A.can(L.xBc.CONNECT, I), [I]),
        O = (0, r.H)(M),
        Q = (0, P.A)(N, T);
    function W(e) {
        e.stopPropagation(), (0, b.A)(T, N, M);
    }
    async function Y(e) {
        e.stopPropagation(),
            await u.A.joinGuild(M),
            C.A.addConditionalChangeListener(() => {
                let t;
                return (
                    null == C.A.getGuild(M) ||
                    (x || W(e),
                    e.stopPropagation(),
                    (t = f.Ay.getDefaultChannel(M)),
                    (0, a.closeAllModals)(),
                    (0, p.uh)(M, t?.id),
                    !1)
                );
            });
    }
    return {
        onDeleteClick: z
            ? function (e) {
                  e.stopPropagation(),
                      z &&
                          !x &&
                          (0, l.A)({
                              title: D.intl.string(D.t.R5bpin),
                              subtitle: D.intl.string(D.t.v2GWNQ),
                              confirmText: D.intl.string(D.t.oyYWHE),
                              onConfirm: () => _.default.deleteGuildEvent(T, M),
                          });
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != t &&
                    (0, d.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("77371"),
                            n.e("93103"),
                            n.e("52229"),
                            n.e("95340"),
                            n.e("56753"),
                            n.e("56373"),
                            n.e("43267"),
                            n.e("99990"),
                            n.e("24067"),
                        ]).then(n.bind(n, 399893));
                        return (n) => (0, i.jsx)(e, { guildEventId: T, recurrenceId: N, channel: I, guild: t, ...n });
                    });
        },
        onJoinClick:
            J || O
                ? function (e) {
                      if ((e.stopPropagation(), O)) {
                          j?.(), (0, s.Ze)(M);
                          return;
                      }
                      I?.isGuildStageVoice()
                          ? ((0, g.av)(I), j?.())
                          : I?.isGuildVoice() && (_.default.joinVoiceEvent(I.guild_id, I.id), j?.());
                  }
                : void 0,
        onRsvpClick: W,
        onStartClick:
            z && B && !Q?.is_canceled
                ? function (e) {
                      e.stopPropagation(),
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("33343"),
                                  n.e("40296"),
                                  n.e("2329"),
                                  n.e("58337"),
                                  n.e("56753"),
                                  n.e("70644"),
                                  n.e("69772"),
                              ]).then(n.bind(n, 914119));
                              return (t) => (0, i.jsx)(e, { ...t, event: w, onSuccess: j });
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != t)) {
                if (!(0, G.y)(R, U, I)) {
                    let e = (0, G.d)({ guildId: M, guildEventId: T });
                    (0, A.C)(e),
                        v.default.track(L.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: M,
                            guild_scheduled_event_id: T,
                        });
                    return;
                }
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("1142"),
                        n.e("25935"),
                        n.e("58026"),
                        n.e("87220"),
                        n.e("37687"),
                        n.e("78412"),
                        n.e("59957"),
                        n.e("28136"),
                        n.e("97073"),
                        n.e("16084"),
                        n.e("78195"),
                        n.e("36624"),
                        n.e("58216"),
                        n.e("22547"),
                        n.e("51162"),
                    ]).then(n.bind(n, 1310));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t,
                            channel: I,
                            guildScheduledEvent: w,
                            source: L.PE1.GUILD_EVENTS,
                        });
                });
            }
        },
        onEndClick:
            z && V === m.Ps.EXTERNAL && x
                ? function (e) {
                      e.stopPropagation(),
                          z &&
                              (0, l.A)({
                                  title: D.intl.string(D.t.qaYzPA),
                                  subtitle: D.intl.string(D.t.bnDQ7E),
                                  confirmText: D.intl.string(D.t.mjB9pd),
                                  onConfirm: () => {
                                      _.default.endEvent(T, M), (0, a.closeAllModals)();
                                  },
                              });
                  }
                : void 0,
        onJoinGuildClick: Y,
    };
}
