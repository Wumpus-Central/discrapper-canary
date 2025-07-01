(t.d(n, { Z: () => J }), t(388685));
var r = t(255367),
    o = t(73800),
    i = t(120356),
    l = t.n(i),
    a = t(442837),
    c = t(481060),
    u = t(13245),
    s = t(367907),
    d = t(753972),
    p = t(812206),
    f = t(111028),
    m = t(610394),
    v = t(522474),
    b = t(788983),
    h = t(695346),
    O = t(390322),
    j = t(961048),
    P = t(871499),
    x = t(268353),
    g = t(786915),
    y = t(800965),
    I = t(107169),
    Z = t(592125),
    C = t(271383),
    _ = t(594174),
    w = t(358085),
    S = t(51144),
    T = t(998502),
    N = t(228488),
    k = t(145597),
    A = t(317381),
    E = t(426419),
    R = t(513202),
    U = t(884338),
    B = t(617552),
    D = t(473179),
    L = t(932174),
    Y = t(225639),
    z = t(981631),
    W = t(388032),
    K = t(951927);
let M = U.u.SIZE_24;
function J(e) {
    let { applicationId: n, channelId: t } = e,
        i = (0, a.e7)([p.Z], () => p.Z.getApplication(n)),
        J = (0, a.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities().get(n)),
        V = (0, a.e7)([Z.Z], () => Z.Z.getChannel(t)),
        G = h.Sb.useSetting(),
        H = (0, a.Wu)(
            [C.ZP],
            () => {
                var e;
                return null == V || null == J ? [] : Array.from(null != (e = J.userIds) ? e : []).map((e) => C.ZP.getMember(V.guild_id, e));
            },
            [J, V]
        ),
        F = o.useMemo(() => {
            let e = new Map();
            return (
                H.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [H]),
        q = o.useCallback(
            (e, n) => {
                var t;
                if (null == e) return null;
                let o = F.get(e.id),
                    i = null != (t = null == o ? void 0 : o.nick) ? t : S.ZP.getName(e);
                return (0, r.jsx)(
                    c.DY3,
                    {
                        text: i,
                        position: 'bottom',
                        children: (0, r.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == n ? void 0 : n.guild_id, M),
                                alt: i,
                                className: K.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [F]
        ),
        X = null == J ? void 0 : J.userIds,
        $ = (0, a.Wu)(
            [_.default],
            () =>
                Array.from(null != X ? X : [])
                    .map((e) => _.default.getUser(e))
                    .filter((e) => null != e),
            [X]
        ),
        Q = o.useCallback(() => {
            let e = (0, k.getPID)();
            u.Z.setInputLocked(!m.ZP.isInputLocked(e), e);
        }, []),
        ee = (0, E.P)(),
        {
            canStayOnTop: en,
            popoutWindowAlwaysOnTop: et,
            handleStayOnTop: er
        } = (function () {
            let e = (0, a.e7)([v.Z], () => v.Z.getIsAlwaysOnTop(z.KJ3.ACTIVITY_POPOUT)),
                n = o.useCallback((e) => {
                    b.hY(z.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: w.isPlatformEmbedded && T.ZP.supportsFeature(z.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: n
            };
        })(),
        eo = (0, Y.y)({ location: 'Activity Popout Window Header' }),
        {
            rootNode: ei,
            popoutWindow: el,
            toggleFullScreen: ea
        } = (function () {
            let { popoutWindow: e, currentDocument: n, rootNode: t } = (0, L.Z)(),
                [r, i] = o.useState(!1),
                l = o.useCallback(() => {
                    null != t && r && (i(!1), (0, N.Pr)(t, n));
                }, [t, n, r]),
                a = o.useCallback(() => {
                    null != t && (r ? l() : (i(!0), (0, N.Dj)(t)));
                }, [t, r, l]),
                c = o.useCallback(() => {
                    null != t && !(0, N.rB)(t, n) && r && a();
                }, [t, n, r, a]);
            return (
                o.useEffect(
                    () => (
                        null == n || n.addEventListener(N.NO, c),
                        () => {
                            null == n || n.removeEventListener(N.NO, c);
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
        ec = o.useRef(null);
    if (null == i || null == J) return null;
    let eu = (0, r.jsx)(d.Z, {
        application: i,
        size: 24,
        className: K.appIcon
    });
    return (
        G &&
            (eu = (0, r.jsx)(c.DY3, {
                text: J.compositeInstanceId,
                position: 'bottom',
                children: eu
            })),
        (0, r.jsx)(c.f6W, {
            theme: z.BRd.DARK,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: l()(K.container, e),
                    children: [
                        (0, r.jsxs)('div', {
                            className: l()(K.headerSection, K.headerSectionLeft),
                            children: [
                                eu,
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    className: K.applicationName,
                                    children: (0, r.jsx)(f.Z, { children: i.name })
                                }),
                                (0, r.jsx)('div', {
                                    className: K.dotSpacer,
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: '.'
                                    })
                                }),
                                (0, r.jsx)(U.Z, {
                                    renderIcon: !1,
                                    users: $,
                                    size: M,
                                    max: 6,
                                    renderUser: (e) => q(e, V)
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: l()(K.headerSection, K.headerSectionRight),
                            children: [
                                (0, r.jsx)('div', { className: K.fade }),
                                (0, r.jsxs)('div', {
                                    className: K.actionButtonsContainer,
                                    children: [
                                        (0, r.jsx)(g.Z, {
                                            appContext: z.IlC.POPOUT,
                                            applicationId: n,
                                            channel: V,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            iconClassName: K.inviteButtonIcon,
                                            size: c.zxk.Sizes.TINY,
                                            look: c.zxk.Looks.FILLED,
                                            buttonText: W.intl.string(W.t['6F9ivr']),
                                            color: c.zxk.Colors.TRANSPARENT
                                        }),
                                        ee
                                            ? (0, r.jsx)(P.Z, {
                                                  onClick: Q,
                                                  iconComponent: c.epB,
                                                  label: W.intl.string(W.t.mseZsL)
                                              })
                                            : null,
                                        en
                                            ? (0, r.jsx)(I.Z, {
                                                  popoutWindowAlwaysOnTop: et,
                                                  onToggleStayOnTop: er
                                              })
                                            : null,
                                        eo
                                            ? (0, r.jsx)(y.Z, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      ((0, s.yw)(z.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, B.Z)({
                                                              onConfirm: () => {
                                                                  R.Z.popInActivity();
                                                              }
                                                          }));
                                                  }
                                              })
                                            : null,
                                        (0, r.jsx)(x.Z, {
                                            node: ei,
                                            guestWindow: el,
                                            onClick: ea
                                        }),
                                        (0, r.jsx)(
                                            c.yRy,
                                            {
                                                targetElementRef: ec,
                                                position: 'bottom',
                                                renderPopout: (e) => {
                                                    let { closePopout: n } = e;
                                                    return (0, r.jsx)(O.Z, {
                                                        children: (0, r.jsx)(D.Z, {
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
                                                        j.Z,
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
                                                                buttonRef: ec,
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
