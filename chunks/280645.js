t.d(l, {
    A: () => A,
}),
    t(638769),
    t(896048);
var n = t(627968);
t(64700);
var i = t(311907),
    r = t(696451),
    s = t(317525),
    a = t(71393),
    o = t(576705),
    d = t(183555),
    c = t(1659),
    u = t(166005),
    f = t(900179),
    p = t(518477),
    m = t(652215),
    x = t(985018);

function A(e) {
    var l, t;
    let { userId: A, guildId: j } = e,
        h = (function (e, l) {
            if (null == e) return {};
            var t,
                n,
                i,
                r = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, t = Reflect.ownKeys(e); i < t.length; i++)
                    (n = t[i]),
                        !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r;
            }
            if (
                ((r = (function (e, l) {
                    if (null == e) return {};
                    var t,
                        n,
                        i = {},
                        r = Object.getOwnPropertyNames(e);
                    for (n = 0; n < r.length; n++)
                        (t = r[n]),
                            !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
                    return i;
                })(e, l)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++)
                    (n = t[i]),
                        !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, ["userId", "guildId"]),
        { trackUserProfileAction: g } = (0, d.NJ)(),
        v = (0, i.bG)([a.A], () => a.A.getGuild(j)),
        b = (0, i.bG)([r.Ay], () => r.Ay.getMember(j, A)),
        I = null == b ? void 0 : b.roles,
        y = (0, i.yK)([s.A], () => s.A.getManyRoles(j, null != I ? I : []).sort(c.m), [I, j]),
        [O] = (0, i.yK)([o.A], () => [o.A.can(m.xBc.MANAGE_ROLES, v), o.A.getGuildVersion(j)]);
    if (null == v) return null;
    let N = O && null != b;
    return 0 !== y.length || N
        ? (0, n.jsx)(
              f.A,
              ((l = (function (e) {
                  for (var l = 1; l < arguments.length; l++) {
                      var t = null != arguments[l] ? arguments[l] : {},
                          n = Object.keys(t);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                              }),
                          )),
                          n.forEach(function (l) {
                              var n;
                              (n = t[l]),
                                  l in e
                                      ? Object.defineProperty(e, l, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[l] = n);
                          });
                  }
                  return e;
              })(
                  {
                      heading: x.intl.string(x.t["LPJmL/"]),
                      scrollTargetId: p.bk.ROLES,
                  },
                  h,
              )),
              (t = t =
                  {
                      children: (0, n.jsx)(u.Y, {
                          userId: A,
                          guild: v,
                          roles: y,
                          onAddRole: () => {
                              g({
                                  action: "ADD_ROLE",
                              });
                          },
                          onRemoveRole: () => {
                              g({
                                  action: "REMOVE_ROLE",
                              });
                          },
                          allowEditing: !0,
                      }),
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(t))
                  : (function (e, l) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t.push.apply(t, n);
                        }
                        return t;
                    })(Object(t)).forEach(function (e) {
                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(t, e));
                    }),
              l),
          )
        : null;
}
