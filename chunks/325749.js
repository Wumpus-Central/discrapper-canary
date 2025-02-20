n.d(t, { Z: () => U }), n(47120);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(442837),
    c = n(481060),
    d = n(13245),
    u = n(753972),
    s = n(812206),
    p = n(726721),
    f = n(610394),
    m = n(522474),
    v = n(788983),
    h = n(695346),
    x = n(390322),
    b = n(961048),
    j = n(871499),
    _ = n(786915),
    g = n(107169),
    Z = n(592125),
    y = n(271383),
    I = n(594174),
    O = n(358085),
    P = n(51144),
    C = n(998502),
    S = n(145597),
    w = n(214629),
    A = n(317381),
    T = n(884338),
    N = n(473179),
    k = n(981631),
    E = n(388032),
    W = n(984736);
let R = T.u.SIZE_24;
function U(e) {
    let { applicationId: t, channelId: n } = e,
        i = (0, a.e7)([s.Z], () => s.Z.getApplication(t)),
        U = (0, a.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities().get(t)),
        Y = (0, a.e7)([Z.Z], () => Z.Z.getChannel(n)),
        D = h.Sb.useSetting(),
        L = (0, a.Wu)(
            [y.ZP],
            () => {
                var e;
                return null == Y || null == U ? [] : Array.from(null !== (e = U.userIds) && void 0 !== e ? e : []).map((e) => y.ZP.getMember(Y.guild_id, e));
            },
            [U, Y]
        ),
        B = o.useMemo(() => {
            let e = new Map();
            return (
                L.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [L]),
        K = o.useCallback(
            (e, t) => {
                var n;
                if (null == e) return null;
                let o = B.get(e.id),
                    i = null !== (n = null == o ? void 0 : o.nick) && void 0 !== n ? n : P.ZP.getName(e);
                return (0, r.jsx)(
                    c.DY3,
                    {
                        text: i,
                        position: 'bottom',
                        children: (0, r.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == t ? void 0 : t.guild_id, R),
                                alt: i,
                                className: W.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [B]
        ),
        J = null == U ? void 0 : U.userIds,
        M = (0, a.Wu)(
            [I.default],
            () =>
                Array.from(null != J ? J : [])
                    .map((e) => I.default.getUser(e))
                    .filter((e) => null != e),
            [J]
        ),
        V = p.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        z = o.useCallback(() => {
            let e = (0, S.QF)();
            d.Z.setInputLocked(!f.ZP.isInputLocked(e), e);
        }, []),
        G = (0, w.PR)(),
        {
            canStayOnTop: H,
            popoutWindowAlwaysOnTop: F,
            handleStayOnTop: q
        } = (function () {
            let { popoutWindowAlwaysOnTop: e } = (0, a.cj)([m.Z], () => ({
                    popoutWindow: m.Z.getWindow(k.KJ3.ACTIVITY_POPOUT),
                    popoutWindowAlwaysOnTop: m.Z.getIsAlwaysOnTop(k.KJ3.ACTIVITY_POPOUT)
                })),
                t = o.useCallback((e) => {
                    v.hY(k.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: O.isPlatformEmbedded && C.ZP.supportsFeature(k.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: t
            };
        })();
    if (null == i || null == U) return null;
    let Q = (0, r.jsx)(u.Z, {
        application: i,
        size: 24,
        className: W.appIcon
    });
    return (
        D &&
            (Q = (0, r.jsx)(c.DY3, {
                text: U.compositeInstanceId,
                position: 'bottom',
                children: Q
            })),
        (0, r.jsx)(c.f6W, {
            theme: k.BRd.DARK,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: l()(W.container, e),
                    children: [
                        (0, r.jsxs)('div', {
                            className: l()(W.headerSection, W.headerSectionLeft),
                            children: [
                                Q,
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    children: i.name
                                }),
                                (0, r.jsx)('div', {
                                    className: W.dotSpacer,
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: '.'
                                    })
                                }),
                                (0, r.jsx)(T.Z, {
                                    renderIcon: !1,
                                    users: M,
                                    size: R,
                                    max: 6,
                                    className: W.userAvatars,
                                    renderUser: (e) => K(e, Y)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: l()(W.headerSection, W.headerSectionRight),
                            children: (0, r.jsxs)('div', {
                                className: W.actionButtonsContainer,
                                children: [
                                    (0, r.jsx)(_.Z, {
                                        appContext: k.IlC.POPOUT,
                                        applicationId: t,
                                        channel: Y,
                                        shouldPrioritizeGroupPlusIcon: !0,
                                        embeddedActivity: U
                                    }),
                                    G
                                        ? (0, r.jsx)(j.Z, {
                                              onClick: z,
                                              iconComponent: c.epB,
                                              label: E.NW.string(E.t.mseZsL)
                                          })
                                        : null,
                                    H
                                        ? (0, r.jsx)(g.Z, {
                                              popoutWindowAlwaysOnTop: F,
                                              onToggleStayOnTop: q
                                          })
                                        : null,
                                    V &&
                                        (0, r.jsx)(
                                            c.yRy,
                                            {
                                                position: 'bottom',
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, r.jsx)(x.Z, {
                                                        children: (0, r.jsx)(N.Z, {
                                                            application: i,
                                                            channelId: n,
                                                            onClose: t
                                                        })
                                                    });
                                                },
                                                children: (e, t) => {
                                                    var n, r;
                                                    let { isShown: i } = t;
                                                    return (0, o.createElement)(
                                                        b.Z,
                                                        ((n = (function (e) {
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
                                                        })({}, e)),
                                                        (r = r =
                                                            {
                                                                key: 'more-options',
                                                                isActive: i
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(r)).forEach(function (e) {
                                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                                              }),
                                                        n)
                                                    );
                                                }
                                            },
                                            'more-options-popout'
                                        )
                                ]
                            })
                        })
                    ]
                })
        })
    );
}
