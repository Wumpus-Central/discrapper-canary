n.d(t, { Z: () => en }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(952265),
    c = n(481060),
    u = n(239091),
    d = n(13245),
    p = n(100527),
    h = n(906732),
    f = n(70097),
    m = n(74299),
    g = n(199902),
    O = n(592125),
    v = n(430824),
    y = n(131951),
    E = n(944486),
    b = n(556296),
    j = n(808506),
    x = n(237997),
    I = n(451478),
    S = n(585483),
    C = n(358085),
    N = n(13140),
    Z = n(145597),
    w = n(830917),
    P = n(32300),
    _ = n(681603),
    T = n(915614),
    D = n(268861),
    k = n(690336),
    A = n(333031),
    L = n(371651),
    R = n(610394),
    W = n(388627),
    M = n(319414),
    V = n(561064),
    z = n(987650),
    U = n(757744),
    G = n(981631),
    F = n(913422);
let Y = !C.isPlatformEmbedded && !1,
    H = Y
        ? (0, i.jsx)(f.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: F.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    B = null;
function Q(e) {
    e.preventDefault();
}
function K(e) {
    (0, u.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) => {
            var n, r;
            return (0, i.jsx)(
                e,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, t)),
                (r = r =
                    {
                        layoutId: U.$,
                        version: U.H
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
                n)
            );
        };
    });
}
let X = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(c.P3F, {
            className: o()(F.overlayBackground, {
                [F.overlayActive]: !r,
                [F.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === G.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: K,
            children: r
                ? null
                : (0, i.jsx)(A.Z, {
                      className: F.closeContainer,
                      children: (0, i.jsx)(T.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: c.Uz9
                      })
                  })
        });
    }),
    J = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(A.Z, {
                  className: F.closeContainer,
                  children: (0, i.jsx)(T.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, Z.getPID)()),
                      IconComponent: c.d$P
                  })
              })
            : null;
    });
function q() {
    d.Z.setInputLocked(!0, (0, Z.getPID)());
}
function $() {
    d.Z.setFocusedPID(Z.DEV_PID);
}
function ee() {
    d.Z.setFocusedPID(null);
}
function et(e) {
    let t = R.ZP.isInputLocked((0, Z.getPID)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? S.S.dispatch(G.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }) : 'keydown' === e.type.toLowerCase() && S.S.dispatch(G.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function en(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, V.Z)(),
        {
            locked: l,
            focused: u,
            incompatibleApp: f,
            hasZeroSizeDimension: C,
            keybind: T
        } = (0, a.cj)(
            [R.ZP, x.default, I.Z, b.ZP],
            () => {
                let e = I.Z.windowSize((0, w.ZY)(n)),
                    t = b.ZP.getOverlayKeybind(),
                    i = (0, Z.getPID)();
                return {
                    locked: R.ZP.isInputLocked(i),
                    focused: i === Z.DEV_PID ? x.default.isFocused(i) : R.ZP.isFocused((0, Z.getPID)()),
                    incompatibleApp: x.default.incompatibleApp,
                    hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                    keybind: null != t ? (0, N.BB)(t.shortcut, !0) : '???'
                };
            },
            [n]
        ),
        { analyticsLocations: A } = (0, h.ZP)(p.Z.OVERLAY);
    return (
        !(function (e, t) {
            let n = r.useRef({
                mount: e,
                unmount: t
            });
            r.useEffect(() => {
                n.current = {
                    mount: e,
                    unmount: t
                };
            }),
                r.useEffect(
                    () => (
                        n.current.mount(),
                        () => {
                            n.current.unmount();
                        }
                    ),
                    []
                );
        })(
            () => {
                d.Z.overlayReady((0, Z.getPID)()), n.addEventListener('keydown', et), n.addEventListener('keyup', et), Y && (n.document.hasFocus() && d.Z.setFocusedPID(Z.DEV_PID), n.addEventListener('focus', $), n.addEventListener('blur', ee));
            },
            () => {
                n.removeEventListener('keydown', et), n.removeEventListener('keyup', et), Y && (n.removeEventListener('focus', $), n.removeEventListener('blur', ee));
            }
        ),
        !(function () {
            let e = r.useRef(!1),
                t = (0, W.pL)(),
                n = E.Z.getVoiceChannelId(),
                i = O.Z.getChannel(n),
                l = null != i ? v.Z.getGuild(i.guild_id) : null,
                o = null != g.Z.getCurrentUserActiveStream(),
                a = null != n,
                s = (0, m.Z)(y.Z) && !o && null != t,
                c = a && null != l && null != n,
                { allowActivityWidget: u } = (0, P.o4)('overlay');
            r.useEffect(() => {
                var i;
                if (e.current) return;
                e.current = !0;
                let r = null !== (i = j.default.getFocusedPID()) && void 0 !== i ? i : (0, Z.getPID)();
                if (L.default.hasChangedRenderMode(r)) return;
                let o = [{ type: z.nc.WELCOME }];
                s && c
                    ? o.push({
                          type: z.nc.GO_LIVE_VOICE,
                          game: t,
                          voiceChannelId: n,
                          voiceGuild: l
                      })
                    : s &&
                      o.push({
                          type: z.nc.GO_LIVE_NON_VOICE,
                          game: t
                      }),
                    u &&
                        o.push({
                            type: z.nc.CONTENT_INVENTORY,
                            entries: []
                        }),
                    d.Z.overlayMounted(...o);
            }, [a, s, c, t, n, l, u]);
        })(),
        r.useEffect(() => {
            if ((S.S.dispatch(G.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }), l)) {
                if (((0, s.Ay)(c.u1M), n.addEventListener('contextmenu', Q, !1), null != B)) {
                    let e = Date.now() - B;
                    d.Z.track(G.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (B = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', Q, !1);
                };
            }
            n.removeEventListener('contextmenu', Q, !1), null == B && ((B = Date.now()), d.Z.track(G.rMx.OVERLAY_UNLOCKED));
        }, [l, n]),
        (0, i.jsx)(h.Gt, {
            value: A,
            children: (0, i.jsx)(c.vWI, {
                children:
                    C || f
                        ? null
                        : (0, i.jsx)(c.f6W, {
                              theme: G.BRd.MIDNIGHT,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      id: 'overlay-container',
                                      className: o()(F.overlay, e),
                                      children: [
                                          !t && H,
                                          (0, i.jsx)(X, {
                                              locked: l,
                                              keybind: T,
                                              onClick: q
                                          }),
                                          (0, i.jsx)(k.Z, {
                                              className: o()({
                                                  [F.layoutLocked]: l,
                                                  [F.layoutUnlocked]: !l
                                              })
                                          }),
                                          (0, i.jsx)(M.Z, {}),
                                          !t &&
                                              Y &&
                                              (0, i.jsx)(J, {
                                                  locked: l,
                                                  focused: u
                                              }),
                                          (0, i.jsx)(_.Z, {}),
                                          (0, i.jsx)(D.Z, { locked: l }),
                                          (0, i.jsx)(c.Ixi, {})
                                      ]
                                  })
                          })
            })
        })
    );
}
