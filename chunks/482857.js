t.d(n, { A: () => S });
var i = t(627968);
t(64700);
var l = t(311907),
    d = t(314116),
    r = t(192308),
    s = t(442433),
    a = t(686956),
    c = t(202384),
    o = t(51758),
    u = t(931991),
    _ = t(976860),
    g = t(323443),
    h = t(808728),
    f = t(71393),
    v = t(576705),
    x = t(954571),
    m = t(957565),
    p = t(496092),
    A = t(485394),
    I = t(722260),
    j = t(530209),
    b = t(974930),
    N = t(625142),
    C = t(666394),
    E = t(988794),
    y = t(652215),
    k = t(985018);
function S(e) {
    let { guild: n, channel: S, guildScheduledEvent: L, isActive: T, recurrenceId: D, onActionTaken: R } = e,
        { scheduled_start_time: w, id: G, entity_type: P, guild_id: M } = L,
        { canManageGuildEvent: B } = (0, u.nr)(S ?? n),
        U = B(L),
        V = (0, A.Ay)(L),
        O = (0, j.e)(S?.id, L.id),
        { withinStartWindow: K } = (0, b.CC)(w),
        H = (0, l.bG)([v.A], () => !S?.isGuildVocal() || v.A.can(y.xBc.CONNECT, S), [S]),
        F = (0, o.H)(M),
        z = (0, I.A)(D, G);
    function J(e) {
        e.stopPropagation(), (0, C.A)(G, D, M);
    }
    async function W(e) {
        e.stopPropagation(),
            await a.A.joinGuild(M),
            f.A.addConditionalChangeListener(() => {
                let n;
                return (
                    null == f.A.getGuild(M) ||
                    (T || J(e),
                    e.stopPropagation(),
                    (n = h.Ay.getDefaultChannel(M)),
                    (0, r.closeAllModals)(),
                    (0, _.uh)(M, n?.id),
                    !1)
                );
            });
    }
    return {
        onDeleteClick: U
            ? function (e) {
                  e.stopPropagation(),
                      U &&
                          !T &&
                          (0, d.A)({
                              title: k.intl.string(k.t.R5bpin),
                              subtitle: k.intl.string(k.t.v2GWNQ),
                              confirmText: k.intl.string(k.t.oyYWHE),
                              onConfirm: () => p.A.deleteGuildEvent(G, M),
                          });
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != n &&
                    (0, s.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            t.e("77371"),
                            t.e("93103"),
                            t.e("92493"),
                            t.e("32054"),
                        ]).then(t.bind(t, 406406));
                        return (t) => (0, i.jsx)(e, { guildEventId: G, recurrenceId: D, channel: S, guild: n, ...t });
                    });
        },
        onJoinClick:
            H || F
                ? function (e) {
                      if ((e.stopPropagation(), F)) {
                          R?.(), (0, c.Ze)(M);
                          return;
                      }
                      S?.isGuildStageVoice()
                          ? ((0, g.av)(S), R?.())
                          : S?.isGuildVoice() && (p.A.joinVoiceEvent(S.guild_id, S.id), R?.());
                  }
                : void 0,
        onRsvpClick: J,
        onStartClick:
            U && K && !z?.is_canceled
                ? function (e) {
                      e.stopPropagation(),
                          (0, r.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([t.e("92493"), t.e("77223"), t.e("28520")]).then(
                                  t.bind(t, 199226),
                              );
                              return (n) => (0, i.jsx)(e, { ...n, event: L, onSuccess: R });
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!(0, N.y)(V, O, S)) {
                    let e = (0, N.d)({ guildId: M, guildEventId: G });
                    (0, m.C)(e),
                        x.default.track(y.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: M,
                            guild_scheduled_event_id: G,
                        });
                    return;
                }
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([t.e("28136"), t.e("43600"), t.e("82095")]).then(
                        t.bind(t, 234355),
                    );
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guild: n,
                            channel: S,
                            guildScheduledEvent: L,
                            source: y.PE1.GUILD_EVENTS,
                        });
                });
            }
        },
        onEndClick:
            U && P === E.Ps.EXTERNAL && T
                ? function (e) {
                      e.stopPropagation(),
                          U &&
                              (0, d.A)({
                                  title: k.intl.string(k.t.qaYzPA),
                                  subtitle: k.intl.string(k.t.bnDQ7E),
                                  confirmText: k.intl.string(k.t.mjB9pd),
                                  onConfirm: () => {
                                      p.A.endEvent(G, M), (0, r.closeAllModals)();
                                  },
                              });
                  }
                : void 0,
        onJoinGuildClick: W,
    };
}
