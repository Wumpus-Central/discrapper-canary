n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(512722),
    r = n.n(a),
    s = n(442837),
    o = n(911367),
    c = n(922611),
    d = n(695346),
    u = n(699516),
    h = n(594174),
    p = n(971393),
    m = n(646915),
    f = n(184301),
    g = n(432958),
    _ = n(792379),
    C = n(177222);
function x(e) {
    let { channel: t, ...n } = e,
        a = (0, m.Z)();
    (0, o.t)();
    let [x] = t.recipients,
        v = (0, s.e7)([h.default], () => h.default.getUser(x));
    r()(null != v, 'UserProfilePanelWrapper: user cannot be undefined');
    let E = (0, s.e7)([h.default], () => h.default.getCurrentUser());
    r()(null != E, 'UserProfilePanelWrapper: currentUser cannot be undefined'),
        l.useEffect(() => {
            (0, f.Z)(v, {
                withMutualFriends: !v.bot,
                withMutualGuilds: !0,
                channelId: t.id
            });
        }, [v, t.id]);
    let { isBlocked: I, isIgnored: b } = (0, s.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(v.id),
            isIgnored: u.Z.isIgnored(v.id)
        })),
        Z = (0, c.Do)({ location: 'UserProfilePanelWrapper' }),
        [N, T] = l.useState(I || (Z && (b || I))),
        S = (0, p.sS)({ location: 'UserProfilePopoutWrapper' });
    l.useEffect(() => {
        T(I || (Z && (b || I)));
    }, [I, b, Z]);
    let j = d.Rt.useSetting();
    return a
        ? null
        : N && S && !Z
          ? (0, i.jsx)(g.Z, {
                user: v,
                currentUser: E,
                channel: t,
                onViewBlockedProfileClick: () => T(!1),
                ...n
            })
          : Z && N && !(b && j)
            ? (0, i.jsx)(g.A, {
                  user: v,
                  currentUser: E,
                  channel: t,
                  onViewBlockedProfileClick: () => T(!1),
                  ...n
              })
            : v.isNonUserBot()
              ? (0, i.jsx)(_.Z, {
                    user: v,
                    currentUser: E,
                    channel: t,
                    ...n
                })
              : (0, i.jsx)(C.Z, {
                    user: v,
                    currentUser: E,
                    channel: t,
                    ...n
                });
}
