n.d(t, { Z: () => er }), n(539854), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    s = n(952265),
    c = n(481060),
    u = n(239091),
    d = n(13245),
    f = n(493773),
    h = n(100527),
    p = n(906732),
    m = n(70097),
    g = n(74299),
    b = n(199902),
    y = n(592125),
    O = n(430824),
    v = n(131951),
    E = n(944486),
    S = n(556296),
    x = n(237997),
    I = n(451478),
    C = n(585483),
    j = n(358085),
    _ = n(13140),
    Z = n(830917),
    N = n(837268),
    w = n(32300),
    T = n(681603),
    P = n(915614),
    A = n(268861),
    k = n(690336),
    D = n(333031),
    R = n(371651),
    L = n(624864),
    M = n(610394),
    z = n(322155),
    V = n(338949),
    U = n(398269),
    W = n(388627),
    G = n(319414),
    F = n(561064),
    H = n(987650),
    B = n(757744),
    Y = n(981631),
    Q = n(784686);
let K = !j.isPlatformEmbedded && !1,
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
        let { keybind: t, onClick: n, locked: r } = e,
            a = (0, w.T_)(h.Z.OVERLAY);
        return (0, i.jsx)(c.P3F, {
            className: l()(Q.overlayBackground, {
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
                : (0, i.jsxs)(D.Z, {
                      className: Q.topRightContainer,
                      children: [
                          a
                              ? (0, i.jsx)(P.Z, {
                                    onClick: () => (0, U.N)(h.Z.OVERLAY, Y.IlC.OVERLAY),
                                    IconComponent: c.U65,
                                })
                              : null,
                          (0, i.jsx)(P.Z, {
                              keybind: t,
                              onClick: n,
                              IconComponent: c.Uz9,
                          }),
                      ],
                  }),
        });
    }),
    ee = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(D.Z, {
                  className: Q.topRightContainer,
                  children: (0, i.jsx)(P.Z, {
                      onClick: () => d.Z.setInputLocked(!1, M.Z.getTargetPID()),
                      IconComponent: c.d$P,
                  }),
              })
            : null;
    });
function et() {
    d.Z.setInputLocked(!0, M.Z.getTargetPID());
}
function en(e) {
    let t = z.Z.isInputLocked(M.Z.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? C.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && C.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function ei() {
    return (0, o.e7)([V.Z], () => V.Z.hasRenderDebugMode(N.GO.WindowContainer))
        ? (0, i.jsx)("div", { className: Q.windowContainerDebug })
        : null;
}
function er(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, F.Z)(),
        a = (0, o.e7)([M.Z], () => M.Z.getTargetPID()),
        {
            locked: u,
            focused: m,
            incompatibleApp: j,
            hasZeroSizeDimension: N,
            keybind: P,
        } = (0, o.cj)([M.Z, x.default, I.Z, S.ZP, z.Z], () => {
            let e = I.Z.windowSize((0, Z.ZY)(n)),
                t = S.ZP.getOverlayKeybind();
            return {
                locked: z.Z.isInputLocked(a),
                focused: M.Z.isFocused(a),
                incompatibleApp: x.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, _.BB)(t.shortcut, !0) : "???",
            };
        }, [n, a]),
        { analyticsLocations: D } = (0, p.ZP)(h.Z.OVERLAY);
    (0, f.ZP)(() => {
        (0, w.F3)();
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
                d.Z.overlayReady(M.Z.getTargetPID()),
                    n.addEventListener("keydown", en),
                    n.addEventListener("keyup", en);
            },
            () => {
                n.removeEventListener("keydown", en), n.removeEventListener("keyup", en);
            },
        );
    let V = r.useRef(null);
    return (
        (0, f.ZP)(() => {
            let e = (0, W.pL)(),
                t = E.Z.getVoiceChannelId(),
                n = y.Z.getChannel(t),
                i = null != n ? O.Z.getGuild(n.guild_id) : null,
                r = null != b.Z.getCurrentUserActiveStream(),
                a = null != t,
                l = (0, g.Z)(v.Z) && !r && null != e,
                o = a && null != i && null != t,
                s = M.Z.getTargetPID();
            if (R.default.hasChangedRenderMode(s)) return;
            let c = L.Z.isNotificationDisabled(H.n0.WelcomeNudge),
                u = L.Z.isNotificationDisabled(H.n0.GoLiveNudge),
                f = L.Z.isNotificationDisabled(H.n0.ActivityInvite),
                h = [];
            !c &&
                (h.push({ type: H.nc.WELCOME }),
                !u &&
                    (l && o
                        ? h.push({
                              type: H.nc.GO_LIVE_VOICE,
                              game: e,
                              voiceChannelId: t,
                              voiceGuild: i,
                          })
                        : l &&
                          h.push({
                              type: H.nc.GO_LIVE_NON_VOICE,
                              game: e,
                          })),
                f ||
                    h.push({
                        type: H.nc.CONTENT_INVENTORY,
                        entries: [],
                    })),
                null != V.current && clearTimeout(V.current),
                (V.current = setTimeout(() => {
                    d.Z.overlayMounted(...h);
                }, 1000));
        }),
        (0, f.zq)(() => {
            null != V.current && (clearTimeout(V.current), (V.current = null));
        }),
        r.useEffect(() => {
            if ((C.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), u))
                return (
                    (0, s.closeAllModalsInContext)(c.u1M),
                    n.addEventListener("contextmenu", J, !1),
                    () => {
                        n.removeEventListener("contextmenu", J, !1);
                    }
                );
            n.removeEventListener("contextmenu", J, !1);
        }, [u, n]),
        (0, i.jsx)(p.Gt, {
            value: D,
            children:
                N || j
                    ? null
                    : (0, i.jsxs)("div", {
                          id: "overlay-container",
                          className: Q.overlay,
                          children: [
                              !t && X,
                              (0, i.jsx)($, {
                                  locked: u,
                                  keybind: P,
                                  onClick: et,
                              }),
                              (0, i.jsx)(k.Z, {
                                  className: l()({
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
                              (0, i.jsx)(T.Z, {}),
                              (0, i.jsx)(A.Z, { locked: u }),
                              (0, i.jsx)(c.Ixi, { appContext: Y.IlC.OVERLAY }),
                              (0, i.jsx)(ei, {}),
                          ],
                      }),
        })
    );
}
