n.d(t, { Z: () => z }), n(388685);
var r = n(200651),
    o = n(192379),
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
    v = n(610394),
    b = n(522474),
    h = n(788983),
    O = n(695346),
    j = n(390322),
    x = n(961048),
    y = n(871499),
    g = n(268353),
    P = n(786915),
    _ = n(107169),
    I = n(592125),
    Z = n(271383),
    C = n(594174),
    S = n(358085),
    w = n(51144),
    T = n(998502),
    N = n(228488),
    k = n(145597),
    E = n(214629),
    A = n(317381),
    U = n(884338),
    D = n(473179),
    B = n(932174),
    R = n(981631),
    L = n(388032),
    Y = n(951927);
let M = U.u.SIZE_24;
function z(e) {
    let { applicationId: t, channelId: n } = e,
        i = (0, c.e7)([p.Z], () => p.Z.getApplication(t)),
        z = (0, c.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities().get(t)),
        W = (0, c.e7)([I.Z], () => I.Z.getChannel(n)),
        K = O.Sb.useSetting(),
        V = (0, c.Wu)(
            [Z.ZP],
            () => {
                var e;
                return null == W || null == z ? [] : Array.from(null != (e = z.userIds) ? e : []).map((e) => Z.ZP.getMember(W.guild_id, e));
            },
            [z, W]
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
        X = o.useCallback(
            (e, t) => {
                var n;
                if (null == e) return null;
                let o = J.get(e.id),
                    i = null != (n = null == o ? void 0 : o.nick) ? n : w.ZP.getName(e);
                return (0, r.jsx)(
                    u.DY3,
                    {
                        text: i,
                        position: 'bottom',
                        children: (0, r.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == t ? void 0 : t.guild_id, M),
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
        F = null == z ? void 0 : z.userIds,
        G = (0, c.Wu)(
            [C.default],
            () =>
                Array.from(null != F ? F : [])
                    .map((e) => C.default.getUser(e))
                    .filter((e) => null != e),
            [F]
        ),
        H = m.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        q = o.useCallback(() => {
            let e = (0, k.getPID)();
            s.Z.setInputLocked(!v.ZP.isInputLocked(e), e);
        }, []),
        $ = (0, E.PR)(),
        {
            canStayOnTop: Q,
            popoutWindowAlwaysOnTop: ee,
            handleStayOnTop: et
        } = (function () {
            let e = (0, c.e7)([b.Z], () => b.Z.getIsAlwaysOnTop(R.KJ3.ACTIVITY_POPOUT)),
                t = o.useCallback((e) => {
                    h.hY(R.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: S.isPlatformEmbedded && T.ZP.supportsFeature(R.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: t
            };
        })(),
        {
            rootNode: en,
            popoutWindow: er,
            toggleFullScreen: eo
        } = (function () {
            let { popoutWindow: e, currentDocument: t, rootNode: n } = (0, B.Z)(),
                [r, i] = o.useState(!1),
                l = o.useCallback(() => {
                    null != n && r && (i(!1), (0, N.Pr)(n, t));
                }, [n, t, r]),
                a = o.useCallback(() => {
                    null != n && (r ? l() : (i(!0), (0, N.Dj)(n)));
                }, [n, r, l]),
                c = o.useCallback(() => {
                    null != n && !(0, N.rB)(n, t) && r && a();
                }, [n, t, r, a]);
            return (
                o.useEffect(
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
                    toggleFullScreen: a
                }
            );
        })(),
        ei = o.useRef(null);
    if (null == i || null == z) return null;
    let el = (0, r.jsx)(d.Z, {
        application: i,
        size: 24,
        className: Y.appIcon
    });
    return (
        K &&
            (el = (0, r.jsx)(u.DY3, {
                text: z.compositeInstanceId,
                position: 'bottom',
                children: el
            })),
        (0, r.jsx)(u.f6W, {
            theme: R.BRd.DARK,
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
                                (0, r.jsx)(U.Z, {
                                    renderIcon: !1,
                                    users: G,
                                    size: M,
                                    max: 6,
                                    renderUser: (e) => X(e, W)
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
                                            appContext: R.IlC.POPOUT,
                                            applicationId: t,
                                            channel: W,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isContextlessActivity: z.location.kind === a.E.CONTEXTLESS,
                                            iconClassName: Y.inviteButtonIcon,
                                            look: u.zxk.Looks.FILLED,
                                            size: u.zxk.Sizes.TINY,
                                            buttonText: L.intl.string(L.t['6F9ivr'])
                                        }),
                                        $
                                            ? (0, r.jsx)(y.Z, {
                                                  onClick: q,
                                                  iconComponent: u.epB,
                                                  label: L.intl.string(L.t.mseZsL)
                                              })
                                            : null,
                                        Q
                                            ? (0, r.jsx)(_.Z, {
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
                                                        return (0, r.jsx)(j.Z, {
                                                            children: (0, r.jsx)(D.Z, {
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
                                                            x.Z,
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
