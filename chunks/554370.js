n.d(t, { Z: () => ea }), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(952265),
    u = n(481060),
    c = n(239091),
    d = n(13245),
    h = n(493773),
    p = n(100527),
    f = n(906732),
    m = n(70097),
    g = n(74299),
    y = n(199902),
    O = n(592125),
    v = n(430824),
    E = n(131951),
    S = n(944486),
    b = n(556296),
    x = n(808506),
    j = n(237997),
    I = n(451478),
    C = n(585483),
    Z = n(358085),
    N = n(13140),
    w = n(145597),
    T = n(830917),
    _ = n(111628),
    P = n(837268),
    D = n(32300),
    A = n(681603),
    R = n(915614),
    k = n(268861),
    L = n(690336),
    M = n(333031),
    V = n(371651),
    z = n(624864),
    U = n(610394),
    W = n(388627),
    G = n(319414),
    F = n(561064),
    H = n(987650),
    B = n(757744),
    Y = n(981631),
    Q = n(977594);
let K = !Z.isPlatformEmbedded && !1,
    X = K
        ? (0, i.jsx)(m.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: Q.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null,
    q = null;
function J(e) {
    e.preventDefault();
}
function $(e) {
    (0, c.jW)(e, async () => {
        let { default: e } = await n.e("17610").then(n.bind(n, 385620));
        return (t) => {
            var n, r;
            return (0, i.jsx)(
                e,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, t)),
                (r = r =
                    {
                        layoutId: B.$S,
                        version: B.HN,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                n),
            );
        };
    });
}
let ee = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(u.P3F, {
            className: o()(Q.overlayBackground, {
                [Q.overlayActive]: !r,
                [Q.overlayLocked]: r,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === Y.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: r
                ? null
                : (0, i.jsx)(M.Z, {
                      className: Q.closeContainer,
                      children: (0, i.jsx)(R.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: u.Uz9,
                      }),
                  }),
        });
    }),
    et = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(M.Z, {
                  className: Q.closeContainer,
                  children: (0, i.jsx)(R.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, w.getPID)()),
                      IconComponent: u.d$P,
                  }),
              })
            : null;
    });
function en() {
    d.Z.setInputLocked(!0, (0, w.getPID)());
}
function ei() {
    d.Z.setFocusedPID(w.DEV_PID, null);
}
function er() {
    d.Z.setFocusedPID(null, null);
}
function el(e) {
    let t = U.ZP.isInputLocked((0, w.getPID)());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? C.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && C.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function eo() {
    return (0, a.e7)([_.Z], () => _.Z.hasRenderDebugMode(P.GO.WindowContainer))
        ? (0, i.jsx)("div", { className: Q.windowContainerDebug })
        : null;
}
function ea(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, F.Z)(),
        {
            locked: l,
            focused: c,
            incompatibleApp: m,
            hasZeroSizeDimension: Z,
            keybind: _,
        } = (0, a.cj)([U.ZP, j.default, I.Z, b.ZP], () => {
            let e = I.Z.windowSize((0, T.ZY)(n)),
                t = b.ZP.getOverlayKeybind(),
                i = (0, w.getPID)();
            return {
                locked: U.ZP.isInputLocked(i),
                focused: U.ZP.isFocused(i),
                incompatibleApp: j.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, N.BB)(t.shortcut, !0) : "???",
            };
        }, [n]),
        { analyticsLocations: P } = (0, f.ZP)(p.Z.OVERLAY);
    (0, h.ZP)(() => {
        (0, D.F3)();
    }),
        (function (e, t) {
            let n = r.useRef({
                mount: e,
                unmount: t,
            });
            r.useEffect(() => {
                n.current = {
                    mount: e,
                    unmount: t,
                };
            }),
                r.useEffect(
                    () => (
                        n.current.mount(),
                        () => {
                            n.current.unmount();
                        }
                    ),
                    [],
                );
        })(
            () => {
                d.Z.overlayReady((0, w.getPID)()),
                    n.addEventListener("keydown", el),
                    n.addEventListener("keyup", el),
                    K &&
                        (n.document.hasFocus() && d.Z.setFocusedPID(w.DEV_PID, null),
                        n.addEventListener("focus", ei),
                        n.addEventListener("blur", er));
            },
            () => {
                n.removeEventListener("keydown", el),
                    n.removeEventListener("keyup", el),
                    K && (n.removeEventListener("focus", ei), n.removeEventListener("blur", er));
            },
        );
    let R = r.useRef(null);
    return (
        (0, h.ZP)(() => {
            var e;
            let t = (0, W.pL)(),
                n = S.Z.getVoiceChannelId(),
                i = O.Z.getChannel(n),
                r = null != i ? v.Z.getGuild(i.guild_id) : null,
                l = null != y.Z.getCurrentUserActiveStream(),
                o = null != n,
                a = (0, g.Z)(E.Z) && !l && null != t,
                s = o && null != r && null != n,
                { allowActivityWidget: u } = (0, D.Rb)("overlay"),
                c = null != (e = x.default.getFocusedPID()) ? e : (0, w.getPID)();
            if (V.default.hasChangedRenderMode(c)) return;
            let h = z.Z.isNotificationDisabled(H.n0.WelcomeNudge),
                p = z.Z.isNotificationDisabled(H.n0.GoLiveNudge),
                f = z.Z.isNotificationDisabled(H.n0.ActivityInvite),
                m = [];
            h ||
                (m.push({ type: H.nc.WELCOME }),
                !p &&
                    (a && s
                        ? m.push({
                              type: H.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: r,
                          })
                        : a &&
                          m.push({
                              type: H.nc.GO_LIVE_NON_VOICE,
                              game: t,
                          })),
                u &&
                    !f &&
                    m.push({
                        type: H.nc.CONTENT_INVENTORY,
                        entries: [],
                    })),
                null != R.current && clearTimeout(R.current),
                (R.current = setTimeout(() => {
                    d.Z.overlayMounted(...m);
                }, 1000));
        }),
        (0, h.zq)(() => {
            null != R.current && (clearTimeout(R.current), (R.current = null));
        }),
        r.useEffect(() => {
            if ((C.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), l)) {
                if (((0, s.Ay)(u.u1M), n.addEventListener("contextmenu", J, !1), null != q)) {
                    let e = Date.now() - q;
                    d.Z.track(Y.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (q = null);
                }
                return () => {
                    n.removeEventListener("contextmenu", J, !1);
                };
            }
            n.removeEventListener("contextmenu", J, !1),
                null == q && ((q = Date.now()), d.Z.track(Y.rMx.OVERLAY_UNLOCKED));
        }, [l, n]),
        (0, i.jsx)(f.Gt, {
            value: P,
            children:
                Z || m
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: Q.overlay,
                          children: [
                              !t && X,
                              (0, i.jsx)(ee, {
                                  locked: l,
                                  keybind: _,
                                  onClick: en,
                              }),
                              (0, i.jsx)(L.Z, {
                                  className: o()({
                                      [Q.layoutLocked]: l,
                                      [Q.layoutUnlocked]: !l,
                                  }),
                              }),
                              (0, i.jsx)(G.Z, {}),
                              !t &&
                                  K &&
                                  (0, i.jsx)(et, {
                                      locked: l,
                                      focused: c,
                                  }),
                              (0, i.jsx)(A.Z, {}),
                              (0, i.jsx)(k.Z, { locked: l }),
                              (0, i.jsx)(u.Ixi, { appContext: Y.IlC.OVERLAY }),
                              (0, i.jsx)(eo, {}),
                          ],
                      }),
        })
    );
}
