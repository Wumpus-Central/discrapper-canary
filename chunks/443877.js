i.d(t, { Z: () => m }), i(47120);
var n = i(442837),
    a = i(715903),
    o = i(71619),
    s = i(41776),
    l = i(665906),
    r = i(271383),
    c = i(607744),
    d = i(496675),
    u = i(432376),
    h = i(981631);
function m(e) {
    let t = null == e ? void 0 : e.guild_id,
        i = (0, n.e7)([c.Z], () => null == t || c.Z.canChatInGuild(t), [t]),
        m = (0, n.e7)([s.Z], () => null != t && s.Z.isLurking(t), [t]),
        p = (0, n.e7)([r.ZP], () => null != t && r.ZP.isCurrentUserGuest(t), [t]),
        g = (0, n.e7)([d.Z], () => i && d.Z.can(h.Plq.ADD_REACTIONS, e), [i, e]),
        f = (0, a.ux)(t),
        [, v] = (0, o.AB)(t),
        x = (0, l.$R)(e);
    return null == e
        ? {
              disableReactionReads: !0,
              disableReactionCreates: !0,
              disableReactionUpdates: !0,
              isLurking: !1,
              isGuest: !1,
              isPendingMember: !1
          }
        : {
              ...(0, u.Z)({
                  channel: e,
                  canChat: i,
                  renderReactions: !0,
                  canAddNewReactions: g,
                  isLurking: m,
                  isGuest: p,
                  communicationDisabled: v,
                  isActiveChannelOrUnarchivableThread: x,
                  isAutomodQuarantined: f
              }),
              isLurking: m,
              isGuest: p,
              isPendingMember: !1
          };
}
