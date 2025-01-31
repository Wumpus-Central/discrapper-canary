n.d(t, { Z: () => el }), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(442837),
    s = n(952265),
    c = n(481060),
    d = n(239091),
    u = n(13245),
    h = n(615287),
    _ = n(100527),
    m = n(906732),
    g = n(146282),
    p = n(70097),
    f = n(567409),
    x = n(74299),
    v = n(199902),
    C = n(592125),
    b = n(430824),
    Z = n(131951),
    I = n(944486),
    j = n(574254),
    w = n(556296),
    y = n(808506),
    E = n(237997),
    k = n(451478),
    N = n(585483),
    S = n(358085),
    T = n(13140),
    O = n(145597),
    P = n(830917),
    L = n(86071),
    A = n(681603),
    R = n(915614),
    V = n(690336),
    W = n(333031),
    M = n(371651),
    D = n(610394),
    z = n(388627),
    F = n(319414),
    G = n(561064),
    B = n(987650),
    U = n(501787),
    H = n(981631),
    Y = n(206583),
    X = n(388032),
    K = n(167566);
let Q = !S.isPlatformEmbedded && !1,
    q = Q
        ? (0, i.jsx)(p.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: K.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    J = null;
function $(e) {
    e.preventDefault();
}
function ee(e) {
    (0, d.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: U.OVERLAY_V3_LAYOUT_ID,
                version: 1
            });
    });
}
let et = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(c.P3F, {
            className: a()(K.overlayBackground, {
                [K.overlayActive]: !r,
                [K.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === H.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ee,
            children: r
                ? null
                : (0, i.jsx)(W.Z, {
                      className: K.closeContainer,
                      children: (0, i.jsx)(R.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: c.Uz9
                      })
                  })
        });
    }),
    en = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(W.Z, {
                  className: K.closeContainer,
                  children: (0, i.jsx)(R.Z, {
                      onClick: () => u.Z.setInputLocked(!1, (0, O.QF)()),
                      IconComponent: c.d$P
                  })
              })
            : null;
    });
function ei() {
    if (null != j.Z.getContextMenu()) {
        (0, d.Zy)();
        return;
    }
    u.Z.setInputLocked(!0, (0, O.QF)());
}
function er() {
    u.Z.setFocusedPID(O.Js);
}
function eo() {
    u.Z.setFocusedPID(null);
}
function ea(e) {
    let t = D.ZP.isInputLocked((0, O.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? N.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }) : 'keydown' === e.type.toLowerCase() && N.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function el(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, G.Z)(),
        {
            locked: o,
            focused: d,
            incompatibleApp: p,
            hasValidResolution: j,
            hasZeroSizeDimension: N,
            keybind: S
        } = (0, l.cj)(
            [D.ZP, E.Z, k.Z, w.Z],
            () => {
                let e = k.Z.windowSize((0, P.ZY)(n)),
                    t = w.Z.getOverlayKeybind();
                return {
                    locked: D.ZP.isInputLocked((0, O.QF)()),
                    focused: D.ZP.isFocused((0, O.QF)()),
                    incompatibleApp: E.Z.incompatibleApp,
                    hasValidResolution: (0, O.Te)(e),
                    hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                    keybind: null != t ? (0, T.BB)(t.shortcut, !0) : '???'
                };
            },
            [n]
        ),
        { analyticsLocations: R } = (0, m.ZP)(_.Z.OVERLAY);
    return (
        !(function (e, t) {
            let n = r.useRef({
                mount: e,
                unmount: t
            });
            r.useEffect(
                () =>
                    void (n.current = {
                        mount: e,
                        unmount: t
                    })
            ),
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
                u.Z.overlayReady((0, O.QF)()), n.addEventListener('keydown', ea), n.addEventListener('keyup', ea), Q && (n.document.hasFocus() && u.Z.setFocusedPID(O.Js), n.addEventListener('focus', er), n.addEventListener('blur', eo));
            },
            () => {
                n.removeEventListener('keydown', ea), n.removeEventListener('keyup', ea), Q && (n.removeEventListener('focus', er), n.removeEventListener('blur', eo));
            }
        ),
        !(function () {
            let e = r.useRef(!1),
                t = (0, z.pL)(),
                n = I.Z.getVoiceChannelId(),
                i = C.Z.getChannel(n),
                o = null != i ? b.Z.getGuild(i.guild_id) : null,
                a = null != v.Z.getCurrentUserActiveStream(),
                s = null != n,
                c = (0, x.Z)(Z.Z) && !a && null != t,
                d = s && null != o && null != n,
                _ = (0, f.Ns)(null == t ? void 0 : t.id),
                m = (0, l.e7)([g.Z], () => null != g.Z.getLastFeedFetchDate(Y.YN.GAME_PROFILE_FEED));
            r.useEffect(() => {
                var i;
                if (!m || e.current) return;
                (e.current = !0),
                    u.Z.track(H.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: s,
                        text_widget_connected: !1,
                        overlay_render_method: h.gl[h.gl.OutOfProcess]
                    });
                let r = null !== (i = y.Z.getFocusedPID()) && void 0 !== i ? i : (0, O.QF)();
                if (M.Z.hasChangedRenderMode(r)) return;
                let a = [{ type: B.nc.WELCOME }];
                if (
                    (c && d
                        ? a.push({
                              type: B.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: o
                          })
                        : c &&
                          a.push({
                              type: B.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    _.length > 0)
                ) {
                    let { enabled: e } = L.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        a.push({
                            type: B.nc.CONTENT_INVENTORY,
                            entries: _
                        });
                }
                u.Z.overlayMounted(...a);
            }, [m, _, s, c, d, t, n, o]);
        })(),
        r.useEffect(() => {
            if (o) {
                if (((0, s.Ay)(c.u1M), n.addEventListener('contextmenu', $, !1), null != J)) {
                    let e = Date.now() - J;
                    u.Z.track(H.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (J = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', $, !1);
                };
            }
            n.removeEventListener('contextmenu', $, !1), null == J && ((J = Date.now()), u.Z.track(H.rMx.OVERLAY_UNLOCKED));
        }, [o, n]),
        (0, i.jsx)(m.Gt, {
            value: R,
            children: (0, i.jsx)(c.vWI, {
                children:
                    N || p
                        ? null
                        : (0, i.jsx)(c.f6W, {
                              theme: H.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: a()(K.overlay, e),
                                      children: [
                                          !t && q,
                                          (0, i.jsx)(et, {
                                              locked: o,
                                              keybind: S,
                                              onClick: ei
                                          }),
                                          j
                                              ? (0, i.jsx)(V.Z, {
                                                    className: a()({
                                                        [K.layoutLocked]: o,
                                                        [K.layoutUnlocked]: !o
                                                    })
                                                })
                                              : o
                                                ? null
                                                : (0, i.jsx)('div', {
                                                      className: K.invalidContainer,
                                                      children: (0, i.jsx)('div', {
                                                          className: K.inactiveContainer,
                                                          children: X.intl.format(X.t.ketnW1, O.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(F.Z, {}),
                                          !t &&
                                              Q &&
                                              (0, i.jsx)(en, {
                                                  locked: o,
                                                  focused: d
                                              }),
                                          (0, i.jsx)(A.Z, {})
                                      ]
                                  })
                          })
            })
        })
    );
}
