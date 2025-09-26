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
    p = n(493773),
    h = n(100527),
    f = n(906732),
    m = n(70097),
    g = n(74299),
    O = n(199902),
    y = n(592125),
    v = n(430824),
    E = n(131951),
    S = n(944486),
    b = n(556296),
    x = n(808506),
    j = n(237997),
    I = n(451478),
    C = n(585483),
    Z = n(358085),
    w = n(13140),
    N = n(145597),
    T = n(830917),
    _ = n(486016),
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
    H = n(561064),
    F = n(987650),
    Y = n(757744),
    B = n(981631),
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
                        layoutId: Y.$S,
                        version: Y.HN,
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
                r === B.AeJ.PRIMARY && t === i && n();
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
                      onClick: () => d.Z.setInputLocked(!1, (0, N.getPID)()),
                      IconComponent: u.d$P,
                  }),
              })
            : null;
    });
function en() {
    d.Z.setInputLocked(!0, (0, N.getPID)());
}
function ei() {
    d.Z.setFocusedPID(N.DEV_PID);
}
function er() {
    d.Z.setFocusedPID(null);
}
function el(e) {
    let t = U.ZP.isInputLocked((0, N.getPID)());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? C.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && C.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function eo() {
    return (0, a.e7)([U.ZP], () => U.ZP.hasRenderDebugMode(P.GO.WindowContainer))
        ? (0, i.jsx)("div", { className: Q.windowContainerDebug })
        : null;
}
function ea(e) {
    let { isEmbeddedActivity: t } = e,
        { renderInvisibleOverlay: n } = (0, D.fn)("Overlay"),
        l = (0, H.Z)(),
        {
            locked: c,
            focused: m,
            incompatibleApp: Z,
            hasZeroSizeDimension: P,
            keybind: R,
        } = (0, a.cj)([U.ZP, j.default, I.Z, b.ZP], () => {
            let e = I.Z.windowSize((0, T.ZY)(l)),
                t = b.ZP.getOverlayKeybind(),
                n = (0, N.getPID)();
            return {
                locked: U.ZP.isInputLocked(n),
                focused: U.ZP.isFocused(n),
                incompatibleApp: j.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, w.BB)(t.shortcut, !0) : "???",
            };
        }, [l]),
        { analyticsLocations: M } = (0, f.ZP)(h.Z.OVERLAY);
    (0, p.ZP)(() => {
        (0, D.lj)("OVERLAY_INITIALIZED");
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
                d.Z.overlayReady((0, N.getPID)()),
                    l.addEventListener("keydown", el),
                    l.addEventListener("keyup", el),
                    K &&
                        (l.document.hasFocus() && d.Z.setFocusedPID(N.DEV_PID),
                        l.addEventListener("focus", ei),
                        l.addEventListener("blur", er));
            },
            () => {
                l.removeEventListener("keydown", el),
                    l.removeEventListener("keyup", el),
                    K && (l.removeEventListener("focus", ei), l.removeEventListener("blur", er));
            },
        );
    let Y = r.useRef(null);
    return (
        (0, p.ZP)(() => {
            var e;
            let t = (0, W.pL)(),
                n = S.Z.getVoiceChannelId(),
                i = y.Z.getChannel(n),
                r = null != i ? v.Z.getGuild(i.guild_id) : null,
                l = null != O.Z.getCurrentUserActiveStream(),
                o = null != n,
                a = (0, g.Z)(E.Z) && !l && null != t,
                s = o && null != r && null != n,
                { allowActivityWidget: u } = (0, D.Rb)("overlay"),
                c = null != (e = x.default.getFocusedPID()) ? e : (0, N.getPID)();
            if (V.default.hasChangedRenderMode(c)) return;
            let p = z.Z.isNotificationDisabled(_.OverlayNotificationDisabledSetting.WELCOME_GENERAL),
                h = z.Z.isNotificationDisabled(_.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE),
                f = z.Z.isNotificationDisabled(_.OverlayNotificationDisabledSetting.GAME_ACTIVITY),
                m = [];
            p || m.push({ type: F.nc.WELCOME }),
                !h &&
                    (a && s
                        ? m.push({
                              type: F.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: r,
                          })
                        : a &&
                          m.push({
                              type: F.nc.GO_LIVE_NON_VOICE,
                              game: t,
                          })),
                u &&
                    !f &&
                    m.push({
                        type: F.nc.CONTENT_INVENTORY,
                        entries: [],
                    }),
                0 !== m.length &&
                    (null != Y.current && clearTimeout(Y.current),
                    (Y.current = setTimeout(() => {
                        d.Z.overlayMounted(...m);
                    }, 1000)));
        }),
        (0, p.zq)(() => {
            null != Y.current && (clearTimeout(Y.current), (Y.current = null));
        }),
        r.useEffect(() => {
            if ((C.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), c)) {
                if (((0, s.Ay)(u.u1M), l.addEventListener("contextmenu", J, !1), null != q)) {
                    let e = Date.now() - q;
                    d.Z.track(B.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (q = null);
                }
                return () => {
                    l.removeEventListener("contextmenu", J, !1);
                };
            }
            l.removeEventListener("contextmenu", J, !1),
                null == q && ((q = Date.now()), d.Z.track(B.rMx.OVERLAY_UNLOCKED));
        }, [c, l]),
        (0, i.jsx)(f.Gt, {
            value: M,
            children:
                P || Z || n
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: Q.overlay,
                          children: [
                              !t && X,
                              (0, i.jsx)(ee, {
                                  locked: c,
                                  keybind: R,
                                  onClick: en,
                              }),
                              (0, i.jsx)(L.Z, {
                                  className: o()({
                                      [Q.layoutLocked]: c,
                                      [Q.layoutUnlocked]: !c,
                                  }),
                              }),
                              (0, i.jsx)(G.Z, {}),
                              !t &&
                                  K &&
                                  (0, i.jsx)(et, {
                                      locked: c,
                                      focused: m,
                                  }),
                              (0, i.jsx)(A.Z, {}),
                              (0, i.jsx)(k.Z, { locked: c }),
                              (0, i.jsx)(u.Ixi, { appContext: B.IlC.OVERLAY }),
                              (0, i.jsx)(eo, {}),
                          ],
                      }),
        })
    );
}
