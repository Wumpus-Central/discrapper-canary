n.d(t, { Z: () => el }), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(952265),
    c = n(481060),
    u = n(239091),
    d = n(13245),
    p = n(493773),
    h = n(100527),
    f = n(906732),
    m = n(70097),
    g = n(74299),
    y = n(199902),
    O = n(592125),
    v = n(430824),
    b = n(131951),
    E = n(944486),
    _ = n(556296),
    S = n(808506),
    x = n(237997),
    I = n(451478),
    C = n(585483),
    j = n(358085),
    w = n(13140),
    N = n(145597),
    Z = n(830917),
    T = n(486016),
    P = n(32300),
    A = n(681603),
    D = n(915614),
    k = n(268861),
    R = n(690336),
    L = n(333031),
    M = n(371651),
    z = n(624864),
    V = n(610394),
    U = n(388627),
    W = n(319414),
    G = n(561064),
    B = n(987650),
    H = n(757744),
    F = n(981631),
    Y = n(977594);
let Q = !j.isPlatformEmbedded && !1,
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
function q(e) {
    e.preventDefault();
}
function J(e) {
    (0, u.jW)(e, async () => {
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
        return (0, i.jsx)(c.P3F, {
            className: o()(Y.overlayBackground, {
                [Y.overlayActive]: !r,
                [Y.overlayLocked]: r,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === F.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: J,
            children: r
                ? null
                : (0, i.jsx)(L.Z, {
                      className: Y.closeContainer,
                      children: (0, i.jsx)(D.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: c.Uz9,
                      }),
                  }),
        });
    }),
    ee = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(L.Z, {
                  className: Y.closeContainer,
                  children: (0, i.jsx)(D.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, N.getPID)()),
                      IconComponent: c.d$P,
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
    let t = V.ZP.isInputLocked((0, N.getPID)());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? C.S.dispatch(F.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && C.S.dispatch(F.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function el(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, G.Z)(),
        {
            locked: l,
            focused: u,
            incompatibleApp: m,
            hasZeroSizeDimension: j,
            keybind: D,
        } = (0, a.cj)([V.ZP, x.default, I.Z, _.ZP], () => {
            let e = I.Z.windowSize((0, Z.ZY)(n)),
                t = _.ZP.getOverlayKeybind(),
                i = (0, N.getPID)();
            return {
                locked: V.ZP.isInputLocked(i),
                focused: V.ZP.isFocused(i),
                incompatibleApp: x.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, w.BB)(t.shortcut, !0) : "???",
            };
        }, [n]),
        { analyticsLocations: L } = (0, f.ZP)(h.Z.OVERLAY);
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
                    n.addEventListener("keydown", er),
                    n.addEventListener("keyup", er),
                    Q &&
                        (n.document.hasFocus() && d.Z.setFocusedPID(N.DEV_PID),
                        n.addEventListener("focus", en),
                        n.addEventListener("blur", ei));
            },
            () => {
                n.removeEventListener("keydown", er),
                    n.removeEventListener("keyup", er),
                    Q && (n.removeEventListener("focus", en), n.removeEventListener("blur", ei));
            },
        );
    let H = r.useRef(null);
    return (
        (0, p.ZP)(() => {
            var e;
            let t = (0, U.pL)(),
                n = E.Z.getVoiceChannelId(),
                i = O.Z.getChannel(n),
                r = null != i ? v.Z.getGuild(i.guild_id) : null,
                l = null != y.Z.getCurrentUserActiveStream(),
                o = null != n,
                a = (0, g.Z)(b.Z) && !l && null != t,
                s = o && null != r && null != n,
                { allowActivityWidget: c } = (0, P.Rb)("overlay"),
                u = null != (e = S.default.getFocusedPID()) ? e : (0, N.getPID)();
            if (M.default.hasChangedRenderMode(u)) return;
            let p = z.Z.isNotificationDisabled(T.OverlayNotificationDisabledSetting.WELCOME_GENERAL),
                h = z.Z.isNotificationDisabled(T.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE),
                f = z.Z.isNotificationDisabled(T.OverlayNotificationDisabledSetting.GAME_ACTIVITY),
                m = [];
            p || m.push({ type: B.nc.WELCOME }),
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
                c &&
                    !f &&
                    m.push({
                        type: B.nc.CONTENT_INVENTORY,
                        entries: [],
                    }),
                0 !== m.length &&
                    (null != H.current && clearTimeout(H.current),
                    (H.current = setTimeout(() => {
                        d.Z.overlayMounted(...m);
                    }, 1000)));
        }),
        (0, p.zq)(() => {
            null != H.current && (clearTimeout(H.current), (H.current = null));
        }),
        r.useEffect(() => {
            if ((C.S.dispatch(F.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), l)) {
                if (((0, s.Ay)(c.u1M), n.addEventListener("contextmenu", q, !1), null != X)) {
                    let e = Date.now() - X;
                    d.Z.track(F.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (X = null);
                }
                return () => {
                    n.removeEventListener("contextmenu", q, !1);
                };
            }
            n.removeEventListener("contextmenu", q, !1),
                null == X && ((X = Date.now()), d.Z.track(F.rMx.OVERLAY_UNLOCKED));
        }, [l, n]),
        (0, i.jsx)(f.Gt, {
            value: L,
            children:
                j || m
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: Y.overlay,
                          children: [
                              !t && K,
                              (0, i.jsx)($, {
                                  locked: l,
                                  keybind: D,
                                  onClick: et,
                              }),
                              (0, i.jsx)(R.Z, {
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
                                      focused: u,
                                  }),
                              (0, i.jsx)(A.Z, {}),
                              (0, i.jsx)(k.Z, { locked: l }),
                              (0, i.jsx)(c.Ixi, { appContext: F.IlC.OVERLAY }),
                          ],
                      }),
        })
    );
}
