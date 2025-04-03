n.d(t, { Z: () => p }), n(47120);
var i = n(442837),
    r = n(715903),
    o = n(71619),
    a = n(41776),
    s = n(665906),
    l = n(271383),
    c = n(607744),
    u = n(496675),
    d = n(432376),
    h = n(981631);
function p(e) {
    var t, n;
    let p = null == e ? void 0 : e.guild_id,
        m = (0, i.e7)([c.Z], () => null == p || c.Z.canChatInGuild(p), [p]),
        f = (0, i.e7)([a.Z], () => null != p && a.Z.isLurking(p), [p]),
        g = (0, i.e7)([l.ZP], () => null != p && l.ZP.isCurrentUserGuest(p), [p]),
        b = (0, i.e7)([u.Z], () => m && u.Z.can(h.Plq.ADD_REACTIONS, e), [m, e]),
        j = (0, r.ux)(p),
        [, v] = (0, o.AB)(p),
        O = (0, s.$R)(e);
    return null == e
        ? {
              disableReactionReads: !0,
              disableReactionCreates: !0,
              disableReactionUpdates: !0,
              isLurking: !1,
              isGuest: !1,
              isPendingMember: !1
          }
        : ((t = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                      i = Object.keys(n);
                  'function' == typeof Object.getOwnPropertySymbols &&
                      (i = i.concat(
                          Object.getOwnPropertySymbols(n).filter(function (e) {
                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                          })
                      )),
                      i.forEach(function (t) {
                          var i;
                          (i = n[t]),
                              t in e
                                  ? Object.defineProperty(e, t, {
                                        value: i,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    })
                                  : (e[t] = i);
                      });
              }
              return e;
          })(
              {},
              (0, d.Z)({
                  channel: e,
                  canChat: m,
                  renderReactions: !0,
                  canAddNewReactions: b,
                  isLurking: f,
                  isGuest: g,
                  communicationDisabled: v,
                  isActiveChannelOrUnarchivableThread: O,
                  isAutomodQuarantined: j
              })
          )),
          (n = n =
              {
                  isLurking: f,
                  isGuest: g,
                  isPendingMember: !1
              }),
          Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : (function (e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, i);
                    }
                    return n;
                })(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                }),
          t);
}
