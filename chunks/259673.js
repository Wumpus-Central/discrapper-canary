n.d(t, { M: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(980591),
    o = n(921813),
    s = n(643879),
    c = n(317257),
    u = n(25990),
    d = n(74538),
    m = n(755419),
    p = n(798886);
let f = (e) => {
    var t, n;
    let { user: f } = e,
        v = d.ZP.canUsePremiumProfileCustomization(f),
        h = (0, a.cj)([u.Z], () => u.Z.getAllPending()),
        { pendingAvatarV2: b } = h,
        x = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(h, ['pendingAvatarV2']),
        P = (0, s.SD)({
            userId: f.id,
            image: b
        }),
        [g, C] = (0, i.useState)(!1);
    return (
        (0, l.Z)(() => {
            C(!0);
        }, 250),
        (0, r.jsx)('div', {
            className: p.container,
            children: (0, r.jsx)(
                o.Z,
                ((t = (function (e) {
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
                })({}, x)),
                (n = n =
                    {
                        pendingAvatar: P,
                        user: f,
                        pendingBadges: [(0, m.X2)()],
                        shouldOpenBadgeTooltip: (e) => g && e === c.l.ORB_PROFILE_BADGE,
                        canUsePremiumCustomization: v,
                        disabledInputs: !0,
                        hideExampleButton: !0
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            )
        })
    );
};
