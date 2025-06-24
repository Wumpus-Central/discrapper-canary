i.d(e, { Z: () => p }), i(388685);
var n = i(442837),
    r = i(715903),
    s = i(71619),
    o = i(41776),
    l = i(665906),
    a = i(271383),
    d = i(607744),
    u = i(496675),
    c = i(432376),
    h = i(981631);
function p(t) {
    var e, i;
    let p = null == t ? void 0 : t.guild_id,
        g = (0, n.e7)([d.Z], () => null == p || d.Z.canChatInGuild(p), [p]),
        f = (0, n.e7)([o.Z], () => null != p && o.Z.isLurking(p), [p]),
        m = (0, n.e7)([a.ZP], () => null != p && a.ZP.isCurrentUserGuest(p), [p]),
        v = (0, n.e7)([u.Z], () => g && u.Z.can(h.Plq.ADD_REACTIONS, t), [g, t]),
        O = (0, r.ux)(p),
        [, b] = (0, s.AB)(p),
        y = (0, l.$R)(t);
    return null == t
        ? {
              disableReactionReads: !0,
              disableReactionCreates: !0,
              disableReactionUpdates: !0,
              isLurking: !1,
              isGuest: !1,
              isPendingMember: !1
          }
        : ((e = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                  var i = null != arguments[e] ? arguments[e] : {},
                      n = Object.keys(i);
                  'function' == typeof Object.getOwnPropertySymbols &&
                      (n = n.concat(
                          Object.getOwnPropertySymbols(i).filter(function (t) {
                              return Object.getOwnPropertyDescriptor(i, t).enumerable;
                          })
                      )),
                      n.forEach(function (e) {
                          var n;
                          (n = i[e]),
                              e in t
                                  ? Object.defineProperty(t, e, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    })
                                  : (t[e] = n);
                      });
              }
              return t;
          })(
              {},
              (0, c.Z)({
                  channel: t,
                  canChat: g,
                  renderReactions: !0,
                  canAddNewReactions: v,
                  isLurking: f,
                  isGuest: m,
                  communicationDisabled: b,
                  isActiveChannelOrUnarchivableThread: y,
                  isAutomodQuarantined: O
              })
          )),
          (i = i =
              {
                  isLurking: f,
                  isGuest: m,
                  isPendingMember: !1
              }),
          Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : (function (t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        i.push.apply(i, n);
                    }
                    return i;
                })(Object(i)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                }),
          e);
}
