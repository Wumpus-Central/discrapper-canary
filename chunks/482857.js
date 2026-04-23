n.d(t, { A: () => S });
var l = n(627968);
n(64700);
var i = n(17928),
    r = n(314116),
    a = n(192308),
    s = n(442433),
    d = n(686956),
    c = n(202384),
    o = n(51758),
    u = n(931991),
    _ = n(976860),
    g = n(790535),
    h = n(808728),
    f = n(71393),
    x = n(576705),
    v = n(954571),
    m = n(957565),
    p = n(496092),
    A = n(485394),
    I = n(722260),
    E = n(530209),
    j = n(974930),
    b = n(625142),
    N = n(666394),
    C = n(988794),
    y = n(652215),
    k = n(985018);
function S(e) {
    let { guild: t, channel: S, guildScheduledEvent: T, isActive: L, recurrenceId: D, onActionTaken: R } = e,
        { scheduled_start_time: w, id: P, entity_type: G, guild_id: M } = T,
        { canManageGuildEvent: B } = (0, u.nr)(S ?? t),
        K = B(T),
        V = (0, A.Ay)(T),
        O = (0, E.e)(S?.id, T.id),
        { withinStartWindow: U } = (0, j.CC)(w),
        H = (0, i.bG)([x.A], () => !S?.isGuildVocal() || x.A.can(y.xBc.CONNECT, S), [S]),
        X = (0, o.H)(M),
        z = (0, I.A)(D, P);
    function Y(e) {
        e.stopPropagation(), (0, N.A)(P, D, M);
    }
    async function F(e) {
        e.stopPropagation(),
            await d.A.joinGuild(M),
            f.A.addConditionalChangeListener(() => {
                let t;
                return (
                    null == f.A.getGuild(M) ||
                    (L || Y(e),
                    e.stopPropagation(),
                    (t = h.Ay.getDefaultChannel(M)),
                    (0, a.closeAllModals)(),
                    (0, _.uh)(M, t?.id),
                    !1)
                );
            });
    }
    return {
        onDeleteClick: K
            ? function (e) {
                  e.stopPropagation(),
                      K &&
                          !L &&
                          (0, r.A)({
                              title: k.intl.string(k.t.R5bpin),
                              subtitle: k.intl.string(k.t.v2GWNQ),
                              confirmText: k.intl.string(k.t.oyYWHE),
                              onConfirm: () => p.A.deleteGuildEvent(P, M),
                          });
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != t &&
                    (0, s.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("77371"),
                            n.e("93103"),
                            n.e("24170"),
                            n.e("15637"),
                        ]).then(n.bind(n, 399893));
                        return (n) => (0, l.jsx)(e, { guildEventId: P, recurrenceId: D, channel: S, guild: t, ...n });
                    });
        },
        onJoinClick:
            H || X
                ? function (e) {
                      if ((e.stopPropagation(), X)) {
                          R?.(), (0, c.Ze)(M);
                          return;
                      }
                      S?.isGuildStageVoice()
                          ? ((0, g.av)(S), R?.())
                          : S?.isGuildVoice() && (p.A.joinVoiceEvent(S.guild_id, S.id), R?.());
                  }
                : void 0,
        onRsvpClick: Y,
        onStartClick:
            K && U && !z?.is_canceled
                ? function (e) {
                      e.stopPropagation(),
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("24170"), n.e("69772"), n.e("28520")]).then(
                                  n.bind(n, 914119),
                              );
                              return (t) => (0, l.jsx)(e, { ...t, event: T, onSuccess: R });
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != t)) {
                if (!(0, b.y)(V, O, S)) {
                    let e = (0, b.d)({ guildId: M, guildEventId: P });
                    (0, m.C)(e),
                        v.default.track(y.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: M,
                            guild_scheduled_event_id: P,
                        });
                    return;
                }
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("28136"), n.e("22547"), n.e("82095")]).then(
                        n.bind(n, 1310),
                    );
                    return (n) =>
                        (0, l.jsx)(e, {
                            ...n,
                            guild: t,
                            channel: S,
                            guildScheduledEvent: T,
                            source: y.PE1.GUILD_EVENTS,
                        });
                });
            }
        },
        onEndClick:
            K && G === C.Ps.EXTERNAL && L
                ? function (e) {
                      e.stopPropagation(),
                          K &&
                              (0, r.A)({
                                  title: k.intl.string(k.t.qaYzPA),
                                  subtitle: k.intl.string(k.t.bnDQ7E),
                                  confirmText: k.intl.string(k.t.mjB9pd),
                                  onConfirm: () => {
                                      p.A.endEvent(P, M), (0, a.closeAllModals)();
                                  },
                              });
                  }
                : void 0,
        onJoinGuildClick: F,
    };
}
