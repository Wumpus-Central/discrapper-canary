n.d(t, { Z: () => V }), n(388685);
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    a = n(442837),
    c = n(481060),
    u = n(13245),
    s = n(367907),
    d = n(753972),
    p = n(812206),
    f = n(111028),
    m = n(610394),
    b = n(522474),
    O = n(788983),
    v = n(695346),
    j = n(390322),
    y = n(961048),
    h = n(871499),
    P = n(268353),
    g = n(786915),
    x = n(800965),
    I = n(107169),
    C = n(592125),
    Z = n(271383),
    _ = n(594174),
    w = n(358085),
    S = n(51144),
    T = n(998502),
    N = n(228488),
    k = n(145597),
    A = n(317381),
    E = n(426419),
    U = n(513202),
    D = n(884338),
    B = n(617552),
    R = n(473179),
    L = n(932174),
    M = n(225639),
    Y = n(981631),
    z = n(388032),
    K = n(951927);
let W = D.u.SIZE_24;
function V(e) {
    let { applicationId: t, channelId: n } = e,
        i = (0, a.e7)([p.Z], () => p.Z.getApplication(t)),
        V = (0, a.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities().get(t)),
        J = (0, a.e7)([C.Z], () => C.Z.getChannel(n)),
        G = v.Sb.useSetting(),
        H = (0, a.Wu)(
            [Z.ZP],
            () => {
                var e;
                return null == J || null == V ? [] : Array.from(null != (e = V.userIds) ? e : []).map((e) => Z.ZP.getMember(J.guild_id, e));
            },
            [V, J]
        ),
        F = o.useMemo(() => {
            let e = new Map();
            return (
                H.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [H]),
        X = o.useCallback(
            (e, t) => {
                var n;
                if (null == e) return null;
                let o = F.get(e.id),
                    i = null != (n = null == o ? void 0 : o.nick) ? n : S.ZP.getName(e);
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
        q = null == V ? void 0 : V.userIds,
        $ = (0, a.Wu)(
            [_.default],
            () =>
                Array.from(null != q ? q : [])
                    .map((e) => _.default.getUser(e))
                    .filter((e) => null != e),
            [q]
        ),
        Q = o.useCallback(() => {
            let e = (0, k.getPID)();
            u.Z.setInputLocked(!m.ZP.isInputLocked(e), e);
        }, []),
        ee = (0, E.P)(),
        {
            canStayOnTop: et,
            popoutWindowAlwaysOnTop: en,
            handleStayOnTop: er
        } = (function () {
            let e = (0, a.e7)([b.Z], () => b.Z.getIsAlwaysOnTop(Y.KJ3.ACTIVITY_POPOUT)),
                t = o.useCallback((e) => {
                    O.hY(Y.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: w.isPlatformEmbedded && T.ZP.supportsFeature(Y.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: t
            };
        })(),
        eo = (0, M.y)({ location: 'Activity Popout Window Header' }),
        {
            rootNode: ei,
            popoutWindow: el,
            toggleFullScreen: ea
        } = (function () {
            let { popoutWindow: e, currentDocument: t, rootNode: n } = (0, L.Z)(),
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
        ec = o.useRef(null);
    if (null == i || null == V) return null;
    let eu = (0, r.jsx)(d.Z, {
        application: i,
        size: 24,
        className: K.appIcon
    });
    return (
        G &&
            (eu = (0, r.jsx)(c.DY3, {
                text: V.compositeInstanceId,
                position: 'bottom',
                children: eu
            })),
        (0, r.jsx)(c.f6W, {
            theme: Y.BRd.DARK,
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
                                (0, r.jsx)(D.Z, {
                                    renderIcon: !1,
                                    users: $,
                                    size: W,
                                    max: 6,
                                    renderUser: (e) => X(e, J)
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
                                            appContext: Y.IlC.POPOUT,
                                            applicationId: t,
                                            channel: J,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            iconClassName: K.inviteButtonIcon,
                                            size: c.zxk.Sizes.TINY,
                                            look: c.zxk.Looks.FILLED,
                                            buttonText: z.intl.string(z.t['6F9ivr']),
                                            color: c.zxk.Colors.TRANSPARENT
                                        }),
                                        ee
                                            ? (0, r.jsx)(h.Z, {
                                                  onClick: Q,
                                                  iconComponent: c.epB,
                                                  label: z.intl.string(z.t.mseZsL)
                                              })
                                            : null,
                                        et
                                            ? (0, r.jsx)(I.Z, {
                                                  popoutWindowAlwaysOnTop: en,
                                                  onToggleStayOnTop: er
                                              })
                                            : null,
                                        eo
                                            ? (0, r.jsx)(x.Z, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, s.yw)(Y.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, B.Z)({
                                                              onConfirm: () => {
                                                                  U.Z.popInActivity();
                                                              }
                                                          });
                                                  }
                                              })
                                            : null,
                                        (0, r.jsx)(P.Z, {
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
                                                    let { closePopout: t } = e;
                                                    return (0, r.jsx)(j.Z, {
                                                        children: (0, r.jsx)(R.Z, {
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
                                                                buttonRef: ec,
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
