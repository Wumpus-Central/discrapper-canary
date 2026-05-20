t.d(n, { A: () => I });
var i = t(627968);
t(64700);
var o = t(17928),
    l = t(314116),
    a = t(192308),
    d = t(442433),
    u = t(66834),
    s = t(202384),
    r = t(51758),
    c = t(931991),
    p = t(976860),
    g = t(790535),
    C = t(808728),
    f = t(71393),
    A = t(576705),
    E = t(174459),
    v = t(957565),
    _ = t(496092),
    h = t(485394),
    P = t(722260),
    k = t(530209),
    y = t(647090),
    G = t(625142),
    b = t(666394),
    m = t(988794),
    L = t(652215),
    D = t(375708);
function I(e) {
    let { guild: n, channel: I, guildScheduledEvent: w, isActive: x, recurrenceId: N, onActionTaken: j } = e,
        { scheduled_start_time: S, id: T, entity_type: V, guild_id: M } = w,
        { canManageGuildEvent: H } = (0, c.nr)(I ?? n),
        z = H(w),
        R = (0, h.Ay)(w),
        U = (0, k.e)(I?.id, w.id),
        { withinStartWindow: B } = (0, y.CC)(S),
        J = (0, o.bG)([A.A], () => !I?.isGuildVocal() || A.A.can(L.xBc.CONNECT, I), [I]),
        O = (0, r.H)(M),
        Q = (0, P.A)(N, T);
    function W(e) {
        e.stopPropagation(), (0, b.A)(T, N, M);
    }
    async function Y(e) {
        e.stopPropagation(),
            await u.A.joinGuild(M),
            f.A.addConditionalChangeListener(() => {
                let n;
                return (
                    null == f.A.getGuild(M) ||
                    (x || W(e),
                    e.stopPropagation(),
                    (n = C.Ay.getDefaultChannel(M)),
                    (0, a.closeAllModals)(),
                    (0, p.uh)(M, n?.id),
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
                              onConfirm: () => _.A.deleteGuildEvent(T, M),
                          });
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != n &&
                    (0, d.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            t.e("77371"),
                            t.e("93103"),
                            t.e("52229"),
                            t.e("95340"),
                            t.e("56753"),
                            t.e("56373"),
                            t.e("43267"),
                            t.e("99990"),
                            t.e("24067"),
                        ]).then(t.bind(t, 399893));
                        return (t) => (0, i.jsx)(e, { guildEventId: T, recurrenceId: N, channel: I, guild: n, ...t });
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
                          : I?.isGuildVoice() && (_.A.joinVoiceEvent(I.guild_id, I.id), j?.());
                  }
                : void 0,
        onRsvpClick: W,
        onStartClick:
            z && B && !Q?.is_canceled
                ? function (e) {
                      e.stopPropagation(),
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e("15249"),
                                  t.e("56753"),
                                  t.e("58337"),
                                  t.e("2329"),
                                  t.e("70644"),
                                  t.e("69772"),
                              ]).then(t.bind(t, 914119));
                              return (n) => (0, i.jsx)(e, { ...n, event: w, onSuccess: j });
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!(0, G.y)(R, U, I)) {
                    let e = (0, G.d)({ guildId: M, guildEventId: T });
                    (0, v.C)(e),
                        E.default.track(L.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: M,
                            guild_scheduled_event_id: T,
                        });
                    return;
                }
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        t.e("56386"),
                        t.e("44710"),
                        t.e("19397"),
                        t.e("67485"),
                        t.e("37687"),
                        t.e("59957"),
                        t.e("78412"),
                        t.e("28136"),
                        t.e("16084"),
                        t.e("97073"),
                        t.e("78195"),
                        t.e("87317"),
                        t.e("83420"),
                        t.e("22547"),
                        t.e("58216"),
                    ]).then(t.bind(t, 1310));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guild: n,
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
                                      _.A.endEvent(T, M), (0, a.closeAllModals)();
                                  },
                              });
                  }
                : void 0,
        onJoinGuildClick: Y,
    };
}
