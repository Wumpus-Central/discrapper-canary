n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(442837),
    s = n(911367),
    c = n(695346),
    u = n(699516),
    d = n(594174),
    p = n(212321),
    h = n(646915),
    f = n(184301),
    m = n(432958),
    g = n(792379),
    b = n(177222);
function y(e) {
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
function _(e) {
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
    let l = (0, h.Z)();
    (0, s.t)();
    let { withMutualFriendsCount: _ } = (0, p.j)({ location: 'UserProfilePanelWrapper' }),
        [C] = t.recipients,
        x = (0, a.e7)([d.default], () => d.default.getUser(C));
    o()(null != x, 'UserProfilePanelWrapper: user cannot be undefined');
    let v = (0, a.e7)([d.default], () => d.default.getCurrentUser());
    o()(null != v, 'UserProfilePanelWrapper: currentUser cannot be undefined'),
        i.useEffect(() => {
            (0, f.Z)(x, {
                type: 'panel',
                withMutualFriendsCount: !x.bot && _,
                withMutualFriends: !x.bot && !_,
                withMutualGuilds: !0,
                channelId: t.id
            });
        }, [x, t.id, _]);
    let { isBlocked: j, isIgnored: O } = (0, a.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(x.id),
            isIgnored: u.Z.isIgnored(x.id)
        })),
        [E, N] = i.useState(j || O || j);
    i.useEffect(() => {
        N(j || O || j);
    }, [j, O]);
    let I = c.Rt.useSetting();
    return l
        ? null
        : E && !(O && I)
          ? (0, r.jsx)(
                m.A,
                y(
                    {
                        user: x,
                        currentUser: v,
                        channel: t,
                        onViewBlockedProfileClick: () => N(!1)
                    },
                    n
                )
            )
          : x.isNonUserBot()
            ? (0, r.jsx)(
                  g.Z,
                  y(
                      {
                          user: x,
                          currentUser: v,
                          channel: t
                      },
                      n
                  )
              )
            : (0, r.jsx)(
                  b.Z,
                  y(
                      {
                          user: x,
                          currentUser: v,
                          channel: t
                      },
                      n
                  )
              );
}
