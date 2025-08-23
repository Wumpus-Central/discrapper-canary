i.d(t, { Z: () => p }), i(388685);
var n = i(442837),
    r = i(715903),
    s = i(71619),
    o = i(41776),
    l = i(665906),
    a = i(271383),
    d = i(607744),
    c = i(496675),
    u = i(432376),
    h = i(981631);
function p(e) {
    var t, i;
    let p = null == e ? void 0 : e.guild_id,
        g = (0, n.e7)([d.Z], () => null == p || d.Z.canChatInGuild(p), [p]),
        m = (0, n.e7)([o.Z], () => null != p && o.Z.isLurking(p), [p]),
        f = (0, n.e7)([a.ZP], () => null != p && a.ZP.isCurrentUserGuest(p), [p]),
        v = (0, n.e7)([c.Z], () => g && c.Z.can(h.Plq.ADD_REACTIONS, e), [g, e]),
        O = (0, r.ux)(p),
        [, b] = (0, s.AB)(p),
        y = (0, l.$R)(e);
    return null == e
        ? {
              disableReactionReads: !0,
              disableReactionCreates: !0,
              disableReactionUpdates: !0,
              isLurking: !1,
              isGuest: !1,
              isPendingMember: !1,
          }
        : ((t = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var i = null != arguments[t] ? arguments[t] : {},
                      n = Object.keys(i);
                  "function" == typeof Object.getOwnPropertySymbols &&
                      (n = n.concat(
                          Object.getOwnPropertySymbols(i).filter(function (e) {
                              return Object.getOwnPropertyDescriptor(i, e).enumerable;
                          }),
                      )),
                      n.forEach(function (t) {
                          var n;
                          (n = i[t]),
                              t in e
                                  ? Object.defineProperty(e, t, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                    })
                                  : (e[t] = n);
                      });
              }
              return e;
          })(
              {},
              (0, u.Z)({
                  channel: e,
                  canChat: g,
                  renderReactions: !0,
                  canAddNewReactions: v,
                  isLurking: m,
                  isGuest: f,
                  communicationDisabled: b,
                  isActiveChannelOrUnarchivableThread: y,
                  isAutomodQuarantined: O,
              }),
          )),
          (i = i =
              {
                  isLurking: m,
                  isGuest: f,
                  isPendingMember: !1,
              }),
          Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
              : (function (e, t) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        i.push.apply(i, n);
                    }
                    return i;
                })(Object(i)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                }),
          t);
}
