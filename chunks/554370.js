n.d(t, { Z: () => eu }), n(653041), n(47120);
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
    y = n(574254),
    O = n(556296),
    N = n(808506),
    b = n(237997),
    T = n(451478),
    w = n(585483),
    A = n(358085),
    j = n(13140),
    k = n(145597),
    R = n(830917),
    L = n(86071),
    D = n(32300),
    P = n(681603),
    M = n(915614),
    z = n(268861),
    V = n(690336),
    W = n(333031),
    U = n(371651),
    F = n(610394),
    B = n(388627),
    G = n(319414),
    H = n(561064),
    Y = n(987650),
    Q = n(501787),
    K = n(981631),
    X = n(206583),
    J = n(388032),
    q = n(470102);
let $ = !A.isPlatformEmbedded && !1,
    ee = $
        ? (0, i.jsx)(m.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: q.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    et = null;
function en(e) {
    e.preventDefault();
}
function ei(e) {
    (0, u.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: Q.OVERLAY_V3_LAYOUT_ID,
                version: 1
            });
    });
}
let el = l.memo(function (e) {
        let { keybind: t, onClick: n, locked: l } = e;
        return (0, i.jsx)(d.P3F, {
            className: o()(q.overlayBackground, {
                [q.overlayActive]: !l,
                [q.overlayLocked]: l
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: l } = e;
                l === K.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ei,
            children: l
                ? null
                : (0, i.jsx)(W.Z, {
                      className: q.closeContainer,
                      children: (0, i.jsx)(M.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: d.Uz9
                      })
                  })
        });
    }),
    er = l.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(W.Z, {
                  className: q.closeContainer,
                  children: (0, i.jsx)(M.Z, {
                      onClick: () => c.Z.setInputLocked(!1, (0, k.QF)()),
                      IconComponent: d.d$P
                  })
              })
            : null;
    });
function eo() {
    if (null != y.Z.getContextMenu()) {
        (0, u.Zy)();
        return;
    }
    c.Z.setInputLocked(!0, (0, k.QF)());
}
function ea() {
    c.Z.setFocusedPID(k.Js);
}
function es() {
    c.Z.setFocusedPID(null);
}
function ed(e) {
    let t = F.ZP.isInputLocked((0, k.QF)());
    'alt' !== e.key.toLowerCase() || t || ('keyup' === e.type.toLowerCase() ? w.S.dispatch(K.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }) : 'keydown' === e.type.toLowerCase() && w.S.dispatch(K.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function eu(e) {
    let { isEmbeddedActivity: t } = e,
        n = (0, H.Z)(),
        {
            locked: r,
            focused: u,
            incompatibleApp: m,
            hasValidResolution: y,
            hasZeroSizeDimension: w,
            keybind: A
        } = (0, a.cj)(
            [F.ZP, b.Z, T.Z, O.ZP],
            () => {
                let e = T.Z.windowSize((0, R.ZY)(n)),
                    t = O.ZP.getOverlayKeybind(),
                    i = (0, k.QF)();
                return {
                    locked: F.ZP.isInputLocked(i),
                    focused: i === k.Js ? b.Z.isFocused(i) : F.ZP.isFocused((0, k.QF)()),
                    incompatibleApp: b.Z.incompatibleApp,
                    hasValidResolution: (0, k.Te)(e),
                    hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                    keybind: null != t ? (0, j.BB)(t.shortcut, !0) : '???'
                };
            },
            [n]
        ),
        { analyticsLocations: M } = (0, p.ZP)(_.Z.OVERLAY);
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
                c.Z.overlayReady((0, k.QF)()), n.addEventListener('keydown', ed), n.addEventListener('keyup', ed), $ && (n.document.hasFocus() && c.Z.setFocusedPID(k.Js), n.addEventListener('focus', ea), n.addEventListener('blur', es));
            },
            () => {
                n.removeEventListener('keydown', ed), n.removeEventListener('keyup', ed), $ && (n.removeEventListener('focus', ea), n.removeEventListener('blur', es));
            }
        ),
        !(function () {
            let e = l.useRef(!1),
                t = (0, B.pL)(),
                n = Z.Z.getVoiceChannelId(),
                i = x.Z.getChannel(n),
                r = null != i ? I.Z.getGuild(i.guild_id) : null,
                o = null != E.Z.getCurrentUserActiveStream(),
                s = null != n,
                d = (0, v.Z)(S.Z) && !o && null != t,
                u = s && null != r && null != n,
                _ = (0, g.Ns)(null == t ? void 0 : t.id),
                p = (0, a.e7)([f.Z], () => null != f.Z.getLastFeedFetchDate(X.YN.GAME_PROFILE_FEED)),
                m = (0, D.o4)('overlay');
            l.useEffect(() => {
                var i;
                if (!p || e.current) return;
                e.current = !0;
                let l = null !== (i = N.Z.getFocusedPID()) && void 0 !== i ? i : (0, k.QF)();
                if (
                    (c.Z.track(K.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: s,
                        text_widget_connected: !1,
                        overlay_render_method: h.gl[U.default.getOverlayMethod(l)],
                        unpinned_widget_types: C.Z.getAllUnpinnedPinnedWidgets(Q.OVERLAY_V3_LAYOUT_ID)
                    }),
                    U.default.hasChangedRenderMode(l))
                )
                    return;
                let o = [{ type: Y.nc.WELCOME }];
                if (
                    (d && u
                        ? o.push({
                              type: Y.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: r
                          })
                        : d &&
                          o.push({
                              type: Y.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    _.length > 0)
                ) {
                    let { enabled: e } = L.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    (e || m.allowActivityWidget) &&
                        o.push({
                            type: Y.nc.CONTENT_INVENTORY,
                            entries: _
                        });
                }
                c.Z.overlayMounted(...o);
            }, [p, _, s, d, u, t, n, r, m]);
        })(),
        l.useEffect(() => {
            if (r) {
                if (((0, s.Ay)(d.u1M), n.addEventListener('contextmenu', en, !1), null != et)) {
                    let e = Date.now() - et;
                    c.Z.track(K.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (et = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', en, !1);
                };
            }
            n.removeEventListener('contextmenu', en, !1), null == et && ((et = Date.now()), c.Z.track(K.rMx.OVERLAY_UNLOCKED));
        }, [r, n]),
        (0, i.jsx)(p.Gt, {
            value: M,
            children: (0, i.jsx)(d.vWI, {
                children:
                    w || m
                        ? null
                        : (0, i.jsx)(d.f6W, {
                              theme: K.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: o()(q.overlay, e),
                                      children: [
                                          !t && ee,
                                          (0, i.jsx)(el, {
                                              locked: r,
                                              keybind: A,
                                              onClick: eo
                                          }),
                                          y
                                              ? (0, i.jsx)(V.Z, {
                                                    className: o()({
                                                        [q.layoutLocked]: r,
                                                        [q.layoutUnlocked]: !r
                                                    })
                                                })
                                              : r
                                                ? null
                                                : (0, i.jsx)('div', {
                                                      className: q.invalidContainer,
                                                      children: (0, i.jsx)('div', {
                                                          className: q.inactiveContainer,
                                                          children: J.intl.format(J.t.ketnW1, k.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(G.Z, {}),
                                          !t &&
                                              $ &&
                                              (0, i.jsx)(er, {
                                                  locked: r,
                                                  focused: u
                                              }),
                                          (0, i.jsx)(P.Z, {}),
                                          (0, i.jsx)(z.Z, { locked: r })
                                      ]
                                  })
                          })
            })
        })
    );
}
