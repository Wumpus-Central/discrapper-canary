t.d(n, {
    Z: function () {
        return U;
    }
});
var i = t(200651);
t(192379);
var a = t(442837),
    l = t(481060),
    r = t(239091),
    d = t(749210),
    o = t(305325),
    c = t(281956),
    s = t(357156),
    u = t(703656),
    _ = t(922482),
    g = t(984933),
    p = t(430824),
    m = t(496675),
    I = t(626135),
    v = t(572004),
    h = t(482241),
    f = t(951539),
    E = t(894017),
    C = t(274311),
    T = t(854698),
    b = t(118998),
    L = t(139712),
    x = t(765305),
    S = t(981631),
    D = t(388032);
function U(e) {
    let { guild: n, channel: U, guildScheduledEvent: y, isActive: N, recurrenceId: G, onActionTaken: Z } = e,
        { scheduled_start_time: j, id: O, entity_type: A, guild_id: z } = y,
        { canManageGuildEvent: B } = (0, s.XJ)(null != U ? U : n),
        R = B(y),
        P = (0, f.ZP)(y),
        k = (0, C.T)(null == U ? void 0 : U.id, y.id),
        { withinStartWindow: H } = (0, T.ub)(j),
        M = (0, a.e7)([m.Z], () => (null == U ? !void 0 : !U.isGuildVocal()) || m.Z.can(S.Plq.CONNECT, U), [U]),
        w = (0, c.J)(z),
        V = (0, E.Z)(G, O);
    function X(e) {
        e.stopPropagation(), (0, L.Z)(O, G, z);
    }
    async function Y(e) {
        e.stopPropagation(), await d.Z.joinGuild(z), p.Z.addConditionalChangeListener(() => null == p.Z.getGuild(z) || (!N && X(e), F(e), !1));
    }
    function F(e) {
        e.stopPropagation();
        let n = g.ZP.getDefaultChannel(z);
        (0, l.closeAllModals)(), (0, u.XU)(z, null == n ? void 0 : n.id);
    }
    return {
        onDeleteClick: R
            ? function (e) {
                  if ((e.stopPropagation(), !!R && !N))
                      (0, l.openModal)((e) =>
                          (0, i.jsx)(l.ConfirmModal, {
                              ...e,
                              header: D.intl.string(D.t.R5bpio),
                              confirmText: D.intl.string(D.t.oyYWHB),
                              cancelText: D.intl.string(D.t['ETE/oK']),
                              onConfirm: () => h.Z.deleteGuildEvent(O, z),
                              children: (0, i.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  children: D.intl.string(D.t.v2GWNT)
                              })
                          })
                      );
              }
            : void 0,
        onContextMenu: function (e) {
            e.stopPropagation(),
                null != n &&
                    (0, r.jW)(e, async () => {
                        let { default: e } = await Promise.all([t.e('15450'), t.e('37133')]).then(t.bind(t, 215269));
                        return (t) =>
                            (0, i.jsx)(e, {
                                guildEventId: O,
                                recurrenceId: G,
                                channel: U,
                                guild: n,
                                ...t
                            });
                    });
        },
        onJoinClick:
            M || w
                ? function (e) {
                      if ((e.stopPropagation(), w)) {
                          null == Z || Z(), (0, o.hk)(z);
                          return;
                      }
                      (null == U ? void 0 : U.isGuildStageVoice()) ? ((0, _.Cq)(U), null == Z || Z()) : (null == U ? void 0 : U.isGuildVoice()) && (h.Z.joinVoiceEvent(U.guild_id, U.id), null == Z || Z());
                  }
                : void 0,
        onRsvpClick: X,
        onStartClick:
            R && H && !(null == V ? void 0 : V.is_canceled)
                ? function (e) {
                      e.stopPropagation(),
                          (0, l.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([t.e('84722'), t.e('76882')]).then(t.bind(t, 296864));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      event: y,
                                      onSuccess: Z
                                  });
                          });
                  }
                : void 0,
        onInviteClick: function (e) {
            if ((e.stopPropagation(), null != n)) {
                if (!P || !k) {
                    let e = (0, b.H)({
                        guildId: z,
                        guildEventId: O
                    });
                    (0, v.JG)(e),
                        I.default.track(S.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                            guild_id: z,
                            guild_scheduled_event_id: O
                        });
                    return;
                }
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([t.e('7654'), t.e('1187'), t.e('47833')]).then(t.bind(t, 560114));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guild: n,
                            channel: U,
                            guildScheduledEvent: y,
                            source: S.t4x.GUILD_EVENTS
                        });
                });
            }
        },
        onEndClick:
            R && A === x.WX.EXTERNAL && N
                ? function (e) {
                      if ((e.stopPropagation(), !R)) return;
                      let n = () => {
                          h.Z.endEvent(O, z), (0, l.closeAllModals)();
                      };
                      (0, l.openModal)((e) =>
                          (0, i.jsx)(l.ConfirmModal, {
                              ...e,
                              header: D.intl.string(D.t.qaYzPD),
                              confirmText: D.intl.string(D.t.mjB9pa),
                              cancelText: D.intl.string(D.t['ETE/oK']),
                              onConfirm: n,
                              children: (0, i.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  children: D.intl.string(D.t.bnDQ7O)
                              })
                          })
                      );
                  }
                : void 0,
        onJoinGuildClick: Y,
        onGoToGuildClick: F
    };
}
