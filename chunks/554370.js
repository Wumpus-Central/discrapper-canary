n.d(t, { Z: () => ed }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(952265),
    d = n(481060),
    u = n(239091),
    c = n(13245),
    h = n(615287),
    _ = n(100527),
    p = n(906732),
    f = n(146282),
    m = n(70097),
    g = n(567409),
    v = n(74299),
    E = n(199902),
    x = n(592125),
    I = n(430824),
    C = n(355863),
    S = n(131951),
    Z = n(944486),
    y = n(556296),
    O = n(808506),
    N = n(237997),
    b = n(451478),
    T = n(585483),
    w = n(358085),
    A = n(13140),
    j = n(145597),
    k = n(830917),
    R = n(86071),
    L = n(32300),
    D = n(681603),
    P = n(915614),
    M = n(268861),
    z = n(690336),
    V = n(333031),
    W = n(371651),
    U = n(610394),
    F = n(388627),
    B = n(319414),
    G = n(561064),
    H = n(987650),
    Y = n(501787),
    Q = n(981631),
    K = n(206583),
    X = n(388032),
    J = n(470102);
let q = !w.isPlatformEmbedded && !1,
    $ = q
        ? (0, i.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: J.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    ee = null;
function et(e) {
    e.preventDefault();
}
function en(e) {
    (0, u.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: Y.OVERLAY_V3_LAYOUT_ID,
                version: 1
            });
    });
}
let ei = l.memo(function (e) {
        let { keybind: t, onClick: n, locked: l } = e;
        return (0, i.jsx)(d.P3F, {
            className: o()(J.overlayBackground, {
                [J.overlayActive]: !l,
                [J.overlayLocked]: l
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: l } = e;
                l === Q.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: en,
            children: l
                ? null
                : (0, i.jsx)(V.Z, {
                      className: J.closeContainer,
                      children: (0, i.jsx)(P.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: d.Uz9
                      })
                  })
        });
    }),
    el = l.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(V.Z, {
                  className: J.closeContainer,
                  children: (0, i.jsx)(P.Z, {
                      onClick: () => c.Z.setInputLocked(!1, (0, j.QF)()),
                      IconComponent: d.d$P
                  })
              })
            : null;
    });
function er() {
    c.Z.setInputLocked(!0, (0, j.QF)());
}
function eo() {
    c.Z.setFocusedPID(j.Js);
}
function ea() {
    c.Z.setFocusedPID(null);
}
function es(e) {
    let t = U.ZP.isInputLocked((0, j.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? T.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }) : 'keydown' === e.type.toLowerCase() && T.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function ed(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, G.Z)(),
        {
            locked: r,
            focused: u,
            incompatibleApp: m,
            hasValidResolution: T,
            hasZeroSizeDimension: w,
            keybind: P
        } = (0, a.cj)(
            [U.ZP, N.Z, b.Z, y.ZP],
            () => {
                let e = b.Z.windowSize((0, k.ZY)(n)),
                    t = y.ZP.getOverlayKeybind(),
                    i = (0, j.QF)();
                return {
                    locked: U.ZP.isInputLocked(i),
                    focused: i === j.Js ? N.Z.isFocused(i) : U.ZP.isFocused((0, j.QF)()),
                    incompatibleApp: N.Z.incompatibleApp,
                    hasValidResolution: (0, j.Te)(e),
                    hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                    keybind: null != t ? (0, A.BB)(t.shortcut, !0) : '???'
                };
            },
            [n]
        ),
        { analyticsLocations: V } = (0, p.ZP)(_.Z.OVERLAY);
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
                c.Z.overlayReady((0, j.QF)()), n.addEventListener('keydown', es), n.addEventListener('keyup', es), q && (n.document.hasFocus() && c.Z.setFocusedPID(j.Js), n.addEventListener('focus', eo), n.addEventListener('blur', ea));
            },
            () => {
                n.removeEventListener('keydown', es), n.removeEventListener('keyup', es), q && (n.removeEventListener('focus', eo), n.removeEventListener('blur', ea));
            }
        ),
        !(function () {
            let e = l.useRef(!1),
                t = (0, F.pL)(),
                n = Z.Z.getVoiceChannelId(),
                i = x.Z.getChannel(n),
                r = null != i ? I.Z.getGuild(i.guild_id) : null,
                o = null != E.Z.getCurrentUserActiveStream(),
                s = null != n,
                d = (0, v.Z)(S.Z) && !o && null != t,
                u = s && null != r && null != n,
                _ = (0, g.Ns)(null == t ? void 0 : t.id),
                p = (0, a.e7)([f.Z], () => null != f.Z.getLastFeedFetchDate(K.YN.GAME_PROFILE_FEED)),
                m = (0, L.o4)('overlay');
            l.useEffect(() => {
                var i;
                if (!p || e.current) return;
                e.current = !0;
                let l = null !== (i = O.Z.getFocusedPID()) && void 0 !== i ? i : (0, j.QF)();
                if (
                    (c.Z.track(Q.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: s,
                        text_widget_connected: !1,
                        overlay_render_method: h.gl[W.default.getOverlayMethod(l)],
                        unpinned_widget_types: C.Z.getAllUnpinnedPinnedWidgets(Y.OVERLAY_V3_LAYOUT_ID)
                    }),
                    W.default.hasChangedRenderMode(l))
                )
                    return;
                let o = [{ type: H.nc.WELCOME }];
                if (
                    (d && u
                        ? o.push({
                              type: H.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: r
                          })
                        : d &&
                          o.push({
                              type: H.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    _.length > 0)
                ) {
                    let { enabled: e } = R.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    (e || m.allowActivityWidget) &&
                        o.push({
                            type: H.nc.CONTENT_INVENTORY,
                            entries: _
                        });
                }
                c.Z.overlayMounted(...o);
            }, [p, _, s, d, u, t, n, r, m]);
        })(),
        l.useEffect(() => {
            if (r) {
                if (((0, s.Ay)(d.u1M), n.addEventListener('contextmenu', et, !1), null != ee)) {
                    let e = Date.now() - ee;
                    c.Z.track(Q.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ee = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', et, !1);
                };
            }
            n.removeEventListener('contextmenu', et, !1), null == ee && ((ee = Date.now()), c.Z.track(Q.rMx.OVERLAY_UNLOCKED));
        }, [r, n]),
        (0, i.jsx)(p.Gt, {
            value: V,
            children: (0, i.jsx)(d.vWI, {
                children:
                    w || m
                        ? null
                        : (0, i.jsx)(d.f6W, {
                              theme: Q.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: o()(J.overlay, e),
                                      children: [
                                          !t && $,
                                          (0, i.jsx)(ei, {
                                              locked: r,
                                              keybind: P,
                                              onClick: er
                                          }),
                                          T
                                              ? (0, i.jsx)(z.Z, {
                                                    className: o()({
                                                        [J.layoutLocked]: r,
                                                        [J.layoutUnlocked]: !r
                                                    })
                                                })
                                              : r
                                                ? null
                                                : (0, i.jsx)('div', {
                                                      className: J.invalidContainer,
                                                      children: (0, i.jsx)('div', {
                                                          className: J.inactiveContainer,
                                                          children: X.intl.format(X.t.ketnW1, j.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(B.Z, {}),
                                          !t &&
                                              q &&
                                              (0, i.jsx)(el, {
                                                  locked: r,
                                                  focused: u
                                              }),
                                          (0, i.jsx)(D.Z, {}),
                                          (0, i.jsx)(M.Z, { locked: r })
                                      ]
                                  })
                          })
            })
        })
    );
}
