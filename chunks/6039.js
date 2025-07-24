(n.d(t, { Z: () => T }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(393238),
    c = n(877604),
    u = n(998730),
    d = n(703656),
    p = n(430824),
    h = n(768581),
    f = n(302221),
    g = n(693546),
    m = n(305325),
    b = n(246364),
    _ = n(937111),
    O = n(381416),
    E = n(523924),
    y = n(390500),
    v = n(981631),
    I = n(898625),
    C = n(388032),
    S = n(74816);
function N(e) {
    let { guild: t, width: n, height: l } = e,
        a = i.useMemo(
            () =>
                (null == t ? void 0 : t.splash) != null
                    ? h.ZP.getGuildSplashURL({
                          id: null == t ? void 0 : t.id,
                          splash: null == t ? void 0 : t.splash
                      })
                    : null,
            [null == t ? void 0 : t.splash, null == t ? void 0 : t.id]
        ),
        o = (0, u.N)(a);
    return null == a
        ? (0, r.jsx)('div', { className: S.defaultGradient })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.Z, {
                      className: S.splash,
                      src: a,
                      imageClassName: S.cover,
                      width: n,
                      height: l
                  }),
                  null != o &&
                      (0, r.jsx)('div', {
                          className: S.splashGradient,
                          style: { background: 'linear-gradient(180deg, '.concat((0, f.aD)(o, 0.16), ' 0%, ').concat((0, f.aD)(o, 1), ' 100%)') }
                      }),
                  (0, r.jsx)('div', { className: S.splashGradient })
              ]
          });
}
let T = (e) => {
    let { guildId: t } = e,
        { ref: n, width: c, height: u } = (0, s.ZP)(),
        [h, f] = i.useState(I.hO.INITIAL),
        T = (0, l.e7)([_.Z], () => _.Z.getRequest(t)),
        P = (0, l.e7)([p.Z], () => p.Z.getGuild(t)),
        { hasFetchedRequestToJoinGuilds: j, guildPreviewDisabled: x } = (0, l.cj)([_.Z], () => ({
            hasFetchedRequestToJoinGuilds: _.Z.hasFetchedRequestToJoinGuilds,
            guildPreviewDisabled: _.Z.getJoinRequestGuild(t)
        }));
    (i.useEffect(() => {
        null != P && (0, d.uL)(v.Z5c.CHANNEL(t));
    }, [P, t]),
        i.useEffect(() => {
            j || g.Z.fetchRequestToJoinGuilds();
        }, [j]));
    let A = i.useCallback(() => {
            (f(Math.max(h, I.hO.FILLING)), g.Z.removeGuildJoinRequest(t), (0, d.uL)(v.Z5c.ME));
        }, [t, h]),
        Z = (e, t) => () => {
            (0, o.h7j)((n) => {
                var i, l;
                return (0, r.jsx)(
                    o.ConfirmModal,
                    ((i = (function (e) {
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
                    })(
                        {
                            header: C.intl.string(C.t.y0CVen),
                            cancelText: C.intl.string(C.t.oEAioK),
                            onConfirm: t,
                            confirmText: C.intl.string(C.t.p89ACg),
                            confirmButtonColor: a.zx.Colors.RED
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
        w = async () => {
            (await g.Z.resetGuildJoinRequest(t), (0, m.hk)(t));
        },
        L = Z(C.intl.format(C.t['9ZezpK'], { name: null == x ? void 0 : x.name }), A),
        R = Z(C.intl.format(C.t.fJwWVl, { name: null == x ? void 0 : x.name }), A);
    return (0, r.jsxs)('div', {
        className: S.page,
        ref: n,
        children: [
            (0, r.jsx)(N, {
                guild: x,
                height: u,
                width: c
            }),
            (0, r.jsx)('div', {
                className: S.contentWrapper,
                children: (() => {
                    if (null == T) return null;
                    switch (T.applicationStatus) {
                        case b.wB.SUBMITTED:
                            return (0, r.jsx)(y.Z, {
                                onWithdrawApplication: L,
                                guild: x
                            });
                        case b.wB.REJECTED:
                            return (0, r.jsx)(E.Z, {
                                reapplyText: C.intl.string(C.t.I1LYVl),
                                onReapply: w,
                                confirmText: C.intl.string(C.t.g9tK0t),
                                onWithdrawApplication: L,
                                rejectionReason: T.rejectionReason,
                                guild: x
                            });
                        default:
                            return (0, r.jsx)(O.s, {
                                onDiscardApplication: R,
                                onContinueApplication: () => (0, m.hk)(t),
                                guild: x
                            });
                    }
                })()
            }),
            (0, r.jsx)('div', { className: S.dragRegion })
        ]
    });
};
