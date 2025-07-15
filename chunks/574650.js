(n.d(t, { Z: () => g }), n(539854), n(388685));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(114858),
    o = n(442837),
    c = n(755721),
    s = n(481060),
    u = n(430824),
    d = n(914010),
    _ = n(693546),
    E = n(305325),
    I = n(246364),
    O = n(983736),
    p = n(937111),
    T = n(981631),
    S = n(176505),
    N = n(388032),
    f = n(246752),
    m = n(240211);
function A(e) {
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
let g = () => {
    var e, t;
    let i = (0, o.e7)([d.Z], () => d.Z.getGuildId(), []),
        g = (0, o.e7)([u.Z], () => u.Z.getGuild(i), [i]),
        R = (0, o.e7)([p.Z], () => (null != i ? p.Z.getRequest(i) : null), [i]),
        C = (0, a.TH)(),
        P = (null == (e = (0, a.LX)(C.pathname, T.Z5c.CHANNEL(null == g ? void 0 : g.id, S.oC.GUILD_ONBOARDING))) ? void 0 : e.isExact) === !0;
    if (null == g || !(0, O.Dc)(g) || P) return null;
    let y = null != (t = null == R ? void 0 : R.applicationStatus) ? t : I.wB.STARTED,
        b = null,
        D = null,
        h = null,
        U = [f.notice, m.notice];
    switch (y) {
        case I.wB.SUBMITTED:
            ((b = N.intl.string(N.t['5iLvS0'])),
                (D = N.intl.string(N.t.mqtdmZ)),
                (h = () => {
                    (0, s.h7j)((e) => {
                        var t, n;
                        return (0, r.jsx)(
                            s.ConfirmModal,
                            ((t = A(
                                {
                                    header: N.intl.string(N.t.aIz1oa),
                                    confirmText: N.intl.string(N.t['cY+Ooa']),
                                    cancelText: N.intl.string(N.t['ETE/oK']),
                                    onConfirm: () => _.Z.removeGuildJoinRequest(g.id),
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
        case I.wB.REJECTED:
            ((b = N.intl.string(N.t.lk30cX)),
                (D = N.intl.string(N.t['8RrsHh'])),
                (h = () => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                        return (t) => (0, r.jsx)(e, A({ guildId: g.id }, t));
                    });
                }),
                U.push(f.error));
            break;
        default:
            ((b = N.intl.string(N.t.G5YKXF)),
                (D = N.intl.string(N.t['r8/DT0'])),
                (h = () => {
                    (0, E.hk)(g.id);
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
            (0, r.jsx)(s.zxk, {
                variant: 'overlay-primary',
                size: 'sm',
                onClick: h,
                text: D
            })
        ]
    });
};
