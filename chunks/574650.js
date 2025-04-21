n.d(t, { Z: () => R }), n(539854), n(388685);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(512969),
    a = n(442837),
    s = n(481060),
    c = n(430824),
    u = n(914010),
    d = n(693546),
    E = n(305325),
    _ = n(246364),
    I = n(983736),
    O = n(937111),
    T = n(981631),
    N = n(176505),
    S = n(388032),
    p = n(246752),
    A = n(240211);
function f(e) {
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
let R = () => {
    var e, t;
    let i = (0, a.e7)([u.Z], () => u.Z.getGuildId(), []),
        R = (0, a.e7)([c.Z], () => c.Z.getGuild(i), [i]),
        P = (0, a.e7)([O.Z], () => (null != i ? O.Z.getRequest(i) : null), [i]),
        C = (0, o.TH)(),
        D = (null == (e = (0, o.LX)(C.pathname, T.Z5c.CHANNEL(null == R ? void 0 : R.id, N.oC.GUILD_ONBOARDING))) ? void 0 : e.isExact) === !0;
    if (null == R || !(0, I.Dc)(R) || D) return null;
    let g = null != (t = null == P ? void 0 : P.applicationStatus) ? t : _.wB.STARTED,
        y = null,
        m = null,
        h = null,
        b = [p.notice, A.notice];
    switch (g) {
        case _.wB.SUBMITTED:
            (y = S.intl.string(S.t['5iLvS0'])),
                (m = S.intl.string(S.t.mqtdmZ)),
                (h = () => {
                    (0, s.h7j)((e) => {
                        var t, n;
                        return (0, r.jsx)(
                            s.ConfirmModal,
                            ((t = f(
                                {
                                    header: S.intl.string(S.t.aIz1oa),
                                    confirmText: S.intl.string(S.t['cY+Ooa']),
                                    cancelText: S.intl.string(S.t['ETE/oK']),
                                    onConfirm: () => d.Z.removeGuildJoinRequest(R.id),
                                    confirmButtonColor: s.zxk.Colors.BRAND
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        children: S.intl.string(S.t['13tjTU'])
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
                });
            break;
        case _.wB.REJECTED:
            (y = S.intl.string(S.t.lk30cX)),
                (m = S.intl.string(S.t['8RrsHh'])),
                (h = () => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                        return (t) => (0, r.jsx)(e, f({ guildId: R.id }, t));
                    });
                }),
                b.push(p.error);
            break;
        default:
            (y = S.intl.string(S.t.G5YKXF)),
                (m = S.intl.string(S.t['r8/DT0'])),
                (h = () => {
                    (0, E.hk)(R.id);
                });
    }
    return (0, r.jsxs)('div', {
        className: l()(...b),
        children: [
            (0, r.jsx)(s.Text, {
                className: p.header,
                variant: 'text-sm/normal',
                children: y
            }),
            (0, r.jsx)(s.zxk, {
                className: p.button,
                look: s.zxk.Looks.OUTLINED,
                color: s.zxk.Colors.WHITE,
                size: s.zxk.Sizes.NONE,
                onClick: h,
                children: m
            })
        ]
    });
};
