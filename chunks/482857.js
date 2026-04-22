n.d(t, { A: () => b });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(314116),
    s = n(192308),
    a = n(442433),
    c = n(686956),
    o = n(202384),
    d = n(51758),
    u = n(931991),
    _ = n(976860),
    h = n(323443),
    g = n(808728),
    A = n(71393),
    f = n(576705),
    p = n(954571),
    E = n(957565),
    m = n(496092),
    x = n(485394),
    v = n(722260),
    I = n(530209),
    C = n(974930),
    T = n(625142),
    S = n(666394),
    R = n(988794),
    N = n(652215),
    y = n(985018);
function b(e) {
    let { guild: t, channel: b, guildScheduledEvent: L, isActive: j, recurrenceId: w, onActionTaken: P } = e,
        { scheduled_start_time: M, id: D, entity_type: U, guild_id: O } = L,
        { canManageGuildEvent: G } = (0, u.nr)(b ?? t),
        k = G(L),
        F = (0, x.Ay)(L),
        B = (0, I.e)(b?.id, L.id),
        { withinStartWindow: V } = (0, C.CC)(M),
        H = (0, i.bG)([f.A], () => !b?.isGuildVocal() || f.A.can(N.xBc.CONNECT, b), [b]),
        Z = (0, d.H)(O),
        K = (0, v.A)(w, D);
    function Y(e) {
        e.stopPropagation(), (0, S.A)(D, w, O);
    }
    async function W(e) {
        e.stopPropagation(),
            await c.A.joinGuild(O),
            A.A.addConditionalChangeListener(() => {
                let t;
                return (
                    null == A.A.getGuild(O) ||
                    (j || Y(e),
                    e.stopPropagation(),
                    (t = g.Ay.getDefaultChannel(O)),
                    (0, s.closeAllModals)(),
                    (0, _.uh)(O, t?.id),
                    !1)
                );
            });
    }
    return {
        onDeleteClick: k
            ? function (e) {
                  e.stopPropagation(),
                      k &&
                          !j &&
                          (0, r.A)({
                              title: y.intl.string(y.t.R5bpin),
                              subtitle: y.intl.string(y.t.v2GWNQ),
                              confirmText: y.intl.string(y.t.oyYWHE),
                              onConfirm: () => m.A.deleteGuildEvent(D, O),
                          });
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != t &&
                    (0, a.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("77371"),
                            n.e("92493"),
                            n.e("93103"),
                            n.e("32054"),
                        ]).then(n.bind(n, 406406));
                        return (n) => (0, l.jsx)(e, { guildEventId: D, recurrenceId: w, channel: b, guild: t, ...n });
                    });
        },
        onJoinClick:
            H || Z
                ? function (e) {
                      if ((e.stopPropagation(), Z)) {
                          P?.(), (0, o.Ze)(O);
                          return;
                      }
                      b?.isGuildStageVoice()
                          ? ((0, h.av)(b), P?.())
                          : b?.isGuildVoice() && (m.A.joinVoiceEvent(b.guild_id, b.id), P?.());
                  }
                : void 0,
        onRsvpClick: Y,
        onStartClick:
            k && V && !K?.is_canceled
                ? function (e) {
                      e.stopPropagation(),
                          (0, s.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("92493"), n.e("77223"), n.e("28520")]).then(
                                  n.bind(n, 199226),
                              );
                              return (t) => (0, l.jsx)(e, { ...t, event: L, onSuccess: P });
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != t)) {
                if (!(0, T.y)(F, B, b)) {
                    let e = (0, T.d)({ guildId: O, guildEventId: D });
                    (0, E.C)(e),
                        p.default.track(N.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: O,
                            guild_scheduled_event_id: D,
                        });
                    return;
                }
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("28136"), n.e("43600"), n.e("64501")]).then(
                        n.bind(n, 234355),
                    );
                    return (n) =>
                        (0, l.jsx)(e, {
                            ...n,
                            guild: t,
                            channel: b,
                            guildScheduledEvent: L,
                            source: N.PE1.GUILD_EVENTS,
                        });
                });
            }
        },
        onEndClick:
            k && U === R.Ps.EXTERNAL && j
                ? function (e) {
                      e.stopPropagation(),
                          k &&
                              (0, r.A)({
                                  title: y.intl.string(y.t.qaYzPA),
                                  subtitle: y.intl.string(y.t.bnDQ7E),
                                  confirmText: y.intl.string(y.t.mjB9pd),
                                  onConfirm: () => {
                                      m.A.endEvent(D, O), (0, s.closeAllModals)();
                                  },
                              });
                  }
                : void 0,
        onJoinGuildClick: W,
    };
}
