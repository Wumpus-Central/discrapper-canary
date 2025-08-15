n.d(t, { Z: () => A }), n(539854), n(388685);
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
    T = n(983736),
    O = n(937111),
    p = n(981631),
    N = n(176505),
    f = n(388032),
    S = n(342891),
    m = n(226910);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let A = () => {
    var e, t;
    let i = (0, o.e7)([d.Z], () => d.Z.getGuildId(), []),
        A = (0, o.e7)([u.Z], () => u.Z.getGuild(i), [i]),
        g = (0, o.e7)([O.Z], () => (null != i ? O.Z.getRequest(i) : null), [i]),
        P = (0, a.TH)(),
        C =
            (null == (e = (0, a.LX)(P.pathname, p.Z5c.CHANNEL(null == A ? void 0 : A.id, N.oC.GUILD_ONBOARDING)))
                ? void 0
                : e.isExact) === !0;
    if (null == A || !(0, T.Dc)(A) || C) return null;
    let D = null != (t = null == g ? void 0 : g.applicationStatus) ? t : I.wB.STARTED,
        y = null,
        h = null,
        b = null,
        U = [S.notice, m.notice];
    switch (D) {
        case I.wB.SUBMITTED:
            (y = f.intl.string(f.t["5iLvS0"])),
                (h = f.intl.string(f.t.mqtdmZ)),
                (b = () => {
                    (0, s.h7j)((e) => {
                        var t, n;
                        return (0, r.jsx)(
                            s.ConfirmModal,
                            ((t = R(
                                {
                                    header: f.intl.string(f.t.aIz1oa),
                                    confirmText: f.intl.string(f.t["cY+Ooa"]),
                                    cancelText: f.intl.string(f.t["ETE/oK"]),
                                    onConfirm: () => _.Z.removeGuildJoinRequest(A.id),
                                    confirmButtonColor: c.zx.Colors.BRAND,
                                },
                                e,
                            )),
                            (n = n =
                                {
                                    children: (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: f.intl.string(f.t["13tjTU"]),
                                    }),
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
                            t),
                        );
                    });
                });
            break;
        case I.wB.REJECTED:
            (y = f.intl.string(f.t.lk30cX)),
                (h = f.intl.string(f.t["8RrsHh"])),
                (b = () => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e("3378").then(n.bind(n, 76075));
                        return (t) => (0, r.jsx)(e, R({ guildId: A.id }, t));
                    });
                }),
                U.push(S.error);
            break;
        default:
            (y = f.intl.string(f.t.G5YKXF)),
                (h = f.intl.string(f.t["r8/DT0"])),
                (b = () => {
                    (0, E.hk)(A.id);
                });
    }
    return (0, r.jsxs)("div", {
        className: l()(...U),
        children: [
            (0, r.jsx)(s.Text, {
                className: S.header,
                variant: "text-sm/normal",
                children: y,
            }),
            (0, r.jsx)(s.zxk, {
                variant: "overlay-primary",
                size: "sm",
                onClick: b,
                text: h,
            }),
        ],
    });
};
