t.d(n, { A: () => S });
var i = t(627968);
t(64700);
var l = t(311907),
    d = t(314116),
    r = t(397927),
    s = t(442433),
    a = t(686956),
    c = t(202384),
    o = t(51758),
    u = t(931991),
    _ = t(976860),
    g = t(323443),
    f = t(808728),
    h = t(71393),
    x = t(576705),
    m = t(954571),
    v = t(957565),
    p = t(496092),
    A = t(485394),
    I = t(722260),
    j = t(530209),
    b = t(974930),
    N = t(625142),
    C = t(666394),
    y = t(988794),
    k = t(652215),
    E = t(985018);
function S(e) {
    let { guild: n, channel: S, guildScheduledEvent: T, isActive: L, recurrenceId: D, onActionTaken: R } = e,
        { scheduled_start_time: G, id: w, entity_type: P, guild_id: U } = T,
        { canManageGuildEvent: B } = (0, u.nr)(S ?? n),
        M = B(T),
        O = (0, A.Ay)(T),
        V = (0, j.e)(S?.id, T.id),
        { withinStartWindow: F } = (0, b.CC)(G),
        K = (0, l.bG)([x.A], () => !S?.isGuildVocal() || x.A.can(k.xBc.CONNECT, S), [S]),
        H = (0, o.H)(U),
        J = (0, I.A)(D, w);
    function z(e) {
        e.stopPropagation(), (0, C.A)(w, D, U);
    }
    async function W(e) {
        e.stopPropagation(),
            await a.A.joinGuild(U),
            h.A.addConditionalChangeListener(() => {
                let n;
                return (
                    null == h.A.getGuild(U) ||
                    (L || z(e),
                    e.stopPropagation(),
                    (n = f.Ay.getDefaultChannel(U)),
                    (0, r.s7G)(),
                    (0, _.uh)(U, n?.id),
                    !1)
                );
            });
    }
    return {
        onDeleteClick: M
            ? function (e) {
                  e.stopPropagation(),
                      M &&
                          !L &&
                          (0, d.A)({
                              title: E.intl.string(E.t.R5bpin),
                              subtitle: E.intl.string(E.t.v2GWNQ),
                              confirmText: E.intl.string(E.t.oyYWHE),
                              onConfirm: () => p.A.deleteGuildEvent(w, U),
                          });
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != n &&
                    (0, s.L3)(e, async () => {
                        let { default: e } = await Promise.all([t.e("77371"), t.e("3795"), t.e("97580")]).then(
                            t.bind(t, 406406),
                        );
                        return (t) => (0, i.jsx)(e, { guildEventId: w, recurrenceId: D, channel: S, guild: n, ...t });
                    });
        },
        onJoinClick:
            K || H
                ? function (e) {
                      if ((e.stopPropagation(), H)) {
                          R?.(), (0, c.Ze)(U);
                          return;
                      }
                      S?.isGuildStageVoice()
                          ? ((0, g.av)(S), R?.())
                          : S?.isGuildVoice() && (p.A.joinVoiceEvent(S.guild_id, S.id), R?.());
                  }
                : void 0,
        onRsvpClick: z,
        onStartClick:
            M && F && !J?.is_canceled
                ? function (e) {
                      e.stopPropagation(),
                          (0, r.mMO)(async () => {
                              let { default: e } = await Promise.all([t.e("3795"), t.e("77223"), t.e("35957")]).then(
                                  t.bind(t, 199226),
                              );
                              return (n) => (0, i.jsx)(e, { ...n, event: T, onSuccess: R });
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!(0, N.y)(O, V, S)) {
                    let e = (0, N.d)({ guildId: U, guildEventId: w });
                    (0, v.C)(e),
                        m.default.track(k.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: U,
                            guild_scheduled_event_id: w,
                        });
                    return;
                }
                (0, r.mMO)(async () => {
                    let { default: e } = await Promise.all([t.e("43600"), t.e("28136"), t.e("72469")]).then(
                        t.bind(t, 234355),
                    );
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guild: n,
                            channel: S,
                            guildScheduledEvent: T,
                            source: k.PE1.GUILD_EVENTS,
                        });
                });
            }
        },
        onEndClick:
            M && P === y.Ps.EXTERNAL && L
                ? function (e) {
                      e.stopPropagation(),
                          M &&
                              (0, d.A)({
                                  title: E.intl.string(E.t.qaYzPA),
                                  subtitle: E.intl.string(E.t.bnDQ7E),
                                  confirmText: E.intl.string(E.t.mjB9pd),
                                  onConfirm: () => {
                                      p.A.endEvent(w, U), (0, r.s7G)();
                                  },
                              });
                  }
                : void 0,
        onJoinGuildClick: W,
    };
}
