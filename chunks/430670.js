n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(442837),
    s = n(911367),
    c = n(922611),
    u = n(695346),
    d = n(699516),
    p = n(594174),
    h = n(971393),
    f = n(646915),
    m = n(184301),
    g = n(432958),
    b = n(792379),
    _ = n(177222);
function C(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e) {
    var { channel: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['channel']);
    let l = (0, f.Z)();
    (0, s.t)();
    let [v] = t.recipients,
        y = (0, a.e7)([p.default], () => p.default.getUser(v));
    o()(null != y, 'UserProfilePanelWrapper: user cannot be undefined');
    let x = (0, a.e7)([p.default], () => p.default.getCurrentUser());
    o()(null != x, 'UserProfilePanelWrapper: currentUser cannot be undefined'),
        i.useEffect(() => {
            (0, m.Z)(y, {
                type: 'panel',
                withMutualFriendsCount: !y.bot,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id
            });
        }, [y, t.id]);
    let { isBlocked: j, isIgnored: O } = (0, a.cj)([d.Z], () => ({
            isBlocked: d.Z.isBlocked(y.id),
            isIgnored: d.Z.isIgnored(y.id)
        })),
        E = (0, c.D)({ location: 'UserProfilePanelWrapper' }),
        [N, I] = i.useState(j || (E && (O || j))),
        P = (0, h.sS)({ location: 'UserProfilePopoutWrapper' });
    i.useEffect(() => {
        I(j || (E && (O || j)));
    }, [j, O, E]);
    let S = u.Rt.useSetting();
    return l
        ? null
        : N && P && !E
          ? (0, r.jsx)(
                g.Z,
                C(
                    {
                        user: y,
                        currentUser: x,
                        channel: t,
                        onViewBlockedProfileClick: () => I(!1)
                    },
                    n
                )
            )
          : E && N && !(O && S)
            ? (0, r.jsx)(
                  g.A,
                  C(
                      {
                          user: y,
                          currentUser: x,
                          channel: t,
                          onViewBlockedProfileClick: () => I(!1)
                      },
                      n
                  )
              )
            : y.isNonUserBot()
              ? (0, r.jsx)(
                    b.Z,
                    C(
                        {
                            user: y,
                            currentUser: x,
                            channel: t
                        },
                        n
                    )
                )
              : (0, r.jsx)(
                    _.Z,
                    C(
                        {
                            user: y,
                            currentUser: x,
                            channel: t
                        },
                        n
                    )
                );
}
