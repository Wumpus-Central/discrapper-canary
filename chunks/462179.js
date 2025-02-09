t.d(n, { Z: () => j });
var i = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    r = t(239091),
    d = t(749210),
    s = t(305325),
    o = t(281956),
    c = t(357156),
    u = t(703656),
    _ = t(922482),
    m = t(984933),
    g = t(430824),
    p = t(496675),
    v = t(626135),
    h = t(572004),
    I = t(482241),
    f = t(951539),
    E = t(894017),
    x = t(274311),
    C = t(854698),
    N = t(118998),
    T = t(139712),
    L = t(765305),
    b = t(981631),
    S = t(388032);
function j(e) {
    let { guild: n, channel: j, guildScheduledEvent: D, isActive: y, recurrenceId: Z, onActionTaken: U } = e,
        { scheduled_start_time: G, id: z, entity_type: k, guild_id: R } = D,
        { canManageGuildEvent: B } = (0, c.XJ)(null != j ? j : n),
        P = B(D),
        A = (0, f.ZP)(D),
        O = (0, x.T)(null == j ? void 0 : j.id, D.id),
        { withinStartWindow: w } = (0, C.ub)(G),
        M = (0, l.e7)([p.Z], () => null == j || !j.isGuildVocal() || p.Z.can(b.Plq.CONNECT, j), [j]),
        H = (0, o.J)(R),
        X = (0, E.Z)(Z, z);
    function V(e) {
        e.stopPropagation(), (0, T.Z)(z, Z, R);
    }
    async function F(e) {
        e.stopPropagation(), await d.Z.joinGuild(R), g.Z.addConditionalChangeListener(() => null == g.Z.getGuild(R) || (y || V(e), Y(e), !1));
    }
    function Y(e) {
        e.stopPropagation();
        let n = m.ZP.getDefaultChannel(R);
        (0, a.pTH)(), (0, u.XU)(R, null == n ? void 0 : n.id);
    }
    return {
        onDeleteClick: P
            ? function (e) {
                  e.stopPropagation(),
                      P &&
                          !y &&
                          (0, a.h7j)((e) =>
                              (0, i.jsx)(a.ConfirmModal, {
                                  ...e,
                                  header: S.intl.string(S.t.R5bpio),
                                  confirmText: S.intl.string(S.t.oyYWHB),
                                  cancelText: S.intl.string(S.t['ETE/oK']),
                                  onConfirm: () => I.Z.deleteGuildEvent(z, R),
                                  children: (0, i.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: S.intl.string(S.t.v2GWNT)
                                  })
                              })
                          );
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != n &&
                    (0, r.jW)(e, async () => {
                        let { default: e } = await Promise.all([t.e('99272'), t.e('10472')]).then(t.bind(t, 215269));
                        return (t) =>
                            (0, i.jsx)(e, {
                                guildEventId: z,
                                recurrenceId: Z,
                                channel: j,
                                guild: n,
                                ...t
                            });
                    });
        },
        onJoinClick:
            M || H
                ? function (e) {
                      if ((e.stopPropagation(), H)) {
                          null == U || U(), (0, s.hk)(R);
                          return;
                      }
                      (null == j ? void 0 : j.isGuildStageVoice()) ? ((0, _.Cq)(j), null == U || U()) : (null == j ? void 0 : j.isGuildVoice()) && (I.Z.joinVoiceEvent(j.guild_id, j.id), null == U || U());
                  }
                : void 0,
        onRsvpClick: V,
        onStartClick:
            P && w && !(null == X ? void 0 : X.is_canceled)
                ? function (e) {
                      e.stopPropagation(),
                          (0, a.ZDy)(async () => {
                              let { default: e } = await Promise.all([t.e('84722'), t.e('59659')]).then(t.bind(t, 296864));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      event: D,
                                      onSuccess: U
                                  });
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!A || !O) {
                    let e = (0, N.H)({
                        guildId: R,
                        guildEventId: z
                    });
                    (0, h.JG)(e),
                        v.default.track(b.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: R,
                            guild_scheduled_event_id: z
                        });
                    return;
                }
                (0, a.ZDy)(async () => {
                    let { default: e } = await Promise.all([t.e('7654'), t.e('60775')]).then(t.bind(t, 560114));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guild: n,
                            channel: j,
                            guildScheduledEvent: D,
                            source: b.t4x.GUILD_EVENTS
                        });
                });
            }
        },
        onEndClick:
            P && k === L.WX.EXTERNAL && y
                ? function (e) {
                      if ((e.stopPropagation(), !P)) return;
                      let n = () => {
                          I.Z.endEvent(z, R), (0, a.pTH)();
                      };
                      (0, a.h7j)((e) =>
                          (0, i.jsx)(a.ConfirmModal, {
                              ...e,
                              header: S.intl.string(S.t.qaYzPD),
                              confirmText: S.intl.string(S.t.mjB9pa),
                              cancelText: S.intl.string(S.t['ETE/oK']),
                              onConfirm: n,
                              children: (0, i.jsx)(a.Text, {
                                  variant: 'text-md/normal',
                                  children: S.intl.string(S.t.bnDQ7O)
                              })
                          })
                      );
                  }
                : void 0,
        onJoinGuildClick: F,
        onGoToGuildClick: Y
    };
}
