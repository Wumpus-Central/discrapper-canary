n.d(t, { Z: () => er }), n(539854), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
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
    E = n(430824),
    v = n(131951),
    S = n(944486),
    b = n(556296),
    x = n(237997),
    j = n(451478),
    I = n(585483),
    C = n(358085),
    Z = n(13140),
    N = n(830917),
    w = n(837268),
    T = n(32300),
    _ = n(681603),
    P = n(915614),
    A = n(268861),
    D = n(690336),
    R = n(333031),
    k = n(371651),
    L = n(624864),
    M = n(610394),
    V = n(322155),
    z = n(338949),
    U = n(398269),
    W = n(388627),
    G = n(319414),
    F = n(561064),
    H = n(987650),
    Y = n(757744),
    B = n(981631),
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
let $ = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e,
            l = (0, T.T_)(p.Z.OVERLAY);
        return (0, i.jsx)(u.P3F, {
            className: a()(Q.overlayBackground, {
                [Q.overlayActive]: !r,
                [Q.overlayLocked]: r,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === B.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: q,
            children: r
                ? null
                : (0, i.jsxs)(R.Z, {
                      className: Q.topRightContainer,
                      children: [
                          l
                              ? (0, i.jsx)(P.Z, {
                                    onClick: () => (0, U.N)(p.Z.OVERLAY, B.IlC.OVERLAY),
                                    IconComponent: u.U65,
                                })
                              : null,
                          (0, i.jsx)(P.Z, {
                              keybind: t,
                              onClick: n,
                              IconComponent: u.Uz9,
                          }),
                      ],
                  }),
        });
    }),
    ee = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(R.Z, {
                  className: Q.topRightContainer,
                  children: (0, i.jsx)(P.Z, {
                      onClick: () => d.Z.setInputLocked(!1, M.Z.getTargetPID()),
                      IconComponent: u.d$P,
                  }),
              })
            : null;
    });
function et() {
    d.Z.setInputLocked(!0, M.Z.getTargetPID());
}
function en(e) {
    let t = V.Z.isInputLocked(M.Z.getTargetPID());
    "alt" !== e.key.toLowerCase() ||
        t ||
        ("keyup" === e.type.toLowerCase()
            ? I.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 })
            : "keydown" === e.type.toLowerCase() && I.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function ei() {
    return (0, o.e7)([z.Z], () => z.Z.hasRenderDebugMode(w.GO.WindowContainer))
        ? (0, i.jsx)("div", { className: Q.windowContainerDebug })
        : null;
}
function er(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, F.Z)(),
        l = (0, o.e7)([M.Z], () => M.Z.getTargetPID()),
        {
            locked: c,
            focused: m,
            incompatibleApp: C,
            hasZeroSizeDimension: w,
            keybind: P,
        } = (0, o.cj)([M.Z, x.default, j.Z, b.ZP, V.Z], () => {
            let e = j.Z.windowSize((0, N.ZY)(n)),
                t = b.ZP.getOverlayKeybind();
            return {
                locked: V.Z.isInputLocked(l),
                focused: M.Z.isFocused(l),
                incompatibleApp: x.default.incompatibleApp,
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, Z.BB)(t.shortcut, !0) : "???",
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
                d.Z.overlayReady(M.Z.getTargetPID()),
                    n.addEventListener("keydown", en),
                    n.addEventListener("keyup", en);
            },
            () => {
                n.removeEventListener("keydown", en), n.removeEventListener("keyup", en);
            },
        );
    let z = r.useRef(null);
    return (
        (0, h.ZP)(() => {
            let e = (0, W.pL)(),
                t = S.Z.getVoiceChannelId(),
                n = O.Z.getChannel(t),
                i = null != n ? E.Z.getGuild(n.guild_id) : null,
                r = null != y.Z.getCurrentUserActiveStream(),
                l = null != t,
                a = (0, g.Z)(v.Z) && !r && null != e,
                o = l && null != i && null != t,
                s = M.Z.getTargetPID();
            if (k.default.hasChangedRenderMode(s)) return;
            let u = L.Z.isNotificationDisabled(H.n0.WelcomeNudge),
                c = L.Z.isNotificationDisabled(H.n0.GoLiveNudge),
                h = L.Z.isNotificationDisabled(H.n0.ActivityInvite),
                p = [];
            !u &&
                (p.push({ type: H.nc.WELCOME }),
                !c &&
                    (a && o
                        ? p.push({
                              type: H.nc.GO_LIVE_VOICE,
                              game: e,
                              voiceChannelId: t,
                              voiceGuild: i,
                          })
                        : a &&
                          p.push({
                              type: H.nc.GO_LIVE_NON_VOICE,
                              game: e,
                          })),
                h ||
                    p.push({
                        type: H.nc.CONTENT_INVENTORY,
                        entries: [],
                    })),
                null != z.current && clearTimeout(z.current),
                (z.current = setTimeout(() => {
                    d.Z.overlayMounted(...p);
                }, 1000));
        }),
        (0, h.zq)(() => {
            null != z.current && (clearTimeout(z.current), (z.current = null));
        }),
        r.useEffect(() => {
            if ((I.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), c))
                return (
                    (0, s.Ay)(u.u1M),
                    n.addEventListener("contextmenu", J, !1),
                    () => {
                        n.removeEventListener("contextmenu", J, !1);
                    }
                );
            n.removeEventListener("contextmenu", J, !1);
        }, [c, n]),
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
                                  locked: c,
                                  keybind: P,
                                  onClick: et,
                              }),
                              (0, i.jsx)(D.Z, {
                                  className: a()({
                                      [Q.layoutLocked]: c,
                                      [Q.layoutUnlocked]: !c,
                                  }),
                              }),
                              (0, i.jsx)(G.Z, {}),
                              !t &&
                                  K &&
                                  (0, i.jsx)(ee, {
                                      locked: c,
                                      focused: m,
                                  }),
                              (0, i.jsx)(_.Z, {}),
                              (0, i.jsx)(A.Z, { locked: c }),
                              (0, i.jsx)(u.Ixi, { appContext: B.IlC.OVERLAY }),
                              (0, i.jsx)(ei, {}),
                          ],
                      }),
        })
    );
}
