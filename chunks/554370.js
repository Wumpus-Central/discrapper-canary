n.d(t, { Z: () => es }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
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
    E = n(199902),
    I = n(592125),
    x = n(430824),
    C = n(355863),
    S = n(131951),
    Z = n(944486),
    y = n(574254),
    b = n(556296),
    O = n(808506),
    N = n(237997),
    T = n(451478),
    w = n(585483),
    A = n(358085),
    k = n(13140),
    j = n(145597),
    R = n(830917),
    L = n(86071),
    D = n(681603),
    P = n(915614),
    M = n(690336),
    z = n(333031),
    V = n(371651),
    W = n(610394),
    U = n(388627),
    F = n(319414),
    G = n(561064),
    B = n(987650),
    H = n(501787),
    Y = n(981631),
    Q = n(206583),
    K = n(388032),
    X = n(470102);
let J = !A.isPlatformEmbedded && !1,
    q = J
        ? (0, i.jsx)(g.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: X.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    $ = null;
function ee(e) {
    e.preventDefault();
}
function et(e) {
    (0, c.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: H.OVERLAY_V3_LAYOUT_ID,
                version: 1
            });
    });
}
let en = l.memo(function (e) {
        let { keybind: t, onClick: n, locked: l } = e;
        return (0, i.jsx)(d.P3F, {
            className: o()(X.overlayBackground, {
                [X.overlayActive]: !l,
                [X.overlayLocked]: l
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: l } = e;
                l === Y.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: et,
            children: l
                ? null
                : (0, i.jsx)(z.Z, {
                      className: X.closeContainer,
                      children: (0, i.jsx)(P.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: d.Uz9
                      })
                  })
        });
    }),
    ei = l.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(z.Z, {
                  className: X.closeContainer,
                  children: (0, i.jsx)(P.Z, {
                      onClick: () => u.Z.setInputLocked(!1, (0, j.QF)()),
                      IconComponent: d.d$P
                  })
              })
            : null;
    });
function el() {
    if (null != y.Z.getContextMenu()) {
        (0, c.Zy)();
        return;
    }
    u.Z.setInputLocked(!0, (0, j.QF)());
}
function er() {
    u.Z.setFocusedPID(j.Js);
}
function eo() {
    u.Z.setFocusedPID(null);
}
function ea(e) {
    let t = W.ZP.isInputLocked((0, j.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? w.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }) : 'keydown' === e.type.toLowerCase() && w.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function es(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, G.Z)(),
        {
            locked: r,
            focused: c,
            incompatibleApp: g,
            hasValidResolution: y,
            hasZeroSizeDimension: w,
            keybind: A
        } = (0, a.cj)(
            [W.ZP, N.Z, T.Z, b.ZP],
            () => {
                let e = T.Z.windowSize((0, R.ZY)(n)),
                    t = b.ZP.getOverlayKeybind(),
                    i = (0, j.QF)();
                return {
                    locked: W.ZP.isInputLocked(i),
                    focused: i === j.Js ? N.Z.isFocused(i) : W.ZP.isFocused((0, j.QF)()),
                    incompatibleApp: N.Z.incompatibleApp,
                    hasValidResolution: (0, j.Te)(e),
                    hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                    keybind: null != t ? (0, k.BB)(t.shortcut, !0) : '???'
                };
            },
            [n]
        ),
        { analyticsLocations: P } = (0, p.ZP)(_.Z.OVERLAY);
    return (
        !(function (e, t) {
            let n = l.useRef({
                mount: e,
                unmount: t
            });
            l.useEffect(() => {
                n.current = {
                    mount: e,
                    unmount: t
                };
            }),
                l.useEffect(
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
                u.Z.overlayReady((0, j.QF)()), n.addEventListener('keydown', ea), n.addEventListener('keyup', ea), J && (n.document.hasFocus() && u.Z.setFocusedPID(j.Js), n.addEventListener('focus', er), n.addEventListener('blur', eo));
            },
            () => {
                n.removeEventListener('keydown', ea), n.removeEventListener('keyup', ea), J && (n.removeEventListener('focus', er), n.removeEventListener('blur', eo));
            }
        ),
        !(function () {
            let e = l.useRef(!1),
                t = (0, U.pL)(),
                n = Z.Z.getVoiceChannelId(),
                i = I.Z.getChannel(n),
                r = null != i ? x.Z.getGuild(i.guild_id) : null,
                o = null != E.Z.getCurrentUserActiveStream(),
                s = null != n,
                d = (0, v.Z)(S.Z) && !o && null != t,
                c = s && null != r && null != n,
                _ = (0, m.Ns)(null == t ? void 0 : t.id),
                p = (0, a.e7)([f.Z], () => null != f.Z.getLastFeedFetchDate(Q.YN.GAME_PROFILE_FEED));
            l.useEffect(() => {
                var i;
                if (!p || e.current) return;
                e.current = !0;
                let l = null !== (i = O.Z.getFocusedPID()) && void 0 !== i ? i : (0, j.QF)();
                if (
                    (u.Z.track(Y.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: s,
                        text_widget_connected: !1,
                        overlay_render_method: h.gl[V.default.getOverlayMethod(l)],
                        unpinned_widget_types: C.Z.getAllUnpinnedPinnedWidgets(H.OVERLAY_V3_LAYOUT_ID)
                    }),
                    V.default.hasChangedRenderMode(l))
                )
                    return;
                let o = [{ type: B.nc.WELCOME }];
                if (
                    (d && c
                        ? o.push({
                              type: B.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: r
                          })
                        : d &&
                          o.push({
                              type: B.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    _.length > 0)
                ) {
                    let { enabled: e } = L.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        o.push({
                            type: B.nc.CONTENT_INVENTORY,
                            entries: _
                        });
                }
                u.Z.overlayMounted(...o);
            }, [p, _, s, d, c, t, n, r]);
        })(),
        l.useEffect(() => {
            if (r) {
                if (((0, s.Ay)(d.u1M), n.addEventListener('contextmenu', ee, !1), null != $)) {
                    let e = Date.now() - $;
                    u.Z.track(Y.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), ($ = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', ee, !1);
                };
            }
            n.removeEventListener('contextmenu', ee, !1), null == $ && (($ = Date.now()), u.Z.track(Y.rMx.OVERLAY_UNLOCKED));
        }, [r, n]),
        (0, i.jsx)(p.Gt, {
            value: P,
            children: (0, i.jsx)(d.vWI, {
                children:
                    w || g
                        ? null
                        : (0, i.jsx)(d.f6W, {
                              theme: Y.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: o()(X.overlay, e),
                                      children: [
                                          !t && q,
                                          (0, i.jsx)(en, {
                                              locked: r,
                                              keybind: A,
                                              onClick: el
                                          }),
                                          y
                                              ? (0, i.jsx)(M.Z, {
                                                    className: o()({
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
                                                          children: K.intl.format(K.t.ketnW1, j.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(F.Z, {}),
                                          !t &&
                                              J &&
                                              (0, i.jsx)(ei, {
                                                  locked: r,
                                                  focused: c
                                              }),
                                          (0, i.jsx)(D.Z, {})
                                      ]
                                  })
                          })
            })
        })
    );
}
