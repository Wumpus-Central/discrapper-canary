t.d(n, { A: () => w });
var i = t(627968);
t(64700);
var o = t(17928),
    l = t(314116),
    a = t(192308),
    d = t(765178),
    u = t(442433),
    s = t(66834),
    r = t(202384),
    c = t(51758),
    p = t(931991),
    g = t(976860),
    f = t(790535),
    C = t(808728),
    E = t(71393),
    v = t(576705),
    A = t(174459),
    _ = t(957565),
    h = t(496092),
    P = t(485394),
    k = t(722260),
    y = t(530209),
    G = t(647090),
    b = t(625142),
    m = t(666394),
    L = t(988794),
    D = t(652215),
    I = t(375708);
function w(e) {
    let { guild: n, channel: w, guildScheduledEvent: x, isActive: N, recurrenceId: V, onActionTaken: j } = e,
        { scheduled_start_time: S, id: T, entity_type: M, guild_id: H } = x,
        { canManageGuildEvent: z } = (0, p.nr)(w ?? n),
        O = z(x),
        R = (0, P.Ay)(x),
        U = (0, y.e)(w?.id, x.id),
        { withinStartWindow: B } = (0, G.CC)(S),
        J = (0, o.bG)([v.A], () => !w?.isGuildVocal() || v.A.can(D.xBc.CONNECT, w), [w]),
        Q = (0, c.H)(H),
        W = (0, k.A)(V, T);
    function Y(e) {
        e.stopPropagation(), (0, m.A)(T, V, H);
    }
    async function Z(e) {
        e.stopPropagation(),
            await s.A.joinGuild(H),
            E.A.addConditionalChangeListener(() => {
                let n;
                return (
                    null == E.A.getGuild(H) ||
                    (N || Y(e),
                    e.stopPropagation(),
                    (n = C.Ay.getDefaultChannel(H)),
                    (0, a.closeAllModals)(),
                    (0, g.uh)(H, n?.id),
                    !1)
                );
            });
    }
    return {
        onDeleteClick: O
            ? function (e) {
                  e.stopPropagation(),
                      O &&
                          !N &&
                          (0, l.A)({
                              title: I.intl.string(I.t.R5bpin),
                              subtitle: I.intl.string(I.t.v2GWNQ),
                              confirmText: I.intl.string(I.t.oyYWHE),
                              onConfirm: () => h.default.deleteGuildEvent(T, H),
                          });
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != n &&
                    (0, u.L3)(e, async () => {
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
                        return (t) => (0, i.jsx)(e, { guildEventId: T, recurrenceId: V, channel: w, guild: n, ...t });
                    });
        },
        onJoinClick:
            J || Q
                ? function (e) {
                      if ((e.stopPropagation(), Q)) {
                          j?.(), (0, r.Ze)(H);
                          return;
                      }
                      w?.isGuildStageVoice()
                          ? ((0, f.av)(w), j?.())
                          : w?.isGuildVoice() && (h.default.joinVoiceEvent(w.guild_id, w.id), j?.());
                  }
                : void 0,
        onRsvpClick: Y,
        onStartClick:
            O && B && !W?.is_canceled
                ? function (e) {
                      e.stopPropagation(),
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e("38314"),
                                  t.e("53032"),
                                  t.e("58337"),
                                  t.e("56753"),
                                  t.e("70644"),
                                  t.e("69772"),
                              ]).then(t.bind(t, 914119));
                              return (n) => (0, i.jsx)(e, { ...n, event: x, onSuccess: j });
                          });
                  }
                : void 0,
        onInviteClick: function (e, o) {
            if ((e.stopPropagation(), null != n)) {
                if (!(0, b.y)(R, U, w)) {
                    let e = (0, b.d)({ guildId: H, guildEventId: T });
                    (0, _.C)(e, () => {
                        d.O.announce(I.intl.string(I.t.t5VZ88)),
                            o?.(),
                            A.default.track(D.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                                guild_id: H,
                                guild_scheduled_event_id: T,
                            });
                    });
                    return;
                }
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        t.e("79205"),
                        t.e("70158"),
                        t.e("26903"),
                        t.e("28286"),
                        t.e("59957"),
                        t.e("28136"),
                        t.e("97073"),
                        t.e("16084"),
                        t.e("78195"),
                        t.e("36624"),
                        t.e("58216"),
                        t.e("22547"),
                        t.e("28781"),
                    ]).then(t.bind(t, 1310));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guild: n,
                            channel: w,
                            guildScheduledEvent: x,
                            source: D.PE1.GUILD_EVENTS,
                        });
                });
            }
        },
        onEndClick:
            O && M === L.Ps.EXTERNAL && N
                ? function (e) {
                      e.stopPropagation(),
                          O &&
                              (0, l.A)({
                                  title: I.intl.string(I.t.qaYzPA),
                                  subtitle: I.intl.string(I.t.bnDQ7E),
                                  confirmText: I.intl.string(I.t.mjB9pd),
                                  onConfirm: function () {
                                      h.default.endEvent(T, H), (0, a.closeAllModals)();
                                  },
                              });
                  }
                : void 0,
        onJoinGuildClick: Z,
    };
}
