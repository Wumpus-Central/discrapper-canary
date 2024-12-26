n.d(t, {
    Z: function () {
        return eo;
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
    u = n(239091),
    d = n(13245),
    h = n(615287),
    f = n(100527),
    m = n(906732),
    v = n(146282),
    p = n(70097),
    x = n(567409),
    g = n(74299),
    C = n(199902),
    Z = n(592125),
    I = n(430824),
    _ = n(131951),
    j = n(944486),
    E = n(574254),
    b = n(556296),
    w = n(808506),
    N = n(237997),
    k = n(451478),
    L = n(585483),
    S = n(358085),
    y = n(13140),
    T = n(145597),
    A = n(830917),
    O = n(86071),
    V = n(681603),
    M = n(915614),
    P = n(690336),
    z = n(333031),
    R = n(371651),
    D = n(388627),
    W = n(319414),
    U = n(561064),
    F = n(987650),
    G = n(501787),
    B = n(981631),
    Y = n(206583),
    H = n(388032),
    K = n(167566);
let X = !S.isPlatformEmbedded && !1,
    Q = X
        ? (0, i.jsx)(p.Z, {
              src: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4',
              className: K.videoDev,
              autoPlay: !0,
              loop: !0,
              muted: !0
          })
        : null,
    q = null;
function J(e) {
    e.preventDefault();
}
function $(e) {
    (0, u.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: G.OVERLAY_V3_LAYOUT_ID,
                version: 1
            });
    });
}
let ee = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(c.Clickable, {
            className: o()(K.overlayBackground, {
                [K.overlayActive]: !r,
                [K.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === B.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: r
                ? null
                : (0, i.jsx)(z.Z, {
                      className: K.closeContainer,
                      children: (0, i.jsx)(M.Z, {
                          keybind: t,
                          onClick: n,
                          IconComponent: c.XLargeIcon
                      })
                  })
        });
    }),
    et = r.memo(function (e) {
        let { locked: t, focused: n } = e;
        return t && n
            ? (0, i.jsx)(z.Z, {
                  className: K.closeContainer,
                  children: (0, i.jsx)(M.Z, {
                      onClick: () => d.Z.setInputLocked(!1, (0, T.QF)()),
                      IconComponent: c.LockUnlockedIcon
                  })
              })
            : null;
    });
function en() {
    if (null != E.Z.getContextMenu()) {
        (0, u.Zy)();
        return;
    }
    d.Z.setInputLocked(!0, (0, T.QF)());
}
function ei() {
    d.Z.setFocusedPID(T.Js);
}
function er() {
    d.Z.setFocusedPID(null);
}
function el(e) {
    let t = N.Z.isLocked((0, T.QF)());
    'alt' === e.key.toLowerCase() && !t && ('keyup' === e.type.toLowerCase() ? L.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }) : 'keydown' === e.type.toLowerCase() && L.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }));
}
function eo(e) {
    var t, n;
    let { isEmbeddedActivity: l } = e,
        u = (0, U.Z)(),
        {
            locked: p,
            focused: E,
            incompatibleApp: L,
            hasValidResolution: S,
            hasZeroSizeDimension: M,
            keybind: z
        } = (0, a.cj)([N.Z, k.Z, b.Z], () => {
            let e = k.Z.windowSize((0, A.ZY)(u)),
                t = b.Z.getOverlayKeybind();
            return {
                locked: N.Z.isLocked((0, T.QF)()),
                focused: N.Z.isFocused((0, T.QF)()),
                incompatibleApp: N.Z.incompatibleApp,
                hasValidResolution: (0, T.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, y.BB)(t.shortcut, !0) : '???'
            };
        }),
        { analyticsLocations: G } = (0, m.ZP)(f.Z.OVERLAY);
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
                d.Z.overlayReady((0, T.QF)()), u.addEventListener('keydown', el), u.addEventListener('keyup', el), X && (u.document.hasFocus() && d.Z.setFocusedPID(T.Js), u.addEventListener('focus', ei), u.addEventListener('blur', er));
            },
            () => {
                u.removeEventListener('keydown', el), u.removeEventListener('keyup', el), X && (u.removeEventListener('focus', ei), u.removeEventListener('blur', er));
            }
        ),
        !(function () {
            let e = r.useRef(!1),
                t = (0, D.pL)(),
                n = j.Z.getVoiceChannelId(),
                i = Z.Z.getChannel(n),
                l = null != i ? I.Z.getGuild(i.guild_id) : null,
                o = null != C.Z.getCurrentUserActiveStream(),
                s = null != n,
                c = (0, g.Z)(_.Z) && !o && null != t,
                u = s && null != l && null != n,
                f = (0, x.Ns)(null == t ? void 0 : t.id),
                m = (0, a.e7)([v.Z], () => null != v.Z.getLastFeedFetchDate(Y.YN.GAME_PROFILE_FEED));
            r.useEffect(() => {
                var i;
                if (!m || e.current) return;
                (e.current = !0),
                    d.Z.track(B.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: s,
                        text_widget_connected: !1,
                        overlay_render_method: h.gl[h.gl.OutOfProcess]
                    });
                let r = null !== (i = w.Z.getFocusedPID()) && void 0 !== i ? i : (0, T.QF)();
                if (R.Z.hasChangedRenderMode(r)) return;
                let o = [{ type: F.nc.WELCOME }];
                if (
                    (c && u
                        ? o.push({
                              type: F.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: l
                          })
                        : c &&
                          o.push({
                              type: F.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    f.length > 0)
                ) {
                    let { enabled: e } = O.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        o.push({
                            type: F.nc.CONTENT_INVENTORY,
                            entries: f
                        });
                }
                d.Z.overlayMounted(...o);
            }, [m, f, s, c, u, t, n, l]);
        })(),
        (t = p),
        (n = u),
        r.useEffect(() => {
            if (t) {
                if (((0, s.Ay)(c.POPOUT_MODAL_CONTEXT), n.addEventListener('contextmenu', J, !1), null != q)) {
                    let e = Date.now() - q;
                    d.Z.track(B.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (q = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', J, !1);
                };
            }
            n.removeEventListener('contextmenu', J, !1), null == q && ((q = Date.now()), d.Z.track(B.rMx.OVERLAY_UNLOCKED));
        }, [t, n]),
        (0, i.jsx)(m.Gt, {
            value: G,
            children: (0, i.jsx)(c.RedesignIconContextProvider, {
                children:
                    M || L
                        ? null
                        : (0, i.jsx)(c.ThemeProvider, {
                              theme: B.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: o()(K.overlay, e),
                                      children: [
                                          !l && Q,
                                          (0, i.jsx)(ee, {
                                              locked: p,
                                              keybind: z,
                                              onClick: en
                                          }),
                                          S
                                              ? (0, i.jsx)(P.Z, {
                                                    className: o()({
                                                        [K.layoutLocked]: p,
                                                        [K.layoutUnlocked]: !p
                                                    })
                                                })
                                              : p
                                                ? null
                                                : (0, i.jsx)('div', {
                                                      className: K.invalidContainer,
                                                      children: (0, i.jsx)('div', {
                                                          className: K.inactiveContainer,
                                                          children: H.intl.format(H.t.ketnW1, T.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(W.Z, {}),
                                          !l &&
                                              X &&
                                              (0, i.jsx)(et, {
                                                  locked: p,
                                                  focused: E
                                              }),
                                          (0, i.jsx)(V.Z, {})
                                      ]
                                  })
                          })
            })
        })
    );
}
