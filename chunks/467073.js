i.d(t, { A: () => m });
var n = i(17928),
    s = i(229527),
    l = i(870136),
    a = i(857071),
    r = i(406704),
    d = i(696451),
    o = i(834942),
    u = i(576705),
    c = i(707985),
    h = i(652215);
function m(e) {
    let t = e?.guild_id,
        i = (0, n.bG)([o.A], () => null == t || o.A.canChatInGuild(t), [t]),
        m = (0, n.bG)([a.A], () => null != t && a.A.isLurking(t), [t]),
        p = (0, n.bG)([d.Ay], () => null != t && d.Ay.isCurrentUserGuest(t), [t]),
        A = (0, n.bG)([u.A], () => i && u.A.can(h.xBc.ADD_REACTIONS, e), [i, e]),
        g = (0, s.ix)(t),
        [, I] = (0, l.c)(t),
        E = (0, r.Id)(e);
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
                  isLurking: m,
                  communicationDisabled: I,
                  isActiveChannelOrUnarchivableThread: E,
                  isAutomodQuarantined: g,
              }),
              isLurking: m,
              isGuest: p,
              isPendingMember: !1,
          };
}
