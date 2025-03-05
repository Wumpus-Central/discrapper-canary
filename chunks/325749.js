n.d(t, { Z: () => L }), n(47120);
var o = n(200651),
    r = n(192379),
    a = n(120356),
    i = n.n(a),
    l = n(442837),
    c = n(481060),
    u = n(13245),
    s = n(753972),
    d = n(812206),
    _ = n(726721),
    p = n(610394),
    b = n(522474),
    f = n(788983),
    m = n(695346),
    v = n(390322),
    h = n(961048),
    x = n(871499),
    g = n(268353),
    C = n(786915),
    y = n(107169),
    I = n(592125),
    O = n(271383),
    P = n(594174),
    j = n(358085),
    k = n(51144),
    w = n(998502),
    N = n(228488),
    S = n(145597),
    Z = n(214629),
    T = n(317381),
    B = n(884338),
    A = n(473179),
    E = n(932174),
    W = n(981631),
    z = n(388032),
    U = n(231784);
let D = B.u.SIZE_24;
function L(e) {
    let { applicationId: t, channelId: n } = e,
        a = (0, l.e7)([d.Z], () => d.Z.getApplication(t)),
        L = (0, l.e7)([T.ZP], () => T.ZP.getSelfEmbeddedActivities().get(t)),
        R = (0, l.e7)([I.Z], () => I.Z.getChannel(n)),
        M = m.Sb.useSetting(),
        G = (0, l.Wu)(
            [O.ZP],
            () => {
                var e;
                return null == R || null == L ? [] : Array.from(null !== (e = L.userIds) && void 0 !== e ? e : []).map((e) => O.ZP.getMember(R.guild_id, e));
            },
            [L, R]
        ),
        Y = r.useMemo(() => {
            let e = new Map();
            return (
                G.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [G]),
        V = r.useCallback(
            (e, t) => {
                var n;
                if (null == e) return null;
                let r = Y.get(e.id),
                    a = null !== (n = null == r ? void 0 : r.nick) && void 0 !== n ? n : k.ZP.getName(e);
                return (0, o.jsx)(
                    c.DY3,
                    {
                        text: a,
                        position: 'bottom',
                        children: (0, o.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == t ? void 0 : t.guild_id, D),
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
        F = null == L ? void 0 : L.userIds,
        K = (0, l.Wu)(
            [P.default],
            () =>
                Array.from(null != F ? F : [])
                    .map((e) => P.default.getUser(e))
                    .filter((e) => null != e),
            [F]
        ),
        H = _.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        J = r.useCallback(() => {
            let e = (0, S.getPID)();
            u.Z.setInputLocked(!p.ZP.isInputLocked(e), e);
        }, []),
        X = (0, Z.PR)(),
        {
            canStayOnTop: q,
            popoutWindowAlwaysOnTop: $,
            handleStayOnTop: Q
        } = (function () {
            let e = (0, l.e7)([b.Z], () => b.Z.getIsAlwaysOnTop(W.KJ3.ACTIVITY_POPOUT)),
                t = r.useCallback((e) => {
                    f.hY(W.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: j.isPlatformEmbedded && w.ZP.supportsFeature(W.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: t
            };
        })(),
        {
            rootNode: ee,
            popoutWindow: et,
            toggleFullScreen: en
        } = (function () {
            let { popoutWindow: e, currentDocument: t, rootNode: n } = (0, E.Z)(),
                [o, a] = r.useState(!1),
                i = r.useCallback(() => {
                    null != n && o && (a(!1), (0, N.Pr)(n, t));
                }, [n, t, o]),
                l = r.useCallback(() => {
                    null != n && (o ? i() : (a(!0), (0, N.Dj)(n)));
                }, [n, o, i]),
                c = r.useCallback(() => {
                    null != n && !(0, N.rB)(n, t) && o && l();
                }, [n, t, o, l]);
            return (
                r.useEffect(
                    () => (
                        null == t || t.addEventListener(N.NO, c),
                        () => {
                            null == t || t.removeEventListener(N.NO, c);
                        }
                    ),
                    [t, c]
                ),
                {
                    rootNode: n,
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
                                    renderUser: (e) => V(e, R)
                                })
                            ]
                        }),
                        (0, o.jsx)('div', {
                            className: i()(U.headerSection, U.headerSectionRight),
                            children: (0, o.jsxs)('div', {
                                className: U.actionButtonsContainer,
                                children: [
                                    (0, o.jsx)(C.Z, {
                                        appContext: W.IlC.POPOUT,
                                        applicationId: t,
                                        channel: R,
                                        shouldPrioritizeGroupPlusIcon: !0,
                                        embeddedActivity: L,
                                        iconSize: 'xs',
                                        look: c.iLD.FILLED,
                                        buttonText: z.NW.string(z.t['6F9ivr'])
                                    }),
                                    X
                                        ? (0, o.jsx)(x.Z, {
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
                                    (0, o.jsx)(g.Z, {
                                        node: ee,
                                        guestWindow: et,
                                        onClick: en
                                    }),
                                    H &&
                                        (0, o.jsx)(
                                            c.yRy,
                                            {
                                                position: 'bottom',
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, o.jsx)(v.Z, {
                                                        children: (0, o.jsx)(A.Z, {
                                                            application: a,
                                                            channelId: n,
                                                            onClose: t
                                                        })
                                                    });
                                                },
                                                children: (e, t) => {
                                                    var n, o;
                                                    let { isShown: a } = t;
                                                    return (0, r.createElement)(
                                                        h.Z,
                                                        ((n = (function (e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var n = null != arguments[t] ? arguments[t] : {},
                                                                    o = Object.keys(n);
                                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                                    (o = o.concat(
                                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                        })
                                                                    )),
                                                                    o.forEach(function (t) {
                                                                        var o;
                                                                        (o = n[t]),
                                                                            t in e
                                                                                ? Object.defineProperty(e, t, {
                                                                                      value: o,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (e[t] = o);
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
                                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var o = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, o);
                                                                  }
                                                                  return n;
                                                              })(Object(o)).forEach(function (e) {
                                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
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
