n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(442837),
    o = n(715903),
    a = n(71619),
    l = n(41776),
    s = n(665906),
    r = n(271383),
    c = n(607744),
    d = n(496675),
    u = n(432376),
    h = n(981631);
function m(e) {
    let t = null == e ? void 0 : e.guild_id,
        n = (0, i.e7)([c.Z], () => null == t || c.Z.canChatInGuild(t), [t]),
        m = (0, i.e7)([l.Z], () => null != t && l.Z.isLurking(t), [t]),
        p = (0, i.e7)([r.ZP], () => null != t && r.ZP.isCurrentUserGuest(t), [t]),
        f = (0, i.e7)([d.Z], () => n && d.Z.can(h.Plq.ADD_REACTIONS, e), [n, e]),
        g = (0, o.ux)(t),
        [, v] = (0, a.AB)(t),
        b = (0, s.$R)(e);
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
                  canChat: n,
                  renderReactions: !0,
                  canAddNewReactions: f,
                  isLurking: m,
                  isGuest: p,
                  communicationDisabled: v,
                  isActiveChannelOrUnarchivableThread: b,
                  isAutomodQuarantined: g
              }),
              isLurking: m,
              isGuest: p,
              isPendingMember: !1
          };
}
