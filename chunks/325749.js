t.d(n, { Z: () => G }), t(388685);
var r = t(54381),
    o = t(473749),
    i = t(120356),
    l = t.n(i),
    a = t(442837),
    c = t(194983),
    u = t(28664),
    s = t(755721),
    d = t(481060),
    p = t(13245),
    f = t(367907),
    m = t(753972),
    v = t(812206),
    b = t(322155),
    h = t(522474),
    O = t(788983),
    j = t(695346),
    x = t(390322),
    P = t(961048),
    g = t(871499),
    I = t(268353),
    y = t(786915),
    C = t(800965),
    Z = t(107169),
    _ = t(592125),
    S = t(271383),
    T = t(594174),
    w = t(358085),
    N = t(51144),
    A = t(998502),
    k = t(228488),
    E = t(145597),
    R = t(317381),
    U = t(426419),
    B = t(513202),
    D = t(884338),
    L = t(617552),
    z = t(473179),
    K = t(932174),
    W = t(225639),
    Y = t(981631),
    M = t(388032),
    J = t(896681);
let V = D.u8.SIZE_24;
function G(e) {
    let { applicationId: n, channelId: t } = e,
        i = (0, a.e7)([v.Z], () => v.Z.getApplication(n)),
        G = (0, a.e7)([R.ZP], () => R.ZP.getSelfEmbeddedActivities().get(n)),
        F = (0, a.e7)([_.Z], () => _.Z.getChannel(t)),
        H = j.Sb.useSetting(),
        q = (0, a.Wu)([S.ZP], () => {
            var e;
            return null == F || null == G
                ? []
                : Array.from(null != (e = G.userIds) ? e : []).map((e) => S.ZP.getMember(F.guild_id, e));
        }, [G, F]),
        X = o.useMemo(() => {
            let e = new Map();
            return (
                q.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [q]),
        $ = o.useCallback(
            (e, n) => {
                var t;
                if (null == e || e === D.ag) return null;
                let o = X.get(e.id),
                    i = null != (t = null == o ? void 0 : o.nick) ? t : N.ZP.getName(e);
                return (0, r.jsx)(
                    u.u,
                    {
                        asContainer: !0,
                        text: i,
                        position: "bottom",
                        children: (0, r.jsx)(
                            "img",
                            {
                                src: e.getAvatarURL(null == n ? void 0 : n.guild_id, V),
                                alt: i,
                                className: J.avatar,
                            },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [X],
        ),
        Q = null == G ? void 0 : G.userIds,
        ee = (0, a.Wu)(
            [T.default],
            () =>
                Array.from(null != Q ? Q : [])
                    .map((e) => T.default.getUser(e))
                    .filter((e) => null != e),
            [Q],
        ),
        en = o.useCallback(() => {
            let e = (0, E.getPID)();
            p.Z.setInputLocked(!b.Z.isInputLocked(e), e);
        }, []),
        et = (0, U.P)(),
        {
            canStayOnTop: er,
            popoutWindowAlwaysOnTop: eo,
            handleStayOnTop: ei,
        } = (function () {
            let e = (0, a.e7)([h.Z], () => h.Z.getIsAlwaysOnTop(Y.KJ3.ACTIVITY_POPOUT)),
                n = o.useCallback((e) => {
                    O.hY(Y.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: w.isPlatformEmbedded && A.ZP.supportsFeature(Y.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: n,
            };
        })(),
        el = (0, W.y)(),
        {
            rootNode: ea,
            popoutWindow: ec,
            toggleFullScreen: eu,
        } = (function () {
            let { popoutWindow: e, currentDocument: n, rootNode: t } = (0, K.Z)(),
                [r, i] = o.useState(!1),
                l = o.useCallback(() => {
                    null != t && r && (i(!1), (0, k.Pr)(t, n));
                }, [t, n, r]),
                a = o.useCallback(() => {
                    null != t && (r ? l() : (i(!0), (0, k.Dj)(t)));
                }, [t, r, l]),
                c = o.useCallback(() => {
                    null != t && !(0, k.rB)(t, n) && r && a();
                }, [t, n, r, a]);
            return (
                o.useEffect(
                    () => (
                        null == n || n.addEventListener(k.NO, c),
                        () => {
                            null == n || n.removeEventListener(k.NO, c);
                        }
                    ),
                    [n, c],
                ),
                {
                    rootNode: t,
                    popoutWindow: e,
                    toggleFullScreen: a,
                }
            );
        })(),
        es = o.useRef(null);
    if (null == i || null == G) return null;
    let ed = (0, r.jsx)(m.Z, {
        application: i,
        size: 24,
        className: J.appIcon,
    });
    return (
        H &&
            (ed = (0, r.jsx)(u.u, {
                asContainer: !0,
                text: G.compositeInstanceId,
                position: "bottom",
                children: ed,
            })),
        (0, r.jsx)(d.f6W, {
            theme: Y.BRd.DARK,
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: l()(J.container, e),
                    children: [
                        (0, r.jsxs)("div", {
                            className: l()(J.headerSection, J.headerSectionLeft),
                            children: [
                                ed,
                                (0, r.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "header-primary",
                                    className: J.applicationName,
                                    children: (0, r.jsx)(c.Z, { children: i.name }),
                                }),
                                (0, r.jsx)("div", {
                                    className: J.dotSpacer,
                                    children: (0, r.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: ".",
                                    }),
                                }),
                                (0, r.jsx)(D.ZP, {
                                    renderIcon: !1,
                                    users: ee,
                                    size: V,
                                    max: 6,
                                    renderUser: (e) => $(e, F),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: l()(J.headerSection, J.headerSectionRight),
                            children: [
                                (0, r.jsx)("div", { className: J.fade }),
                                (0, r.jsxs)("div", {
                                    className: J.actionButtonsContainer,
                                    children: [
                                        (0, r.jsx)(y.Z, {
                                            appContext: Y.IlC.POPOUT,
                                            applicationId: n,
                                            channel: F,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            iconClassName: J.inviteButtonIcon,
                                            size: s.zx.Sizes.TINY,
                                            look: s.zx.Looks.FILLED,
                                            buttonText: M.intl.string(M.t["6F9ivu"]),
                                            color: s.zx.Colors.TRANSPARENT,
                                        }),
                                        et
                                            ? (0, r.jsx)(g.Z, {
                                                  onClick: en,
                                                  iconComponent: d.epB,
                                                  label: M.intl.string(M.t.mseZsD),
                                              })
                                            : null,
                                        er
                                            ? (0, r.jsx)(Z.Z, {
                                                  popoutWindowAlwaysOnTop: eo,
                                                  onToggleStayOnTop: ei,
                                              })
                                            : null,
                                        el
                                            ? (0, r.jsx)(C.Z, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, f.yw)(Y.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, L.Z)({
                                                              onConfirm: () => {
                                                                  B.Z.popInActivity();
                                                              },
                                                          });
                                                  },
                                              })
                                            : null,
                                        (0, r.jsx)(I.Z, {
                                            node: ea,
                                            guestWindow: ec,
                                            onClick: eu,
                                        }),
                                        (0, r.jsx)(
                                            d.yRy,
                                            {
                                                targetElementRef: es,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: n } = e;
                                                    return (0, r.jsx)(x.Z, {
                                                        children: (0, r.jsx)(z.Z, {
                                                            application: i,
                                                            channelId: t,
                                                            onClose: n,
                                                        }),
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
                                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                                    (r = r.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(
                                                                            function (e) {
                                                                                return Object.getOwnPropertyDescriptor(
                                                                                    t,
                                                                                    e,
                                                                                ).enumerable;
                                                                            },
                                                                        ),
                                                                    )),
                                                                    r.forEach(function (n) {
                                                                        var r;
                                                                        (r = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: r,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0,
                                                                                  })
                                                                                : (e[n] = r);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, e)),
                                                        (r = r =
                                                            {
                                                                buttonRef: es,
                                                                key: "more-options",
                                                                isActive: i,
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  t,
                                                                  Object.getOwnPropertyDescriptors(r),
                                                              )
                                                            : (function (e, n) {
                                                                  var t = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      t.push.apply(t, r);
                                                                  }
                                                                  return t;
                                                              })(Object(r)).forEach(function (e) {
                                                                  Object.defineProperty(
                                                                      t,
                                                                      e,
                                                                      Object.getOwnPropertyDescriptor(r, e),
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
