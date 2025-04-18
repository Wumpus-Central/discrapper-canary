n.d(t, { Z: () => g }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(911367),
    a = n(594174),
    s = n(212321),
    c = n(646915),
    u = n(788111),
    d = n(184301),
    p = n(792379),
    h = n(571784),
    f = n(177222);
function m(e) {
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
function g(e) {
    let { channel: t } = e,
        [n] = t.recipients,
        g = (0, l.e7)([a.default], () => a.default.getUser(n)),
        b = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        _ = (0, c.Z)(),
        [y, C] = (0, u.Z)(n);
    (0, o.t)();
    let { withMutualFriendsCount: x } = (0, s.j)({ location: 'UserProfilePanelRenderer' });
    return (i.useEffect(() => {
        (0, d.Z)(null != g ? g : n, {
            type: 'panel',
            withMutualFriendsCount: (null == g ? void 0 : g.bot) !== !0 && x,
            withMutualFriends: (null == g ? void 0 : g.bot) !== !0 && !x,
            withMutualGuilds: !0,
            channelId: t.id
        });
    }, [g, n, t.id, x]),
    null == g || null == b || _)
        ? null
        : y
          ? (0, r.jsx)(
                h.Z,
                m(
                    {
                        user: g,
                        currentUser: b,
                        onHide: C
                    },
                    e
                )
            )
          : g.isNonUserBot()
            ? (0, r.jsx)(
                  p.Z,
                  m(
                      {
                          user: g,
                          currentUser: b
                      },
                      e
                  )
              )
            : (0, r.jsx)(
                  f.Z,
                  m(
                      {
                          user: g,
                          currentUser: b
                      },
                      e
                  )
              );
}
