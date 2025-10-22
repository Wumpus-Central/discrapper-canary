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
    y = n(199902),
    O = n(592125),
    E = n(430824),
    v = n(131951),
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
    A = n(681603),
    D = n(915614),
    R = n(268861),
    k = n(690336),
    L = n(333031),
    M = n(371651),
    V = n(624864),
    z = n(610394),
    U = n(322155),
    W = n(338949),
    G = n(388627),
    F = n(319414),
    H = n(561064),
    B = n(987650),
    Y = n(757744),
    Q = n(981631),
    K = n(977594);
let X = !Z.isPlatformEmbedded && !1,
    q = X
        ? (0, i.jsx)(m.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: K.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
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
            className: o()(K.overlayBackground, {
                [K.overlayActive]: !r,
                [K.overlayLocked]: r,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === Q.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: r
                ? null
                : (0, i.jsx)(L.Z, {
                      className: K.closeContainer,
                      children: (0, i.jsx)(D.Z, {
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
            ? (0, i.jsx)(L.Z, {
                  className: K.closeContainer,
                  children: (0, i.jsx)(D.Z, {
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
    let t = U.Z.isInputLocked((0, w.getPID)());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? C.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && C.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function eo() {
    return (0, a.e7)([W.Z], () => W.Z.hasRenderDebugMode(_.GO.WindowContainer))
        ? (0, i.jsx)("div", { className: K.windowContainerDebug })
        : null;
}
function ea(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, H.Z)(),
        l = (0, a.e7)([z.Z], () => z.Z.getFocusedPID()),
        c = null != l && l !== w.UNSET_PID ? l : (0, w.getPID)(),
        {
            locked: m,
            focused: Z,
            incompatibleApp: _,
            hasZeroSizeDimension: D,
            keybind: L,
        } = (0, a.cj)([z.Z, j.default, I.Z, b.ZP, U.Z], () => {
            let e = I.Z.windowSize((0, T.ZY)(n)),
                t = b.ZP.getOverlayKeybind();
            return {
                locked: U.Z.isInputLocked(c),
                focused: z.Z.isFocused(c),
                incompatibleApp: j.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, N.BB)(t.shortcut, !0) : "???",
            };
        }, [n, c]),
        { analyticsLocations: W } = (0, f.ZP)(h.Z.OVERLAY);
    (0, p.ZP)(() => {
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
                    n.addEventListener("keydown", el),
                    n.addEventListener("keyup", el),
                    X &&
                        (n.document.hasFocus() && d.Z.setFocusedPID(w.DEV_PID, null),
                        n.addEventListener("focus", ei),
                        n.addEventListener("blur", er));
            },
            () => {
                n.removeEventListener("keydown", el),
                    n.removeEventListener("keyup", el),
                    X && (n.removeEventListener("focus", ei), n.removeEventListener("blur", er));
            },
        );
    let Y = r.useRef(null);
    return (
        (0, p.ZP)(() => {
            var e;
            let t = (0, G.pL)(),
                n = S.Z.getVoiceChannelId(),
                i = O.Z.getChannel(n),
                r = null != i ? E.Z.getGuild(i.guild_id) : null,
                l = null != y.Z.getCurrentUserActiveStream(),
                o = null != n,
                a = (0, g.Z)(v.Z) && !l && null != t,
                s = o && null != r && null != n,
                { allowActivityWidget: u } = (0, P.Rb)("overlay"),
                c = null != (e = x.default.getFocusedPID()) ? e : (0, w.getPID)();
            if (M.default.hasChangedRenderMode(c)) return;
            let p = V.Z.isNotificationDisabled(B.n0.WelcomeNudge),
                h = V.Z.isNotificationDisabled(B.n0.GoLiveNudge),
                f = V.Z.isNotificationDisabled(B.n0.ActivityInvite),
                m = [];
            p ||
                (m.push({ type: B.nc.WELCOME }),
                !h &&
                    (a && s
                        ? m.push({
                              type: B.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: r,
                          })
                        : a &&
                          m.push({
                              type: B.nc.GO_LIVE_NON_VOICE,
                              game: t,
                          })),
                u &&
                    !f &&
                    m.push({
                        type: B.nc.CONTENT_INVENTORY,
                        entries: [],
                    })),
                null != Y.current && clearTimeout(Y.current),
                (Y.current = setTimeout(() => {
                    d.Z.overlayMounted(...m);
                }, 1000));
        }),
        (0, p.zq)(() => {
            null != Y.current && (clearTimeout(Y.current), (Y.current = null));
        }),
        r.useEffect(() => {
            if ((C.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), m))
                return (
                    (0, s.Ay)(u.u1M),
                    n.addEventListener("contextmenu", J, !1),
                    () => {
                        n.removeEventListener("contextmenu", J, !1);
                    }
                );
            n.removeEventListener("contextmenu", J, !1);
        }, [m, n]),
        (0, i.jsx)(f.Gt, {
            value: W,
            children:
                D || _
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: K.overlay,
                          children: [
                              !t && q,
                              (0, i.jsx)(ee, {
                                  locked: m,
                                  keybind: L,
                                  onClick: en,
                              }),
                              (0, i.jsx)(k.Z, {
                                  className: o()({
                                      [K.layoutLocked]: m,
                                      [K.layoutUnlocked]: !m,
                                  }),
                              }),
                              (0, i.jsx)(F.Z, {}),
                              !t &&
                                  X &&
                                  (0, i.jsx)(et, {
                                      locked: m,
                                      focused: Z,
                                  }),
                              (0, i.jsx)(A.Z, {}),
                              (0, i.jsx)(R.Z, { locked: m }),
                              (0, i.jsx)(u.Ixi, { appContext: Q.IlC.OVERLAY }),
                              (0, i.jsx)(eo, {}),
                          ],
                      }),
        })
    );
}
