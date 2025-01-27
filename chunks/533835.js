t.r(n),
    t.d(n, {
        default: function () {
            return g;
        }
    }),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(512722),
    r = t.n(o),
    s = t(442837),
    c = t(100527),
    a = t(922611),
    d = t(695346),
    u = t(699516),
    f = t(594174),
    m = t(971393),
    p = t(787018),
    I = t(752342),
    x = t(886794),
    h = t(910364);
let v = [c.Z.BITE_SIZE_PROFILE_POPOUT, c.Z.PROFILE_PANEL];
function g(e) {
    let { user: n, ...t } = e,
        o = (0, s.e7)([f.default], () => f.default.getCurrentUser());
    r()(null != o, 'UserProfileModalWrapper: currentUser cannot be undefined');
    let { isBlocked: c, isIgnored: g } = (0, s.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(n.id),
            isIgnored: u.Z.isIgnored(n.id)
        })),
        Z = (0, a.Do)({ location: 'UserProfileModalWrapper' }),
        [j, _] = l.useState(c || (Z && (g || c))),
        b = (0, m.sS)({ location: 'UserProfileModalWrapper' });
    l.useEffect(() => {
        _(g || c);
    }, [g, c]);
    let E = !v.some((e) => {
            var n;
            return (null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
        }),
        N = d.Rt.useSetting();
    return j && b && E && !Z
        ? (0, i.jsx)(p.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => _(!1),
              ...t
          })
        : j && E && Z && !(g && N)
          ? (0, i.jsx)(p.W, {
                user: n,
                currentUser: o,
                onViewBlockedProfileClick: () => _(!1),
                ...t
            })
          : n.isNonUserBot()
            ? (0, i.jsx)(x.Z, {
                  ...t,
                  user: n,
                  currentUser: o
              })
            : n.bot
              ? (0, i.jsx)(I.Z, {
                    ...t,
                    user: n,
                    currentUser: o
                })
              : (0, i.jsx)(h.Z, {
                    ...t,
                    user: n,
                    currentUser: o
                });
}
