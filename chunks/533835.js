t.d(n, { default: () => Z }), t(47120);
var i = t(200651),
    l = t(192379),
    o = t(512722),
    s = t.n(o),
    r = t(442837),
    a = t(100527),
    d = t(922611),
    c = t(695346),
    u = t(699516),
    m = t(594174),
    x = t(971393),
    p = t(787018),
    I = t(752342),
    f = t(886794),
    h = t(910364);
let v = [a.Z.BITE_SIZE_PROFILE_POPOUT, a.Z.PROFILE_PANEL];
function Z(e) {
    let { user: n, ...t } = e,
        o = (0, r.e7)([m.default], () => m.default.getCurrentUser());
    s()(null != o, 'UserProfileModalWrapper: currentUser cannot be undefined');
    let { isBlocked: a, isIgnored: Z } = (0, r.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(n.id),
            isIgnored: u.Z.isIgnored(n.id)
        })),
        g = (0, d.Do)({ location: 'UserProfileModalWrapper' }),
        [_, j] = l.useState(a || (g && (Z || a))),
        E = (0, x.sS)({ location: 'UserProfileModalWrapper' });
    l.useEffect(() => {
        j(Z || a);
    }, [Z, a]);
    let N = !v.some((e) => {
            var n;
            return (null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
        }),
        y = c.Rt.useSetting();
    return _ && E && N && !g
        ? (0, i.jsx)(p.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => j(!1),
              ...t
          })
        : _ && N && g && !(Z && y)
          ? (0, i.jsx)(p.W, {
                user: n,
                currentUser: o,
                onViewBlockedProfileClick: () => j(!1),
                ...t
            })
          : n.isNonUserBot()
            ? (0, i.jsx)(f.Z, {
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
