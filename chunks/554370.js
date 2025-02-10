n.d(t, { Z: () => ea }), n(653041), n(47120);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    s = n(952265),
    d = n(481060),
    c = n(239091),
    u = n(13245),
    h = n(615287),
    _ = n(100527),
    p = n(906732),
    f = n(146282),
    g = n(70097),
    m = n(567409),
    v = n(74299),
    x = n(199902),
    E = n(592125),
    C = n(430824),
    Z = n(131951),
    I = n(944486),
    S = n(574254),
    b = n(556296),
    y = n(808506),
    O = n(237997),
    w = n(451478),
    N = n(585483),
    T = n(358085),
    j = n(13140),
    k = n(145597),
    R = n(830917),
    A = n(86071),
    L = n(681603),
    P = n(915614),
    D = n(690336),
    M = n(333031),
    z = n(371651),
    V = n(610394),
    W = n(388627),
    F = n(319414),
    U = n(561064),
    H = n(987650),
    B = n(501787),
    G = n(981631),
    Y = n(206583),
    K = n(388032),
    X = n(758121);
let Q = !T.isPlatformEmbedded && !1,
    J = Q
        ? (0, i.jsx)(g.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: X.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    q = null;
function $(e) {
    e.preventDefault();
}
function ee(e) {
    (0, c.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: B.OVERLAY_V3_LAYOUT_ID,
                version: 1
            });
    });
}
let et = o.memo(function (e) {
        let { keybind: t, onClick: n, locked: o } = e;
        return (0, i.jsx)(d.P3F, {
            className: l()(X.overlayBackground, {
                [X.overlayActive]: !o,
                [X.overlayLocked]: o
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: o } = e;
                o === G.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ee,
            children: o
                ? null
                : (0, i.jsx)(M.Z, {
                      className: X.closeContainer,
                      children: (0, i.jsx)(P.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: d.Uz9
                      })
                  })
        });
    }),
    en = o.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(M.Z, {
                  className: X.closeContainer,
                  children: (0, i.jsx)(P.Z, {
                      onClick: () => u.Z.setInputLocked(!1, (0, k.QF)()),
                      IconComponent: d.d$P
                  })
              })
            : null;
    });
function ei() {
    if (null != S.Z.getContextMenu()) {
        (0, c.Zy)();
        return;
    }
    u.Z.setInputLocked(!0, (0, k.QF)());
}
function eo() {
    u.Z.setFocusedPID(k.Js);
}
function er() {
    u.Z.setFocusedPID(null);
}
function el(e) {
    let t = V.ZP.isInputLocked((0, k.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? N.S.dispatch(G.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }) : 'keydown' === e.type.toLowerCase() && N.S.dispatch(G.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function ea(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, U.Z)(),
        {
            locked: r,
            focused: c,
            incompatibleApp: g,
            hasValidResolution: S,
            hasZeroSizeDimension: N,
            keybind: T
        } = (0, a.cj)(
            [V.ZP, O.Z, w.Z, b.ZP],
            () => {
                let e = w.Z.windowSize((0, R.ZY)(n)),
                    t = b.ZP.getOverlayKeybind(),
                    i = (0, k.QF)();
                return {
                    locked: V.ZP.isInputLocked(i),
                    focused: i === k.Js ? O.Z.isFocused(i) : V.ZP.isFocused((0, k.QF)()),
                    incompatibleApp: O.Z.incompatibleApp,
                    hasValidResolution: (0, k.Te)(e),
                    hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                    keybind: null != t ? (0, j.BB)(t.shortcut, !0) : '???'
                };
            },
            [n]
        ),
        { analyticsLocations: P } = (0, p.ZP)(_.Z.OVERLAY);
    return (
        !(function (e, t) {
            let n = o.useRef({
                mount: e,
                unmount: t
            });
            o.useEffect(() => {
                n.current = {
                    mount: e,
                    unmount: t
                };
            }),
                o.useEffect(
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
                u.Z.overlayReady((0, k.QF)()), n.addEventListener('keydown', el), n.addEventListener('keyup', el), Q && (n.document.hasFocus() && u.Z.setFocusedPID(k.Js), n.addEventListener('focus', eo), n.addEventListener('blur', er));
            },
            () => {
                n.removeEventListener('keydown', el), n.removeEventListener('keyup', el), Q && (n.removeEventListener('focus', eo), n.removeEventListener('blur', er));
            }
        ),
        !(function () {
            let e = o.useRef(!1),
                t = (0, W.pL)(),
                n = I.Z.getVoiceChannelId(),
                i = E.Z.getChannel(n),
                r = null != i ? C.Z.getGuild(i.guild_id) : null,
                l = null != x.Z.getCurrentUserActiveStream(),
                s = null != n,
                d = (0, v.Z)(Z.Z) && !l && null != t,
                c = s && null != r && null != n,
                _ = (0, m.Ns)(null == t ? void 0 : t.id),
                p = (0, a.e7)([f.Z], () => null != f.Z.getLastFeedFetchDate(Y.YN.GAME_PROFILE_FEED));
            o.useEffect(() => {
                var i;
                if (!p || e.current) return;
                e.current = !0;
                let o = null !== (i = y.Z.getFocusedPID()) && void 0 !== i ? i : (0, k.QF)();
                if (
                    (u.Z.track(G.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: s,
                        text_widget_connected: !1,
                        overlay_render_method: h.gl[z.Z.getOverlayMethod(o)]
                    }),
                    z.Z.hasChangedRenderMode(o))
                )
                    return;
                let l = [{ type: H.nc.WELCOME }];
                if (
                    (d && c
                        ? l.push({
                              type: H.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: r
                          })
                        : d &&
                          l.push({
                              type: H.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    _.length > 0)
                ) {
                    let { enabled: e } = A.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        l.push({
                            type: H.nc.CONTENT_INVENTORY,
                            entries: _
                        });
                }
                u.Z.overlayMounted(...l);
            }, [p, _, s, d, c, t, n, r]);
        })(),
        o.useEffect(() => {
            if (r) {
                if (((0, s.Ay)(d.u1M), n.addEventListener('contextmenu', $, !1), null != q)) {
                    let e = Date.now() - q;
                    u.Z.track(G.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (q = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', $, !1);
                };
            }
            n.removeEventListener('contextmenu', $, !1), null == q && ((q = Date.now()), u.Z.track(G.rMx.OVERLAY_UNLOCKED));
        }, [r, n]),
        (0, i.jsx)(p.Gt, {
            value: P,
            children: (0, i.jsx)(d.vWI, {
                children:
                    N || g
                        ? null
                        : (0, i.jsx)(d.f6W, {
                              theme: G.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(X.overlay, e),
                                      children: [
                                          !t && J,
                                          (0, i.jsx)(et, {
                                              locked: r,
                                              keybind: T,
                                              onClick: ei
                                          }),
                                          S
                                              ? (0, i.jsx)(D.Z, {
                                                    className: l()({
                                                        [X.layoutLocked]: r,
                                                        [X.layoutUnlocked]: !r
                                                    })
                                                })
                                              : r
                                                ? null
                                                : (0, i.jsx)('div', {
                                                      className: X.invalidContainer,
                                                      children: (0, i.jsx)('div', {
                                                          className: X.inactiveContainer,
                                                          children: K.intl.format(K.t.ketnW1, k.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(F.Z, {}),
                                          !t &&
                                              Q &&
                                              (0, i.jsx)(en, {
                                                  locked: r,
                                                  focused: c
                                              }),
                                          (0, i.jsx)(L.Z, {})
                                      ]
                                  })
                          })
            })
        })
    );
}
