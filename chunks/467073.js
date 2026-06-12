i.d(t, { A: () => p });
var n = i(17928),
    l = i(229527),
    s = i(870136),
    a = i(857071),
    r = i(406704),
    d = i(696451),
    o = i(834942),
    u = i(576705),
    c = i(707985),
    h = i(652215);
function p(e) {
    let t = e?.guild_id,
        i = (0, n.bG)([o.A], () => null == t || o.A.canChatInGuild(t), [t]),
        p = (0, n.bG)([a.A], () => null != t && a.A.isLurking(t), [t]),
        m = (0, n.bG)([d.Ay], () => null != t && d.Ay.isCurrentUserGuest(t), [t]),
        A = (0, n.bG)([u.A], () => i && u.A.can(h.xBc.ADD_REACTIONS, e), [i, e]),
        I = (0, l.ix)(t),
        [, g] = (0, s.c)(t),
        f = (0, r.Id)(e);
    return null == e
        ? {
              disableReactionReads: !0,
              disableReactionCreates: !0,
              disableReactionUpdates: !0,
              isLurking: !1,
              isGuest: !1,
              isPendingMember: !1,
          }
        : {
              ...(0, c.A)({
                  channel: e,
                  canChat: i,
                  renderReactions: !0,
                  canAddNewReactions: A,
                  isLurking: p,
                  communicationDisabled: g,
                  isActiveChannelOrUnarchivableThread: f,
                  isAutomodQuarantined: I,
              }),
              isLurking: p,
              isGuest: m,
              isPendingMember: !1,
          };
}
