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
    I = t(594174),
    f = t(971393),
    p = t(787018),
    x = t(752342),
    _ = t(886794),
    m = t(910364);
let h = [a.Z.BITE_SIZE_PROFILE_POPOUT, a.Z.PROFILE_PANEL];
function Z(e) {
    let { user: n, ...t } = e,
        o = (0, r.e7)([I.default], () => I.default.getCurrentUser());
    s()(null != o, 'UserProfileModalWrapper: currentUser cannot be undefined');
    let { isBlocked: a, isIgnored: Z } = (0, r.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(n.id),
            isIgnored: u.Z.isIgnored(n.id)
        })),
        v = (0, d.Do)({ location: 'UserProfileModalWrapper' }),
        [g, j] = l.useState(a || (v && (Z || a))),
        E = (0, f.sS)({ location: 'UserProfileModalWrapper' });
    l.useEffect(() => {
        j(Z || a);
    }, [Z, a]);
    let y = !h.some((e) => {
            var n;
            return (null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
        }),
        N = c.Rt.useSetting();
    return g && E && y && !v
        ? (0, i.jsx)(p.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => j(!1),
              ...t
          })
        : g && y && v && !(Z && N)
          ? (0, i.jsx)(p.W, {
                user: n,
                currentUser: o,
                onViewBlockedProfileClick: () => j(!1),
                ...t
            })
          : n.isNonUserBot()
            ? (0, i.jsx)(_.Z, {
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
              : (0, i.jsx)(m.Z, {
                    ...t,
                    user: n,
                    currentUser: o
                });
}
