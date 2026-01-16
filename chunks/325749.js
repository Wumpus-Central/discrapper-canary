t.d(n, {
    Z: () => J,
    d: () => Y,
}),
    t(388685);
var a = t(54381),
    o = t(473749),
    r = t(120356),
    c = t.n(r),
    i = t(442837),
    l = t(194983),
    d = t(28664),
    u = t(755721),
    s = t(481060),
    b = t(13245),
    f = t(367907),
    p = t(753972),
    m = t(812206),
    h = t(322155),
    _ = t(522474),
    v = t(788983),
    C = t(695346),
    g = t(390322),
    x = t(961048),
    y = t(871499),
    I = t(268353),
    P = t(786915),
    w = t(800965),
    j = t(107169),
    O = t(592125),
    k = t(271383),
    Z = t(594174),
    N = t(358085),
    S = t(51144),
    T = t(998502),
    A = t(228488),
    B = t(145597),
    E = t(317381),
    W = t(426419),
    z = t(513202),
    L = t(884338),
    R = t(617552),
    D = t(473179),
    U = t(932174),
    F = t(225639),
    M = t(981631),
    H = t(388032),
    K = t(153438);
let G = L.u8.SIZE_24;
function Y(e) {
    let {
            hasActivity: n,
            applicationId: t,
            channelId: r,
            compositeInstanceId: E,
            userIds: z,
            isRichPresenceInvite: Y,
            onConfirmClosePopout: J,
        } = e,
        V = (0, i.e7)([m.Z], () => m.Z.getApplication(t)),
        q = (0, i.e7)([O.Z], () => O.Z.getChannel(r)),
        X = C.Sb.useSetting(),
        $ = (0, i.Wu)(
            [k.ZP],
            () =>
                null == q || null == z ? [] : Array.from(null != z ? z : []).map((e) => k.ZP.getMember(q.guild_id, e)),
            [q, z],
        ),
        Q = o.useMemo(() => {
            let e = new Map();
            return (
                $.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [$]),
        ee = o.useCallback(
            (e, n) => {
                var t;
                if (null == e || e === L.ag) return null;
                let o = Q.get(e.id),
                    r = null != (t = null == o ? void 0 : o.nick) ? t : S.ZP.getName(e);
                return (0, a.jsx)(
                    d.u,
                    {
                        asContainer: !0,
                        text: r,
                        position: "bottom",
                        children: (0, a.jsx)(
                            "img",
                            {
                                src: e.getAvatarURL(null == n ? void 0 : n.guild_id, G),
                                alt: r,
                                className: K.avatar,
                            },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [Q],
        ),
        en = (0, i.Wu)(
            [Z.default],
            () =>
                Array.from(null != z ? z : [])
                    .map((e) => Z.default.getUser(e))
                    .filter((e) => null != e),
            [z],
        ),
        et = o.useCallback(() => {
            let e = (0, B.getPID)();
            b.Z.setInputLocked(!h.Z.isInputLocked(e), e);
        }, []),
        ea = (0, W.P)(),
        {
            canStayOnTop: eo,
            popoutWindowAlwaysOnTop: er,
            handleStayOnTop: ec,
        } = (function () {
            let e = (0, i.e7)([_.Z], () => _.Z.getIsAlwaysOnTop(M.KJ3.ACTIVITY_POPOUT)),
                n = o.useCallback((e) => {
                    v.setAlwaysOnTop(M.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: N.isPlatformEmbedded && T.ZP.supportsFeature(M.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: n,
            };
        })(),
        ei = (0, F.y)(),
        {
            rootNode: el,
            popoutWindow: ed,
            toggleFullScreen: eu,
        } = (function () {
            let { popoutWindow: e, currentDocument: n, rootNode: t } = (0, U.Z)(),
                [a, r] = o.useState(!1),
                c = o.useCallback(() => {
                    null != t && a && (r(!1), (0, A.Pr)(t, n));
                }, [t, n, a]),
                i = o.useCallback(() => {
                    null != t && (a ? c() : (r(!0), (0, A.Dj)(t)));
                }, [t, a, c]),
                l = o.useCallback(() => {
                    null != t && !(0, A.rB)(t, n) && a && i();
                }, [t, n, a, i]);
            return (
                o.useEffect(
                    () => (
                        null == n || n.addEventListener(A.NO, l),
                        () => {
                            null == n || n.removeEventListener(A.NO, l);
                        }
                    ),
                    [n, l],
                ),
                {
                    rootNode: t,
                    popoutWindow: e,
                    toggleFullScreen: i,
                }
            );
        })(),
        es = o.useRef(null);
    if (null == V || !n) return null;
    let eb = (0, a.jsx)(p.Z, {
        application: V,
        size: 24,
        className: K.appIcon,
    });
    return (
        X &&
            null != E &&
            (eb = (0, a.jsx)(d.u, {
                asContainer: !0,
                text: E,
                position: "bottom",
                children: eb,
            })),
        (0, a.jsx)(s.f6W, {
            theme: M.BRd.DARK,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: c()(K.container, e),
                    children: [
                        (0, a.jsxs)("div", {
                            className: c()(K.headerSection, K.headerSectionLeft),
                            children: [
                                eb,
                                (0, a.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: K.applicationName,
                                    children: (0, a.jsx)(l.Z, { children: V.name }),
                                }),
                                en.length > 0
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)("div", {
                                                  className: K.dotSpacer,
                                                  children: (0, a.jsx)(s.Text, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, a.jsx)(L.ZP, {
                                                  renderIcon: !1,
                                                  users: en,
                                                  size: G,
                                                  max: 6,
                                                  renderUser: (e) => ee(e, q),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: c()(K.headerSection, K.headerSectionRight),
                            children: [
                                (0, a.jsx)("div", { className: K.fade }),
                                (0, a.jsxs)("div", {
                                    className: K.actionButtonsContainer,
                                    children: [
                                        (0, a.jsx)(P.Z, {
                                            appContext: M.IlC.POPOUT,
                                            applicationId: t,
                                            channel: q,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: Y,
                                            iconClassName: K.inviteButtonIcon,
                                            size: u.zx.Sizes.TINY,
                                            look: u.zx.Looks.FILLED,
                                            buttonText: H.intl.string(H.t["6F9ivu"]),
                                            color: u.zx.Colors.TRANSPARENT,
                                        }),
                                        ea
                                            ? (0, a.jsx)(y.Z, {
                                                  onClick: et,
                                                  iconComponent: s.epB,
                                                  label: H.intl.string(H.t.mseZsD),
                                              })
                                            : null,
                                        eo
                                            ? (0, a.jsx)(j.Z, {
                                                  popoutWindowAlwaysOnTop: er,
                                                  onToggleStayOnTop: ec,
                                              })
                                            : null,
                                        ei
                                            ? (0, a.jsx)(w.Z, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, f.yw)(M.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, R.Z)({ onConfirm: J });
                                                  },
                                              })
                                            : null,
                                        (0, a.jsx)(I.Z, {
                                            node: el,
                                            guestWindow: ed,
                                            onClick: eu,
                                        }),
                                        (0, a.jsx)(
                                            s.yRy,
                                            {
                                                targetElementRef: es,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: n } = e;
                                                    return (0, a.jsx)(g.Z, {
                                                        children: (0, a.jsx)(D.Z, {
                                                            application: V,
                                                            channelId: r,
                                                            onClose: n,
                                                        }),
                                                    });
                                                },
                                                children: (e, n) => {
                                                    var t, a;
                                                    let { isShown: r } = n;
                                                    return (0, o.createElement)(
                                                        x.Z,
                                                        ((t = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    a = Object.keys(t);
                                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                                    (a = a.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(
                                                                            function (e) {
                                                                                return Object.getOwnPropertyDescriptor(
                                                                                    t,
                                                                                    e,
                                                                                ).enumerable;
                                                                            },
                                                                        ),
                                                                    )),
                                                                    a.forEach(function (n) {
                                                                        var a;
                                                                        (a = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: a,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0,
                                                                                  })
                                                                                : (e[n] = a);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, e)),
                                                        (a = a =
                                                            {
                                                                buttonRef: es,
                                                                key: "more-options",
                                                                isActive: r,
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  t,
                                                                  Object.getOwnPropertyDescriptors(a),
                                                              )
                                                            : (function (e, n) {
                                                                  var t = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var a = Object.getOwnPropertySymbols(e);
                                                                      t.push.apply(t, a);
                                                                  }
                                                                  return t;
                                                              })(Object(a)).forEach(function (e) {
                                                                  Object.defineProperty(
                                                                      t,
                                                                      e,
                                                                      Object.getOwnPropertyDescriptor(a, e),
                                                                  );
                                                              }),
                                                        t),
                                                    );
                                                },
                                            },
                                            "more-options-popout",
                                        ),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        })
    );
}
function J(e) {
    let { applicationId: n, channelId: t } = e,
        r = (0, i.e7)([E.ZP], () => E.ZP.getSelfEmbeddedActivities().get(n)),
        c = o.useCallback(() => {
            z.Z.popInActivity();
        }, []);
    return (0, a.jsx)(Y, {
        hasActivity: null != r,
        applicationId: n,
        channelId: t,
        compositeInstanceId: null == r ? void 0 : r.compositeInstanceId,
        userIds: null == r ? void 0 : r.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: c,
    });
}
