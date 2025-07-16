(t.d(n, { Z: () => V }), t(388685));
var r = t(255367),
    o = t(73800),
    i = t(120356),
    l = t.n(i),
    a = t(442837),
    c = t(755721),
    u = t(481060),
    s = t(13245),
    d = t(367907),
    p = t(753972),
    f = t(812206),
    m = t(111028),
    v = t(610394),
    b = t(522474),
    h = t(788983),
    O = t(695346),
    j = t(390322),
    P = t(961048),
    x = t(871499),
    g = t(268353),
    y = t(786915),
    I = t(800965),
    Z = t(107169),
    C = t(592125),
    _ = t(271383),
    w = t(594174),
    S = t(358085),
    T = t(51144),
    N = t(998502),
    A = t(228488),
    k = t(145597),
    E = t(317381),
    R = t(426419),
    U = t(513202),
    D = t(884338),
    L = t(617552),
    B = t(473179),
    Y = t(932174),
    z = t(225639),
    W = t(981631),
    K = t(388032),
    M = t(951927);
let J = D.u8.SIZE_24;
function V(e) {
    let { applicationId: n, channelId: t } = e,
        i = (0, a.e7)([f.Z], () => f.Z.getApplication(n)),
        V = (0, a.e7)([E.ZP], () => E.ZP.getSelfEmbeddedActivities().get(n)),
        G = (0, a.e7)([C.Z], () => C.Z.getChannel(t)),
        H = O.Sb.useSetting(),
        F = (0, a.Wu)(
            [_.ZP],
            () => {
                var e;
                return null == G || null == V ? [] : Array.from(null != (e = V.userIds) ? e : []).map((e) => _.ZP.getMember(G.guild_id, e));
            },
            [V, G]
        ),
        q = o.useMemo(() => {
            let e = new Map();
            return (
                F.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [F]),
        X = o.useCallback(
            (e, n) => {
                var t;
                if (null == e || e === D.ag) return null;
                let o = q.get(e.id),
                    i = null != (t = null == o ? void 0 : o.nick) ? t : T.ZP.getName(e);
                return (0, r.jsx)(
                    u.DY3,
                    {
                        text: i,
                        position: 'bottom',
                        children: (0, r.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == n ? void 0 : n.guild_id, J),
                                alt: i,
                                className: M.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [q]
        ),
        $ = null == V ? void 0 : V.userIds,
        Q = (0, a.Wu)(
            [w.default],
            () =>
                Array.from(null != $ ? $ : [])
                    .map((e) => w.default.getUser(e))
                    .filter((e) => null != e),
            [$]
        ),
        ee = o.useCallback(() => {
            let e = (0, k.getPID)();
            s.Z.setInputLocked(!v.ZP.isInputLocked(e), e);
        }, []),
        en = (0, R.P)(),
        {
            canStayOnTop: et,
            popoutWindowAlwaysOnTop: er,
            handleStayOnTop: eo
        } = (function () {
            let e = (0, a.e7)([b.Z], () => b.Z.getIsAlwaysOnTop(W.KJ3.ACTIVITY_POPOUT)),
                n = o.useCallback((e) => {
                    h.hY(W.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: S.isPlatformEmbedded && N.ZP.supportsFeature(W.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: n
            };
        })(),
        ei = (0, z.y)({ location: 'Activity Popout Window Header' }),
        {
            rootNode: el,
            popoutWindow: ea,
            toggleFullScreen: ec
        } = (function () {
            let { popoutWindow: e, currentDocument: n, rootNode: t } = (0, Y.Z)(),
                [r, i] = o.useState(!1),
                l = o.useCallback(() => {
                    null != t && r && (i(!1), (0, A.Pr)(t, n));
                }, [t, n, r]),
                a = o.useCallback(() => {
                    null != t && (r ? l() : (i(!0), (0, A.Dj)(t)));
                }, [t, r, l]),
                c = o.useCallback(() => {
                    null != t && !(0, A.rB)(t, n) && r && a();
                }, [t, n, r, a]);
            return (
                o.useEffect(
                    () => (
                        null == n || n.addEventListener(A.NO, c),
                        () => {
                            null == n || n.removeEventListener(A.NO, c);
                        }
                    ),
                    [n, c]
                ),
                {
                    rootNode: t,
                    popoutWindow: e,
                    toggleFullScreen: a
                }
            );
        })(),
        eu = o.useRef(null);
    if (null == i || null == V) return null;
    let es = (0, r.jsx)(p.Z, {
        application: i,
        size: 24,
        className: M.appIcon
    });
    return (
        H &&
            (es = (0, r.jsx)(u.DY3, {
                text: V.compositeInstanceId,
                position: 'bottom',
                children: es
            })),
        (0, r.jsx)(u.f6W, {
            theme: W.BRd.DARK,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: l()(M.container, e),
                    children: [
                        (0, r.jsxs)('div', {
                            className: l()(M.headerSection, M.headerSectionLeft),
                            children: [
                                es,
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    className: M.applicationName,
                                    children: (0, r.jsx)(m.Z, { children: i.name })
                                }),
                                (0, r.jsx)('div', {
                                    className: M.dotSpacer,
                                    children: (0, r.jsx)(u.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: '.'
                                    })
                                }),
                                (0, r.jsx)(D.ZP, {
                                    renderIcon: !1,
                                    users: Q,
                                    size: J,
                                    max: 6,
                                    renderUser: (e) => X(e, G)
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: l()(M.headerSection, M.headerSectionRight),
                            children: [
                                (0, r.jsx)('div', { className: M.fade }),
                                (0, r.jsxs)('div', {
                                    className: M.actionButtonsContainer,
                                    children: [
                                        (0, r.jsx)(y.Z, {
                                            appContext: W.IlC.POPOUT,
                                            applicationId: n,
                                            channel: G,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            iconClassName: M.inviteButtonIcon,
                                            size: c.zx.Sizes.TINY,
                                            look: c.zx.Looks.FILLED,
                                            buttonText: K.intl.string(K.t['6F9ivr']),
                                            color: c.zx.Colors.TRANSPARENT
                                        }),
                                        en
                                            ? (0, r.jsx)(x.Z, {
                                                  onClick: ee,
                                                  iconComponent: u.epB,
                                                  label: K.intl.string(K.t.mseZsL)
                                              })
                                            : null,
                                        et
                                            ? (0, r.jsx)(Z.Z, {
                                                  popoutWindowAlwaysOnTop: er,
                                                  onToggleStayOnTop: eo
                                              })
                                            : null,
                                        ei
                                            ? (0, r.jsx)(I.Z, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      ((0, d.yw)(W.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, L.Z)({
                                                              onConfirm: () => {
                                                                  U.Z.popInActivity();
                                                              }
                                                          }));
                                                  }
                                              })
                                            : null,
                                        (0, r.jsx)(g.Z, {
                                            node: el,
                                            guestWindow: ea,
                                            onClick: ec
                                        }),
                                        (0, r.jsx)(
                                            u.yRy,
                                            {
                                                targetElementRef: eu,
                                                position: 'bottom',
                                                renderPopout: (e) => {
                                                    let { closePopout: n } = e;
                                                    return (0, r.jsx)(j.Z, {
                                                        children: (0, r.jsx)(B.Z, {
                                                            application: i,
                                                            channelId: t,
                                                            onClose: n
                                                        })
                                                    });
                                                },
                                                children: (e, n) => {
                                                    var t, r;
                                                    let { isShown: i } = n;
                                                    return (0, o.createElement)(
                                                        P.Z,
                                                        ((t = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    r = Object.keys(t);
                                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                                    (r = r.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                        })
                                                                    )),
                                                                    r.forEach(function (n) {
                                                                        var r;
                                                                        ((r = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: r,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (e[n] = r));
                                                                    }));
                                                            }
                                                            return e;
                                                        })({}, e)),
                                                        (r = r =
                                                            {
                                                                buttonRef: eu,
                                                                key: 'more-options',
                                                                isActive: i
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                                            : (function (e, n) {
                                                                  var t = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      t.push.apply(t, r);
                                                                  }
                                                                  return t;
                                                              })(Object(r)).forEach(function (e) {
                                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
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
