t.d(n, {
    Z: () => V,
    d: () => J,
}),
    t(388685);
var a = t(54381),
    o = t(473749),
    i = t(120356),
    r = t.n(i),
    c = t(442837),
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
    Z = t(107169),
    k = t(592125),
    j = t(271383),
    O = t(594174),
    N = t(358085),
    S = t(51144),
    T = t(998502),
    A = t(228488),
    B = t(145597),
    E = t(566620),
    W = t(317381),
    z = t(426419),
    L = t(513202),
    R = t(884338),
    D = t(617552),
    U = t(473179),
    F = t(932174),
    M = t(225639),
    H = t(981631),
    K = t(388032),
    G = t(153438);
let Y = R.u8.SIZE_24;
function J(e) {
    let {
            hasActivity: n,
            applicationId: t,
            channelId: i,
            compositeInstanceId: E,
            userIds: W,
            isRichPresenceInvite: L,
            onConfirmClosePopout: J,
        } = e,
        V = (0, c.e7)([m.Z], () => m.Z.getApplication(t)),
        q = (0, c.e7)([k.Z], () => k.Z.getChannel(i)),
        X = C.Sb.useSetting(),
        $ = (0, c.Wu)(
            [j.ZP],
            () =>
                null == q || null == W ? [] : Array.from(null != W ? W : []).map((e) => j.ZP.getMember(q.guild_id, e)),
            [q, W],
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
                if (null == e || e === R.ag) return null;
                let o = Q.get(e.id),
                    i = null != (t = null == o ? void 0 : o.nick) ? t : S.ZP.getName(e);
                return (0, a.jsx)(
                    d.u,
                    {
                        asContainer: !0,
                        text: i,
                        position: "bottom",
                        children: (0, a.jsx)(
                            "img",
                            {
                                src: e.getAvatarURL(null == n ? void 0 : n.guild_id, Y),
                                alt: i,
                                className: G.avatar,
                            },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [Q],
        ),
        en = (0, c.Wu)(
            [O.default],
            () =>
                Array.from(null != W ? W : [])
                    .map((e) => O.default.getUser(e))
                    .filter((e) => null != e),
            [W],
        ),
        et = o.useCallback(() => {
            let e = (0, B.getPID)();
            b.Z.setInputLocked(!h.Z.isInputLocked(e), e);
        }, []),
        ea = (0, z.P)(),
        {
            canStayOnTop: eo,
            popoutWindowAlwaysOnTop: ei,
            handleStayOnTop: er,
        } = (function () {
            let e = (0, c.e7)([_.Z], () => _.Z.getIsAlwaysOnTop(H.KJ3.ACTIVITY_POPOUT)),
                n = o.useCallback((e) => {
                    v.setAlwaysOnTop(H.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: N.isPlatformEmbedded && T.ZP.supportsFeature(H.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: n,
            };
        })(),
        ec = (0, M.y)(),
        {
            rootNode: el,
            popoutWindow: ed,
            toggleFullScreen: eu,
        } = (function () {
            let { popoutWindow: e, currentDocument: n, rootNode: t } = (0, F.Z)(),
                [a, i] = o.useState(!1),
                r = o.useCallback(() => {
                    null != t && a && (i(!1), (0, A.Pr)(t, n));
                }, [t, n, a]),
                c = o.useCallback(() => {
                    null != t && (a ? r() : (i(!0), (0, A.Dj)(t)));
                }, [t, a, r]),
                l = o.useCallback(() => {
                    null != t && !(0, A.rB)(t, n) && a && c();
                }, [t, n, a, c]);
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
                    toggleFullScreen: c,
                }
            );
        })(),
        es = o.useRef(null);
    if (null == V || !n) return null;
    let eb = (0, a.jsx)(p.Z, {
        application: V,
        size: 24,
        className: G.appIcon,
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
            theme: H.BRd.DARK,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: r()(G.container, e),
                    children: [
                        (0, a.jsxs)("div", {
                            className: r()(G.headerSection, G.headerSectionLeft),
                            children: [
                                eb,
                                (0, a.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: G.applicationName,
                                    children: (0, a.jsx)(l.Z, { children: V.name }),
                                }),
                                en.length > 0
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)("div", {
                                                  className: G.dotSpacer,
                                                  children: (0, a.jsx)(s.Text, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, a.jsx)(R.ZP, {
                                                  renderIcon: !1,
                                                  users: en,
                                                  size: Y,
                                                  max: 6,
                                                  renderUser: (e) => ee(e, q),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: r()(G.headerSection, G.headerSectionRight),
                            children: [
                                (0, a.jsx)("div", { className: G.fade }),
                                (0, a.jsxs)("div", {
                                    className: G.actionButtonsContainer,
                                    children: [
                                        (0, a.jsx)(P.Z, {
                                            appContext: H.IlC.POPOUT,
                                            applicationId: t,
                                            channel: q,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: L,
                                            iconClassName: G.inviteButtonIcon,
                                            size: u.zx.Sizes.TINY,
                                            look: u.zx.Looks.FILLED,
                                            buttonText: K.intl.string(K.t["6F9ivu"]),
                                            color: u.zx.Colors.TRANSPARENT,
                                        }),
                                        ea
                                            ? (0, a.jsx)(y.Z, {
                                                  onClick: et,
                                                  iconComponent: s.epB,
                                                  label: K.intl.string(K.t.mseZsD),
                                              })
                                            : null,
                                        eo
                                            ? (0, a.jsx)(Z.Z, {
                                                  popoutWindowAlwaysOnTop: ei,
                                                  onToggleStayOnTop: er,
                                              })
                                            : null,
                                        ec
                                            ? (0, a.jsx)(w.Z, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, f.yw)(H.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, D.Z)({ onConfirm: J });
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
                                                        children: (0, a.jsx)(U.Z, {
                                                            application: V,
                                                            channelId: i,
                                                            onClose: n,
                                                        }),
                                                    });
                                                },
                                                children: (e, n) => {
                                                    var t, a;
                                                    let { isShown: i } = n;
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
                                                                isActive: i,
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
function V(e) {
    let { applicationId: n, channelId: t } = e,
        i = (0, c.e7)([W.ZP], () => W.ZP.getSelfEmbeddedActivities().get(n)),
        r = o.useCallback(async () => {
            await (0, E.nJ)(n, null != t ? t : null), L.Z.popInActivity();
        }, [n, t]);
    return (0, a.jsx)(J, {
        hasActivity: null != i,
        applicationId: n,
        channelId: t,
        compositeInstanceId: null == i ? void 0 : i.compositeInstanceId,
        userIds: null == i ? void 0 : i.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: r,
    });
}
