i.d(n, { default: () => Z }), i(47120);
var t = i(200651),
    l = i(192379),
    o = i(512722),
    s = i.n(o),
    r = i(442837),
    a = i(100527),
    d = i(922611),
    c = i(695346),
    u = i(699516),
    m = i(594174),
    x = i(971393),
    p = i(787018),
    f = i(752342),
    I = i(886794),
    h = i(910364);
let v = [a.Z.BITE_SIZE_PROFILE_POPOUT, a.Z.PROFILE_PANEL];
function Z(e) {
    let { user: n, ...i } = e,
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
            return (null !== (n = i.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
        }),
        y = c.Rt.useSetting();
    return _ && E && N && !g
        ? (0, t.jsx)(p.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => j(!1),
              ...i
          })
        : _ && N && g && !(Z && y)
          ? (0, t.jsx)(p.W, {
                user: n,
                currentUser: o,
                onViewBlockedProfileClick: () => j(!1),
                ...i
            })
          : n.isNonUserBot()
            ? (0, t.jsx)(I.Z, {
                  ...i,
                  user: n,
                  currentUser: o
              })
            : n.bot
              ? (0, t.jsx)(f.Z, {
                    ...i,
                    user: n,
                    currentUser: o
                })
              : (0, t.jsx)(h.Z, {
                    ...i,
                    user: n,
                    currentUser: o
                });
}
