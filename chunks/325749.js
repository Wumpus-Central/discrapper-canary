t.d(n, { Z: () => Y }), t(388685);
var o = t(951288),
    r = t(647438),
    a = t(120356),
    i = t.n(a),
    c = t(442837),
    l = t(194983),
    u = t(28664),
    _ = t(755721),
    s = t(481060),
    d = t(13245),
    p = t(367907),
    f = t(753972),
    m = t(812206),
    h = t(322155),
    b = t(522474),
    v = t(788983),
    g = t(695346),
    C = t(390322),
    x = t(961048),
    I = t(871499),
    y = t(268353),
    P = t(786915),
    w = t(800965),
    O = t(107169),
    N = t(592125),
    j = t(271383),
    k = t(594174),
    Z = t(358085),
    S = t(51144),
    T = t(998502),
    B = t(228488),
    A = t(145597),
    W = t(317381),
    E = t(426419),
    z = t(513202),
    L = t(884338),
    U = t(617552),
    D = t(473179),
    R = t(932174),
    M = t(225639),
    F = t(981631),
    H = t(388032),
    G = t(896681);
let K = L.u8.SIZE_24;
function Y(e) {
    let { applicationId: n, channelId: t } = e,
        a = (0, c.e7)([m.Z], () => m.Z.getApplication(n)),
        Y = (0, c.e7)([W.ZP], () => W.ZP.getSelfEmbeddedActivities().get(n)),
        J = (0, c.e7)([N.Z], () => N.Z.getChannel(t)),
        V = g.Sb.useSetting(),
        q = (0, c.Wu)([j.ZP], () => {
            var e;
            return null == J || null == Y
                ? []
                : Array.from(null != (e = Y.userIds) ? e : []).map((e) => j.ZP.getMember(J.guild_id, e));
        }, [Y, J]),
        X = r.useMemo(() => {
            let e = new Map();
            return (
                q.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [q]),
        $ = r.useCallback(
            (e, n) => {
                var t;
                if (null == e || e === L.ag) return null;
                let r = X.get(e.id),
                    a = null != (t = null == r ? void 0 : r.nick) ? t : S.ZP.getName(e);
                return (0, o.jsx)(
                    u.u,
                    {
                        asContainer: !0,
                        text: a,
                        position: "bottom",
                        children: (0, o.jsx)(
                            "img",
                            {
                                src: e.getAvatarURL(null == n ? void 0 : n.guild_id, K),
                                alt: a,
                                className: G.avatar,
                            },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [X],
        ),
        Q = null == Y ? void 0 : Y.userIds,
        ee = (0, c.Wu)(
            [k.default],
            () =>
                Array.from(null != Q ? Q : [])
                    .map((e) => k.default.getUser(e))
                    .filter((e) => null != e),
            [Q],
        ),
        en = r.useCallback(() => {
            let e = (0, A.getPID)();
            d.Z.setInputLocked(!h.Z.isInputLocked(e), e);
        }, []),
        et = (0, E.P)(),
        {
            canStayOnTop: eo,
            popoutWindowAlwaysOnTop: er,
            handleStayOnTop: ea,
        } = (function () {
            let e = (0, c.e7)([b.Z], () => b.Z.getIsAlwaysOnTop(F.KJ3.ACTIVITY_POPOUT)),
                n = r.useCallback((e) => {
                    v.hY(F.KJ3.ACTIVITY_POPOUT, e);
                }, []);
            return {
                canStayOnTop: Z.isPlatformEmbedded && T.ZP.supportsFeature(F.eRX.POPOUT_WINDOWS),
                popoutWindowAlwaysOnTop: e,
                handleStayOnTop: n,
            };
        })(),
        ei = (0, M.y)(),
        {
            rootNode: ec,
            popoutWindow: el,
            toggleFullScreen: eu,
        } = (function () {
            let { popoutWindow: e, currentDocument: n, rootNode: t } = (0, R.Z)(),
                [o, a] = r.useState(!1),
                i = r.useCallback(() => {
                    null != t && o && (a(!1), (0, B.Pr)(t, n));
                }, [t, n, o]),
                c = r.useCallback(() => {
                    null != t && (o ? i() : (a(!0), (0, B.Dj)(t)));
                }, [t, o, i]),
                l = r.useCallback(() => {
                    null != t && !(0, B.rB)(t, n) && o && c();
                }, [t, n, o, c]);
            return (
                r.useEffect(
                    () => (
                        null == n || n.addEventListener(B.NO, l),
                        () => {
                            null == n || n.removeEventListener(B.NO, l);
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
        e_ = r.useRef(null);
    if (null == a || null == Y) return null;
    let es = (0, o.jsx)(f.Z, {
        application: a,
        size: 24,
        className: G.appIcon,
    });
    return (
        V &&
            (es = (0, o.jsx)(u.u, {
                asContainer: !0,
                text: Y.compositeInstanceId,
                position: "bottom",
                children: es,
            })),
        (0, o.jsx)(s.f6W, {
            theme: F.BRd.DARK,
            children: (e) =>
                (0, o.jsxs)("div", {
                    className: i()(G.container, e),
                    children: [
                        (0, o.jsxs)("div", {
                            className: i()(G.headerSection, G.headerSectionLeft),
                            children: [
                                es,
                                (0, o.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    color: "header-primary",
                                    className: G.applicationName,
                                    children: (0, o.jsx)(l.Z, { children: a.name }),
                                }),
                                (0, o.jsx)("div", {
                                    className: G.dotSpacer,
                                    children: (0, o.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: ".",
                                    }),
                                }),
                                (0, o.jsx)(L.ZP, {
                                    renderIcon: !1,
                                    users: ee,
                                    size: K,
                                    max: 6,
                                    renderUser: (e) => $(e, J),
                                }),
                            ],
                        }),
                        (0, o.jsxs)("div", {
                            className: i()(G.headerSection, G.headerSectionRight),
                            children: [
                                (0, o.jsx)("div", { className: G.fade }),
                                (0, o.jsxs)("div", {
                                    className: G.actionButtonsContainer,
                                    children: [
                                        (0, o.jsx)(P.Z, {
                                            appContext: F.IlC.POPOUT,
                                            applicationId: n,
                                            channel: J,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            iconClassName: G.inviteButtonIcon,
                                            size: _.zx.Sizes.TINY,
                                            look: _.zx.Looks.FILLED,
                                            buttonText: H.intl.string(H.t["6F9ivu"]),
                                            color: _.zx.Colors.TRANSPARENT,
                                        }),
                                        et
                                            ? (0, o.jsx)(I.Z, {
                                                  onClick: en,
                                                  iconComponent: s.epB,
                                                  label: H.intl.string(H.t.mseZsD),
                                              })
                                            : null,
                                        eo
                                            ? (0, o.jsx)(O.Z, {
                                                  popoutWindowAlwaysOnTop: er,
                                                  onToggleStayOnTop: ea,
                                              })
                                            : null,
                                        ei
                                            ? (0, o.jsx)(w.Z, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, p.yw)(F.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, U.Z)({
                                                              onConfirm: () => {
                                                                  z.Z.popInActivity();
                                                              },
                                                          });
                                                  },
                                              })
                                            : null,
                                        (0, o.jsx)(y.Z, {
                                            node: ec,
                                            guestWindow: el,
                                            onClick: eu,
                                        }),
                                        (0, o.jsx)(
                                            s.yRy,
                                            {
                                                targetElementRef: e_,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: n } = e;
                                                    return (0, o.jsx)(C.Z, {
                                                        children: (0, o.jsx)(D.Z, {
                                                            application: a,
                                                            channelId: t,
                                                            onClose: n,
                                                        }),
                                                    });
                                                },
                                                children: (e, n) => {
                                                    var t, o;
                                                    let { isShown: a } = n;
                                                    return (0, r.createElement)(
                                                        x.Z,
                                                        ((t = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    o = Object.keys(t);
                                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                                    (o = o.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(
                                                                            function (e) {
                                                                                return Object.getOwnPropertyDescriptor(
                                                                                    t,
                                                                                    e,
                                                                                ).enumerable;
                                                                            },
                                                                        ),
                                                                    )),
                                                                    o.forEach(function (n) {
                                                                        var o;
                                                                        (o = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: o,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0,
                                                                                  })
                                                                                : (e[n] = o);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, e)),
                                                        (o = o =
                                                            {
                                                                buttonRef: e_,
                                                                key: "more-options",
                                                                isActive: a,
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  t,
                                                                  Object.getOwnPropertyDescriptors(o),
                                                              )
                                                            : (function (e, n) {
                                                                  var t = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var o = Object.getOwnPropertySymbols(e);
                                                                      t.push.apply(t, o);
                                                                  }
                                                                  return t;
                                                              })(Object(o)).forEach(function (e) {
                                                                  Object.defineProperty(
                                                                      t,
                                                                      e,
                                                                      Object.getOwnPropertyDescriptor(o, e),
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
