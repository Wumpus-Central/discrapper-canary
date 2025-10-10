n.d(t, { Z: () => f }), n(388685);
var i = n(442837),
    r = n(715903),
    o = n(71619),
    l = n(41776),
    s = n(665906),
    a = n(271383),
    c = n(607744),
    u = n(496675),
    d = n(432376),
    p = n(981631);
function f(e) {
    var t, n;
    let f = null == e ? void 0 : e.guild_id,
        O = (0, i.e7)([c.Z], () => null == f || c.Z.canChatInGuild(f), [f]),
        b = (0, i.e7)([l.Z], () => null != f && l.Z.isLurking(f), [f]),
        h = (0, i.e7)([a.ZP], () => null != f && a.ZP.isCurrentUserGuest(f), [f]),
        m = (0, i.e7)([u.Z], () => O && u.Z.can(p.Plq.ADD_REACTIONS, e), [O, e]),
        g = (0, r.ux)(f),
        [, y] = (0, o.AB)(f),
        v = (0, s.$R)(e);
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
                  var n = null != arguments[t] ? arguments[t] : {},
                      i = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols &&
                      (i = i.concat(
                          Object.getOwnPropertySymbols(n).filter(function (e) {
                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                          }),
                      )),
                      i.forEach(function (t) {
                          var i;
                          (i = n[t]),
                              t in e
                                  ? Object.defineProperty(e, t, {
                                        value: i,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                    })
                                  : (e[t] = i);
                      });
              }
              return e;
          })(
              {},
              (0, d.Z)({
                  channel: e,
                  canChat: O,
                  renderReactions: !0,
                  canAddNewReactions: m,
                  isLurking: b,
                  isGuest: h,
                  communicationDisabled: y,
                  isActiveChannelOrUnarchivableThread: v,
                  isAutomodQuarantined: g,
              }),
          )),
          (n = n =
              {
                  isLurking: b,
                  isGuest: h,
                  isPendingMember: !1,
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
