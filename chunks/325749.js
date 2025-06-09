n.d(t, { Z: () => G }), n(388685);
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    a = n(252258),
    c = n(442837),
    u = n(481060),
    s = n(13245),
    d = n(367907),
    p = n(753972),
    f = n(812206),
    m = n(111028),
    b = n(726721),
    v = n(610394),
    O = n(522474),
    j = n(788983),
    y = n(695346),
    h = n(390322),
    P = n(961048),
    x = n(871499),
    g = n(268353),
    _ = n(786915),
    C = n(800965),
    I = n(107169),
    Z = n(592125),
    w = n(271383),
    S = n(594174),
    T = n(358085),
    k = n(51144),
    N = n(998502),
    E = n(228488),
    A = n(145597),
    U = n(317381),
    D = n(426419),
    B = n(513202),
    R = n(884338),
    L = n(617552),
    Y = n(473179),
    M = n(932174),
    z = n(225639),
    K = n(981631),
    W = n(388032),
    V = n(951927);
let J = R.u.SIZE_24;
function G(e) {
    let { applicationId: t, channelId: n } = e,
        i = (0, c.e7)([f.Z], () => f.Z.getApplication(t)),
        G = (0, c.e7)([U.ZP], () => U.ZP.getSelfEmbeddedActivities().get(t)),
        H = (0, c.e7)([Z.Z], () => Z.Z.getChannel(n)),
        X = y.Sb.useSetting(),
        F = (0, c.Wu)(
            [w.ZP],
            () => {
                var e;
                return null == H || null == G ? [] : Array.from(null != (e = G.userIds) ? e : []).map((e) => w.ZP.getMember(H.guild_id, e));
            },
            [G, H]
        ),
        q = o.useMemo(() => {
            let e = new Map();
            return (
                F.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [F]),
        $ = o.useCallback(
            (e, t) => {
                var n;
                if (null == e) return null;
                let o = q.get(e.id),
                    i = null != (n = null == o ? void 0 : o.nick) ? n : k.ZP.getName(e);
                return (0, r.jsx)(
                    u.DY3,
                    {
                        text: i,
                        position: 'bottom',
                        children: (0, r.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == t ? void 0 : t.guild_id, J),
                                alt: i,
                                className: V.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [q]
        ),
        Q = null == G ? void 0 : G.userIds,
        ee = (0, c.Wu)(
            [S.default],
            () =>
                Array.from(null != Q ? Q : [])
                    .map((e) => S.default.getUser(e))
                    .filter((e) => null != e),
            [Q]
        ),
        et = b.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        en = o.useCallback(() => {
            let e = (0, A.getPID)();
            s.Z.setInputLocked(!v.ZP.isInputLocked(e), e);
        }, []),
        er = (0, D.P)(),
        {
            canStayOnTop: eo,
            popoutWindowAlwaysOnTop: ei,
            handleStayOnTop: el
        } = (function () {
            let e = (0, c.e7)([O.Z], () => O.Z.getIsAlwaysOnTop(K.KJ3.ACTIVITY_POPOUT)),
                t = o.useCallback((e) => {
                    j.hY(K.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: T.isPlatformEmbedded && N.ZP.supportsFeature(K.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: t
            };
        })(),
        ea = (0, z.y)({ location: 'Activity Popout Window Header' }),
        {
            rootNode: ec,
            popoutWindow: eu,
            toggleFullScreen: es
        } = (function () {
            let { popoutWindow: e, currentDocument: t, rootNode: n } = (0, M.Z)(),
                [r, i] = o.useState(!1),
                l = o.useCallback(() => {
                    null != n && r && (i(!1), (0, E.Pr)(n, t));
                }, [n, t, r]),
                a = o.useCallback(() => {
                    null != n && (r ? l() : (i(!0), (0, E.Dj)(n)));
                }, [n, r, l]),
                c = o.useCallback(() => {
                    null != n && !(0, E.rB)(n, t) && r && a();
                }, [n, t, r, a]);
            return (
                o.useEffect(
                    () => (
                        null == t || t.addEventListener(E.NO, c),
                        () => {
                            null == t || t.removeEventListener(E.NO, c);
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
        ed = o.useRef(null);
    if (null == i || null == G) return null;
    let ep = (0, r.jsx)(p.Z, {
        application: i,
        size: 24,
        className: V.appIcon
    });
    return (
        X &&
            (ep = (0, r.jsx)(u.DY3, {
                text: G.compositeInstanceId,
                position: 'bottom',
                children: ep
            })),
        (0, r.jsx)(u.f6W, {
            theme: K.BRd.DARK,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: l()(V.container, e),
                    children: [
                        (0, r.jsxs)('div', {
                            className: l()(V.headerSection, V.headerSectionLeft),
                            children: [
                                ep,
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    className: V.applicationName,
                                    children: (0, r.jsx)(m.Z, { children: i.name })
                                }),
                                (0, r.jsx)('div', {
                                    className: V.dotSpacer,
                                    children: (0, r.jsx)(u.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: '.'
                                    })
                                }),
                                (0, r.jsx)(R.Z, {
                                    renderIcon: !1,
                                    users: ee,
                                    size: J,
                                    max: 6,
                                    renderUser: (e) => $(e, H)
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: l()(V.headerSection, V.headerSectionRight),
                            children: [
                                (0, r.jsx)('div', { className: V.fade }),
                                (0, r.jsxs)('div', {
                                    className: V.actionButtonsContainer,
                                    children: [
                                        (0, r.jsx)(_.Z, {
                                            appContext: K.IlC.POPOUT,
                                            applicationId: t,
                                            channel: H,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isContextlessActivity: G.location.kind === a.E.CONTEXTLESS,
                                            iconClassName: V.inviteButtonIcon,
                                            size: u.zxk.Sizes.TINY,
                                            look: u.zxk.Looks.FILLED,
                                            buttonText: W.intl.string(W.t['6F9ivr']),
                                            color: u.zxk.Colors.TRANSPARENT
                                        }),
                                        er
                                            ? (0, r.jsx)(x.Z, {
                                                  onClick: en,
                                                  iconComponent: u.epB,
                                                  label: W.intl.string(W.t.mseZsL)
                                              })
                                            : null,
                                        eo
                                            ? (0, r.jsx)(I.Z, {
                                                  popoutWindowAlwaysOnTop: ei,
                                                  onToggleStayOnTop: el
                                              })
                                            : null,
                                        ea
                                            ? (0, r.jsx)(C.Z, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, d.yw)(K.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, L.Z)({
                                                              onConfirm: () => {
                                                                  B.Z.popInActivity();
                                                              }
                                                          });
                                                  }
                                              })
                                            : null,
                                        (0, r.jsx)(g.Z, {
                                            node: ec,
                                            guestWindow: eu,
                                            onClick: es
                                        }),
                                        et &&
                                            (0, r.jsx)(
                                                u.yRy,
                                                {
                                                    targetElementRef: ed,
                                                    position: 'bottom',
                                                    renderPopout: (e) => {
                                                        let { closePopout: t } = e;
                                                        return (0, r.jsx)(h.Z, {
                                                            children: (0, r.jsx)(Y.Z, {
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
                                                            P.Z,
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
                                                                    buttonRef: ed,
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
