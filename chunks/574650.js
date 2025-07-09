(n.d(t, { Z: () => R }), n(539854), n(388685));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(114858),
    a = n(442837),
    c = n(755721),
    s = n(481060),
    u = n(430824),
    d = n(914010),
    _ = n(693546),
    E = n(305325),
    O = n(246364),
    I = n(983736),
    T = n(937111),
    p = n(981631),
    S = n(176505),
    N = n(388032),
    f = n(246752),
    A = n(240211);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let R = () => {
    var e, t;
    let i = (0, a.e7)([d.Z], () => d.Z.getGuildId(), []),
        R = (0, a.e7)([u.Z], () => u.Z.getGuild(i), [i]),
        g = (0, a.e7)([T.Z], () => (null != i ? T.Z.getRequest(i) : null), [i]),
        P = (0, o.TH)(),
        C = (null == (e = (0, o.LX)(P.pathname, p.Z5c.CHANNEL(null == R ? void 0 : R.id, S.oC.GUILD_ONBOARDING))) ? void 0 : e.isExact) === !0;
    if (null == R || !(0, I.Dc)(R) || C) return null;
    let y = null != (t = null == g ? void 0 : g.applicationStatus) ? t : O.wB.STARTED,
        b = null,
        D = null,
        h = null,
        U = [f.notice, A.notice];
    switch (y) {
        case O.wB.SUBMITTED:
            ((b = N.intl.string(N.t['5iLvS0'])),
                (D = N.intl.string(N.t.mqtdmZ)),
                (h = () => {
                    (0, s.h7j)((e) => {
                        var t, n;
                        return (0, r.jsx)(
                            s.ConfirmModal,
                            ((t = m(
                                {
                                    header: N.intl.string(N.t.aIz1oa),
                                    confirmText: N.intl.string(N.t['cY+Ooa']),
                                    cancelText: N.intl.string(N.t['ETE/oK']),
                                    onConfirm: () => _.Z.removeGuildJoinRequest(R.id),
                                    confirmButtonColor: c.zx.Colors.BRAND
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        children: N.intl.string(N.t['13tjTU'])
                                    })
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
                        );
                    });
                }));
            break;
        case O.wB.REJECTED:
            ((b = N.intl.string(N.t.lk30cX)),
                (D = N.intl.string(N.t['8RrsHh'])),
                (h = () => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                        return (t) => (0, r.jsx)(e, m({ guildId: R.id }, t));
                    });
                }),
                U.push(f.error));
            break;
        default:
            ((b = N.intl.string(N.t.G5YKXF)),
                (D = N.intl.string(N.t['r8/DT0'])),
                (h = () => {
                    (0, E.hk)(R.id);
                }));
    }
    return (0, r.jsxs)('div', {
        className: l()(...U),
        children: [
            (0, r.jsx)(s.Text, {
                className: f.header,
                variant: 'text-sm/normal',
                children: b
            }),
            (0, r.jsx)(c.zx, {
                className: f.button,
                look: c.zx.Looks.OUTLINED,
                color: c.zx.Colors.WHITE,
                size: c.zx.Sizes.NONE,
                onClick: h,
                children: D
            })
        ]
    });
};
