r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(512722),
    l = r.n(s),
    u = r(442837),
    c = r(922611),
    d = r(695346),
    f = r(699516),
    p = r(594174),
    h = r(971393),
    _ = r(614417),
    m = r(601665),
    g = r(103113),
    E = r(738953);
function v(e) {
    let { userId: n, user: r, ...i } = e,
        s = (0, u.e7)([p.default], () => p.default.getUser(n), [n]),
        v = null != r ? r : s;
    l()(null != v, 'UserProfilePopoutWrapper: user cannot be undefined');
    let y = (0, u.e7)([p.default], () => p.default.getCurrentUser());
    l()(null != y, 'UserProfilePopoutWrapper: currentUser cannot be undefined');
    let { isBlocked: b, isIgnored: I } = (0, u.cj)([f.Z], () => ({
            isBlocked: f.Z.isBlocked(v.id),
            isIgnored: f.Z.isIgnored(v.id)
        })),
        T = (0, c.Do)({ location: 'UserProfileModalWrapper' }),
        [S, A] = o.useState(b || (T && (I || b))),
        C = (0, h.sS)({ location: 'UserProfilePopoutWrapper' }),
        N = d.Rt.useSetting();
    return S && C && !T
        ? (0, a.jsx)(_.Z, {
              ...i,
              user: v,
              currentUser: y,
              onViewBlockedProfileClick: () => A(!1)
          })
        : S && T && !(I && N)
          ? (0, a.jsx)(_.Y, {
                ...i,
                user: v,
                currentUser: y,
                onViewBlockedProfileClick: () => A(!1)
            })
          : v.isNonUserBot()
            ? (0, a.jsx)(g.Z, {
                  ...i,
                  user: v,
                  currentUser: y
              })
            : v.bot
              ? (0, a.jsx)(m.Z, {
                    ...i,
                    user: v,
                    currentUser: y
                })
              : (0, a.jsx)(E.Z, {
                    ...i,
                    user: v,
                    currentUser: y
                });
}
