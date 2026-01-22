n.d(t, {
    d: () => f,
    o: () => d,
});
var r = n(627968),
    l = n(409626),
    i = n(692969),
    a = n(562153),
    s = n(415043),
    o = n(617086),
    c = n(985018),
    u = n(418061);
function d(e) {
    let { applicationId: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, ["applicationId"]),
        l = (0, o.A)(t);
    return l.length > 0
        ? (0, r.jsx)(
              s.A,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              }),
                          )),
                          r.forEach(function (t) {
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })(
                  {
                      label: c.intl.formatToPlainString(c.t.ujhJdG, { numFriends: l.length }),
                      users: l,
                      maxUsers: 4,
                  },
                  n,
              ),
          )
        : null;
}
function f(e) {
    var t, n, d;
    let f,
        { userId: p, applicationId: b, guildId: g, channelId: m, className: y } = e,
        O = (0, o.A)(b),
        j = O.length > 0,
        x =
            ((t = O),
            (n = g),
            (d = m),
            (f = t.slice(0, 3).map((e) => a.Ay.getName(n, d, e))),
            1 === t.length
                ? c.intl.formatToPlainString(c.t.FURqTU, { name: f[0] })
                : 2 === t.length
                  ? c.intl.formatToPlainString(c.t["08Usu/"], {
                        name1: f[0],
                        name2: f[1],
                    })
                  : 3 === t.length
                    ? c.intl.formatToPlainString(c.t.NTYHag, {
                          name1: f[0],
                          name2: f[1],
                          name3: f[2],
                      })
                    : c.intl.formatToPlainString(c.t["i/5oAn"], {
                          name1: f[0],
                          name2: f[1],
                          name3: f[2],
                          numPeople: t.length - 3,
                      })),
        h = (0, i.A)({
            location: "SocialProofButton",
            applicationId: b,
            source: l.Ob.UserProfile,
            sourceUserId: p,
            trackEntryPointImpression: !0,
        });
    return j && null != h
        ? (0, r.jsx)(s.H, {
              users: O,
              label: x,
              className: y,
              onClick: h,
              guildId: g,
              channelId: m,
              "aria-label": x,
              overflowCountColor: "text-strong",
              overflowCountClassName: u.L,
          })
        : null;
}
