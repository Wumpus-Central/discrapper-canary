n.d(t, { A: () => g }), n(896048);
var i = n(311907),
    s = n(229527),
    r = n(870136),
    l = n(857071),
    a = n(406704),
    o = n(696451),
    c = n(834942),
    d = n(576705),
    u = n(707985),
    h = n(652215);
function g(e) {
    var t, n;
    let g = null == e ? void 0 : e.guild_id,
        m = (0, i.bG)([c.A], () => null == g || c.A.canChatInGuild(g), [g]),
        p = (0, i.bG)([l.A], () => null != g && l.A.isLurking(g), [g]),
        f = (0, i.bG)([o.Ay], () => null != g && o.Ay.isCurrentUserGuest(g), [g]),
        v = (0, i.bG)([d.A], () => m && d.A.can(h.xBc.ADD_REACTIONS, e), [m, e]),
        b = (0, s.ix)(g),
        [, A] = (0, r.c)(g),
        O = (0, a.Id)(e);
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
              (0, u.A)({
                  channel: e,
                  canChat: m,
                  renderReactions: !0,
                  canAddNewReactions: v,
                  isLurking: p,
                  isGuest: f,
                  communicationDisabled: A,
                  isActiveChannelOrUnarchivableThread: O,
                  isAutomodQuarantined: b,
              }),
          )),
          (n = n =
              {
                  isLurking: p,
                  isGuest: f,
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
