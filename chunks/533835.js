t.d(n, { default: () => v }), t(47120);
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
    m = t(886794),
    h = t(409394);
let _ = [a.Z.BITE_SIZE_PROFILE_POPOUT, a.Z.PROFILE_PANEL];
function v(e) {
    let { user: n, ...t } = e,
        o = (0, r.e7)([I.default], () => I.default.getCurrentUser());
    s()(null != o, 'UserProfileModalWrapper: currentUser cannot be undefined');
    let { isBlocked: a, isIgnored: v } = (0, r.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(n.id),
            isIgnored: u.Z.isIgnored(n.id)
        })),
        Z = (0, d.Do)({ location: 'UserProfileModalWrapper' }),
        [g, j] = l.useState(a || (Z && (v || a))),
        E = (0, f.sS)({ location: 'UserProfileModalWrapper' });
    l.useEffect(() => {
        j(v || a);
    }, [v, a]);
    let y = !_.some((e) => {
            var n;
            return (null !== (n = t.sourceAnalyticsLocations) && void 0 !== n ? n : []).includes(e);
        }),
        N = c.Rt.useSetting();
    return g && E && y && !Z
        ? (0, i.jsx)(p.Z, {
              user: n,
              currentUser: o,
              onViewBlockedProfileClick: () => j(!1),
              ...t
          })
        : g && y && Z && !(v && N)
          ? (0, i.jsx)(p.W, {
                user: n,
                currentUser: o,
                onViewBlockedProfileClick: () => j(!1),
                ...t
            })
          : n.isNonUserBot()
            ? (0, i.jsx)(m.Z, {
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
