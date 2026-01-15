t.d(n, { Z: () => h }), t(642613), t(388685);
var l = t(54381);
t(473749);
var i = t(442837),
    o = t(271383),
    r = t(485386),
    a = t(430824),
    c = t(496675),
    s = t(785717),
    d = t(635042),
    u = t(705007),
    f = t(678738),
    m = t(228168),
    p = t(981631),
    x = t(388032);
function h(e) {
    var n,
        t,
        { userId: h, guildId: j } = e,
        v = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                i = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        l,
                        i = {},
                        o = Object.keys(e);
                    for (l = 0; l < o.length; l++) (t = o[l]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (l = 0; l < o.length; l++)
                    (t = o[l]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            }
            return i;
        })(e, ["userId", "guildId"]);
    let { trackUserProfileAction: b } = (0, s.KZ)(),
        g = (0, i.e7)([a.Z], () => a.Z.getGuild(j)),
        I = (0, i.e7)([o.ZP], () => o.ZP.getMember(j, h)),
        y = null == I ? void 0 : I.roles,
        Z = (0, i.Wu)([r.Z], () => r.Z.getManyRoles(j, null != y ? y : []).sort(d.Z), [y, j]),
        [O] = (0, i.Wu)([c.Z], () => [c.Z.can(p.Plq.MANAGE_ROLES, g), c.Z.getGuildVersion(j)]);
    if (null == g) return null;
    let N = O && null != I;
    return 0 !== Z.length || N
        ? (0, l.jsx)(
              f.Z,
              ((n = (function (e) {
                  for (var n = 1; n < arguments.length; n++) {
                      var t = null != arguments[n] ? arguments[n] : {},
                          l = Object.keys(t);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (l = l.concat(
                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                              }),
                          )),
                          l.forEach(function (n) {
                              var l;
                              (l = t[n]),
                                  n in e
                                      ? Object.defineProperty(e, n, {
                                            value: l,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[n] = l);
                          });
                  }
                  return e;
              })(
                  {
                      heading: x.intl.string(x.t["LPJmL/"]),
                      scrollTargetId: m.Tb.ROLES,
                  },
                  v,
              )),
              (t = t =
                  {
                      children: (0, l.jsx)(u.n, {
                          userId: h,
                          guild: g,
                          roles: Z,
                          onAddRole: () => {
                              b({ action: "ADD_ROLE" });
                          },
                          onRemoveRole: () => {
                              b({ action: "REMOVE_ROLE" });
                          },
                          allowEditing: !0,
                      }),
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                  : (function (e, n) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            t.push.apply(t, l);
                        }
                        return t;
                    })(Object(t)).forEach(function (e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                    }),
              n),
          )
        : null;
}
