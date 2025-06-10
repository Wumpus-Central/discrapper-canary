n.d(t, { Z: () => J }), n(388685);
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
    m = n(726721),
    b = n(610394),
    v = n(522474),
    O = n(788983),
    j = n(695346),
    y = n(390322),
    h = n(961048),
    P = n(871499),
    x = n(268353),
    g = n(786915),
    _ = n(800965),
    I = n(107169),
    Z = n(592125),
    C = n(271383),
    w = n(594174),
    S = n(358085),
    T = n(51144),
    k = n(998502),
    N = n(228488),
    E = n(145597),
    A = n(317381),
    U = n(426419),
    D = n(513202),
    B = n(884338),
    R = n(617552),
    L = n(473179),
    M = n(932174),
    Y = n(225639),
    z = n(981631),
    K = n(388032),
    W = n(951927);
let V = B.u.SIZE_24;
function J(e) {
    let { applicationId: t, channelId: n } = e,
        i = (0, a.e7)([p.Z], () => p.Z.getApplication(t)),
        J = (0, a.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities().get(t)),
        G = (0, a.e7)([Z.Z], () => Z.Z.getChannel(n)),
        H = j.Sb.useSetting(),
        F = (0, a.Wu)(
            [C.ZP],
            () => {
                var e;
                return null == G || null == J ? [] : Array.from(null != (e = J.userIds) ? e : []).map((e) => C.ZP.getMember(G.guild_id, e));
            },
            [J, G]
        ),
        X = o.useMemo(() => {
            let e = new Map();
            return (
                F.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [F]),
        q = o.useCallback(
            (e, t) => {
                var n;
                if (null == e) return null;
                let o = X.get(e.id),
                    i = null != (n = null == o ? void 0 : o.nick) ? n : T.ZP.getName(e);
                return (0, r.jsx)(
                    c.DY3,
                    {
                        text: i,
                        position: 'bottom',
                        children: (0, r.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == t ? void 0 : t.guild_id, V),
                                alt: i,
                                className: W.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [X]
        ),
        $ = null == J ? void 0 : J.userIds,
        Q = (0, a.Wu)(
            [w.default],
            () =>
                Array.from(null != $ ? $ : [])
                    .map((e) => w.default.getUser(e))
                    .filter((e) => null != e),
            [$]
        ),
        ee = m.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        et = o.useCallback(() => {
            let e = (0, E.getPID)();
            u.Z.setInputLocked(!b.ZP.isInputLocked(e), e);
        }, []),
        en = (0, U.P)(),
        {
            canStayOnTop: er,
            popoutWindowAlwaysOnTop: eo,
            handleStayOnTop: ei
        } = (function () {
            let e = (0, a.e7)([v.Z], () => v.Z.getIsAlwaysOnTop(z.KJ3.ACTIVITY_POPOUT)),
                t = o.useCallback((e) => {
                    O.hY(z.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: S.isPlatformEmbedded && k.ZP.supportsFeature(z.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: t
            };
        })(),
        el = (0, Y.y)({ location: 'Activity Popout Window Header' }),
        {
            rootNode: ea,
            popoutWindow: ec,
            toggleFullScreen: eu
        } = (function () {
            let { popoutWindow: e, currentDocument: t, rootNode: n } = (0, M.Z)(),
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
        es = o.useRef(null);
    if (null == i || null == J) return null;
    let ed = (0, r.jsx)(d.Z, {
        application: i,
        size: 24,
        className: W.appIcon
    });
    return (
        H &&
            (ed = (0, r.jsx)(c.DY3, {
                text: J.compositeInstanceId,
                position: 'bottom',
                children: ed
            })),
        (0, r.jsx)(c.f6W, {
            theme: z.BRd.DARK,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: l()(W.container, e),
                    children: [
                        (0, r.jsxs)('div', {
                            className: l()(W.headerSection, W.headerSectionLeft),
                            children: [
                                ed,
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    className: W.applicationName,
                                    children: (0, r.jsx)(f.Z, { children: i.name })
                                }),
                                (0, r.jsx)('div', {
                                    className: W.dotSpacer,
                                    children: (0, r.jsx)(c.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: '.'
                                    })
                                }),
                                (0, r.jsx)(B.Z, {
                                    renderIcon: !1,
                                    users: Q,
                                    size: V,
                                    max: 6,
                                    renderUser: (e) => q(e, G)
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: l()(W.headerSection, W.headerSectionRight),
                            children: [
                                (0, r.jsx)('div', { className: W.fade }),
                                (0, r.jsxs)('div', {
                                    className: W.actionButtonsContainer,
                                    children: [
                                        (0, r.jsx)(g.Z, {
                                            appContext: z.IlC.POPOUT,
                                            applicationId: t,
                                            channel: G,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            iconClassName: W.inviteButtonIcon,
                                            size: c.zxk.Sizes.TINY,
                                            look: c.zxk.Looks.FILLED,
                                            buttonText: K.intl.string(K.t['6F9ivr']),
                                            color: c.zxk.Colors.TRANSPARENT
                                        }),
                                        en
                                            ? (0, r.jsx)(P.Z, {
                                                  onClick: et,
                                                  iconComponent: c.epB,
                                                  label: K.intl.string(K.t.mseZsL)
                                              })
                                            : null,
                                        er
                                            ? (0, r.jsx)(I.Z, {
                                                  popoutWindowAlwaysOnTop: eo,
                                                  onToggleStayOnTop: ei
                                              })
                                            : null,
                                        el
                                            ? (0, r.jsx)(_.Z, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, s.yw)(z.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, R.Z)({
                                                              onConfirm: () => {
                                                                  D.Z.popInActivity();
                                                              }
                                                          });
                                                  }
                                              })
                                            : null,
                                        (0, r.jsx)(x.Z, {
                                            node: ea,
                                            guestWindow: ec,
                                            onClick: eu
                                        }),
                                        ee &&
                                            (0, r.jsx)(
                                                c.yRy,
                                                {
                                                    targetElementRef: es,
                                                    position: 'bottom',
                                                    renderPopout: (e) => {
                                                        let { closePopout: t } = e;
                                                        return (0, r.jsx)(y.Z, {
                                                            children: (0, r.jsx)(L.Z, {
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
                                                            h.Z,
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
                                                                    buttonRef: es,
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
