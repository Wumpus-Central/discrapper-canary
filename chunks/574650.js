n.d(t, { Z: () => A }), n(539854), n(388685);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(114858),
    a = n(442837),
    c = n(481060),
    s = n(430824),
    u = n(914010),
    d = n(693546),
    _ = n(305325),
    E = n(246364),
    O = n(983736),
    I = n(937111),
    p = n(981631),
    T = n(176505),
    S = n(388032),
    N = n(246752),
    f = n(240211);
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
let A = () => {
    var e, t;
    let i = (0, a.e7)([u.Z], () => u.Z.getGuildId(), []),
        A = (0, a.e7)([s.Z], () => s.Z.getGuild(i), [i]),
        R = (0, a.e7)([I.Z], () => (null != i ? I.Z.getRequest(i) : null), [i]),
        g = (0, o.TH)(),
        C = (null == (e = (0, o.LX)(g.pathname, p.Z5c.CHANNEL(null == A ? void 0 : A.id, T.oC.GUILD_ONBOARDING))) ? void 0 : e.isExact) === !0;
    if (null == A || !(0, O.Dc)(A) || C) return null;
    let P = null != (t = null == R ? void 0 : R.applicationStatus) ? t : E.wB.STARTED,
        y = null,
        b = null,
        h = null,
        D = [N.notice, f.notice];
    switch (P) {
        case E.wB.SUBMITTED:
            (y = S.intl.string(S.t['5iLvS0'])),
                (b = S.intl.string(S.t.mqtdmZ)),
                (h = () => {
                    (0, c.h7j)((e) => {
                        var t, n;
                        return (0, r.jsx)(
                            c.ConfirmModal,
                            ((t = m(
                                {
                                    header: S.intl.string(S.t.aIz1oa),
                                    confirmText: S.intl.string(S.t['cY+Ooa']),
                                    cancelText: S.intl.string(S.t['ETE/oK']),
                                    onConfirm: () => d.Z.removeGuildJoinRequest(A.id),
                                    confirmButtonColor: c.zxk.Colors.BRAND
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, r.jsx)(c.Text, {
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
        case E.wB.REJECTED:
            (y = S.intl.string(S.t.lk30cX)),
                (b = S.intl.string(S.t['8RrsHh'])),
                (h = () => {
                    (0, c.ZDy)(async () => {
                        let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                        return (t) => (0, r.jsx)(e, m({ guildId: A.id }, t));
                    });
                }),
                D.push(N.error);
            break;
        default:
            (y = S.intl.string(S.t.G5YKXF)),
                (b = S.intl.string(S.t['r8/DT0'])),
                (h = () => {
                    (0, _.hk)(A.id);
                });
    }
    return (0, r.jsxs)('div', {
        className: l()(...D),
        children: [
            (0, r.jsx)(c.Text, {
                className: N.header,
                variant: 'text-sm/normal',
                children: y
            }),
            (0, r.jsx)(c.zxk, {
                className: N.button,
                look: c.zxk.Looks.OUTLINED,
                color: c.zxk.Colors.WHITE,
                size: c.zxk.Sizes.NONE,
                onClick: h,
                children: b
            })
        ]
    });
};
