t.d(n, { Z: () => R }), t(47120);
var o = t(200651),
    r = t(192379),
    a = t(120356),
    i = t.n(a),
    l = t(442837),
    c = t(481060),
    _ = t(13245),
    u = t(753972),
    s = t(812206),
    d = t(111028),
    p = t(726721),
    f = t(610394),
    b = t(522474),
    m = t(788983),
    h = t(695346),
    v = t(390322),
    g = t(961048),
    C = t(871499),
    x = t(268353),
    y = t(786915),
    I = t(107169),
    P = t(592125),
    N = t(271383),
    O = t(594174),
    w = t(358085),
    j = t(51144),
    k = t(998502),
    T = t(228488),
    Z = t(145597),
    B = t(214629),
    S = t(317381),
    A = t(884338),
    E = t(473179),
    W = t(932174),
    z = t(981631),
    U = t(388032),
    D = t(231784);
let L = A.u.SIZE_24;
function R(e) {
    let { applicationId: n, channelId: t } = e,
        a = (0, l.e7)([s.Z], () => s.Z.getApplication(n)),
        R = (0, l.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivities().get(n)),
        M = (0, l.e7)([P.Z], () => P.Z.getChannel(t)),
        G = h.Sb.useSetting(),
        Y = (0, l.Wu)(
            [N.ZP],
            () => {
                var e;
                return null == M || null == R ? [] : Array.from(null !== (e = R.userIds) && void 0 !== e ? e : []).map((e) => N.ZP.getMember(M.guild_id, e));
            },
            [R, M]
        ),
        H = r.useMemo(() => {
            let e = new Map();
            return (
                Y.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [Y]),
        V = r.useCallback(
            (e, n) => {
                var t;
                if (null == e) return null;
                let r = H.get(e.id),
                    a = null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : j.ZP.getName(e);
                return (0, o.jsx)(
                    c.DY3,
                    {
                        text: a,
                        position: 'bottom',
                        children: (0, o.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == n ? void 0 : n.guild_id, L),
                                alt: a,
                                className: D.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [H]
        ),
        K = null == R ? void 0 : R.userIds,
        F = (0, l.Wu)(
            [O.default],
            () =>
                Array.from(null != K ? K : [])
                    .map((e) => O.default.getUser(e))
                    .filter((e) => null != e),
            [K]
        ),
        J = p.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        X = r.useCallback(() => {
            let e = (0, Z.getPID)();
            _.Z.setInputLocked(!f.ZP.isInputLocked(e), e);
        }, []),
        q = (0, B.PR)(),
        {
            canStayOnTop: $,
            popoutWindowAlwaysOnTop: Q,
            handleStayOnTop: ee
        } = (function () {
            let e = (0, l.e7)([b.Z], () => b.Z.getIsAlwaysOnTop(z.KJ3.ACTIVITY_POPOUT)),
                n = r.useCallback((e) => {
                    m.hY(z.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: w.isPlatformEmbedded && k.ZP.supportsFeature(z.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: n
            };
        })(),
        {
            rootNode: en,
            popoutWindow: et,
            toggleFullScreen: eo
        } = (function () {
            let { popoutWindow: e, currentDocument: n, rootNode: t } = (0, W.Z)(),
                [o, a] = r.useState(!1),
                i = r.useCallback(() => {
                    null != t && o && (a(!1), (0, T.Pr)(t, n));
                }, [t, n, o]),
                l = r.useCallback(() => {
                    null != t && (o ? i() : (a(!0), (0, T.Dj)(t)));
                }, [t, o, i]),
                c = r.useCallback(() => {
                    null != t && !(0, T.rB)(t, n) && o && l();
                }, [t, n, o, l]);
            return (
                r.useEffect(
                    () => (
                        null == n || n.addEventListener(T.NO, c),
                        () => {
                            null == n || n.removeEventListener(T.NO, c);
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
    if (null == a || null == R) return null;
    let er = (0, o.jsx)(u.Z, {
        application: a,
        size: 24,
        className: D.appIcon
    });
    return (
        G &&
            (er = (0, o.jsx)(c.DY3, {
                text: R.compositeInstanceId,
                position: 'bottom',
                children: er
            })),
        (0, o.jsx)(c.f6W, {
            theme: z.BRd.DARK,
            children: (e) =>
                (0, o.jsxs)('div', {
                    className: i()(D.container, e),
                    children: [
                        (0, o.jsxs)('div', {
                            className: i()(D.headerSection, D.headerSectionLeft),
                            children: [
                                er,
                                (0, o.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    className: D.applicationName,
                                    children: (0, o.jsx)(d.Z, { children: a.name })
                                }),
                                (0, o.jsx)('div', {
                                    className: D.dotSpacer,
                                    children: (0, o.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: '.'
                                    })
                                }),
                                (0, o.jsx)(A.Z, {
                                    renderIcon: !1,
                                    users: F,
                                    size: L,
                                    max: 6,
                                    renderUser: (e) => V(e, M)
                                })
                            ]
                        }),
                        (0, o.jsxs)('div', {
                            className: i()(D.headerSection, D.headerSectionRight),
                            children: [
                                (0, o.jsx)('div', { className: D.fade }),
                                (0, o.jsxs)('div', {
                                    className: D.actionButtonsContainer,
                                    children: [
                                        (0, o.jsx)(y.Z, {
                                            appContext: z.IlC.POPOUT,
                                            applicationId: n,
                                            channel: M,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            embeddedActivity: R
                                        }),
                                        q
                                            ? (0, o.jsx)(C.Z, {
                                                  onClick: X,
                                                  iconComponent: c.epB,
                                                  label: U.NW.string(U.t.mseZsL)
                                              })
                                            : null,
                                        $
                                            ? (0, o.jsx)(I.Z, {
                                                  popoutWindowAlwaysOnTop: Q,
                                                  onToggleStayOnTop: ee
                                              })
                                            : null,
                                        (0, o.jsx)(x.Z, {
                                            node: en,
                                            guestWindow: et,
                                            onClick: eo
                                        }),
                                        J &&
                                            (0, o.jsx)(
                                                c.yRy,
                                                {
                                                    position: 'bottom',
                                                    renderPopout: (e) => {
                                                        let { closePopout: n } = e;
                                                        return (0, o.jsx)(v.Z, {
                                                            children: (0, o.jsx)(E.Z, {
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
                                                            g.Z,
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
                            ]
                        })
                    ]
                })
        })
    );
}
