n.d(t, { Z: () => M }), n(388685);
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    a = n(252258),
    c = n(442837),
    u = n(481060),
    s = n(13245),
    d = n(753972),
    p = n(812206),
    f = n(111028),
    m = n(726721),
    b = n(610394),
    v = n(522474),
    O = n(788983),
    j = n(695346),
    h = n(390322),
    y = n(961048),
    x = n(871499),
    g = n(268353),
    P = n(786915),
    Z = n(107169),
    _ = n(592125),
    C = n(271383),
    I = n(594174),
    w = n(358085),
    S = n(51144),
    T = n(998502),
    k = n(228488),
    N = n(145597),
    E = n(214629),
    A = n(317381),
    D = n(884338),
    U = n(473179),
    R = n(932174),
    B = n(981631),
    L = n(388032),
    Y = n(314219);
let z = D.u.SIZE_24;
function M(e) {
    let { applicationId: t, channelId: n } = e,
        i = (0, c.e7)([p.Z], () => p.Z.getApplication(t)),
        M = (0, c.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities().get(t)),
        K = (0, c.e7)([_.Z], () => _.Z.getChannel(n)),
        W = j.Sb.useSetting(),
        V = (0, c.Wu)(
            [C.ZP],
            () => {
                var e;
                return null == K || null == M ? [] : Array.from(null != (e = M.userIds) ? e : []).map((e) => C.ZP.getMember(K.guild_id, e));
            },
            [M, K]
        ),
        J = o.useMemo(() => {
            let e = new Map();
            return (
                V.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [V]),
        G = o.useCallback(
            (e, t) => {
                var n;
                if (null == e) return null;
                let o = J.get(e.id),
                    i = null != (n = null == o ? void 0 : o.nick) ? n : S.ZP.getName(e);
                return (0, r.jsx)(
                    u.DY3,
                    {
                        text: i,
                        position: 'bottom',
                        children: (0, r.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == t ? void 0 : t.guild_id, z),
                                alt: i,
                                className: Y.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [J]
        ),
        X = null == M ? void 0 : M.userIds,
        F = (0, c.Wu)(
            [I.default],
            () =>
                Array.from(null != X ? X : [])
                    .map((e) => I.default.getUser(e))
                    .filter((e) => null != e),
            [X]
        ),
        H = m.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        q = o.useCallback(() => {
            let e = (0, N.getPID)();
            s.Z.setInputLocked(!b.ZP.isInputLocked(e), e);
        }, []),
        $ = (0, E.PR)(),
        {
            canStayOnTop: Q,
            popoutWindowAlwaysOnTop: ee,
            handleStayOnTop: et
        } = (function () {
            let e = (0, c.e7)([v.Z], () => v.Z.getIsAlwaysOnTop(B.KJ3.ACTIVITY_POPOUT)),
                t = o.useCallback((e) => {
                    O.hY(B.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: w.isPlatformEmbedded && T.ZP.supportsFeature(B.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: t
            };
        })(),
        {
            rootNode: en,
            popoutWindow: er,
            toggleFullScreen: eo
        } = (function () {
            let { popoutWindow: e, currentDocument: t, rootNode: n } = (0, R.Z)(),
                [r, i] = o.useState(!1),
                l = o.useCallback(() => {
                    null != n && r && (i(!1), (0, k.Pr)(n, t));
                }, [n, t, r]),
                a = o.useCallback(() => {
                    null != n && (r ? l() : (i(!0), (0, k.Dj)(n)));
                }, [n, r, l]),
                c = o.useCallback(() => {
                    null != n && !(0, k.rB)(n, t) && r && a();
                }, [n, t, r, a]);
            return (
                o.useEffect(
                    () => (
                        null == t || t.addEventListener(k.NO, c),
                        () => {
                            null == t || t.removeEventListener(k.NO, c);
                        }
                    ),
                    [t, c]
                ),
                {
                    rootNode: n,
                    popoutWindow: e,
                    toggleFullScreen: a
                }
            );
        })(),
        ei = o.useRef(null);
    if (null == i || null == M) return null;
    let el = (0, r.jsx)(d.Z, {
        application: i,
        size: 24,
        className: Y.appIcon
    });
    return (
        W &&
            (el = (0, r.jsx)(u.DY3, {
                text: M.compositeInstanceId,
                position: 'bottom',
                children: el
            })),
        (0, r.jsx)(u.f6W, {
            theme: B.BRd.DARK,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: l()(Y.container, e),
                    children: [
                        (0, r.jsxs)('div', {
                            className: l()(Y.headerSection, Y.headerSectionLeft),
                            children: [
                                el,
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    className: Y.applicationName,
                                    children: (0, r.jsx)(f.Z, { children: i.name })
                                }),
                                (0, r.jsx)('div', {
                                    className: Y.dotSpacer,
                                    children: (0, r.jsx)(u.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: '.'
                                    })
                                }),
                                (0, r.jsx)(D.Z, {
                                    renderIcon: !1,
                                    users: F,
                                    size: z,
                                    max: 6,
                                    renderUser: (e) => G(e, K)
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: l()(Y.headerSection, Y.headerSectionRight),
                            children: [
                                (0, r.jsx)('div', { className: Y.fade }),
                                (0, r.jsxs)('div', {
                                    className: Y.actionButtonsContainer,
                                    children: [
                                        (0, r.jsx)(P.Z, {
                                            appContext: B.IlC.POPOUT,
                                            applicationId: t,
                                            channel: K,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isContextlessActivity: M.location.kind === a.E.CONTEXTLESS,
                                            iconClassName: Y.inviteButtonIcon,
                                            size: u.zxk.Sizes.TINY,
                                            look: u.zxk.Looks.FILLED,
                                            buttonText: L.intl.string(L.t['6F9ivr']),
                                            color: u.zxk.Colors.BRAND
                                        }),
                                        $
                                            ? (0, r.jsx)(x.Z, {
                                                  onClick: q,
                                                  iconComponent: u.epB,
                                                  label: L.intl.string(L.t.mseZsL)
                                              })
                                            : null,
                                        Q
                                            ? (0, r.jsx)(Z.Z, {
                                                  popoutWindowAlwaysOnTop: ee,
                                                  onToggleStayOnTop: et
                                              })
                                            : null,
                                        (0, r.jsx)(g.Z, {
                                            node: en,
                                            guestWindow: er,
                                            onClick: eo
                                        }),
                                        H &&
                                            (0, r.jsx)(
                                                u.yRy,
                                                {
                                                    targetElementRef: ei,
                                                    position: 'bottom',
                                                    renderPopout: (e) => {
                                                        let { closePopout: t } = e;
                                                        return (0, r.jsx)(h.Z, {
                                                            children: (0, r.jsx)(U.Z, {
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
                                                            y.Z,
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
                                                                    buttonRef: ei,
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
                            ]
                        })
                    ]
                })
        })
    );
}
