n.d(t, { A: () => m });
var i = n(311907),
    l = n(229527),
    a = n(870136),
    s = n(857071),
    r = n(406704),
    o = n(696451),
    c = n(834942),
    d = n(576705),
    u = n(707985),
    h = n(652215);
function m(e) {
    let t = e?.guild_id,
        n = (0, i.bG)([c.A], () => null == t || c.A.canChatInGuild(t), [t]),
        m = (0, i.bG)([s.A], () => null != t && s.A.isLurking(t), [t]),
        A = (0, i.bG)([o.Ay], () => null != t && o.Ay.isCurrentUserGuest(t), [t]),
        g = (0, i.bG)([d.A], () => n && d.A.can(h.xBc.ADD_REACTIONS, e), [n, e]),
        _ = (0, l.ix)(t),
        [, p] = (0, a.c)(t),
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
              ...(0, u.A)({
                  channel: e,
                  canChat: n,
                  renderReactions: !0,
                  canAddNewReactions: g,
                  isLurking: m,
                  communicationDisabled: p,
                  isActiveChannelOrUnarchivableThread: f,
                  isAutomodQuarantined: _,
              }),
              isLurking: m,
              isGuest: A,
              isPendingMember: !1,
          };
}
