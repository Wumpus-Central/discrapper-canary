n.d(t, { Z: () => Y }), n(47120);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(442837),
    c = n(481060),
    u = n(13245),
    s = n(753972),
    d = n(812206),
    p = n(111028),
    f = n(726721),
    m = n(610394),
    v = n(522474),
    b = n(788983),
    h = n(695346),
    j = n(390322),
    O = n(961048),
    x = n(871499),
    y = n(268353),
    g = n(786915),
    P = n(107169),
    _ = n(592125),
    I = n(271383),
    Z = n(594174),
    C = n(358085),
    w = n(51144),
    S = n(998502),
    N = n(228488),
    T = n(145597),
    k = n(214629),
    E = n(317381),
    A = n(884338),
    U = n(473179),
    D = n(932174),
    B = n(981631),
    R = n(388032),
    L = n(951927);
let W = A.u.SIZE_24;
function Y(e) {
    let { applicationId: t, channelId: n } = e,
        i = (0, a.e7)([d.Z], () => d.Z.getApplication(t)),
        Y = (0, a.e7)([E.ZP], () => E.ZP.getSelfEmbeddedActivities().get(t)),
        M = (0, a.e7)([_.Z], () => _.Z.getChannel(n)),
        z = h.Sb.useSetting(),
        K = (0, a.Wu)(
            [I.ZP],
            () => {
                var e;
                return null == M || null == Y ? [] : Array.from(null != (e = Y.userIds) ? e : []).map((e) => I.ZP.getMember(M.guild_id, e));
            },
            [Y, M]
        ),
        V = o.useMemo(() => {
            let e = new Map();
            return (
                K.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [K]),
        J = o.useCallback(
            (e, t) => {
                var n;
                if (null == e) return null;
                let o = V.get(e.id),
                    i = null != (n = null == o ? void 0 : o.nick) ? n : w.ZP.getName(e);
                return (0, r.jsx)(
                    c.DY3,
                    {
                        text: i,
                        position: 'bottom',
                        children: (0, r.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == t ? void 0 : t.guild_id, W),
                                alt: i,
                                className: L.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [V]
        ),
        F = null == Y ? void 0 : Y.userIds,
        G = (0, a.Wu)(
            [Z.default],
            () =>
                Array.from(null != F ? F : [])
                    .map((e) => Z.default.getUser(e))
                    .filter((e) => null != e),
            [F]
        ),
        H = f.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        X = o.useCallback(() => {
            let e = (0, T.getPID)();
            u.Z.setInputLocked(!m.ZP.isInputLocked(e), e);
        }, []),
        q = (0, k.PR)(),
        {
            canStayOnTop: $,
            popoutWindowAlwaysOnTop: Q,
            handleStayOnTop: ee
        } = (function () {
            let e = (0, a.e7)([v.Z], () => v.Z.getIsAlwaysOnTop(B.KJ3.ACTIVITY_POPOUT)),
                t = o.useCallback((e) => {
                    b.hY(B.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: C.isPlatformEmbedded && S.ZP.supportsFeature(B.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: t
            };
        })(),
        {
            rootNode: et,
            popoutWindow: en,
            toggleFullScreen: er
        } = (function () {
            let { popoutWindow: e, currentDocument: t, rootNode: n } = (0, D.Z)(),
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
        eo = o.useRef(null);
    if (null == i || null == Y) return null;
    let ei = (0, r.jsx)(s.Z, {
        application: i,
        size: 24,
        className: L.appIcon
    });
    return (
        z &&
            (ei = (0, r.jsx)(c.DY3, {
                text: Y.compositeInstanceId,
                position: 'bottom',
                children: ei
            })),
        (0, r.jsx)(c.f6W, {
            theme: B.BRd.DARK,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: l()(L.container, e),
                    children: [
                        (0, r.jsxs)('div', {
                            className: l()(L.headerSection, L.headerSectionLeft),
                            children: [
                                ei,
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    className: L.applicationName,
                                    children: (0, r.jsx)(p.Z, { children: i.name })
                                }),
                                (0, r.jsx)('div', {
                                    className: L.dotSpacer,
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: '.'
                                    })
                                }),
                                (0, r.jsx)(A.Z, {
                                    renderIcon: !1,
                                    users: G,
                                    size: W,
                                    max: 6,
                                    renderUser: (e) => J(e, M)
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: l()(L.headerSection, L.headerSectionRight),
                            children: [
                                (0, r.jsx)('div', { className: L.fade }),
                                (0, r.jsxs)('div', {
                                    className: L.actionButtonsContainer,
                                    children: [
                                        (0, r.jsx)(g.Z, {
                                            appContext: B.IlC.POPOUT,
                                            applicationId: t,
                                            channel: M,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            embeddedActivity: Y,
                                            iconClassName: L.inviteButtonIcon,
                                            look: c.zxk.Looks.FILLED,
                                            size: c.zxk.Sizes.TINY,
                                            buttonText: R.NW.string(R.t['6F9ivr'])
                                        }),
                                        q
                                            ? (0, r.jsx)(x.Z, {
                                                  onClick: X,
                                                  iconComponent: c.epB,
                                                  label: R.NW.string(R.t.mseZsL)
                                              })
                                            : null,
                                        $
                                            ? (0, r.jsx)(P.Z, {
                                                  popoutWindowAlwaysOnTop: Q,
                                                  onToggleStayOnTop: ee
                                              })
                                            : null,
                                        (0, r.jsx)(y.Z, {
                                            node: et,
                                            guestWindow: en,
                                            onClick: er
                                        }),
                                        H &&
                                            (0, r.jsx)(
                                                c.yRy,
                                                {
                                                    targetElementRef: eo,
                                                    position: 'bottom',
                                                    renderPopout: (e) => {
                                                        let { closePopout: t } = e;
                                                        return (0, r.jsx)(j.Z, {
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
                                                            O.Z,
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
                                                                    buttonRef: eo,
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
