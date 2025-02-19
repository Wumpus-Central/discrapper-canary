n.d(t, { Z: () => S }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    l = n(922611),
    c = n(695346),
    u = n(699516),
    d = n(594174),
    f = n(971393),
    p = n(614417),
    _ = n(601665),
    h = n(103113),
    m = n(738953);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e) {
    var { userId: t, user: n } = e,
        o = y(e, ['userId', 'user']);
    let g = (0, s.e7)([d.default], () => d.default.getUser(t), [t]),
        v = null != n ? n : g;
    a()(null != v, 'UserProfilePopoutWrapper: user cannot be undefined');
    let O = (0, s.e7)([d.default], () => d.default.getCurrentUser());
    a()(null != O, 'UserProfilePopoutWrapper: currentUser cannot be undefined');
    let { isBlocked: S, isIgnored: I } = (0, s.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(v.id),
            isIgnored: u.Z.isIgnored(v.id)
        })),
        T = (0, l.Do)({ location: 'UserProfileModalWrapper' }),
        [N, A] = i.useState(S || (T && (I || S))),
        C = (0, f.sS)({ location: 'UserProfilePopoutWrapper' }),
        R = c.Rt.useSetting();
    return N && C && !T
        ? (0, r.jsx)(
              p.Z,
              b(E({}, o), {
                  user: v,
                  currentUser: O,
                  onViewBlockedProfileClick: () => A(!1)
              })
          )
        : N && T && !(I && R)
          ? (0, r.jsx)(
                p.Y,
                b(E({}, o), {
                    user: v,
                    currentUser: O,
                    onViewBlockedProfileClick: () => A(!1)
                })
            )
          : v.isNonUserBot()
            ? (0, r.jsx)(
                  h.Z,
                  b(E({}, o), {
                      user: v,
                      currentUser: O
                  })
              )
            : v.bot
              ? (0, r.jsx)(
                    _.Z,
                    b(E({}, o), {
                        user: v,
                        currentUser: O
                    })
                )
              : (0, r.jsx)(
                    m.Z,
                    b(E({}, o), {
                        user: v,
                        currentUser: O
                    })
                );
}
