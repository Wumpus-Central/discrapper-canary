t.d(n, { Z: () => L }), t(47120);
var o = t(200651),
    r = t(192379),
    a = t(120356),
    i = t.n(a),
    l = t(442837),
    c = t(481060),
    u = t(13245),
    s = t(753972),
    _ = t(812206),
    d = t(726721),
    p = t(610394),
    f = t(522474),
    b = t(788983),
    m = t(695346),
    h = t(390322),
    v = t(961048),
    g = t(871499),
    C = t(268353),
    x = t(786915),
    y = t(107169),
    I = t(592125),
    P = t(271383),
    O = t(594174),
    w = t(358085),
    N = t(51144),
    j = t(998502),
    k = t(228488),
    T = t(145597),
    Z = t(214629),
    S = t(317381),
    B = t(884338),
    A = t(473179),
    E = t(932174),
    W = t(981631),
    z = t(388032),
    U = t(231784);
let D = B.u.SIZE_24;
function L(e) {
    let { applicationId: n, channelId: t } = e,
        a = (0, l.e7)([_.Z], () => _.Z.getApplication(n)),
        L = (0, l.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivities().get(n)),
        R = (0, l.e7)([I.Z], () => I.Z.getChannel(t)),
        M = m.Sb.useSetting(),
        G = (0, l.Wu)(
            [P.ZP],
            () => {
                var e;
                return null == R || null == L ? [] : Array.from(null !== (e = L.userIds) && void 0 !== e ? e : []).map((e) => P.ZP.getMember(R.guild_id, e));
            },
            [L, R]
        ),
        Y = r.useMemo(() => {
            let e = new Map();
            return (
                G.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [G]),
        H = r.useCallback(
            (e, n) => {
                var t;
                if (null == e) return null;
                let r = Y.get(e.id),
                    a = null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : N.ZP.getName(e);
                return (0, o.jsx)(
                    c.DY3,
                    {
                        text: a,
                        position: 'bottom',
                        children: (0, o.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == n ? void 0 : n.guild_id, D),
                                alt: a,
                                className: U.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [Y]
        ),
        V = null == L ? void 0 : L.userIds,
        K = (0, l.Wu)(
            [O.default],
            () =>
                Array.from(null != V ? V : [])
                    .map((e) => O.default.getUser(e))
                    .filter((e) => null != e),
            [V]
        ),
        F = d.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        J = r.useCallback(() => {
            let e = (0, T.getPID)();
            u.Z.setInputLocked(!p.ZP.isInputLocked(e), e);
        }, []),
        X = (0, Z.PR)(),
        {
            canStayOnTop: q,
            popoutWindowAlwaysOnTop: $,
            handleStayOnTop: Q
        } = (function () {
            let e = (0, l.e7)([f.Z], () => f.Z.getIsAlwaysOnTop(W.KJ3.ACTIVITY_POPOUT)),
                n = r.useCallback((e) => {
                    b.hY(W.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: w.isPlatformEmbedded && j.ZP.supportsFeature(W.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: n
            };
        })(),
        {
            rootNode: ee,
            popoutWindow: en,
            toggleFullScreen: et
        } = (function () {
            let { popoutWindow: e, currentDocument: n, rootNode: t } = (0, E.Z)(),
                [o, a] = r.useState(!1),
                i = r.useCallback(() => {
                    null != t && o && (a(!1), (0, k.Pr)(t, n));
                }, [t, n, o]),
                l = r.useCallback(() => {
                    null != t && (o ? i() : (a(!0), (0, k.Dj)(t)));
                }, [t, o, i]),
                c = r.useCallback(() => {
                    null != t && !(0, k.rB)(t, n) && o && l();
                }, [t, n, o, l]);
            return (
                r.useEffect(
                    () => (
                        null == n || n.addEventListener(k.NO, c),
                        () => {
                            null == n || n.removeEventListener(k.NO, c);
                        }
                    ),
                    [n, c]
                ),
                {
                    rootNode: t,
                    popoutWindow: e,
                    toggleFullScreen: l
                }
            );
        })();
    if (null == a || null == L) return null;
    let eo = (0, o.jsx)(s.Z, {
        application: a,
        size: 24,
        className: U.appIcon
    });
    return (
        M &&
            (eo = (0, o.jsx)(c.DY3, {
                text: L.compositeInstanceId,
                position: 'bottom',
                children: eo
            })),
        (0, o.jsx)(c.f6W, {
            theme: W.BRd.DARK,
            children: (e) =>
                (0, o.jsxs)('div', {
                    className: i()(U.container, e),
                    children: [
                        (0, o.jsxs)('div', {
                            className: i()(U.headerSection, U.headerSectionLeft),
                            children: [
                                eo,
                                (0, o.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    children: a.name
                                }),
                                (0, o.jsx)('div', {
                                    className: U.dotSpacer,
                                    children: (0, o.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: '.'
                                    })
                                }),
                                (0, o.jsx)(B.Z, {
                                    renderIcon: !1,
                                    users: K,
                                    size: D,
                                    max: 6,
                                    className: U.userAvatars,
                                    renderUser: (e) => H(e, R)
                                })
                            ]
                        }),
                        (0, o.jsx)('div', {
                            className: i()(U.headerSection, U.headerSectionRight),
                            children: (0, o.jsxs)('div', {
                                className: U.actionButtonsContainer,
                                children: [
                                    (0, o.jsx)(x.Z, {
                                        appContext: W.IlC.POPOUT,
                                        applicationId: n,
                                        channel: R,
                                        shouldPrioritizeGroupPlusIcon: !0,
                                        embeddedActivity: L
                                    }),
                                    X
                                        ? (0, o.jsx)(g.Z, {
                                              onClick: J,
                                              iconComponent: c.epB,
                                              label: z.NW.string(z.t.mseZsL)
                                          })
                                        : null,
                                    q
                                        ? (0, o.jsx)(y.Z, {
                                              popoutWindowAlwaysOnTop: $,
                                              onToggleStayOnTop: Q
                                          })
                                        : null,
                                    (0, o.jsx)(C.Z, {
                                        node: ee,
                                        guestWindow: en,
                                        onClick: et
                                    }),
                                    F &&
                                        (0, o.jsx)(
                                            c.yRy,
                                            {
                                                position: 'bottom',
                                                renderPopout: (e) => {
                                                    let { closePopout: n } = e;
                                                    return (0, o.jsx)(h.Z, {
                                                        children: (0, o.jsx)(A.Z, {
                                                            application: a,
                                                            channelId: t,
                                                            onClose: n
                                                        })
                                                    });
                                                },
                                                children: (e, n) => {
                                                    var t, o;
                                                    let { isShown: a } = n;
                                                    return (0, r.createElement)(
                                                        v.Z,
                                                        ((t = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    o = Object.keys(t);
                                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                                    (o = o.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                        })
                                                                    )),
                                                                    o.forEach(function (n) {
                                                                        var o;
                                                                        (o = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: o,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (e[n] = o);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, e)),
                                                        (o = o =
                                                            {
                                                                key: 'more-options',
                                                                isActive: a
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                                                            : (function (e, n) {
                                                                  var t = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var o = Object.getOwnPropertySymbols(e);
                                                                      t.push.apply(t, o);
                                                                  }
                                                                  return t;
                                                              })(Object(o)).forEach(function (e) {
                                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                                                              }),
                                                        t)
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
