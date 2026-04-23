n.d(t, { A: () => _ });
var a = n(17928),
    i = n(229527),
    l = n(870136),
    r = n(857071),
    s = n(406704),
    o = n(696451),
    c = n(834942),
    d = n(576705),
    u = n(707985),
    m = n(652215);
function _(e) {
    let t = e?.guild_id,
        n = (0, a.bG)([c.A], () => null == t || c.A.canChatInGuild(t), [t]),
        _ = (0, a.bG)([r.A], () => null != t && r.A.isLurking(t), [t]),
        h = (0, a.bG)([o.Ay], () => null != t && o.Ay.isCurrentUserGuest(t), [t]),
        p = (0, a.bG)([d.A], () => n && d.A.can(m.xBc.ADD_REACTIONS, e), [n, e]),
        g = (0, i.ix)(t),
        [, f] = (0, l.c)(t),
        A = (0, s.Id)(e);
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
                  canAddNewReactions: p,
                  isLurking: _,
                  communicationDisabled: f,
                  isActiveChannelOrUnarchivableThread: A,
                  isAutomodQuarantined: g,
              }),
              isLurking: _,
              isGuest: h,
              isPendingMember: !1,
          };
}
