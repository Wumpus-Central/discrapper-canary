n.d(t, { Z: () => es }), n(653041), n(47120);
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
    Z = n(355863),
    I = n(131951),
    S = n(944486),
    b = n(574254),
    y = n(556296),
    w = n(808506),
    O = n(237997),
    N = n(451478),
    T = n(585483),
    j = n(358085),
    k = n(13140),
    R = n(145597),
    A = n(830917),
    L = n(86071),
    P = n(681603),
    D = n(915614),
    M = n(690336),
    z = n(333031),
    V = n(371651),
    W = n(610394),
    F = n(388627),
    U = n(319414),
    H = n(561064),
    B = n(987650),
    G = n(501787),
    Y = n(981631),
    K = n(206583),
    X = n(388032),
    Q = n(758121);
let J = !j.isPlatformEmbedded && !1,
    q = J
        ? (0, i.jsx)(g.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: Q.videoDev,
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
                layoutId: G.OVERLAY_V3_LAYOUT_ID,
                version: 1
            });
    });
}
let en = o.memo(function (e) {
        let { keybind: t, onClick: n, locked: o } = e;
        return (0, i.jsx)(d.P3F, {
            className: l()(Q.overlayBackground, {
                [Q.overlayActive]: !o,
                [Q.overlayLocked]: o
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: o } = e;
                o === Y.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: et,
            children: o
                ? null
                : (0, i.jsx)(z.Z, {
                      className: Q.closeContainer,
                      children: (0, i.jsx)(D.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: d.Uz9
                      })
                  })
        });
    }),
    ei = o.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(z.Z, {
                  className: Q.closeContainer,
                  children: (0, i.jsx)(D.Z, {
                      onClick: () => u.Z.setInputLocked(!1, (0, R.QF)()),
                      IconComponent: d.d$P
                  })
              })
            : null;
    });
function eo() {
    if (null != b.Z.getContextMenu()) {
        (0, c.Zy)();
        return;
    }
    u.Z.setInputLocked(!0, (0, R.QF)());
}
function er() {
    u.Z.setFocusedPID(R.Js);
}
function el() {
    u.Z.setFocusedPID(null);
}
function ea(e) {
    let t = W.ZP.isInputLocked((0, R.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? T.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }) : 'keydown' === e.type.toLowerCase() && T.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function es(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, H.Z)(),
        {
            locked: r,
            focused: c,
            incompatibleApp: g,
            hasValidResolution: b,
            hasZeroSizeDimension: T,
            keybind: j
        } = (0, a.cj)(
            [W.ZP, O.Z, N.Z, y.ZP],
            () => {
                let e = N.Z.windowSize((0, A.ZY)(n)),
                    t = y.ZP.getOverlayKeybind(),
                    i = (0, R.QF)();
                return {
                    locked: W.ZP.isInputLocked(i),
                    focused: i === R.Js ? O.Z.isFocused(i) : W.ZP.isFocused((0, R.QF)()),
                    incompatibleApp: O.Z.incompatibleApp,
                    hasValidResolution: (0, R.Te)(e),
                    hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                    keybind: null != t ? (0, k.BB)(t.shortcut, !0) : '???'
                };
            },
            [n]
        ),
        { analyticsLocations: D } = (0, p.ZP)(_.Z.OVERLAY);
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
                u.Z.overlayReady((0, R.QF)()), n.addEventListener('keydown', ea), n.addEventListener('keyup', ea), J && (n.document.hasFocus() && u.Z.setFocusedPID(R.Js), n.addEventListener('focus', er), n.addEventListener('blur', el));
            },
            () => {
                n.removeEventListener('keydown', ea), n.removeEventListener('keyup', ea), J && (n.removeEventListener('focus', er), n.removeEventListener('blur', el));
            }
        ),
        !(function () {
            let e = o.useRef(!1),
                t = (0, F.pL)(),
                n = S.Z.getVoiceChannelId(),
                i = E.Z.getChannel(n),
                r = null != i ? C.Z.getGuild(i.guild_id) : null,
                l = null != x.Z.getCurrentUserActiveStream(),
                s = null != n,
                d = (0, v.Z)(I.Z) && !l && null != t,
                c = s && null != r && null != n,
                _ = (0, m.Ns)(null == t ? void 0 : t.id),
                p = (0, a.e7)([f.Z], () => null != f.Z.getLastFeedFetchDate(K.YN.GAME_PROFILE_FEED));
            o.useEffect(() => {
                var i;
                if (!p || e.current) return;
                e.current = !0;
                let o = null !== (i = w.Z.getFocusedPID()) && void 0 !== i ? i : (0, R.QF)();
                if (
                    (u.Z.track(Y.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: s,
                        text_widget_connected: !1,
                        overlay_render_method: h.gl[V.default.getOverlayMethod(o)],
                        unpinned_widget_types: Z.Z.getAllUnpinnedPinnedWidgets(G.OVERLAY_V3_LAYOUT_ID)
                    }),
                    V.default.hasChangedRenderMode(o))
                )
                    return;
                let l = [{ type: B.nc.WELCOME }];
                if (
                    (d && c
                        ? l.push({
                              type: B.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: r
                          })
                        : d &&
                          l.push({
                              type: B.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    _.length > 0)
                ) {
                    let { enabled: e } = L.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        l.push({
                            type: B.nc.CONTENT_INVENTORY,
                            entries: _
                        });
                }
                u.Z.overlayMounted(...l);
            }, [p, _, s, d, c, t, n, r]);
        })(),
        o.useEffect(() => {
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
            value: D,
            children: (0, i.jsx)(d.vWI, {
                children:
                    T || g
                        ? null
                        : (0, i.jsx)(d.f6W, {
                              theme: Y.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(Q.overlay, e),
                                      children: [
                                          !t && q,
                                          (0, i.jsx)(en, {
                                              locked: r,
                                              keybind: j,
                                              onClick: eo
                                          }),
                                          b
                                              ? (0, i.jsx)(M.Z, {
                                                    className: l()({
                                                        [Q.layoutLocked]: r,
                                                        [Q.layoutUnlocked]: !r
                                                    })
                                                })
                                              : r
                                                ? null
                                                : (0, i.jsx)('div', {
                                                      className: Q.invalidContainer,
                                                      children: (0, i.jsx)('div', {
                                                          className: Q.inactiveContainer,
                                                          children: X.intl.format(X.t.ketnW1, R.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(U.Z, {}),
                                          !t &&
                                              J &&
                                              (0, i.jsx)(ei, {
                                                  locked: r,
                                                  focused: c
                                              }),
                                          (0, i.jsx)(P.Z, {})
                                      ]
                                  })
                          })
            })
        })
    );
}
