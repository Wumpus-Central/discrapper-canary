n.d(t, { Z: () => eo }), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(952265),
    c = n(481060),
    u = n(239091),
    d = n(13245),
    p = n(493773),
    f = n(100527),
    h = n(906732),
    m = n(70097),
    g = n(74299),
    y = n(199902),
    O = n(592125),
    b = n(430824),
    v = n(131951),
    E = n(944486),
    _ = n(556296),
    S = n(808506),
    I = n(237997),
    x = n(451478),
    j = n(585483),
    C = n(358085),
    N = n(13140),
    Z = n(145597),
    w = n(830917),
    P = n(486016),
    T = n(32300),
    k = n(681603),
    A = n(915614),
    D = n(268861),
    R = n(690336),
    L = n(333031),
    M = n(371651),
    z = n(624864),
    U = n(610394),
    V = n(388627),
    W = n(319414),
    G = n(561064),
    F = n(987650),
    B = n(757744),
    H = n(981631),
    Y = n(977594);
let Q = !C.isPlatformEmbedded && !1,
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
let $ = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(c.P3F, {
            className: l()(Y.overlayBackground, {
                [Y.overlayActive]: !r,
                [Y.overlayLocked]: r,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === H.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: J,
            children: r
                ? null
                : (0, i.jsx)(L.Z, {
                      className: Y.closeContainer,
                      children: (0, i.jsx)(A.Z, {
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
                  children: (0, i.jsx)(A.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, Z.getPID)()),
                      IconComponent: c.d$P,
                  }),
              })
            : null;
    });
function et() {
    d.Z.setInputLocked(!0, (0, Z.getPID)());
}
function en() {
    d.Z.setFocusedPID(Z.DEV_PID);
}
function ei() {
    d.Z.setFocusedPID(null);
}
function er(e) {
    let t = U.ZP.isInputLocked((0, Z.getPID)());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? j.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && j.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function eo(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, G.Z)(),
        {
            locked: o,
            focused: u,
            incompatibleApp: m,
            hasZeroSizeDimension: C,
            keybind: A,
        } = (0, a.cj)([U.ZP, I.default, x.Z, _.ZP], () => {
            let e = x.Z.windowSize((0, w.ZY)(n)),
                t = _.ZP.getOverlayKeybind(),
                i = (0, Z.getPID)();
            return {
                locked: U.ZP.isInputLocked(i),
                focused: U.ZP.isFocused(i),
                incompatibleApp: I.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, N.BB)(t.shortcut, !0) : "???",
            };
        }, [n]),
        { analyticsLocations: L } = (0, h.ZP)(f.Z.OVERLAY);
    !(function (e, t) {
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
            d.Z.overlayReady((0, Z.getPID)()),
                n.addEventListener("keydown", er),
                n.addEventListener("keyup", er),
                Q &&
                    (n.document.hasFocus() && d.Z.setFocusedPID(Z.DEV_PID),
                    n.addEventListener("focus", en),
                    n.addEventListener("blur", ei));
        },
        () => {
            n.removeEventListener("keydown", er),
                n.removeEventListener("keyup", er),
                Q && (n.removeEventListener("focus", en), n.removeEventListener("blur", ei));
        },
    );
    let B = r.useRef(null);
    return (
        (0, p.ZP)(() => {
            var e;
            let t = (0, V.pL)(),
                n = E.Z.getVoiceChannelId(),
                i = O.Z.getChannel(n),
                r = null != i ? b.Z.getGuild(i.guild_id) : null,
                o = null != y.Z.getCurrentUserActiveStream(),
                l = null != n,
                a = (0, g.Z)(v.Z) && !o && null != t,
                s = l && null != r && null != n,
                { allowActivityWidget: c } = (0, T.Rb)("overlay"),
                u = null != (e = S.default.getFocusedPID()) ? e : (0, Z.getPID)();
            if (M.default.hasChangedRenderMode(u)) return;
            let p = z.Z.isNotificationDisabled(P.OverlayNotificationDisabledSetting.WELCOME_GENERAL),
                f = z.Z.isNotificationDisabled(P.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE),
                h = z.Z.isNotificationDisabled(P.OverlayNotificationDisabledSetting.GAME_ACTIVITY),
                m = [];
            p || m.push({ type: F.nc.WELCOME }),
                !f &&
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
                c &&
                    !h &&
                    m.push({
                        type: F.nc.CONTENT_INVENTORY,
                        entries: [],
                    }),
                0 !== m.length &&
                    (null != B.current && clearTimeout(B.current),
                    (B.current = setTimeout(() => {
                        d.Z.overlayMounted(...m);
                    }, 1000)));
        }),
        (0, p.zq)(() => {
            null != B.current && (clearTimeout(B.current), (B.current = null));
        }),
        r.useEffect(() => {
            if ((j.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), o)) {
                if (((0, s.Ay)(c.u1M), n.addEventListener("contextmenu", q, !1), null != X)) {
                    let e = Date.now() - X;
                    d.Z.track(H.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (X = null);
                }
                return () => {
                    n.removeEventListener("contextmenu", q, !1);
                };
            }
            n.removeEventListener("contextmenu", q, !1),
                null == X && ((X = Date.now()), d.Z.track(H.rMx.OVERLAY_UNLOCKED));
        }, [o, n]),
        (0, i.jsx)(h.Gt, {
            value: L,
            children:
                C || m
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: Y.overlay,
                          children: [
                              !t && K,
                              (0, i.jsx)($, {
                                  locked: o,
                                  keybind: A,
                                  onClick: et,
                              }),
                              (0, i.jsx)(R.Z, {
                                  className: l()({
                                      [Y.layoutLocked]: o,
                                      [Y.layoutUnlocked]: !o,
                                  }),
                              }),
                              (0, i.jsx)(W.Z, {}),
                              !t &&
                                  Q &&
                                  (0, i.jsx)(ee, {
                                      locked: o,
                                      focused: u,
                                  }),
                              (0, i.jsx)(k.Z, {}),
                              (0, i.jsx)(D.Z, { locked: o }),
                              (0, i.jsx)(c.Ixi, {}),
                          ],
                      }),
        })
    );
}
