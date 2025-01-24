n.d(t, {
    Z: function () {
        return el;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(952265),
    c = n(481060),
    d = n(239091),
    u = n(13245),
    h = n(615287),
    m = n(100527),
    p = n(906732),
    x = n(146282),
    f = n(70097),
    v = n(567409),
    g = n(74299),
    C = n(199902),
    Z = n(592125),
    b = n(430824),
    _ = n(131951),
    j = n(944486),
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
    W = n(388627),
    z = n(319414),
    F = n(561064),
    G = n(987650),
    B = n(501787),
    U = n(981631),
    Y = n(206583),
    H = n(388032),
    K = n(167566);
let X = !T.isPlatformEmbedded && !1,
    Q = X
        ? (0, i.jsx)(f.Z, {
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
    (0, d.jW)(e, async () => {
        let { default: e } = await n.e('17610').then(n.bind(n, 385620));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                layoutId: B.OVERLAY_V3_LAYOUT_ID,
                version: 1
            });
    });
}
let ee = r.memo(function (e) {
        let { keybind: t, onClick: n, locked: r } = e;
        return (0, i.jsx)(c.Clickable, {
            className: l()(K.overlayBackground, {
                [K.overlayActive]: !r,
                [K.overlayLocked]: r
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === U.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: $,
            children: r
                ? null
                : (0, i.jsx)(R.Z, {
                      className: K.closeContainer,
                      children: (0, i.jsx)(V.Z, {
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
            ? (0, i.jsx)(R.Z, {
                  className: K.closeContainer,
                  children: (0, i.jsx)(V.Z, {
                      onClick: () => u.Z.setInputLocked(!1, (0, L.QF)()),
                      IconComponent: c.LockUnlockedIcon
                  })
              })
            : null;
    });
function en() {
    if (null != I.Z.getContextMenu()) {
        (0, d.Zy)();
        return;
    }
    u.Z.setInputLocked(!0, (0, L.QF)());
}
function ei() {
    u.Z.setFocusedPID(L.Js);
}
function er() {
    u.Z.setFocusedPID(null);
}
function eo(e) {
    let t = N.Z.isLocked((0, L.QF)());
    'alt' === e.key.toLowerCase() && !t && ('keyup' === e.type.toLowerCase() ? y.S.dispatch(U.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !0 }) : 'keydown' === e.type.toLowerCase() && y.S.dispatch(U.CkL.OVERLAY_V3_SHOW_WIDGETS, { show: !1 }));
}
function el(e) {
    var t, n;
    let { isEmbeddedActivity: o } = e,
        d = (0, F.Z)(),
        {
            locked: f,
            focused: I,
            incompatibleApp: y,
            hasValidResolution: T,
            hasZeroSizeDimension: V,
            keybind: R
        } = (0, a.cj)([N.Z, w.Z, E.Z], () => {
            let e = w.Z.windowSize((0, A.ZY)(d)),
                t = E.Z.getOverlayKeybind();
            return {
                locked: N.Z.isLocked((0, L.QF)()),
                focused: N.Z.isFocused((0, L.QF)()),
                incompatibleApp: N.Z.incompatibleApp,
                hasValidResolution: (0, L.Te)(e),
                hasZeroSizeDimension: 0 === e.height || 0 === e.width,
                keybind: null != t ? (0, S.BB)(t.shortcut, !0) : '???'
            };
        }),
        { analyticsLocations: B } = (0, p.ZP)(m.Z.OVERLAY);
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
                u.Z.overlayReady((0, L.QF)()), d.addEventListener('keydown', eo), d.addEventListener('keyup', eo), X && (d.document.hasFocus() && u.Z.setFocusedPID(L.Js), d.addEventListener('focus', ei), d.addEventListener('blur', er));
            },
            () => {
                d.removeEventListener('keydown', eo), d.removeEventListener('keyup', eo), X && (d.removeEventListener('focus', ei), d.removeEventListener('blur', er));
            }
        ),
        !(function () {
            let e = r.useRef(!1),
                t = (0, W.pL)(),
                n = j.Z.getVoiceChannelId(),
                i = Z.Z.getChannel(n),
                o = null != i ? b.Z.getGuild(i.guild_id) : null,
                l = null != C.Z.getCurrentUserActiveStream(),
                s = null != n,
                c = (0, g.Z)(_.Z) && !l && null != t,
                d = s && null != o && null != n,
                m = (0, v.Ns)(null == t ? void 0 : t.id),
                p = (0, a.e7)([x.Z], () => null != x.Z.getLastFeedFetchDate(Y.YN.GAME_PROFILE_FEED));
            r.useEffect(() => {
                var i;
                if (!p || e.current) return;
                (e.current = !0),
                    u.Z.track(U.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: s,
                        text_widget_connected: !1,
                        overlay_render_method: h.gl[h.gl.OutOfProcess]
                    });
                let r = null !== (i = k.Z.getFocusedPID()) && void 0 !== i ? i : (0, L.QF)();
                if (D.Z.hasChangedRenderMode(r)) return;
                let l = [{ type: G.nc.WELCOME }];
                if (
                    (c && d
                        ? l.push({
                              type: G.nc.GO_LIVE_VOICE,
                              game: t,
                              voiceChannelId: n,
                              voiceGuild: o
                          })
                        : c &&
                          l.push({
                              type: G.nc.GO_LIVE_NON_VOICE,
                              game: t
                          }),
                    m.length > 0)
                ) {
                    let { enabled: e } = O.Z.getCurrentConfig({ location: 'Overlay' }, { autoTrackExposure: !0 });
                    e &&
                        l.push({
                            type: G.nc.CONTENT_INVENTORY,
                            entries: m
                        });
                }
                u.Z.overlayMounted(...l);
            }, [p, m, s, c, d, t, n, o]);
        })(),
        (t = f),
        (n = d),
        r.useEffect(() => {
            if (t) {
                if (((0, s.Ay)(c.POPOUT_MODAL_CONTEXT), n.addEventListener('contextmenu', J, !1), null != q)) {
                    let e = Date.now() - q;
                    u.Z.track(U.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (q = null);
                }
                return () => {
                    n.removeEventListener('contextmenu', J, !1);
                };
            }
            n.removeEventListener('contextmenu', J, !1), null == q && ((q = Date.now()), u.Z.track(U.rMx.OVERLAY_UNLOCKED));
        }, [t, n]),
        (0, i.jsx)(p.Gt, {
            value: B,
            children: (0, i.jsx)(c.RedesignIconContextProvider, {
                children:
                    V || y
                        ? null
                        : (0, i.jsx)(c.ThemeProvider, {
                              theme: U.BRd.DARK,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(K.overlay, e),
                                      children: [
                                          !o && Q,
                                          (0, i.jsx)(ee, {
                                              locked: f,
                                              keybind: R,
                                              onClick: en
                                          }),
                                          T
                                              ? (0, i.jsx)(M.Z, {
                                                    className: l()({
                                                        [K.layoutLocked]: f,
                                                        [K.layoutUnlocked]: !f
                                                    })
                                                })
                                              : f
                                                ? null
                                                : (0, i.jsx)('div', {
                                                      className: K.invalidContainer,
                                                      children: (0, i.jsx)('div', {
                                                          className: K.inactiveContainer,
                                                          children: H.intl.format(H.t.ketnW1, L.FW)
                                                      })
                                                  }),
                                          (0, i.jsx)(z.Z, {}),
                                          !o &&
                                              X &&
                                              (0, i.jsx)(et, {
                                                  locked: f,
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
