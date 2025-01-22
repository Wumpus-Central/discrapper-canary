n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
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
    C = n(792379),
    x = n(177222);
function v(e) {
    let { channel: t, ...n } = e,
        r = (0, m.Z)();
    (0, o.t)();
    let [v] = t.recipients,
        _ = (0, s.e7)([h.default], () => h.default.getUser(v));
    a()(null != _, 'UserProfilePanelWrapper: user cannot be undefined');
    let I = (0, s.e7)([h.default], () => h.default.getCurrentUser());
    a()(null != I, 'UserProfilePanelWrapper: currentUser cannot be undefined'),
        l.useEffect(() => {
            (0, f.Z)(_, {
                withMutualFriends: !_.bot,
                withMutualGuilds: !0,
                channelId: t.id
            });
        }, [_, t.id]);
    let { isBlocked: E, isIgnored: b } = (0, s.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(_.id),
            isIgnored: u.Z.isIgnored(_.id)
        })),
        Z = (0, c.Do)({ location: 'UserProfilePanelWrapper' }),
        [N, S] = l.useState(E || (Z && (b || E))),
        T = (0, p.sS)({ location: 'UserProfilePopoutWrapper' });
    l.useEffect(() => {
        S(E || (Z && (b || E)));
    }, [E, b, Z]);
    let j = d.Rt.useSetting();
    return r
        ? null
        : N && T && !Z
          ? (0, i.jsx)(g.Z, {
                user: _,
                currentUser: I,
                channel: t,
                onViewBlockedProfileClick: () => S(!1),
                ...n
            })
          : Z && N && !(b && j)
            ? (0, i.jsx)(g.A, {
                  user: _,
                  currentUser: I,
                  channel: t,
                  onViewBlockedProfileClick: () => S(!1),
                  ...n
              })
            : _.isNonUserBot()
              ? (0, i.jsx)(C.Z, {
                    user: _,
                    currentUser: I,
                    channel: t,
                    ...n
                })
              : (0, i.jsx)(x.Z, {
                    user: _,
                    currentUser: I,
                    channel: t,
                    ...n
                });
}
