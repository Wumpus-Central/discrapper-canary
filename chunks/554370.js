n.d(t, { Z: () => el }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(952265),
    c = n(481060),
    u = n(239091),
    d = n(13245),
    p = n(100527),
    f = n(906732),
    h = n(146282),
    g = n(70097),
    _ = n(567409),
    m = n(74299),
    v = n(199902),
    O = n(592125),
    b = n(430824),
    y = n(131951),
    E = n(944486),
    x = n(556296),
    I = n(808506),
    S = n(237997),
    C = n(451478),
    j = n(585483),
    w = n(358085),
    Z = n(13140),
    N = n(145597),
    P = n(830917),
    T = n(86071),
    k = n(32300),
    A = n(681603),
    D = n(915614),
    R = n(268861),
    L = n(690336),
    W = n(333031),
    M = n(371651),
    z = n(610394),
    V = n(388627),
    U = n(319414),
    F = n(561064),
    B = n(987650),
    G = n(501787),
    H = n(981631),
    Y = n(206583),
    Q = n(254908);
let K = !w.isPlatformEmbedded && !1,
    X = K
        ? (0, i.jsx)(g.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: Q.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    J = null;
function q(e) {
    e.preventDefault();
}
function $(e) {
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
                        layoutId: G.OVERLAY_V3_LAYOUT_ID,
                        version: 1
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
let ee = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(c.P3F, {
            className: l()(Q.overlayBackground, {
                [Q.overlayActive]: !r,
                [Q.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === H.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: r
                ? null
                : (0, i.jsx)(W.Z, {
                      className: Q.closeContainer,
                      children: (0, i.jsx)(D.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: c.Uz9
                      })
                  })
        });
    }),
    et = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(W.Z, {
                  className: Q.closeContainer,
                  children: (0, i.jsx)(D.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, N.QF)()),
                      IconComponent: c.d$P
                  })
              })
            : null;
    });
function en() {
    d.Z.setInputLocked(!0, (0, N.QF)());
}
function ei() {
    d.Z.setFocusedPID(N.Js);
}
function er() {
    d.Z.setFocusedPID(null);
}
function eo(e) {
    let t = z.ZP.isInputLocked((0, N.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? j.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }) : 'keydown' === e.type.toLowerCase() && j.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function el(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, F.Z)(),
        {
            locked: o,
            focused: u,
            incompatibleApp: g,
            hasZeroSizeDimension: j,
            keybind: w
        } = (0, a.cj)(
            [z.ZP, S.Z, C.Z, x.ZP],
            () => {
                let e = C.Z.windowSize((0, P.ZY)(n)),
                    t = x.ZP.getOverlayKeybind(),
                    i = (0, N.QF)();
                return {
                    locked: z.ZP.isInputLocked(i),
                    focused: i === N.Js ? S.Z.isFocused(i) : z.ZP.isFocused((0, N.QF)()),
                    incompatibleApp: S.Z.incompatibleApp,
                    hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                    keybind: null != t ? (0, Z.BB)(t.shortcut, !0) : '???'
                };
            },
            [n]
        ),
        { analyticsLocations: D } = (0, f.ZP)(p.Z.OVERLAY);
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
                d.Z.overlayReady((0, N.QF)()), n.addEventListener('keydown', eo), n.addEventListener('keyup', eo), K && (n.document.hasFocus() && d.Z.setFocusedPID(N.Js), n.addEventListener('focus', ei), n.addEventListener('blur', er));
            },
            () => {
                n.removeEventListener('keydown', eo), n.removeEventListener('keyup', eo), K && (n.removeEventListener('focus', ei), n.removeEventListener('blur', er));
            }
        ),
        !(function () {
            let e = r.useRef(!1),
                t = (0, V.pL)(),
                n = E.Z.getVoiceChannelId(),
                i = O.Z.getChannel(n),
                o = null != i ? b.Z.getGuild(i.guild_id) : null,
                l = null != v.Z.getCurrentUserActiveStream(),
                s = null != n,
                c = (0, m.Z)(y.Z) && !l && null != t,
                u = s && null != o && null != n,
                { enabled: p } = T.Z.useExperiment({ location: 'Overlay' }, { autoTrackExposure: !0 }),
                { allowActivityWidget: f } = (0, k.o4)('overlay'),
                g = (0, _.Ns)(null == t ? void 0 : t.id),
                x = (0, a.e7)([h.Z], () => null != h.Z.getLastFeedFetchDate(Y.YN.GAME_PROFILE_FEED) || (!p && !f), [p, f]);
            r.useEffect(() => {
                var i;
                if (!x || e.current) return;
                e.current = !0;
                let r = null !== (i = I.Z.getFocusedPID()) && void 0 !== i ? i : (0, N.QF)();
                if (M.default.hasChangedRenderMode(r)) return;
                let l = [{ type: B.nc.WELCOME }];
                c && u
                    ? l.push({
                          type: B.nc.GO_LIVE_VOICE,
                          game: t,
                          voiceChannelId: n,
                          voiceGuild: o
                      })
                    : c &&
                      l.push({
                          type: B.nc.GO_LIVE_NON_VOICE,
                          game: t
                      }),
                    g.length > 0 &&
                        (p || f) &&
                        l.push({
                            type: B.nc.CONTENT_INVENTORY,
                            entries: g
                        }),
                    d.Z.overlayMounted(...l);
            }, [x, g, s, c, u, t, n, o, f, p]);
        })(),
        r.useEffect(() => {
            if (o) {
                if (((0, s.Ay)(c.u1M), n.addEventListener('contextmenu', q, !1), null != J)) {
                    let e = Date.now() - J;
                    d.Z.track(H.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (J = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', q, !1);
                };
            }
            n.removeEventListener('contextmenu', q, !1), null == J && ((J = Date.now()), d.Z.track(H.rMx.OVERLAY_UNLOCKED));
        }, [o, n]),
        (0, i.jsx)(f.Gt, {
            value: D,
            children: (0, i.jsx)(c.vWI, {
                children:
                    j || g
                        ? null
                        : (0, i.jsx)(c.f6W, {
                              theme: H.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(Q.overlay, e),
                                      children: [
                                          !t && X,
                                          (0, i.jsx)(ee, {
                                              locked: o,
                                              keybind: w,
                                              onClick: en
                                          }),
                                          (0, i.jsx)(L.Z, {
                                              className: l()({
                                                  [Q.layoutLocked]: o,
                                                  [Q.layoutUnlocked]: !o
                                              })
                                          }),
                                          (0, i.jsx)(U.Z, {}),
                                          !t &&
                                              K &&
                                              (0, i.jsx)(et, {
                                                  locked: o,
                                                  focused: u
                                              }),
                                          (0, i.jsx)(A.Z, {}),
                                          (0, i.jsx)(R.Z, { locked: o }),
                                          (0, i.jsx)(c.Ixi, {})
                                      ]
                                  })
                          })
            })
        })
    );
}
