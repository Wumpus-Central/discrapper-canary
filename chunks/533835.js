t.r(n),
    t.d(n, {
        default: function () {
            return Z;
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
    I = t(787018),
    x = t(752342),
    p = t(886794),
    h = t(910364);
let v = [c.Z.BITE_SIZE_PROFILE_POPOUT, c.Z.PROFILE_PANEL];
function Z(e) {
    let { user: n, ...t } = e,
        o = (0, s.e7)([f.default], () => f.default.getCurrentUser());
    r()(null != o, 'UserProfileModalWrapper: currentUser cannot be undefined');
    let { isBlocked: c, isIgnored: Z } = (0, s.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(n.id),
            isIgnored: u.Z.isIgnored(n.id)
        })),
        g = (0, a.Do)({ location: 'UserProfileModalWrapper' }),
        [j, _] = l.useState(c || (g && (Z || c))),
        b = (0, m.sS)({ location: 'UserProfileModalWrapper' });
    l.useEffect(() => {
        _(Z || c);
    }, [Z, c]);
    let E = !v.some((e) => {
            var n;
            return (null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
        }),
        N = d.Rt.useSetting();
    return j && b && E && !g
        ? (0, i.jsx)(I.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => _(!1),
              ...t
          })
        : j && E && g && !(Z && N)
          ? (0, i.jsx)(I.W, {
                user: n,
                currentUser: o,
                onViewBlockedProfileClick: () => _(!1),
                ...t
            })
          : n.isNonUserBot()
            ? (0, i.jsx)(p.Z, {
                  ...t,
                  user: n,
                  currentUser: o
              })
            : n.bot
              ? (0, i.jsx)(x.Z, {
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
