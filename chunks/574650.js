n.d(t, { Z: () => I }), n(653041), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    l = n(512969),
    a = n(442837),
    s = n(481060),
    c = n(430824),
    u = n(914010),
    d = n(693546),
    _ = n(305325),
    p = n(246364),
    E = n(983736),
    f = n(937111),
    m = n(981631),
    h = n(176505),
    b = n(388032),
    g = n(276332),
    O = n(361275);
function N(e) {
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
let I = () => {
    var e, t;
    let i = (0, a.e7)([u.Z], () => u.Z.getGuildId(), []),
        I = (0, a.e7)([c.Z], () => c.Z.getGuild(i), [i]),
        C = (0, a.e7)([f.Z], () => (null != i ? f.Z.getRequest(i) : null), [i]),
        T = (0, l.TH)(),
        S = (null === (e = (0, l.LX)(T.pathname, m.Z5c.CHANNEL(null == I ? void 0 : I.id, h.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
    if (null == I || !(0, E.Dc)(I) || S) return null;
    let y = null !== (t = null == C ? void 0 : C.applicationStatus) && void 0 !== t ? t : p.wB.STARTED,
        v = null,
        P = null,
        R = null,
        A = [g.notice, O.notice];
    switch (y) {
        case p.wB.SUBMITTED:
            (v = b.NW.string(b.t['5iLvS0'])),
                (P = b.NW.string(b.t.mqtdmZ)),
                (R = () => {
                    (0, s.h7j)((e) => {
                        var t, n;
                        return (0, r.jsx)(
                            s.ConfirmModal,
                            ((t = N(
                                {
                                    header: b.NW.string(b.t.aIz1oa),
                                    confirmText: b.NW.string(b.t['cY+Ooa']),
                                    cancelText: b.NW.string(b.t['ETE/oK']),
                                    onConfirm: () => d.Z.removeGuildJoinRequest(I.id),
                                    confirmButtonColor: s.zxk.Colors.BRAND
                                },
                                e
                            )),
                            (n = n =
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        children: b.NW.string(b.t['13tjTU'])
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
        case p.wB.REJECTED:
            (v = b.NW.string(b.t.lk30cX)),
                (P = b.NW.string(b.t['8RrsHh'])),
                (R = () => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                        return (t) => (0, r.jsx)(e, N({ guildId: I.id }, t));
                    });
                }),
                A.push(g.error);
            break;
        default:
            (v = b.NW.string(b.t.G5YKXF)),
                (P = b.NW.string(b.t['r8/DT0'])),
                (R = () => {
                    (0, _.hk)(I.id);
                });
    }
    return (0, r.jsxs)('div', {
        className: o()(...A),
        children: [
            (0, r.jsx)(s.Text, {
                className: g.header,
                variant: 'text-sm/normal',
                children: v
            }),
            (0, r.jsx)(s.zxk, {
                className: g.button,
                look: s.zxk.Looks.OUTLINED,
                color: s.zxk.Colors.WHITE,
                size: s.zxk.Sizes.NONE,
                onClick: R,
                children: P
            })
        ]
    });
};
