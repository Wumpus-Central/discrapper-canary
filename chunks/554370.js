n.d(t, { Z: () => eo }), n(539854), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(952265),
    c = n(481060),
    u = n(239091),
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
    b = n(944486),
    _ = n(556296),
    S = n(237997),
    x = n(451478),
    I = n(585483),
    C = n(358085),
    j = n(13140),
    N = n(145597),
    Z = n(830917),
    w = n(837268),
    T = n(32300),
    P = n(681603),
    A = n(915614),
    D = n(268861),
    k = n(690336),
    R = n(333031),
    L = n(371651),
    M = n(624864),
    z = n(610394),
    V = n(322155),
    U = n(338949),
    W = n(388627),
    G = n(319414),
    F = n(561064),
    B = n(987650),
    H = n(757744),
    Y = n(981631),
    Q = n(977594);
let K = !C.isPlatformEmbedded && !1,
    X = K
        ? (0, i.jsx)(m.Z, {
              src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
              className: Q.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0,
          })
        : null;
function J(e) {
    e.preventDefault();
}
function q(e) {
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
            className: o()(Q.overlayBackground, {
                [Q.overlayActive]: !r,
                [Q.overlayLocked]: r,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === Y.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: q,
            children: r
                ? null
                : (0, i.jsx)(R.Z, {
                      className: Q.closeContainer,
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
            ? (0, i.jsx)(R.Z, {
                  className: Q.closeContainer,
                  children: (0, i.jsx)(A.Z, {
                      onClick: () => d.Z.setInputLocked(!1, z.Z.getTargetPID()),
                      IconComponent: c.d$P,
                  }),
              })
            : null;
    });
function et() {
    d.Z.setInputLocked(!0, z.Z.getTargetPID());
}
function en() {
    d.Z.setFocusedPID(N.DEV_PID, null);
}
function ei() {
    d.Z.setFocusedPID(null, null);
}
function er(e) {
    let t = V.Z.isInputLocked(z.Z.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? I.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && I.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function el() {
    return (0, a.e7)([U.Z], () => U.Z.hasRenderDebugMode(w.GO.WindowContainer))
        ? (0, i.jsx)("div", { className: Q.windowContainerDebug })
        : null;
}
function eo(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, F.Z)(),
        l = (0, a.e7)([z.Z], () => z.Z.getTargetPID()),
        {
            locked: u,
            focused: m,
            incompatibleApp: C,
            hasZeroSizeDimension: w,
            keybind: A,
        } = (0, a.cj)([z.Z, S.default, x.Z, _.ZP, V.Z], () => {
            let e = x.Z.windowSize((0, Z.ZY)(n)),
                t = _.ZP.getOverlayKeybind();
            return {
                locked: V.Z.isInputLocked(l),
                focused: z.Z.isFocused(l),
                incompatibleApp: S.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, j.BB)(t.shortcut, !0) : "???",
            };
        }, [n, l]),
        { analyticsLocations: R } = (0, f.ZP)(p.Z.OVERLAY);
    (0, h.ZP)(() => {
        (0, T.F3)();
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
                d.Z.overlayReady(z.Z.getTargetPID()),
                    n.addEventListener("keydown", er),
                    n.addEventListener("keyup", er),
                    K &&
                        (n.document.hasFocus() && d.Z.setFocusedPID(N.DEV_PID, null),
                        n.addEventListener("focus", en),
                        n.addEventListener("blur", ei));
            },
            () => {
                n.removeEventListener("keydown", er),
                    n.removeEventListener("keyup", er),
                    K && (n.removeEventListener("focus", en), n.removeEventListener("blur", ei));
            },
        );
    let U = r.useRef(null);
    return (
        (0, h.ZP)(() => {
            let e = (0, W.pL)(),
                t = b.Z.getVoiceChannelId(),
                n = O.Z.getChannel(t),
                i = null != n ? v.Z.getGuild(n.guild_id) : null,
                r = null != y.Z.getCurrentUserActiveStream(),
                l = null != t,
                o = (0, g.Z)(E.Z) && !r && null != e,
                a = l && null != i && null != t,
                { allowActivityWidget: s } = (0, T.Rb)("overlay"),
                c = z.Z.getTargetPID();
            if (L.default.hasChangedRenderMode(c)) return;
            let u = M.Z.isNotificationDisabled(B.n0.WelcomeNudge),
                h = M.Z.isNotificationDisabled(B.n0.GoLiveNudge),
                p = M.Z.isNotificationDisabled(B.n0.ActivityInvite),
                f = [];
            u ||
                (f.push({ type: B.nc.WELCOME }),
                !h &&
                    (o && a
                        ? f.push({
                              type: B.nc.GO_LIVE_VOICE,
                              game: e,
                              voiceChannelId: t,
                              voiceGuild: i,
                          })
                        : o &&
                          f.push({
                              type: B.nc.GO_LIVE_NON_VOICE,
                              game: e,
                          })),
                s &&
                    !p &&
                    f.push({
                        type: B.nc.CONTENT_INVENTORY,
                        entries: [],
                    })),
                null != U.current && clearTimeout(U.current),
                (U.current = setTimeout(() => {
                    d.Z.overlayMounted(...f);
                }, 1000));
        }),
        (0, h.zq)(() => {
            null != U.current && (clearTimeout(U.current), (U.current = null));
        }),
        r.useEffect(() => {
            if ((I.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), u))
                return (
                    (0, s.Ay)(c.u1M),
                    n.addEventListener("contextmenu", J, !1),
                    () => {
                        n.removeEventListener("contextmenu", J, !1);
                    }
                );
            n.removeEventListener("contextmenu", J, !1);
        }, [u, n]),
        (0, i.jsx)(f.Gt, {
            value: R,
            children:
                w || C
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: Q.overlay,
                          children: [
                              !t && X,
                              (0, i.jsx)($, {
                                  locked: u,
                                  keybind: A,
                                  onClick: et,
                              }),
                              (0, i.jsx)(k.Z, {
                                  className: o()({
                                      [Q.layoutLocked]: u,
                                      [Q.layoutUnlocked]: !u,
                                  }),
                              }),
                              (0, i.jsx)(G.Z, {}),
                              !t &&
                                  K &&
                                  (0, i.jsx)(ee, {
                                      locked: u,
                                      focused: m,
                                  }),
                              (0, i.jsx)(P.Z, {}),
                              (0, i.jsx)(D.Z, { locked: u }),
                              (0, i.jsx)(c.Ixi, { appContext: Y.IlC.OVERLAY }),
                              (0, i.jsx)(el, {}),
                          ],
                      }),
        })
    );
}
