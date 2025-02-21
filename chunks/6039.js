n.d(t, { Z: () => S }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(393238),
    s = n(877604),
    c = n(998730),
    u = n(703656),
    d = n(430824),
    p = n(768581),
    h = n(302221),
    f = n(693546),
    g = n(305325),
    m = n(246364),
    b = n(937111),
    _ = n(381416),
    E = n(523924),
    O = n(390500),
    N = n(981631),
    v = n(898625),
    y = n(388032),
    I = n(430213);
function C(e) {
    let { guild: t, width: n, height: l } = e,
        o = i.useMemo(
            () =>
                (null == t ? void 0 : t.splash) != null
                    ? p.ZP.getGuildSplashURL({
                          id: null == t ? void 0 : t.id,
                          splash: null == t ? void 0 : t.splash
                      })
                    : null,
            [null == t ? void 0 : t.splash, null == t ? void 0 : t.id]
        ),
        a = (0, c.N)(o);
    return null == o
        ? (0, r.jsx)('div', { className: I.defaultGradient })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.Z, {
                      className: I.splash,
                      src: o,
                      imageClassName: I.cover,
                      width: n,
                      height: l
                  }),
                  null != a &&
                      (0, r.jsx)('div', {
                          className: I.splashGradient,
                          style: { background: 'linear-gradient(180deg, '.concat((0, h.aD)(a, 0.16), ' 0%, ').concat((0, h.aD)(a, 1), ' 100%)') }
                      }),
                  (0, r.jsx)('div', { className: I.splashGradient })
              ]
          });
}
let S = (e) => {
    let { guildId: t } = e,
        { ref: n, width: s, height: c } = (0, a.Z)(),
        [p, h] = i.useState(v.hO.INITIAL),
        S = (0, l.e7)([b.Z], () => b.Z.getRequest(t)),
        T = (0, l.e7)([d.Z], () => d.Z.getGuild(t)),
        { hasFetchedRequestToJoinGuilds: P, guildPreviewDisabled: j } = (0, l.cj)([b.Z], () => ({
            hasFetchedRequestToJoinGuilds: b.Z.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: b.Z.getJoinRequestGuild(t)
        }));
    i.useEffect(() => {
        null != T && (0, u.uL)(N.Z5c.CHANNEL(t));
    }, [T, t]),
        i.useEffect(() => {
            P || f.Z.fetchRequestToJoinGuilds();
        }, [P]);
    let A = i.useCallback(() => {
            h(Math.max(p, v.hO.FILLING)), f.Z.removeGuildJoinRequest(t), (0, u.uL)(N.Z5c.ME);
        }, [t, p]),
        Z = (e, t) => () => {
            (0, o.h7j)((n) => {
                var i, l;
                return (0, r.jsx)(
                    o.ConfirmModal,
                    ((i = (function (e) {
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
                    })(
                        {
                            header: y.NW.string(y.t.y0CVen),
                            cancelText: y.NW.string(y.t.oEAioK),
                            onConfirm: t,
                            confirmText: y.NW.string(y.t.p89ACg),
                            confirmButtonColor: o.zxk.Colors.RED
                        },
                        n
                    )),
                    (l = l =
                        {
                            children: (0, r.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: e
                            })
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
                    i)
                );
            });
        },
        x = async () => {
            await f.Z.resetGuildJoinRequest(t), (0, g.hk)(t);
        },
        L = Z(y.NW.format(y.t['9ZezpK'], { name: null == j ? void 0 : j.name }), A),
        w = Z(y.NW.format(y.t.fJwWVl, { name: null == j ? void 0 : j.name }), A);
    return (0, r.jsxs)('div', {
        className: I.page,
        ref: n,
        children: [
            (0, r.jsx)(C, {
                guild: j,
                height: c,
                width: s
            }),
            (0, r.jsx)('div', {
                className: I.contentWrapper,
                children: (() => {
                    if (null == S) return null;
                    switch (S.applicationStatus) {
                        case m.wB.SUBMITTED:
                            return (0, r.jsx)(O.Z, {
                                onWithdrawApplication: L,
                                guild: j
                            });
                        case m.wB.REJECTED:
                            return (0, r.jsx)(E.Z, {
                                reapplyText: y.NW.string(y.t.I1LYVl),
                                onReapply: x,
                                confirmText: y.NW.string(y.t.g9tK0t),
                                onWithdrawApplication: L,
                                rejectionReason: S.rejectionReason,
                                guild: j
                            });
                        default:
                            return (0, r.jsx)(_.s, {
                                onDiscardApplication: w,
                                onContinueApplication: () => (0, g.hk)(t),
                                guild: j
                            });
                    }
                })()
            }),
            (0, r.jsx)('div', { className: I.dragRegion })
        ]
    });
};
