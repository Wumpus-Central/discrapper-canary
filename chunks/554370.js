n.d(t, {
    Z: function () {
        return ea;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(952265),
    c = n(481060),
    d = n(239091),
    u = n(13245),
    h = n(615287),
    m = n(100527),
    p = n(906732),
    x = n(146282),
    g = n(70097),
    v = n(567409),
    f = n(74299),
    C = n(199902),
    Z = n(592125),
    b = n(430824),
    j = n(131951),
    _ = n(944486),
    I = n(574254),
    E = n(556296),
    k = n(808506),
    N = n(237997),
    w = n(451478),
    y = n(585483),
    T = n(358085),
    S = n(13140),
    L = n(145597),
    A = n(830917),
    O = n(86071),
    P = n(681603),
    V = n(915614),
    M = n(690336),
    R = n(333031),
    D = n(371651),
    z = n(610394),
    W = n(388627),
    F = n(319414),
    G = n(561064),
    B = n(987650),
    U = n(501787),
    Y = n(981631),
    H = n(206583),
    K = n(388032),
    X = n(167566);
let Q = !T.isPlatformEmbedded && !1,
    q = Q
        ? (0, i.jsx)(g.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: X.videoDev,
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
        return (0, i.jsx)(c.Clickable, {
            className: o()(X.overlayBackground, {
                [X.overlayActive]: !r,
                [X.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === Y.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ee,
            children: r
                ? null
                : (0, i.jsx)(R.Z, {
                      className: X.closeContainer,
                      children: (0, i.jsx)(V.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: c.XLargeIcon
                      })
                  })
        });
    }),
    en = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(R.Z, {
                  className: X.closeContainer,
                  children: (0, i.jsx)(V.Z, {
                      onClick: () => u.Z.setInputLocked(!1, (0, L.QF)()),
                      IconComponent: c.LockUnlockedIcon
                  })
              })
            : null;
    });
function ei() {
    if (null != I.Z.getContextMenu()) {
        (0, d.Zy)();
        return;
    }
    u.Z.setInputLocked(!0, (0, L.QF)());
}
function er() {
    u.Z.setFocusedPID(L.Js);
}
function el() {
    u.Z.setFocusedPID(null);
}
function eo(e) {
    let t = z.ZP.isInputLocked((0, L.QF)());
    'alt' === e.key.toLowerCase() && !t && ('keyup' === e.type.toLowerCase() ? y.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }) : 'keydown' === e.type.toLowerCase() && y.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function ea(e) {
    var t, n;
    let { isEmbeddedActivity: l } = e,
        d = (0, G.Z)(),
        {
            locked: g,
            focused: I,
            incompatibleApp: y,
            hasValidResolution: T,
            hasZeroSizeDimension: V,
            keybind: R
        } = (0, a.cj)(
            [z.ZP, N.Z, w.Z, E.Z],
            () => {
                let e = w.Z.windowSize((0, A.ZY)(d)),
                    t = E.Z.getOverlayKeybind();
                return {
                    locked: z.ZP.isInputLocked((0, L.QF)()),
                    focused: z.ZP.isFocused((0, L.QF)()),
                    incompatibleApp: N.Z.incompatibleApp,
                    hasValidResolution: (0, L.Te)(e),
                    hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                    keybind: null != t ? (0, S.BB)(t.shortcut, !0) : '???'
                };
            },
            [d]
        ),
        { analyticsLocations: U } = (0, p.ZP)(m.Z.OVERLAY);
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
                u.Z.overlayReady((0, L.QF)()), d.addEventListener('keydown', eo), d.addEventListener('keyup', eo), Q && (d.document.hasFocus() && u.Z.setFocusedPID(L.Js), d.addEventListener('focus', er), d.addEventListener('blur', el));
            },
            () => {
                d.removeEventListener('keydown', eo), d.removeEventListener('keyup', eo), Q && (d.removeEventListener('focus', er), d.removeEventListener('blur', el));
            }
        ),
        !(function () {
            let e = r.useRef(!1),
                t = (0, W.pL)(),
                n = _.Z.getVoiceChannelId(),
                i = Z.Z.getChannel(n),
                l = null != i ? b.Z.getGuild(i.guild_id) : null,
                o = null != C.Z.getCurrentUserActiveStream(),
                s = null != n,
                c = (0, f.Z)(j.Z) && !o && null != t,
                d = s && null != l && null != n,
                m = (0, v.Ns)(null == t ? void 0 : t.id),
                p = (0, a.e7)([x.Z], () => null != x.Z.getLastFeedFetchDate(H.YN.GAME_PROFILE_FEED));
            r.useEffect(() => {
                var i;
                if (!p || e.current) return;
                (e.current = !0),
                    u.Z.track(Y.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: s,
                        text_widget_connected: !1,
                        overlay_render_method: h.gl[h.gl.OutOfProcess]
                    });
                let r = null !== (i = k.Z.getFocusedPID()) && void 0 !== i ? i : (0, L.QF)();
                if (D.Z.hasChangedRenderMode(r)) return;
                let o = [{ type: B.nc.WELCOME }];
                if (
                    (c && d
                        ? o.push({
                              type: B.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: l
                          })
                        : c &&
                          o.push({
                              type: B.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    m.length > 0)
                ) {
                    let { enabled: e } = O.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        o.push({
                            type: B.nc.CONTENT_INVENTORY,
                            entries: m
                        });
                }
                u.Z.overlayMounted(...o);
            }, [p, m, s, c, d, t, n, l]);
        })(),
        (t = g),
        (n = d),
        r.useEffect(() => {
            if (t) {
                if (((0, s.Ay)(c.POPOUT_MODAL_CONTEXT), n.addEventListener('contextmenu', $, !1), null != J)) {
                    let e = Date.now() - J;
                    u.Z.track(Y.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (J = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', $, !1);
                };
            }
            n.removeEventListener('contextmenu', $, !1), null == J && ((J = Date.now()), u.Z.track(Y.rMx.OVERLAY_UNLOCKED));
        }, [t, n]),
        (0, i.jsx)(p.Gt, {
            value: U,
            children: (0, i.jsx)(c.RedesignIconContextProvider, {
                children:
                    V || y
                        ? null
                        : (0, i.jsx)(c.ThemeProvider, {
                              theme: Y.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: o()(X.overlay, e),
                                      children: [
                                          !l && q,
                                          (0, i.jsx)(et, {
                                              locked: g,
                                              keybind: R,
                                              onClick: ei
                                          }),
                                          T
                                              ? (0, i.jsx)(M.Z, {
                                                    className: o()({
                                                        [X.layoutLocked]: g,
                                                        [X.layoutUnlocked]: !g
                                                    })
                                                })
                                              : g
                                                ? null
                                                : (0, i.jsx)('div', {
                                                      className: X.invalidContainer,
                                                      children: (0, i.jsx)('div', {
                                                          className: X.inactiveContainer,
                                                          children: K.intl.format(K.t.ketnW1, L.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(F.Z, {}),
                                          !l &&
                                              Q &&
                                              (0, i.jsx)(en, {
                                                  locked: g,
                                                  focused: I
                                              }),
                                          (0, i.jsx)(P.Z, {})
                                      ]
                                  })
                          })
            })
        })
    );
}
