n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(755721),
    a = n(481060),
    o = n(665149),
    s = n(892001),
    c = n(650774),
    u = n(430824),
    d = n(496675),
    p = n(709054),
    h = n(826581),
    f = n(246364),
    m = n(360328),
    g = n(981631),
    b = n(388032),
    _ = n(679848);
function y(e) {
    let { channelId: t, showProfile: n = !1, showTrailingDivider: y = !1 } = e,
        C = p.default.cast(t),
        {
            joinRequest: x,
            isModmin: v,
            guildId: O,
            maxMembers: j
        } = (0, i.cj)([h.Z, u.Z, d.Z], () => {
            let e = h.Z.getRequest(C),
                t = u.Z.getGuild(null == e ? void 0 : e.guildId);
            return {
                joinRequest: e,
                isModmin: null != t && d.Z.can(g.Plq.KICK_MEMBERS, t),
                guildId: null == t ? void 0 : t.id,
                maxMembers: null == t ? void 0 : t.maxMembers
            };
        }),
        E = (0, i.e7)([c.Z], () => (null != O ? c.Z.getMemberCount(O) : 0)),
        S = null != j && (null != E ? E : 0) >= j,
        { approveRequest: I, rejectRequest: P, submitting: Z } = (0, m.s)(null == x ? void 0 : x.guildId, null == x ? void 0 : x.userId, null == x ? void 0 : x.joinRequestId);
    return null != x && x.applicationStatus === f.wB.SUBMITTED && v
        ? (0, r.jsxs)('div', {
              className: _.buttons,
              children: [
                  (0, r.jsx)(a.ua7, {
                      text: b.intl.string(b.t.cdPGbG),
                      shouldShow: S,
                      children: (e) => {
                          var t, n;
                          return (0, r.jsx)(
                              a.zxk,
                              ((t = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              ((r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r));
                                          }));
                                  }
                                  return e;
                              })(
                                  {
                                      variant: 'active',
                                      size: 'sm',
                                      text: b.intl.string(b.t.BzjDQE)
                                  },
                                  e
                              )),
                              (n = n =
                                  {
                                      loading: Z,
                                      onClick: I,
                                      disabled: S
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(n)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                    }),
                              t)
                          );
                      }
                  }),
                  (0, r.jsx)(a.zxk, {
                      variant: 'critical-primary',
                      size: 'sm',
                      text: b.intl.string(b.t.hDtbs7),
                      onClick: P,
                      disabled: Z || x.applicationStatus !== f.wB.SUBMITTED
                  }),
                  n &&
                      (0, r.jsx)(l.zx, {
                          color: l.zx.Colors.TRANSPARENT,
                          onClick: () => {
                              (0, s.openUserProfileModal)({
                                  userId: x.userId,
                                  guildId: x.guildId
                              });
                          },
                          size: l.Ph.SMALL,
                          children: b.intl.string(b.t.iXAna2)
                      }),
                  y && (0, r.jsx)(o.ZP.Divider, {})
              ]
          })
        : null;
}
