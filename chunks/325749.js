t.d(n, { Z: () => Y }), t(388685);
var o = t(54381),
    r = t(473749),
    a = t(120356),
    i = t.n(a),
    c = t(442837),
    l = t(194983),
    _ = t(28664),
    u = t(755721),
    d = t(481060),
    s = t(13245),
    p = t(367907),
    f = t(753972),
    m = t(812206),
    h = t(322155),
    b = t(522474),
    v = t(788983),
    g = t(695346),
    C = t(390322),
    x = t(961048),
    y = t(871499),
    I = t(268353),
    P = t(786915),
    w = t(800965),
    O = t(107169),
    N = t(592125),
    j = t(271383),
    k = t(594174),
    Z = t(358085),
    S = t(51144),
    T = t(998502),
    A = t(228488),
    B = t(145597),
    E = t(317381),
    W = t(426419),
    z = t(513202),
    L = t(884338),
    R = t(617552),
    U = t(473179),
    D = t(932174),
    M = t(225639),
    F = t(981631),
    H = t(388032),
    G = t(896681);
let K = L.u8.SIZE_24;
function Y(e) {
    let { applicationId: n, channelId: t } = e,
        a = (0, c.e7)([m.Z], () => m.Z.getApplication(n)),
        Y = (0, c.e7)([E.ZP], () => E.ZP.getSelfEmbeddedActivities().get(n)),
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
                    _.u,
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
            let e = (0, B.getPID)();
            s.Z.setInputLocked(!h.Z.isInputLocked(e), e);
        }, []),
        et = (0, W.P)(),
        {
            canStayOnTop: eo,
            popoutWindowAlwaysOnTop: er,
            handleStayOnTop: ea,
        } = (function () {
            let e = (0, c.e7)([b.Z], () => b.Z.getIsAlwaysOnTop(F.KJ3.ACTIVITY_POPOUT)),
                n = r.useCallback((e) => {
                    v.setAlwaysOnTop(F.KJ3.ACTIVITY_POPOUT, e);
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
            toggleFullScreen: e_,
        } = (function () {
            let { popoutWindow: e, currentDocument: n, rootNode: t } = (0, D.Z)(),
                [o, a] = r.useState(!1),
                i = r.useCallback(() => {
                    null != t && o && (a(!1), (0, A.Pr)(t, n));
                }, [t, n, o]),
                c = r.useCallback(() => {
                    null != t && (o ? i() : (a(!0), (0, A.Dj)(t)));
                }, [t, o, i]),
                l = r.useCallback(() => {
                    null != t && !(0, A.rB)(t, n) && o && c();
                }, [t, n, o, c]);
            return (
                r.useEffect(
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
        eu = r.useRef(null);
    if (null == a || null == Y) return null;
    let ed = (0, o.jsx)(f.Z, {
        application: a,
        size: 24,
        className: G.appIcon,
    });
    return (
        V &&
            (ed = (0, o.jsx)(_.u, {
                asContainer: !0,
                text: Y.compositeInstanceId,
                position: "bottom",
                children: ed,
            })),
        (0, o.jsx)(d.f6W, {
            theme: F.BRd.DARK,
            children: (e) =>
                (0, o.jsxs)("div", {
                    className: i()(G.container, e),
                    children: [
                        (0, o.jsxs)("div", {
                            className: i()(G.headerSection, G.headerSectionLeft),
                            children: [
                                ed,
                                (0, o.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "header-primary",
                                    className: G.applicationName,
                                    children: (0, o.jsx)(l.Z, { children: a.name }),
                                }),
                                (0, o.jsx)("div", {
                                    className: G.dotSpacer,
                                    children: (0, o.jsx)(d.Text, {
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
                                            size: u.zx.Sizes.TINY,
                                            look: u.zx.Looks.FILLED,
                                            buttonText: H.intl.string(H.t["6F9ivu"]),
                                            color: u.zx.Colors.TRANSPARENT,
                                        }),
                                        et
                                            ? (0, o.jsx)(y.Z, {
                                                  onClick: en,
                                                  iconComponent: d.epB,
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
                                                          (0, R.Z)({
                                                              onConfirm: () => {
                                                                  z.Z.popInActivity();
                                                              },
                                                          });
                                                  },
                                              })
                                            : null,
                                        (0, o.jsx)(I.Z, {
                                            node: ec,
                                            guestWindow: el,
                                            onClick: e_,
                                        }),
                                        (0, o.jsx)(
                                            d.yRy,
                                            {
                                                targetElementRef: eu,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: n } = e;
                                                    return (0, o.jsx)(C.Z, {
                                                        children: (0, o.jsx)(U.Z, {
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
                                                                buttonRef: eu,
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
