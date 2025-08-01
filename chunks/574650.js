(n.d(t, { Z: () => N }), n(539854), n(388685));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(114858),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(430824),
    d = n(914010),
    _ = n(693546),
    E = n(305325),
    p = n(246364),
    O = n(983736),
    S = n(937111),
    I = n(981631),
    f = n(176505),
    h = n(388032),
    T = n(246752),
    m = n(240211);
function g(e) {
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
let N = () => {
    var e, t;
    let i = (0, o.e7)([d.Z], () => d.Z.getGuildId(), []),
        N = (0, o.e7)([u.Z], () => u.Z.getGuild(i), [i]),
        y = (0, o.e7)([S.Z], () => (null != i ? S.Z.getRequest(i) : null), [i]),
        R = (0, a.TH)(),
        A = (null == (e = (0, a.LX)(R.pathname, I.Z5c.CHANNEL(null == N ? void 0 : N.id, f.oC.GUILD_ONBOARDING))) ? void 0 : e.isExact) === !0;
    if (null == N || !(0, O.Dc)(N) || A) return null;
    let b = null != (t = null == y ? void 0 : y.applicationStatus) ? t : p.wB.STARTED,
        C = null,
        P = null,
        D = null,
        M = [T.notice, m.notice];
    switch (b) {
        case p.wB.SUBMITTED:
            ((C = h.intl.string(h.t['5iLvS0'])),
                (P = h.intl.string(h.t.mqtdmZ)),
                (D = () => {
                    (0, c.h7j)((e) => {
                        var t, n;
                        return (0, r.jsx)(
                            c.ConfirmModal,
                            ((t = g(
                                {
                                    header: h.intl.string(h.t.aIz1oa),
                                    confirmText: h.intl.string(h.t['cY+Ooa']),
                                    cancelText: h.intl.string(h.t['ETE/oK']),
                                    onConfirm: () => _.Z.removeGuildJoinRequest(N.id),
                                    confirmButtonColor: s.zx.Colors.BRAND
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        children: h.intl.string(h.t['13tjTU'])
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
        case p.wB.REJECTED:
            ((C = h.intl.string(h.t.lk30cX)),
                (P = h.intl.string(h.t['8RrsHh'])),
                (D = () => {
                    (0, c.ZDy)(async () => {
                        let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                        return (t) => (0, r.jsx)(e, g({ guildId: N.id }, t));
                    });
                }),
                M.push(T.error));
            break;
        default:
            ((C = h.intl.string(h.t.G5YKXF)),
                (P = h.intl.string(h.t['r8/DT0'])),
                (D = () => {
                    (0, E.hk)(N.id);
                }));
    }
    return (0, r.jsxs)('div', {
        className: l()(...M),
        children: [
            (0, r.jsx)(c.Text, {
                className: T.header,
                variant: 'text-sm/normal',
                children: C
            }),
            (0, r.jsx)(c.zxk, {
                variant: 'overlay-primary',
                size: 'sm',
                onClick: D,
                text: P
            })
        ]
    });
};
