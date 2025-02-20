n.d(t, { Z: () => C }), n(653041), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(512969),
    s = n(442837),
    a = n(481060),
    c = n(430824),
    u = n(914010),
    d = n(693546),
    _ = n(305325),
    E = n(246364),
    p = n(983736),
    h = n(937111),
    f = n(981631),
    m = n(176505),
    O = n(388032),
    N = n(350091),
    g = n(125534);
function I(e) {
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
let C = () => {
    var e, t;
    let i = (0, s.e7)([u.Z], () => u.Z.getGuildId(), []),
        C = (0, s.e7)([c.Z], () => c.Z.getGuild(i), [i]),
        b = (0, s.e7)([h.Z], () => (null != i ? h.Z.getRequest(i) : null), [i]),
        T = (0, o.TH)(),
        S = (null === (e = (0, o.LX)(T.pathname, f.Z5c.CHANNEL(null == C ? void 0 : C.id, m.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
    if (null == C || !(0, p.Dc)(C) || S) return null;
    let y = null !== (t = null == b ? void 0 : b.applicationStatus) && void 0 !== t ? t : E.wB.STARTED,
        R = null,
        A = null,
        P = null,
        v = [N.notice, g.notice];
    switch (y) {
        case E.wB.SUBMITTED:
            (R = O.NW.string(O.t['5iLvS0'])),
                (A = O.NW.string(O.t.mqtdmZ)),
                (P = () => {
                    (0, a.h7j)((e) => {
                        var t, n;
                        return (0, r.jsx)(
                            a.ConfirmModal,
                            ((t = I(
                                {
                                    header: O.NW.string(O.t.aIz1oa),
                                    confirmText: O.NW.string(O.t['cY+Ooa']),
                                    cancelText: O.NW.string(O.t['ETE/oK']),
                                    onConfirm: () => d.Z.removeGuildJoinRequest(C.id),
                                    confirmButtonColor: a.zxk.Colors.BRAND
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, r.jsx)(a.Text, {
                                        variant: 'text-md/normal',
                                        children: O.NW.string(O.t['13tjTU'])
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
            (R = O.NW.string(O.t.lk30cX)),
                (A = O.NW.string(O.t['8RrsHh'])),
                (P = () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                        return (t) => (0, r.jsx)(e, I({ guildId: C.id }, t));
                    });
                }),
                v.push(N.error);
            break;
        default:
            (R = O.NW.string(O.t.G5YKXF)),
                (A = O.NW.string(O.t['r8/DT0'])),
                (P = () => {
                    (0, _.hk)(C.id);
                });
    }
    return (0, r.jsxs)('div', {
        className: l()(...v),
        children: [
            (0, r.jsx)(a.Text, {
                className: N.header,
                variant: 'text-sm/normal',
                children: R
            }),
            (0, r.jsx)(a.zxk, {
                className: N.button,
                look: a.zxk.Looks.OUTLINED,
                color: a.zxk.Colors.WHITE,
                size: a.zxk.Sizes.NONE,
                onClick: P,
                children: A
            })
        ]
    });
};
