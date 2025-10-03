n.d(t, { Z: () => eo }), n(539854), n(388685);
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
    _ = n(837268),
    P = n(32300),
    D = n(681603),
    A = n(915614),
    R = n(268861),
    k = n(690336),
    L = n(333031),
    M = n(371651),
    V = n(624864),
    z = n(610394),
    U = n(388627),
    W = n(319414),
    G = n(561064),
    F = n(987650),
    H = n(757744),
    B = n(981631),
    Y = n(977594);
let Q = !Z.isPlatformEmbedded && !1,
    K = Q
        ? (0, i.jsx)(m.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: Y.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null,
    X = null;
function J(e) {
    e.preventDefault();
}
function q(e) {
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
                        layoutId: H.$S,
                        version: H.HN,
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
let $ = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(u.P3F, {
            className: o()(Y.overlayBackground, {
                [Y.overlayActive]: !r,
                [Y.overlayLocked]: r,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === B.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: q,
            children: r
                ? null
                : (0, i.jsx)(L.Z, {
                      className: Y.closeContainer,
                      children: (0, i.jsx)(A.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: u.Uz9,
                      }),
                  }),
        });
    }),
    ee = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(L.Z, {
                  className: Y.closeContainer,
                  children: (0, i.jsx)(A.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, w.getPID)()),
                      IconComponent: u.d$P,
                  }),
              })
            : null;
    });
function et() {
    d.Z.setInputLocked(!0, (0, w.getPID)());
}
function en() {
    d.Z.setFocusedPID(w.DEV_PID);
}
function ei() {
    d.Z.setFocusedPID(null);
}
function er(e) {
    let t = z.ZP.isInputLocked((0, w.getPID)());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? C.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && C.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function el() {
    return (0, a.e7)([z.ZP], () => z.ZP.hasRenderDebugMode(_.GO.WindowContainer))
        ? (0, i.jsx)("div", { className: Y.windowContainerDebug })
        : null;
}
function eo(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, G.Z)(),
        {
            locked: l,
            focused: c,
            incompatibleApp: m,
            hasZeroSizeDimension: Z,
            keybind: _,
        } = (0, a.cj)([z.ZP, j.default, I.Z, b.ZP], () => {
            let e = I.Z.windowSize((0, T.ZY)(n)),
                t = b.ZP.getOverlayKeybind(),
                i = (0, w.getPID)();
            return {
                locked: z.ZP.isInputLocked(i),
                focused: z.ZP.isFocused(i),
                incompatibleApp: j.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, N.BB)(t.shortcut, !0) : "???",
            };
        }, [n]),
        { analyticsLocations: A } = (0, f.ZP)(p.Z.OVERLAY);
    (0, h.ZP)(() => {
        (0, P.F3)();
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
                    n.addEventListener("keydown", er),
                    n.addEventListener("keyup", er),
                    Q &&
                        (n.document.hasFocus() && d.Z.setFocusedPID(w.DEV_PID),
                        n.addEventListener("focus", en),
                        n.addEventListener("blur", ei));
            },
            () => {
                n.removeEventListener("keydown", er),
                    n.removeEventListener("keyup", er),
                    Q && (n.removeEventListener("focus", en), n.removeEventListener("blur", ei));
            },
        );
    let L = r.useRef(null);
    return (
        (0, h.ZP)(() => {
            var e;
            let t = (0, U.pL)(),
                n = S.Z.getVoiceChannelId(),
                i = O.Z.getChannel(n),
                r = null != i ? v.Z.getGuild(i.guild_id) : null,
                l = null != y.Z.getCurrentUserActiveStream(),
                o = null != n,
                a = (0, g.Z)(E.Z) && !l && null != t,
                s = o && null != r && null != n,
                { allowActivityWidget: u } = (0, P.Rb)("overlay"),
                c = null != (e = x.default.getFocusedPID()) ? e : (0, w.getPID)();
            if (M.default.hasChangedRenderMode(c)) return;
            let h = V.Z.isNotificationDisabled(F.n0.WelcomeNudge),
                p = V.Z.isNotificationDisabled(F.n0.GoLiveNudge),
                f = V.Z.isNotificationDisabled(F.n0.ActivityInvite),
                m = [];
            h ||
                (m.push({ type: F.nc.WELCOME }),
                !p &&
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
                    })),
                null != L.current && clearTimeout(L.current),
                (L.current = setTimeout(() => {
                    d.Z.overlayMounted(...m);
                }, 1000));
        }),
        (0, h.zq)(() => {
            null != L.current && (clearTimeout(L.current), (L.current = null));
        }),
        r.useEffect(() => {
            if ((C.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), l)) {
                if (((0, s.Ay)(u.u1M), n.addEventListener("contextmenu", J, !1), null != X)) {
                    let e = Date.now() - X;
                    d.Z.track(B.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (X = null);
                }
                return () => {
                    n.removeEventListener("contextmenu", J, !1);
                };
            }
            n.removeEventListener("contextmenu", J, !1),
                null == X && ((X = Date.now()), d.Z.track(B.rMx.OVERLAY_UNLOCKED));
        }, [l, n]),
        (0, i.jsx)(f.Gt, {
            value: A,
            children:
                Z || m
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: Y.overlay,
                          children: [
                              !t && K,
                              (0, i.jsx)($, {
                                  locked: l,
                                  keybind: _,
                                  onClick: et,
                              }),
                              (0, i.jsx)(k.Z, {
                                  className: o()({
                                      [Y.layoutLocked]: l,
                                      [Y.layoutUnlocked]: !l,
                                  }),
                              }),
                              (0, i.jsx)(W.Z, {}),
                              !t &&
                                  Q &&
                                  (0, i.jsx)(ee, {
                                      locked: l,
                                      focused: c,
                                  }),
                              (0, i.jsx)(D.Z, {}),
                              (0, i.jsx)(R.Z, { locked: l }),
                              (0, i.jsx)(u.Ixi, { appContext: B.IlC.OVERLAY }),
                              (0, i.jsx)(el, {}),
                          ],
                      }),
        })
    );
}
