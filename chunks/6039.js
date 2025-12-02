n.d(t, { Z: () => N }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(755721),
    s = n(481060),
    o = n(393238),
    c = n(877604),
    u = n(998730),
    d = n(703656),
    p = n(430824),
    f = n(768581),
    h = n(302221),
    g = n(693546),
    m = n(305325),
    _ = n(246364),
    b = n(937111),
    E = n(381416),
    O = n(523924),
    v = n(390500),
    y = n(981631),
    I = n(898625),
    C = n(388032),
    S = n(555562);
function T(e) {
    let { guild: t, width: n, height: l } = e,
        a = i.useMemo(
            () =>
                (null == t ? void 0 : t.splash) != null
                    ? f.ZP.getGuildSplashURL({
                          id: null == t ? void 0 : t.id,
                          splash: null == t ? void 0 : t.splash,
                      })
                    : null,
            [null == t ? void 0 : t.splash, null == t ? void 0 : t.id],
        ),
        s = (0, u.N)(a);
    return null == a
        ? (0, r.jsx)("div", { className: S.defaultGradient })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.Z, {
                      className: S.splash,
                      src: a,
                      imageClassName: S.cover,
                      width: n,
                      height: l,
                  }),
                  null != s &&
                      (0, r.jsx)("div", {
                          className: S.splashGradient,
                          style: {
                              background: "linear-gradient(180deg, "
                                  .concat((0, h.aD)(s, 0.16), " 0%, ")
                                  .concat((0, h.aD)(s, 1), " 100%)"),
                          },
                      }),
                  (0, r.jsx)("div", { className: S.splashGradient }),
              ],
          });
}
let N = (e) => {
    let { guildId: t } = e,
        { ref: n, width: c, height: u } = (0, o.ZP)(),
        [f, h] = i.useState(I.hO.INITIAL),
        N = (0, l.e7)([b.Z], () => b.Z.getRequest(t)),
        j = (0, l.e7)([p.Z], () => p.Z.getGuild(t)),
        { hasFetchedRequestToJoinGuilds: P, guildPreviewDisabled: x } = (0, l.cj)([b.Z], () => ({
            hasFetchedRequestToJoinGuilds: b.Z.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: b.Z.getJoinRequestGuild(t),
        }));
    i.useEffect(() => {
        null != j && (0, d.uL)(y.Z5c.CHANNEL(t));
    }, [j, t]),
        i.useEffect(() => {
            P || g.Z.fetchRequestToJoinGuilds();
        }, [P]);
    let A = i.useCallback(() => {
            h(Math.max(f, I.hO.FILLING)), g.Z.removeGuildJoinRequest(t), (0, d.uL)(y.Z5c.ME);
        }, [t, f]),
        Z = (e, t) => () => {
            (0, s.h7j)((n) => {
                var i, l;
                return (0, r.jsx)(
                    s.ConfirmModal,
                    ((i = (function (e) {
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
                    })(
                        {
                            header: C.intl.string(C.t.y0CVes),
                            cancelText: C.intl.string(C.t.oEAioF),
                            onConfirm: t,
                            confirmText: C.intl.string(C.t.p89ACt),
                            confirmButtonColor: a.zx.Colors.RED,
                        },
                        n,
                    )),
                    (l = l =
                        {
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: e,
                            }),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    i),
                );
            });
        },
        w = async () => {
            await g.Z.resetGuildJoinRequest(t), (0, m.hk)(t);
        },
        L = (e) => {
            if (!e) return void A();
            Z(C.intl.format(C.t["9ZezpN"], { name: null == x ? void 0 : x.name }), A)();
        },
        R = Z(C.intl.format(C.t.fJwWVt, { name: null == x ? void 0 : x.name }), A);
    return (0, r.jsxs)("div", {
        className: S.page,
        ref: n,
        children: [
            (0, r.jsx)(T, {
                guild: x,
                height: u,
                width: c,
            }),
            (0, r.jsx)("div", {
                className: S.contentWrapper,
                children: (() => {
                    if (null == N) return null;
                    switch (N.applicationStatus) {
                        case _.wB.SUBMITTED:
                            return (0, r.jsx)(v.Z, {
                                onWithdrawApplication: () => L(!0),
                                guild: x,
                            });
                        case _.wB.REJECTED:
                            return (0, r.jsx)(O.Z, {
                                reapplyText: C.intl.string(C.t.I1LYVk),
                                onReapply: w,
                                confirmText: C.intl.string(C.t.g9tK0o),
                                onWithdrawApplication: L,
                                rejectionReason: N.rejectionReason,
                                guild: x,
                            });
                        default:
                            return (0, r.jsx)(E.s, {
                                onDiscardApplication: R,
                                onContinueApplication: () => (0, m.hk)(t),
                                guild: x,
                            });
                    }
                })(),
            }),
            (0, r.jsx)("div", { className: S.dragRegion }),
        ],
    });
};
