t.d(e, {
    Z: function () {
        return T;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(239091),
    o = t(749210),
    c = t(305325),
    s = t(281956),
    u = t(357156),
    d = t(703656),
    g = t(922482),
    h = t(984933),
    v = t(430824),
    m = t(496675),
    x = t(626135),
    Z = t(572004),
    f = t(482241),
    C = t(951539),
    p = t(894017),
    N = t(274311),
    j = t(854698),
    E = t(118998),
    k = t(139712),
    I = t(765305),
    _ = t(981631),
    P = t(388032);
function T(n) {
    let { guild: e, channel: T, guildScheduledEvent: y, isActive: b, recurrenceId: G, onActionTaken: M } = n,
        { scheduled_start_time: L, id: S, entity_type: A, guild_id: R } = y,
        { canManageGuildEvent: w } = (0, u.XJ)(null != T ? T : e),
        D = w(y),
        H = (0, C.ZP)(y),
        U = (0, N.T)(null == T ? void 0 : T.id, y.id),
        { withinStartWindow: z } = (0, j.ub)(L),
        B = (0, l.e7)([m.Z], () => (null == T ? !void 0 : !T.isGuildVocal()) || m.Z.can(_.Plq.CONNECT, T), [T]),
        J = (0, s.J)(R),
        V = (0, p.Z)(G, S);
    function X(n) {
        n.stopPropagation(), (0, k.Z)(S, G, R);
    }
    async function W(n) {
        n.stopPropagation(), await o.Z.joinGuild(R), v.Z.addConditionalChangeListener(() => null == v.Z.getGuild(R) || (!b && X(n), O(n), !1));
    }
    function O(n) {
        n.stopPropagation();
        let e = h.ZP.getDefaultChannel(R);
        (0, r.closeAllModals)(), (0, d.XU)(R, null == e ? void 0 : e.id);
    }
    return {
        onDeleteClick: D
            ? function (n) {
                  if ((n.stopPropagation(), !!D && !b))
                      (0, r.openModal)((n) =>
                          (0, i.jsx)(r.ConfirmModal, {
                              ...n,
                              header: P.intl.string(P.t.R5bpio),
                              confirmText: P.intl.string(P.t.oyYWHB),
                              cancelText: P.intl.string(P.t['ETE/oK']),
                              onConfirm: () => f.Z.deleteGuildEvent(S, R),
                              children: (0, i.jsx)(r.Text, {
                                  variant: 'text-md/normal',
                                  children: P.intl.string(P.t.v2GWNT)
                              })
                          })
                      );
              }
            : void 0,
        onContextMenu: function (n) {
            n.stopPropagation(),
                null != e &&
                    (0, a.jW)(n, async () => {
                        let { default: n } = await Promise.all([t.e('15450'), t.e('37133')]).then(t.bind(t, 215269));
                        return (t) =>
                            (0, i.jsx)(n, {
                                guildEventId: S,
                                recurrenceId: G,
                                channel: T,
                                guild: e,
                                ...t
                            });
                    });
        },
        onJoinClick:
            B || J
                ? function (n) {
                      if ((n.stopPropagation(), J)) {
                          null == M || M(), (0, c.hk)(R);
                          return;
                      }
                      (null == T ? void 0 : T.isGuildStageVoice()) ? ((0, g.Cq)(T), null == M || M()) : (null == T ? void 0 : T.isGuildVoice()) && (f.Z.joinVoiceEvent(T.guild_id, T.id), null == M || M());
                  }
                : void 0,
        onRsvpClick: X,
        onStartClick:
            D && z && !(null == V ? void 0 : V.is_canceled)
                ? function (n) {
                      n.stopPropagation(),
                          (0, r.openModalLazy)(async () => {
                              let { default: n } = await Promise.all([t.e('84722'), t.e('83033')]).then(t.bind(t, 296864));
                              return (e) =>
                                  (0, i.jsx)(n, {
                                      ...e,
                                      event: y,
                                      onSuccess: M
                                  });
                          });
                  }
                : void 0,
        onInviteClick: function (n) {
            if ((n.stopPropagation(), null != e)) {
                if (!H || !U) {
                    let n = (0, E.H)({
                        guildId: R,
                        guildEventId: S
                    });
                    (0, Z.JG)(n),
                        x.default.track(_.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: R,
                            guild_scheduled_event_id: S
                        });
                    return;
                }
                (0, r.openModalLazy)(async () => {
                    let { default: n } = await Promise.all([t.e('7654'), t.e('1187'), t.e('20554')]).then(t.bind(t, 560114));
                    return (t) =>
                        (0, i.jsx)(n, {
                            ...t,
                            guild: e,
                            channel: T,
                            guildScheduledEvent: y,
                            source: _.t4x.GUILD_EVENTS
                        });
                });
            }
        },
        onEndClick:
            D && A === I.WX.EXTERNAL && b
                ? function (n) {
                      if ((n.stopPropagation(), !D)) return;
                      let e = () => {
                          f.Z.endEvent(S, R), (0, r.closeAllModals)();
                      };
                      (0, r.openModal)((n) =>
                          (0, i.jsx)(r.ConfirmModal, {
                              ...n,
                              header: P.intl.string(P.t.qaYzPD),
                              confirmText: P.intl.string(P.t.mjB9pa),
                              cancelText: P.intl.string(P.t['ETE/oK']),
                              onConfirm: e,
                              children: (0, i.jsx)(r.Text, {
                                  variant: 'text-md/normal',
                                  children: P.intl.string(P.t.bnDQ7O)
                              })
                          })
                      );
                  }
                : void 0,
        onJoinGuildClick: W,
        onGoToGuildClick: O
    };
}
