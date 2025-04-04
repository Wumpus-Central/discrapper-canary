n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    l = n(695346),
    c = n(699516),
    u = n(594174),
    d = n(614417),
    f = n(601665),
    _ = n(103113),
    p = n(738953);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function v(e) {
    var { userId: t, user: n } = e,
        o = b(e, ['userId', 'user']);
    let h = (0, s.e7)([u.default], () => u.default.getUser(t), [t]),
        g = null != n ? n : h;
    a()(null != g, 'UserProfilePopoutWrapper: user cannot be undefined');
    let y = (0, s.e7)([u.default], () => u.default.getCurrentUser());
    a()(null != y, 'UserProfilePopoutWrapper: currentUser cannot be undefined');
    let { isBlocked: v, isIgnored: O } = (0, s.cj)([c.Z], () => ({
            isBlocked: c.Z.isBlocked(g.id),
            isIgnored: c.Z.isIgnored(g.id)
        })),
        [I, S] = i.useState(v || O || v),
        T = l.Rt.useSetting();
    return I && !(O && T)
        ? (0, r.jsx)(
              d.Z,
              E(m({}, o), {
                  user: g,
                  currentUser: y,
                  onViewBlockedProfileClick: () => S(!1)
              })
          )
        : g.isNonUserBot()
          ? (0, r.jsx)(
                _.Z,
                E(m({}, o), {
                    user: g,
                    currentUser: y
                })
            )
          : g.bot
            ? (0, r.jsx)(
                  f.Z,
                  E(m({}, o), {
                      user: g,
                      currentUser: y
                  })
              )
            : (0, r.jsx)(
                  p.Z,
                  E(m({}, o), {
                      user: g,
                      currentUser: y
                  })
              );
}
