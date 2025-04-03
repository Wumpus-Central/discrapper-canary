n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(442837),
    s = n(911367),
    c = n(695346),
    u = n(699516),
    d = n(594174),
    p = n(646915),
    h = n(184301),
    f = n(432958),
    m = n(792379),
    g = n(177222);
function b(e) {
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
    let l = (0, p.Z)();
    (0, s.t)();
    let [_] = t.recipients,
        C = (0, a.e7)([d.default], () => d.default.getUser(_));
    o()(null != C, 'UserProfilePanelWrapper: user cannot be undefined');
    let y = (0, a.e7)([d.default], () => d.default.getCurrentUser());
    o()(null != y, 'UserProfilePanelWrapper: currentUser cannot be undefined'),
        i.useEffect(() => {
            (0, h.Z)(C, {
                type: 'panel',
                withMutualFriendsCount: !C.bot,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                channelId: t.id
            });
        }, [C, t.id]);
    let { isBlocked: x, isIgnored: v } = (0, a.cj)([u.Z], () => ({
            isBlocked: u.Z.isBlocked(C.id),
            isIgnored: u.Z.isIgnored(C.id)
        })),
        [j, O] = i.useState(x || v || x);
    i.useEffect(() => {
        O(x || v || x);
    }, [x, v]);
    let E = c.Rt.useSetting();
    return l
        ? null
        : j && !(v && E)
          ? (0, r.jsx)(
                f.A,
                b(
                    {
                        user: C,
                        currentUser: y,
                        channel: t,
                        onViewBlockedProfileClick: () => O(!1)
                    },
                    n
                )
            )
          : C.isNonUserBot()
            ? (0, r.jsx)(
                  m.Z,
                  b(
                      {
                          user: C,
                          currentUser: y,
                          channel: t
                      },
                      n
                  )
              )
            : (0, r.jsx)(
                  g.Z,
                  b(
                      {
                          user: C,
                          currentUser: y,
                          channel: t
                      },
                      n
                  )
              );
}
