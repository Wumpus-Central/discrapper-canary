n.d(t, { Z: () => el }), n(539854), n(388685);
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
    w = n(13140),
    N = n(145597),
    T = n(830917),
    _ = n(486016),
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
    H = n(987650),
    F = n(757744),
    Y = n(981631),
    B = n(977594);
let Q = !Z.isPlatformEmbedded && !1,
    K = Q
        ? (0, i.jsx)(m.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: B.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null,
    X = null;
function q(e) {
    e.preventDefault();
}
function J(e) {
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
                        layoutId: F.$S,
                        version: F.HN,
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
            className: o()(B.overlayBackground, {
                [B.overlayActive]: !r,
                [B.overlayLocked]: r,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === Y.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: J,
            children: r
                ? null
                : (0, i.jsx)(L.Z, {
                      className: B.closeContainer,
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
                  className: B.closeContainer,
                  children: (0, i.jsx)(A.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, N.getPID)()),
                      IconComponent: u.d$P,
                  }),
              })
            : null;
    });
function et() {
    d.Z.setInputLocked(!0, (0, N.getPID)());
}
function en() {
    d.Z.setFocusedPID(N.DEV_PID);
}
function ei() {
    d.Z.setFocusedPID(null);
}
function er(e) {
    let t = z.ZP.isInputLocked((0, N.getPID)());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? C.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && C.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function el(e) {
    let { isEmbeddedActivity: t } = e,
        { renderInvisibleOverlay: n } = (0, P.fn)("Overlay"),
        l = (0, G.Z)(),
        {
            locked: c,
            focused: m,
            incompatibleApp: Z,
            hasZeroSizeDimension: A,
            keybind: L,
        } = (0, a.cj)([z.ZP, j.default, I.Z, b.ZP], () => {
            let e = I.Z.windowSize((0, T.ZY)(l)),
                t = b.ZP.getOverlayKeybind(),
                n = (0, N.getPID)();
            return {
                locked: z.ZP.isInputLocked(n),
                focused: z.ZP.isFocused(n),
                incompatibleApp: j.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, w.BB)(t.shortcut, !0) : "???",
            };
        }, [l]),
        { analyticsLocations: F } = (0, f.ZP)(h.Z.OVERLAY);
    (0, p.ZP)(() => {
        (0, P.lj)("OVERLAY_INITIALIZED");
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
                    l.addEventListener("keydown", er),
                    l.addEventListener("keyup", er),
                    Q &&
                        (l.document.hasFocus() && d.Z.setFocusedPID(N.DEV_PID),
                        l.addEventListener("focus", en),
                        l.addEventListener("blur", ei));
            },
            () => {
                l.removeEventListener("keydown", er),
                    l.removeEventListener("keyup", er),
                    Q && (l.removeEventListener("focus", en), l.removeEventListener("blur", ei));
            },
        );
    let J = r.useRef(null);
    return (
        (0, p.ZP)(() => {
            var e;
            let t = (0, U.pL)(),
                n = S.Z.getVoiceChannelId(),
                i = O.Z.getChannel(n),
                r = null != i ? E.Z.getGuild(i.guild_id) : null,
                l = null != y.Z.getCurrentUserActiveStream(),
                o = null != n,
                a = (0, g.Z)(v.Z) && !l && null != t,
                s = o && null != r && null != n,
                { allowActivityWidget: u } = (0, P.Rb)("overlay"),
                c = null != (e = x.default.getFocusedPID()) ? e : (0, N.getPID)();
            if (M.default.hasChangedRenderMode(c)) return;
            let p = V.Z.isNotificationDisabled(_.OverlayNotificationDisabledSetting.WELCOME_GENERAL),
                h = V.Z.isNotificationDisabled(_.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE),
                f = V.Z.isNotificationDisabled(_.OverlayNotificationDisabledSetting.GAME_ACTIVITY),
                m = [];
            p || m.push({ type: H.nc.WELCOME }),
                !h &&
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
                    }),
                0 !== m.length &&
                    (null != J.current && clearTimeout(J.current),
                    (J.current = setTimeout(() => {
                        d.Z.overlayMounted(...m);
                    }, 1000)));
        }),
        (0, p.zq)(() => {
            null != J.current && (clearTimeout(J.current), (J.current = null));
        }),
        r.useEffect(() => {
            if ((C.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), c)) {
                if (((0, s.Ay)(u.u1M), l.addEventListener("contextmenu", q, !1), null != X)) {
                    let e = Date.now() - X;
                    d.Z.track(Y.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (X = null);
                }
                return () => {
                    l.removeEventListener("contextmenu", q, !1);
                };
            }
            l.removeEventListener("contextmenu", q, !1),
                null == X && ((X = Date.now()), d.Z.track(Y.rMx.OVERLAY_UNLOCKED));
        }, [c, l]),
        (0, i.jsx)(f.Gt, {
            value: F,
            children:
                A || Z || n
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: B.overlay,
                          children: [
                              !t && K,
                              (0, i.jsx)($, {
                                  locked: c,
                                  keybind: L,
                                  onClick: et,
                              }),
                              (0, i.jsx)(k.Z, {
                                  className: o()({
                                      [B.layoutLocked]: c,
                                      [B.layoutUnlocked]: !c,
                                  }),
                              }),
                              (0, i.jsx)(W.Z, {}),
                              !t &&
                                  Q &&
                                  (0, i.jsx)(ee, {
                                      locked: c,
                                      focused: m,
                                  }),
                              (0, i.jsx)(D.Z, {}),
                              (0, i.jsx)(R.Z, { locked: c }),
                              (0, i.jsx)(u.Ixi, { appContext: Y.IlC.OVERLAY }),
                          ],
                      }),
        })
    );
}
